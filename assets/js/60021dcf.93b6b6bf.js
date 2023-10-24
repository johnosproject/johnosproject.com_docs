"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[6181],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return o?n.createElement(h,s(s({ref:t},u),{},{components:o})):n.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},26776:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"EcoSystem"},s="IoT EcoSystem",i={unversionedId:"iot/ecosystem",id:"iot/ecosystem",title:"EcoSystem",description:"The IoT EcoSystem is the entire set of software and hardware required to provide IoT Solutions.",source:"@site/1_what/1_iot/1_ecosystem.mdx",sourceDirName:"1_iot",slug:"/iot/ecosystem",permalink:"/what/iot/ecosystem",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"EcoSystem"},sidebar:"docsSidebar",previous:{title:"What is?",permalink:"/what/"},next:{title:"Solutions",permalink:"/what/iot/solution"}},c={},l=[{value:"Choosing an IoT EcoSystem",id:"choosing-an-iot-ecosystem",level:2},{value:"The IoT Infrastructure",id:"the-iot-infrastructure",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iot-ecosystem"},"IoT EcoSystem"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The IoT EcoSystem is the entire set of software and hardware required to provide ",(0,r.kt)("a",{parentName:"strong",href:"solution"},"IoT Solutions"),".")),(0,r.kt)("p",null,"An IoT EcoSystem can come in many forms."),(0,r.kt)("p",null,"The most basic IoT EcoSystem can be composed by a connected ",(0,r.kt)("a",{parentName:"p",href:"object"},"object")," and a ",(0,r.kt)("a",{parentName:"p",href:"service"},"software")," that communicate with it.\nFor example each Bluetooth communication create what we can call a short-range IoT EcoSystem.\nAnother example is when a mobile application interact with a smart lamp via home's router.",(0,r.kt)("br",null),"\nIn all this case there are only a single rvice and a single object to interact with."),(0,r.kt)("p",null,"Today ",(0,r.kt)("strong",{parentName:"p"},"business's requirements can easily grow every IoT EcoSystem")," in terms of connected objects or software.",(0,r.kt)("br",null),"\nIoT EcoSystems can be composed by hundreds to millions of connected objects.\nThose connected objects can run different firmware version or represent different objects/models.",(0,r.kt)("br",null),"\nThen, a dozen of software with multiple purposes, would interact and collect data from those objects.\nThere are the end user and maintainer's mobile apps, remote management dashboards, analytics software for usage/billing reports, etc..."),(0,r.kt)("p",null,"Unfortunately ",(0,r.kt)("strong",{parentName:"p"},"create the right infrastructure for our IoT EcoSystem is a pain"),".",(0,r.kt)("br",null),"\nOn a hi-level design, every IoT Solution can be easily designed by identifying its key components like ",(0,r.kt)("a",{parentName:"p",href:"object"},"objects")," and ",(0,r.kt)("a",{parentName:"p",href:"service"},"services")," but also ",(0,r.kt)("a",{parentName:"p",href:"actor"},"actors")," and defining how they interact.\nBut, each IoT Solution require and underling EcoSystem and his IT Infrastructure.\nAn IT infrastructure hard to maintain and scale to new business challenges."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"choosing-an-iot-ecosystem"},"Choosing an IoT EcoSystem"),(0,r.kt)("p",null,"To be ready for today's challenges, an IoT EcoSystem must be flexible and provide at least some basic features."),(0,r.kt)("p",null,"An IoT EcoSystem can be manually composed by setup all infrastructure components (objects connectors, cloud services, databases, access control system...).\nThis is a not recommend solution.",(0,r.kt)("br",null),"\nOn the market there are many IoT platforms that provide different types of IoT EcoSystem.\nThe John O.S. Project would provide an advanced ",(0,r.kt)("a",{parentName:"p",href:"../josp/ecosystem"},"IoT EcoSystem"),", that can handle multiple IoT Solutions with the minimum effort."),(0,r.kt)("p",null,"First, when we design an IoT solution, and then when we define the IoT EcoSystem to use, we must check for the ",(0,r.kt)("strong",{parentName:"p"},"infrastructure scalability"),".\nOn choosing the tools to use for our IoT solutions, like cloud services or other IoT platforms, we must check that those tools can be easily scaled to our needs.\nIn the worst cases we will need to re-structure our IoT EcoSystem with the risk to lose connectivity/compatibility with older objects or services."),(0,r.kt)("p",null,"Many communication protocols are old and have not been designed with ",(0,r.kt)("strong",{parentName:"p"},"the right level of security"),".\nThis could open a breach in our systems and allow unauthorized access to object's communications.\nDepending on the communication channels (local network, public internet, shared connections) used by your IoT Solution, you must encrypt communications."),(0,r.kt)("p",null,"It's common for IoT Solutions split users by their role in the solution.\nEach role with different purposes and tools.",(0,r.kt)("br",null),"\nFor example, a common role is the end user or the object's owner.\nThis user normally would access to his connected object via a mobile app.",(0,r.kt)("br",null),"\nAnother common role is the maintainer, the user who intervenes to install or repair the object.\nThe maintainer may want to check the object remotely via a web dashboard, and then move locally and interact with the object from a tablet or AR device.",(0,r.kt)("br",null),"\nThose roles, like many other, requires ",(0,r.kt)("strong",{parentName:"p"},"an evolute access control system"),".\nAn access control system that allow you to set which user can access which object.",(0,r.kt)("br",null),"\nSometimes you'll require even more detailed conditions on your access control system.\nFor example the user role can't access to his object using the application designed for the maintainer.\nOr even the maintainer should access to user's objects only for a specific period."),(0,r.kt)("p",null,"Your IoT EcoSystem should allow ",(0,r.kt)("strong",{parentName:"p"},"interoperable components"),".\nThat means you must be free to choose between different vendors for both objects and services involved in your solution.\nIf you are using a provider's specific technology (for example to connect his objects to your software) you'll always depend on that particular provider."),(0,r.kt)("p",null,"Commonly objects are placed in a home, in an office or in a factory.\nSometimes connected objects are located remotely and with a poor network coverage.\nOther times, objects are connected via mobile or IoT networks (NBIoT or SigFox) .\nRegardless of our IoT Solution, ",(0,r.kt)("strong",{parentName:"p"},"objects and services must be able to communicate whenever possible"),".",(0,r.kt)("br",null),"\nTo satisfy this requirements IoT EcoSystems should provide multiple way for services to interact with connected objects.\nDepending on your solution needs, it should be able to provide a connectivity between objects and services locally to improve performances, via cloud to allow users control their objects remotely, with a point-to-point bridge when no network infrastructure is available, etc..."),(0,r.kt)("h2",{id:"the-iot-infrastructure"},"The IoT Infrastructure"),(0,r.kt)("p",null,"An IoT EcoSystem allow the communication between connected objects and at least one software.",(0,r.kt)("br",null),"\nThe IoT Stack is the list of all software involved to this communication."),(0,r.kt)("p",null,"Because IoT EcoSystem must support all business requirements, the IoT Stack includes multiple levels (connectivity, encryption, routing, access control, presentation, commands) and quickly becomes really complex to manage.\nAll those levels involved in the object-service communication are handled from different tools."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("strong",{parentName:"p"},"common tools are cloud services")," like APIs to register and handle object connectivity, DataLakes to store time-series data from objects, AAA services for users and roles definitions, etc..."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Also connected objects are part of the ecosystem infrastructure"),". Both object's software and hardware.\nThe hardware (communication module) determinate how object can be reached by services.\nThe software (firmware) expose object's capabilities to services."),(0,r.kt)("p",null,"Finally, if a software would interact with a connected object must be able to speak object's language.",(0,r.kt)("br",null),"\nIn other words the software must include a library (or implement itself a module) to communicate with the object.\nThis SW library (or module) and ",(0,r.kt)("strong",{parentName:"p"},"the protocol/standard supported are also considered as part of the IoT Infrastructure"),"."))}p.isMDXComponent=!0}}]);