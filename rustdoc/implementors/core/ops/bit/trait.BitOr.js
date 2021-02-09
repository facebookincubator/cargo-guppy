(function() {var implementors = {};
implementors["fixedbitset"] = [{"text":"impl&lt;'a&gt; BitOr&lt;&amp;'a FixedBitSet&gt; for &amp;'a FixedBitSet","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, '_, '_&gt; BitOr&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2, '_, '_&gt; BitOr&lt;&amp;'_ IndexSet&lt;T, S2&gt;&gt; for &amp;'_ IndexSet&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl BitOr&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl BitOr&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl BitOr&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl BitOr&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl BitOr&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["pest"] = [{"text":"impl&lt;R:&nbsp;RuleType&gt; BitOr&lt;Operator&lt;R&gt;&gt; for Operator&lt;R&gt;","synthetic":false,"types":[]}];
implementors["proptest"] = [{"text":"impl BitOr&lt;Any&gt; for Any","synthetic":false,"types":[]},{"text":"impl BitOr&lt;Any&gt; for Any","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()