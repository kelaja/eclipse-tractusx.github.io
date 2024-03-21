"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54608],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i="Refactor TractusX-EDC Helm charts",l={unversionedId:"kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts/README",id:"version-3.1.0/kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts/README",title:"Refactor TractusX-EDC Helm charts",description:"Decision",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts/README.md",sourceDirName:"kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts",slug:"/kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts/",permalink:"/docs-kits/3.1.0/kits/tractusx-edc/docs/development/decision-records/2023-04-11_refactor_helmcharts/",draft:!1,tags:[],version:"3.1.0",frontMatter:{}},s={},c=[{value:"Decision",id:"decision",level:2},{value:"Rationale",id:"rationale",level:2},{value:"Approach",id:"approach",level:2},{value:"Variant 1: <code>tractusx-connector-memory</code>",id:"variant-1-tractusx-connector-memory",level:3},{value:"Variant 2: <code>tractusx-connector</code>",id:"variant-2-tractusx-connector",level:3},{value:"Variant 3: <code>tractusx-connector-azure-vault</code>",id:"variant-3-tractusx-connector-azure-vault",level:3},{value:"Testing",id:"testing",level:3},{value:"Docker image refactoring",id:"docker-image-refactoring",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"refactor-tractusx-edc-helm-charts"},"Refactor TractusX-EDC Helm charts"),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"The Helm charts provided by Tractusx-EDC will be refactored to be more focused and opinionated. Specifically, there will\nbe the following charts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"tractusx-connector-memory"),": all backing stores are memory-based and thus ephemeral. The vault will also be\nmemory-based. ",(0,r.kt)("em",{parentName:"li"},"This chart is intended for testing/demo purposes only!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"tractusx-connector"),': this is the "production-ready" chart that uses PostgreSQL and Hashicorp-Vault'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"tractusx-connector-azure-vault"),": this is a variant of ",(0,r.kt)("inlineCode",{parentName:"li"},"tractusx-connector-azure-vault"),' that uses Azure KeyVault ("\nAZKV") instead\nof Hashicorp as some stakeholders still use AZKV.')),(0,r.kt)("p",null,"These charts and their default configuration will be fully ",(0,r.kt)("a",{parentName:"p",href:"#testing"},"tested"),"."),(0,r.kt)("p",null,"In addition to that, the Docker images will undergo some ",(0,r.kt)("a",{parentName:"p",href:"#docker-image-refactoring"},"refactoring")," as well."),(0,r.kt)("h2",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,'The current "dynamically composed" helm chart has proven to be a source for issues, and it is difficult to isolate\nerrors due to the great number of variations. Further, only one particular variant (i.e. postgres+hashicorp) is put to\nany semblance of testing (i.e. business tests).'),(0,r.kt)("p",null,"The official recommendation of TractusX-EDC is to use PostgreSQL and HashiCorp Vault, and alongside it, we will provide\ncharts for easy testing and setting up demos as well as an Azure KeyVault variant for legacy use cases."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: using Azure KeyVault is not officially supported or recommended by TractusX-EDC!")),(0,r.kt)("p",null,"This will also reduce the number of Docker images that need to be published."),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("h3",{id:"variant-1-tractusx-connector-memory"},"Variant 1: ",(0,r.kt)("inlineCode",{parentName:"h3"},"tractusx-connector-memory")),(0,r.kt)("p",null,"This chart is intended for blackbox-testing or for easily setting up demos etc. It is ",(0,r.kt)("strong",{parentName:"p"},"not")," recommended for anything\nelse. It will have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all backing stores (Asset Index, Policy Store etc.) are ephemeral in-memory stores"),(0,r.kt)("li",{parentName:"ul"},"the vault implementation will either be based also on memory, or on the ",(0,r.kt)("inlineCode",{parentName:"li"},"FsVault"),", which uses local storage to store\nsecrets"),(0,r.kt)("li",{parentName:"ul"},"an embedded data plane will be used"),(0,r.kt)("li",{parentName:"ul"},"no scalability or replication is possible"),(0,r.kt)("li",{parentName:"ul"},"DAPS will be used as identity provider, so there is an implicit dependency onto a DAPS instance"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-runtime-memory")," Docker image will be used. That image contains both control plane and data plane.")),(0,r.kt)("h3",{id:"variant-2-tractusx-connector"},"Variant 2: ",(0,r.kt)("inlineCode",{parentName:"h3"},"tractusx-connector")),(0,r.kt)("p",null,"This is the production-ready chart that is published by TractusX-EDC, and it will actually consist of two charts. One is\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"tractusx-runtime")," sub-chart, that contains all configuration for data plane and control plane, and the other one is\nthe top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"tractusx-connector")," chart, that pulls in other charts as dependencies that are needed for one TractusX\nconnector application. This is sometimes referred to\nas ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/howto/charts_tips_and_tricks/#complex-charts-with-many-dependencies"},'"umbrella chart"'),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this will ",(0,r.kt)("strong",{parentName:"p"},"not")," include sub-charts for DAPS or MinIO.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tractusx-connector\n  |-> tractusx-runtime\n  |-> postgres\n  |-> hashicorp-vault\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tractusx-runtime")," chart has the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PostgreSQL is used as persistence backend"),(0,r.kt)("li",{parentName:"ul"},"HashiCorp Vault is used as secret store"),(0,r.kt)("li",{parentName:"ul"},"the data plane is a separate runtime, i.e. separate pod"),(0,r.kt)("li",{parentName:"ul"},"DAPS is used as identity provider"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-controlplane-postgresql-hashicorp-vault")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-dataplane-hashicorp-vault")," Docker images will be used")),(0,r.kt)("h3",{id:"variant-3-tractusx-connector-azure-vault"},"Variant 3: ",(0,r.kt)("inlineCode",{parentName:"h3"},"tractusx-connector-azure-vault")),(0,r.kt)("p",null,"This variant is essentially identical to ",(0,r.kt)("inlineCode",{parentName:"p"},"tractusx-connector")," except for dropping the HashiCorp Vault chart, and\nreplacing the HashiCorp Vault configuration with Azure KeyVault configuration."),(0,r.kt)("p",null,"For this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-controlplane-postgresql-azure-vault")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-dataplane-azure-vault")," Docker images will be used."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"There are several steps to testing our Helm charts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"waiting for all pods to come up: using an exemplary configuration, this relies on the health checks, i.e. liveness\nand readiness probe (i.e. the runtime`s observability endpoints) to ensure that (most of) the static\nconfiguration is correct, no values are missing etc."),(0,r.kt)("li",{parentName:"ol"},"executing a set of HTTP requests against the management API and assert a successful HTTP status code. For that we\nuse ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/topics/chart_tests/"},"Helm chart tests"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: we refer to this kind of testing as "deployment testing"')),(0,r.kt)("h3",{id:"docker-image-refactoring"},"Docker image refactoring"),(0,r.kt)("p",null,"The following changes need to be made to our Docker images:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-controlplane-memory")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"-edc-runtime-memory")),(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-runtime-memory")," use ",(0,r.kt)("inlineCode",{parentName:"li"},"FsVault")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"AzureVault")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edc-runtime-memory")," contains an embedded data plane"),(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-controlplane-postgresql")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-controlplane-postgresql-azure-vault")),(0,r.kt)("li",{parentName:"ul"},"delete ",(0,r.kt)("inlineCode",{parentName:"li"},"edc-controlplane-memory-hashicorp-vault"))),(0,r.kt)("p",null,"thus effectively resulting in the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"edc-controlplane\n|-> edc-runtime-memory\n|-> edc-controlplane-postgresql-hashicorp-vault\n|-> edc-controlplane-postgresql-azure-vault\n\nedc-dataplane\n|-> edc-dataplane-hashicorp-vault\n|-> edc-dataplane-azure-vaul\n")))}p.isMDXComponent=!0}}]);