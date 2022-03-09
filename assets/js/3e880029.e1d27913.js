"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[7017],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,h=f["".concat(s,".").concat(b)]||f[b]||p[b]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return b},metadata:function(){return m},toc:function(){return y}});var n=r(7462),a=r(3366),l=r(7294),o=r(3905),i="LinkCollection_Mw38",s="SubLinkCollection_w6Y8";function c(e){var t=e.links,r=e.className,n=void 0===r?i:r;return l.createElement("ol",{className:n},t.map((function(e){return l.createElement(u,e)})))}function u(e){var t=e.label,r=e.href,n=e.links;return l.createElement("li",null,l.createElement("a",{href:r,target:"_blank"},t),n&&l.createElement(c,{links:n,className:s}))}var p=[{label:"Unit-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",links:[{label:"Jest",href:"https://jestjs.io/docs/getting-started"},{label:"TypeScript Jest",href:"https://kulshekhar.github.io/ts-jest/docs/"},{label:"Mocha",href:"https://mochajs.org/"}]},{label:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0439",links:[{label:"Node.js Assert",href:"https://nodejs.org/api/assert.html"},{label:"Chai",href:"https://www.chaijs.com/"}]},{label:"REST-\u0441\u0435\u0440\u0432\u0435\u0440",links:[{label:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 Strapi \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f REST-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",href:"https://strapi.io/"},{label:"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u0433 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Next.js \u0438 Strapi",href:"https://bit.ly/3hKXhss"}]},{label:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0430\u0439\u0442\u043e\u0432",links:[{label:"Docusaurus",href:"https://docusaurus.io/"},{label:"Nextra \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 Next.js",href:"https://nextra.vercel.app/"},{label:"\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0439\u0442 \u043d\u0430 Next.js",href:"https://nextjs.org/docs/advanced-features/static-html-export"}]},{label:"\u041f\u0435\u0441\u043e\u0447\u043d\u0438\u0446\u044b",links:[{label:"Stack Blitz",href:"https://stackblitz.com/"},{label:"Code Sandbox",href:"https://codesandbox.io/"}]},{label:"\u0422\u0440\u0435\u0445\u043c\u0435\u0440\u043d\u0430\u044f \u0433\u0440\u0430\u0444\u0438\u043a\u0430",links:[{label:"Three.js",href:"https://github.com/mrdoob/three.js/"}]},{label:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0445\u043e\u0441\u0442\u0438\u043d\u0433 \u0434\u043b\u044f JavaScript-\u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",links:[{label:"Vercel + Next.js",href:"https://vercel.com/pricing"},{label:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0438 \u0434\u043b\u044f \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432",href:"https://vk.com/@we_use_js-besplatnye-hostingi-dlya-veb-razrabotchikov"},{label:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0438 \u0434\u043b\u044f \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 (\u043d\u0430 \u0445\u0430\u0431\u0440\u0435)",href:"https://habr.com/ru/post/535168/"}]}],f=["components"],b={},h=void 0,m={unversionedId:"links/index",id:"links/index",title:"index",description:"",source:"@site/docs/tutorial/links/index.mdx",sourceDirName:"links",slug:"/links/",permalink:"/tutorial/links/",tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1646840572,formattedLastUpdatedAt:"3/9/2022",frontMatter:{},sidebar:"solidSidebar",previous:{title:"Translate your site",permalink:"/tutorial/tutorial-extras/translate-your-site"},next:{title:"IT-\u043a\u0443\u0440\u0441\u044b",permalink:"/tutorial/practicum"}},d={},y=[],k={toc:y};function v(e){var t=e.components,r=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{links:p,mdxType:"LinkCollection"}))}v.isMDXComponent=!0}}]);