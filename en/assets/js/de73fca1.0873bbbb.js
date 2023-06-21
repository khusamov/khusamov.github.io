"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[4096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=p,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),p=(n(7294),n(3905));const i={},a="Typescript",o={unversionedId:"typescript/README",id:"typescript/README",title:"Typescript",description:"\u041f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b yarn plugin import typescript \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d Yarn TypeScript,",source:"@site/docs/tutorial/typescript/README.md",sourceDirName:"typescript",slug:"/typescript/",permalink:"/en/tutorial/typescript/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1650054678,formattedLastUpdatedAt:"Apr 15, 2022",frontMatter:{},sidebar:"solidSidebar",previous:{title:"Roadmap",permalink:"/en/tutorial/roadmap"},next:{title:"\u0428\u0430\u0431\u043b\u043e\u043d \u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0432 TypeScript",permalink:"/en/tutorial/typescript/articles/FactoryPattern"}},s={},c=[{value:"package.json",id:"packagejson",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:".gitignore",id:"gitignore",level:2}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript"},"Typescript"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm install -g typescript\ntsc --init\nnpm init\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"yarn add --dev typescript\nyarn plugin import typescript\ntsc --init\nyarn init\n")),(0,p.kt)("p",null,"\u041f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn plugin import typescript")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript"},"Yarn TypeScript"),",\n\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"@types/*"),"."),(0,p.kt)("h2",{id:"packagejson"},"package.json"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "pir-model-preparer",\n  "version": "1.0.0",\n  "description": "",\n  "author": "Khusamov Sukhrob <khusamov@yandex.ru>",\n  "license": "ISC",\n  "main": "dist/index.js",\n  "types": "dist/index.d.ts",\n  "bin": "dist/bin",\n  "files": [\n    "dist"\n  ],\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "tsc:w": "tsc -w",\n    "test1": "nodemon -w dist dist/test/test1",\n    "start": "concurrently \\"npm run tsc:w\\" \\"npm run test1\\""\n  },\n  "devDependencies": {\n    "@types/express": "^4.0.35",\n    "@types/node": "^7.0.12",\n    "concurrently": "^3.4.0",\n    "pug": "^2.0.0-rc.1"\n  },\n  "dependencies": {\n    "express": "4.14.0",\n    "lodash": "^4.17.4",\n    "lodash-decorators": "^4.3.1"\n  }\n}\n')),(0,p.kt)("h2",{id:"tsconfigjson"},"tsconfig.json"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "outDir": "dist",\n    "module": "commonjs",\n    "target": "es6",\n    "sourceMap": false,\n    "removeComments": false,\n    "declaration": true,\n    "experimentalDecorators": true,\n    "emitDecoratorMetadata": true,\n    "typeRoots": [\n        "node_modules/@types"\n    ],\n    "paths": {\n      "pir-model-preparer": ["./index"]\n    }\n  },\n  "exclude": [\n    "node_modules",\n    "temp",\n    "dist"\n  ]\n}\n')),(0,p.kt)("h2",{id:"gitignore"},".gitignore"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"/node_modules\n/dist\n/temp\nnpm-debug.log\n")),(0,p.kt)("p",null,"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 Typescript \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"http://typescript-lang.ru/docs/index.html"},"http://typescript-lang.ru/docs/index.html")),(0,p.kt)("p",null,"\u0422\u0438\u043f\u044b:",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"https://github.com/DefinitelyTyped/DefinitelyTyped")))}d.isMDXComponent=!0}}]);