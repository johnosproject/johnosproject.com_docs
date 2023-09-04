"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[4730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>j});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,j=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(j,i(i({ref:t},l),{},{components:r})):n.createElement(j,i({ref:t},l))}));function j(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},i="JSL HTTP API implementation",c={unversionedId:"jcp/microservices/jslwb/http_api",id:"jcp/microservices/jslwb/http_api",title:"JSL HTTP API implementation",description:"ToDo: write ... like 3_references/jsl/java.md, javascript.md...",source:"@site/3_references/1_josp/3_jcp/2_microservices/5_jslwb/4_http_api.mdx",sourceDirName:"3_jcp/2_microservices/5_jslwb",slug:"/jcp/microservices/jslwb/http_api",permalink:"/references/josp/jcp/microservices/jslwb/http_api",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"referencesSidebar",previous:{title:"Usage",permalink:"/references/josp/jcp/microservices/jslwb/usage"},next:{title:"JCP FE Reference",permalink:"/references/josp/jcp/microservices/fe/"}},a={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jsl-http-api-implementation"},"JSL HTTP API implementation"),(0,o.kt)("p",null,"ToDo: write ... like 3_references/jsl/java.md, javascript.md..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    From /Home.md/Start withServices/John Service APIs\n    #### John Service APIs\n\n    The **[JCP JSL Web Bridge](3_references/jcp-jsl-wb/Home.md) service provides a set of HTTP APIs for IoT Services** implemented as web clients.\n\n    Because the JCP JSL Web Bridge component is provided by a John Cloud Platform, IoT services that use this APIs, always requires EcoSystems with the cloud component and can access only to Cloud Connected objects. So, JSL Web Bridge domain (and all API's urls) depends on which John EcoSystem to use.\n\n    The JCP JSL Web Bridge url for the Public JCP is the [jslwb.johnosproject.org](https://jslwb.johnosproject.org).\n\n    Before calling APIs methods you must initialize the JSL Session for current client:\n\n    1. ToDo: add jsl web bridge api init steps\n    1. Check JSL session status\n    1. Initialize JSL Session directly\\\n    or Initialize JSL Session in-directly\n    1. [List](2_guides/developers.md#list-objects) or [filter available objects](2_guides/developers.md#filter-objects)\n    1. [Get object's state value](2_guides/developers.md#get-state-value)\n    or [register a listener for updates](2_guides/developers.md#listen-for-state-updates)\n    1. [Send an action request to object](2_guides/developers.md#send-action-to-object)\n\n    For example:\n\n        configure john object remote destination\n        deploy jod dist on jod object remote destination\n            ToDo: update jod deploy on remote object shell commands\n\n    There is also an experimental **JavaScript client** for the JSL WebBridge\u2019s APIs. It\u2019s developed and used in the JCP Front End project. You can navigate to source code [here](https://bitbucket.org/johnosproject_shared/com.robypomper.josp/src/master/src/jcpFE/js/node/src).\n")))}u.isMDXComponent=!0}}]);