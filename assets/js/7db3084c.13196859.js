"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[1024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Communication"},i="JOD Agent Communication system",c={unversionedId:"jod/comm",id:"jod/comm",title:"Communication",description:"To connect  a JOSP Object to a JOSP EcoSystem, the JOD Agent use a complex communication system.",source:"@site/3_references/1_josp/1_jod/3_comm.mdx",sourceDirName:"1_jod",slug:"/jod/comm",permalink:"/references/josp/jod/comm",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Communication"},sidebar:"referencesSidebar",previous:{title:"Usage",permalink:"/references/josp/jod/usage"},next:{title:"Object's ID",permalink:"/references/josp/jod/specs/object_id"}},s={},p=[{value:"JCP Authentication",id:"jcp-authentication",level:2},{value:"JOD Gateway O2S Client",id:"jod-gateway-o2s-client",level:2},{value:"JOD Local Server",id:"jod-local-server",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jod-agent-communication-system"},"JOD Agent Communication system"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To connect  a ",(0,a.kt)("a",{parentName:"strong",href:"/docs/what/josp/object"},"JOSP Object")," to a ",(0,a.kt)("a",{parentName:"strong",href:"/docs/what/josp/ecosystem"},"JOSP EcoSystem"),", the JOD Agent use a complex communication system."),(0,a.kt)("br",null),"\nThis system is delegated to handle communication with JOSP Services (both ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/comm#direct"},"Direct")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/comm#cloud"},"Cloud"),"), manage JCP Authentication, but also to encrypt all tx/rx data."),(0,a.kt)("p",null,"Because a ",(0,a.kt)("strong",{parentName:"p"},"JOSP EcoSystem is composed by different 'pieces', a JOD Agent use multiple communication channels")," with different protocols to talks with all those 'pieces':"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to JCP APIs (via HTTP) to register and handle the JOSP object to the JCP"),(0,a.kt)("li",{parentName:"ul"},"to JCP Gateways (via JOSP) to communicate with JOSP Services via Cloud Communication"),(0,a.kt)("li",{parentName:"ul"},"from JOSP Services (via JOSP) to communicate with JOSP Services via Direct Communication")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/references/josp/jcp/microservices/apis"},"JCP APIs")," are a set of HTTP Methods exposed by the JCP platform and are used by JOD Agent to handle the JOSP Object on the JCP.\nThat include: the generation of an unique object's id, the supply of the JCP GWs access info, the storage of JOSP Object's events and status histories, etc...",(0,a.kt)("br",null),"\nMoreover JCP APIs requires ",(0,a.kt)("a",{parentName:"p",href:"#jcp-authentication"},"JOD Agent authentication")," via the JCP Auth service (an OAuth2 authorization server)."),(0,a.kt)("p",null,"To communicate with JOSP Services, the JOD Agent support both JOSP Communications types: ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/comm#direct"},"Direct")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/comm#cloud"},"Cloud"),"."),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"Cloud Communication"),", the JOD Agent open a connection to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/josp/jcp/microservices/gws"},"JCP Gateways"),".\nSo all JOSP Services (with at lest ",(0,a.kt)("a",{parentName:"p",href:"specs/permissions"},"STATUS permission")," on the JOSP Object represented by the JOD Agent) can see exposed JOSP Object and interact with it via Cloud communication.",(0,a.kt)("br",null),"\nThe JOD Agent use internal ",(0,a.kt)("a",{parentName:"p",href:"#jod-gateway-o2s-client"},"JOD Gateway O2S Client"),", that support ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/protocol"},"JOSP protocol"),", to connect with the JCP GW.\nYou can disable Cloud Communication setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"jod.comm.cloud.enabled")," property from ",(0,a.kt)("a",{parentName:"p",href:"specs/configs"},"JOD AGent Configs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," (it's ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," by default).\nSo the jod gateway client is not initialized at JOD Agent startup."),(0,a.kt)("p",null,"On the other side, for ",(0,a.kt)("strong",{parentName:"p"},"Direct Communication")," the JOD Agent startup a local server and publish it as mDNS/Bonjour service on local network.\nThat allow all JOSP Services on the same local network to discover and connect to the JOSP Object exposed by the JOD Agent.",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"#jod-local-server"},"Local JOD Server")," support the ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/josp/specs/protocol"},"JOSP protocol")," and is executed at JOD Agent startup.",(0,a.kt)("br",null),"\nYou can disable Direct Communication setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"jod.comm.local.enabled")," property from ",(0,a.kt)("a",{parentName:"p",href:"specs/configs"},"JOD AGent Configs")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," (it's ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," by default).\nSo the local server is not executed at JOD Agent startup."),(0,a.kt)("p",null,"With the intention of ",(0,a.kt)("strong",{parentName:"p"},"providing the highest level of security"),", both the ",(0,a.kt)("a",{parentName:"p",href:"#od-gateway-o2s-client"},"JOD Gateway O2S Client")," and the ",(0,a.kt)("a",{parentName:"p",href:"#jod-local-server"},"JOD Local Server")," use communication channels based on TCP and encrypted with SSL.\nFor Cloud communication, the SSL encryption use a pre-shared certificate on the JCP GWs server side; and a self-generated certificate as JOSP Object's identity.\nEach JOSP Object, register his self-generated certificate to the JCP when requires the JCP GW's access info to JCP APIs.\nOn other hand, the Direct communication require a pre-connection step where JOSP Object and Service share their own certificates.\nAfter that, they can open a direct encrypted communication."),(0,a.kt)("p",null,"Also the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/josp/jcp/public_jcp"},"Public JCP"),", with the aim to improve your security, expose only HTTPs endpoints and encrypt all communication with his own SSL certificate."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"jcp-authentication"},"JCP Authentication"),(0,a.kt)("p",null,"ToDo: Write JOD References / Communication # JCP Authentication"),(0,a.kt)("h2",{id:"jod-gateway-o2s-client"},"JOD Gateway O2S Client"),(0,a.kt)("p",null,"ToDo: Write JOD References / Communication # JCP Authentication"),(0,a.kt)("h2",{id:"jod-local-server"},"JOD Local Server"),(0,a.kt)("p",null,"ToDo: Write JOD References / Communication # JCP Authentication"))}u.isMDXComponent=!0}}]);