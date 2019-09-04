(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{292:function(t,e,s){"use strict";s.r(e);var n=s(38),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"updating-for-beta-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-for-beta-8","aria-hidden":"true"}},[t._v("#")]),t._v(" Updating For Beta 8")]),t._v(" "),s("p",[t._v("All extensions will need to be refactored in order to work with beta 8. Here are the main things you will need to do in order to make your extension compatible.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("This guide is not comprehensive. You may encounter some changes we haven't documented. If you need help, start a discussion on the "),s("a",{attrs:{href:"https://discuss.flarum.org/t/extensibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("community forum"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://flarum.org/chat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord chat"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"php-namespaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-namespaces","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP Namespaces")]),t._v(" "),s("p",[t._v("Beta 8 comes with large changes to the overall structure of the PHP backend. You will need to look through "),s("a",{attrs:{href:"https://discuss.flarum.org/d/6572-help-us-namespace-changes",target:"_blank",rel:"noopener noreferrer"}},[t._v("this list"),s("OutboundLink")],1),t._v(" of namespace changes and make changes to your extension accordingly.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gist.github.com/tobyzerner/55e7c05c95404e5efab3a9e43799d375",target:"_blank",rel:"noopener noreferrer"}},[t._v("This script"),s("OutboundLink")],1),t._v(" can help you to automate most of the namespace changes. Of course, you should still test your extension after running the script as it may miss something.")]),t._v(" "),s("h2",{attrs:{id:"database-naming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-naming","aria-hidden":"true"}},[t._v("#")]),t._v(" Database Naming")]),t._v(" "),s("p",[t._v("Many database columns and JSON:API attributes have been renamed to conform to a "),s("router-link",{attrs:{to:"/contributing.html#database"}},[t._v("convention")]),t._v(". You will need to update any instances where your extension interacts with core data. You can see the changes in "),s("a",{attrs:{href:"https://github.com/flarum/core/pull/1344/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1344"),s("OutboundLink")],1),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"extenders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extenders","aria-hidden":"true"}},[t._v("#")]),t._v(" Extenders")]),t._v(" "),s("p",[t._v("Beta 8 introduces a new concept called "),s("strong",[t._v("extenders")]),t._v(" that replace the most common event listeners. You can learn more about how they work in the "),s("router-link",{attrs:{to:"/extend/start.html#extenders"}},[t._v("updated extension docs")]),t._v(".")],1),t._v(" "),s("p",[s("code",[t._v("bootstrap.php")]),t._v(" has been renamed to "),s("code",[t._v("extend.php")]),t._v(" and returns an array of extender instances and functions:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Flarum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Frontend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'forum'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/js/dist/forum.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("css")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/less/forum.less'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/t/{slug}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/tags'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tags'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dispatcher "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$events")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$events")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Listener\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("AddForumTagsRelationship")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("If you're listening for any of the following events, you'll need to update your code to use an extender instead. See the relevant docs for more information.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),t._v(" "),s("th",[t._v("Extender")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureFormatter")]),t._v("*")]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Formatter")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureWebApp")]),t._v("*")]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Frontend")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureClientView")]),t._v("*")]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Frontend")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureLocales")])]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Locales")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureApiRoutes")])]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Routes")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Flarum\\Event\\ConfigureForumRoutes")])]),t._v(" "),s("td",[s("code",[t._v("Flarum\\Extend\\Routes")])])])])]),t._v(" "),s("p",[s("em",[t._v("* class no longer exists")])]),t._v(" "),s("h2",{attrs:{id:"javascript-tooling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-tooling","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript Tooling")]),t._v(" "),s("p",[t._v("Previously Flarum and its extensions used a custom Gulp workflow to compile ES6 source code into something that browsers could understand. Beta 8 switches to a more conventional approach with Webpack.")]),t._v(" "),s("p",[t._v("You will need to tweak the structure of your extension's "),s("code",[t._v("js")]),t._v(" directory. Currently, your JS file hierarchy looks something like the following:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("js\n├── admin\n│   ├── src\n│   │   └── main.js\n│   ├── dist\n│   │   └── extension.js\n│   ├── Gulpfile.js\n│   └── package.json\n└── forum\n    ├── src\n    │   └── main.js\n    ├── dist\n    │   └── extension.js\n    ├── Gulpfile.js\n    └── package.json\n")])])]),s("p",[t._v("You'll need to make the following changes:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Update "),s("code",[t._v("package.json")]),t._v(" and create "),s("code",[t._v("webpack.config.js")]),t._v(", "),s("code",[t._v("forum.js")]),t._v(", and "),s("code",[t._v("admin.js")]),t._v(" files using "),s("router-link",{attrs:{to:"/extend/frontend.html#transpilation"}},[t._v("these templates")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("Inside your "),s("code",[t._v("admin")]),t._v(" and "),s("code",[t._v("forum")]),t._v(" "),s("em",[t._v("folders")]),t._v(", delete "),s("code",[t._v("Gulpfile.js")]),t._v(", "),s("code",[t._v("package.json")]),t._v(", and "),s("code",[t._v("dist")]),t._v(". Then inside each "),s("code",[t._v("src")]),t._v(" folder, rename "),s("code",[t._v("main.js")]),t._v(" to "),s("code",[t._v("index.js")]),t._v(". Now move all of the "),s("code",[t._v("src")]),t._v(" files outside of "),s("code",[t._v("src")]),t._v(" folder and delete it.")])]),t._v(" "),s("li",[s("p",[t._v("In the root "),s("code",[t._v("js")]),t._v(" folder create a folder called "),s("code",[t._v("src")]),t._v(" and move your "),s("code",[t._v("admin")]),t._v(" and "),s("code",[t._v("forum")]),t._v(" "),s("em",[t._v("folders")]),t._v(" into it.")])]),t._v(" "),s("li",[s("p",[t._v("While still in your root "),s("code",[t._v("js")]),t._v(" folder, run "),s("code",[t._v("npm install")]),t._v(" and then "),s("code",[t._v("npm run build")]),t._v(" to build the new JS dist files.")])])]),t._v(" "),s("p",[t._v("If everything went right, your folder structure should look something like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("js\n├── src\n│   ├── admin\n│   │   └── index.js\n│   └── forum\n│       └── index.js\n├── dist\n│   ├── admin.js\n│   ├── admin.js.map\n│   ├── forum.js\n│   └── forum.js.map\n├── admin.js\n├── forum.js\n├── package.json\n└── webpack.config.js\n")])])]),s("p",[t._v("Take a look at the "),s("a",{attrs:{href:"https://github.com/flarum",target:"_blank",rel:"noopener noreferrer"}},[t._v("bundled extensions"),s("OutboundLink")],1),t._v(" for more examples.")]),t._v(" "),s("h2",{attrs:{id:"font-awesome-icons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-awesome-icons","aria-hidden":"true"}},[t._v("#")]),t._v(" Font Awesome Icons")]),t._v(" "),s("p",[t._v("Beta 8 upgrades to Font Awesome 5, in which icon class names have changed. The "),s("code",[t._v("flarum/helpers/icon")]),t._v(" helper now requires the "),s("strong",[t._v("full Font Awesome icon class names")]),t._v(" to be passed, eg. "),s("code",[t._v("fas fa-bolt")]),t._v(".")])])},[],!1,null,null,null);e.default=a.exports}}]);