(function() {var type_impls = {
"uom":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+f32%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><a href=\"#impl-FromStr-for-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+f32%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for <a class=\"type\" href=\"uom/si/electric_charge/type.ElectricCharge.html\" title=\"type uom::si::electric_charge::ElectricCharge\">ElectricCharge</a>&lt;U, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.f32.html\">f32</a>&gt;<div class=\"where\">where\n    U: <a class=\"trait\" href=\"uom/si/trait.Units.html\" title=\"trait uom::si::Units\">Units</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.f32.html\">f32</a>&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = <a class=\"enum\" href=\"uom/str/enum.ParseQuantityError.html\" title=\"enum uom::str::ParseQuantityError\">ParseQuantityError</a></h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" title=\"type core::str::traits::FromStr::Err\">Err</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","uom::si::quantities::ElectricCharge","uom::si::f32::ElectricCharge"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+f64%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><a href=\"#impl-FromStr-for-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+f64%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for <a class=\"type\" href=\"uom/si/electric_charge/type.ElectricCharge.html\" title=\"type uom::si::electric_charge::ElectricCharge\">ElectricCharge</a>&lt;U, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.f64.html\">f64</a>&gt;<div class=\"where\">where\n    U: <a class=\"trait\" href=\"uom/si/trait.Units.html\" title=\"trait uom::si::Units\">Units</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.f64.html\">f64</a>&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = <a class=\"enum\" href=\"uom/str/enum.ParseQuantityError.html\" title=\"enum uom::str::ParseQuantityError\">ParseQuantityError</a></h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" title=\"type core::str::traits::FromStr::Err\">Err</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/1.80.0/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","uom::si::quantities::ElectricCharge","uom::si::f64::ElectricCharge"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><a href=\"#impl-Quantity%3Cdyn+Dimension%3CI+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+J+=+Z0,+Kind+=+dyn+Kind,+L+=+Z0,+M+=+Z0,+N+=+Z0,+T+=+PInt%3CUInt%3CUTerm,+B1%3E%3E,+Th+=+Z0%3E,+U,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;U, V&gt; <a class=\"type\" href=\"uom/si/electric_charge/type.ElectricCharge.html\" title=\"type uom::si::electric_charge::ElectricCharge\">ElectricCharge</a>&lt;U, V&gt;<div class=\"where\">where\n    U: <a class=\"trait\" href=\"uom/si/trait.Units.html\" title=\"trait uom::si::Units\">Units</a>&lt;V&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    V: <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.new\" class=\"fn\">new</a>&lt;N&gt;(v: V) -&gt; Self<div class=\"where\">where\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Create a new quantity from the given value and measurement unit.</p>\n<h6 id=\"generic-parameters\"><a class=\"doc-anchor\" href=\"#generic-parameters\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.get\" class=\"fn\">get</a>&lt;N&gt;(&amp;self) -&gt; V<div class=\"where\">where\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Retrieve the value of the quantity in the given measurement unit.</p>\n<h6 id=\"generic-parameters-1\"><a class=\"doc-anchor\" href=\"#generic-parameters-1\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.floor\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.floor\" class=\"fn\">floor</a>&lt;N&gt;(self) -&gt; Self<div class=\"where\">where\n    V: <a class=\"trait\" href=\"num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a>,\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the largest integer less than or equal to a number in the given\nmeasurement unit.</p>\n<h6 id=\"generic-parameters-2\"><a class=\"doc-anchor\" href=\"#generic-parameters-2\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ceil\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.ceil\" class=\"fn\">ceil</a>&lt;N&gt;(self) -&gt; Self<div class=\"where\">where\n    V: <a class=\"trait\" href=\"num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a>,\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the smallest integer less than or equal to a number in the given\nmeasurement unit.</p>\n<h6 id=\"generic-parameters-3\"><a class=\"doc-anchor\" href=\"#generic-parameters-3\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.round\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.round\" class=\"fn\">round</a>&lt;N&gt;(self) -&gt; Self<div class=\"where\">where\n    V: <a class=\"trait\" href=\"num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a>,\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the nearest integer to a number in the in given measurement unit.\nRound half-way cases away from 0.0.</p>\n<h6 id=\"generic-parameters-4\"><a class=\"doc-anchor\" href=\"#generic-parameters-4\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trunc\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.trunc\" class=\"fn\">trunc</a>&lt;N&gt;(self) -&gt; Self<div class=\"where\">where\n    V: <a class=\"trait\" href=\"num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a>,\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the integer part of a number in the given measurement unit.</p>\n<h6 id=\"generic-parameters-5\"><a class=\"doc-anchor\" href=\"#generic-parameters-5\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fract\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.fract\" class=\"fn\">fract</a>&lt;N&gt;(self) -&gt; Self<div class=\"where\">where\n    V: <a class=\"trait\" href=\"num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a>,\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a> + <a class=\"trait\" href=\"uom/trait.Conversion.html\" title=\"trait uom::Conversion\">Conversion</a>&lt;V, T = V::<a class=\"associatedtype\" href=\"uom/trait.Conversion.html#associatedtype.T\" title=\"type uom::Conversion::T\">T</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the fractional part of a number in the given measurement unit.</p>\n<h6 id=\"generic-parameters-6\"><a class=\"doc-anchor\" href=\"#generic-parameters-6\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.format_args\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.format_args\" class=\"fn\">format_args</a>&lt;N&gt;(_unit: N, style: <a class=\"enum\" href=\"uom/fmt/enum.DisplayStyle.html\" title=\"enum uom::fmt::DisplayStyle\">DisplayStyle</a>) -&gt; <a class=\"struct\" href=\"uom/si/fmt/struct.Arguments.html\" title=\"struct uom::si::fmt::Arguments\">Arguments</a>&lt;<a class=\"type\" href=\"uom/si/electric_charge/type.Dimension.html\" title=\"type uom::si::electric_charge::Dimension\">Dimension</a>, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a>,</div></h4></section></summary><div class=\"docblock\"><p>Creates a struct that can be used to format a compatible quantity for display.</p>\n<h5 id=\"notes\"><a class=\"doc-anchor\" href=\"#notes\">§</a>Notes</h5>\n<p>The return value of this method cannot be used to print directly, but is instead\nused to format quantities and can be reused; see\n<a href=\"../fmt/struct.Arguments.html#method.with\">Arguments::with</a> and the examples below.</p>\n<p>If you do not need to format multiple quantities, consider using\n<a href=\"#method.into_format_args\"><code>into_format_args</code></a> instead.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>t1 = Time::new::&lt;femtosecond&gt;(<span class=\"number\">1.0_E-1</span>);\n<span class=\"kw\">let </span>t2 = Time::new::&lt;picosecond&gt;(<span class=\"number\">1.0_E-1</span>);\n<span class=\"kw\">let </span>a = Time::format_args(femtosecond, Description);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"string\">\"0.1 femtoseconds\"</span>, <span class=\"macro\">format!</span>(<span class=\"string\">\"{}\"</span>, a.with(t1)));\n<span class=\"macro\">assert_eq!</span>(<span class=\"string\">\"100 femtoseconds\"</span>, <span class=\"macro\">format!</span>(<span class=\"string\">\"{}\"</span>, a.with(t2)));</code></pre></div>\n<h6 id=\"generic-parameters-7\"><a class=\"doc-anchor\" href=\"#generic-parameters-7\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_format_args\" class=\"method\"><a class=\"src rightside\" href=\"src/uom/si/electric_charge.rs.html#3-59\">source</a><h4 class=\"code-header\">pub fn <a href=\"uom/si/electric_charge/type.ElectricCharge.html#tymethod.into_format_args\" class=\"fn\">into_format_args</a>&lt;N&gt;(\n    self,\n    _unit: N,\n    style: <a class=\"enum\" href=\"uom/fmt/enum.DisplayStyle.html\" title=\"enum uom::fmt::DisplayStyle\">DisplayStyle</a>,\n) -&gt; <a class=\"struct\" href=\"uom/si/fmt/struct.QuantityArguments.html\" title=\"struct uom::si::fmt::QuantityArguments\">QuantityArguments</a>&lt;<a class=\"type\" href=\"uom/si/electric_charge/type.Dimension.html\" title=\"type uom::si::electric_charge::Dimension\">Dimension</a>, U, V, N&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"uom/si/electric_charge/trait.Unit.html\" title=\"trait uom::si::electric_charge::Unit\">Unit</a>,</div></h4></section></summary><div class=\"docblock\"><p>Creates a struct that formats <code>self</code> for display.</p>\n<h5 id=\"notes-1\"><a class=\"doc-anchor\" href=\"#notes-1\">§</a>Notes</h5>\n<p>Unlike <a href=\"#method.format_args\"><code>format_args</code></a>, the return value of this method can be\nused directly for display. It will format the value of <code>self</code> for the quantity on\nwhich it is called and nothing else.</p>\n<p>If you wish to reuse the return value to format multiple quantities, use\n<a href=\"#method.format_args\"><code>format_args</code></a> instead.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>t = Time::new::&lt;picosecond&gt;(<span class=\"number\">1.0_E-1</span>);\n<span class=\"kw\">let </span>a = t.into_format_args(femtosecond, Description);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"string\">\"100 femtoseconds\"</span>, <span class=\"macro\">format!</span>(<span class=\"string\">\"{}\"</span>, a));</code></pre></div>\n<h6 id=\"generic-parameters-8\"><a class=\"doc-anchor\" href=\"#generic-parameters-8\">§</a>Generic Parameters</h6>\n<ul>\n<li><code>N</code>: Unit.</li>\n</ul>\n</div></details></div></details>",0,"uom::si::quantities::ElectricCharge","uom::si::f32::ElectricCharge","uom::si::f64::ElectricCharge"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()