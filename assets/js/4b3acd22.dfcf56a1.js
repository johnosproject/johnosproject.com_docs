"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[27],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22771:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={title:"Container"},i="JOD Pillar Container",l={unversionedId:"jod/specs/pillars/container",id:"jod/specs/pillars/container",title:"Container",description:"Container pillar can contain only other Pillars. This pillar allow Makers to create hierarchical object's structures.",source:"@site/3_references/1_josp/1_jod/4_specs/5_pillars/1_container.mdx",sourceDirName:"1_jod/4_specs/5_pillars",slug:"/jod/specs/pillars/container",permalink:"/references/josp/jod/specs/pillars/container",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Container"},sidebar:"referencesSidebar",previous:{title:"JOD Pillars",permalink:"/references/josp/jod/specs/pillars/"},next:{title:"Boolean",permalink:"/references/josp/jod/specs/pillars/boolean"}},s={},c=[{value:"Examples:",id:"examples",level:2}],p={toc:c},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jod-pillar-container"},"JOD Pillar Container"),(0,a.kt)("p",null,"Container pillar can contain only other Pillars. This pillar allow Makers to create hierarchical object's structures."),(0,a.kt)("p",null,"A container require just 3 properties: his name, his type (",(0,a.kt)("inlineCode",{parentName:"p"},"JODContainer"),") and the list of contained pillars.",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"JODContainers"),"'s name is defined by the element name, so in the following example you define a container called 'MainLamp'."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="struct.json: container example',title:'"struct.json:',container:!0,example:!0},'    // ...\n    "MainLamp" : {\n        "type": "JODContainer",\n        "contains": {\n            // Pillars list or other container\n        }\n    },\n    // ...\n')))}f.isMDXComponent=!0}}]);