(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],n[o]&&p.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={1:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([20,0]),s()})({"+CAJ":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-l about"},[s("div",{staticClass:"row page-detail"},[s("div",{staticClass:"col-5"},[s("h1",[t._v(t._s(t.name))])]),s("div",{staticClass:"col-7"},[s("div",{staticClass:"pf-container"},[s("img",{attrs:{src:t.pathResolving("assets/images",t.profilePicture+".png"),alt:""}})])])]),s("div",{staticClass:"row introduction"},[s("div",{staticClass:"col-12"},[s("h2",[t._v(t._s(t.introduction.title))]),s("div",{staticClass:"content"},[s("p",{staticClass:"desktop"},[t._v(t._s(t.introduction.description.firstHalf))]),s("p",{staticClass:"desktop"},[t._v(t._s(t.introduction.description.secondHalf))]),s("p",{staticClass:"mobile"},[t._v(t._s(t.introduction.description.firstHalf+" "+t.introduction.description.secondHalf))])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[t._v(t._s(t.experience.title))])])]),t._l(t.workExperienceItems,function(t){return s("Experience",{attrs:{type:t.type,name:t.name,role:t.role,date:t.date,title:t.role,description:t.description}})}),s("div",{staticClass:"row study"},[s("div",{staticClass:"col-12"},[s("h2",[t._v(t._s(t.study.title))])])]),t._l(t.studyExperienceItems,function(t){return s("Experience",{attrs:{type:t.type,role:t.role,name:t.name,date:t.date,title:t.role,description:t.description}})})],2)},n=[],a=(s("f3/d"),s("dRSK"),s("Yc1h")),o=s("cdt3"),r={name:"about",mixins:[o["pathResolving"]],data:function(){return{name:"",profilePicture:"",introduction:{},experience:{},study:{},workExperienceItems:[],studyExperienceItems:[]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this,e=this.$globalData.content.pages,s=this.$globalData.content.experience,i=s.filter(function(t){return"work"===t.type}),n=s.filter(function(t){return"study"===t.type}),a=e.find(function(e){return t.$route.name===e.id});void 0!=a?(this.$set(this,"name",a.name),this.$set(this,"profilePicture",a.profilePicture),this.$set(this,"introduction",a.content.introduction),this.$set(this,"experience",a.content.experience),this.$set(this,"study",a.content.study),this.$set(this,"workExperienceItems",i),this.$set(this,"studyExperienceItems",n)):"about"==this.$route.name&&this.$router.push("/")}},components:{Experience:a["default"]}},c=r,u=(s("wk+b"),s("KHd+")),l=Object(u["a"])(c,i,n,!1,null,"4d415e8c",null);e["default"]=l.exports},"/S3s":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",{staticClass:"container-l footer",attrs:{id:"contact"}},[s("div",{staticClass:"footer-wrap"},[s("h1",[t._v(t._s(t.data.footerText)+" "),s("a",{attrs:{href:t.data.footerCtaLink}},[t._v(t._s(t.data.footerCta)+" 👦🏻")])]),s("div",{staticClass:"bottom"},[s("span",[t._v(t._s(t.data.copyRight))]),s("div",{staticClass:"socials"},t._l(t.data.socials,function(t){return s("a",{attrs:{href:t.link,target:"_blank"}},[s("Icon",{attrs:{name:t.name}})],1)}))])])])])},n=[],a=(s("VRzm"),s("za7x")),o={props:{data:{type:Object,required:!0}},components:{Icon:a["default"]}},r=o,c=(s("D6hT"),s("KHd+")),u=Object(c["a"])(r,i,n,!1,null,"a61f0706",null);e["default"]=u.exports},"/cFb":function(t,e,s){},"19Te":function(t,e,s){},20:function(t,e,s){t.exports=s("Vtdi")},"5KNy":function(t,e,s){"use strict";var i=s("uMyG"),n=s.n(i);n.a},"5pot":function(t,e,s){"use strict";var i=s("sivX"),n=s.n(i);n.a},"67C7":function(t,e,s){"use strict";var i=s("vV4j"),n=s.n(i);n.a},"6KX9":function(t,e,s){},"6ret":function(t,e,s){},"78Fp":function(t,e,s){"use strict";var i=s("RV18"),n=s.n(i);n.a},"8Iqb":function(t,e,s){"use strict";var i=s("cxMG"),n=s.n(i);n.a},"8SY7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-l work"},[s("div",{staticClass:"row page-detail"},[s("div",{staticClass:"col-5"},[s("h1",[t._v(t._s(t.name))])]),s("div",{staticClass:"col-7"},[s("p",[t._v(t._s(t.description))])])]),t._l(t.cases,function(e){return s("Case",{attrs:{title:e.name,type:e.type,year:e.date.year,preview:e.preview,description:e.description.firstHalf,link:t.routePath+"/"+e.id}})})],2)},n=[],a=(s("f3/d"),s("dRSK"),s("A11y")),o={name:"work",data:function(){return{name:"",description:"",cases:[],routePath:""}},components:{Case:a["default"]},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this,e=this.$globalData.content.pages,s=e.find(function(e){return t.$route.name===e.id}),i=this.$globalData.content.cases;this.$set(this,"routePath",this.$route.path),void 0!=s&&0!=i.length?(this.$set(this,"name",s.name),this.$set(this,"description",s.description),this.$set(this,"cases",i)):"work"==this.$route.name&&this.$router.push("/")}}},r=o,c=(s("5KNy"),s("KHd+")),u=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},A11y:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-justify case"},[s("div",{staticClass:"col-5 details"},[s("h3",[t._v(t._s(t.title))]),s("p",{staticClass:"type"},[t._v(t._s(t.type)),s("span",[t._v(t._s(t.year))])]),s("p",{staticClass:"about"},[t._v(t._s(t.description))]),s("Button",{attrs:{label:"View case",link:t.link}})],1),s("div",{staticClass:"col-7 preview"},[s("div",{staticClass:"preview-container"},[s("img",{attrs:{src:t.pathResolving("assets/images/cases",t.preview+".png"),alt:t.preview}})])])])},n=[],a=s("Kn2e"),o=s("cdt3"),r={name:"case",props:{title:{type:String,required:!0},type:{type:String,required:!1},year:{type:String,required:!1},preview:{type:String,required:!1},description:{type:String,required:!1},link:{type:String,required:!1,default:"/work"}},mixins:[o["pathResolving"]],components:{Button:a["default"]}},c=r,u=(s("jEhR"),s("KHd+")),l=Object(u["a"])(c,i,n,!1,null,"50ef9c50",null);e["default"]=l.exports},AMpM:function(t,e,s){},APBk:function(t,e,s){t.exports=s.p+"img/blanko.67865cb3.png"},BBiw:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"container-l header"},[s("router-link",{attrs:{to:"/",tag:"div"}},[s("a",{staticClass:"logo"},[t._v("Donovan.")])]),s("div",{staticClass:"nav-mobile-toggler",on:{click:function(e){t.toggleMobileNav()}}},[s("div",{class:["nav-icon",{active:t.mobileNavShow}]},[s("span"),s("span"),s("span")])]),s("nav",{class:["navigation",{show:t.mobileNavShow}]},[s("router-link",{attrs:{to:"/work"}},[t._v("Work")]),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),s("a",{attrs:{href:"#contact"}},[t._v("Contact")])],1)],1)])},n=[],a=(s("VRzm"),{data:function(){return{mobileNavShow:!1}},watch:{$route:function(){this.closeMobileNav()}},methods:{toggleBodyFixed:function(){var t=document.body;1==this.mobileNavShow?(t.classList.add("fixed-scroll"),window.scrollTo(0,0)):t.classList.remove("fixed-scroll")},toggleMobileNav:function(){this.mobileNavShow=!this.mobileNavShow,this.toggleBodyFixed()},closeMobileNav:function(){this.$set(this,"mobileNavShow",!1),this.toggleBodyFixed()}}}),o=a,r=(s("78Fp"),s("KHd+")),c=Object(r["a"])(o,i,n,!1,null,"93d86072",null);e["default"]=c.exports},CgiS:function(t,e,s){"use strict";var i=s("AMpM"),n=s.n(i);n.a},D6hT:function(t,e,s){"use strict";var i=s("s1gs"),n=s.n(i);n.a},DXKK:function(t,e,s){t.exports=s.p+"fonts/HelveticaNeue-Medium.e3f1b637.woff"},GNwj:function(t,e,s){t.exports=s.p+"img/dribbble.a33e4fae.svg"},J3vx:function(t,e,s){t.exports=s.p+"img/linkedin.0a989ee1.svg"},JfWh:function(t,e,s){},K6AL:function(t,e,s){"use strict";s.r(e);s("VRzm");e["default"]={content:{cases:[{id:"blanko",name:"Blanko",type:"Desktop app",date:{year:"2017",month:"11",day:"5"},description:{firstHalf:"Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Maar dit is gewoon Blanko!",secondHalf:"Second!"},preview:"blanko",links:[{title:"Github",url:"https://github.com/Blankoo/blanko-core/tree/master"},{title:"Dribbble",url:"https://dribbble.com/shots/4428701-Blanko-concept-website"},{title:"Website",url:"https://www.blankoapp.com/beta/"}],previews:[{name:"blanko-app.png",title:"Blanko app"},{name:"blanko-app.png",title:"Blanko app"}]},{id:"cde",name:"Crazy Dutch Experience",type:"Web app",date:{year:"2018",month:"7",day:"13"},description:{firstHalf:"Cras posuere velit ac egestas sodales. Suspendisse in nunc sed nisi tincidunt accumsan. Maar dit is gewoon de Crazy Dutch Experience!",secondHalf:"Second!"},preview:"cde",links:[{title:"Github",url:"https://github.com/donovanroubos/cde-website"},{title:"Website",url:"https://crazydutchexperience.com/"}],previews:[{name:"cde-website.gif",title:"Crazy Dutch Experience website"},{name:"cde-app.gif",title:"Crazy Dutch Experience campaign"}]}],experience:[{name:"Loyals",type:"work",description:"Aenean hendrerit felis sit amet leo lfobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.",date:{from:"Feb 2017",untill:"Present"}},{name:"Roeseboes",type:"work",description:"Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.",date:{from:"Dec 2016",untill:"Present"}},{name:"MediaMonks",type:"work",description:"Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.",date:{from:"Feb 2017",untill:"Jul 2017"}},{name:"Mediacollege Amsterdam",type:"study",role:"Mediadeveloper",description:"Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit. Vestibulum luctus risus quis consequat vulputate. Suspendisse malesuada diam tristique ex aliquam, ut efficitur mauris finibus.",date:{from:"2014",untill:"2018"}}],pages:[{id:"work",name:"Work",description:"Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit."},{id:"about",name:"About me",profilePicture:"me",content:{introduction:{title:"Introduction",description:{firstHalf:"My name is Donovan Roubos, 20 years old and a passionate frontend developer from the Netherlands🇳🇱. I recently graduated at Mediacollege Amsterdam as Mediadeveloper. I like to resolve design challenges, creating perfect user interfaces and writing semantic and structure based code.",secondHalf:"Knowing all aspects about an design and an technical decision is what I like, so I can understand how to create the best. I believe that’s the way to develop an good looking and functional product. Checkout my Github for more code details!"}},experience:{title:"Experience"},study:{title:"Study"}}}],footer:{footerText:"Do you have a good idea, question or something else?",footerCta:"Contact me",footerCtaurl:"mailto:hello@donovanroubos.nl",copyRight:"Copyright © 2018 Donovan Roubos",socials:[{name:"github",url:"https://github.com/donovanroubos"},{name:"dribbble",url:"https://dribbble.com/donovanroubos"},{name:"linkedin",url:"https://www.linkedin.com/in/donovan-roubos-a209a854/"}]}}}},Kn2e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{attrs:{tag:"button",to:t.link}},[t._v("\n  "+t._s(t.label)+"\n  "),s("span",{staticClass:"arrow"},[t._v("→")]),s("span",{staticClass:"line"})])},n=[],a={props:{label:{type:String,required:!0},route:{type:String,required:!1},disabled:{type:Boolean,required:!1},link:{type:String,required:!1}}},o=a,r=(s("8Iqb"),s("KHd+")),c=Object(r["a"])(o,i,n,!1,null,"6f481e86",null);e["default"]=c.exports},M1wQ:function(t,e,s){},"PT/r":function(t,e,s){t.exports=s.p+"fonts/HelveticaNeue-Medium.1832a508.woff2"},Pf3K:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"#app"}},[s("Header"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("keep-alive",[s("router-view")],1)],1),s("Footer",{attrs:{data:t.footer}})],1)},n=[],a=(s("VRzm"),s("BBiw")),o=s("/S3s"),r={name:"App",data:function(){return{mobileNavShow:!1,footer:{}}},created:function(){this.fetchData()},watch:{$route:function(){document.title=this.$route.meta.title}},methods:{fetchData:function(){var t=this.$globalData.content.footer;void 0!=t?this.$set(this,"footer",t):console.log("Error")}},components:{Header:a["default"],Footer:o["default"]}},c=r,u=(s("Rlgg"),s("KHd+")),l=Object(u["a"])(c,i,n,!1,null,"85922fa8",null);e["default"]=l.exports},QQQs:function(t,e,s){t.exports=s.p+"fonts/HelveticaNeue.2d1c965b.woff"},QYek:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-center case-preview"},[s("div",{staticClass:"col-10 preview"},[s("img",{attrs:{src:t.pathResolving("assets/images/cases/previews",""+t.image)}})])])},n=[],a=s("cdt3"),o={props:{image:{type:String,required:!0}},mixins:[a["pathResolving"]]},r=o,c=(s("U2gN"),s("KHd+")),u=Object(c["a"])(r,i,n,!1,null,"26d1dd8d",null);e["default"]=u.exports},QctN:function(t,e,s){"use strict";s.r(e);s("VRzm");var i=s("Kw5r"),n=s("jE9Z"),a=s("u1G+"),o=s("+CAJ"),r=s("8SY7"),c=s("n+SR");i["a"].use(n["a"]),e["default"]=new n["a"]({mode:"history",routes:[{path:"*",component:a["default"]},{path:"/",name:"home",component:a["default"],meta:{title:"Donovan Roubos | Portfolio"}},{path:"/about",name:"about",component:o["default"],meta:{title:"Donovan Roubos | About"}},{path:"/work",name:"work",component:r["default"],props:!0,meta:{title:"Donovan Roubos | Work"}},{path:"/work/:caseName",name:"work",component:c["default"],props:!0,meta:{title:"Donovan Roubos | Work"}}],scrollBehavior:function(t,e,s){return{x:0,y:0}}})},Qu3F:function(t,e,s){t.exports=s.p+"img/cde.94c3de46.png"},RV18:function(t,e,s){},Rlgg:function(t,e,s){"use strict";var i=s("VZIH"),n=s.n(i);n.a},T4fG:function(t,e,s){},U2gN:function(t,e,s){"use strict";var i=s("tQ8X"),n=s.n(i);n.a},V0UP:function(t,e,s){"use strict";var i=s("JfWh"),n=s.n(i);n.a},VVaZ:function(t,e,s){t.exports=s.p+"fonts/DroidSansMono.8247e36f.woff"},VZIH:function(t,e,s){},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var i=s("Kw5r"),n=s("Pf3K"),a=s("QctN"),o=(s("T4fG"),s("K6AL"));i["a"].config.productionTip=!1,o["default"].install=function(){Object.defineProperty(i["a"].prototype,"$globalData",{get:function(){return o["default"]}})},i["a"].use(o["default"]),new i["a"]({router:a["default"],render:function(t){return t(n["default"])}}).$mount("#app")},YNPY:function(t,e,s){t.exports=s.p+"img/cde-app.ab1e0ced.gif"},Yc1h:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row align-justify experience"},[s("div",{staticClass:"col-5"},[s("h3",[t._v(t._s(t.name))]),t.role?s("div",{staticClass:"role"},[t._v("\n      "+t._s(t.role)+"\n    ")]):t._e(),t.date?s("div",{staticClass:"date"},[t._v("\n      "+t._s(t.date.from+" - "+t.date.untill)+"\n    ")]):t._e()]),s("div",{staticClass:"col-7"},[s("p",[t._v(t._s(t.description))])])])},n=[],a={name:"experience",props:{type:{type:String,required:!0},name:{type:String,required:!0},date:{type:Object,required:!1},role:{type:String,required:!1},description:{type:String,required:!0}}},o=a,r=(s("yN4k"),s("KHd+")),c=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},cdt3:function(t,e,s){"use strict";s.r(e),s.d(e,"pathResolving",function(){return i});var i={methods:{pathResolving:function(t,e){return s("qOw0")("./".concat(t,"/").concat(e))}}}},cxMG:function(t,e,s){},flTw:function(t,e,s){t.exports=s.p+"fonts/HelveticaNeue.aa01b0b6.woff2"},ghHl:function(t,e,s){t.exports=s.p+"img/github.f95e4775.svg"},iby8:function(t,e,s){t.exports=s.p+"img/me.7ef29a27.png"},jEhR:function(t,e,s){"use strict";var i=s("zkfD"),n=s.n(i);n.a},k0Xd:function(t,e,s){"use strict";var i=s("m9pV"),n=s.n(i);n.a},kjs6:function(t,e,s){},m9pV:function(t,e,s){},"n+SR":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-l work"},[s("div",{staticClass:"row page-detail"},[s("div",{staticClass:"col-12"},[s("h1",[t._v(t._s(t.caseItem.name)+" ")]),s("div",{staticClass:"content"},[s("p",{staticClass:"desktop"},[t._v(t._s(t.caseItem.description.firstHalf))]),s("p",{staticClass:"desktop"},[t._v(t._s(t.caseItem.description.secondHalf))]),s("p",{staticClass:"mobile"},[t._v(t._s(t.caseItem.description.firstHalf+" "+t.caseItem.description.secondHalf))])])])]),s("CasePreview",{attrs:{image:t.caseItem.previews[0].name}}),s("CaseLinks",{attrs:{links:t.caseItem.links}}),s("CasePreview",{attrs:{image:t.caseItem.previews[1].name}})],1)},n=[],a=(s("f3/d"),s("dRSK"),s("VRzm"),s("pEJu")),o=s("QYek"),r={name:"work",data:function(){return{caseItem:{}}},props:{caseName:{type:String,required:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},components:{CaseLinks:a["default"],CasePreview:o["default"]},methods:{fetchData:function(){var t=this,e=this.$globalData.content.cases,s=e.find(function(e){return t.$route.params.caseName===e.id});void 0!=s?this.$set(this,"caseItem",s):"work"==this.$route.name&&this.$router.push("/work")}}},c=r,u=(s("67C7"),s("KHd+")),l=Object(u["a"])(c,i,n,!1,null,"ce35d952",null);e["default"]=l.exports},nC0Q:function(t,e,s){t.exports=s.p+"fonts/DroidSansMono.bc7a4f2b.woff2"},nF67:function(t,e,s){t.exports=s.p+"img/blanko-app.3772ecb5.png"},pEJu:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"case-links"},[s("div",{staticClass:"row align-center"},[t._m(0),s("div",{staticClass:"col-6"},[s("div",{staticClass:"links"},t._l(t.links,function(e){return s("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])}))])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6"},[s("h2",[t._v("Links")])])}],a={props:{links:{type:Array,required:!0}}},o=a,r=(s("V0UP"),s("KHd+")),c=Object(r["a"])(o,i,n,!1,null,"b9e9b532",null);e["default"]=c.exports},qF2L:function(t,e,s){},qOw0:function(t,e,s){var i={"./App":"Pf3K","./App.vue":"Pf3K","./assets/fonts/DroidSansMono.woff":"VVaZ","./assets/fonts/DroidSansMono.woff2":"nC0Q","./assets/fonts/HelveticaNeue-Medium.woff":"DXKK","./assets/fonts/HelveticaNeue-Medium.woff2":"PT/r","./assets/fonts/HelveticaNeue.woff":"QQQs","./assets/fonts/HelveticaNeue.woff2":"flTw","./assets/images/cases/blanko.png":"APBk","./assets/images/cases/cde.png":"Qu3F","./assets/images/cases/previews/blanko-app.png":"nF67","./assets/images/cases/previews/cde-app.gif":"YNPY","./assets/images/cases/previews/cde-website.gif":"wRJy","./assets/images/icons/dribbble.svg":"GNwj","./assets/images/icons/github.svg":"ghHl","./assets/images/icons/linkedin.svg":"J3vx","./assets/images/me.png":"iby8","./components/Button":"Kn2e","./components/Button.vue":"Kn2e","./components/Case":"A11y","./components/Case.vue":"A11y","./components/CaseLinks":"pEJu","./components/CaseLinks.vue":"pEJu","./components/CasePreview":"QYek","./components/CasePreview.vue":"QYek","./components/Experience":"Yc1h","./components/Experience.vue":"Yc1h","./components/Footer":"/S3s","./components/Footer.vue":"/S3s","./components/Header":"BBiw","./components/Header.vue":"BBiw","./components/Icon":"za7x","./components/Icon.vue":"za7x","./components/IntroAnimation":"qYbu","./components/IntroAnimation.vue":"qYbu","./globalData":"K6AL","./globalData.js":"K6AL","./main":"Vtdi","./main.js":"Vtdi","./mixins/pathResolving":"cdt3","./mixins/pathResolving.js":"cdt3","./router":"QctN","./router.js":"QctN","./scss/app.scss":"T4fG","./scss/base/_fonts.scss":"6KX9","./scss/base/_mixins.scss":"19Te","./scss/base/_variables.scss":"qF2L","./scss/layout/_core.scss":"M1wQ","./scss/layout/_flex-grid.scss":"kjs6","./views/About":"+CAJ","./views/About.vue":"+CAJ","./views/Case":"n+SR","./views/Case.vue":"n+SR","./views/Home":"u1G+","./views/Home.vue":"u1G+","./views/Work":"8SY7","./views/Work.vue":"8SY7"};function n(t){var e=a(t);return s(e)}function a(t){var e=i[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="qOw0"},qYbu:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro-animation",style:{height:"calc(100vh - "+this.headerHeight+"px)"}},[s("div",{staticClass:"intro-container"},[s("div",{staticClass:"line-numbers",style:{height:this.messageHeight+"px"}},[t._v("\n      01 02 03 04 05 06 07 08\n    ")]),t._m(0)]),s("div",{staticClass:"backdrop"})])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-container"},[s("div",{staticClass:"message"},[t._v("\n        Donovan — A passionate Frontend <developer/> who loves awesome "),s("span",[t._v("design")]),t._v(".\n      ")])])}],a={name:"IntroAnimation",data:function(){return{headerHeight:0,messageHeight:0}},methods:{calcHeights:function(){this.$set(this,"headerHeight",document.querySelector(".header").offsetHeight),this.$set(this,"messageHeight",document.querySelector(".message").offsetHeight)}},mounted:function(){var t=this;this.calcHeights(),window.onresize=function(e){t.calcHeights()}}},o=a,r=(s("CgiS"),s("KHd+")),c=Object(r["a"])(o,i,n,!1,null,"8ccf10fc",null);e["default"]=c.exports},s1gs:function(t,e,s){},sivX:function(t,e,s){},tQ8X:function(t,e,s){},"u1G+":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-l home"},[s("IntroAnimation"),t._m(0),t._l(t.recentCases,function(t){return s("Case",{attrs:{title:t.name,type:t.type,year:t.date.year,preview:t.preview,description:t.description.firstHalf,link:"work/"+t.id}})}),s("div",{staticClass:"row about-me"},[s("div",{staticClass:"col-5"},[s("h1",[t._v(t._s(t.aboutMeTitle))])]),s("div",{staticClass:"col-7"},[s("p",[t._v(t._s(t.aboutMeShortData))]),s("Button",{attrs:{label:"Read more",link:"about"}})],1)])],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row recent-work"},[s("div",{staticClass:"col-5"},[s("h1",[t._v("Recent work")])]),s("div",{staticClass:"col-7"},[s("p",[t._v("Aenean hendrerit felis sit amet leo lobortis malesuada. Nullam sit amet arcu tincidunt, condimentum ligula vel, pretium velit.")])])])}],a=(s("f3/d"),s("dRSK"),s("VRzm"),s("qYbu")),o=s("A11y"),r=s("Kn2e"),c={name:"home",data:function(){return{recentCases:[],aboutMeShortData:"",aboutMeTitle:""}},components:{IntroAnimation:a["default"],Case:o["default"],Button:r["default"]},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$globalData.content.pages,e=t.find(function(t){return"about"===t.id});this.$set(this,"aboutMeShortData",e.content.introduction.description.firstHalf),this.$set(this,"aboutMeTitle",e.name),this.$set(this,"recentCases",this.$globalData.content.cases)}}},u=c,l=(s("5pot"),s("KHd+")),d=Object(l["a"])(u,i,n,!1,null,null,null);e["default"]=d.exports},uMyG:function(t,e,s){},vV4j:function(t,e,s){},wRJy:function(t,e,s){t.exports=s.p+"img/cde-website.75d5d4d9.gif"},"wk+b":function(t,e,s){"use strict";var i=s("/cFb"),n=s.n(i);n.a},yN4k:function(t,e,s){"use strict";var i=s("6ret"),n=s.n(i);n.a},za7x:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["icon",t.name,t.className],style:{width:t.width+"px",height:t.height+"px"}},[s("img",{attrs:{src:t.pathResolving("assets/images/icons",t.name+".svg"),draggable:"false"}})])},n=[],a=(s("xfY5"),s("cdt3")),o={name:"Icon",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},name:{type:String,required:!0},className:{type:String,required:!1}},mixins:[a["pathResolving"]]},r=o,c=(s("k0Xd"),s("KHd+")),u=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},zkfD:function(t,e,s){}});
//# sourceMappingURL=app.b4cbde78.js.map