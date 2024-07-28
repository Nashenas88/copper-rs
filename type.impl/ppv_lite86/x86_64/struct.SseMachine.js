(function() {var type_impls = {
"ppv_lite86":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/x86_64/mod.rs.html#35\">source</a><a href=\"#impl-Clone-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, S4: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, NI: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ppv_lite86/x86_64/struct.SseMachine.html\" title=\"struct ppv_lite86::x86_64::SseMachine\">SseMachine</a>&lt;S3, S4, NI&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/x86_64/mod.rs.html#35\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ppv_lite86/x86_64/struct.SseMachine.html\" title=\"struct ppv_lite86::x86_64::SseMachine\">SseMachine</a>&lt;S3, S4, NI&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ppv_lite86::x86_64::SSE2","ppv_lite86::x86_64::SSSE3","ppv_lite86::x86_64::SSE41","ppv_lite86::x86_64::AVX"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Machine-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/x86_64/mod.rs.html#37-67\">source</a><a href=\"#impl-Machine-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, S4: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, NI: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"ppv_lite86/trait.Machine.html\" title=\"trait ppv_lite86::Machine\">Machine</a> for <a class=\"struct\" href=\"ppv_lite86/x86_64/struct.SseMachine.html\" title=\"struct ppv_lite86::x86_64::SseMachine\">SseMachine</a>&lt;S3, S4, NI&gt;<div class=\"where\">where\n    u128x1_sse2&lt;S3, S4, NI&gt;: <a class=\"trait\" href=\"ppv_lite86/trait.Swap64.html\" title=\"trait ppv_lite86::Swap64\">Swap64</a> + <a class=\"trait\" href=\"ppv_lite86/trait.BSwap.html\" title=\"trait ppv_lite86::BSwap\">BSwap</a>,\n    u64x2_sse2&lt;S3, S4, NI&gt;: <a class=\"trait\" href=\"ppv_lite86/trait.BSwap.html\" title=\"trait ppv_lite86::BSwap\">BSwap</a> + <a class=\"trait\" href=\"ppv_lite86/trait.RotateEachWord32.html\" title=\"trait ppv_lite86::RotateEachWord32\">RotateEachWord32</a> + <a class=\"trait\" href=\"ppv_lite86/trait.MultiLane.html\" title=\"trait ppv_lite86::MultiLane\">MultiLane</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.array.html\">2</a>]&gt; + <a class=\"trait\" href=\"ppv_lite86/trait.Vec2.html\" title=\"trait ppv_lite86::Vec2\">Vec2</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u64.html\">u64</a>&gt;,\n    u32x4_sse2&lt;S3, S4, NI&gt;: <a class=\"trait\" href=\"ppv_lite86/trait.BSwap.html\" title=\"trait ppv_lite86::BSwap\">BSwap</a> + <a class=\"trait\" href=\"ppv_lite86/trait.RotateEachWord32.html\" title=\"trait ppv_lite86::RotateEachWord32\">RotateEachWord32</a> + <a class=\"trait\" href=\"ppv_lite86/trait.MultiLane.html\" title=\"trait ppv_lite86::MultiLane\">MultiLane</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u32.html\">u32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.array.html\">4</a>]&gt; + <a class=\"trait\" href=\"ppv_lite86/trait.Vec4.html\" title=\"trait ppv_lite86::Vec4\">Vec4</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u32.html\">u32</a>&gt;,\n    x2&lt;u64x2_sse2&lt;S3, S4, NI&gt;, G1&gt;: <a class=\"trait\" href=\"ppv_lite86/trait.BSwap.html\" title=\"trait ppv_lite86::BSwap\">BSwap</a> + <a class=\"trait\" href=\"ppv_lite86/trait.Words4.html\" title=\"trait ppv_lite86::Words4\">Words4</a>,\n    x2&lt;u128x1_sse2&lt;S3, S4, NI&gt;, G0&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;x2&lt;u64x2_sse2&lt;S3, S4, NI&gt;, G0&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;x2&lt;u64x2_sse2&lt;S3, S4, NI&gt;, G1&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;x2&lt;u32x4_sse2&lt;S3, S4, NI&gt;, G0&gt;&gt;,\n    x4&lt;u128x1_sse2&lt;S3, S4, NI&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;x4&lt;u64x2_sse2&lt;S3, S4, NI&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;x4&lt;u32x4_sse2&lt;S3, S4, NI&gt;&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.u32x4\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u32x4\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u32x4\" class=\"associatedtype\">u32x4</a> = u32x4_sse2&lt;S3, S4, NI&gt;</h4></section><section id=\"associatedtype.u64x2\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u64x2\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u64x2\" class=\"associatedtype\">u64x2</a> = u64x2_sse2&lt;S3, S4, NI&gt;</h4></section><section id=\"associatedtype.u128x1\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u128x1\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u128x1\" class=\"associatedtype\">u128x1</a> = u128x1_sse2&lt;S3, S4, NI&gt;</h4></section><section id=\"associatedtype.u32x4x2\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u32x4x2\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u32x4x2\" class=\"associatedtype\">u32x4x2</a> = x2&lt;u32x4_sse2&lt;S3, S4, NI&gt;, G0&gt;</h4></section><section id=\"associatedtype.u64x2x2\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u64x2x2\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u64x2x2\" class=\"associatedtype\">u64x2x2</a> = x2&lt;u64x2_sse2&lt;S3, S4, NI&gt;, G0&gt;</h4></section><section id=\"associatedtype.u64x4\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u64x4\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u64x4\" class=\"associatedtype\">u64x4</a> = x2&lt;u64x2_sse2&lt;S3, S4, NI&gt;, G1&gt;</h4></section><section id=\"associatedtype.u128x2\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u128x2\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u128x2\" class=\"associatedtype\">u128x2</a> = x2&lt;u128x1_sse2&lt;S3, S4, NI&gt;, G0&gt;</h4></section><section id=\"associatedtype.u32x4x4\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u32x4x4\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u32x4x4\" class=\"associatedtype\">u32x4x4</a> = x4&lt;u32x4_sse2&lt;S3, S4, NI&gt;&gt;</h4></section><section id=\"associatedtype.u64x2x4\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u64x2x4\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u64x2x4\" class=\"associatedtype\">u64x2x4</a> = x4&lt;u64x2_sse2&lt;S3, S4, NI&gt;&gt;</h4></section><section id=\"associatedtype.u128x4\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.u128x4\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"ppv_lite86/trait.Machine.html#associatedtype.u128x4\" class=\"associatedtype\">u128x4</a> = x4&lt;u128x1_sse2&lt;S3, S4, NI&gt;&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.instance\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/x86_64/mod.rs.html#64-66\">source</a><a href=\"#method.instance\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"ppv_lite86/trait.Machine.html#tymethod.instance\" class=\"fn\">instance</a>() -&gt; Self</h4></section></summary><div class='docblock'>Safety <a href=\"ppv_lite86/trait.Machine.html#tymethod.instance\">Read more</a></div></details><section id=\"method.unpack\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/types.rs.html#246-248\">source</a><a href=\"#method.unpack\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"ppv_lite86/trait.Machine.html#method.unpack\" class=\"fn\">unpack</a>&lt;S, V: <a class=\"trait\" href=\"ppv_lite86/trait.Store.html\" title=\"trait ppv_lite86::Store\">Store</a>&lt;S&gt;&gt;(self, s: S) -&gt; V</h4></section><section id=\"method.vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/types.rs.html#251-256\">source</a><a href=\"#method.vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"ppv_lite86/trait.Machine.html#method.vec\" class=\"fn\">vec</a>&lt;V, A&gt;(self, a: A) -&gt; V<div class=\"where\">where\n    V: <a class=\"trait\" href=\"ppv_lite86/trait.MultiLane.html\" title=\"trait ppv_lite86::MultiLane\">MultiLane</a>&lt;A&gt;,</div></h4></section><section id=\"method.read_le\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/types.rs.html#259-264\">source</a><a href=\"#method.read_le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"ppv_lite86/trait.Machine.html#method.read_le\" class=\"fn\">read_le</a>&lt;V&gt;(self, input: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u8.html\">u8</a>]) -&gt; V<div class=\"where\">where\n    V: <a class=\"trait\" href=\"ppv_lite86/trait.StoreBytes.html\" title=\"trait ppv_lite86::StoreBytes\">StoreBytes</a>,</div></h4></section><section id=\"method.read_be\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/types.rs.html#267-272\">source</a><a href=\"#method.read_be\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"ppv_lite86/trait.Machine.html#method.read_be\" class=\"fn\">read_be</a>&lt;V&gt;(self, input: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/core/primitive.u8.html\">u8</a>]) -&gt; V<div class=\"where\">where\n    V: <a class=\"trait\" href=\"ppv_lite86/trait.StoreBytes.html\" title=\"trait ppv_lite86::StoreBytes\">StoreBytes</a>,</div></h4></section></div></details>","Machine","ppv_lite86::x86_64::SSE2","ppv_lite86::x86_64::SSSE3","ppv_lite86::x86_64::SSE41","ppv_lite86::x86_64::AVX"],["<section id=\"impl-Copy-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ppv_lite86/x86_64/mod.rs.html#35\">source</a><a href=\"#impl-Copy-for-SseMachine%3CS3,+S4,+NI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S3: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, S4: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, NI: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ppv_lite86/x86_64/struct.SseMachine.html\" title=\"struct ppv_lite86::x86_64::SseMachine\">SseMachine</a>&lt;S3, S4, NI&gt;</h3></section>","Copy","ppv_lite86::x86_64::SSE2","ppv_lite86::x86_64::SSSE3","ppv_lite86::x86_64::SSE41","ppv_lite86::x86_64::AVX"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()