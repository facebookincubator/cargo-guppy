use super::fixtures::{self, Fixture};
use crate::graph::{DependencyLink, DotWrite, PackageDotVisitor, PackageMetadata};
use cargo_metadata::PackageId;
use std::fmt::{self, Write};
use std::iter;

// Test specific details extracted from metadata1.json.
#[test]
fn metadata1() {
    let metadata1 = Fixture::metadata1();
    metadata1.verify();

    let graph = metadata1.graph();
    let mut root_deps: Vec<_> = graph
        .dep_links(&PackageId {
            repr: fixtures::METADATA1_TESTCRATE.into(),
        })
        .expect("root crate deps should exist")
        .collect();

    assert_eq!(root_deps.len(), 1, "the root crate has one dependency");
    let dep = root_deps.pop().expect("the root crate has one dependency");
    // XXX test for details of dependency edges as well?
    assert!(dep.edge.normal().is_some(), "normal dependency is defined");
    assert!(dep.edge.build().is_some(), "build dependency is defined");
    assert!(dep.edge.dev().is_some(), "dev dependency is defined");

    // Print out dot graphs for small subgraphs.
    static EXPECTED_DOT: &str = r#"digraph {
    0 [label="winapi-x86_64-pc-windows-gnu"]
    11 [label="mach"]
    13 [label="winapi"]
    14 [label="libc"]
    20 [label="winapi-i686-pc-windows-gnu"]
    31 [label="bitflags"]
    11 -> 14 [label="libc"]
    13 -> 20 [label="winapi-i686-pc-windows-gnu"]
    13 -> 0 [label="winapi-x86_64-pc-windows-gnu"]
}
"#;
    assert_eq!(
        EXPECTED_DOT,
        format!(
            "{}",
            graph
                .make_dot_reachable(
                    iter::once(&fixtures::package_id(fixtures::METADATA1_REGION)),
                    NameVisitor
                )
                .unwrap()
        ),
        "dot output matches"
    );

    // For reverse reachable ensure that the arrows are in the correct direction.
    static EXPECTED_DOT_REVERSED: &str = r#"digraph {
    1 [label="datatest"]
    9 [label="serde_yaml"]
    18 [label="testcrate"]
    1 -> 9 [label="serde_yaml"]
    18 -> 1 [label="datatest"]
}
"#;
    assert_eq!(
        EXPECTED_DOT_REVERSED,
        format!(
            "{}",
            graph
                .make_dot_reachable_reversed(
                    iter::once(&fixtures::package_id(fixtures::METADATA1_DTOA)),
                    NameVisitor
                )
                .unwrap()
        ),
        "reversed dot output matches"
    );
}

#[test]
fn metadata2() {
    let metadata2 = Fixture::metadata2();
    metadata2.verify();
}

#[test]
fn metadata_libra() {
    let metadata_libra = Fixture::metadata_libra();
    metadata_libra.verify();

    let graph = metadata_libra.graph();
    println!(
        "{}",
        graph
            .make_dot_reachable_reversed(graph.workspace().members().map(|(_, id)| id), NameVisitor)
            .unwrap()
    );
}

struct NameVisitor;

impl PackageDotVisitor for NameVisitor {
    fn visit_package(&self, package: &PackageMetadata, mut f: DotWrite<'_, '_>) -> fmt::Result {
        write!(f, "{}", package.name())
    }

    fn visit_link(&self, link: DependencyLink<'_>, mut f: DotWrite<'_, '_>) -> fmt::Result {
        write!(f, "{}", link.edge.dep_name())
    }
}
