"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[791],{9772:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(6252),s=i(3577);const n={class:"breadcrumbs"},a={key:1,class:"breadcrumbs_title"};function o(e,t,i,o,l,d){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.content,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[e.link?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"breadcrumbs_link",to:e.link},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.name)+" / ",1)])),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("div",a,(0,s.zw)(e.name),1))])))),128))])}var l={name:"Home",props:["content"],components:{},data(){return{}}},d=i(3744);const c=(0,d.Z)(l,[["render",o],["__scopeId","data-v-31b54de0"]]);var u=c},8791:function(e,t,i){i.r(t),i.d(t,{default:function(){return J}});var r=i(6252),s=i(3577),n=i(9963);const a=e=>((0,r.dD)("data-v-70e0f140"),e=e(),(0,r.Cn)(),e),o={class:"vebinarPage"},l={class:"vebinarPage_content"},d={class:"vebinarPage_title"},c={class:"vebinarPage_wrapVideo"},u={id:"stream-container"},p={id:"stream-embed-wrapper"},m=["src"],b=a((()=>(0,r._)("div",{id:"chat-embed-wrapper"},null,-1))),g=a((()=>(0,r._)("div",{class:"clear_both"},null,-1))),v={class:"vebinarPage_textVideo"},_=(0,r.Uk)(" Аторизуйтесь "),h={class:"vebinarPage_spicers"},w={class:"vebinarPage_title"},k=["innerHTML"],f={key:0,class:"wrapBtn"},P=(0,r.Uk)(" Реєстрація на семінар "),y={key:1},x=(0,r.Uk)(" Пройти опитування "),T={class:"vebinarPage_surpriseWrap"},L={class:"vebinarPage_surprise"},E={class:"vebinarPage_surpriseTop"},B={class:"vebinarPage_surpriseLeft"},I={class:"vebinarPage_surpriseText1"},z={class:"vebinarPage_surpriseText"},$={class:"vebinarPage_surpriseText2"},A={class:"vebinarPage_surpriseRight"},V={class:"vebinarPage_wrapImg"},D=["src"],C={class:"vebinarPage_surpriseBottom"},H={class:"vebinarPage_surpriseLeft"},M={class:"vebinarPage_surpriseText3"},S=["innerHTML"],N={class:"vebinarPage_surpriseRight"},R={class:"vebinarPage_surpriseText3"},G=["innerHTML"];function U(e,t,i,a,U,Z){const j=(0,r.up)("Breadcrumbs"),W=(0,r.up)("Button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[(0,r.Wm)(j,{content:Z.breadcrumbs},null,8,["content"]),(0,r.Uk)(" "+(0,s.zw)(U.vebinar)+" ",1),(0,r._)("div",l,[(0,r._)("h2",d,(0,s.zw)(U.vebinar.name),1)]),(0,r._)("div",c,[(0,r._)("div",u,[(0,r._)("div",p,[(0,r._)("iframe",{id:"stream-embed-iframe",height:"100%",width:"100%",src:"https://www.youtube.com/embed/"+this.vebinar.youtube_id,frameborder:"0",allowfullscreen:""},null,8,m)]),b,g]),(0,r._)("p",v,(0,s.zw)(U.textVideo),1),""===Z.tokkent?((0,r.wg)(),(0,r.j4)(W,{key:0,btnClass:"btnLink",onClick:t[0]||(t[0]=e=>Z.openLog())},{default:(0,r.w5)((()=>[_])),_:1})):(0,r.kq)("",!0)]),(0,r._)("div",h,[(0,r._)("h2",w,(0,s.zw)(U.titleSpikers),1),(0,r._)("div",{class:"vebinarPage_content",innerHTML:U.vebinar.text},null,8,k),""!=Z.tokkent&&U.vebinar.test?((0,r.wg)(),(0,r.iD)("div",f,[U.vebinar.registered?((0,r.wg)(),(0,r.iD)("div",y," Ви зареєстровані! ")):((0,r.wg)(),(0,r.j4)(W,{key:0,btnClass:"btnLink",class:"reg",onClick:t[1]||(t[1]=(0,n.iM)((e=>Z.registerSeminar()),["prevent"]))},{default:(0,r.w5)((()=>[P])),_:1})),U.vebinar.test&&U.vebinar.registered?((0,r.wg)(),(0,r.j4)(W,{key:2,btnClass:"btnLink",onClick:t[2]||(t[2]=e=>Z.goToTest())},{default:(0,r.w5)((()=>[x])),_:1})):(0,r.kq)("",!0)])):(0,r.kq)("",!0)])]),(0,r._)("div",T,[(0,r._)("div",L,[(0,r._)("div",E,[(0,r._)("div",B,[(0,r._)("p",I,(0,s.zw)(U.surprise.text1),1),(0,r._)("p",z,(0,s.zw)(U.surprise.text2),1),(0,r._)("p",$,(0,s.zw)(U.surprise.text3),1)]),(0,r._)("div",A,[(0,r._)("div",V,[(0,r._)("img",{src:U.surprise.img,alt:"img"},null,8,D)])])]),(0,r._)("div",C,[(0,r._)("div",H,[(0,r._)("p",M,(0,s.zw)(U.terms.text1),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(U.terms.list,((e,t)=>((0,r.wg)(),(0,r.iD)("p",{class:"vebinarPage_surpriseText",key:t,innerHTML:e},null,8,S)))),128))]),(0,r._)("div",N,[(0,r._)("p",R,(0,s.zw)(U.terms.attention.title),1),(0,r._)("p",{class:"vebinarPage_surpriseText",innerHTML:U.terms.attention.text},null,8,G)])])])])],64)}var Z=i(9558),j=i(9772),W=i(3907),q=i(9669),F=i.n(q),Y={name:"Vebinars",components:{Breadcrumbs:j.Z,Button:Z.Z},data(){return{title:this.$route.params.Pid,vebinar:{},textVideo:"Шановлі лікарі! Щоб мати змогу подивитися вебінар, ви маєте аторизуватися або зареєструватися на даному сайті",titleSpikers:"Спікери",textSpikers:"",surprise:{text1:"Шановні, лікарі!",text2:"Сьогодні, під час прямого ефіру, буде проведено",text3:"розіграш трьох смартфонів + 250 подарунків.",img:i(9232)},terms:{text1:"Для участі у розіграші необхідно:",list:["1) Зареєструватися на вебінарі",'2) Приєднатися до прослуховування вебінару <br> <span style="color: #9D1006; font-weight: 700; margin-left: 25px;">2 лютого о 16:00</span>',"3) І залишатися з нами протягом всього вебінару."],attention:{title:"Увага! У розіграші приймають участь лише лікарі України.",text:'Повідомлення про перемогу прийде на пошту лікарю, та додатково буде опубліковано список переможців в соціальній мережі ФБ, на сторінці <a href="#" style="font-weight: 700; color: #1FAEEA; text-decoration: none;"  >https://www.facebook.com/hippocrates.org.ua</a>'}}}},methods:{goToTest(){this.$router.push({name:"testVebinar",params:{Pid4:this.title}})},openLog(){this.$router.push("/login")},...(0,W.nv)(["GET_VEBINARSINGLE_FROM_API"]),getApiVebinar(){let e={id:this.$route.params.Pid,tokken:this.tokkent};this.GET_VEBINARSINGLE_FROM_API(e).then((e=>{if(e){console.log("this.vebinar"),this.vebinar=e;const t="dAv0Tyxu8-M";this.vebinar&&(t=this.vebinar.youtube_id);let i=document.getElementById("chat-embed-wrapper"),r=document.createElement("iframe");r.referrerPolicy="origin",r.src=`https://www.youtube.com/live_chat?v=${t}&embed_domain=${window.location.hostname}&dark_theme=1`,r.frameBorder="0",r.id="chat-embed-iframe",r.style.height="100%",r.style.width="100%",i.appendChild(r);let s=function(){let e=document.getElementById("stream-container"),t=document.getElementById("stream-embed-wrapper"),r=document.getElementById("stream-embed-iframe");"undefined"!==typeof window.orientation?(i.style.display="none",r.width=e.clientWidth):r.width=t.clientWidth};s(),window.onresize=function(e){s()}}}))},async registerSeminar(){this.$store.getters.getToken?await F()({url:`https://asprof-test.azurewebsites.net/api/webinars/${this.$route.params.Pid}/register/`,method:"Post",headers:{Authorization:"Bearer "+this.tokkent}}).then((e=>{this.$message("Вы зареєстровані!"),this.getNotify()})).catch((e=>{console.log(e),this.$message("Помилка")})):this.$router.push({name:"inLogin"}),this.getApiVebinar()}},computed:{...(0,W.Se)(["VEBINARSINGLE"]),tokkent(){return this.$store.getters.getToken},breadcrumbs(){let e=[{name:"Головна",link:"/"},{name:"Вебінари",link:"/vebinars"}];return this.vebinar.name&&e.push({name:this.vebinar.name}),e}},mounted(){this.getApiVebinar()}},K=i(3744);const O=(0,K.Z)(Y,[["render",U],["__scopeId","data-v-70e0f140"]]);var J=O},9232:function(e,t,i){e.exports=i.p+"img/imageEvents2.0dddd60f.png"}}]);
//# sourceMappingURL=791.dcb087b0.js.map