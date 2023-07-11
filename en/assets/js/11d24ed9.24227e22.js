"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[2992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||c;return t?r.createElement(f,a(a({ref:n},i),{},{components:t})):r.createElement(f,a({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const c={},a="\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439",s={unversionedId:"examples/exceptions",id:"examples/exceptions",title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439",description:"\u0421\u0442\u0430\u0442\u044c\u044f \u0432 \u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438//bit.ly/3CcBseO",source:"@site/docs/solid/40-examples/exceptions.md",sourceDirName:"40-examples",slug:"/examples/exceptions",permalink:"/en/solid/examples/exceptions",draft:!1,tags:[],version:"current",lastUpdatedBy:"Khusamov Sukhrob",lastUpdatedAt:1689101381,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{},sidebar:"solidSidebar",previous:{title:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438",permalink:"/en/solid/examples/calculate-and-save"},next:{title:"\u0421\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/en/solid/examples/serialize-and-deserialize"}},l={},p=[],i={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439"),(0,o.kt)("p",null,"\u0421\u0442\u0430\u0442\u044c\u044f \u0432 \u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438: ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/3CcBseO"},"https://bit.ly/3CcBseO")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const command = new Command\nconst resource: Resource = new Resource\n\ntry {\n    command.execute()\n} catch (error) {\n    switch (error.type) {\n        // \u0417\u0434\u0435\u0441\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u041b\u0438\u0441\u043a\u043e\u0432. \n        // \u041f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0442\u0438\u043f\u044b \u043c\u043e\u0436\u0435\u0442 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u043f\u043e\u043b\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f.\n    }\n}\n")),(0,o.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"try/catch")," \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432.\n\u0422\u0443\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const command = new Command\nconst resource: Resource = new Resource\n\ntry {\n    command.execute()\n    resource.close()\n} catch (error) {\n    resource.close()\n}\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"interface IClosable")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"function using()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IClosable { // Disposable\n    close(): void\n}\n\nfunction using<T extends IClosable>(getResource: () => T, fn: (resource: T) => void) {\n    const resource = getResource()\n    try {\n        fn()\n        resource.close()\n    } catch (error) {\n        resource.close()\n        throw error\n    }\n}\n\nconst command = new Command\n\nusing(() => new Resource, (\n    resource => {\n        command.execute()\n    }\n))\n")),(0,o.kt)("p",null,"\u0418\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0432 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Usable {\n    use(fn: (resource: this) => void): void\n}\n\nclass Resource implements Usable {\n    use(fn: (rc: this) => void) {\n        try {\n            fn()\n            this.close()\n        } catch (error) {\n            this.close()\n            throw error\n        }\n    }\n}\n\nconst command = new Command\nconst resource: Resource = new Resource\n\nrc.use(() => {\n    command.execute()\n})\n")),(0,o.kt)("p",null,"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const command = new Command\ntry {\n    command.execute()\n} catch (error) {\n    IoC.resolve('\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b', command, error).handle()\n}\n")))}u.isMDXComponent=!0}}]);