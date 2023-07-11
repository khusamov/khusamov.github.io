"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[1572],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:10},o="\u0418\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f",c={unversionedId:"basic-design-principles/encapsulate-what-is-changing",id:"basic-design-principles/encapsulate-what-is-changing",title:"\u0418\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f",description:'\u041a\u043e\u043d\u0441\u043f\u0435\u043a\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043d\u0438\u0433\u0438 "\u041f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f", \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0428\u0432\u0435\u0446.',source:"@site/docs/solid/20-basic-design-principles/encapsulate-what-is-changing.md",sourceDirName:"20-basic-design-principles",slug:"/basic-design-principles/encapsulate-what-is-changing",permalink:"/solid/basic-design-principles/encapsulate-what-is-changing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"solidSidebar",previous:{title:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/solid/basic-design-principles/"},next:{title:"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e",permalink:"/solid/basic-design-principles/prefer-composition-to-inheritance"}},s={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438-\u043d\u0430-\u0443\u0440\u043e\u0432\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435-\u0442\u043e-\u0447\u0442\u043e-\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f"},"\u0418\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f"),(0,a.kt)("p",null,'\u041a\u043e\u043d\u0441\u043f\u0435\u043a\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043d\u0438\u0433\u0438 "\u041f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f", \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0428\u0432\u0435\u0446.'),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0447\u0430\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0447\u0430\u0441\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f."),(0,a.kt)("p",null,"\u0426\u0435\u043b\u044c\u044e \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u043c \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043a\u043e\u0434\u0430 \u043e\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0439 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438-\u043d\u0430-\u0443\u0440\u043e\u0432\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u044f\u0446\u0438\u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0437\u0430\u043a\u0430\u0437\u0430. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442 \u0432 \u043d\u0435\u0439 \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438 \u043a\u043e\u0434\u0430, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u0443\u044e \u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c\u0443\u044e.\n\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0446\u0435\u043d\u044b \u0437\u0430 \u0435\u0434\u0438\u043d\u0438\u0446\u0443 \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f.\n\u0410 \u0432\u043e\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u043d\u0430\u043b\u043e\u0433\u0430 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0444\u0430\u043a\u0442\u043e\u0440\u043e\u0432,\n\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f (\u0441\u0442\u0440\u0430\u043d\u0430, \u0433\u043e\u0440\u043e\u0434, \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0438 \u0442.\u043f.)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0431\u0449\u0443\u044e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430.\n * @param order\n */\nfunction getOrderTotal(order) {\n    const total = 0\n    \n    for (const item of order.items) {\n        total += item.price * item.quantity\n    }\n\n    if (order.country === 'Russia') {\n        total += total * 0.04\n    }\n    if (order.country === 'Ukraine') {\n        total += total * 0.11\n    }\n\n    return total\n}\n")),(0,a.kt)("p",null,"\u0422\u0443 \u0447\u0430\u0441\u0442\u044c \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u0438\u0442\u044c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0431\u0449\u0443\u044e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0430.\n * @param order\n * @returns {number}\n */\nfunction getOrderTotal(order) {\n    const total = 0\n    \n    for (const item of order.items) {\n        total += item.price * item.quantity\n    }\n\n    total += total * getTaxAmount(order.country)\n\n    return total\n}\n\n/**\n * \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 \u043d\u0430\u043b\u043e\u0433\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0442\u0440\u0430\u043d\u044b.\n * @param country\n * @returns {number}\n */\nfunction getTaxAmount(country) {\n    if (order.country === 'Russia') {\n        return 0.04\n    }\n\n    if (order.country === 'Ukraine') {\n        return 0.11\n    }\n\n    return 0\n}\n")))}u.isMDXComponent=!0}}]);