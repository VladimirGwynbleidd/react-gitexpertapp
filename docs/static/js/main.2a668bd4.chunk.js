(this["webpackJsonpgit-expert-app"]=this["webpackJsonpgit-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=(n(15),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))}),s=n(2),o=n(9),u=n(0),j=function(t){var e=t.setcategories,n=Object(a.useState)("Hola Mundo"),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log(e),r.trim().length>2&&(e((function(t){return[r].concat(Object(o.a)(t))})),i(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){console.log(t.target.value),i(t.target.value)}})})},l=n(10),d=n(6),b=n.n(d),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=UyinGr8iNie4YrjLeyVLtcUlb3NRTax0"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){console.log(t),r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),r&&Object(u.jsx)("p",{children:"loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(g,Object(l.a)({},t),t.id)}))})]})},O=function(){var t=Object(a.useState)(["One Punch"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{setcategories:c}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),i()}},[[18,1,2]]]);
//# sourceMappingURL=main.2a668bd4.chunk.js.map