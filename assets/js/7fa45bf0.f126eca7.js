"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[4728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,b=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Exported object"},a="Object exported by distribution",l={unversionedId:"exported_object",id:"exported_object",title:"Exported object",description:"The JOD Philips Hue distribution, when executed, generate a new object's structure depending on devices currently connected to the Philips Hub.",source:"@site/3_references/2_jod_dists/jod_philips_hue/1_exported_object.mdx",sourceDirName:".",slug:"/exported_object",permalink:"/references/jod_dists/JOD_Philips_Hue/exported_object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Exported object"},sidebar:"jodDistsSidebar",previous:{title:"JOD Philips Hue References",permalink:"/references/jod_dists/JOD_Philips_Hue/"},next:{title:"Requirements",permalink:"/references/jod_dists/JOD_Philips_Hue/requirements"}},s={},c=[{value:"Object info",id:"object-info",level:2},{value:"Object structure",id:"object-structure",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"object-exported-by-distribution"},"Object exported by distribution"),(0,i.kt)("p",null,"The JOD Philips Hue distribution, when executed, generate a new object's structure depending on devices currently connected to the Philips Hub.",(0,i.kt)("br",null),"\nObject's specification are split in 2 groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#object-info"},"Object's info"),":",(0,i.kt)("br",null),"\nmodel, brand and other generic info about the object exported"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#object-structure"},"Object's structure"),":",(0,i.kt)("br",null),"\nexported object's features as a hierarchical list of status and actions")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"object-info"},"Object info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Model"),": Philips Hue Gateway"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Brand"),": Philips"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": The Philips Hue Gateway")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"object-structure"},"Object structure"),(0,i.kt)("p",null,"The object structure vary depending on the list of connected devices to the Philips Hue Hub at the JOD distribution startup."),(0,i.kt)("p",null,"On startup, this distribution create an authorized user (aka ",(0,i.kt)("a",{parentName:"p",href:"https://developers.meethue.com/develop/get-started-2/#so-lets-get-started"},"developer registration"),") and query the list of all connected lights to the configured Philips Hub.\nFor each light returned it create a pillar container with statuses and actions to interact with that light."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"[BooleanState]")," ",(0,i.kt)("strong",{parentName:"li"},"Online")," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},".state.reachable"),": True if light is connected to the Philips Hue Hub, false otherwise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"[BooleanAction]")," ",(0,i.kt)("strong",{parentName:"li"},"Switch")," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},".state.on"),": True if light is switched on, false otherwise."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"[RangeAction]")," ",(0,i.kt)("strong",{parentName:"li"},"Brightness")," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},".state.bri"),": the bringhness of the light (from 0 to 254)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"[RangeAction]")," ",(0,i.kt)("strong",{parentName:"li"},"Saturation")," (only for ",(0,i.kt)("inlineCode",{parentName:"li"},"Extended color light"),")",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},".state.sat"),": the saturation (intensity) of the colors (from 0 to 254)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"[RangeAction]")," ",(0,i.kt)("strong",{parentName:"li"},"Color Linear")," (only for ",(0,i.kt)("inlineCode",{parentName:"li"},"Extended color light"),")",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"li"},".state.hue"),": the \u201chue\u201d (a measure of color) to 10000 points (from 0 to 65535)")),(0,i.kt)("p",null,"More details on API calls and response parsing in the ",(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.philips_hue/src/master/dists/resources/scripts/hw/generateObjectStructure.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"scripts/hw/generateObjectStructure.sh"))," script and on the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.meethue.com/develop/get-started-2/#so-lets-get-started"},"Philips Hue Hub APIs Documentation"),"."))}d.isMDXComponent=!0}}]);