"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[9866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0420\u0435\u0430\u043a\u0442\u0430",c={unversionedId:"typescript/articles/ReactPatterns",id:"typescript/articles/ReactPatterns",title:"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0420\u0435\u0430\u043a\u0442\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",source:"@site/docs/tutorial/typescript/articles/ReactPatterns.md",sourceDirName:"typescript/articles",slug:"/typescript/articles/ReactPatterns",permalink:"/tutorial/typescript/articles/ReactPatterns",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u0420\u0430\u0437\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b",permalink:"/tutorial/typescript/articles/MicroPatterns"},next:{title:"createArray",permalink:"/tutorial/typescript/functions/createArray"}},p={},s=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u0441\u043e\u0432-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",level:2},{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-*",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430-data-",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0448\u0430\u0431\u043b\u043e\u043d\u044b-\u0434\u043b\u044f-\u0440\u0435\u0430\u043a\u0442\u0430"},"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u0420\u0435\u0430\u043a\u0442\u0430"),(0,a.kt)("h2",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u0441\u043e\u0432-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0441\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { Component } from 'react';\n\ninterface IListProps {\n    data: string[];\n    onItemClick?: (option: string | undefined) => void;\n}\n\ninterface IListState {\n    data: string[];\n}\n\nexport default class List extends Component<Required<IListProps>, IListState> {\n    public static defaultProps: Partial<IListProps> = {\n        onItemClick: (option: string | undefined) => {}\n    };\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435-\u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430-data-"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u0430 data-*"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"private onAction = (event: MouseEvent<HTMLAnchorElement>) => {\n    const id: number = Number((event.target as HTMLAnchorElement).getAttribute('data-id'));\n    // ...\n}\n")))}u.isMDXComponent=!0}}]);