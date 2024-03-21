"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[98607],{89944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),l=a(75190),o=a(47507),m=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Get page of legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{technicalKey:{type:"string",description:"Unique key to be used for reference"},name:{type:"string",description:"Full name of the legal form"},abbreviation:{type:"string",description:"Abbreviation of the legal form name"}},description:"Legal form a business partner can have"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Get page of legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",id:"version-23.09/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",permalink:"/docs-kits/23.09/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-forms",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"get-legal-forms",title:"Get page of legal forms",description:"Lists all currently known legal forms in a paginated result",sidebar_label:"Get page of legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known legal forms in a paginated result",operationId:"getLegalForms",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing legal forms, may be empty",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{technicalKey:{type:"string",description:"Unique key to be used for reference"},name:{type:"string",description:"Full name of the legal form"},abbreviation:{type:"string",description:"Abbreviation of the legal form name"}},description:"Legal form a business partner can have"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0-SNAPSHOT"},postman:{name:"Get page of legal forms",description:{content:"Lists all currently known legal forms in a paginated result",type:"text/plain"},url:{path:["api","catena","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"metadata-controller",permalink:"/docs-kits/23.09/category/kits/Business Partner Kit/Software Development View/Pool Api/metadata-controller"},next:{title:"Create new legal form",permalink:"/docs-kits/23.09/kits/Business Partner Kit/Software Development View/Pool Api/create-legal-form"}},f={},y=[{value:"Get page of legal forms",id:"get-page-of-legal-forms",level:2}],h={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-page-of-legal-forms"},"Get page of legal forms"),(0,s.kt)("p",null,"Lists all currently known legal forms in a paginated result"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Page of existing legal forms, may be empty")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Collection of results in the page")),(0,s.kt)(m.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:"Unique key to be used for reference",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"Full name of the legal form",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"abbreviation",required:!1,deprecated:void 0,schemaDescription:"Abbreviation of the legal form name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "technicalKey": "string",\n      "name": "string",\n      "abbreviation": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed request parameters")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);