(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{SwsB:function(t,a,s){"use strict";var i=s("hBg0");s.n(i).a},gTk0:function(t,a,s){"use strict";s.r(a);var i={components:{Layout:s("+SZM").a},props:{notifications:{type:Array,default:null},logs:{type:Array,default:null},paginator:{type:Object,default:null}}},e=(s("SwsB"),s("KHd+")),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("layout",{attrs:{title:"Home",notifications:t.notifications}},[s("div",{staticClass:"ph2 ph0-ns"},[s("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[s("ul",{staticClass:"list ph0 tc-l tl"},[s("li",{staticClass:"di"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),s("li",{staticClass:"di"},[s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/account"}},[t._v(t._s(t.$t("app.breadcrumb_account_home")))])],1),t._v(" "),s("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_account_audit_logs"))+"\n        ")])])]),t._v(" "),s("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[s("div",{staticClass:"pa3 mt5"},[s("h2",{staticClass:"tc normal mb4"},[t._v("\n          "+t._s(t.$t("audit.title"))+"\n        ")]),t._v(" "),s("ul",{staticClass:"list pl0 mt0 center"},t._l(t.logs,(function(a){return s("li",{key:a.id,staticClass:"flex items-center lh-copy pa2-l pa1 ph0-l bb b--black-10"},[s("div",{staticClass:"flex-auto"},[a.author.id?s("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/employees/"+a.author.id}},[t._v("\n                "+t._s(a.author.name)+"\n              ")]):s("span",{staticClass:"black-70"},[t._v("\n                "+t._s(a.author.name)+"\n              ")]),t._v(" "),s("span",{},[t._v("\n                "+t._s(a.localized_content)+"\n              ")]),t._v(" "),s("span",{staticClass:"db f6 log_date"},[t._v("\n                "+t._s(a.localized_audited_at)+"\n              ")])],1)])})),0),t._v(" "),s("div",{staticClass:"center cf"},[s("inertia-link",{directives:[{name:"show",rawName:"v-show",value:t.paginator.previousPageUrl,expression:"paginator.previousPageUrl"}],staticClass:"fl dib",attrs:{href:t.paginator.previousPageUrl,title:"Previous"}},[t._v("\n            ← "+t._s(t.$t("app.previous"))+"\n          ")]),t._v(" "),s("inertia-link",{directives:[{name:"show",rawName:"v-show",value:t.paginator.nextPageUrl,expression:"paginator.nextPageUrl"}],staticClass:"fr dib",attrs:{href:t.paginator.nextPageUrl,title:"Next"}},[t._v("\n            "+t._s(t.$t("app.next"))+" →\n          ")])],1)])])])])}),[],!1,null,"bfac6ccc",null);a.default=n.exports},hBg0:function(t,a,s){var i=s("oZrN");"string"==typeof i&&(i=[[t.i,i,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,e);i.locals&&(t.exports=i.locals)},oZrN:function(t,a,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.log_date[data-v-bfac6ccc] {\n  color: #777A88;\n}\n",""])}}]);
//# sourceMappingURL=49.js.map?id=79e7c3a4f73dd32683cc