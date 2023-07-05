"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[4621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438",p={unversionedId:"examples/calculate-and-save",id:"examples/calculate-and-save",title:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438",description:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:",source:"@site/docs/solid/examples/calculate-and-save.md",sourceDirName:"examples",slug:"/examples/calculate-and-save",permalink:"/solid/examples/calculate-and-save",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1688576789,formattedLastUpdatedAt:"5 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0438",permalink:"/solid/examples/book-and-invoices"},next:{title:"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/solid/examples/serialize-and-deserialize"}},c={},i=[{value:"\u041f\u043b\u044e\u0441\u044b:",id:"\u043f\u043b\u044e\u0441\u044b",level:2}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0439-\u0438-\u0441\u043e\u0445\u0440\u0430\u043d\u0438"},"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438"),(0,a.kt)("p",null,"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:\n",(0,a.kt)("a",{parentName:"p",href:"https://habr.com/ru/post/454290/"},"https://habr.com/ru/post/454290/")),(0,a.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0433\u043e\u0434\u043e\u0432\u0443\u044e \u0432\u044b\u0440\u0443\u0447\u043a\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0435 \u0432 \u0444\u0430\u0439\u043b C:\\results.txt."),(0,a.kt)("p",null,"\u0411\u044b\u0441\u0442\u0440\u043e \u0440\u0435\u0448\u0430\u0435\u043c \u044d\u0442\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"void SaveGain(Company company){\n//\u041a\u043e\u0434 \u043f\u043e \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0443 \u0432\u044b\u0440\u0443\u0447\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438\n//\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432\n}\n")),(0,a.kt)("p",null,'\u0423\u0436\u0435 \u0438\u0437 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0434\u0432\u0435 \u043f\u043e\u0434\u0437\u0430\u0434\u0430\u0447\u0438 -"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0432\u044b\u0440\u0443\u0447\u043a\u0443" \u0438 "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u044b\u0440\u0443\u0447\u043a\u0443".\n\u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043d\u0438\u0445 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u043e\u0432\u043e\u0434\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u2014 "\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0435 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430"\n\u0438 "\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f". \u042d\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0442\u0441\u044f.\n\u0422\u0430\u043a \u0436\u0435, \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u043e\u0434\u043d\u043e\u0441\u043b\u043e\u0436\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441 \u2014 "\u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 SaveGain?".\n\u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0418 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u044b\u0440\u0443\u0447\u043a\u0443 \u0418 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b.'),(0,a.kt)("p",null,"\u041f\u043e\u0442\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430 \u0434\u0432\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"Gain CalcGain(Company company){..}\nvoid SaveGain(Gain gain){..}\n")),(0,a.kt)("h2",{id:"\u043f\u043b\u044e\u0441\u044b"},"\u041f\u043b\u044e\u0441\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c CalcGain"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0449\u0435 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0433\u0438 \u0438 \u0432\u043d\u043e\u0441\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u043e\u0432\u044b\u0441\u0438\u043b\u0430\u0441\u044c \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430"),(0,a.kt)("li",{parentName:"ul"},"\u0443\u043c\u0435\u043d\u044c\u0448\u0438\u043b\u0441\u044f \u0440\u0438\u0441\u043a \u043e\u0448\u0438\u0431\u043a\u0438 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0438\u0437-\u0437\u0430 \u0438\u0445 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f")))}u.isMDXComponent=!0}}]);