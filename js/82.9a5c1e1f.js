"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[82],{9772:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(6252),s=n(3577);const i={class:"breadcrumbs"},c={key:1,class:"breadcrumbs_title"};function r(t,e,n,r,l,o){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.content,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e},[t.link?((0,a.wg)(),(0,a.j4)(d,{key:0,class:"breadcrumbs_link",to:t.link},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t.name)+" / ",1)])),_:2},1032,["to"])):((0,a.wg)(),(0,a.iD)("div",c,(0,s.zw)(t.name),1))])))),128))])}var l={name:"Home",props:["content"],components:{},data(){return{}}},o=n(3744);const d=(0,o.Z)(l,[["render",r],["__scopeId","data-v-31b54de0"]]);var u=d},82:function(t,e,n){n.r(e),n.d(e,{default:function(){return K}});var a=n(6252),s=n(3577);const i={class:"vebinar"},c={class:"container"},r={class:"container"},l={class:"vebinar_content"},o={class:"vebinar_title"};function d(t,e,n,d,u,m){const v=(0,a.up)("Breadcrumbs"),b=(0,a.up)("VebinarList");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",c,[(0,a.Wm)(v,{content:u.breadcrumbs},null,8,["content"])]),(0,a._)("div",r,[(0,a._)("div",l,[(0,a._)("h2",o,(0,s.zw)(u.title),1),(0,a.Wm)(b,{content:u.vebinars1},null,8,["content"]),(0,a.Wm)(b,{content:u.vebinars2},null,8,["content"]),(0,a.Wm)(b,{content:u.vebinars3},null,8,["content"])])])])}var u=n(9772);const m={class:"vebinar_wrapList"},v={class:"vebinar_nameList"},b={class:"vebinar_list"};function _(t,e,n,i,c,r){const l=(0,a.up)("ItemVebinar");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",v,(0,s.zw)(n.content.title),1),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.content.list,((t,e)=>((0,a.wg)(),(0,a.j4)(l,{key:e,content:t,idx:e},null,8,["content","idx"])))),128))])])}const p={class:"vebinarItem_wrapImage"},g=["src"],w={class:"vebinarItem_wrapCalendar"},x={class:"vebinarItem_calendar"},I={class:"vebinarItem_content"},C={class:"vebinarItem_title"},k={class:"vebinarItem_text"},f={class:"vebinarItem_wrapTime"},z={class:"vebinarItem_time"},h={class:"vebinarItem_location"};function D(t,e,n,i,c,r){return(0,a.wg)(),(0,a.iD)("div",{class:"vebinarItem",onClick:e[0]||(e[0]=t=>r.goToVebinar(n.content.title))},[(0,a._)("div",p,[(0,a._)("img",{src:n.content.img,alt:"img"},null,8,g)]),(0,a._)("div",w,[(0,a._)("div",x,(0,s.zw)(n.content.date),1),(0,a._)("div",{class:(0,s.C_)(["vebinarItem_status",n.content.statusClass?n.content.statusClass:""])},(0,s.zw)(n.content.status),3)]),(0,a._)("div",I,[(0,a._)("div",C,(0,s.zw)(n.content.title),1),(0,a._)("div",k,(0,s.zw)(n.content.text),1),(0,a._)("div",f,[(0,a._)("div",z,(0,s.zw)(n.content.time),1),(0,a._)("div",h,(0,s.zw)(n.content.location),1)])])])}var V={props:["content","idx"],data(){return{}},methods:{goToVebinar(t){this.$router.push({name:"vebinarPage",params:{Pid:t}})}}},Z=n(3744);const y=(0,Z.Z)(V,[["render",D],["__scopeId","data-v-72d5c4d5"]]);var L=y,W={props:["content"],components:{ItemVebinar:L},data(){return{}}};const H=(0,Z.Z)(W,[["render",_],["__scopeId","data-v-0b60edba"]]);var T=H,j={name:"Vebinars",components:{Breadcrumbs:u.Z,VebinarList:T},data(){return{title:"Вебінари",breadcrumbs:[{name:"Головна",link:"/"},{name:"Вебінари"}],vebinars1:{title:"Обрані вебінари",list:[{img:n(193),date:"9.07 - 10.07",statusClass:"elect",status:"Обраний",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"elect",status:"Обраний",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"elect",status:"Обраний",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"}]},vebinars2:{title:"Майбутні вебінари",list:[{img:n(193),date:"9.07 - 10.07",statusClass:"expected",status:"Очікується",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"expected",status:"Очікується",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"expected",status:"Очікується",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"}]},vebinars3:{title:"Минулі вебінари",list:[{img:n(193),date:"9.07 - 10.07",statusClass:"completed",status:"завершено",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"completed",status:"завершено",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"},{img:n(193),date:"9.07 - 10.07",statusClass:"completed",status:"завершено",title:"СЕКРЕТИ ЖІНОЧОГО ЗДОРОВ'Я 2 АБО МІКРОНУТРІЄНТИ В ДІЄТІ ДЛЯ ЖІНОК ПІД ЧАС ВАГІТНОСТІ",text:"БЕЗДІТКО НАТАЛІЯ ВОЛОДИМИРІВНА КВАШЕНКО ВАЛЕНТИНА ПАВЛІВНА",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир"}]}}}};const B=(0,Z.Z)(j,[["render",d],["__scopeId","data-v-34c64156"]]);var K=B},193:function(t,e,n){t.exports=n.p+"img/imageEvents.52305dd3.png"}}]);
//# sourceMappingURL=82.9a5c1e1f.js.map