"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[1814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),A=o(r),y=a,g=A["".concat(c,".").concat(y)]||A[y]||u[y]||s;return r?n.createElement(g,l(l({ref:t},i),{},{components:r})):n.createElement(g,l({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=A;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<s;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},6396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const s={},l="\u0420\u0430\u0437\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b",p={unversionedId:"typescript/articles/MicroPatterns",id:"typescript/articles/MicroPatterns",title:"\u0420\u0430\u0437\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b",description:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",source:"@site/docs/tutorial/typescript/articles/MicroPatterns.md",sourceDirName:"typescript/articles",slug:"/typescript/articles/MicroPatterns",permalink:"/en/tutorial/typescript/articles/MicroPatterns",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u0428\u0430\u0431\u043b\u043e\u043d \u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0432 TypeScript",permalink:"/en/tutorial/typescript/articles/FactoryPattern"},next:{title:"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0420\u0435\u0430\u043a\u0442\u0430",permalink:"/en/tutorial/typescript/articles/ReactPatterns"}},c={},o=[{value:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",id:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",level:2},{value:"\u0422\u0438\u043f <code>\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043b\u0430\u0441\u0441</code>",id:"\u0442\u0438\u043f-\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043a\u043b\u0430\u0441\u0441",level:2},{value:"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 \u0435\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043b\u044f\u0440\u043e\u0432",id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u043a\u043b\u0430\u0441\u0441\u0443-\u0438\u0437-\u043c\u0435\u0442\u043e\u0434\u0430-\u0435\u0433\u043e-\u044d\u043a\u0437\u0435\u043c\u043b\u044f\u0440\u043e\u0432",level:2},{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 this \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-this-\u0432-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445",level:2},{value:"\u0422\u0438\u043f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430",id:"\u0442\u0438\u043f-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430-\u043c\u0430\u0441\u0441\u0438\u0432\u0430",level:2},{value:"\u041a\u043b\u044e\u0447 \u043a\u043b\u0430\u0441\u0441\u0430 \u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",id:"\u043a\u043b\u044e\u0447-\u043a\u043b\u0430\u0441\u0441\u0430-\u0438\u043b\u0438-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",level:2}],i={toc:o};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0440\u0430\u0437\u043d\u044b\u0435-\u0448\u0430\u0431\u043b\u043e\u043d\u044b"},"\u0420\u0430\u0437\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b"),(0,a.kt)("h2",{id:"\u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"},"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type TConstructor<T> = new (...args: any[]) => T;\n")),(0,a.kt)("p",null,"\u0415\u0449\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IConstructor<T> extends Function {\n    new (...args: any[]): T;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics"},"https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics")),(0,a.kt)("h2",{id:"\u0442\u0438\u043f-\u0441\u0441\u044b\u043b\u043a\u0430-\u043d\u0430-\u043a\u043b\u0430\u0441\u0441"},"\u0422\u0438\u043f ",(0,a.kt)("inlineCode",{parentName:"h2"},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u043b\u0430\u0441\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Class1 { }\nlet Cls: typeof Class1;\nCls = Class1;\n")),(0,a.kt)("h2",{id:"\u0434\u043e\u0441\u0442\u0443\u043f-\u043a-\u043a\u043b\u0430\u0441\u0441\u0443-\u0438\u0437-\u043c\u0435\u0442\u043e\u0434\u0430-\u0435\u0433\u043e-\u044d\u043a\u0437\u0435\u043c\u043b\u044f\u0440\u043e\u0432"},"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0441\u0443 \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430 \u0435\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043b\u044f\u0440\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Class1 {\n    static method1() {}\n    constructor() {\n        (this.constructor as typeof Class1).method1();\n    }\n}\n")),(0,a.kt)("h2",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-this-\u0432-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 this \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyFunction = (this: number, a: number) => void;\n\nconst func1: MyFunction = function(a: number) {\n    let b = this; // number\n}\n")),(0,a.kt)("h2",{id:"\u0442\u0438\u043f-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430-\u043c\u0430\u0441\u0441\u0438\u0432\u0430"},"\u0422\u0438\u043f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type TArray1 = (string  |number)[]\ntype TArrayElementType<A extends Array<any>> = NonNullable<ReturnType<A['pop']>>;\nlet c:  TArrayElementType<TArray1>; // c typeof (string  |number)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.typescriptlang.org/play/index.html?ssl=6&ssc=36&pln=1&pc=1#code/FAFwngDgpgBAKgQQE5IIZgIwwLwwBQDOISAlgHYDmAPmQK4C2ARlEgJQDaAusKJLIinQBRADZR6UMiDh8APAhhQAHiEkATAjGRows1GTAA+QzhgA5APZkztESNSMxsgEpQQtJGRnR57AOQQFhB+nMYA3DxiIDAAxgBcMPDawmISUt5QsgI6GIZhQA"},"\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u0446\u0430")),(0,a.kt)("h2",{id:"\u043a\u043b\u044e\u0447-\u043a\u043b\u0430\u0441\u0441\u0430-\u0438\u043b\u0438-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"},"\u041a\u043b\u044e\u0447 \u043a\u043b\u0430\u0441\u0441\u0430 \u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"P extends keyof T\n")),(0,a.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c P \u043a\u043b\u044e\u0447 \u043a\u043b\u0430\u0441\u0441\u0430 T.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play/index.html?ssl=13&ssc=19&pln=13&pc=36#code/C4TwDgpgBAysCuATCA7YUC8UDeAoKUKAhgLYQBcUAzsAE4CWKA5gNz5RFMWHwkBGEWmwIALIlRgBjIrUp8A9vIA2EIijYBfNrknyUNagmRoqlOElTAA2gF1MUK+2yFS3AEQAJGbRBuANBxclACMAOwBYhLSslB08NAafk4uZJRuAEp6-oHcYRHiUjKUAGZESlQJSQTOxKlQnoIk9HoQ2Zy5AGz5UUVQpeUJuDbaxfAoksDNKFBcwABCIAA8ACoBAApQEAAewKiIVFAA1hAg8sVQywB8ABQk8shKlMu2AWC08mCUawEAbmXxTysaxsAEonlAAD48JRKHDsAi0CAIWjTO4PAB0xXoSl2tGu9F2JEwlygBIgJCsbw+dgwtKgfyU8RBVgADHYIVCUPAYbgNLgdHoDIiqNz0FhZgtrjQLCYAm52tk3GE3CDcAB6NVQACitHeMQAgrQmLxLFAzrFwNAAORK0JuK2kg4oeTocRUehMYh8FSxeRQMAyVy4s3nUCQKBWrn8QRW9H8gX6V3O4AiQTpCAinH2CUgKVGSxUOWRQq0RVxVqqjXa3XyA1Gk1oEMW8M28v2x2EF0cKjuz1Eb3QYB+gO0IOCJth60KZSqFCx+O6RNQEBI-XJ1O0dOZsUzJGS6XGYCF+q1Vpyry63yVzWABBAoIAhEEAwiD3qCPwBsIIBWECggCYQQCCIIBFECgQB+EEAARBAAYQb9AA4QQBuEEAGRBAF4QQA+ECAA"},"\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u0446\u0430")))}u.isMDXComponent=!0}}]);