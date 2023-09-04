"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[8685],{64856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var o=n(87462),i=(n(67294),n(3905)),a=n(26113);const c={title:"Communication"},s="JOSP Communication",r={unversionedId:"josp/specs/comm",id:"josp/specs/comm",title:"Communication",description:"<WhatIntro",source:"@site/1_what/2_josp/30_specs/32_comm.mdx",sourceDirName:"2_josp/30_specs",slug:"/josp/specs/comm",permalink:"/what/josp/specs/comm",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Communication"},sidebar:"docsSidebar",previous:{title:"Protocol",permalink:"/what/josp/specs/protocol"},next:{title:"Permissions",permalink:"/what/josp/specs/permissions"}},l={},h=[{value:"Direct",id:"direct",level:2},{value:"Cloud",id:"cloud",level:2}],p={toc:h},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"josp-communication"},"JOSP Communication"),(0,i.kt)(a.ZP,{logo_path:"/docs/img/logo/logo_250.png",mdxType:"WhatIntro"},(0,i.kt)("span",{style:{textAlign:"center"}},(0,i.kt)("p",null,"A JOSP EcoSystem, with the aim to always provide the best connection, can handle different type of communication between JOSP Objects and JOSP Services."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"By default, each JOSP Objects create a local server to allow local JOSP Services to ",(0,i.kt)("strong",{parentName:"p"},"connect directly to the object"),".\nAt the same time, both JOSP Objects and Services, on their startup, open a connection to the JCP Gateway.\nWith this connection objects and services can ",(0,i.kt)("strong",{parentName:"p"},"communicate together via Cloud"),"."),(0,i.kt)("p",null,"When an internet connection is not available, or even when there is no network infrastructure, ",(0,i.kt)("strong",{parentName:"p"},"objects can start working as an Access Point"),".\nThen other devices like smartphones or notebook (with JOSP Services installed) can connect to the Access Point.\nNow installed services can reach the JOSP Object that emit the Access Point like in a direct communication because they are effectively on the same network. "),(0,i.kt)("p",null,"When both communications are available between an object and a service, the JOSP Objects send statuses updates via both communication channels (to decrease the probability of packet loss).\nOn the other side, the JOSP Service send his requests depending on permission level.\nService use the communication channel with the highest access level on object.\nIf both communication have the same access level, then the direct communication is preferred."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"All communication are encrypted with SSL certificates.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"direct"},"Direct"),(0,i.kt)("p",null,"Each JOSP Object, by default, at his startup initialize a local server and publish it to the local network via ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multicast_DNS"},"mDNS"),"/",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/bonjour/"},"Bonjour")," protocol.",(0,i.kt)("br",null),"\nOn the other side, each JOSP Service, by default, at his initialization start a mDNS/Bonjour listener for JOSP Objects local servers."),(0,i.kt)("p",null,"When a ",(0,i.kt)("strong",{parentName:"p"},"JOSP Service discover a JOSP Object")," on a local network, open a new connection.\nFor each new local connection objects and service share their public certificate, if they haven't already.\nAfter that, they can open an encrypted communication channel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Immediately, the object send his presentations messages")," (object's info and structure) as long as the service/user pair has the adequate access level.\nThe service also send his presentation (service and user ids) to the object on opening the connection.\nThen the object respond to the service presentation with a message containing the permission level granted to that service/user pair."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"cloud"},"Cloud"),(0,i.kt)("p",null,"Both JOSP Objects and JOSP Services, by default, at their startup/initialization open a connection to the JCP Gateway.\nThis connection is encrypted using the JCP' SSL certificate (already know from the JOSP object because included in the JOD library) and a self-signed certificate from the object or from the service."),(0,i.kt)("p",null,"Objects and services during their startup also generate their own self-signed SSL Certificate.\nBefore connect to the JCP Gateway they must ask for gateway address and port to the JCP APIs.\nThis API method accept as param, the public key of the self-signed certificate from the connecting object/service.\nSo the API can register the object/service's certificate in the JCP.\nThen, when the object/service connect to the gateway, it already knows his public SSL certificate."),(0,i.kt)("p",null,"In a JCP Gateway connection, this additional step (via the JCP API) not only permits encrypt the communication but also allows to check the objects and service(/user) identities across cloud communications."))}m.isMDXComponent=!0},26113:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(87462),i=(n(67294),n(3905)),a=n(41181);const c={toc:[]},s="wrapper";function r(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.ZP,{container:!0,spacing:4,mdxType:"Grid"},(0,i.kt)(a.ZP,{item:!0,xs:2,mdxType:"Grid"},(0,i.kt)("img",{src:n.logo_path,width:"200"})),(0,i.kt)(a.ZP,{item:!0,xs:10,mdxType:"Grid"},(0,i.kt)("div",null,n.children))))}r.isMDXComponent=!0}}]);