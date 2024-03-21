"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[67305],{49906:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),r=i(94891),o=i(75190),l=i(47507),m=i(24310),p=i(63303),d=(i(75035),i(85162));const c={id:"get-legal-form-suggestion",title:"Find best matches for given text in business partner legal forms",description:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",sidebar_label:"Find best matches for given text in business partner legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["suggestion-controller"],description:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",operationId:"getLegalFormSuggestion",parameters:[{name:"text",in:"query",description:"Show legal form names best matching this text",required:!1,schema:{type:"string"}},{name:"name",in:"query",description:"Filter legal entities by name",required:!1,schema:{type:"string"}},{name:"legalForm",in:"query",description:"Filter legal entities by legal form name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Filter legal entities by status official denotation",required:!1,schema:{type:"string"}},{name:"classification",in:"query",description:"Filter legal entities by classification denotation",required:!1,schema:{type:"string"}},{name:"administrativeArea",in:"query",description:"Filter business partners by administrative area name",required:!1,schema:{type:"string"}},{name:"postCode",in:"query",description:"Filter business partners by postcode or postcodes",required:!1,schema:{type:"string"}},{name:"locality",in:"query",description:"Filter business partners by locality full denotation",required:!1,schema:{type:"string"}},{name:"thoroughfare",in:"query",description:"Filter business partners by thoroughfare full denotation",required:!1,schema:{type:"string"}},{name:"premise",in:"query",description:"Filter business partners by premise full denotation",required:!1,schema:{type:"string"}},{name:"postalDeliveryPoint",in:"query",description:"Filter business partners by postal delivery point full denotation",required:!1,schema:{type:"string"}},{name:"siteName",in:"query",description:"Filter sites by name",required:!1,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Best matches found, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{suggestion:{type:"string"},relevancy:{type:"number",format:"float"}},description:"Shows a ranked suggestion based on a given search text"}}},description:"Paginated collection of results"}}}}},method:"get",path:"/api/catena/suggestions/legal-entities/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Find best matches for given text in business partner legal forms",description:{content:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",type:"text/plain"},url:{path:["api","catena","suggestions","legal-entities","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Show legal form names best matching this text",type:"text/plain"},key:"text",value:""},{disabled:!1,description:{content:"Filter legal entities by name",type:"text/plain"},key:"name",value:""},{disabled:!1,description:{content:"Filter legal entities by legal form name",type:"text/plain"},key:"legalForm",value:""},{disabled:!1,description:{content:"Filter legal entities by status official denotation",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Filter legal entities by classification denotation",type:"text/plain"},key:"classification",value:""},{disabled:!1,description:{content:"Filter business partners by administrative area name",type:"text/plain"},key:"administrativeArea",value:""},{disabled:!1,description:{content:"Filter business partners by postcode or postcodes",type:"text/plain"},key:"postCode",value:""},{disabled:!1,description:{content:"Filter business partners by locality full denotation",type:"text/plain"},key:"locality",value:""},{disabled:!1,description:{content:"Filter business partners by thoroughfare full denotation",type:"text/plain"},key:"thoroughfare",value:""},{disabled:!1,description:{content:"Filter business partners by premise full denotation",type:"text/plain"},key:"premise",value:""},{disabled:!1,description:{content:"Filter business partners by postal delivery point full denotation",type:"text/plain"},key:"postalDeliveryPoint",value:""},{disabled:!1,description:{content:"Filter sites by name",type:"text/plain"},key:"siteName",value:""},{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-legal-form-suggestion",id:"version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-form-suggestion",title:"Find best matches for given text in business partner legal forms",description:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-form-suggestion.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-form-suggestion",permalink:"/docs-kits/3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-form-suggestion",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"get-legal-form-suggestion",title:"Find best matches for given text in business partner legal forms",description:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",sidebar_label:"Find best matches for given text in business partner legal forms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["suggestion-controller"],description:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",operationId:"getLegalFormSuggestion",parameters:[{name:"text",in:"query",description:"Show legal form names best matching this text",required:!1,schema:{type:"string"}},{name:"name",in:"query",description:"Filter legal entities by name",required:!1,schema:{type:"string"}},{name:"legalForm",in:"query",description:"Filter legal entities by legal form name",required:!1,schema:{type:"string"}},{name:"status",in:"query",description:"Filter legal entities by status official denotation",required:!1,schema:{type:"string"}},{name:"classification",in:"query",description:"Filter legal entities by classification denotation",required:!1,schema:{type:"string"}},{name:"administrativeArea",in:"query",description:"Filter business partners by administrative area name",required:!1,schema:{type:"string"}},{name:"postCode",in:"query",description:"Filter business partners by postcode or postcodes",required:!1,schema:{type:"string"}},{name:"locality",in:"query",description:"Filter business partners by locality full denotation",required:!1,schema:{type:"string"}},{name:"thoroughfare",in:"query",description:"Filter business partners by thoroughfare full denotation",required:!1,schema:{type:"string"}},{name:"premise",in:"query",description:"Filter business partners by premise full denotation",required:!1,schema:{type:"string"}},{name:"postalDeliveryPoint",in:"query",description:"Filter business partners by postal delivery point full denotation",required:!1,schema:{type:"string"}},{name:"siteName",in:"query",description:"Filter sites by name",required:!1,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Best matches found, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{suggestion:{type:"string"},relevancy:{type:"number",format:"float"}},description:"Shows a ranked suggestion based on a given search text"}}},description:"Paginated collection of results"}}}}},method:"get",path:"/api/catena/suggestions/legal-entities/legal-forms",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Find best matches for given text in business partner legal forms",description:{content:"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set.",type:"text/plain"},url:{path:["api","catena","suggestions","legal-entities","legal-forms"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Show legal form names best matching this text",type:"text/plain"},key:"text",value:""},{disabled:!1,description:{content:"Filter legal entities by name",type:"text/plain"},key:"name",value:""},{disabled:!1,description:{content:"Filter legal entities by legal form name",type:"text/plain"},key:"legalForm",value:""},{disabled:!1,description:{content:"Filter legal entities by status official denotation",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Filter legal entities by classification denotation",type:"text/plain"},key:"classification",value:""},{disabled:!1,description:{content:"Filter business partners by administrative area name",type:"text/plain"},key:"administrativeArea",value:""},{disabled:!1,description:{content:"Filter business partners by postcode or postcodes",type:"text/plain"},key:"postCode",value:""},{disabled:!1,description:{content:"Filter business partners by locality full denotation",type:"text/plain"},key:"locality",value:""},{disabled:!1,description:{content:"Filter business partners by thoroughfare full denotation",type:"text/plain"},key:"thoroughfare",value:""},{disabled:!1,description:{content:"Filter business partners by premise full denotation",type:"text/plain"},key:"premise",value:""},{disabled:!1,description:{content:"Filter business partners by postal delivery point full denotation",type:"text/plain"},key:"postalDeliveryPoint",value:""},{disabled:!1,description:{content:"Filter sites by name",type:"text/plain"},key:"siteName",value:""},{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Find best matches for given text in business partner names",permalink:"/docs-kits/3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-name-suggestion"},next:{title:"Find best matches for given text in business partner classifications",permalink:"/docs-kits/3.1.0/kits/Business Partner Kit/Software Development View/Pool Api/get-classification-suggestion"}},g={},f=[{value:"Find best matches for given text in business partner legal forms",id:"find-best-matches-for-given-text-in-business-partner-legal-forms",level:2}],h={toc:f};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"find-best-matches-for-given-text-in-business-partner-legal-forms"},"Find best matches for given text in business partner legal forms"),(0,a.kt)("p",null,"Performs search on legal form names in order to find the best matches for the given text. By specifying further request parameters the set of business partners to search in can be restricted. If no text is given, the endpoint lists possible legal form names in the search set."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"text",in:"query",description:"Show legal form names best matching this text",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"name",in:"query",description:"Filter legal entities by name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"legalForm",in:"query",description:"Filter legal entities by legal form name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Filter legal entities by status official denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"classification",in:"query",description:"Filter legal entities by classification denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"administrativeArea",in:"query",description:"Filter business partners by administrative area name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"postCode",in:"query",description:"Filter business partners by postcode or postcodes",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"locality",in:"query",description:"Filter business partners by locality full denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"thoroughfare",in:"query",description:"Filter business partners by thoroughfare full denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"premise",in:"query",description:"Filter business partners by premise full denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"postalDeliveryPoint",in:"query",description:"Filter business partners by postal delivery point full denotation",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"siteName",in:"query",description:"Filter sites by name",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,a.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Best matches found, may be empty")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"suggestion",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"relevancy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "suggestion": "string",\n      "relevancy": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);