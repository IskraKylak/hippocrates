"use strict";(self["webpackChunkhippocrates"]=self["webpackChunkhippocrates"]||[]).push([[499],{7431:function(s,e,t){t.d(e,{Z:function(){return m}});var n=t(6252),o=t(3577);const r={class:"courses_img"},c=["src"],u={class:"courses_content"},i={class:"courses_title"},a=["innerHTML"];function l(s,e,t,l,d,_){return(0,n.wg)(),(0,n.iD)("div",{class:"courses_item",onClick:e[0]||(e[0]=s=>_.goToCourse(t.content.id))},[(0,n._)("div",r,[(0,n._)("img",{src:t.content.course_image,alt:"img"},null,8,c)]),(0,n._)("div",u,[(0,n._)("div",i,(0,o.zw)(t.content.name),1),(0,n._)("div",{class:"courses_text",innerHTML:t.content.description},null,8,a)])])}var d={props:["content"],data(){return{}},methods:{goToCourse(s){this.$router.push({name:"courseSingle",params:{Pid2:s}})}}},_=t(3744);const p=(0,_.Z)(d,[["render",l],["__scopeId","data-v-36058b68"]]);var m=p},7499:function(s,e,t){t.r(e),t.d(e,{default:function(){return _}});var n=t(6252);const o={class:"courses-page"},r={class:"courses-page_list"};function c(s,e,t,c,u,i){const a=(0,n.up)("ItemCourses");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.coursesType2.courses,((s,e)=>((0,n.wg)(),(0,n.j4)(a,{key:e,content:s},null,8,["content"])))),128))])])}var u=t(3907),i=t(7431),a={name:"Search",components:{ItemCourses:i.Z},methods:{...(0,u.nv)(["GET_SEARCH_FROM_API"])},mounted(){this.GET_SEARCH_FROM_API().then((s=>{if(s){this.countItem=s.count;for(let e=0;e<s.results.length;e++)this.coursesType2.courses.push(s.results[e])}}))},data(){return{coursesType2:{name:"Знайдені курси",courses:[]}}}},l=t(3744);const d=(0,l.Z)(a,[["render",c],["__scopeId","data-v-3d39541e"]]);var _=d}}]);
//# sourceMappingURL=499.fa4efd81.js.map