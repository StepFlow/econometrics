(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about",lab:"lab"}[t]||t)+"."+{about:"8aee8adf",lab:"cc66a911"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={lab:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about",lab:"lab"}[t]||t)+"."+{about:"31d6cfe0",lab:"8da4bf25"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"199c":function(t,e){},"23be":function(t,e,a){"use strict";var n=a("199c"),r=a.n(n);e["default"]=r.a},"3dfd":function(t,e,a){"use strict";var n=a("7ea2"),r=a("23be"),s=(a("5c0b"),a("2877")),i=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("3dfd"),s=a("8c4f"),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{staticClass:"vue-logo",attrs:{alt:"Vue logo",src:a("cf05")}})])}],c={name:"home",components:{}},u=c,l=(a("cccb"),a("2877")),d=Object(l["a"])(u,i,o,!1,null,null,null),f=d.exports;n["a"].use(s["a"]);var b=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/lab1",name:"lab1",component:function(){return a.e("lab").then(a.bind(null,"5967"))}}]}),p=a("7b93"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("nav",{staticClass:"navbar is-transparent",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand is-hidden-desktop"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isMenuOpen},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:t.toggleMenu}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isMenuOpen},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n            Главная\n          ")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("\n              Работы\n            ")]),a("div",{staticClass:"navbar-dropdown is-boxed"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/lab1"}},[t._v("Лабораторная работа №1")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/lab1"}},[t._v("Лабораторная работа №2")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/lab1"}},[t._v("Лабораторная работа №3")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v("\n                Какой-то пункт\n              ")])],1)])],1),t._m(1),t._m(2)])])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-item",attrs:{href:"https://www.dvfu.ru/",target:"_blank"}},[n("img",{staticClass:"header__logo header__logo--mobile",attrs:{src:a("c3c9")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand is-hidden-touch"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://www.dvfu.ru/",target:"_blank"}},[n("img",{attrs:{src:a("c3c9")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button",attrs:{target:"_blank",href:"https://github.com/StepFlow/econometrics"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-github"})]),a("span",[t._v("\n                    GitHub\n                  ")])])])])])])}],m={data:function(){return{isMenuOpen:!1}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen}}},g=m,_=(a("60fe"),Object(l["a"])(g,v,h,!1,null,null,null)),C=_.exports;a("455d");n["a"].use(p["default"]),n["a"].config.productionTip=!1,n["a"].component("v-header",C),window.chartColors={red:"rgb(255, 99, 132)",orange:"rgb(255, 159, 64)",yellow:"rgb(255, 205, 86)",green:"rgb(75, 192, 192)",blue:"rgb(8, 105, 174)",purple:"rgb(153, 102, 255)",grey:"rgb(201, 203, 207)"},new n["a"]({router:b,render:function(t){return t(r["default"])},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"),t.setAttribute("async",!0),document.body.appendChild(t),t.onload=function(){window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub])}}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},"60fe":function(t,e,a){"use strict";var n=a("8d48"),r=a.n(n);r.a},"7ea2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-header"),a("router-view")],1)},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},"8d48":function(t,e,a){},c3c9:function(t,e,a){t.exports=a.p+"img/fefu-logo.adffdf83.svg"},cccb:function(t,e,a){"use strict";var n=a("d563"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d563:function(t,e,a){}});
//# sourceMappingURL=app.0b5cc418.js.map