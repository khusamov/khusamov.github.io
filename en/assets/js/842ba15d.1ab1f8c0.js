"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[7501],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(k,i(i({ref:r},s),{},{components:t})):n.createElement(k,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9063:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:40},i="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Docker",c={unversionedId:"csharp/microservice/install-docker",id:"csharp/microservice/install-docker",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Docker",description:"Docker \u2014 \u044d\u0442\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",source:"@site/docs/tutorial/csharp/microservice/install-docker.md",sourceDirName:"csharp/microservice",slug:"/csharp/microservice/install-docker",permalink:"/en/tutorial/csharp/microservice/install-docker",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"solidSidebar",previous:{title:"\u0417\u0430\u043f\u0443\u0441\u043a \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u0430",permalink:"/en/tutorial/csharp/microservice/run-microservice"},next:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Dockerfile",permalink:"/en/tutorial/csharp/microservice/create-dockerfile"}},l={},p=[{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",level:2},{value:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e Docker \u0433\u043e\u0442\u043e\u0432 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e",id:"\u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c-\u0447\u0442\u043e-docker-\u0433\u043e\u0442\u043e\u0432-\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e",level:2}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-docker"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Docker"),(0,o.kt)("p",null,"Docker \u2014 \u044d\u0442\u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438\n\u0432 \u0435\u0434\u0438\u043d\u0443\u044e, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u0435\u043c\u0443\u044e \u0435\u0434\u0438\u043d\u0438\u0446\u0443, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u0443\u044e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker"),", \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u044d\u0442\u043e \u0432\u0435\u0440\u0441\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"20.10")," \u0438\u043b\u0438 \u0432\u044b\u0448\u0435.")),(0,o.kt)("h2",{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c-\u0438-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Docker \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u044b Linux \u0432 Windows.\n\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u044d\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043a\u0430\u043a \u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.")),(0,o.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 (\u0442\u0430\u043c \u0436\u0435 \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438):"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"https://docs.docker.com/desktop/install/windows-install/")),(0,o.kt)("h2",{id:"\u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c-\u0447\u0442\u043e-docker-\u0433\u043e\u0442\u043e\u0432-\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e"},"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e Docker \u0433\u043e\u0442\u043e\u0432 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e"),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker --version\n")),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u0435\u0440\u0441\u0438\u0438, \u0437\u043d\u0430\u0447\u0438\u0442, ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d."))}d.isMDXComponent=!0}}]);