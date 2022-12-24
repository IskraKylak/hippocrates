"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[747],{4747:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=i(6252);const n={class:"home"};function o(t,e,i,o,l,u){const c=(0,s.up)("Poster"),r=(0,s.up)("Instruction"),m=(0,s.up)("Events"),a=(0,s.up)("Courses"),d=(0,s.up)("CalendarEvent");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(c,{content:l.poster},null,8,["content"]),(0,s.Wm)(r,{content:l.instruction},null,8,["content"]),(0,s.Wm)(m,{content:l.events},null,8,["content"]),0!==l.courses.list.length?((0,s.wg)(),(0,s.j4)(a,{key:0,content:l.courses},null,8,["content"])):(0,s.kq)("",!0),(0,s.Wm)(d,{content:l.calendarEvent},null,8,["content"])])}var l=i(5266),u=i(2858),c=i(436),r=i(380),m=i(4306),a=i(3907),d={name:"Home",components:{Poster:l.Z,Events:u.Z,Courses:c.Z,CalendarEvent:r.Z,Instruction:m.Z},methods:{...(0,a.nv)(["GET_HOME_FROM_API","GET_SPECIALIZATIONS_FROM_API","GET_EVENT_FROM_API"])},mounted(){this.GET_HOME_FROM_API().then((t=>{t&&(this.poster.img=t.banner,this.poster.text=t.banner_text,this.poster.title="Hippocrates",this.instruction.title=t.text_over_video,this.instruction.list[0].video=t.help_video,this.instruction.list[0].text="",this.instruction.list[0].title=t.text_under_video,this.events.title=t.events_block_title,this.calendarEvent.title=t.calendar_block_title)})),this.GET_SPECIALIZATIONS_FROM_API().then((t=>{if(t)for(let e=0;e<t.length;e++)this.courses.list.push(t[e]),this.courses.list[e].img=t[e].photo})),this.GET_EVENT_FROM_API().then((t=>{t&&(this.calendarEvent.list=t.results)}))},data(){return{instruction:{title:"як користуватися платформою гіппократ",btn:"Особистий кабінет",list:[{video:"",title:"підвищуйте свою професійну кваліфікацію",text:""}]},poster:{text:"БЕЗПЕРЕРВНА МЕДИЧНА ОСВІТА ЛІКАРІВ І ФАРМАЦЕВТІВ"},portfolio:{title:"освітнє портфоліо",text:"Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.",btn:"Відкрити анкету"},calendarEvent:{title:"календар наукових заходів",subtitle:"Найближчі події",list:[{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"},{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"},{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"}]},courses:{title:"Основні курси",btn:"Переглянути усі",list:[]},events:{title:"нові освітні події",btn:"Переглянути усі",list:[{img:i(193),name:"Фетальне програмування та інтегральний інтервал",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"08.07.2020",time:"16:00"},{img:i(193),name:"цикл вебінарів “кардіо-метаболічна академія”",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"09.07.2020",time:"17:00"},{img:i(193),name:"Фетальне програмування та інтегральний інтервал",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"08.07.2020",time:"16:00"}]}}}},p=i(3744);const h=(0,p.Z)(d,[["render",o],["__scopeId","data-v-54cb0e4d"]]);var g=h},6711:function(t,e,i){t.exports=i.p+"img/calendarImg.a2defc68.png"}}]);
//# sourceMappingURL=747.8ae15972.js.map