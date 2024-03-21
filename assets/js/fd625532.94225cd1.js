"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[44272],{29290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),n=a(94891),o=a(75190),l=a(47507),p=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"get-sharing-states",title:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",description:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",sidebar_label:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],operationId:"getSharingStates",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},{name:"lsaType",in:"query",description:"LSA Type",required:!1,schema:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]}},{name:"externalIds",in:"query",description:"External identifiers",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Page of sharing states",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{lsaType:{type:"string",description:"LSA Type",enum:["LEGAL_ENTITY","SITE","ADDRESS"]},externalId:{type:"string",description:"External identifier"},sharingStateType:{type:"string",description:"Type of sharing state",enum:["Pending","Success","Error"]},sharingErrorCode:{type:"string",description:"BusinessPartnerSharingError",enum:["SharingProcessError","SharingTimeout","BpnNotInPool"]},sharingErrorMessage:{type:"string",description:"Sharing error message (for error)"},bpn:{type:"string",description:"BPN (for success)"},sharingProcessStarted:{type:"string",description:"Sharing process started (not updated if null)",format:"date-time"}}}}},description:"Paginated collection of results"}}}}},description:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",method:"get",path:"/api/catena/sharing-state",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0-SNAPSHOT"},postman:{name:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",description:{type:"text/plain"},url:{path:["api","catena","sharing-state"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""},{disabled:!1,description:{content:"LSA Type",type:"text/plain"},key:"lsaType",value:""},{disabled:!1,description:{content:"External identifiers",type:"text/plain"},key:"externalIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",id:"version-23.09/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",title:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",description:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",permalink:"/docs-kits/23.09/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"get-sharing-states",title:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",description:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",sidebar_label:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],operationId:"getSharingStates",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},{name:"lsaType",in:"query",description:"LSA Type",required:!1,schema:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]}},{name:"externalIds",in:"query",description:"External identifiers",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Page of sharing states",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{type:"object",properties:{lsaType:{type:"string",description:"LSA Type",enum:["LEGAL_ENTITY","SITE","ADDRESS"]},externalId:{type:"string",description:"External identifier"},sharingStateType:{type:"string",description:"Type of sharing state",enum:["Pending","Success","Error"]},sharingErrorCode:{type:"string",description:"BusinessPartnerSharingError",enum:["SharingProcessError","SharingTimeout","BpnNotInPool"]},sharingErrorMessage:{type:"string",description:"Sharing error message (for error)"},bpn:{type:"string",description:"BPN (for success)"},sharingProcessStarted:{type:"string",description:"Sharing process started (not updated if null)",format:"date-time"}}}}},description:"Paginated collection of results"}}}}},description:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",method:"get",path:"/api/catena/sharing-state",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0-SNAPSHOT"},postman:{name:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",description:{type:"text/plain"},url:{path:["api","catena","sharing-state"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""},{disabled:!1,description:{content:"LSA Type",type:"text/plain"},key:"lsaType",value:""},{disabled:!1,description:{content:"External identifiers",type:"text/plain"},key:"externalIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"sharing-state-controller",permalink:"/docs-kits/23.09/category/kits/Business Partner Kit/Software Development View/Gate Api/sharing-state-controller"},next:{title:"Insert/update sharing state (including error info and BPN) for business partner with LSA type and external ID",permalink:"/docs-kits/23.09/kits/Business Partner Kit/Software Development View/Gate Api/upsert-sharing-state"}},y={},h=[{value:"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID",id:"get-sharing-states-including-error-info-and-bpn-for-business-partners-optionally-filtered-by-lsa-type-and-external-id",level:2}],f={toc:h};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-sharing-states-including-error-info-and-bpn-for-business-partners-optionally-filtered-by-lsa-type-and-external-id"},"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID"),(0,i.kt)("p",null,"Get sharing states (including error info and BPN) for business partners, optionally filtered by LSA type and external ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"lsaType",in:"query",description:"LSA Type",required:!1,schema:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"externalIds",in:"query",description:"External identifiers",required:!1,schema:{type:"array",items:{type:"string"}}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Page of sharing states")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Collection of results in the page")),(0,i.kt)(p.Z,{collapsible:!1,name:"lsaType",required:!1,deprecated:void 0,schemaDescription:"LSA Type",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:"External identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sharingStateType",required:!1,deprecated:void 0,schemaDescription:"Type of sharing state",schemaName:"string",qualifierMessage:"**Possible values:** [`Pending`, `Success`, `Error`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sharingErrorCode",required:!1,deprecated:void 0,schemaDescription:"BusinessPartnerSharingError",schemaName:"string",qualifierMessage:"**Possible values:** [`SharingProcessError`, `SharingTimeout`, `BpnNotInPool`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sharingErrorMessage",required:!1,deprecated:void 0,schemaDescription:"Sharing error message (for error)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:"BPN (for success)",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"sharingProcessStarted",required:!1,deprecated:void 0,schemaDescription:"Sharing process started (not updated if null)",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "lsaType": "LEGAL_ENTITY",\n      "externalId": "string",\n      "sharingStateType": "Pending",\n      "sharingErrorCode": "SharingProcessError",\n      "sharingErrorMessage": "string",\n      "bpn": "string",\n      "sharingProcessStarted": "2023-06-26"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);