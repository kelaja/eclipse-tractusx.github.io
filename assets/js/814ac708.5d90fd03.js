"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[66685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Release",s={unversionedId:"kits/tractusx-edc/docs/development/Release",id:"version-23.12/kits/tractusx-edc/docs/development/Release",title:"Release",description:"Prerequisites",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/development/Release.md",sourceDirName:"kits/tractusx-edc/docs/development",slug:"/kits/tractusx-edc/docs/development/Release",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/development/Release",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"EDR core extension",permalink:"/docs-kits/23.12/kits/tractusx-edc/core/edr-core/"},next:{title:"Software Operation View",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page00_operation_view"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Update DEPENDENCIES file",id:"update-dependencies-file",level:2},{value:"1. Setup Eclipse Dash License Tool locally",id:"1-setup-eclipse-dash-license-tool-locally",level:3},{value:"2. Generate DEPENDENCIES file",id:"2-generate-dependencies-file",level:3},{value:"3. Resolve restricted Dependencies",id:"3-resolve-restricted-dependencies",level:3},{value:"4. Update OpenAPI docs",id:"4-update-openapi-docs",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release"},"Release"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Apache%20Maven-URL-blue",alt:"Apache Maven"}))),(0,a.kt)("h2",{id:"update-dependencies-file"},"Update DEPENDENCIES file"),(0,a.kt)("h3",{id:"1-setup-eclipse-dash-license-tool-locally"},"1. Setup Eclipse Dash License Tool locally"),(0,a.kt)("p",null,"For instructions on how to download the Eclipse Dash Tool executable, refer to the\nproject's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse/dash-licenses#get-it"},"GitHub page"),"."),(0,a.kt)("h3",{id:"2-generate-dependencies-file"},"2. Generate DEPENDENCIES file"),(0,a.kt)("p",null,"The following call generates the dependencies file. This list is populated by deriving dependencies using the build tool (i.e.,\ngradle), analysing them using an IP tool (i.e., Eclipse Dash Tool), and decorating the resulting report with additional\ninformation using a custom script."),(0,a.kt)("p",null,"Execute the gradle task ",(0,a.kt)("inlineCode",{parentName:"p"},"allDependencies")," for creating an integrated dependency report over all sub-modules of the\nproject (including isolated modules). To process the dependencies of a specific module (e.g., an individual launcher)\nexecute the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," task."),(0,a.kt)("p",null,"First, the dependencies of this module are calculated with gradle and passed to the Dash tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'gradle allDependencies | grep -Poh "(?<=\\s)[\\w.-]+:[\\w.-]+:[^:\\s]+" | sort | uniq | java -jar /path/org.eclipse.dash.licenses-0.0.1-SNAPSHOT.jar - -summary DEPENDENCIES\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: on some machines (e.g. macOS) ",(0,a.kt)("a",{parentName:"em",href:"https://beyondgrep.com/install/"},"the ack tool")," should be used instead of ",(0,a.kt)("inlineCode",{parentName:"em"},"grep"),".")),(0,a.kt)("h3",{id:"3-resolve-restricted-dependencies"},"3. Resolve restricted Dependencies"),(0,a.kt)("p",null,"If a dependency is ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted"),", it is not approved by the Eclipse Foundation, yet.\nThe Eclipse Bot is able to approve dependencies automatically, if the license can be resolved by ClearlyDefined."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"(optional) Visit ",(0,a.kt)("a",{parentName:"li",href:"https://clearlydefined.io/harvest"},"https://clearlydefined.io/harvest")," and harvest the dependency\nfrom maven central."),(0,a.kt)("li",{parentName:"ol"},"Create the Eclipse IP Issues or ask an Eclipse Commiter to do this for you.")),(0,a.kt)("h2",{id:"4-update-openapi-docs"},"4. Update OpenAPI docs"),(0,a.kt)("p",null,"As part of the ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/page00_development_view"},"kits documentation provided for docusaurus")," we provide an OpenAPI reference.\nThis refers to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/tree/main/resources/openapi"},"EDC API")," and needs to be updated to the current release.\nThe yaml files found there are then converted with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/docusaurus-plugin-openapi-docs"},"docusaurus openapi plugin"),"."))}d.isMDXComponent=!0}}]);