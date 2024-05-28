"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[941],{593:function(t,e,n){n.d(e,{Z:function(){return Q}});var s=n(252),a=n(577);const i={class:"calendar"},r={class:"container"},o={class:"calendar_content"},d={class:"calendar_title"},l={class:"calendar_wrapList"},c={class:"calendar_calendarList"},u={class:"calendar_calendarList_title"},h={key:0,class:"calendar_list"},_={key:1,class:"calendar_list"};function w(t,e,n,w,v,g){const p=(0,s.up)("Calendar"),m=(0,s.up)("ItemCalendarEvent");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("div",d,(0,a.zw)(t.$t("Calendar.title")),1),(0,s._)("div",l,[(0,s.Wm)(p,{onDataSelect:g.dataSelect,content:n.content.list},null,8,["onDataSelect","content"]),(0,s._)("div",c,[(0,s._)("div",u,(0,a.zw)(t.$t("calendarEvent.subtitle")),1),v.clickCalendar?((0,s.wg)(),(0,s.iD)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v.filterCalendarList,((t,e)=>((0,s.wg)(),(0,s.j4)(m,{key:e,content:t},null,8,["content"])))),128))])):((0,s.wg)(),(0,s.iD)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.calendarList,((t,e)=>((0,s.wg)(),(0,s.j4)(m,{key:e,content:t},null,8,["content"])))),128))]))])])])])])}const v={class:"calendar"},g={class:"header-calendar"},p={class:"title"},m={class:"week days"},k={class:"day"},D={class:"day"},f={class:"day"},C={class:"day"},y={class:"day"},$={class:"day"},z={class:"day"},b=["onClick"],S=["onClick"];function M(t,e,n,i,r,o){return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",g,[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>o.prev&&o.prev(...t))},"◄"),(0,s._)("span",p,(0,a.zw)(o.title)+" "+(0,a.zw)(r.year),1),(0,s._)("button",{onClick:e[1]||(e[1]=(...t)=>o.next&&o.next(...t))},"►")]),(0,s._)("div",m,[(0,s._)("div",k,(0,a.zw)(t.$t("Calendar.days.Mon")),1),(0,s._)("div",D,(0,a.zw)(t.$t("Calendar.days.Tue")),1),(0,s._)("div",f,(0,a.zw)(t.$t("Calendar.days.Wed")),1),(0,s._)("div",C,(0,a.zw)(t.$t("Calendar.days.Ths")),1),(0,s._)("div",y,(0,a.zw)(t.$t("Calendar.days.Fri")),1),(0,s._)("div",$,(0,a.zw)(t.$t("Calendar.days.Sat")),1),(0,s._)("div",z,(0,a.zw)(t.$t("Calendar.days.Sun")),1)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.weeks,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"week",key:e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["day selectable",0==t?"hide":""]),onClick:e=>o.showEvents(t),key:e},[(0,s._)("div",{class:(0,a.C_)(["day-wrap",{selected_day:o.dayTrue(t,this.month,this.year)}]),onClick:e=>o.returnData(t)},(0,a.zw)(t),11,S)],10,b)))),128))])))),128))])}const W=new Date,L=(t,e)=>new Date(t,e,0).getDate();var H={props:["content"],data(){return{eventTrue:[],month:0,year:0,days:[],weeks:[]}},mounted(){this.init()},computed:{MONTHS(){return[this.$t("Calendar.month.January"),this.$t("Calendar.month.February"),this.$t("Calendar.month.March"),this.$t("Calendar.month.April"),this.$t("Calendar.month.May"),this.$t("Calendar.month.June"),this.$t("Calendar.month.July"),this.$t("Calendar.month.August"),this.$t("Calendar.month.September"),this.$t("Calendar.month.October"),this.$t("Calendar.month.November"),this.$t("Calendar.month.December")]},title(){return`${this.MONTHS[this.month]}`}},created(){},methods:{dayTrue(t,e,n){if(this.content){let s=t+"."+e+"."+n;for(let t=0;t<this.content.length;++t){let e=new Date(this.content[t].start_date),n=e.getDate()+"."+e.getMonth()+"."+e.getFullYear();if(n==s)return!0}}return!1},returnData(t){let e=t+"-"+(this.month+1)+"-"+this.year;this.$emit("dataSelect",e)},next(){this.update(new Date(this.year,this.month+1,1))},prev(){this.update(new Date(this.year,this.month-1,1))},daysInMonth(){return L(this.year,this.month+1)},monthStartsOn(){return new Date(this.year,this.month,1).getDay()},update(t){t&&(this.month=t.getMonth(),this.year=t.getFullYear(),this.day=t.getDate()),this.setDays(),this.setWeeks()},setDays(){let t=this.monthStartsOn()>0?Array(this.monthStartsOn()-1).fill(0):[0,0,0,0,0,0];this.days=[...t,...Array(this.daysInMonth()+1).keys()]},setWeeks(){let t=1;this.weeks=[];while(t<this.days.length){let e=[...this.days.slice(t,t+=7),...Array(7).fill(0)].slice(0,7);this.weeks.push(e)}},showEvents(t){let e=`${this.title2}-${t}`;this.$emit("showEvents",{data:e})},init(){this.update(W)}}},Z=n(744);const E=(0,Z.Z)(H,[["render",M],["__scopeId","data-v-30e04845"]]);var T=E;const Y={key:0},I=["href"],N={class:"calendar_item_img"},B=["src"],F={class:"calendar_item_img_data"},x={class:"calendar_item_info"},A={class:"calendar_item_name"},K=["innerHTML"],j={class:"calendar_item_wrapLocation"},O={class:"calendar_item_time"},U={class:"calendar_item_location"};function q(t,e,n,i,r,o){return n.content.id?((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("a",{href:`https://asprofosvit.org/${this.$i18n.locale}/details/`+n.content.id,class:"calendar_item",target:"_blank"},[(0,s._)("div",N,[(0,s._)("img",{src:n.content.image,alt:"img"},null,8,B),(0,s._)("div",F,(0,a.zw)(o.getDateStart)+"."+(0,a.zw)(o.getMonthStart)+" - "+(0,a.zw)(o.getDateEnd)+"."+(0,a.zw)(o.getMonthEnd),1)]),(0,s._)("div",x,[(0,s._)("div",null,[(0,s._)("div",A,(0,a.zw)(n.content.name),1),(0,s._)("div",{class:"calendar_item_text",innerHTML:n.content.description},null,8,K)]),(0,s._)("div",j,[(0,s._)("div",O,(0,a.zw)(o.getHoursStart)+":"+(0,a.zw)(o.getMinutesStart)+" - "+(0,a.zw)(o.getHoursEnd)+":"+(0,a.zw)(o.getMinutesEnd),1),(0,s._)("div",U,(0,a.zw)(n.content.place),1)])])],8,I)])):(0,s.kq)("",!0)}var J={props:["content"],data(){return{}},methods:{goToCourse(t){this.$router.push({name:"courseSingle",params:{Pid2:t}})}},computed:{getDateStart(){return new Date(this.content.start_date).getDate()},getMonthStart(){let t=new Date(this.content.start_date).getMonth()+1;return t<10?"0"+t:t},getDateEnd(){return new Date(this.content.end_date).getDate()},getMonthEnd(){let t=new Date(this.content.end_date).getMonth()+1;return t<10?"0"+t:t},getHoursStart(){return new Date(this.content.start_date).getHours()},getMinutesStart(){let t=new Date(this.content.start_date).getMinutes();return t<10?"0"+t:t},getHoursEnd(){return new Date(this.content.end_date).getHours()},getMinutesEnd(){let t=new Date(this.content.end_date).getMinutes();return t<10?"0"+t:t}}};const P=(0,Z.Z)(J,[["render",q],["__scopeId","data-v-3db0fe96"]]);var R=P,V={props:["content"],components:{Calendar:T,ItemCalendarEvent:R},data(){return{clickCalendar:!1,filterCalendarList:[]}},computed:{calendarList(){if(this.content.list)return this.content.list.sort((function(t,e){return Date.parse(e.start_date)/1e3-Date.parse(t.start_date)/1e3})),this.content.list.slice(0,3)}},methods:{dataSelect(t){this.filterCalendarList=[];for(let e=0;e<this.content.list.length;e++){let n=new Date(this.content.list[e].start_date);n=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),n===t&&this.filterCalendarList.push(this.content.list[e])}this.filterCalendarList.length>0?this.clickCalendar=!0:this.clickCalendar=!1}}};const G=(0,Z.Z)(V,[["render",w]]);var Q=G},771:function(t,e,n){n.d(e,{Z:function(){return g}});var s=n(252),a=n(577);const i={class:"courses"},r={class:"container"},o={class:"courses_content"},d={class:"courses_title"};function l(t,e,n,l,c,u){const h=(0,s.up)("ItemCatCourses"),_=(0,s.up)("slide"),w=(0,s.up)("navigation"),v=(0,s.up)("carousel"),g=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("h2",d,(0,a.zw)(t.$t("courses.title")),1),(0,s.Wm)(v,{class:"courses_carousel","items-to-show":c.width<=767?1:4,snapAlign:"start"},{addons:(0,s.w5)((()=>[(0,s.Wm)(w)])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.content.list,((t,e)=>((0,s.wg)(),(0,s.j4)(_,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{content:t},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["items-to-show"]),(0,s.Wm)(g,{btnClass:"btnLink",onClick:e[0]||(e[0]=t=>u.openCourses())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.$t("courses.btnName")),1)])),_:1})])])])}var c=n(410),u=n(133),h=n(488),_={props:["content"],components:{Button:u.Z,Carousel:c.lr,Slide:c.Mi,Navigation:c.W_,ItemCatCourses:h.Z},data(){return{width:0}},methods:{updateWidth(){this.width=window.innerWidth},openCourses(){this.$router.push(`/${this.$i18n.locale}/courses`)}},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}},w=n(744);const v=(0,w.Z)(_,[["render",l]]);var g=v},233:function(t,e,n){n.d(e,{Z:function(){return S}});var s=n(252),a=n(577);const i={class:"events"},r={class:"container"},o={class:"events_content"},d={class:"events_title"};function l(t,e,n,l,c,u){const h=(0,s.up)("ItemEvent"),_=(0,s.up)("slide"),w=(0,s.up)("navigation"),v=(0,s.up)("carousel"),g=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("h2",d,(0,a.zw)(n.content.title),1),(0,s.Wm)(v,{class:"events_carousel","items-to-show":c.width<=767?1:2,snapAlign:"start"},{addons:(0,s.w5)((()=>[(0,s.Wm)(w)])),default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.content.list,((t,e)=>((0,s.wg)(),(0,s.j4)(_,{key:e},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{content:t},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["items-to-show"]),(0,s.Wm)(g,{btnClass:"btnLink",onClick:e[0]||(e[0]=t=>u.openLogin())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.$t("events.btnName")),1)])),_:1})])])])}var c=n(410),u=n(133);const h={class:"events_img"},_=["src"],w={class:"events_bottom"},v={class:"events_name"},g=["innerHTML"],p={class:"events_wrapData"},m={class:"events_data"},k=(0,s._)("div",{class:"events_more"}," Детальніше ",-1);function D(t,e,n,i,r,o){return n.content?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"events_item",onClick:e[0]||(e[0]=t=>o.goToVebinar(n.content.id))},[(0,s._)("div",h,[(0,s._)("img",{src:n.content.image,alt:"img"},null,8,_)]),(0,s._)("div",w,[(0,s._)("div",null,[(0,s._)("div",v,(0,a.zw)(n.content.name),1),(0,s._)("div",{class:"events_text",innerHTML:n.content.description},null,8,g)]),(0,s._)("div",p,[(0,s._)("div",m,[(0,s._)("span",null,"Дата: "+(0,a.zw)(o.getDateStart)+"."+(0,a.zw)(o.getMonthStart)+"."+(0,a.zw)(o.getYearStart),1),(0,s._)("span",null,"Час: "+(0,a.zw)(o.getHoursStart)+":"+(0,a.zw)(o.getMinutesStart),1)]),k])])])):(0,s.kq)("",!0)}var f={props:["content"],data(){return{}},methods:{goToVebinar(t){this.$router.push({name:"vebinarSingle",params:{Pid2:t}})}},computed:{getDateStart(){return new Date(this.content.start_date).getDate()},getYearStart(){return new Date(this.content.start_date).getFullYear()},getMonthStart(){let t=new Date(this.content.start_date).getMonth()+1;return t<10?"0"+t:t},getHoursStart(){return new Date(this.content.start_date).getHours()},getMinutesStart(){let t=new Date(this.content.start_date).getMinutes();return t<10?"0"+t:t}}},C=n(744);const y=(0,C.Z)(f,[["render",D]]);var $=y,z={props:["content"],components:{Button:u.Z,Carousel:c.lr,Slide:c.Mi,Navigation:c.W_,ItemEvent:$},data(){return{width:0}},methods:{updateWidth(){this.width=window.innerWidth},openLogin(){""===this.tokkent?this.$router.push(`/${this.$i18n.locale}/login`):window.open(`https://asprofosvit.org/another_domen_auth/${this.tokkent}`)}},computed:{tokkent(){return this.$store.getters.getToken}},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}};const b=(0,C.Z)(z,[["render",l]]);var S=b},256:function(t,e,n){n.d(e,{Z:function(){return f}});var s=n(252),a=n(577);const i={class:"instruction"},r={class:"container"},o={class:"instruction_content"},d={class:"instruction_title"},l={class:"instruction_item"},c={key:0,class:"instruction_video"},u=["src"],h={class:"instruction_item_bottom"},_={class:"instruction_item_name"},w={class:"instruction_item_text"};function v(t,e,n,v,g,p){const m=(0,s.up)("slide"),k=(0,s.up)("navigation"),D=(0,s.up)("carousel"),f=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("h2",d,(0,a.zw)(t.$t("instruction.title")),1),(0,s.Wm)(D,{class:"events_carousel","items-to-show":g.width<=767?1:3,snapAlign:"start"},(0,s.Nv)({default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.content.list,((e,n)=>((0,s.wg)(),(0,s.j4)(m,{key:n},{default:(0,s.w5)((()=>[(0,s._)("div",l,[e.video?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("video",{src:e.video,preload:"auto",controls:"",loop:""},null,8,u)])):(0,s.kq)("",!0),(0,s._)("div",h,[(0,s._)("div",_,(0,a.zw)(t.$t("instruction.list.title")),1),(0,s._)("div",w,(0,a.zw)(e.text),1)])])])),_:2},1024)))),128))])),_:2},[g.width<=767?{name:"addons",fn:(0,s.w5)((()=>[(0,s.Wm)(k)])),key:"0"}:void 0]),1032,["items-to-show"]),(0,s.Wm)(f,{btnClass:"btnLink",onClick:e[0]||(e[0]=t=>p.openLogin())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.$t("instruction.btnName")),1)])),_:1})])])])}var g=n(133),p=n(410),m={props:["content"],components:{Button:g.Z,Carousel:p.lr,Slide:p.Mi,Navigation:p.W_},data(){return{width:0}},methods:{redirect(){window.open(`https://asprofosvit.org/another_domen_auth/${this.tokkent}`)},updateWidth(){this.width=window.innerWidth},openLogin(){""===this.tokkent?this.$router.push(`/${this.$i18n.locale}/login`):window.open(`https://asprofosvit.org/another_domen_auth/${this.tokkent}`)}},computed:{tokkent(){return this.$store.getters.getToken}},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}},k=n(744);const D=(0,k.Z)(m,[["render",v]]);var f=D},125:function(t,e,n){n.d(e,{Z:function(){return k}});var s=n(252),a=n(577);const i={class:"poster"},r={class:"poster_bg"},o=["src"],d={class:"container"},l={class:"poster_content"},c={class:"poster_info"},u={class:"poster_title"},h={class:"poster_subtitle"};function _(t,e,n,_,w,v){const g=(0,s.up)("Button"),p=(0,s.up)("Feedback");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("img",{src:n.content.img,alt:"img"},null,8,o)]),(0,s._)("div",d,[(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("h1",u,(0,a.zw)(n.content.title),1),(0,s._)("h2",h,(0,a.zw)(n.content.text),1),""===v.tokkent?((0,s.wg)(),(0,s.j4)(g,{key:0,btnClass:"btnPoster",onClick:e[0]||(e[0]=t=>v.openReg())},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.$t("Зареєструватися")),1)])),_:1})):(0,s.kq)("",!0)]),(0,s.Wm)(p)])])])}var w=n(133),v=n(119),g={props:["content"],components:{Button:w.Z,Feedback:v.Z},data(){return{}},computed:{tokkent(){return this.$store.getters.getToken}},methods:{openReg(){this.$router.push(`/${this.$i18n.locale}/register`)}}},p=n(744);const m=(0,p.Z)(g,[["render",_]]);var k=m},119:function(t,e,n){n.d(e,{Z:function(){return _}});var s=n(252),a=n(577);const i={class:"feedback"},r={class:"feedback__title"},o={class:"feedback__description"};function d(t,e,n,d,l,c){const u=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,(0,a.zw)(t.$t("feedback.title")),1),(0,s._)("div",o,(0,a.zw)(t.$t("feedback.description")),1),(0,s.Wm)(u,{btnClass:"btnFeedback"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.$t("feedback.btnName")),1)])),_:1})])}var l=n(133),c={components:{Button:l.Z}},u=n(744);const h=(0,u.Z)(c,[["render",d],["__scopeId","data-v-45547412"]]);var _=h}}]);
//# sourceMappingURL=941.9f9df2ea.js.map