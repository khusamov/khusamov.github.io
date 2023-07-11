"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[6755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:20},l="\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e",p={unversionedId:"basic-design-principles/prefer-composition-to-inheritance",id:"basic-design-principles/prefer-composition-to-inheritance",title:"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e",description:"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438.",source:"@site/docs/solid/20-basic-design-principles/prefer-composition-to-inheritance.md",sourceDirName:"20-basic-design-principles",slug:"/basic-design-principles/prefer-composition-to-inheritance",permalink:"/en/solid/basic-design-principles/prefer-composition-to-inheritance",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"solidSidebar",previous:{title:"\u0418\u043d\u043a\u0430\u043f\u0441\u0443\u043b\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f",permalink:"/en/solid/basic-design-principles/encapsulate-what-is-changing"},next:{title:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",permalink:"/en/solid/basic-design-principles/program-at-the-interface-level"}},o={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435-\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e-\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e"},"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e"),(0,i.kt)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438."),(0,i.kt)("p",null,"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043e\u043b\u0435\u0435 \u0436\u0435\u0441\u0442\u043a\u0430\u044f \u0441\u0432\u044f\u0437\u044c, \u0447\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u043e\u043c \xab\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f\xbb (\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043e\u043c),\n\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u2014 \u0441\u043b\u043e\u0432\u043e\u043c \xab\u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437\xbb (\u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043a\u043e\u043b\u0435\u0441, ...)."),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0438 \u043d\u0430 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044e \u2014 \u0431\u043e\u043b\u0435\u0435 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0439 \u0432\u0438\u0434 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u0434\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f\n\u0440\u0430\u0432\u043d\u043e\u043f\u0440\u0430\u0432\u043d\u044b\u043c\u0438, \u0438 \u043d\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0434\u0440\u0443\u0433\u043e\u0433\u043e. \u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0437\u043d\u0438\u0446\u0443: \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\n\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f, \u043d\u043e \u0442\u043e\u0442 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0439\u0442\u0438 \u0438 \u043f\u0435\u0440\u0435\u0441\u0435\u0441\u0442\u044c \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u0438\u043b\u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u043f\u043e\u0439\u0442\u0438 \u043f\u0435\u0448\u043a\u043e\u043c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metanit.com/sharp/patterns/1.2.php"},"https://metanit.com/sharp/patterns/1.2.php")),(0,i.kt)("p",null,"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041c\u0443\u0440\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u0448\u043a\u043e\u0439.")),(0,i.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0423\u043d\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043a\u0430\u0444\u0435\u0434\u0440. "),(0,i.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432. \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430.")),(0,i.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041a\u0430\u0444\u0435\u0434\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440\u043e\u0432. "),(0,i.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b. \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e."),(0,i.kt)("li",{parentName:"ul"},"\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0437\u043d\u0430\u0435\u0442 \u043e \u0432\u0435\u0434\u043e\u043c\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u0437. ")),(0,i.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0412\u0435\u0434\u043e\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d, \u0435\u0441\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0432\u0435\u0434\u0443\u0449\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435.")),(0,i.kt)("p",null,"\u0410\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u044f: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041e\u0434\u0438\u043d \u043e\u0431\u044a\u0435\u043a\u0442 \u0437\u043d\u0430\u0435\u0442 \u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. "),(0,i.kt)("li",{parentName:"ul"},"\u0410\u0441\u0441\u043e\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440. "),(0,i.kt)("li",{parentName:"ul"},"\u041e\u0434\u0438\u043d \u043a\u043b\u0430\u0441\u0441 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u043b\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430.")),(0,i.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041a\u043b\u0430\u0441\u0441 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. ")),(0,i.kt)("p",null,"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c (\u0441\u0430\u043c\u0430\u044f \u0441\u043b\u0430\u0431\u0430\u044f \u0441\u0432\u044f\u0437\u044c)",(0,i.kt)("br",{parentName:"p"}),"\n","\u0410\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u044f - \u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",(0,i.kt)("br",{parentName:"p"}),"\n","\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f - \u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435",(0,i.kt)("br",{parentName:"p"}),"\n","\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (\u0441\u0430\u043c\u0430\u044f \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c)  "),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0442\u0442\u0435\u0440\u043d \u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f."))}u.isMDXComponent=!0}}]);