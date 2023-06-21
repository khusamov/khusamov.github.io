"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2786],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(m,l(l({ref:n},s),{},{components:r})):t.createElement(m,l({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7049:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const i={},l="\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432",c={unversionedId:"interface-segregation-principle",id:"interface-segregation-principle",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432",description:"Interface Segregation Principle; ISP",source:"@site/docs/solid/40-interface-segregation-principle.md",sourceDirName:".",slug:"/interface-segregation-principle",permalink:"/en/solid/interface-segregation-principle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1647807826,formattedLastUpdatedAt:"Mar 20, 2022",sidebarPosition:40,frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",permalink:"/en/solid/liskov-substitution-principle"},next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",permalink:"/en/solid/dependency-inversion-principle"}},o={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u043e\u0445\u043e\u0433\u043e \u043a\u043e\u0434\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u043e\u0445\u043e\u0433\u043e-\u043a\u043e\u0434\u0430",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:2},{value:"\u0420\u0430\u0437\u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f",id:"\u0440\u0430\u0437\u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],s={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432"),(0,a.kt)("p",null,"Interface Segregation Principle; ISP"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 (\u0438\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442.")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043f\u043b\u043e\u0445\u043e\u0433\u043e-\u043a\u043e\u0434\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043b\u043e\u0445\u043e\u0433\u043e \u043a\u043e\u0434\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IShape {\n    drawCircle()\n    drawSquare()\n    drawRectangle()\n}\n\nclass Circle implements IShape {\n    drawCircle() {}\n    drawSquare() {}\n    drawRectangle() {}\n}\nclass Square implements IShape {\n    drawCircle() {}\n    drawSquare() {}\n    drawRectangle() {}\n}\nclass Rectangle implements IShape {\n    drawCircle() {}\n    drawSquare() {}\n    drawRectangle() {}\n}\n")),(0,a.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ICircle {\n    drawCircle();\n}\ninterface ISquare {\n    drawSquare();\n}\ninterface IRectangle {\n    drawRectangle();\n}\nclass Circle implements ICircle {\n    drawCircle() {}\n}\nclass Square implements ISquare {\n    drawSquare() {}\n}\nclass Rectangle implements IRectangle {\n    drawRectangle() {}    \n}\n")),(0,a.kt)("h2",{id:"\u0440\u0430\u0437\u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f"},"\u0420\u0430\u0437\u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f"),(0,a.kt)("p",null,"\u041f\u043e \u0432\u0441\u0435\u0439 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u044d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0441\u0432\u044f\u0437\u0430\u043d \u0441 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u043e\u043c \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u0432\u043e\u0442 \u043a\u0430\u043a.\n\u0415\u0441\u043b\u0438 \u0432 \u043c\u043e\u0434\u0443\u043b\u0435 \u043d\u0443\u0436\u0435\u043d \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0433\u043e \u0447\u0430\u0441\u0442\u044c,\n\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0430\u0441\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430.\n\u0418 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434\u0435 \u043e\u0431\u044a\u0435\u043a\u0442 \u044d\u0442\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."),(0,a.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=d9RJqf2o_Sw"},"\u0412\u0438\u0434\u0435\u043e \u043e\u0442 \u0421\u0435\u0440\u0433\u0435\u044f \u041d\u0435\u043c\u0447\u0438\u043d\u0441\u043a\u043e\u0433\u043e")))}u.isMDXComponent=!0}}]);