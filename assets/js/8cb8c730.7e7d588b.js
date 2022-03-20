"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",hide_title:!0,title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},p=void 0,s={unversionedId:"intro",id:"intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"intro",source:"@site/docs/solid/00-intro.md",sourceDirName:".",slug:"/intro",permalink:"/solid/intro",tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1647807793,formattedLastUpdatedAt:"3/20/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",hide_title:!0,title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},sidebar:"solidSidebar",next:{title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",permalink:"/solid/single-responsibility-principle"}},c={},d=[{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",level:2},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",level:2},{value:"\u041a\u0443\u0440\u0441\u044b",id:"\u043a\u0443\u0440\u0441\u044b",level:2}],m={toc:d};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"intro",src:n(2113).Z,width:"800",height:"368"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SRP: Single Responsibility Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438)  "),(0,i.kt)("li",{parentName:"ul"},"OCP: Open-Closed Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438)  "),(0,i.kt)("li",{parentName:"ul"},"LSP: Liskov Substitution Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432)  "),(0,i.kt)("li",{parentName:"ul"},"ISP: Interface Segregation Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430)  "),(0,i.kt)("li",{parentName:"ul"},"DIP: Dependency Inversion Principle (\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439)  ")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u0423\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u0435")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0417\u0434\u0435\u0441\u044c \u0438 \u0434\u0430\u043b\u0435\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441 \u0438\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f."))),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439-\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b."),(0,i.kt)("li",{parentName:"ol"},"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u0430 \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 (actor) \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430."),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u0438\u0447\u0438\u043d\u044b (\u0430\u043a\u0442\u043e\u0440\u044b), \u044d\u0442\u043e \u043f\u043e \u0441\u0443\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430.")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0435\u0440\u0430\u043c!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e, \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043b\u043e\u043c\u0430\u0435\u0442\u0441\u044f,\n\u0430 \u0432\u043e\u0442 \u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u0435\u044e\u0449\u0435\u0435\u0441\u044f \u0441\u043b\u043e\u0432\u043e (\u043f\u043e \u0441\u0443\u0442\u0438 \u0435\u0433\u043e \u0441\u043c\u044b\u0441\u043b),\n\u0442\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0432\u0435\u0441\u044c\u043c\u0430 \u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u043c.\n\u0412 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u0445 \u0441\u043b\u043e\u0432\u0430 \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u0418\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c!"))),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438-\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f, \u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ol"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u043c\u043e\u0434\u0443\u043b\u044f."),(0,i.kt)("li",{parentName:"ol"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u044d\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 (\u043d\u043e \u043d\u0435 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c, \u0430 \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u0438\u043b\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443).")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0431\u0430\u0440\u0431\u0430\u0440\u044b-\u043b\u0438\u0441\u043a\u043e\u0432"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0411\u0430\u0440\u0431\u0430\u0440\u044b \u041b\u0438\u0441\u043a\u043e\u0432"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041a\u0432\u0430\u0434\u0440\u0430\u0442 \u044d\u0442\u043e \u043d\u0435 \u0447\u0430\u0441\u0442\u043d\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439 \u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430. "),(0,i.kt)("li",{parentName:"ol"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u0440\u0435\u0434\u043a\u0430.   "),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u043c (enum, switch, catch, if/else \u0438 \u0442.\u043f.)."),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0438 \u0447\u0442\u043e \u043e\u043d\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0435.")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u043c\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0438, \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c\n\u043c\u0435\u0442\u043e\u0434\u044b \u043e\u043f\u043b\u0430\u0442\u044b (\u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f). \u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0432\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u041f\u043e\u0447\u0430\u0441\u043e\u0432\u0430\u044f \u043e\u043f\u043b\u0430\u0442\u0430 \u0438 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0430.\n\u0418 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441\u044b \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430 (\u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0443) \u0438 \u041f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430 (\u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043e\u0431\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430)."))),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"},"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041a\u043b\u0430\u0441\u0441\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0438\u043b\u0438 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."),(0,i.kt)("li",{parentName:"ol"},"\u041a\u043b\u0430\u0441\u0441 \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430.")),(0,i.kt)("h2",{id:"\u043a\u0443\u0440\u0441\u044b"},"\u041a\u0443\u0440\u0441\u044b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/solid-connascence/"},"https://www.udemy.com/course/solid-connascence/"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://futurio.ru/"},"https://futurio.ru/")))}u.isMDXComponent=!0},2113:function(e,t,n){t.Z=n.p+"assets/images/intro-b8a5fa0b4d4f645224c466b63b2b4f99.png"}}]);