"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",hide_title:!0,title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},l=void 0,o={unversionedId:"intro",id:"intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"intro",source:"@site/docs/solid/00-intro.md",sourceDirName:".",slug:"/intro",permalink:"/en/solid/intro",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1688815094,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",hide_title:!0,title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},sidebar:"solidSidebar",next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",permalink:"/en/solid/single-responsibility-principle"}},p={},c=[{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2},{value:"\u041a\u0443\u0440\u0441\u044b",id:"\u043a\u0443\u0440\u0441\u044b",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"intro",src:n(4553).Z,width:"800",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SRP: Single Responsibility Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438)  "),(0,i.kt)("li",{parentName:"ul"},"OCP: Open-Closed Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438)  "),(0,i.kt)("li",{parentName:"ul"},"LSP: Liskov Substitution Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432)  "),(0,i.kt)("li",{parentName:"ul"},"ISP: Interface Segregation Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430)  "),(0,i.kt)("li",{parentName:"ul"},"DIP: Dependency Inversion Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439)  ")),(0,i.kt)("admonition",{title:"\u0423\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u0417\u0434\u0435\u0441\u044c \u0438 \u0434\u0430\u043b\u0435\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441 \u0438\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f.")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b."),(0,i.kt)("li",{parentName:"ol"},"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u0430 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 (actor) \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430."),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438\u0447\u0438\u043d\u044b (\u0430\u043a\u0442\u043e\u0440\u044b), \u044d\u0442\u043e \u043f\u043e \u0441\u0443\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430.")),(0,i.kt)("admonition",{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0435\u0440\u0430\u043c!",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e, \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u043e\u043c\u0430\u0435\u0442\u0441\u044f,\n\u0430 \u0432\u043e\u0442 \u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u0435\u044e\u0449\u0435\u0435\u0441\u044f \u0441\u043b\u043e\u0432\u043e (\u043f\u043e \u0441\u0443\u0442\u0438 \u0435\u0433\u043e \u0441\u043c\u044b\u0441\u043b),\n\u0442\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0432\u0435\u0441\u044c\u043c\u0430 \u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u043c.\n\u0412 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u0445 \u0441\u043b\u043e\u0432\u0430 \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0418\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c!")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u043c\u043e\u0434\u0443\u043b\u044f."),(0,i.kt)("li",{parentName:"ol"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u044d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 (\u043d\u043e \u043d\u0435 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c, \u0430 \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u0438\u043b\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443).")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041a\u0432\u0430\u0434\u0440\u0430\u0442 \u044d\u0442\u043e \u043d\u0435 \u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430. "),(0,i.kt)("li",{parentName:"ol"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u0440\u0435\u0434\u043a\u0430.   "),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u043c (enum, switch, catch, if/else \u0438 \u0442.\u043f.)."),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0438 \u0447\u0442\u043e \u043e\u043d\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0435.")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u043c\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441")),(0,i.kt)("admonition",{title:"\u041f\u0440\u0438\u043c\u0435\u0440",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0438, \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c\n\u043c\u0435\u0442\u043e\u0434\u044b \u043e\u043f\u043b\u0430\u0442\u044b (\u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f). \u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0432\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u041f\u043e\u0447\u0430\u0441\u043e\u0432\u0430\u044f \u043e\u043f\u043b\u0430\u0442\u0430 \u0438 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0430.\n\u0418 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u044b \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430 (\u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0443) \u0438 \u041f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430 (\u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043e\u0431\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430).")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041a\u043b\u0430\u0441\u0441\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0438\u043b\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."),(0,i.kt)("li",{parentName:"ol"},"\u041a\u043b\u0430\u0441\u0441 \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430.")),(0,i.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=d9RJqf2o_Sw"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043e\u0442 \u0421\u0435\u0440\u0433\u0435\u044f \u041d\u0435\u043c\u0447\u0438\u043d\u0441\u043a\u043e\u0433\u043e")),(0,i.kt)("h2",{id:"\u043a\u0443\u0440\u0441\u044b"},"\u041a\u0443\u0440\u0441\u044b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/solid-connascence/"},"https://www.udemy.com/course/solid-connascence/"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://futurio.ru/"},"https://futurio.ru/"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://proglib.academy/"},"https://proglib.academy/")))}s.isMDXComponent=!0},4553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/intro-b8a5fa0b4d4f645224c466b63b2b4f99.png"}}]);