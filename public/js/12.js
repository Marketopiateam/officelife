(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3QM4":function(e,t,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}},o=(a("Ed6m"),a("KHd+")),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb3"},[e.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e._v(" "),a("textarea",e._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:e.errors.length},attrs:{id:e.id,required:e.required?"required":"",type:e.type,"data-cy":e.datacy,rows:e.rows},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"textarea",e.$attrs,!1)),e._v(" "),e.errors.length?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[e._v("\n    "+e._s(e.errors[0])+"\n  ")]):e._e(),e._v(" "),e.help?a("p",{staticClass:"f7 mb3 lh-title"},[e._v("\n    "+e._s(e.help)+"\n  ")]):e._e()])}),[],!1,null,"662de141",null);t.a=r.exports},"5V44":function(e,t,a){"use strict";a.r(t);var s=a("Qy0Z"),o=a("ttlI"),r=a("+SZM"),n=a("N0Hx"),l={components:{Layout:r.a,Worklogs:s.default,Morale:o.default,DashboardMenu:n.default},props:{employee:{type:Object,default:null},worklogCount:{type:Number,default:0},moraleCount:{type:Number,default:0},notifications:{type:Array,default:null},ownerPermissionLevel:{type:Number,default:0}}},i=(a("RguX"),a("KHd+")),d=Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"cf mt4 mw7 center"},[a("h2",{staticClass:"tc fw5"},[e._v("\n        "+e._s(e.$page.auth.company.name)+"\n      ")])]),e._v(" "),a("dashboard-menu",{attrs:{employee:e.employee}}),e._v(" "),a("worklogs",{staticClass:"mb5",attrs:{"worklog-count":e.worklogCount,employee:e.employee}}),e._v(" "),a("morale",{attrs:{"morale-count":e.moraleCount,employee:e.employee}}),e._v(" "),a("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[e._v("Me")]),e._v(" "),a("ul",[a("li",[e._v("View holidays")]),e._v(" "),a("li",[e._v("Book time off")]),e._v(" "),a("li",[e._v("Log morale")]),e._v(" "),a("li",[e._v("Reply to what you've done this week")]),e._v(" "),a("li",[e._v("Log an expense")]),e._v(" "),a("li",[e._v("View one on ones")]),e._v(" "),a("li",[e._v("View all my tasks")]),e._v(" "),a("li",[e._v("quizz hebdo pour apprendre à connaitre")]),e._v(" "),a("li",[e._v("donner des statistics sur le nombre de femmes/hommes avec un poste à responsabilité")]),e._v(" "),a("li",[e._v("donner le ratio homme/femme par poste dans l'onglet Positions")])])])])],1)])}),[],!1,null,"7db48e47",null);t.default=d.exports},"8/4d":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".error-explanation[data-v-662de141] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-662de141]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},Ed6m:function(e,t,a){"use strict";var s=a("rVr5");a.n(s).a},FUPM:function(e,t,a){var s=a("GqqJ");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)},GqqJ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},N0Hx:function(e,t,a){"use strict";a.r(t);var s={props:{employee:{type:Object,default:null}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cf mw7 center br3 mb5 tc"},[a("div",{staticClass:"cf dib btn-group"},[a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer no-underline",class:{selected:"me"==e.employee.dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/me"}},[e._v("\n      Me\n    ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"team"==e.employee.dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/team","data-cy":"dashboard-team-tab"}},[e._v("\n      My team\n    ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"company"==e.employee.dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/company","data-cy":"dashboard-company-tab"}},[e._v("\n      My company\n    ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"hr"==e.employee.dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/hr","data-cy":"dashboard-hr-tab"}},[e._v("\n      HR area\n    ")])],1)])}),[],!1,null,null,null);t.default=r.exports},Qy0Z:function(e,t,a){"use strict";a.r(t);var s=a("Z84v"),o=a("3QM4"),r={components:{LoadingButton:s.a,TextArea:o.a},props:{worklogCount:{type:Number,default:0},employee:{type:Object,default:null}},data:function(){return{editorShown:!1,form:{content:null,errors:[]},updatedWorklogCount:0,updatedEmployee:null,loadingState:"",successMessage:!1}},created:function(){this.updatedWorklogCount=this.worklogCount,this.updatedEmployee=this.employee},methods:{updateText:function(e){this.form.content=e},showEditor:function(){var e=this;this.editorShown=!0,this.$nextTick((function(){e.$refs.editor.$refs.input.focus()}))},store:function(){var e=this;this.loadingState="loading",this.successMessage=!0,this.editorShown=!1,this.updatedEmployee.has_logged_worklog_today=!0,axios.post("/"+this.$page.auth.company.id+"/dashboard/worklog",this.form).then((function(t){flash(e.$t("dashboard.worklog_success_message"),"success"),e.updatedWorklogCount=e.updatedWorklogCount+1,e.loadingState=null})).catch((function(t){e.loadingState=null,e.successMessage=!1,e.editorShown=!0,e.updatedEmployee.has_logged_worklog_today=!1,e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},n=a("KHd+"),l=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cf mw7 center mb2 fw5"},[e._v("\n    🔨 "+e._s(e.$t("dashboard.worklog_title"))+"\n  ")]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&!e.updatedEmployee.has_logged_worklog_today,expression:"!editorShown && !updatedEmployee.has_logged_worklog_today"}],staticClass:"db mt0"},[a("span",{staticClass:"dib-ns db mb0-ns mb2"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_placeholder"))+"\n        ")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedWorklogCount,expression:"updatedWorklogCount != 0"}],staticClass:"ml2-ns pointer"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_read_previous_entries"))+"\n        ")])]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&e.updatedEmployee.has_logged_worklog_today&&!e.successMessage,expression:"!editorShown && updatedEmployee.has_logged_worklog_today && !successMessage"}],staticClass:"db mb0 mt0"},[a("span",{staticClass:"dib-ns db mb0-ns mb2"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_already_logged"))+"\n        ")]),e._v(" "),a("inertia-link",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedWorklogCount,expression:"updatedWorklogCount != 0"}],staticClass:"ml2-ns pointer",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+e.employee.id+"/worklogs"}},[e._v("\n          "+e._s(e.$t("dashboard.worklog_read_previous_entries"))+"\n        ")])],1),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&!e.updatedEmployee.has_logged_worklog_today,expression:"!editorShown && !updatedEmployee.has_logged_worklog_today"}],staticClass:"ma0"},[a("a",{staticClass:"btn dib",attrs:{"data-cy":"log-worklog-cta"},on:{click:function(t){return t.preventDefault(),e.showEditor(t)}}},[e._v("\n          "+e._s(e.$t("dashboard.worklog_cta"))+"\n        ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.editorShown&&!e.successMessage,expression:"editorShown && !successMessage"}]},[a("form",{on:{submit:function(t){return t.preventDefault(),e.store()}}},[a("text-area",{ref:"editor",attrs:{datacy:"worklog-content"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),e._v(" "),a("p",{staticClass:"db lh-copy f6"},[e._v("\n            👋 "+e._s(e.$t("dashboard.worklog_entry_description"))+"\n          ")]),e._v(" "),a("p",{staticClass:"ma0"},[a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 pv2 ph3 mr2",state:e.loadingState,text:e.$t("app.save"),"cypress-selector":"submit-log-worklog"}}),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.editorShown=!1}}},[e._v("\n              "+e._s(e.$t("app.cancel"))+"\n            ")])],1)],1)]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.successMessage,expression:"successMessage"}],staticClass:"db mb3 mt4 tc"},[e._v("\n        "+e._s(e.$t("dashboard.worklog_added"))+"\n      ")])])])])}),[],!1,null,"ba65ad98",null);t.default=l.exports},RguX:function(e,t,a){"use strict";var s=a("hko0");a.n(s).a},"SL/y":function(e,t,a){"use strict";var s=a("FUPM");a.n(s).a},hko0:function(e,t,a){var s=a("t2e+");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)},rVr5:function(e,t,a){var s=a("8/4d");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)},rrJu:function(e,t,a){"use strict";var s={props:{errors:{type:Array,default:function(){return[]}}}},o=(a("SL/y"),a("KHd+")),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errors.length>0?a("div",{staticClass:"border-red ba br3 pa3"},[a("p",{staticClass:"mv0 fw6"},[e._v(e._s(e.$t("app.error_title")))]),e._v(" "),a("p",{staticClass:"mb0"},[e._v(e._s(e.errors[0]))])]):e._e()}),[],!1,null,"1482dffa",null);t.a=r.exports},"t2e+":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.dummy[data-v-7db48e47] {\n  right: 40px;\n  bottom: 20px;\n}\n",""])},ttlI:function(e,t,a){"use strict";a.r(t);var s={components:{Errors:a("rrJu").a},props:{employee:{type:Object,default:null}},data:function(){return{showEditor:!1,form:{emotion:null,errors:[]},updatedEmployee:null,successMessage:!1}},created:function(){this.updatedEmployee=this.employee},methods:{store:function(e){var t=this;this.successMessage=!0,this.form.emotion=e,axios.post("/"+this.$page.auth.company.id+"/dashboard/morale",this.form).then((function(e){t.updatedEmployee.has_logged_morale_today=!0})).catch((function(e){t.successMessage=!1,t.form.errors=e.response.data.errors}))}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cf mw7 center mb2 fw5"},[e._v("\n    🙃 "+e._s(e.$t("dashboard.morale_title"))+"\n  ")]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[e.successMessage?a("div",{staticClass:"tc"},[a("p",[e._v("🙌")]),e._v(" "),a("p",[e._v(e._s(e.$t("dashboard.morale_success_message")))])]):e._e(),e._v(" "),e.updatedEmployee.has_logged_morale_today&&!e.successMessage?a("div",{staticClass:"tc"},[a("p",[e._v("🙌")]),e._v(" "),a("p",[e._v(e._s(e.$t("dashboard.morale_already_logged")))])]):e._e(),e._v(" "),e.updatedEmployee.has_logged_morale_today||e.successMessage?e._e():a("div",[a("errors",{attrs:{errors:e.form.errors}}),e._v(" "),a("div",{staticClass:"flex-ns justify-center mt3 mb3"},[a("span",{staticClass:"btn mr3-ns mb0-ns mb2 dib-l db",attrs:{"data-cy":"log-morale-bad"},on:{click:function(t){return t.preventDefault(),e.store(1)}}},[e._v("\n            😡 "+e._s(e.$t("dashboard.morale_emotion_bad"))+"\n          ")]),e._v(" "),a("span",{staticClass:"btn mr3-ns mb0-ns mb2 dib-l db",attrs:{"data-cy":"log-morale-normal"},on:{click:function(t){return t.preventDefault(),e.store(2)}}},[e._v("\n            😌 "+e._s(e.$t("dashboard.morale_emotion_normal"))+"\n          ")]),e._v(" "),a("span",{staticClass:"btn dib-l db mb0-ns",attrs:{"data-cy":"log-morale-good"},on:{click:function(t){return t.preventDefault(),e.store(3)}}},[e._v("\n            🥳 "+e._s(e.$t("dashboard.morale_emotion_good"))+"\n          ")])])],1),e._v(" "),e.updatedEmployee.has_logged_morale_today||e.successMessage?e._e():a("p",{staticClass:"f7 mb0"},[e._v("\n        "+e._s(e.$t("dashboard.morale_rules"))+"\n      ")])])])])}),[],!1,null,"0c16d0b5",null);t.default=r.exports}}]);
//# sourceMappingURL=12.js.map?id=74b0317949b9aede6284