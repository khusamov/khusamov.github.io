"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[8298],{3922:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});const n="layout_qZTX",a="topics_Gvim",r="languages_MlxW";var c=l(7294);const m=e=>{const t="khusamov.github.io";return e===t?"https://github.khusamov.ru/":`https://${t}/${e}/`},u=e=>{let{item:{name:t,description:l,topics:n,language:a,html_url:r,size:u,has_pages:s},index:i}=e;return c.createElement("tr",null,c.createElement("td",null,i+1),c.createElement("td",null,c.createElement("a",{target:"_blank",href:r},t)),c.createElement("td",null,(n??[]).join(", ")),c.createElement("td",null,a),c.createElement("td",null,u),c.createElement("td",null,l),c.createElement("td",null,s&&c.createElement("a",{target:"_blank",href:m(t)},"Pages")))},s=e=>{let{items:t}=e;return c.createElement("tbody",null,t.map(((e,t)=>c.createElement(u,{key:t,item:e,index:t}))))},i=()=>c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"\u2116"),c.createElement("th",null,"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"),c.createElement("th",null,"\u0422\u0435\u0433\u0438"),c.createElement("th",null,"\u042f\u0437\u044b\u043a"),c.createElement("th",null,"\u0420\u0430\u0437\u043c\u0435\u0440, \u043a\u0431"),c.createElement("th",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.createElement("th",null,"GitHub Pages"))),o=e=>{let{items:t}=e;return c.createElement("table",null,c.createElement(i,null),c.createElement(s,{items:t}))};var E=l(2730);const h=(e,t,l)=>l.indexOf(e)===t,p=e=>null!==e,d=e=>{let{publicReposCount:t}=e;const{loading:l,error:n,data:m=[]}=(0,E.ib)(`https://api.github.com/users/khusamov/repos?per_page=${t}`,{},[]);const u=m.map((e=>e.topics??[])).reduce(((e,t)=>e.concat(t)),[]).filter(h),s=m.map((e=>e.language)).filter(p).filter(h);return c.createElement(c.Fragment,null,n&&"\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443: "+n.message,l&&"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432...",!l&&c.createElement(c.Fragment,null,c.createElement("div",{className:a},u.join(", ")),c.createElement("div",{className:r},s.join(", ")),c.createElement(o,{items:m})))};var g=l(7961);function b(){const{loading:e,error:t,data:l}=(0,E.ib)("https://api.github.com/users/khusamov",{},[]),a=l?l.public_repos:0;return l&&c.createElement(g.Z,null,c.createElement("div",{className:n},c.createElement("h1",null,"\u041c\u043e\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 (",a,")"),e&&"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435...",t&&"\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443: "+t.message,!e&&c.createElement(d,{publicReposCount:a})))}}}]);