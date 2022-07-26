"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[9594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},s="\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",o={unversionedId:"liskov-substitution-principle",id:"liskov-substitution-principle",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",description:"Liskov Substitution Principle; LSP",source:"@site/docs/solid/30-liskov-substitution-principle.md",sourceDirName:".",slug:"/liskov-substitution-principle",permalink:"/solid/liskov-substitution-principle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1647807826,formattedLastUpdatedAt:"Mar 20, 2022",sidebarPosition:30,frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",permalink:"/solid/open-closed-principle"},next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432",permalink:"/solid/interface-segregation-principle"}},c={},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u043a\u043e\u0434\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e-\u043a\u043e\u0434\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u043e\u0445\u043e\u0433\u043e \u043a\u043e\u0434\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u043e\u0445\u043e\u0433\u043e-\u043a\u043e\u0434\u0430",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432"),(0,a.kt)("p",null,"Liskov Substitution Principle; LSP"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4146998/159174747-3a8e4535-21cc-4930-98f2-356e17a91f5a.png",alt:"image"})),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e-\u043a\u043e\u0434\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e \u043a\u043e\u0434\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ILicense {\n    calcFee(): number\n}\n\nclass PersonalLicense implements ILicense {\n    calcFee(): number {}\n}\n\nclass BusinessLicense implements ILicense {\n    calcFee(): number {}\n}\n\nclass Billing {\n    constructor(license: ILicense) {}\n}\n")),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u0438\u0437\u0430\u0439\u043d \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f Billing \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0442\u0438\u043f\u0430.\n\u041e\u0431\u0430 \u043f\u043e\u0434\u0442\u0438\u043f\u0430 \u043c\u043e\u0433\u0443\u0442 \u0441\u043b\u0443\u0436\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u043d\u043e\u0439 \u0434\u043b\u044f \u0442\u0438\u043f\u0430 License."),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u043e\u0445\u043e\u0433\u043e-\u043a\u043e\u0434\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u043e\u0445\u043e\u0433\u043e \u043a\u043e\u0434\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class Bird {\n    // ...\n    getSpeed(): number {\n        switch (type) {\n            case EUROPEAN:\n                return getBaseSpeed();\n            case AFRICAN:\n                return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;\n            case NORWEGIAN_BLUE:\n                return (isNailed) ? 0 : getBaseSpeed(voltage);\n        }\n        throw new Error("Should be unreachable");\n    }\n}\n')),(0,a.kt)("p",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"abstract class Bird {\n    // ...\n    abstract getSpeed(): number;\n}\n\nclass European extends Bird {\n    getSpeed(): number {\n        return getBaseSpeed();\n    }\n}\nclass African extends Bird {\n    getSpeed(): number {\n        return getBaseSpeed() - getLoadFactor() * numberOfCoconuts;\n    }\n}\nclass NorwegianBlue extends Bird {\n    getSpeed(): number {\n        return (isNailed) ? 0 : getBaseSpeed(voltage);\n    }\n}\n\n// Somewhere in client code\nlet speed = bird.getSpeed();\n")),(0,a.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NqvwYcjrwdw"},"\u0412\u0438\u0434\u0435\u043e \u043e\u0442 \u0421\u0435\u0440\u0433\u0435\u044f \u041d\u0435\u043c\u0447\u0438\u043d\u0441\u043a\u043e\u0433\u043e"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://metanit.com/sharp/patterns/5.3.php"},"\u041c\u0435\u0442\u0430\u043d\u0438\u0442: \u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u041b\u0438\u0441\u043a\u043e\u0432")))}u.isMDXComponent=!0}}]);