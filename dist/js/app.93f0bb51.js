(function(e){function t(t){for(var s,o,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)o=r[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={1:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([20,0]),n()})({"+CAJ":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-l about"},[n("div",{staticClass:"row page-detail"},[n("div",{staticClass:"col-5"},[n("h1",[e._v(e._s(e.name))])]),n("div",{staticClass:"col-7"},[n("div",{staticClass:"pf-container"},[n("img",{attrs:{src:e.pathResolving("assets/images",e.profilePicture+".png"),alt:""}})])])]),n("div",{staticClass:"row introduction"},[n("div",{staticClass:"col-12"},[n("h2",[e._v(e._s(e.introduction.title))]),n("div",{staticClass:"content"},[n("p",{staticClass:"desktop"},[e._v(e._s(e.introduction.description.firstHalf))]),n("p",{staticClass:"desktop"},[e._v(e._s(e.introduction.description.secondHalf))]),n("p",{staticClass:"mobile"},[e._v(e._s(e.introduction.description.firstHalf+" "+e.introduction.description.secondHalf))])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h2",[e._v(e._s(e.experience.title))])])]),e._l(e.workExperienceItems,function(e){return n("Experience",{attrs:{type:e.type,name:e.name,role:e.role,date:e.date,title:e.role,description:e.description}})}),n("div",{staticClass:"row study"},[n("div",{staticClass:"col-12"},[n("h2",[e._v(e._s(e.study.title))])])]),e._l(e.studyExperienceItems,function(e){return n("Experience",{attrs:{type:e.type,role:e.role,name:e.name,date:e.date,title:e.role,description:e.description}})})],2)},a=[],i=(n("f3/d"),n("dRSK"),n("VRzm"),n("Yc1h")),o=n("cdt3"),r={name:"about",mixins:[o["pathResolving"]],data:function(){return{name:"",profilePicture:"",introduction:{},experience:{},study:{},workExperienceItems:[],studyExperienceItems:[]}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this,t=this.$globalData.content.pages,n=this.$globalData.content.experience,s=n.filter(function(e){return"work"===e.type}),a=n.filter(function(e){return"study"===e.type}),i=t.find(function(t){return e.$route.name===t.id});void 0!=i?(this.$set(this,"name",i.name),this.$set(this,"profilePicture",i.profilePicture),this.$set(this,"introduction",i.content.introduction),this.$set(this,"experience",i.content.experience),this.$set(this,"study",i.content.study),this.$set(this,"workExperienceItems",s),this.$set(this,"studyExperienceItems",a)):"about"==this.$route.name&&this.$router.push("/")}},components:{Experience:i["default"]}},c=r,l=(n("wk+b"),n("KHd+")),u=Object(l["a"])(c,s,a,!1,null,"4d415e8c",null);t["default"]=u.exports},"/S3s":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",{staticClass:"container-l footer",attrs:{id:"contact"}},[n("div",{staticClass:"footer-wrap"},[n("h1",[e._v(e._s(e.data.footerText)+" "),n("a",{attrs:{href:e.data.footerCtaUrl}},[e._v(e._s(e.data.footerCta)+" 👦🏻")])]),n("div",{staticClass:"bottom"},[n("span",[e._v(e._s(e.data.copyRight))]),n("div",{staticClass:"socials"},e._l(e.data.socials,function(e){return n("a",{attrs:{href:e.url,target:"_blank"}},[n("Icon",{attrs:{name:e.name}})],1)}))])])])])},a=[],i=n("za7x"),o={props:{data:{type:Object,required:!0}},components:{Icon:i["default"]}},r=o,c=(n("G2zK"),n("KHd+")),l=Object(c["a"])(r,s,a,!1,null,"fd93622a",null);t["default"]=l.exports},"/cFb":function(e,t,n){},"19Te":function(e,t,n){},"1EpG":function(e,t,n){},20:function(e,t,n){e.exports=n("Vtdi")},"5KNy":function(e,t,n){"use strict";var s=n("uMyG"),a=n.n(s);a.a},"5pot":function(e,t,n){"use strict";var s=n("sivX"),a=n.n(s);a.a},"6KX9":function(e,t,n){},"6ret":function(e,t,n){},"8Iqb":function(e,t,n){"use strict";var s=n("cxMG"),a=n.n(s);a.a},"8SY7":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-l work"},[n("div",{staticClass:"row page-detail"},[n("div",{staticClass:"col-12"},[n("h1",[e._v(e._s(e.name))])])]),e._l(e.cases,function(t){return n("Case",{attrs:{title:t.name,type:t.type,year:t.date.year,preview:t.preview,description:t.description.firstHalf,link:e.routePath+"/"+t.id}})})],2)},a=[],i=(n("f3/d"),n("dRSK"),n("VRzm"),n("A11y")),o={name:"work",data:function(){return{name:"",description:"",cases:[],routePath:""}},components:{Case:i["default"]},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this,t=this.$globalData.content.pages,n=t.find(function(t){return e.$route.name===t.id}),s=this.$globalData.content.cases;this.$set(this,"routePath",this.$route.path),void 0!=n&&0!=s.length?(this.$set(this,"name",n.name),this.$set(this,"description",n.description),this.$set(this,"cases",s)):"work"==this.$route.name&&this.$router.push("/")}}},r=o,c=(n("5KNy"),n("KHd+")),l=Object(c["a"])(r,s,a,!1,null,null,null);t["default"]=l.exports},A11y:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row align-justify case"},[n("div",{staticClass:"col-5 details"},[n("h3",[e._v(e._s(e.title))]),n("p",{staticClass:"type"},[e._v(e._s(e.type)),n("span",[e._v(e._s(e.year))])]),n("p",{staticClass:"about"},[e._v(e._s(e.description))]),n("Button",{attrs:{label:"View case",link:e.link}})],1),n("div",{staticClass:"col-7 preview"},[n("div",{staticClass:"preview-container"},[n("img",{attrs:{src:e.pathResolving("assets/images/cases",e.preview+".png"),alt:e.preview}})])])])},a=[],i=n("Kn2e"),o=n("cdt3"),r={name:"case",props:{title:{type:String,required:!0},type:{type:String,required:!1},year:{type:String,required:!1},preview:{type:String,required:!1},description:{type:String,required:!1},link:{type:String,required:!1,default:"/work"}},mixins:[o["pathResolving"]],components:{Button:i["default"]}},c=r,l=(n("jEhR"),n("KHd+")),u=Object(l["a"])(c,s,a,!1,null,"50ef9c50",null);t["default"]=u.exports},AMpM:function(e,t,n){},APBk:function(e,t,n){e.exports=n.p+"img/blanko.67865cb3.png"},BBiw:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",{staticClass:"container-l header"},[n("router-link",{attrs:{to:"/",tag:"div"}},[n("a",{staticClass:"logo"},[e._v("Donovan.")])]),n("div",{staticClass:"nav-mobile-toggler",on:{click:function(t){e.toggleMobileNav()}}},[n("div",{class:["nav-icon",{active:e.mobileNavShow}]},[n("span"),n("span"),n("span")])]),n("nav",{class:["navigation",{show:e.mobileNavShow}]},[n("router-link",{attrs:{to:"/work"}},[e._v("Work")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("a",{attrs:{href:"#contact"},on:{click:e.closeMobileNav}},[e._v("Contact")])],1)],1)])},a=[],i={data:function(){return{mobileNavShow:!1}},watch:{$route:function(){this.closeMobileNav()}},methods:{toggleBodyFixed:function(){var e=document.body;1==this.mobileNavShow?(e.classList.add("fixed-scroll"),window.scrollTo(0,0)):e.classList.remove("fixed-scroll")},toggleMobileNav:function(){this.mobileNavShow=!this.mobileNavShow,this.toggleBodyFixed()},closeMobileNav:function(){this.$set(this,"mobileNavShow",!1),this.toggleBodyFixed()}}},o=i,r=(n("Yfks"),n("KHd+")),c=Object(r["a"])(o,s,a,!1,null,"4e5abcca",null);t["default"]=c.exports},CgiS:function(e,t,n){"use strict";var s=n("AMpM"),a=n.n(s);a.a},CugP:function(e,t,n){},DXKK:function(e,t,n){e.exports=n.p+"fonts/HelveticaNeue-Medium.e3f1b637.woff"},G2zK:function(e,t,n){"use strict";var s=n("CugP"),a=n.n(s);a.a},GNwj:function(e,t,n){e.exports=n.p+"img/dribbble.a33e4fae.svg"},J3vx:function(e,t,n){e.exports=n.p+"img/linkedin.0a989ee1.svg"},JfWh:function(e,t,n){},K6AL:function(e,t,n){"use strict";n.r(t);n("VRzm");t["default"]={content:{cases:[{id:"blanko",name:"Blanko 🕞",type:"Desktop app",date:{year:"2017",month:"11",day:"5"},description:{firstHalf:"Together with my partners Noud Adrichem and Jesse Cok, I’ve created a task manager desktop app named Blanko. With Blanko we like to make task managing with invoicing and time tracking easy for freelancers like us.",secondHalf:"It’s created with Electron and ReactJS frameworks. The development is still going on and the app has an educational purpose, so it’s open source! Check out my GitHub to see more."},preview:"blanko",links:[{title:"Github",url:"https://github.com/Blankoo/blanko-core/tree/master"},{title:"Dribbble",url:"https://dribbble.com/shots/4428701-Blanko-concept-website"},{title:"Website",url:"https://www.blankoapp.com/beta/"}],previews:[{name:"blanko-app.png",title:"Blanko app"},{name:"blanko-app.png",title:"Blanko app"}]},{id:"cde",name:"Crazy Dutch Experience 🍸",type:"Web app",date:{year:"2018",month:"7",day:"13"},description:{firstHalf:'With a team of five fellow students, I passed my final exams with an end year project. The client Kees Koelewijn has a concept called the "Crazy Dutch Experience". He likes to sell various types of consuming products with a red pepper in it. With those thoughts he produced 900 bottles of spcial gin called the Crazy Dutch Dry Gin.',secondHalf:"Our job was to create an informative website and a campaign to create awareness around the whole experience. The website with campaign is build in VueJS with a NodeJS API backend. Check out my GitHub to see more details or create your own cocktail!"},preview:"cde",links:[{title:"Github",url:"https://github.com/donovanroubos/cde-website"},{title:"Website",url:"https://crazydutchexperience.com/"}],previews:[{name:"cde-website.gif",title:"Crazy Dutch Experience website"},{name:"cde-app.gif",title:"Crazy Dutch Experience campaign"}]}],experience:[{name:"Roeseboes",type:"work",description:"Besides being an employee, I'm also busy with my own company called Roeseboes (my surname with a Dutch twist). With Roeseboes I’m helping small and medium-sized enterprises to make internet marketing possible. I do this by using the latest techniques and of course love and passion.",date:{from:"Dec 2016",untill:"Present"}},{name:"Yummygum",type:"work",description:"From today on I'm focussing on creating the best reusable web components at the most awesome design agency Yummygum. We're never not working on something great. That means I'm always working on exciting new projects and realizing the most challenging UI's.",date:{from:"Sept 2018",untill:"Present"}},{name:"Loyals",type:"work",description:"In a 6 months internship at Loyals in Mijdrecht I learned a lot. After that, I stayed as developer. To work in a fast growing digital agency was an great experience for me!",date:{from:"Sept 2017",untill:"Aug 2018"}},{name:"MediaMonks",type:"work",description:"Being an intern Monk at the world's largest creative production company was a great experience. I was involved within a team of 9 developers on a dedicated project called Slimming World. I learned a lot about new techniques like React and had to get beer every Friday exactly at 16:30pm 🍺.",date:{from:"Feb 2017",untill:"Jul 2017"}},{name:"Mediacollege Amsterdam",type:"study",role:"Mediadeveloper",description:"As a Mediadeveloper student at the Mediacollege in Amsterdam I learned about how to operate in a team and how to be a good teamlead, interact with external clients and of course (web) development in the broadest sense. My study was focussed on backend development, however, my ambition was and still is being an awesome frontend developer!",date:{from:"2014",untill:"2018"}}],pages:[{id:"work",name:"Recent work",description:"Underneath you see a selection of what I’ve been working on recently."},{id:"about",name:"About me",profilePicture:"me",content:{introduction:{title:"Introduction",description:{firstHalf:"My name is Donovan Roubos, 21 years old, from the Netherlands 🇳🇱 and a passionate frontend developer. I recently graduated at Mediacollege Amsterdam as Mediadeveloper. I like to resolve design challenges, creating perfect user interfaces and writing semantic and structure based code.",secondHalf:"Knowing all aspects about design and technical decisions is what I like. In this way I get a good understanding and knowing how to create the best. I'm convinced that that’s the way to develop a good looking and functional product. Checkout my Github for more code!"}},experience:{title:"Experience"},study:{title:"Study"}}}],footer:{footerText:"Do you have a good idea, question or something else?",footerCta:"Contact me",footerCtaUrl:"mailto:hello@donovanroubos.nl",copyRight:"Copyright © 2019 Donovan Roubos",socials:[{name:"github",url:"https://github.com/donovanroubos"},{name:"dribbble",url:"https://dribbble.com/donovanroubos"},{name:"linkedin",url:"https://www.linkedin.com/in/donovan-roubos-a209a854/"}]}}}},Kn2e:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{attrs:{tag:"button",to:e.link}},[e._v("\n  "+e._s(e.label)+"\n  "),n("span",{staticClass:"arrow"},[e._v("→")]),n("span",{staticClass:"line"})])},a=[],i={props:{label:{type:String,required:!0},route:{type:String,required:!1},disabled:{type:Boolean,required:!1},link:{type:String,required:!1}}},o=i,r=(n("8Iqb"),n("KHd+")),c=Object(r["a"])(o,s,a,!1,null,"6f481e86",null);t["default"]=c.exports},M1wQ:function(e,t,n){},"PT/r":function(e,t,n){e.exports=n.p+"fonts/HelveticaNeue-Medium.1832a508.woff2"},Pf3K:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"#app"}},[n("Header"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1),n("Footer",{attrs:{data:e.footer}})],1)},a=[],i=n("BBiw"),o=n("/S3s"),r={name:"App",data:function(){return{mobileNavShow:!1,footer:{}}},created:function(){this.fetchData()},watch:{$route:function(){document.title=this.$route.meta.title}},methods:{fetchData:function(){var e=this.$globalData.content.footer;void 0!=e?this.$set(this,"footer",e):console.log("Error")}},components:{Header:i["default"],Footer:o["default"]}},c=r,l=(n("Rlgg"),n("KHd+")),u=Object(l["a"])(c,s,a,!1,null,"85922fa8",null);t["default"]=u.exports},QQQs:function(e,t,n){e.exports=n.p+"fonts/HelveticaNeue.2d1c965b.woff"},QYek:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row align-center case-preview"},[n("div",{staticClass:"col-10 preview"},[n("img",{attrs:{src:e.pathResolving("assets/images/cases/previews",""+e.image)}})])])},a=[],i=n("cdt3"),o={props:{image:{type:String,required:!0}},mixins:[i["pathResolving"]]},r=o,c=(n("U2gN"),n("KHd+")),l=Object(c["a"])(r,s,a,!1,null,"26d1dd8d",null);t["default"]=l.exports},QctN:function(e,t,n){"use strict";n.r(t);var s=n("Kw5r"),a=n("jE9Z"),i=n("u1G+"),o=n("+CAJ"),r=n("8SY7"),c=n("n+SR");s["a"].use(a["a"]),t["default"]=new a["a"]({mode:"history",routes:[{path:"*",component:i["default"]},{path:"/",name:"home",component:i["default"],meta:{title:"Donovan Roubos | Portfolio"}},{path:"/about",name:"about",component:o["default"],meta:{title:"Donovan Roubos | About"}},{path:"/work",name:"work",component:r["default"],props:!0,meta:{title:"Donovan Roubos | Work"}},{path:"/work/:caseName",name:"work",component:c["default"],props:!0,meta:{title:"Donovan Roubos | Work"}}],scrollBehavior:function(e,t,n){return{x:0,y:0}}})},Qu3F:function(e,t,n){e.exports=n.p+"img/cde.94c3de46.png"},Rlgg:function(e,t,n){"use strict";var s=n("VZIH"),a=n.n(s);a.a},T4fG:function(e,t,n){},U2gN:function(e,t,n){"use strict";var s=n("tQ8X"),a=n.n(s);a.a},V0UP:function(e,t,n){"use strict";var s=n("JfWh"),a=n.n(s);a.a},VVaZ:function(e,t,n){e.exports=n.p+"fonts/DroidSansMono.8247e36f.woff"},VZIH:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var s=n("Kw5r"),a=n("Pf3K"),i=n("QctN"),o=(n("T4fG"),n("K6AL"));s["a"].config.productionTip=!1,o["default"].install=function(){Object.defineProperty(s["a"].prototype,"$globalData",{get:function(){return o["default"]}})},s["a"].use(o["default"]),new s["a"]({router:i["default"],render:function(e){return e(a["default"])}}).$mount("#app")},YNPY:function(e,t,n){e.exports=n.p+"img/cde-app.ab1e0ced.gif"},Yc1h:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row align-justify experience"},[n("div",{staticClass:"col-5"},[n("h3",[e._v(e._s(e.name))]),e.role?n("div",{staticClass:"role"},[e._v("\n      "+e._s(e.role)+"\n    ")]):e._e(),e.date?n("div",{staticClass:"date"},[e._v("\n      "+e._s(e.date.from+" - "+e.date.untill)+"\n    ")]):e._e()]),n("div",{staticClass:"col-7"},[n("p",[e._v(e._s(e.description))])])])},a=[],i={name:"experience",props:{type:{type:String,required:!0},name:{type:String,required:!0},date:{type:Object,required:!1},role:{type:String,required:!1},description:{type:String,required:!0}}},o=i,r=(n("yN4k"),n("KHd+")),c=Object(r["a"])(o,s,a,!1,null,null,null);t["default"]=c.exports},Yfks:function(e,t,n){"use strict";var s=n("1EpG"),a=n.n(s);a.a},cdt3:function(e,t,n){"use strict";n.r(t),n.d(t,"pathResolving",function(){return s});var s={methods:{pathResolving:function(e,t){return n("qOw0")("./".concat(e,"/").concat(t))}}}},cxMG:function(e,t,n){},flTw:function(e,t,n){e.exports=n.p+"fonts/HelveticaNeue.aa01b0b6.woff2"},ghHl:function(e,t,n){e.exports=n.p+"img/github.f95e4775.svg"},iby8:function(e,t,n){e.exports=n.p+"img/me.7ef29a27.png"},jEhR:function(e,t,n){"use strict";var s=n("zkfD"),a=n.n(s);a.a},k0Xd:function(e,t,n){"use strict";var s=n("m9pV"),a=n.n(s);a.a},kMfu:function(e,t,n){},kjs6:function(e,t,n){},m9pV:function(e,t,n){},"n+SR":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-l work"},[n("div",{staticClass:"row page-detail"},[n("div",{staticClass:"col-12"},[n("h1",[e._v(e._s(e.caseItem.name)+" ")]),n("div",{staticClass:"content"},[n("p",{staticClass:"desktop"},[e._v(e._s(e.caseItem.description.firstHalf))]),n("p",{staticClass:"desktop"},[e._v(e._s(e.caseItem.description.secondHalf))]),n("p",{staticClass:"mobile"},[e._v(e._s(e.caseItem.description.firstHalf+" "+e.caseItem.description.secondHalf))])])])]),n("CasePreview",{attrs:{image:e.caseItem.previews[0].name}}),n("CaseLinks",{attrs:{links:e.caseItem.links}}),"cde"==e.caseItem.id?n("CasePreview",{attrs:{image:e.caseItem.previews[1].name}}):e._e()],1)},a=[],i=(n("f3/d"),n("dRSK"),n("VRzm"),n("pEJu")),o=n("QYek"),r={name:"work",data:function(){return{caseItem:{}}},props:{caseName:{type:String,required:!1}},created:function(){this.fetchData()},watch:{$route:"fetchData"},components:{CaseLinks:i["default"],CasePreview:o["default"]},methods:{fetchData:function(){var e=this,t=this.$globalData.content.cases,n=t.find(function(t){return e.$route.params.caseName===t.id});void 0!=n?this.$set(this,"caseItem",n):"work"==this.$route.name&&this.$router.push("/work")}}},c=r,l=(n("zils"),n("KHd+")),u=Object(l["a"])(c,s,a,!1,null,"5941d70c",null);t["default"]=u.exports},nC0Q:function(e,t,n){e.exports=n.p+"fonts/DroidSansMono.bc7a4f2b.woff2"},nF67:function(e,t,n){e.exports=n.p+"img/blanko-app.3772ecb5.png"},pEJu:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"case-links"},[n("div",{staticClass:"row align-center"},[e._m(0),n("div",{staticClass:"col-6"},[n("div",{staticClass:"links"},e._l(e.links,function(t){return n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.title))])}))])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-6"},[n("h2",[e._v("Links")])])}],i={props:{links:{type:Array,required:!0}}},o=i,r=(n("V0UP"),n("KHd+")),c=Object(r["a"])(o,s,a,!1,null,"b9e9b532",null);t["default"]=c.exports},qF2L:function(e,t,n){},qOw0:function(e,t,n){var s={"./App":"Pf3K","./App.vue":"Pf3K","./assets/fonts/DroidSansMono.woff":"VVaZ","./assets/fonts/DroidSansMono.woff2":"nC0Q","./assets/fonts/HelveticaNeue-Medium.woff":"DXKK","./assets/fonts/HelveticaNeue-Medium.woff2":"PT/r","./assets/fonts/HelveticaNeue.woff":"QQQs","./assets/fonts/HelveticaNeue.woff2":"flTw","./assets/images/cases/blanko.png":"APBk","./assets/images/cases/cde.png":"Qu3F","./assets/images/cases/previews/blanko-app.png":"nF67","./assets/images/cases/previews/cde-app.gif":"YNPY","./assets/images/cases/previews/cde-website.gif":"wRJy","./assets/images/icons/dribbble.svg":"GNwj","./assets/images/icons/github.svg":"ghHl","./assets/images/icons/linkedin.svg":"J3vx","./assets/images/me.png":"iby8","./components/Button":"Kn2e","./components/Button.vue":"Kn2e","./components/Case":"A11y","./components/Case.vue":"A11y","./components/CaseLinks":"pEJu","./components/CaseLinks.vue":"pEJu","./components/CasePreview":"QYek","./components/CasePreview.vue":"QYek","./components/Experience":"Yc1h","./components/Experience.vue":"Yc1h","./components/Footer":"/S3s","./components/Footer.vue":"/S3s","./components/Header":"BBiw","./components/Header.vue":"BBiw","./components/Icon":"za7x","./components/Icon.vue":"za7x","./components/IntroAnimation":"qYbu","./components/IntroAnimation.vue":"qYbu","./globalData":"K6AL","./globalData.js":"K6AL","./main":"Vtdi","./main.js":"Vtdi","./mixins/pathResolving":"cdt3","./mixins/pathResolving.js":"cdt3","./router":"QctN","./router.js":"QctN","./scss/app.scss":"T4fG","./scss/base/_fonts.scss":"6KX9","./scss/base/_mixins.scss":"19Te","./scss/base/_variables.scss":"qF2L","./scss/layout/_core.scss":"M1wQ","./scss/layout/_flex-grid.scss":"kjs6","./views/About":"+CAJ","./views/About.vue":"+CAJ","./views/Case":"n+SR","./views/Case.vue":"n+SR","./views/Home":"u1G+","./views/Home.vue":"u1G+","./views/Work":"8SY7","./views/Work.vue":"8SY7"};function a(e){var t=i(e);return n(t)}function i(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=i,e.exports=a,a.id="qOw0"},qYbu:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro-animation",style:{height:"calc(100vh - "+this.headerHeight+"px)"}},[n("div",{staticClass:"intro-container"},[n("div",{staticClass:"line-numbers",style:{height:this.messageHeight+"px"}},[e._v("\n      01 02 03 04 05 06 07 08\n    ")]),e._m(0)]),n("div",{staticClass:"backdrop"})])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-container"},[n("div",{staticClass:"message"},[e._v("\n        Donovan — A passionate Frontend <developer/> who loves awesome "),n("span",[e._v("design")]),e._v(".\n      ")])])}],i={name:"IntroAnimation",data:function(){return{headerHeight:0,messageHeight:0}},methods:{calcHeights:function(){this.$set(this,"headerHeight",document.querySelector(".header").offsetHeight),this.$set(this,"messageHeight",document.querySelector(".message").offsetHeight)}},mounted:function(){var e=this;this.calcHeights(),window.onresize=function(t){e.calcHeights()}}},o=i,r=(n("CgiS"),n("KHd+")),c=Object(r["a"])(o,s,a,!1,null,"8ccf10fc",null);t["default"]=c.exports},sivX:function(e,t,n){},tQ8X:function(e,t,n){},"u1G+":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-l home"},[n("IntroAnimation"),n("div",{staticClass:"row recent-work"},[n("div",{staticClass:"col-12"},[n("h1",[e._v(e._s(e.recentWorkTitle))])])]),e._l(e.recentCases,function(e){return n("Case",{attrs:{title:e.name,type:e.type,year:e.date.year,preview:e.preview,description:e.description.firstHalf,link:"work/"+e.id}})}),n("div",{staticClass:"row about-me"},[n("div",{staticClass:"col-5"},[n("h1",[e._v(e._s(e.aboutMeTitle))])]),n("div",{staticClass:"col-7"},[n("p",[e._v(e._s(e.aboutMeShortData))]),n("Button",{attrs:{label:"Read more",link:"about"}})],1)])],2)},a=[],i=(n("f3/d"),n("dRSK"),n("qYbu")),o=n("A11y"),r=n("Kn2e"),c={name:"home",data:function(){return{recentCases:[],recentWorkTitle:"",recentWorkShortData:"",aboutMeShortData:"",aboutMeTitle:""}},components:{IntroAnimation:i["default"],Case:o["default"],Button:r["default"]},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this.$globalData.content.pages,t=e.find(function(e){return"about"===e.id}),n=e.find(function(e){return"work"===e.id});this.$set(this,"aboutMeShortData",t.content.introduction.description.firstHalf),this.$set(this,"aboutMeTitle",t.name),this.$set(this,"recentWorkShortData",n.description),this.$set(this,"recentWorkTitle",n.name),this.$set(this,"recentCases",this.$globalData.content.cases)}}},l=c,u=(n("5pot"),n("KHd+")),d=Object(u["a"])(l,s,a,!1,null,null,null);t["default"]=d.exports},uMyG:function(e,t,n){},wRJy:function(e,t,n){e.exports=n.p+"img/cde-website.61dfb20c.gif"},"wk+b":function(e,t,n){"use strict";var s=n("/cFb"),a=n.n(s);a.a},yN4k:function(e,t,n){"use strict";var s=n("6ret"),a=n.n(s);a.a},za7x:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["icon",e.name,e.className],style:{width:e.width+"px",height:e.height+"px"}},[n("img",{attrs:{src:e.pathResolving("assets/images/icons",e.name+".svg"),draggable:"false"}})])},a=[],i=(n("xfY5"),n("cdt3")),o={name:"Icon",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},name:{type:String,required:!0},className:{type:String,required:!1}},mixins:[i["pathResolving"]]},r=o,c=(n("k0Xd"),n("KHd+")),l=Object(c["a"])(r,s,a,!1,null,null,null);t["default"]=l.exports},zils:function(e,t,n){"use strict";var s=n("kMfu"),a=n.n(s);a.a},zkfD:function(e,t,n){}});
//# sourceMappingURL=app.93f0bb51.js.map