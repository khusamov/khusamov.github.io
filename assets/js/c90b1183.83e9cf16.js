"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[3113],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),b=o,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={},a="\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0438",c={unversionedId:"examples/book-and-invoices",id:"examples/book-and-invoices",title:"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0438",description:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:",source:"@site/docs/solid/40-examples/book-and-invoices.md",sourceDirName:"40-examples",slug:"/examples/book-and-invoices",permalink:"/solid/examples/book-and-invoices",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041d\u0435\u043e\u043f\u0440\u0430\u0432\u0434\u0430\u043d\u043d\u043e \u043e\u0431\u0448\u0438\u0440\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",permalink:"/solid/dependencies/extensive-dependencies"},next:{title:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438",permalink:"/solid/examples/calculate-and-save"}},l={},s=[],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0441\u0447\u0435\u0442\u0430-\u043d\u0430-\u043a\u043d\u0438\u0433\u0438"},"\u0412\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u043d\u0430 \u043a\u043d\u0438\u0433\u0438"),(0,o.kt)("p",null,"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a:\n",(0,o.kt)("a",{parentName:"p",href:"https://techrocks.ru/2020/08/26/solid-principles-in-plain-russian/"},"https://techrocks.ru/2020/08/26/solid-principles-in-plain-russian/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title='\u041a\u043e\u0434 \u043d\u0430\u0440\u0443\u0448\u0438\u043b \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438'",title:"'\u041a\u043e\u0434","\u043d\u0430\u0440\u0443\u0448\u0438\u043b":!0,"\u043f\u0440\u0438\u043d\u0446\u0438\u043f":!0,"\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439":!0,"\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438'":!0},"class Book {\n    constructor(\n        public price: number,\n        public name: string\n    ) {}\n}\n\nclass Invoice {\n    constructor(\n        private book: Book,\n        private quantity: number\n    ) {}\n\n    public get total() {\n        return this.book.price * this.quantity\n    }\n    \n    public print() {\n        console.log(`${this.book.name} = ${this.book.price} \u0440\u0443\u0431.`)\n        console.log(`\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ${this.total} \u0440\u0443\u0431.`)\n    }\n    \n    public saveToFile(filename: string) {}\n}\n")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u0447\u0438\u043d\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u0430:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 (total)"),(0,o.kt)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0432\u044b\u0432\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (\u043f\u0435\u0447\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0432 \u0444\u0430\u0439\u043b\u0435)")),(0,o.kt)("p",null,"\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c: \u043d\u0430\u0434\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title='\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434'",title:"'\u0418\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439","\u043a\u043e\u0434'":!0},"class Book {\n    constructor(\n        public price: number,\n        public name: string\n    ) {}\n}\n\nclass Invoice {\n    constructor(\n        public book: Book,\n        public quantity: number\n    ) {}\n\n    public get total() {\n        return this.book.price * this.quantity\n    }\n}\n\nclass InvoicePrinter {\n    constructor(private invoice: Invoice) {}\n    \n    public print() {\n        console.log(`${this.invoice.book.name} = ${this.invoice.book.price} \u0440\u0443\u0431.`)\n        console.log(`\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ${this.invoice.total} \u0440\u0443\u0431.`)\n    }\n}\n\nclass InvoicePersistence {\n    constructor(private invoice: Invoice) {}\n    public saveToFile(filename: string) {}\n}\n")))}u.isMDXComponent=!0}}]);