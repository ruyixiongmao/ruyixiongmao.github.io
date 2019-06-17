(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{186:function(s,t,a){"use strict";var n=a(69);a.n(n).a},208:function(s,t,a){"use strict";a.r(t);a(186);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"markdown-拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展","aria-hidden":"true"}},[s._v("#")]),s._v(" Markdown 拓展")]),s._v(" "),a("h2",{attrs:{id:"header-anchors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-anchors","aria-hidden":"true"}},[s._v("#")]),s._v(" Header Anchors")]),s._v(" "),a("p",[s._v("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),a("router-link",{attrs:{to:"/config/#markdown-anchor"}},[a("code",[s._v("markdown.anchor")])]),s._v(" 来配置。")],1),s._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接","aria-hidden":"true"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),a("h3",{attrs:{id:"内部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部链接","aria-hidden":"true"}},[s._v("#")]),s._v(" 内部链接")]),s._v(" "),a("p",[s._v("网站内部的的链接，将会被转换成 "),a("code",[s._v("<router-link>")]),s._v(" 用于 SPA 导航。同时，站内的每一个文件夹下的 "),a("code",[s._v("README.md")]),s._v(" 或者 "),a("code",[s._v("index.md")]),s._v(" 文件都会被自动编译为 "),a("code",[s._v("index.html")]),s._v("，对应的链接将被视为 "),a("code",[s._v("/")]),s._v("。")]),s._v(" "),a("p",[s._v("以如下的文件结构为例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("假设你现在在 "),a("code",[s._v("foo/one.md")]),s._v(" 中：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token url"}},[s._v("[Home](/)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("[foo](/foo/)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("[foo heading](./#heading)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("[bar - three](../bar/three.md)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("[bar - four](../bar/four.html)")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 也可以用 .html --\x3e")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"链接的重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接的重定向","aria-hidden":"true"}},[s._v("#")]),s._v(" 链接的重定向 "),a("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1),s._v(" "),a("p",[s._v("VuePress 支持重定向到干净链接。如果一个链接 "),a("code",[s._v("/foo")]),s._v(" 找不到，VuePress 会自行寻找一个可用的 "),a("code",[s._v("/foo/")]),s._v(" 或 "),a("code",[s._v("/foo.html")]),s._v("。反过来，当 "),a("code",[s._v("/foo/")]),s._v(" 或 "),a("code",[s._v("/foo.html")]),s._v(" 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),a("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-clean-urls"),a("OutboundLink")],1),s._v(" 定制你的网站路径。")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 "),a("code",[s._v("/foo/one.md")]),s._v(" 的路径设为了 "),a("code",[s._v("/foo/one/")]),s._v("，你依然应该通过 "),a("code",[s._v("./two.md")]),s._v(" 来访问 "),a("code",[s._v("/foo/two.md")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"外部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部链接","aria-hidden":"true"}},[s._v("#")]),s._v(" 外部链接")]),s._v(" "),a("p",[s._v("外部的链接将会被自动地设置为  "),a("code",[s._v('target="_blank" rel="noopener noreferrer"')]),s._v(":")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuejs.org"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress on GitHub"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("你可以自定义通过配置 "),a("router-link",{attrs:{to:"/config/#markdown-externallinks"}},[s._v("config.markdown.externalLinks")]),s._v(" 来自定义外部链接的特性。")],1),s._v(" "),a("h2",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter","aria-hidden":"true"}},[s._v("#")]),s._v(" Front Matter")]),s._v(" "),a("p",[s._v("VuePress 提供了对 "),a("a",{attrs:{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"}},[s._v("YAML front matter"),a("OutboundLink")],1),s._v(" 开箱即用的支持:")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Blogging Like a Hacker\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。")]),s._v(" "),a("p",[s._v("想了解更多，请移步 "),a("router-link",{attrs:{to:"/guide/frontmatter.html"}},[s._v("Front Matter")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"github-风格的表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格","aria-hidden":"true"}},[s._v("#")]),s._v(" GitHub 风格的表格")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Tables")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Are")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("Cool")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("col 3 is")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("right-aligned")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$1600")])]),s._v(" "),a("tr",[a("td",[s._v("col 2 is")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("centered")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$12")])]),s._v(" "),a("tr",[a("td",[s._v("zebra stripes")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("are neat")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("$1")])])])]),s._v(" "),a("h2",{attrs:{id:"emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji","aria-hidden":"true"}},[s._v("#")]),s._v(" Emoji")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(":tada: :100:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("p",[s._v("🎉 💯")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[[toc]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#header-anchors"}},[s._v("Header Anchors")])]),a("li",[a("a",{attrs:{href:"#链接"}},[s._v("链接")]),a("ul",[a("li",[a("a",{attrs:{href:"#内部链接"}},[s._v("内部链接")])]),a("li",[a("a",{attrs:{href:"#链接的重定向-badge-text-1-0-0-alpha-37"}},[s._v("链接的重定向 "),a("Badge",{attrs:{text:"1.0.0-alpha.37"}})],1)]),a("li",[a("a",{attrs:{href:"#外部链接"}},[s._v("外部链接")])])])]),a("li",[a("a",{attrs:{href:"#front-matter"}},[s._v("Front Matter")])]),a("li",[a("a",{attrs:{href:"#github-风格的表格"}},[s._v("GitHub 风格的表格")])]),a("li",[a("a",{attrs:{href:"#emoji"}},[s._v("Emoji")])]),a("li",[a("a",{attrs:{href:"#目录"}},[s._v("目录")])]),a("li",[a("a",{attrs:{href:"#自定义容器-badge-text-默认主题"}},[s._v("自定义容器 "),a("Badge",{attrs:{text:"默认主题"}})],1)]),a("li",[a("a",{attrs:{href:"#代码块中的语法高亮"}},[s._v("代码块中的语法高亮")])]),a("li",[a("a",{attrs:{href:"#代码块中的行高亮"}},[s._v("代码块中的行高亮")])]),a("li",[a("a",{attrs:{href:"#行号"}},[s._v("行号")])]),a("li",[a("a",{attrs:{href:"#导入代码段-badge-text-beta-type-warn"}},[s._v("导入代码段 "),a("Badge",{attrs:{text:"beta",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#进阶配置"}},[s._v("进阶配置")])])])]),a("p"),s._v(" "),a("p",[s._v("目录（Table of Contents）的渲染可以通过  "),a("router-link",{attrs:{to:"/config/#markdown-toc"}},[a("code",[s._v("markdown.toc")])]),s._v(" 选项来配置。")],1),s._v(" "),a("h2",{attrs:{id:"自定义容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义容器 "),a("Badge",{attrs:{text:"默认主题"}})],1),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[s._v("This is a tip")])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[s._v("This is a warning")])]),s._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",[s._v("This is a dangerous thing")])]),s._v(" "),a("p",[s._v("你也可以自定义块中的标题：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("::: danger STOP\nDanger zone, do not proceed\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("STOP")]),s._v(" "),a("p",[s._v("Danger zone, do not proceed")])]),s._v(" "),a("p",[a("strong",[s._v("参考:")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.github.io/plugins/container/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-container"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"代码块中的语法高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的语法高亮","aria-hidden":"true"}},[s._v("#")]),s._v(" 代码块中的语法高亮")]),s._v(" "),a("p",[s._v("VuePress 使用了 "),a("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Prism"),a("OutboundLink")],1),s._v(" 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('``` html\n<ul>\n  <li\n    v-for="todo in todos"\n    :key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("todo in todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("todo.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    {{ todo.text }}\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("在 Prism 的网站上查看 "),a("a",{attrs:{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"}},[s._v("合法的语言列表"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"代码块中的行高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮","aria-hidden":"true"}},[s._v("#")]),s._v(" 代码块中的行高亮")]),s._v(" "),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` js {4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Highlighted!'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"行号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行号","aria-hidden":"true"}},[s._v("#")]),s._v(" 行号")]),s._v(" "),a("p",[s._v("你可以通过配置来为每个代码块显示行号：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),s._v(" "),a("ul",[a("li",[s._v("示例:")])]),s._v(" "),a("picture",[a("source",{attrs:{srcset:"/line-numbers-desktop.png",media:"(min-width: 719px)"}}),s._v(" "),a("img",{staticClass:"line-numbers-desktop-snap",attrs:{alt:"Image"}})]),s._v(" "),a("picture",[a("source",{attrs:{srcset:"/line-numbers-mobile.gif",media:"(max-width: 719px)"}}),s._v(" "),a("img",{staticClass:"line-numbers-mobile-snap",attrs:{alt:"Image"}})]),s._v(" "),a("h2",{attrs:{id:"导入代码段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入代码段","aria-hidden":"true"}},[s._v("#")]),s._v(" 导入代码段 "),a("Badge",{attrs:{text:"beta",type:"warn"}})],1),s._v(" "),a("p",[s._v("你可以通过下述的语法导入已经存在的文件中的代码段：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("<<< @/filepath\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("它也支持 "),a("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E8%A1%8C%E9%AB%98%E4%BA%AE"}},[s._v("行高亮")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("<<< @/filepath{highlightLines} \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("输出")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Not found: E:\\haiyi\\new\\@vuepress\\markdown\\__tests__\\fragments\\snippet.js")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"})]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 "),a("code",[s._v("@")]),s._v(" 默认值是 "),a("code",[s._v("process.cwd()")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"进阶配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 进阶配置")]),s._v(" "),a("p",[s._v("VuePress 使用 "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[s._v("markdown-it"),a("OutboundLink")],1),s._v(" 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 的 "),a("code",[s._v("markdown")]),s._v(" 选项，来对当前的 "),a("code",[s._v("markdown-it")]),s._v(" 实例做一些自定义的配置：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// markdown-it-anchor 的选项")]),s._v("\n    anchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" permalink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// markdown-it-toc 的选项")]),s._v("\n    toc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" includeLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("extendMarkdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("md")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用更多的 markdown-it 插件!")]),s._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'markdown-it-xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports},69:function(s,t,a){}}]);