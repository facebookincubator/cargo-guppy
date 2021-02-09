(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl&lt;'a&gt; Add&lt;&amp;'a AsciiStr&gt; for AsciiString","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Add&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Add&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl Add&lt;TimeSpec&gt; for TimeSpec","synthetic":false,"types":[]},{"text":"impl Add&lt;TimeVal&gt; for TimeVal","synthetic":false,"types":[]}];
implementors["proptest"] = [{"text":"impl Add&lt;usize&gt; for SizeRange","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Add&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Timespec","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for SteadyTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Tm","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()