"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[299],{2299:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=n(6252);const i={class:"home"};function o(t,e,n,o,l,r){const c=(0,s.up)("Poster"),u=(0,s.up)("Instruction"),a=(0,s.up)("Events"),_=(0,s.up)("Courses"),h=(0,s.up)("CalendarEvent");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c,{content:l.poster},null,8,["content"]),(0,s.Wm)(u,{content:l.instruction},null,8,["content"]),0!==l.events.list.length?((0,s.wg)(),(0,s.j4)(a,{key:0,content:l.events},null,8,["content"])):(0,s.kq)("",!0),0!==l.courses.list.length?((0,s.wg)(),(0,s.j4)(_,{key:1,content:l.courses},null,8,["content"])):(0,s.kq)("",!0),(0,s.Wm)(h,{content:l.calendarEvent},null,8,["content"])])}var l=n(5266),r=n(8986),c=n(1423),u=n(436),a=n(9445),_=n(3577);const h={class:"portfolio"},p={class:"container"},v={class:"portfolio_content"},d={class:"portfolio_title"},E={class:"portfolio_text"};function I(t,e,n,i,o,l){const r=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",p,[(0,s._)("div",v,[(0,s._)("h2",d,(0,_.zw)(n.content.title),1),(0,s._)("div",E,(0,_.zw)(n.content.text),1),(0,s.Wm)(r,{btnClass:"btnLink"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,_.zw)(n.content.btn),1)])),_:1})])])])}var f=n(9558),b={props:["content"],components:{Button:f.Z},data(){return{}}},m=n(3744);const A=(0,m.Z)(b,[["render",I]]);var P=A,k=n(3907),O={name:"Home",components:{Poster:l.Z,Instruction:r.Z,Events:c.Z,Courses:u.Z,CalendarEvent:a.Z,Portfolio:P},data(){return{poster:{title:"Hippocrates",text:"",img:""},portfolio:{title:"освітнє портфоліо",text:"Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.",btn:"Відкрити анкету"},calendarEvent:{title:"",subtitle:"Найближчі події",list:[]},courses:{title:"Основні курси",btn:"Переглянути усі",list:[]},events:{title:"",btn:"Переглянути усі",list:[]},instruction:{title:"як користуватися платформою гіппократ",btn:"Особистий кабінет",list:[{video:"",title:"підвищуйте свою професійну кваліфікацію",text:""}]}}},methods:{...(0,k.nv)(["GET_HOME_FROM_API","GET_SPECIALIZATIONS_FROM_API","GET_EVENT_FROM_API","GET_VEBINAR_FROM_API"])},mounted(){this.GET_HOME_FROM_API().then((t=>{t&&(this.poster.img=t.banner,this.poster.text=t.banner_text,this.poster.title="Hippocrates",this.instruction.title=t.text_over_video,this.instruction.list[0].video=t.help_video,this.instruction.list[0].text="",this.instruction.list[0].title=t.text_under_video,this.events.title=t.events_block_title,this.calendarEvent.title=t.calendar_block_title)})),this.GET_SPECIALIZATIONS_FROM_API().then((t=>{if(t)for(let e=0;e<t.length;e++)this.courses.list.push(t[e]),this.courses.list[e].img=t[e].photo})),this.GET_EVENT_FROM_API().then((t=>{t&&(this.calendarEvent.list=t.results)})),this.GET_VEBINAR_FROM_API().then((t=>{t&&(this.events.list=t.results)}))}};const T=(0,m.Z)(O,[["render",o],["__scopeId","data-v-c60329c8"]]);var g=T}}]);
//# sourceMappingURL=299.a94a5572.js.map