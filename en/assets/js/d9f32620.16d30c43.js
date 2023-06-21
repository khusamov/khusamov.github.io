"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[1914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(g,l(l({ref:t},i),{},{components:r})):o.createElement(g,l({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={slug:"welcome",title:"Welcome",authors:["khusamov"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/en/blog/welcome",editUrl:"https://github.com/khusamov/khusamov.github.io/tree/main/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/en/blog/tags/facebook"},{label:"hello",permalink:"/en/blog/tags/hello"},{label:"docusaurus",permalink:"/en/blog/tags/docusaurus"}],readingTime:.41,hasTruncateMarker:!0,authors:[{name:"Khusamov Sukhrob",title:"Maintainer of Docusaurus",url:"https://khusamov.github.io/",imageURL:"https://avatars.githubusercontent.com/u/4146998?s=400&u=7dc65930b58dae10e9771ffc3611ec3c326a9a3c&v=4",key:"khusamov"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["khusamov"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/en/blog/mdx-blog-post"}},s={authorsImageUrls:[void 0]},c=[],i={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered\nby the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,n.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,n.kt)("p",null,"Regular blog authors can be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,n.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,n.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(6178).Z,width:"1500",height:"500"})),(0,n.kt)("p",null,"The blog supports tags as well!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}p.isMDXComponent=!0},6178:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);