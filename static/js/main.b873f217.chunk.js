(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{12:function(e,n,t){e.exports={header:"Landing_header__1Te6f",bg_container:"Landing_bg_container__nZKp8",bg_shapes:"Landing_bg_shapes__fy9M-",animate:"Landing_animate__1zWlS",arrow:"Landing_arrow__2zNXo",bounce:"Landing_bounce__350a7"}},13:function(e,n,t){e.exports={container:"MenuIcon_container__3L7_Z",box:"MenuIcon_box__1-CSj",inner:"MenuIcon_inner__Xdf-I",active:"MenuIcon_active__3n9fz"}},27:function(e,n,t){e.exports={breakpointSm:"640px"}},28:function(e,n,t){e.exports={content:"App_content__1Wt3K"}},3:function(e,n,t){e.exports={content:"Navbar_content__37g06",nav:"Navbar_nav__3vB9o",logo:"Navbar_logo__1Jq89",in_scroll:"Navbar_in_scroll__1B5Kw",nav_items:"Navbar_nav_items__LD3wX",nav_item:"Navbar_nav_item__1SBPG",active:"Navbar_active__1g_Ge",nav_icons:"Navbar_nav_icons__3ysMP",nav_icon:"Navbar_nav_icon__2iCZw"}},34:function(e,n,t){},4:function(e,n,t){e.exports={nav:"MobileMenu_nav__2RReT",top:"MobileMenu_top__1K-U-",logo:"MobileMenu_logo__1WhTW",nav_items:"MobileMenu_nav_items__1mIgB",nav_item:"MobileMenu_nav_item__1i_uZ",active:"MobileMenu_active__15_lf",nav_icons:"MobileMenu_nav_icons__1FSoS",nav_icon:"MobileMenu_nav_icon__1THqR",opened:"MobileMenu_opened__HXKms"}},48:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t(17),c=t.n(i),r=(t(34),t(10)),o=t(27),s=t.n(o),l=t(28),_=t.n(l),b=t(5),j=t(6),d=t(8),u=t(9),v=t.n(u),m=t(3),p=t.n(m),O=t(23);function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function f(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}.cls-2{fill:#ffea94;}")),g=a.createElement("g",{id:"Livello_2","data-name":"Livello 2"},a.createElement("g",{id:"Livello_1-2","data-name":"Livello 1"},a.createElement("g",{id:"Light"},a.createElement("rect",{className:"cls-1",x:1.92,y:.19,width:86.19,height:18.77,rx:9.38}),a.createElement("rect",{className:"cls-1",x:1.92,y:44.19,width:86.19,height:18.77,rx:9.38}),a.createElement("rect",{className:"cls-1",x:1.92,y:94.1,width:86.19,height:18.77,rx:9.38}),a.createElement("path",{className:"cls-2",d:"M51.59,0H6.12C2.74,0,0,3,0,6.7v5.75c0,3.7,2.74,6.7,6.12,6.7H51.59C57.86,19.15,63,24.73,63,31.6S57.86,44.05,51.59,44.05H6.12c-3.38,0-6.12,3-6.12,6.7V106.3C0,110,2.74,113,6.12,113h5.25c3.38,0,6.12-3,6.12-6.7V63.2h34.1c15.93,0,28.85-14.15,28.85-31.6S67.52,0,51.59,0Z"}))));function w(e,n){var t=e.title,i=e.titleId,c=f(e,["title","titleId"]);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 88.1 113",ref:n,"aria-labelledby":i},c),h,void 0===t?a.createElement("title",{id:i},"Light"):t?a.createElement("title",{id:i},t):null,g)}var N=a.forwardRef(w),M=(t.p,t(0)),y=[{id:"about",label:"About"},{id:"my-works",label:"My Works"},{id:"contact",label:"Contact"}],E=[{id:"github",icon:O.a,url:"https://github.com/epessina"},{id:"linkedin",icon:O.b,url:"https://www.linkedin.com/in/edoardopessina/"}],L=function(e){return Object(M.jsx)(N,{className:e,onClick:function(){return j.animateScroll.scrollToTop({duration:1e3,smooth:!0})},title:" "})};function k(){var e,n=Object(a.useState)(!1),t=Object(r.a)(n,2),i=t[0],c=t[1],o=function(){return c(window.scrollY>20)};Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[]);var s=v()((e={},Object(b.a)(e,p.a.nav,!0),Object(b.a)(e,p.a.in_scroll,i),e));return Object(M.jsx)("nav",{className:s,children:Object(M.jsxs)("div",{className:p.a.content,children:[L(p.a.logo),Object(M.jsx)("div",{className:p.a.nav_items,children:y.map((function(e){return Object(M.jsx)(j.Link,{activeClass:p.a.active,className:p.a.nav_item,smooth:!0,spy:!0,to:e.id,children:e.label},e.id)}))}),Object(M.jsx)("div",{className:p.a.nav_icons,children:E.map((function(e){return Object(M.jsx)("div",{className:p.a.nav_icon,onClick:function(){return window.open(e.url,"_blank")},children:Object(M.jsx)(d.a,{icon:e.icon})},e.id)}))})]})})}var S=t(29),I=t(12),C=t.n(I),H=t(7),W=t.n(H);function T(){return Object(M.jsx)("div",{className:W.a.container,children:Object(M.jsx)("div",{className:W.a.content,children:Object(M.jsxs)("div",{className:W.a.presentation_container,children:[Object(M.jsxs)("p",{className:W.a.text_primary,children:[Object(M.jsx)("span",{children:"I'm "}),Object(M.jsx)("span",{className:W.a.name,children:"Edoardo Pessina"})]}),Object(M.jsx)("p",{className:W.a.occupation,children:"fullstack developer"})]})})})}function z(){return Object(M.jsxs)("header",{className:C.a.header,children:[Object(M.jsx)("div",{className:C.a.bg_container,children:Object(M.jsxs)("ul",{className:C.a.bg_shapes,children:[Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{}),Object(M.jsx)("li",{})]})}),Object(M.jsx)(T,{}),Object(M.jsx)(j.Link,{className:C.a.arrow,duration:500,smooth:!0,to:"about",children:Object(M.jsx)(d.a,{icon:S.a,size:"2x"})})]})}var B=t(4),P=t.n(B),K=t(13),R=t.n(K);function Z(e){var n,t=e.isMobileMenuOpen,a=e.setIsMobileMenuOpen,i=v()((n={},Object(b.a)(n,R.a.container,!0),Object(b.a)(n,R.a.active,t),n));return Object(M.jsx)("div",{className:i,onClick:function(){return a(!t)},children:Object(M.jsx)("div",{className:R.a.box,children:Object(M.jsx)("div",{className:R.a.inner})})})}function J(){var e,n=Object(a.useState)(!1),t=Object(r.a)(n,2),i=t[0],c=t[1],o=v()((e={},Object(b.a)(e,P.a.nav,!0),Object(b.a)(e,P.a.opened,i),e));return Object(M.jsxs)("nav",{className:o,children:[Object(M.jsxs)("div",{className:P.a.top,children:[L(P.a.logo),Object(M.jsx)(Z,{isMobileMenuOpen:i,setIsMobileMenuOpen:c})]}),Object(M.jsx)("div",{className:P.a.nav_items,children:y.map((function(e){return Object(M.jsx)(j.Link,{activeClass:P.a.active,className:P.a.nav_item,delay:400,onClick:function(){return c(!1)},smooth:!0,spy:!0,to:e.id,children:e.label},e.id)}))}),Object(M.jsx)("div",{className:P.a.nav_icons,children:E.map((function(e){return Object(M.jsx)("div",{className:P.a.nav_icon,onClick:function(){return window.open(e.url,"_blank")},children:Object(M.jsx)(d.a,{icon:e.icon})},e.id)}))})]})}function X(){var e=Object(a.useState)(window.innerWidth),n=Object(r.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){var e=function(){return i(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(M.jsxs)("div",{className:_.a.content,children:[t>s.a.breakpointSm.slice(0,-2)?Object(M.jsx)(k,{}):Object(M.jsx)(J,{}),Object(M.jsx)(z,{})]})}c.a.render(Object(M.jsx)(X,{}),document.getElementById("root"))},7:function(e,n,t){e.exports={content:"Hero_content__7R5d5",container:"Hero_container__1609r",presentation_container:"Hero_presentation_container__3IDsC",text_primary:"Hero_text_primary__1JjAY",name:"Hero_name__ITgSs",occupation:"Hero_occupation__3WyW7"}}},[[48,1,2]]]);
//# sourceMappingURL=main.b873f217.chunk.js.map