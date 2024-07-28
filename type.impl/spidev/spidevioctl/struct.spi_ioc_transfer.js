(function() {var type_impls = {
"spidev":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-spi_ioc_transfer%3C'a,+'b%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#62\">source</a><a href=\"#impl-Debug-for-spi_ioc_transfer%3C'a,+'b%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html\" title=\"struct spidev::spidevioctl::spi_ioc_transfer\">spi_ioc_transfer</a>&lt;'a, 'b&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#62\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spidev::spidevioctl::SpidevTransfer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-spi_ioc_transfer%3C'a,+'b%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#62\">source</a><a href=\"#impl-Default-for-spi_ioc_transfer%3C'a,+'b%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html\" title=\"struct spidev::spidevioctl::spi_ioc_transfer\">spi_ioc_transfer</a>&lt;'a, 'b&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#62\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html\" title=\"struct spidev::spidevioctl::spi_ioc_transfer\">spi_ioc_transfer</a>&lt;'a, 'b&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","spidev::spidevioctl::SpidevTransfer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-spi_ioc_transfer%3C'a,+'b%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#80-119\">source</a><a href=\"#impl-spi_ioc_transfer%3C'a,+'b%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, 'b&gt; <a class=\"struct\" href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html\" title=\"struct spidev::spidevioctl::spi_ioc_transfer\">spi_ioc_transfer</a>&lt;'a, 'b&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#82-88\">source</a><h4 class=\"code-header\">pub fn <a href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html#tymethod.read\" class=\"fn\">read</a>(buff: &amp;'b mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a read transfer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#91-97\">source</a><h4 class=\"code-header\">pub fn <a href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html#tymethod.write\" class=\"fn\">write</a>(buff: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a write transfer</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_write\" class=\"method\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#101-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html#tymethod.read_write\" class=\"fn\">read_write</a>(tx_buf: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>], rx_buf: &amp;'b mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a read/write transfer.\nNote that the <code>tx_buf</code> and <code>rx_buf</code> must be the same length.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.delay\" class=\"method\"><a class=\"src rightside\" href=\"src/spidev/spidevioctl.rs.html#112-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"spidev/spidevioctl/struct.spi_ioc_transfer.html#tymethod.delay\" class=\"fn\">delay</a>(microseconds: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a delay transfer of a number of microseconds</p>\n</div></details></div></details>",0,"spidev::spidevioctl::SpidevTransfer"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()