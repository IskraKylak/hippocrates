"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[545],{815:function(t,n,e){e.d(n,{Z:function(){return d}});var o=e(252),c=e(577);const a={class:"breadcrumbs"},i={key:1,class:"breadcrumbs_title"};function s(t,n,e,s,r,l){const _=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.content,((t,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n},[t.link?((0,o.wg)(),(0,o.j4)(_,{key:0,class:"breadcrumbs_link",to:t.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(t.name)+" / ",1)])),_:2},1032,["to"])):((0,o.wg)(),(0,o.iD)("div",i,(0,c.zw)(t.name),1))])))),128))])}var r={name:"Home",props:["content"],components:{},data(){return{}}},l=e(744);const _=(0,l.Z)(r,[["render",s],["__scopeId","data-v-024a0a3f"]]);var d=_},119:function(t,n,e){e.d(n,{Z:function(){return u}});var o=e(252),c=e(577);const a={class:"feedback"},i={class:"feedback__title"},s={class:"feedback__description"};function r(t,n,e,r,l,_){const d=(0,o.up)("Button");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,(0,c.zw)(t.$t("feedback.title")),1),(0,o._)("div",s,(0,c.zw)(t.$t("feedback.description")),1),(0,o.Wm)(d,{btnClass:"btnFeedback"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(t.$t("feedback.btnName")),1)])),_:1})])}var l=e(133),_={components:{Button:l.Z}},d=e(744);const f=(0,d.Z)(_,[["render",r],["__scopeId","data-v-45547412"]]);var u=f},34:function(t,n,e){e.d(n,{Z:function(){return $}});var o=e(252),c=e(577);const a={class:"container"},i={class:"infoContact"},s={class:"infoContact_left"},r={class:"infoContact_title"},l={class:"infoContact_text"},_={class:"infoContact_telList"},d=["href"],f={class:"infoContact_wrapLocation"},u=["href"],m={href:"",class:"infoContact_location"},v={class:"infoContact_wrapSoc"},b={class:"infoContact_wrapSoc_title"},k={class:"infoContact_listSoc"},p=["href"],h=["href"],C=["href"];function w(t,n,e,w,g,Z){const z=(0,o.up)("Feedback");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[(0,o._)("div",s,[(0,o._)("div",r,(0,c.zw)(e.content.title),1),(0,o._)("div",l,(0,c.zw)(e.content.text),1),(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.content.tel,((t,n)=>((0,o.wg)(),(0,o.iD)("a",{href:"tel:"+t,class:"infoContact_tel",key:n},(0,c.zw)(t),9,d)))),128))]),(0,o._)("div",f,[(0,o._)("a",{href:"mailto:"+e.content.email,class:"infoContact_email"},(0,c.zw)(e.content.email),9,u),(0,o._)("a",m,(0,c.zw)(e.content.location),1)]),(0,o._)("div",v,[(0,o._)("div",b,(0,c.zw)(t.$t("contactPage.socTitle")),1),(0,o._)("div",k,[(0,o._)("a",{href:e.content.facebook_link,class:"infoContact_fb"},null,8,p),(0,o._)("a",{href:e.content.viber_link,class:"infoContact_vb"},null,8,h),(0,o._)("a",{href:e.content.telegram_link,class:"infoContact_tg"},null,8,C)])])]),(0,o.Wm)(z)])])}var g=e(119),Z={props:["content"],components:{Feedback:g.Z},data(){return{}}},z=e(744);const D=(0,z.Z)(Z,[["render",w],["__scopeId","data-v-425331c9"]]);var $=D},873:function(t,n,e){e.d(n,{Z:function(){return u}});var o=e(252),c=e(577);const a={class:"contactPoster"},i=["src"],s={class:"container"},r={class:"contactPoster_title"};function l(t,n,e,l,_,d){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("img",{src:e.content.img,alt:"img"},null,8,i),(0,o._)("div",s,[(0,o._)("h2",r,(0,c.zw)(e.content.title),1)])])}var _={props:["content"],data(){return{}}},d=e(744);const f=(0,d.Z)(_,[["render",l],["__scopeId","data-v-8a0a89a4"]]);var u=f},545:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var o=e(252);const c={class:"contacts"},a={class:"container"};function i(t,n,e,i,s,r){const l=(0,o.up)("Breadcrumbs"),_=(0,o.up)("PosterContacts"),d=(0,o.up)("InfoContact");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",a,[(0,o.Wm)(l,{content:r.breadcrumbs},null,8,["content"])]),(0,o.Wm)(_,{content:s.poster},null,8,["content"]),(0,o.Wm)(d,{content:s.infoContact},null,8,["content"])])}var s=e(815),r=e(873),l=e(34),_=e(907),d={name:"Contacts",components:{PosterContacts:r.Z,Breadcrumbs:s.Z,InfoContact:l.Z},data(){return{poster:{title:"",img:""},infoContact:{title:"",text:"",tel:[],email:"",location:"вул. Деміївська, 13, м. Київ",socTitle:"Зв’язатися через соціальні мережі:",facebook_link:"",viber_link:"",telegram_link:""}}},computed:{breadcrumbs(){let t=[{name:this.$t("breadcrumbs.home"),link:`/${this.$i18n.locale}/`},{name:this.$t("breadcrumbs.contact")}];return t}},methods:{...(0,_.nv)(["GET_CONTACT_FROM_API"])},mounted(){let t="uk";"ua"!=this.$i18n.locale&&(t=this.$i18n.locale),this.GET_CONTACT_FROM_API(t).then((t=>{t&&(this.poster.title=t.banner_title,this.poster.img=t.banner,this.infoContact.title=t.title,this.infoContact.text=t.text,this.infoContact.email=t.email,this.infoContact.tel=t.phones.split("\r\n"),this.infoContact.facebook_link=t.facebook_link,this.infoContact.viber_link=t.viber_link,this.infoContact.telegram_link=t.telegram_link)}))}},f=e(744);const u=(0,f.Z)(d,[["render",i],["__scopeId","data-v-30e79ed5"]]);var m=u}}]);
//# sourceMappingURL=545.067c3a29.js.map