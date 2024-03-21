"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[65870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Migration from 0.3.3 to 0.3.4",s={unversionedId:"kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4",id:"version-23.12/kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4",title:"Migration from 0.3.3 to 0.3.4",description:"Refactoring of Helm Charts",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4.md",sourceDirName:"kits/tractusx-edc/docs/migration",slug:"/kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/migration/Version_0.3.3_0.3.4",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Migration from 0.3.0 to 0.3.1",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2"},next:{title:"Migration from 0.3.4 to 0.4.0",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/migration/Version_0.3.4_0.4.0"}},c={},l=[{value:"Refactoring of Helm Charts",id:"refactoring-of-helm-charts",level:2},{value:"Change in Docker image publishing",id:"change-in-docker-image-publishing",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-033-to-034"},"Migration from 0.3.3 to 0.3.4"),(0,o.kt)("h2",{id:"refactoring-of-helm-charts"},"Refactoring of Helm Charts"),(0,o.kt)("p",null,"In issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/issues/136"},"#136")," work has begun to split the Helm charts up\ninto several technology-focused charts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In-memory: for testing and development"),(0,o.kt)("li",{parentName:"ul"},"PostgreSQL+Hashicorp: this is the ",(0,o.kt)("strong",{parentName:"li"},"recommended")," distribution of Tractus-X EDC"),(0,o.kt)("li",{parentName:"ul"},"(Azure KeyVault: uses Azure KeyVault instead of Hashicorp Vault.) - Work in Progress")),(0,o.kt)("p",null,"Unfortunately, due to time constraints, we had to release 0.3.4 ",(0,o.kt)("strong",{parentName:"p"},"without")," the Azure KeyVault chart, it will be\nincluded in one of the subsequent releases in the future."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note that the Azure KeyVault variant is not included in the 0.3.4 Release! If you rely on AZKV please do NOT\nupgrade to 0.3.4 yet!")),(0,o.kt)("h2",{id:"change-in-docker-image-publishing"},"Change in Docker image publishing"),(0,o.kt)("p",null,"Starting with the 0.3.3 release we switched over to publish our Docker images\nto ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/search?q=tractusx"},"Docker Hub")," instead of GHCR."))}p.isMDXComponent=!0}}]);