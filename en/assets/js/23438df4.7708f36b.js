"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[6664],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4161:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const l={},i="\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",o={unversionedId:"examples/serialize-and-deserialize",id:"examples/serialize-and-deserialize",title:"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",description:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:",source:"@site/docs/solid/examples/serialize-and-deserialize.md",sourceDirName:"examples",slug:"/examples/serialize-and-deserialize",permalink:"/en/solid/examples/serialize-and-deserialize",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1654252565,formattedLastUpdatedAt:"Jun 3, 2022",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438",permalink:"/en/solid/examples/calculate-and-save"},next:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439",permalink:"/en/solid/exceptions"}},s={},p=[],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0438-\u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:\n",(0,a.kt)("a",{parentName:"p",href:"https://habr.com/ru/post/454290/"},"https://habr.com/ru/post/454290/")),(0,a.kt)("p",null,'\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0443\u0436\u043d\u043e\n\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0442\u0438\u043f\u0430 "User" \u0432 \u0441\u0442\u0440\u043e\u043a\u0443.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"User{\n    String Name;\n    Int Age;\n}\n")),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0443\u043c\u0430\u0442\u044c, \u0447\u0442\u043e \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0443\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0430\u0445:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"UserDeserializer{\n    String deserialize(User){...}\n}\nUserSerializer{\n    User serialize(String){...}\n}\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043d\u0438\u0445 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u043e\u0434\u0438\u043d \u043f\u043e\u0432\u043e\u0434 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,'\u041d\u043e \u043f\u043e\u0432\u043e\u0434 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0443 \u043d\u0438\u0445 \u043e\u0431\u0449\u0438\u0439 \u2014 "\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445".\n\u0418 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0443\u0442 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\n\u0432\u043c\u0435\u0441\u0442\u0435.'),(0,a.kt)("p",null,"\u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0438\u0445 \u0432 \u043e\u0434\u0438\u043d \u043a\u043b\u0430\u0441\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"UserSerializer{\n    String deserialize(User){...}\n    User serialize(String){...}\n}\n")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0438\u0437\u0431\u0430\u0432\u0438\u043b\u044f\u0435\u0442 \u043d\u0430\u0441 \u043e\u0442 \u0438\u0437\u043b\u0438\u0448\u043d\u0435\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u043c\u043d\u0438\u0442\u044c,\n\u0447\u0442\u043e \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430, \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0438 \u043e \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0435."))}u.isMDXComponent=!0}}]);