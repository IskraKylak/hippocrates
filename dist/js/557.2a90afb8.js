"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[557],{815:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(252),i=n(577);const a={class:"breadcrumbs"},o={key:1,class:"breadcrumbs_title"};function r(e,t,n,r,c,p){const u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",a,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.content,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[e.link?((0,s.wg)(),(0,s.j4)(u,{key:0,class:"breadcrumbs_link",to:e.link},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.name)+" / ",1)])),_:2},1032,["to"])):((0,s.wg)(),(0,s.iD)("div",o,(0,i.zw)(e.name),1))])))),128))])}var c={name:"Home",props:["content"],components:{},data(){return{}}},p=n(744);const u=(0,p.Z)(c,[["render",r],["__scopeId","data-v-024a0a3f"]]);var l=u},54:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(252),i=n(577);const a={class:"courses_img"},o=["src"],r={class:"courses_content"},c={class:"courses_title"},p=["innerHTML"];function u(e,t,n,u,l,h){return(0,s.wg)(),(0,s.iD)("div",{class:"courses_item",onClick:t[0]||(t[0]=e=>h.goToCourse(n.content.id))},[(0,s._)("div",a,[(0,s._)("img",{src:n.content.course_image,alt:"img"},null,8,o)]),(0,s._)("div",r,[(0,s._)("div",c,(0,i.zw)(n.content.name),1),(0,s._)("div",{class:"courses_text",innerHTML:n.content.description},null,8,p)])])}var l={props:["content"],data(){return{}},methods:{goToCourse(e){this.$router.push({name:"courseSingle",params:{Pid2:e}})}}},h=n(744);const g=(0,h.Z)(l,[["render",u],["__scopeId","data-v-36058b68"]]);var d=g},937:function(e,t,n){n.d(t,{Z:function(){return g}});var s=n(252),i=n(963),a=n(577);const o={class:"box_pagination"},r={class:"pagination"},c=["onClick"];function p(e,t,n,p,u,l){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("ul",r,[(0,s._)("li",null,[(0,s._)("a",{href:"#",class:"prev",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>l.prevPage&&l.prevPage(...e)),["prevent"]))})]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.pagination,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s._)("a",{href:"#",class:(0,a.C_)(l.active===e?"active":""),onClick:(0,i.iM)((t=>l.openPage(e)),["prevent"])},(0,a.zw)(e),11,c)])))),128)),(0,s._)("li",null,[(0,s._)("a",{href:"#",class:"next",onClick:t[1]||(t[1]=(0,i.iM)(((...e)=>l.nextPage&&l.nextPage(...e)),["prevent"]))})])])])}var u={props:["content"],data(){return{}},mounted(){},computed:{pagination(){let e=1;e=this.content.prev?this.content.prev+1:this.content.next?this.content.next-1:1;const t=this.content.count,n=this.content.elementPage,s=Math.ceil(t/n);let i=s-1;const a=[];if(i<8){for(let e=1;e<8;e++)a.push(e);return a}if(e>=5&&e<=i-5)a.push(1,"...",e-2,e-1,e,e+1,e+2,"...",s);else if(e>i-5){a.push(1,"...");for(let e=6;e>=0;e--)a.push(s-e)}else{for(let e=1;e<=5;e++)a.push(e);a.push("...",s)}return a},active(){return this.content.prev?this.content.prev+1:this.content.next?this.content.next-1:1}},methods:{openPage(e){this.active!==e&&"..."!==e&&this.$emit("openPage",e)},prevPage(){let e=this.active-1;this.content.prev&&this.$emit("openPage",e)},nextPage(){let e=this.active+1;this.content.next&&this.$emit("openPage",e)}}},l=n(744);const h=(0,l.Z)(u,[["render",p],["__scopeId","data-v-277341de"]]);var g=h},557:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var s=n(252),i=n(577);const a={class:"courses-page"},o={class:"container"},r={class:"container"},c={class:"courses-page_wrapList"},p={class:"courses-page_type"},u={class:"courses-page_list"};function l(e,t,n,l,h,g){const d=(0,s.up)("Breadcrumbs"),_=(0,s.up)("ItemCourses"),m=(0,s.up)("Pagination");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",o,[(0,s.Wm)(d,{content:g.breadcrumbs},null,8,["content"])]),(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("div",p,(0,i.zw)(h.coursesType2.name),1),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.coursesType2.courses,((e,t)=>((0,s.wg)(),(0,s.j4)(_,{key:t,content:e},null,8,["content"])))),128))]),h.pagination.count>1?((0,s.wg)(),(0,s.j4)(m,{key:0,content:h.pagination,onOpenPage:g.openPage},null,8,["content","onOpenPage"])):(0,s.kq)("",!0)])])])}var h=n(815),g=n(54),d=n(937),_=n(907),m={name:"Courses",components:{Breadcrumbs:h.Z,ItemCourses:g.Z,Pagination:d.Z},data(){return{nameCat:"",idCat:"",options:{page:1,spec:"",lang:"uk"},pagination:{elementPage:6,count:0,next:null,prev:null},coursesType2:{name:"Всі курси",courses:[]}}},computed:{...(0,_.Se)(["SPECIALIZATIONSITEM"]),breadcrumbs(){let e=[{name:this.$t("breadcrumbs.home"),link:`/${this.$i18n.locale}/`},{name:this.$t("breadcrumbs.courses")}];return""!=this.nameCat&&(e=[{name:this.$t("breadcrumbs.home"),link:`/${this.$i18n.locale}/`},{name:this.$t("breadcrumbs.courses"),link:`/${this.$i18n.locale}/courses`}],e.push({name:this.nameCat})),e}},mounted(){const e={...this.$route.query};let t="uk";"ua"!=this.$i18n.locale&&(t=this.$i18n.locale),this.options.lang=t,e.specializations&&(this.options.spec+=`&specializations=${e.specializations}`,this.GET_SPECIALIZATIONS_FROM_API(t).then((t=>{t&&t.forEach((t=>{t.id==e.specializations&&(this.nameCat=t.name)}))})).finally((()=>{this.initApi()}))),e.page&&(this.options.page=e.page),this.initApi()},methods:{...(0,_.nv)(["GET_COURSES_SPECIAL_FROM_API","GET_SPECIALIZATIONS_ITEM_FROM_API","GET_COURSES_FROM_API_PAGE","GET_SPECIALIZATIONS_FROM_API"]),initApi(){this.GET_COURSES_FROM_API_PAGE(this.options).then((e=>{if(e){this.pagination.count=e.count;let t="";e.previous?(t=new URLSearchParams(e.previous),parseInt(t.get("page"))?this.pagination.prev=parseInt(t.get("page")):this.pagination.prev=1):this.pagination.prev=null,e.next?(t=new URLSearchParams(e.next),this.pagination.next=parseInt(t.get("page"))):this.pagination.next=null,this.coursesType2.courses=e.results}}))},openPage(e){this.options.page=e,this.addQueryToUrl(!1,e)},addQueryToUrl(e=null,t=null){const n=this.$route.path,s=JSON.parse(JSON.stringify(this.$route.query));if(e){if(s.specializations=s.specializations||[],"string"===typeof s.specializations){let t=s.specializations;s.specializations=[],s.specializations.push(t),s.specializations.push(e.toString())}else s.specializations.push(e.toString());s.page=[]}t&&(s.page=s.page||[],s.page=t);const i={path:n,query:s};this.$router.push(i),this.initApi(),this.componentKey+=1}}},v=n(744);const P=(0,v.Z)(m,[["render",l],["__scopeId","data-v-3799f4b7"]]);var f=P}}]);
//# sourceMappingURL=557.2a90afb8.js.map