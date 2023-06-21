"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[8443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,h=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f Google Chrome",l={unversionedId:"chrome-extension-creating",id:"chrome-extension-creating",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f Google Chrome",description:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f",source:"@site/docs/tutorial/chrome-extension-creating.md",sourceDirName:".",slug:"/chrome-extension-creating",permalink:"/tutorial/chrome-extension-creating",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1647106548,formattedLastUpdatedAt:"12 \u043c\u0430\u0440. 2022 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438",permalink:"/tutorial/intro"},next:{title:"\u0414\u0432\u043e\u0439\u043d\u0430\u044f \u0431\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/tutorial/csharp/double-buffer"}},p={},c=[{value:"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f",id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f-google-chrome"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f Google Chrome"),(0,o.kt)("h2",{id:"\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f-\u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e-\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f"},"\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438 \u0440\u044f\u0434\u043e\u043c \u0441 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e\n\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0430 \u0423\u043f\u0430\u043a\u043e\u0432\u043a\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0439 (\u0441\u043c. \u0440\u0438\u0441\u0443\u043d\u043e\u043a 5). \u042d\u0442\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\n\u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0441 \u0446\u0435\u043b\u044c\u044e \u0435\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f.\nChrome \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c \u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u2015 \u0444\u0430\u0439\u043b \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.\n\u041d\u0438\u0436\u0435 \u044f \u0432\u0435\u0440\u043d\u0443\u0441\u044c \u043a \u044d\u0442\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443."),(0,o.kt)("p",null,"\u0420\u0438\u0441\u0443\u043d\u043e\u043a 5. \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.ibm.com/developerworks/ru/library/os-extendchrome/fig05.jpg",alt:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438"})),(0,o.kt)("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438 Chrome"),(0,o.kt)("p",null,"\u0412 \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437 \u043f\u0440\u0438 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f Chrome \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0434\u0432\u0430 \u0444\u0430\u0439\u043b\u0430: .crx \u0438 .pem.\n\u0424\u0430\u0439\u043b .crx \u2015 \u044d\u0442\u043e \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435, \u0433\u043e\u0442\u043e\u0432\u043e\u0435 \u043a \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044e.\n\u0424\u0430\u0439\u043b .pem \u2015 \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447. Chrome \u0441\u043e\u043e\u0431\u0449\u0438\u0442, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0434\u0435\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u2014 \u0435\u0441\u043b\u0438\n\u0432\u044b \u0437\u0430\u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u043f\u0430\u043a\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u0442\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430.\n\u0411\u0435\u0437 \u043d\u0435\u0433\u043e Chrome \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u043d\u043e\u0432\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435."),(0,o.kt)("p",null,"\u0423\u043f\u0430\u043a\u043e\u0432\u0430\u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435, \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u2014 \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435,\n\u0447\u0435\u0440\u0435\u0437 \u0441\u0432\u043e\u0439 Web-\u0441\u0430\u0439\u0442, \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438, \u043d\u0430 \u0444\u043b\u044d\u0448-\u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u0435 \u0438 \u0442.\u043f.\n\u041e\u0431\u043e\u0440\u043e\u0442\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u2015 \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f."),(0,o.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Chrome \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u043b\u043e \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432 \u0444\u0430\u0439\u043b \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0443,\n\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0443\u044e, \u0433\u0434\u0435 \u0438\u0441\u043a\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f (\u0441\u043c. \u041b\u0438\u0441\u0442\u0438\u043d\u0433 7)."),(0,o.kt)("p",null,"\u041b\u0438\u0441\u0442\u0438\u043d\u0433 7. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "name": "GawkBlocker",\n  "version": "1.7",\n  "update_url": "http://yourawesomedomain.com/ext/updates.xml",\n  ...\n}\n')),(0,o.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c XML-\u0444\u0430\u0439\u043b, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442\u0443, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u043c\u0443 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\nAutoupdating \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u042d\u0442\u043e \u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u043e, \u043d\u043e \u0432\u0441\u0435 \u0436\u0435 \u044d\u0442\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430.\n\u0418 \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432\u0441\u044f\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 Chrome."),(0,o.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.ibm.com/developerworks/ru/library/os-extendchrome/"},"http://www.ibm.com/developerworks/ru/library/os-extendchrome/"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://canonium.com/articles/briefly-about-building-a-chrome-extension"},"http://canonium.com/articles/briefly-about-building-a-chrome-extension"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onikienko/chrome-extensions-box/blob/master/readme.ru.md"},"https://github.com/onikienko/chrome-extensions-box/blob/master/readme.ru.md"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/developer/dashboard/g12870334564934775787?page=1"},"\u041f\u0430\u043d\u0435\u043b\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://programmict.ru/delaem-rasshirenie-dlya-google-crome/"},"http://programmict.ru/delaem-rasshirenie-dlya-google-crome/"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.zagirov.name/write-extension-to-google-chrome/"},"https://www.zagirov.name/write-extension-to-google-chrome/")))}u.isMDXComponent=!0}}]);