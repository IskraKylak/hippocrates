"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[867],{436:function(t,e,i){i.d(e,{Z:function(){return w}});var s=i(6252),n=i(3577);const o={class:"courses"},a={class:"container"},c={class:"courses_content"},r={class:"courses_title"},u=(0,s.Uk)(" Переглянути усі ");function l(t,e,i,l,d,m){const p=(0,s.up)("ItemCatCourses"),v=(0,s.up)("slide"),g=(0,s.up)("navigation"),_=(0,s.up)("carousel"),w=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s._)("h2",r,(0,n.zw)(i.content.title),1),(0,s.Wm)(_,{class:"courses_carousel","items-to-show":d.width<=767?1:4,snapAlign:"start"},{addons:(0,s.w5)((()=>[(0,s.Wm)(g)])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.content.list,((t,e)=>((0,s.wg)(),(0,s.j4)(v,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{content:t},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["items-to-show"]),(0,s.Wm)(w,{btnClass:"btnLink",onClick:e[0]||(e[0]=t=>m.openCourses())},{default:(0,s.w5)((()=>[u])),_:1})])])])}var d=i(7410),m=i(7759),p=i(3232),v={props:["content"],components:{Button:m.Z,Carousel:d.lr,Slide:d.Mi,Navigation:d.W_,ItemCatCourses:p.Z},data(){return{width:0}},methods:{updateWidth(){this.width=window.innerWidth},openCourses(){this.$router.push("/courses")}},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}},g=i(3744);const _=(0,g.Z)(v,[["render",l]]);var w=_},508:function(t,e,i){i.d(e,{Z:function(){return L}});var s=i(6252),n=i(3577);const o={class:"events"},a={class:"container"},c={class:"events_content"},r={class:"events_title"},u=["onClick"],l={class:"events_img"},d=["src"],m={class:"events_bottom"},p={class:"events_name"},v={class:"events_text"},g={class:"events_wrapData"},_={class:"events_data"},w=(0,s._)("div",{class:"events_more"}," Детальніше ",-1),h=(0,s.Uk)(" Особистий кабінет ");function f(t,e,i,f,b,W){const C=(0,s.up)("slide"),k=(0,s.up)("navigation"),Z=(0,s.up)("carousel"),L=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s._)("h2",r,(0,n.zw)(i.content.title),1),(0,s.Wm)(Z,{class:"events_carousel","items-to-show":b.width<=767?1:2,snapAlign:"start"},{addons:(0,s.w5)((()=>[(0,s.Wm)(k)])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.content.list,((t,e)=>((0,s.wg)(),(0,s.j4)(C,{key:e},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"events_item",onClick:e=>W.goToVebinar(t.name)},[(0,s._)("div",l,[(0,s._)("img",{src:t.img,alt:"img"},null,8,d)]),(0,s._)("div",m,[(0,s._)("div",p,(0,n.zw)(t.name),1),(0,s._)("div",v,(0,n.zw)(t.text),1),(0,s._)("div",g,[(0,s._)("div",_,[(0,s._)("span",null,"Дата: "+(0,n.zw)(t.data),1),(0,s._)("span",null,"Час: "+(0,n.zw)(t.time),1)]),w])])],8,u)])),_:2},1024)))),128))])),_:1},8,["items-to-show"]),(0,s.Wm)(L,{btnClass:"btnLink"},{default:(0,s.w5)((()=>[h])),_:1})])])])}var b=i(7410),W=i(7759),C={props:["content"],components:{Button:W.Z,Carousel:b.lr,Slide:b.Mi,Navigation:b.W_},data(){return{width:0}},methods:{updateWidth(){this.width=window.innerWidth},goToVebinar(t){this.$router.push({name:"vebinarPage",params:{Pid:t}})}},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}},k=i(3744);const Z=(0,k.Z)(C,[["render",f]]);var L=Z},3810:function(t,e,i){i.d(e,{Z:function(){return b}});var s=i(6252),n=i(3577),o=i.p+"img/image-bg.f3795fe6.png";const a={class:"poster"},c=(0,s._)("div",{class:"poster_bg"},[(0,s._)("img",{src:o,alt:"img"})],-1),r={class:"container"},u={class:"poster_content"},l={class:"poster_info"},d={class:"poster_title"},m={class:"poster_subtitle"},p=(0,s.Uk)("Зареєструватися");function v(t,e,i,o,v,g){const _=(0,s.up)("Button"),w=(0,s.up)("Feedback");return(0,s.wg)(),(0,s.iD)("div",a,[c,(0,s._)("div",r,[(0,s._)("div",u,[(0,s._)("div",l,[(0,s._)("h1",d,(0,n.zw)(i.content.title),1),(0,s._)("h2",m,(0,n.zw)(i.content.text),1),(0,s.Wm)(_,{btnClass:"btnPoster",onClick:e[0]||(e[0]=t=>g.openReg())},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s.Wm)(w)])])])}var g=i(7759),_=i(4466),w={props:["content"],components:{Button:g.Z,Feedback:_.Z},data(){return{}},methods:{openReg(){this.$router.push("/register")}}},h=i(3744);const f=(0,h.Z)(w,[["render",v]]);var b=f},4466:function(t,e,i){i.d(e,{Z:function(){return v}});var s=i(6252);const n=t=>((0,s.dD)("data-v-731969d9"),t=t(),(0,s.Cn)(),t),o={class:"feedback"},a=n((()=>(0,s._)("div",{class:"feedback__title"}," зворотній зв’язок ",-1))),c=n((()=>(0,s._)("div",{class:"feedback__description"}," Натискаючи кнопку, Ви погоджуютесь з обробкою персональних даних. Та переходите до телеграм-боту. ",-1))),r=(0,s.Uk)("Надіслати");function u(t,e,i,n,u,l){const d=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",o,[a,c,(0,s.Wm)(d,{btnClass:"btnFeedback"},{default:(0,s.w5)((()=>[r])),_:1})])}var l=i(7759),d={components:{Button:l.Z}},m=i(3744);const p=(0,m.Z)(d,[["render",u],["__scopeId","data-v-731969d9"]]);var v=p},1695:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=i(6252),n=i.p+"media/howtogetcertificate.a503e60c.mp4";const o={class:"home"},a=(0,s.uE)('<div class="container" data-v-72c625da><div class="howTo" data-v-72c625da><h2 class="howTo_title" data-v-72c625da> ЯК КОРИСТУВАТИСЯ ПЛАТФОРМОЮ ГІППОКРАТ </h2><div class="howTo_video" data-v-72c625da><video src="'+n+'" preload="auto" autoplay="" controls="" loop="" data-v-72c625da></video></div></div></div>',1);function c(t,e,i,n,c,r){const u=(0,s.up)("Poster"),l=(0,s.up)("Events"),d=(0,s.up)("Courses"),m=(0,s.up)("CalendarEvent");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(u,{content:c.poster},null,8,["content"]),a,(0,s.Wm)(l,{content:c.events},null,8,["content"]),(0,s.Wm)(d,{content:c.courses},null,8,["content"]),(0,s.Wm)(m,{content:c.calendarEvent},null,8,["content"])])}var r=i(3810),u=i(508),l=i(436),d=i(7749),m={name:"Home",components:{Poster:r.Z,Events:u.Z,Courses:l.Z,CalendarEvent:d.Z},data(){return{poster:{text:"БЕЗПЕРЕРВНА МЕДИЧНА ОСВІТА ЛІКАРІВ І ФАРМАЦЕВТІВ"},portfolio:{title:"освітнє портфоліо",text:"Навіщо потрібне освітнє портфоліо - офіційні документи МОЗ України, які повинен заповнювати кожен лікар для підготовки до атестації.",btn:"Відкрити анкету"},calendarEvent:{title:"календар наукових заходів",subtitle:"Найближчі події",list:[{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"},{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"},{img:i(6711),data:"9.07 - 10.07",time:"17:00 - 19:00",location:"Київ - Черкаси - Житомир",name:"Кардіо-Метаболічна Академія, частина четверта.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris. Vel phasellus quam enim, consectetur vitae vitae......"}]},courses:{title:"Основні курси",btn:"Переглянути усі",list:[{img:i(1125),name:"хірургія"},{img:i(9287),name:"сімейна медицина"},{img:i(674),name:"кардіологія"},{img:i(5291),name:"неврологія"},{img:i(1125),name:"хірургія"},{img:i(9287),name:"сімейна медицина"},{img:i(674),name:"кардіологія"},{img:i(5291),name:"неврологія"}]},events:{title:"нові освітні події",btn:"Переглянути усі",list:[{img:i(193),name:"Фетальне програмування та інтегральний інтервал",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"08.07.2020",time:"16:00"},{img:i(193),name:"цикл вебінарів “кардіо-метаболічна академія”",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"09.07.2020",time:"17:00"},{img:i(193),name:"Фетальне програмування та інтегральний інтервал",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque molestie faucibus dignissim elementum.",data:"08.07.2020",time:"16:00"}]},instruction:{title:"як користуватися платформою гіппократ",btn:"Особистий кабінет",list:[{video:"",title:"підвищуйте свою професійну кваліфікацію",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque."},{video:"",title:"як зареєструватися на обраний курс?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris."},{video:"",title:"освітнє портфоліо - що це?",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor nunc pellentesque ipsum mauris."}]}}}},p=i(3744);const v=(0,p.Z)(m,[["render",c],["__scopeId","data-v-72c625da"]]);var g=v},193:function(t,e,i){t.exports=i.p+"img/imageEvents.52305dd3.png"}}]);
//# sourceMappingURL=867.344a29e7.js.map