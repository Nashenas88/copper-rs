(function() {
    var type_impls = Object.fromEntries([["cu29_clock",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Add-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#57-63\">source</a><a href=\"#impl-Add-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h4></section></summary><div class='docblock'>The resulting type after applying the <code>+</code> operator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.add\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#60-62\">source</a><a href=\"#method.add\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html#tymethod.add\" class=\"fn\">add</a>(self, rhs: Self) -&gt; Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a></h4></section></summary><div class='docblock'>Performs the <code>+</code> operation. <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html#tymethod.add\">Read more</a></div></details></div></details>","Add","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BorrowDecode%3C'de%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#77-81\">source</a><a href=\"#impl-BorrowDecode%3C'de%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.BorrowDecode.html\" title=\"trait bincode::de::BorrowDecode\">BorrowDecode</a>&lt;'de&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.borrow_decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#78-80\">source</a><a href=\"#method.borrow_decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.BorrowDecode.html#tymethod.borrow_decode\" class=\"fn\">borrow_decode</a>&lt;D: <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.BorrowDecoder.html\" title=\"trait bincode::de::BorrowDecoder\">BorrowDecoder</a>&lt;'de&gt;&gt;(\n    decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut D</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/error/enum.DecodeError.html\" title=\"enum bincode::error::DecodeError\">DecodeError</a>&gt;</h4></section></summary><div class='docblock'>Attempt to decode this type with the given <a href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.BorrowDecode.html\" title=\"trait bincode::de::BorrowDecode\">BorrowDecode</a>.</div></details></div></details>","BorrowDecode<'de>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Clone-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Debug-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#71-75\">source</a><a href=\"#impl-Decode-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.Decode.html\" title=\"trait bincode::de::Decode\">Decode</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#72-74\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.Decode.html#tymethod.decode\" class=\"fn\">decode</a>&lt;D: <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.Decoder.html\" title=\"trait bincode::de::Decoder\">Decoder</a>&gt;(decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut D</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/error/enum.DecodeError.html\" title=\"enum bincode::error::DecodeError\">DecodeError</a>&gt;</h4></section></summary><div class='docblock'>Attempt to decode this type with the given <a href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/de/trait.Decode.html\" title=\"trait bincode::de::Decode\">Decode</a>.</div></details></div></details>","Decode","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.209/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.209/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.209/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.209/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.209/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#83-102\">source</a><a href=\"#impl-Display-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#84-101\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#65-69\">source</a><a href=\"#impl-Encode-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/enc/trait.Encode.html\" title=\"trait bincode::enc::Encode\">Encode</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#66-68\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/enc/trait.Encode.html#tymethod.encode\" class=\"fn\">encode</a>&lt;E: <a class=\"trait\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/enc/trait.Encoder.html\" title=\"trait bincode::enc::Encoder\">Encoder</a>&gt;(&amp;self, encoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut E</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"https://docs.rs/bincode/2.0.0-rc.3/bincode/error/enum.EncodeError.html\" title=\"enum bincode::error::EncodeError\">EncodeError</a>&gt;</h4></section></summary><div class='docblock'>Encode a given type.</div></details></div></details>","Encode","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CDuration%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#25-29\">source</a><a href=\"#impl-From%3CDuration%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"docblock\"><p>bridge the API with standard Durations.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#26-28\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(duration: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Duration>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3Cu64%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#37-41\">source</a><a href=\"#impl-From%3Cu64%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#38-40\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(duration: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<u64>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Into%3CDuration%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#31-35\">source</a><a href=\"#impl-Into%3CDuration%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#32-34\">source</a><a href=\"#method.into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into\" class=\"fn\">into</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a></h4></section></summary><div class='docblock'>Converts this type into the (usually inferred) input type.</div></details></div></details>","Into<Duration>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Into%3Cu64%3E-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#43-47\">source</a><a href=\"#impl-Into%3Cu64%3E-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#44-46\">source</a><a href=\"#method.into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html#tymethod.into\" class=\"fn\">into</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Converts this type into the (usually inferred) input type.</div></details></div></details>","Into<u64>","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Ord-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#854-856\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#875-877\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#901-904\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-PartialEq-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-PartialOrd-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1178\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1196\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the\n<code>&lt;=</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1214\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1232\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by\nthe <code>&gt;=</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Serialize-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.209/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","cu29_clock::CuTime"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sub-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#49-55\">source</a><a href=\"#impl-Sub-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h4></section></summary><div class='docblock'>The resulting type after applying the <code>-</code> operator.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sub\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#52-54\">source</a><a href=\"#method.sub\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html#tymethod.sub\" class=\"fn\">sub</a>(self, rhs: Self) -&gt; Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html#associatedtype.Output\" title=\"type core::ops::arith::Sub::Output\">Output</a></h4></section></summary><div class='docblock'>Performs the <code>-</code> operation. <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html#tymethod.sub\">Read more</a></div></details></div></details>","Sub","cu29_clock::CuTime"],["<section id=\"impl-Copy-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Copy-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section>","Copy","cu29_clock::CuTime"],["<section id=\"impl-Eq-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-Eq-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section>","Eq","cu29_clock::CuTime"],["<section id=\"impl-StructuralPartialEq-for-CuDuration\" class=\"impl\"><a class=\"src rightside\" href=\"src/cu29_clock/lib.rs.html#21\">source</a><a href=\"#impl-StructuralPartialEq-for-CuDuration\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"cu29_clock/struct.CuDuration.html\" title=\"struct cu29_clock::CuDuration\">CuDuration</a></h3></section>","StructuralPartialEq","cu29_clock::CuTime"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[39047]}