(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a747d29"],{1513:function(t,e,a){"use strict";a("4004")},"2d06":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("WidgetsDropdown"),a("CCard",[a("CCardBody")],1),a("CRow",[a("CCol",{attrs:{md:"12"}},[a("CCard",[a("CCardBody",[a("h4",[t._v("New Job Vacancies")]),a("CDataTable",{staticClass:"mb-0 table-outline",attrs:{hover:"",items:t.tableItems,fields:t.tableFields,"head-color":"light","no-sorting":""},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.item;return a("td",{staticClass:"text-center"},[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img",attrs:{src:e.avatar.url,alt:""}}),a("span",{staticClass:"c-avatar-status",class:"bg-"+(e.avatar.status||"secondary")})])])}},{key:"employer",fn:function(e){var r=e.item;return a("td",{},[a("div",[t._v(t._s(r.employer.name))]),a("div",{staticClass:"small text-muted"},[a("span",[t._v(" Registered: "+t._s(r.employer.registered)+" ")])])])}},{key:"role",fn:function(e){var r=e.item;return a("td",{},[a("div",[t._v(t._s(r.role.name))])])}},{key:"pay",fn:function(e){var r=e.item;return a("td",{},[a("div",[t._v(t._s(r.pay.name))])])}},{key:"country",fn:function(e){var r=e.item;return a("td",{staticClass:"text-center"},[a("CIcon",{attrs:{name:r.country.flag,height:"25"}}),a("div",{staticClass:"small text-muted"},[a("span",[a("small",{staticClass:"text-muted"},[t._v(t._s(r.country.location))])])])],1)}},{key:"closing_date",fn:function(e){var r=e.item;return a("td",{},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"float-left"},[a("strong",[t._v(t._s(r.closing_date.value)+"%")])]),a("div",{staticClass:"float-right"},[a("small",{staticClass:"text-muted"},[t._v(t._s(r.closing_date.period))])])]),a("CProgress",{staticClass:"progress-xs",attrs:{color:t.color(r.closing_date.value)},model:{value:r.closing_date.value,callback:function(e){t.$set(r.closing_date,"value",e)},expression:"item.closing_date.value"}})],1)}},{key:"activity",fn:function(e){var r=e.item;return a("td",{},[a("div",{staticClass:"small text-muted"},[t._v("Last login")]),a("strong",[t._v(t._s(r.activity))])])}}])})],1)],1)],1)],1)],1)},o=[],n=a("4375"),s=a("f236"),i=a("ed3a"),l={name:"Index",components:{MainChartExample:n["a"],WidgetsDropdown:s["a"],WidgetsBrand:i["a"]},data:function(){return{selected:"Month",tableItems:[{avatar:{url:"img/kpmg.png",status:"success"},employer:{name:"Microsoft Inc.",registered:"October 1, 2019"},role:{name:"Senior Financial Analyst",new:!0},pay:{name:"£65K/yr",new:!0},country:{name:"UK",flag:"cif-gb",location:"London, UK"},closing_date:{value:50,period:"Active Now - Expires: October 10, 2021"},posted_at:"10 sec ago"},{avatar:{url:"img/microsoft.png",status:"success"},employer:{name:"Microsoft Inc.",registered:"Jan 1, 2015"},role:{name:"Product Manager",new:!0},pay:{name:"£80K/yr",new:!0},country:{name:"USA",flag:"cif-us",location:"New York, USA"},closing_date:{value:60,period:"Active Now - Expires: October 10, 2021"},posted_at:"5 days ago"},{avatar:{url:"img/mastercard.png",status:"success"},employer:{name:"Microsoft Inc.",registered:"October 1, 2019"},role:{name:"Human Resource Manager",new:!0},pay:{name:"£52K/yr",new:!0},country:{name:"CA",flag:"cif-ca",location:"Alberta, Canada"},closing_date:{value:50,period:"Active Now - Expires: April 23, 2022"},posted_at:"3days ago"},{avatar:{url:"img/twitter.png",status:"success"},employer:{name:"Twitter Inc.",registered:"September 24, 2019"},role:{name:"Engineering Manager",new:!0},pay:{name:"£200K/yr",new:!0},country:{name:"FRANCE",flag:"cif-fr",location:"Paris, France"},closing_date:{value:30,period:"Active Now - Expires: April 23, 2022"},posted_at:"7days ago"},{avatar:{url:"img/stripe.png",status:"success"},employer:{name:"Stripe Inc.",registered:"September 24, 2019"},role:{name:"Lead Data Scientist",new:!0},pay:{name:"£120K/yr",new:!0},country:{name:"UK",flag:"cif-gb",location:"Manchester, UK"},closing_date:{value:30,period:"Active Now - Expires: April 23, 2022"},posted_at:"1days ago"}],tableFields:[{key:"avatar",label:"",_classes:"text-center"},{key:"employer"},{key:"role"},{key:"pay"},{key:"country",_classes:"text-center"},{key:"closing_date",label:"Closing Date"},{key:"posted_at",label:"Posted At",_classes:"text-center"}]}},methods:{color:function(t){var e;return t<=25?e="info":t>25&&t<=50?e="success":t>50&&t<=75?e="warning":t>75&&t<=100&&(e="danger"),e}}},c=l,d=a("2877"),m=Object(d["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},4004:function(t,e,a){},4375:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CChartLine",{attrs:{datasets:t.defaultDatasets,options:t.defaultOptions,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}})},o=[],n=a("f485"),s=a("52d7"),i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if("undefined"===typeof t)throw new TypeError("Hex color is not defined");var a,r,o,n=t.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!n)throw new Error("".concat(t," is not a valid hex color"));return 7===t.length?(a=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16)):(a=parseInt(t.slice(1,2),16),r=parseInt(t.slice(2,3),16),o=parseInt(t.slice(3,5),16)),"rgba(".concat(a,", ").concat(r,", ").concat(o,", ").concat(e/100,")")},l=i;function c(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var d={name:"MainChartExample",components:{CChartLine:n["CChartLine"]},computed:{defaultDatasets:function(){for(var t=Object(s["a"])("success2")||"#4dbd74",e=Object(s["a"])("info")||"#20a8d8",a=Object(s["a"])("danger")||"#f86c6b",r=27,o=[],n=[],i=[],d=0;d<=r;d++)o.push(c(50,200)),n.push(c(80,100)),i.push(65);return[{label:"My First dataset",backgroundColor:l(e,10),borderColor:e,pointHoverBackgroundColor:e,borderWidth:2,data:o},{label:"My Second dataset",backgroundColor:"transparent",borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:n},{label:"My Third dataset",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:a,borderWidth:1,borderDash:[8,5],data:i}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}}},m=d,p=a("2877"),u=Object(p["a"])(m,r,o,!1,null,null,null);e["a"]=u.exports},ed3a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CRow",[t.noCharts?[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"56"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"56"}})],1)],1)]:[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[65,59,84,84,51,55,40],label:"Friends",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[1,13,9,17,34,41,38],label:"Followers",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}})],1)],1),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"52"}}),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[35,23,56,22,97,23,64],label:"Followers",labels:"months"}})],1)],1)]],2)},o=[],n=a("4c27"),s={name:"WidgetsBrand",components:{CChartLineSimple:n["CChartLineSimple"]},props:{noCharts:Boolean}},i=s,l=(a("1513"),a("2877")),c=Object(l["a"])(i,r,o,!1,null,"319234b8",null);e["a"]=c.exports},f236:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CRow",[a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"primary",header:"65",text:"Profile Views"},scopedSlots:t._u([{key:"default",fn:function(){return[a("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[a("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[a("CDropdownItem",[t._v("Action")]),a("CDropdownItem",[t._v("Another action")]),a("CDropdownItem",[t._v("Something else here...")]),a("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[a("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[65,59,84,84,51,55,40],"point-hover-background-color":"primary",label:"Members",labels:"months"}})]},proxy:!0}])})],1),a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"info",header:"149",text:"Total Jobs In My Sector"},scopedSlots:t._u([{key:"default",fn:function(){return[a("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end",caret:!1},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[a("CIcon",{attrs:{name:"cil-location-pin"}})]},proxy:!0}])},[a("CDropdownItem",[t._v("Action")]),a("CDropdownItem",[t._v("Another action")]),a("CDropdownItem",[t._v("Something else here...")]),a("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[a("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[1,18,9,17,34,22,11],"point-hover-background-color":"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}})]},proxy:!0}])})],1),a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"warning",header:"52",text:"Employers In My Field"},scopedSlots:t._u([{key:"default",fn:function(){return[a("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[a("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[a("CDropdownItem",[t._v("Action")]),a("CDropdownItem",[t._v("Another action")]),a("CDropdownItem",[t._v("Something else here...")]),a("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[a("CChartLineSimple",{staticClass:"mt-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgba(255,255,255,.2)","data-points":[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},"point-hover-background-color":"warning",label:"Members",labels:"months"}})]},proxy:!0}])})],1),a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"danger",header:"18",text:"New Job Vacancies"},scopedSlots:t._u([{key:"default",fn:function(){return[a("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[a("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[a("CDropdownItem",[t._v("Action")]),a("CDropdownItem",[t._v("Another action")]),a("CDropdownItem",[t._v("Something else here...")]),a("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[a("CChartBarSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgb(250, 152, 152)",label:"Members",labels:"months"}})]},proxy:!0}])})],1)],1)},o=[],n=a("4c27"),s={name:"WidgetsDropdown",components:{CChartLineSimple:n["CChartLineSimple"],CChartBarSimple:n["CChartBarSimple"]}},i=s,l=a("2877"),c=Object(l["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4a747d29.2ac21c1a.js.map