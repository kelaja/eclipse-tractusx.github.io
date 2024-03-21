"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[62859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},80031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Development View"},o=void 0,l={unversionedId:"kits/Eco_Pass_KIT/page-software-development-view",id:"version-23.09/kits/Eco_Pass_KIT/page-software-development-view",title:"Development View",description:"Introduction",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Eco_Pass_KIT/page-software-development-view.md",sourceDirName:"kits/Eco_Pass_KIT",slug:"/kits/Eco_Pass_KIT/page-software-development-view",permalink:"/docs-kits/23.09/kits/Eco_Pass_KIT/page-software-development-view",draft:!1,tags:[],version:"23.09",frontMatter:{title:"Development View"},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/23.09/kits/Eco_Pass_KIT/page-adoption-view"},next:{title:"OSim Kit",permalink:"/docs-kits/23.09/category/osim-kit"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"General Development Information",id:"general-development-information",level:3},{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Figure 1",id:"figure-1",level:4},{value:"Figure 2",id:"figure-2",level:4},{value:"API calls",id:"api-calls",level:4},{value:"API Specification",id:"api-specification",level:2},{value:"Reference Implementationfernce",id:"reference-implementationfernce",level:2},{value:"Documentation in the context development",id:"documentation-in-the-context-development",level:3},{value:"NOTICE",id:"notice",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"general-development-information"},"General Development Information"),(0,n.kt)("p",null,"The developer view provides developers with resources to utilize the EcoPass KIT effectively. On the one side developers can learn how to integrate the EcoPass KIT into their applications and to make use of the product passport exchanging feature via the Catena-X network. On the other side, IT-Administrators will learn how to provide the needed passport data and which components are required.\nThereby, this KIT covers various aspects, starting from how the available API Endpoints can be utilized for data models and how to make them available in the Catena-x Data Space."),(0,n.kt)("h3",{id:"architecture-overview"},"Architecture Overview"),(0,n.kt)("p",null,"The following ",(0,n.kt)("a",{parentName:"p",href:"page-software-development-view#figure-1"},"Figure 1")," shows how the EcoPass KIT (represented by Product Passport Frontend and Backend) is embedded in the overall architecture."),(0,n.kt)("h4",{id:"figure-1"},"Figure 1"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"EcoPassKIT IT Arch Picture",src:a(87845).Z,width:"2880",height:"1620"})),(0,n.kt)("p",null,"After authorization, the sequence diagram below ",(0,n.kt)("a",{parentName:"p",href:"page-software-development-view#figure-2"},"Figure 2")," illustrates the identification process of the decentral Digital Twin Registry. The process is divided into 25 steps, starting within the Data Consumer Environment, which is providing the digital product passport consumer application/service. In summary, the sequence details the interaction of EDC(s), corresponding BPN(s), and the decentral Digital Twin Registry (dDTR). It also illustrates how the consumer not only requests data via the EDC(s), but also how the data is exchanged via the provider, thereby leveraging the EDC component at all stages. The sequence is concluded by data requests for digital twins and corresponding sub models."),(0,n.kt)("p",null,"The Figure below describes the process of searching for a DPP based on a part identification. The process shown in the figure assumes that the following conditions are met. The consumer has a part identifier and wants to obtain the corresponding digital twin. It also assumes that the consumer knows the BPN of the data room participant that is the owner of the digital twin.",(0,n.kt)("br",{parentName:"p"}),"\n","This process can be roughly divided into three steps. In the first step, ","[001]"," to ","[006]",", the EDCs of the data provider are identified. Then, the consumer has received a list of EDC endpoints, all belonging to the data space participant that can provide the requested digital twin. In the second step, calls ","[007]"," to ","[011]",", the consumer determines which specific DTR asset to query to obtain the correct DPP. This is accomplished by traversing the received list of EDC endpoints until the DTR asset that can provide the DPP being sought is found. Once the DTR facility is located, the contract negotiation workflow is initiated by the consumer. During this workflow, it is determined if the consumer has the necessary rights to access and receive the DPP they are looking for. The rights are dependend on the frame contracts the consumer aggreed to. On top the provider can white or blacklist ceratain BPNs which ensures that the provider has full controll of their data. At this point, the consumer knows where to find the DPP, and a usage and access policy is negotiated. In the last step, calls ","[012]"," to ","[023]",", the actual retrieval of the DPP is performed. In order to retrieve the DPP, its unique identifier (UUID) is required. This UUID is determined by retrieving the DPP that is associated with the part ID. After retrieving the UUID, the consumer requests the asset."),(0,n.kt)("h4",{id:"figure-2"},"Figure 2"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sequence Diagramm",src:a(99312).Z,width:"2210",height:"1398"})),(0,n.kt)("h4",{id:"api-calls"},"API calls"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Call"),(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Path"),(0,n.kt)("th",{parentName:"tr",align:null},"Params"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[001]"),(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"/api/administration/connectors/discovery/search"),(0,n.kt)("td",{parentName:"tr",align:null},"key:ManufactureID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[003]"),(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"/api/administration/connectors/bpnDiscovery/search"),(0,n.kt)("td",{parentName:"tr",align:null},"key:ManufactureID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[005]"),(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"/api/administration/connectors/discovery/search"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{[<Company's BPNL>]}"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[0012]"),(0,n.kt)("td",{parentName:"tr",align:null},"GET"),(0,n.kt)("td",{parentName:"tr",align:null},"/lookup/shells"),(0,n.kt)("td",{parentName:"tr",align:null},"key:partInstanceID, value: batteryDMC-Code")))),(0,n.kt)("h2",{id:"api-specification"},"API Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Reference Implementation"),(0,n.kt)("th",{parentName:"tr",align:null},"Standardization Number"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Portal/IAM"),(0,n.kt)("td",{parentName:"tr",align:null},"Portal"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/portal-backend"},"Portal")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/4_IAM/CX_-_0015_IAM___Access_Control_Paradigm_PlatformCapabilityIAM_v_1.0.1.pdf"},"CX - 0015"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Discovery Finder"),(0,n.kt)("td",{parentName:"tr",align:null},"A microservice resolving a type of identifiers against a set of BPN-Discovery Servers."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/sldt-discovery-finder"},"Tractus-X Discovery Finder")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0053-BPNDiscoveryServiceAPIs.pdf"},"CX - 0053"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BPN Discovery Service"),(0,n.kt)("td",{parentName:"tr",align:null},"A microservice resolving a particular assetId against the registered BPN of its owner."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/sldt-bpn-discovery"},"Tractus-X BPN Discovery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0053-BPNDiscoveryServiceAPIs.pdf"},"CX - 0053"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EDC Discovery Service"),(0,n.kt)("td",{parentName:"tr",align:null},"A microservice that resolves a BPN against an EDC endpoint."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/portal-backend"},"Tractus-X Portal including EDC Discovoery API")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/9_Data-Discovery-Services/CX_-_0001_EDC_DISCOVERY_API_PlatformCapabilityDS_v_1.0.1-1.pdf"},"CX - 0001"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EDC"),(0,n.kt)("td",{parentName:"tr",align:null},"Eeclipse Dataspace Connector"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"Tractus-X EDC")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/3_Sovereign_Data_Exchange/CX_-_0018_EDC_PlatformCapabilitySovereignDataExchange_v_1.0.1.pdf"},"CX - 0018"))))),(0,n.kt)("p",null,"Please note: In order to provide a passport asset for consumption a corresponding offer must exist. Please refer to \u201c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/docs/samples/Transfer%20Data.md#2-setup-data-offer"},"Setup Data Offer"),"\u201d in the EDC documentation."),(0,n.kt)("h2",{id:"reference-implementationfernce"},"Reference Implementationfernce"),(0,n.kt)("p",null,"A reference implementation and a corresponding documentation can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/digital-product-pass/tree/main"},"here"),"."),(0,n.kt)("p",null,"This reference includes a frontend and a backend allowing users to look up and display Battery Passport assets.\nThe Helm charts of this reference implementation are located ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/digital-product-pass/tree/main/charts/digital-product-pass"},"here"),"."),(0,n.kt)("h3",{id:"documentation-in-the-context-development"},"Documentation in the context development"),(0,n.kt)("p",null,"The following represents a collection of relevant documentation regarding the presented adaptation and all related services:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/eclipse-edc/Connector/blob/main/docs/developer/architecture/domain-model.md"},"EDC Domain Model"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/eclipse-tractusx/digital-product-pass/tree/main/docs"},"Reference Implementation (+Arch42)"))),(0,n.kt)("h2",{id:"notice"},"NOTICE"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Robert Bosch GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 T-Systems International GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V. f\xfcr ihre Institute IPK und IPK"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 BASF SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Henkel AG & Co. KGaA"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2023 Contributors to the Eclipse Foundation"),(0,n.kt)("li",{parentName:"ul"},"Source URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eco-pass-kit"},"https://github.com/eclipse-tractusx/eco-pass-kit"))))}d.isMDXComponent=!0},87845:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/adoption-view-EcoPassKIT_IT_Arch-2bf90b781161b31c40d88c45486f2eb5.png"},99312:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/developmentview-sequence-diagramm-a71e34a8236af1f293ee57b3e9bde8c2.svg"}}]);