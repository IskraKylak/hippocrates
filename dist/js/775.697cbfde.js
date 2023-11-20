"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[775],{3259:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(6252),a=n(3577);const l={class:"coursesCat_img"},i=["src"],r={class:"coursesCat_name"};function u(e,t,n,u,s,c){return(0,o.wg)(),(0,o.iD)("div",{class:"coursesCat_item",onClick:t[0]||(t[0]=e=>c.goToCoursesCat(n.content.name))},[(0,o._)("div",l,[(0,o._)("img",{src:n.content.img,alt:"img"},null,8,i)]),(0,o._)("div",r,(0,a.zw)(n.content.name),1)])}var s={props:["content"],data(){return{}},methods:{goToCoursesCat(){let e="";e+=`&specializations=${this.content.id}`,this.$emit("goToCoursesCat",e)}}},c=n(3744);const d=(0,c.Z)(s,[["render",u],["__scopeId","data-v-8f4a46e6"]]);var v=d},7410:function(e,t,n){n.d(t,{Mi:function(){return S},W_:function(){return g},lr:function(){return m}});var o=n(6252),a=n(2262),l=n(9963);
/**
 * Vue 3 Carousel 0.1.46
 * (c) 2022
 * @license MIT
 */
const i={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},r={itemsToShow:{default:i.itemsToShow,type:Number},itemsToScroll:{default:i.itemsToScroll,type:Number},wrapAround:{default:i.wrapAround,type:Boolean},snapAlign:{default:i.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:i.transition,type:Number},breakpoints:{default:i.breakpoints,type:Object},autoplay:{default:i.autoplay,type:Number},pauseAutoplayOnHover:{default:i.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:i.mouseDrag,type:Boolean},touchDrag:{default:i.touchDrag,type:Boolean},dir:{default:i.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function u(e,t){let n;return function(...o){n&&clearTimeout(n),n=setTimeout((()=>{e(...o),n=null}),t)}}function s(e,t){let n;return function(...o){const a=this;n||(e.apply(a,o),n=!0,setTimeout((()=>n=!1),t))}}function c(e){var t,n,o;return e?"CarouselSlide"===(null===(n=null===(t=e[0])||void 0===t?void 0:t.type)||void 0===n?void 0:n.name)?e:(null===(o=e[0])||void 0===o?void 0:o.children)||[]:[]}function d(e,t){if(e.wrapAround)return t-1;switch(e.snapAlign){case"start":return t-e.itemsToShow;case"end":return t-1;case"center":case"center-odd":return t-Math.ceil(e.itemsToShow/2);case"center-even":return t-Math.ceil(e.itemsToShow/2);default:return 0}}function v(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function p(e,t,n,o){return e.wrapAround?t:Math.min(Math.max(t,o),n)}function f({slidesBuffer:e,currentSlide:t,snapAlign:n,itemsToShow:o,wrapAround:a,slidesCount:l}){let i=e.indexOf(t);if(-1===i&&(i=e.indexOf(Math.ceil(t))),"center"===n||"center-odd"===n?i-=(o-1)/2:"center-even"===n?i-=(o-2)/2:"end"===n&&(i-=o-1),!a){const e=l-o,t=0;i=Math.max(Math.min(i,e),t)}return i}var m=(0,o.aZ)({name:"Carousel",props:r,setup(e,{slots:t,emit:n,expose:m}){var h;const w=(0,a.iH)(null),g=(0,a.iH)([]),S=(0,a.iH)([]),b=(0,a.iH)(0),y=(0,a.iH)(1);let x,T,A=(0,a.iH)({}),_=Object.assign({},i);const M=(0,a.qj)(Object.assign({},_)),C=(0,a.iH)(null!==(h=M.modelValue)&&void 0!==h?h:0),H=(0,a.iH)(0),O=(0,a.iH)(0),j=(0,a.iH)(0),k=(0,a.iH)(0);function L(){const t=Object.assign(Object.assign({},e),e.settings);A=(0,a.iH)(Object.assign({},t.breakpoints)),_=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),B(_)}function J(){const e=Object.keys(A.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},_);e.some((e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),A.value[e]),!0)})),B(t)}function B(e){for(let t in e)M[t]=e[t]}(0,o.JJ)("config",M),(0,o.JJ)("slidesBuffer",S),(0,o.JJ)("slidesCount",y),(0,o.JJ)("currentSlide",C),(0,o.JJ)("maxSlide",j),(0,o.JJ)("minSlide",k);const D=u((()=>{A.value&&(J(),E()),N()}),16);function N(){if(!w.value)return;const e=w.value.getBoundingClientRect();b.value=e.width/M.itemsToShow}function E(){y.value=Math.max(g.value.length,1),y.value<=0||(O.value=Math.ceil((y.value-1)/2),j.value=d(M,y.value),k.value=v(M),C.value=p(M,C.value,j.value,k.value))}function V(){const e=[...Array(y.value).keys()],t=M.wrapAround&&M.itemsToShow+1<=y.value;if(t){const t=1!==M.itemsToShow?Math.round((y.value-M.itemsToShow)/2):0;let n=t-C.value;if("end"===M.snapAlign?n+=Math.floor(M.itemsToShow-1):"center"!==M.snapAlign&&"center-odd"!==M.snapAlign||n++,n<0)for(let o=n;o<0;o++)e.push(Number(e.shift()));else for(let o=0;o<n;o++)e.unshift(Number(e.pop()))}S.value=e}(0,o.bv)((()=>{A.value&&(J(),E()),(0,o.Y3)((()=>setTimeout(N,16))),W(),window.addEventListener("resize",D,{passive:!0})})),(0,o.Ah)((()=>{T&&clearTimeout(T),x&&clearInterval(x)}));let z=!1;const Y={x:0,y:0},q={x:0,y:0},X=(0,a.qj)({x:0,y:0}),$=(0,a.iH)(!1),I=()=>{$.value=!0},R=()=>{$.value=!1};function Z(e){z="touchstart"===e.type,!z&&0!==e.button||U.value||(z||e.preventDefault(),Y.x=z?e.touches[0].clientX:e.clientX,Y.y=z?e.touches[0].clientY:e.clientY,document.addEventListener(z?"touchmove":"mousemove",F,!0),document.addEventListener(z?"touchend":"mouseup",P,!0))}const F=s((e=>{q.x=z?e.touches[0].clientX:e.clientX,q.y=z?e.touches[0].clientY:e.clientY;const t=q.x-Y.x,n=q.y-Y.y;X.y=n,X.x=t}),16);function P(){const e="rtl"===M.dir?-1:1,t=.4*Math.sign(X.x),n=Math.round(X.x/b.value+t)*e;let o=p(M,C.value-n,j.value,k.value);if(n&&!z){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}K(o),X.x=0,X.y=0,document.removeEventListener(z?"touchmove":"mousemove",F,!0),document.removeEventListener(z?"touchend":"mouseup",P,!0)}function W(){!M.autoplay||M.autoplay<=0||(x=setInterval((()=>{M.pauseAutoplayOnHover&&$.value||Q()}),M.autoplay))}function G(){x&&(clearInterval(x),x=null),W()}const U=(0,a.iH)(!1);function K(e,t=!1){if(C.value===e||U.value)return;G();const o=y.value-1;return e>o?K(e-y.value):e<0?K(e+y.value):(U.value=!0,H.value=C.value,C.value=e,t||n("update:modelValue",C.value),void(T=setTimeout((()=>{M.wrapAround&&V(),U.value=!1}),M.transition)))}function Q(){let e=C.value+M.itemsToScroll;M.wrapAround||(e=Math.min(e,j.value)),K(e)}function ee(){let e=C.value-M.itemsToScroll;M.wrapAround||(e=Math.max(e,k.value)),K(e)}const te={slideTo:K,next:Q,prev:ee};(0,o.JJ)("nav",te);const ne=(0,o.Fl)((()=>f({slidesBuffer:S.value,itemsToShow:M.itemsToShow,snapAlign:M.snapAlign,wrapAround:Boolean(M.wrapAround),currentSlide:C.value,slidesCount:y.value})));(0,o.JJ)("slidesToScroll",ne);const oe=(0,o.Fl)((()=>{const e="rtl"===M.dir?-1:1,t=ne.value*b.value*e;return{transform:`translateX(${X.x-t}px)`,transition:`${U.value?M.transition:0}ms`}}));function ae(){L()}function le(){L(),J(),E(),V(),N(),G()}function ie(){E(),V()}Object.keys(r).forEach((t=>{["modelValue"].includes(t)||(0,o.YP)((()=>e[t]),le)})),ae(),(0,o.m0)((()=>{const t=y.value!==g.value.length,n=void 0!==e.modelValue&&C.value!==e.modelValue;n&&K(Number(e.modelValue),!0),t&&ie()}));const re={config:M,slidesBuffer:S,slidesCount:y,slideWidth:b,currentSlide:C,maxSlide:j,minSlide:k,middleSlide:O};m({updateBreakpointsConfigs:J,updateSlidesData:E,updateSlideWidth:N,updateSlidesBuffer:V,initCarousel:ae,restartCarousel:le,updateCarousel:ie,slideTo:K,next:Q,prev:ee,nav:te,data:re});const ue=t.default||t.slides,se=t.addons,ce=(0,a.qj)(re);return()=>{const e=c(null===ue||void 0===ue?void 0:ue(ce)),t=(null===se||void 0===se?void 0:se(ce))||[];g.value=e,e.forEach(((e,t)=>e.props.index=t));const n=(0,o.h)("ol",{class:"carousel__track",style:oe.value,onMousedown:M.mouseDrag?(0,l.iM)(Z,["capture"]):null,onTouchstart:M.touchDrag?(0,l.iM)(Z,["capture"]):null},e),a=(0,o.h)("div",{class:"carousel__viewport"},n);return(0,o.h)("section",{ref:w,class:{carousel:!0,"carousel--rtl":"rtl"===M.dir},dir:M.dir,"aria-label":"Gallery",onMouseenter:I,onMouseleave:R},[a,t])}}});const h={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},w=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=h[t],a=(0,o.h)("path",{d:n}),l=e.title||t,i=(0,o.h)("title",l);return(0,o.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:l},[i,a])};w.props={name:String,title:String};const g=(e,{slots:t,attrs:n})=>{const{next:l,prev:r}=t||{},u=(0,o.f3)("config",(0,a.qj)(Object.assign({},i))),s=(0,o.f3)("maxSlide",(0,a.iH)(1)),c=(0,o.f3)("minSlide",(0,a.iH)(1)),d=(0,o.f3)("currentSlide",(0,a.iH)(1)),v=(0,o.f3)("nav",{}),p="rtl"===u.dir,f=(0,o.h)("button",{type:"button",class:["carousel__prev",!u.wrapAround&&d.value<=c.value&&"carousel__prev--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:v.prev},(null===r||void 0===r?void 0:r())||(0,o.h)(w,{name:p?"arrowRight":"arrowLeft"})),m=(0,o.h)("button",{type:"button",class:["carousel__next",!u.wrapAround&&d.value>=s.value&&"carousel__next--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:v.next},(null===l||void 0===l?void 0:l())||(0,o.h)(w,{name:p?"arrowLeft":"arrowRight"}));return[f,m]};var S=(0,o.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:t}){const n=(0,o.f3)("config",(0,a.qj)(Object.assign({},i))),l=(0,o.f3)("slidesBuffer",(0,a.iH)([])),r=(0,o.f3)("currentSlide",(0,a.iH)(0)),u=(0,o.f3)("slidesToScroll",(0,a.iH)(0)),s=(0,a.iH)(e.index);function c(){s.value=l.value.indexOf(e.index)}n.wrapAround&&(c(),(0,o.YP)(l,c));const d=(0,o.Fl)((()=>{const e=n.itemsToShow,t=1/e*100+"%";return{width:t,order:s.value.toString()}})),v=()=>e.index===r.value,p=()=>{const t=Math.ceil(u.value),o=Math.floor(u.value+n.itemsToShow),a=l.value.slice(t,o);return a.includes(e.index)},f=()=>e.index===l.value[Math.ceil(u.value)-1],m=()=>e.index===l.value[Math.floor(u.value+n.itemsToShow)];return()=>{var e;return(0,o.h)("li",{style:d.value,class:{carousel__slide:!0,"carousel__slide--active":v(),"carousel__slide--visible":p(),"carousel__slide--prev":f(),"carousel__slide--next":m()}},null===(e=t.default)||void 0===e?void 0:e.call(t))}}})}}]);
//# sourceMappingURL=775.697cbfde.js.map