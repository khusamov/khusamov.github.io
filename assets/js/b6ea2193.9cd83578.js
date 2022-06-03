"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[6214],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],p={},s="Mocha",i={unversionedId:"mocha",id:"mocha",title:"Mocha",description:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c Mocha \u0434\u043b\u044f TypeScript:",source:"@site/docs/tutorial/mocha.md",sourceDirName:".",slug:"/mocha",permalink:"/tutorial/mocha",tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1652107020,formattedLastUpdatedAt:"5/9/2022",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041c\u043e\u0434\u0435\u043b\u044c \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f",permalink:"/tutorial/mechanical-motion-model"},next:{title:"IT-\u043a\u0443\u0440\u0441\u044b",permalink:"/tutorial/practicum"}},l={},m=[{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 ts-node",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b-\u0441-ts-node",level:2},{value:"\u0422\u0440\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u044f:",id:"\u0442\u0440\u0438-\u0441\u043f\u043e\u0441\u043e\u0431\u0430-\u0440\u0435\u0448\u0435\u043d\u0438\u044f",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mocha"},"Mocha"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c Mocha \u0434\u043b\u044f TypeScript:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mochajs/mocha-examples/tree/master/packages/typescript"},"https://github.com/mochajs/mocha-examples/tree/master/packages/typescript")),(0,a.kt)("p",null,"\u0424\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},".mocharc.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extension": ["ts"],\n  "spec": "src/**/*.spec.ts",\n  "require": "ts-node/register"\n}\n')),(0,a.kt)("p",null,"\u0424\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "mocha"\n  },\n  "directories": {\n    "test": "./src"\n  },\n  "devDependencies": {\n    "@types/mocha": "latest",\n    "mocha": "latest",\n    "ts-node": "^9.1.1"\n    "typescript": "^4.2.4"\n  }\n}\n')),(0,a.kt)("h2",{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b-\u0441-ts-node"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 ts-node"),(0,a.kt)("p",null,"\u042d\u0442\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha")," \u0432 \u0432\u0438\u0434\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043e\u0448\u0438\u0431\u043a\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"\n')),(0,a.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ES-\u043c\u043e\u0434\u0443\u043b\u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e (\u043d\u0435 \u0441\u0440\u0430\u0437\u0443 \u0434\u043e\u0433\u0430\u0434\u0430\u0435\u0448\u044c\u0441\u044f \u0447\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430). "),(0,a.kt)("h4",{id:"\u0442\u0440\u0438-\u0441\u043f\u043e\u0441\u043e\u0431\u0430-\u0440\u0435\u0448\u0435\u043d\u0438\u044f"},"\u0422\u0440\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u044f:"),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),". \u042d\u0442\u043e \u043a\u043e\u0441\u0442\u044b\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b.\n\u0412\u0437\u044f\u0442 \u043e\u0442\u0441\u044e\u0434\u0430:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mochajs/mocha-examples/tree/master/packages/typescript#es-modules"},"https://github.com/mochajs/mocha-examples/tree/master/packages/typescript#es-modules")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "test": "env TS_NODE_COMPILER_OPTIONS=\'{\\"module\\": \\"commonjs\\" }\' mocha"\n    }\n}\n')),(0,a.kt)("p",null,"\u0421\u0430\u043c\u044b\u0439 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431. \u0418\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".\n\u0412\u0437\u044f\u0442 \u043e\u0442\u0441\u044e\u0434\u0430:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node#commonjs"},"https://github.com/TypeStrong/ts-node#commonjs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ts-node": {\n        "compilerOptions": {\n            "module": "CommonJS"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u0418\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 (\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u044b \u0435\u0433\u043e \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u043c) \u0441\u043f\u043e\u0441\u043e\u0431. \u0418\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ts-node": {\n        "compilerOptions": {\n            "esm": true\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);