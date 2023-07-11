"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},l="\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",p={unversionedId:"principles/open-closed-principle",id:"principles/open-closed-principle",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",description:"Open-Closed Principle; OCP",source:"@site/docs/solid/10-principles/20-open-closed-principle.md",sourceDirName:"10-principles",slug:"/principles/open-closed-principle",permalink:"/solid/principles/open-closed-principle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",sidebarPosition:20,frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",permalink:"/solid/principles/single-responsibility-principle"},next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",permalink:"/solid/principles/liskov-substitution-principle"}},a={},c=[{value:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438",id:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"),(0,i.kt)("p",null,"Open-Closed Principle; OCP"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("p",null,"\u0418\u043d\u044b\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0431\u0435\u0437 \u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,'\u0427\u0442\u043e \u0438\u043c\u0435\u0435\u0442\u0441\u044f \u0432\u0432\u0438\u0434\u0443 \u043f\u043e\u0434 "\u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"? \u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e.\n\u0411\u043e\u043b\u044c\u0448\u0435 \u0434\u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u043d\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442. \u0418\u0445 \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c (\u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u0430 \u0434\u043e\u043f\u0443\u0449\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430). \u041d\u043e\u0432\u044b\u0435 \u0444\u0438\u0447\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\n\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u043b\u044c\u0437\u044f.'),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4146998/159168335-ffe28b5d-b3a5-4da3-8ffa-4dcf7c3011d6.png",alt:"image"})),(0,i.kt)("p",null,"\u0421\u0430\u043c\u043e\u0435 \u0432\u0430\u0436\u043d\u043e\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c, \u2014 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0442\u0447\u0435\u0442\u0430 \u0432\u043e\u0432\u043b\u0435\u0447\u0435\u043d\u044b\n\u0434\u0432\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u0447\u0435\u0442\u0430 "),(0,i.kt)("li",{parentName:"ol"},"\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0444\u043e\u0440\u043c\u0435 \u0432\u0435\u0431-\u043e\u0442\u0447\u0435\u0442\u0430 \u0438\u043b\u0438 \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0447\u0435\u0442\u0430.")),(0,i.kt)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0432 \u0442\u0430\u043a\u043e\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435, \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u0442\u0430\u043a,\n\u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 \u043d\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0434\u0440\u0443\u0433\u043e\u0439.\n\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u043d\u043e\u0432\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043e\u0442\u043c\u0435\u043d\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),(0,i.kt)("h2",{id:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u041c\u0430\u0440\u0442\u0438\u043d \u0420. \u0427\u0438\u0441\u0442\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430. \u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f."))}u.isMDXComponent=!0}}]);