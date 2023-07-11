"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[4807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Visual Studio Code",s={unversionedId:"vscode/base-settings",id:"vscode/base-settings",title:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Visual Studio Code",description:"",source:"@site/docs/tutorial/vscode/base-settings.md",sourceDirName:"vscode",slug:"/vscode/base-settings",permalink:"/tutorial/vscode/base-settings",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"11 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0433\u0435\u0440\u043e\u044f",permalink:"/tutorial/unity/movement"},next:{title:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 Visual Studio Code",permalink:"/tutorial/vscode/remote-development"}},l={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-visual-studio-code"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 Visual Studio Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='settings.json'",title:"'settings.json'"},'{\n    "editor.fontSize": 14,\n    "editor.fontLigatures": true,\n    "editor.fontFamily": "Fira Code, Menlo, Monaco, \'Courier New\', monospace",\n    "editor.insertSpaces": false,\n    "editor.detectIndentation": false,\n    "terminal.integrated.fontSize": 16,\n    "editor.renderLineHighlight": "gutter",\n    "window.zoomLevel": 0,\n    "workbench.iconTheme": "vs-seti",\n    "editor.minimap.enabled": true,\n    "editor.minimap.renderCharacters": true,\n    "editor.dragAndDrop": true,\n    "window.reopenFolders": "all",\n    "window.title": "${dirty}${activeEditorShort} \u2014 ${rootName} \u2014 ${appName}",\n    "explorer.openEditors.visible": 0,\n    "explorer.autoReveal": false,\n    "editor.cursorStyle": "line-thin",\n    "editor.cursorBlinking": "phase",\n    "terminal.integrated.confirmOnExit": true,\n    "javascript.preferences.quoteStyle": "single",\n    "typescript.preferences.quoteStyle": "single",\n    "markdown.extension.toc.encodeUri": false,\n    "markdown.extension.toc.toLowerCase": false,\n    "markdown.extension.toc.levels": "2..6"\n}\n\n')))}u.isMDXComponent=!0}}]);