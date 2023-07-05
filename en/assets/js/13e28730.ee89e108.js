"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[5394],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3435:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:60},a="\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Docker-\u043e\u0431\u0440\u0430\u0437\u0430",c={unversionedId:"csharp/microservice/build-docker-image",id:"csharp/microservice/build-docker-image",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Docker-\u043e\u0431\u0440\u0430\u0437\u0430",description:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:",source:"@site/docs/tutorial/csharp/microservice/build-docker-image.md",sourceDirName:"csharp/microservice",slug:"/csharp/microservice/build-docker-image",permalink:"/en/tutorial/csharp/microservice/build-docker-image",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1688576789,formattedLastUpdatedAt:"Jul 5, 2023",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"solidSidebar",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Dockerfile",permalink:"/en/tutorial/csharp/microservice/create-dockerfile"},next:{title:"\u0417\u0430\u043f\u0443\u0441\u043a Docker-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",permalink:"/en/tutorial/csharp/microservice/run-docker"}},l={},p=[],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-docker-\u043e\u0431\u0440\u0430\u0437\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Docker-\u043e\u0431\u0440\u0430\u0437\u0430"),(0,o.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t mymicroservice .\n")),(0,o.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0430 Docker."),(0,o.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"-t mymicroservice")," \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442 \u0435\u043c\u0443 \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c (\u0438\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u0442\u044c) \u043e\u0431\u0440\u0430\u0437 \u043a\u0430\u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"mymicroservice"),"."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a\u043e\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," (\u0442\u043e\u0447\u043a\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},".")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433)."),(0,o.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0438 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u0438 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f."),(0,o.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u043e\u0431\u0440\u0430\u0437\u043e\u0432, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435,\n\u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0442\u043e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u043b\u0438."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")))}u.isMDXComponent=!0}}]);