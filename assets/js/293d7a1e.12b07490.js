"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},o="\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u043e\u0442 prettier.io",s={unversionedId:"misc/prettier",id:"misc/prettier",title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u043e\u0442 prettier.io",description:"https://prettier.io/docs/en/install.html",source:"@site/docs/tutorial/misc/prettier.md",sourceDirName:"misc",slug:"/misc/prettier",permalink:"/tutorial/misc/prettier",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"IT-\u043a\u0443\u0440\u0441\u044b",permalink:"/tutorial/misc/practicum"},next:{title:"Roadmap",permalink:"/tutorial/misc/roadmap"}},l={},p=[{value:"package.json",id:"packagejson",level:2},{value:".prettierrc.json",id:"prettierrcjson",level:2},{value:"tslint.json",id:"tslintjson",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043a\u043e\u0434\u0430-\u043e\u0442-prettierio"},"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u043e\u0442 prettier.io"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/install.html"},"https://prettier.io/docs/en/install.html")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add prettier --dev --exact\nyarn add husky lint-staged --dev\nyarn add tslint tslint-config-prettier tslint-plugin-prettier tslint-react --dev\n")),(0,i.kt)("h2",{id:"packagejson"},"package.json"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/precommit.html"},"https://prettier.io/docs/en/precommit.html")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "prettier:write": "prettier --write \\"src/**/*.+(tsx|ts|scss)\\""\n  },\n  "husky": {\n    "hooks": {\n      "pre-commit": "lint-staged",\n      "post-commit": "git update-index --again"\n    }\n  },\n  "lint-staged": {\n    "src/**/*.{ts,tsx,scss}": [\n      "prettier --write",\n      "tslint --fix",\n      "git add"\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"prettierrcjson"},".prettierrc.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "singleQuote": true,\n  "jsxSingleQuote": true,\n  "bracketSpacing": false,\n  "printWidth": 120,\n  "useTabs": true\n}\n')),(0,i.kt)("h2",{id:"tslintjson"},"tslint.json"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/integrating-with-linters.html"},"https://prettier.io/docs/en/integrating-with-linters.html")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "tslint:recommended",\n    "tslint-react",\n    "tslint-plugin-prettier",\n    "tslint-config-prettier"\n  ],\n  "rules": {\n    "prettier": true,\n    "no-debugger": false,\n    "no-console": false,\n    "ordered-imports": false,\n    "object-literal-sort-keys": false,\n    "curly": [true, "ignore-same-line"],\n    "no-empty": [true, "allow-empty-functions"]\n  },\n  "linterOptions": {\n    "exclude": [\n      "build/**/*.js",\n      "node_modules/**/*.ts"\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);