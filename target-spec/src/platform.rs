// Copyright (c) The cargo-guppy Contributors
// SPDX-License-Identifier: MIT OR Apache-2.0

use crate::Error;
use cfg_expr::targets::get_builtin_target_by_triple;
use custom_platforms::TargetInfo;
use std::collections::HashSet;

// This is generated by the build script.
include!(concat!(env!("OUT_DIR"), "/current_platform.rs"));

/// Support for creating custom platforms.
///
/// This module re-exports parts of the `cfg_expr` dependency to allow creating platforms unknown to
/// `rustc` by default.
pub mod custom_platforms {
    #[doc(inline)]
    pub use cfg_expr::targets::{Arch, Endian, Env, Family, Os, TargetInfo, Vendor};
}

/// A platform to evaluate target specs against.
#[derive(Clone, Debug)]
pub struct Platform<'a> {
    target_info: &'a TargetInfo<'a>,
    target_features: TargetFeatures<'a>,
    flags: HashSet<&'a str>,
}

impl<'a> Platform<'a> {
    /// Creates a new `Platform` from the given built-in triple and target features.
    ///
    /// Returns `None` if this platform wasn't known to `target-spec`.
    pub fn new(
        triple: impl AsRef<str>,
        target_features: TargetFeatures<'a>,
    ) -> Result<Self, Error> {
        let triple = triple.as_ref();
        Ok(Self {
            target_info: get_builtin_target_by_triple(triple)
                .ok_or_else(|| Error::UnknownPlatformTriple(triple.to_string()))?,
            target_features,
            flags: HashSet::new(),
        })
    }

    /// Creates a new, custom platform from a `TargetInfo` and target features.
    ///
    /// Custom platforms are often found in embedded and similar environments. For built-in
    /// platforms, `new` is recommended instead.
    pub fn custom(target_info: &'a TargetInfo<'a>, target_features: TargetFeatures<'a>) -> Self {
        Self {
            target_info,
            target_features,
            flags: HashSet::new(),
        }
    }

    /// Adds a set of flags to accept.
    ///
    /// A flag is a single token like the `foo` in `cfg(not(foo))`.
    ///
    /// A default `cargo build` will always evaluate flags to false, but custom wrappers may cause
    /// some flags to evaluate to true. For example, as of version 0.6, `cargo web build` will cause
    /// `cargo_web` to evaluate to true.
    pub fn add_flags(&mut self, flags: &[&'a str]) {
        self.flags.extend(flags);
    }

    /// Returns the target triple for this platform.
    pub fn triple(&self) -> &'a str {
        self.target_info.triple
    }

    /// Returns true if this flag was set with `add_flags`.
    pub fn has_flag(&self, flag: impl AsRef<str>) -> bool {
        self.flags.contains(flag.as_ref())
    }

    /// Returns the underlying `TargetInfo`.
    pub fn target_info(&self) -> &'a TargetInfo<'a> {
        self.target_info
    }

    /// Returns the set of target features for this platform.
    pub fn target_features(&self) -> &TargetFeatures<'a> {
        &self.target_features
    }
}

impl Platform<'static> {
    /// Returns the current platform, as detected at build time.
    ///
    /// This will return `None` if the current platform was unknown to this version of
    /// `target-spec`.
    pub fn current() -> Option<Self> {
        let target_info = get_builtin_target_by_triple(CURRENT_TARGET)?;
        let target_features = TargetFeatures::features(CURRENT_TARGET_FEATURES);
        Some(Self {
            target_info,
            target_features,
            flags: HashSet::new(),
        })
    }
}

/// A set of target features to match.
#[derive(Clone, Debug)]
#[non_exhaustive]
pub enum TargetFeatures<'a> {
    /// The target features are unknown.
    Unknown,
    /// Only match the specified features.
    Features(HashSet<&'a str>),
    /// Match all features.
    All,
}

impl<'a> TargetFeatures<'a> {
    /// Creates a new `TargetFeatures` which matches some features.
    pub fn features(features: &[&'a str]) -> Self {
        TargetFeatures::Features(features.iter().copied().collect())
    }

    /// Creates a new `TargetFeatures` which doesn't match any features.
    pub fn none() -> Self {
        TargetFeatures::Features(HashSet::new())
    }

    /// Returns `Some(true)` if this feature is a match, `Some(false)` if it isn't, and `None` if
    /// the set of target features is unknown.
    pub fn matches(&self, feature: &str) -> Option<bool> {
        match self {
            TargetFeatures::Unknown => None,
            TargetFeatures::Features(features) => Some(features.contains(feature)),
            TargetFeatures::All => Some(true),
        }
    }
}
