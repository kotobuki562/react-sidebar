(this["webpackJsonpreact-sidebar"]=this["webpackJsonpreact-sidebar"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),r=c(5),a=c.n(r),o=(c(11),c(4)),j=i.a.createContext(),l=function(e){var t=e.children,c=Object(s.useState)(!1),i=Object(o.a)(c,2),r=i[0],a=i[1],l=Object(s.useState)(!1),d=Object(o.a)(l,2),b=d[0],u=d[1];return Object(n.jsx)(j.Provider,{value:{isSidebarOpen:r,isModalOpen:b,openModal:function(){u(!0)},closeModal:function(){u(!1)},openSidebar:function(){a(!0)},closeSidebar:function(){a(!1)}},children:t})},d=function(){return Object(s.useContext)(j)},b=c(2),u=function(){var e=d(),t=e.isModalOpen,c=e.closeModal;return Object(n.jsx)("div",{className:"".concat(t?"modal-overlay show-modal":"modal-overlay"),children:Object(n.jsxs)("div",{className:"modal-container",children:[Object(n.jsx)("h3",{children:"modal content"}),Object(n.jsx)("button",{className:"close-modal-btn",onClick:c,children:Object(n.jsx)(b.i,{})})]})})},O=c.p+"static/media/logo.f13078c1.svg",x=[{id:1,url:"/",text:"home",icon:Object(n.jsx)(b.f,{})},{id:2,url:"/team",text:"team",icon:Object(n.jsx)(b.k,{})},{id:3,url:"/projects",text:"projects",icon:Object(n.jsx)(b.e,{})},{id:4,url:"/calendar",text:"calendar",icon:Object(n.jsx)(b.c,{})},{id:5,url:"/documents",text:"documents",icon:Object(n.jsx)(b.l,{})}],h=[{id:1,url:"https://www.twitter.com",icon:Object(n.jsx)(b.d,{})},{id:2,url:"https://www.twitter.com",icon:Object(n.jsx)(b.j,{})},{id:3,url:"https://www.twitter.com",icon:Object(n.jsx)(b.g,{})},{id:4,url:"https://www.twitter.com",icon:Object(n.jsx)(b.b,{})},{id:5,url:"https://www.twitter.com",icon:Object(n.jsx)(b.h,{})}],m=function(){var e=d(),t=e.isSidebarOpen,c=e.closeSidebar;return Object(n.jsxs)("aside",{className:"".concat(t?"sidebar show-sidebar":"sidebar"),children:[Object(n.jsxs)("div",{className:"sidebar-header",children:[Object(n.jsx)("img",{src:O,alt:"coding addict",className:"logo"}),Object(n.jsx)("button",{className:"close-btn",onClick:c,children:Object(n.jsx)(b.i,{})})]}),Object(n.jsx)("ul",{className:"links",children:x.map((function(e){var t=e.id,c=e.url,s=e.text,i=e.icon;return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:c,children:[i,s]})},t)}))}),Object(n.jsx)("ul",{className:"social-icons",children:h.map((function(e){var t=e.id,c=e.url,s=e.icon;return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:c,children:s})},t)}))})]})},w=function(){var e=d(),t=e.openSidebar,c=e.openModal;return Object(n.jsxs)("main",{children:[Object(n.jsx)("button",{onClick:t,className:"sidebar-toggle",children:Object(n.jsx)(b.a,{})}),Object(n.jsx)("button",{onClick:c,className:"btn",children:"show modal"})]})};var p=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{}),Object(n.jsx)(u,{}),Object(n.jsx)(m,{})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l,{children:Object(n.jsx)(p,{})})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.13447759.chunk.js.map