"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="jshint",s={unversionedId:"vscode-jshint",id:"vscode-jshint",title:"jshint",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint",source:"@site/docs/tutorial/vscode-jshint.md",sourceDirName:".",slug:"/vscode-jshint",permalink:"/tutorial/vscode-jshint",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1647106548,formattedLastUpdatedAt:"Mar 12, 2022",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Visual Studio Code",permalink:"/tutorial/vscode/remote-development"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f WinSCP",permalink:"/tutorial/winscp"}},c={},l=[{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0444\u0430\u0439\u043b\u0430 <code>.jshintrc</code>",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440-\u0444\u0430\u0439\u043b\u0430-jshintrc",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jshint"},"jshint"),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint"},"https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint")),(0,a.kt)("p",null,"\u0412 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438, \u0433\u0434\u0435 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},".jshintrc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "esversion": 6,\n    "unused": true\n}\n')),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043d\u0430 \u043e\u0444. \u0441\u0430\u0439\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"http://jshint.com/docs/options/"},"http://jshint.com/docs/options/")),(0,a.kt)("h2",{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440-\u0444\u0430\u0439\u043b\u0430-jshintrc"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0444\u0430\u0439\u043b\u0430 ",(0,a.kt)("inlineCode",{parentName:"h2"},".jshintrc")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u0432\u0441\u0435\u0445 \u043e\u043f\u0446\u0438\u0439."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=benjavr.jshintrc-generator"},"https://marketplace.visualstudio.com/items?itemName=benjavr.jshintrc-generator")))}u.isMDXComponent=!0}}]);