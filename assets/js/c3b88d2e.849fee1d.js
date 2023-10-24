"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[5124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"JOD Shell"},l="JOD Shell",i={unversionedId:"jod/specs/shell",id:"jod/specs/shell",title:"JOD Shell",description:"The JOD Shell is the interactive command line provided with the JOD Agent.",source:"@site/3_references/1_josp/1_jod/4_specs/7_shell.mdx",sourceDirName:"1_jod/4_specs",slug:"/jod/specs/shell",permalink:"/references/josp/jod/specs/shell",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"JOD Shell"},sidebar:"referencesSidebar",previous:{title:"Puller UnixShell",permalink:"/references/josp/jod/specs/workers/puller_unixshell"},next:{title:"Other Files",permalink:"/references/josp/jod/specs/files"}},s={},c=[{value:"JOD",id:"jod",level:2},{value:"<code>info</code>",id:"info",level:3},{value:"<code>info-obj</code>",id:"info-obj",level:3},{value:"<code>info-user</code>",id:"info-user",level:3},{value:"<code>jod-state</code>",id:"jod-state",level:3},{value:"<code>jod-start</code>",id:"jod-start",level:3},{value:"<code>jod-stop</code>",id:"jod-stop",level:3},{value:"<code>print-java-versions</code>",id:"print-java-versions",level:3},{value:"<code>info-set-object-name (new_name)</code>",id:"info-set-object-name-new_name",level:3},{value:"JCP",id:"jcp",level:2},{value:"<code>jcp-client-status</code>",id:"jcp-client-status",level:3},{value:"<code>jcp-client-connect</code>",id:"jcp-client-connect",level:3},{value:"<code>jcp-client-disconnect</code>",id:"jcp-client-disconnect",level:3},{value:"Communication",id:"communication",level:2},{value:"<code>comm-local-status</code>",id:"comm-local-status",level:3},{value:"<code>comm-local-start</code>",id:"comm-local-start",level:3},{value:"<code>comm-local-stop</code>",id:"comm-local-stop",level:3},{value:"<code>comm-print-all-local-connections</code>",id:"comm-print-all-local-connections",level:3},{value:"<code>comm-cloud-status</code>",id:"comm-cloud-status",level:3},{value:"<code>comm-cloud-connect</code>",id:"comm-cloud-connect",level:3},{value:"<code>comm-cloud-disconnect</code>",id:"comm-cloud-disconnect",level:3},{value:"Permissions",id:"permissions",level:2},{value:"<code>permissions-list</code>",id:"permissions-list",level:3},{value:"<code>permission-add (srvId, usrId, type, connection)</code>",id:"permission-add-srvid-usrid-type-connection",level:3},{value:"<code>permission-update (permId, srvId, usrId, type, connection)</code>",id:"permission-update-permid-srvid-usrid-type-connection",level:3},{value:"<code>permission-remove (permId)</code>",id:"permission-remove-permid",level:3},{value:"<code>permission-owner-set (usrId)</code>",id:"permission-owner-set-usrid",level:3},{value:"<code>permission-owner-reset</code>",id:"permission-owner-reset",level:3},{value:"Structure",id:"structure",level:2},{value:"<code>obj-tree</code>",id:"obj-tree",level:3},{value:"<code>obj-component (compPath)</code>",id:"obj-component-comppath",level:3},{value:"<code>obj-component</code>",id:"obj-component",level:3},{value:"<code>obj-component (compPath)</code>",id:"obj-component-comppath-1",level:3},{value:"Workers",id:"workers",level:2},{value:"TODO",id:"todo",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jod-shell"},"JOD Shell"),(0,r.kt)("p",null,"The JOD Shell is the interactive command line provided with the JOD Agent."),(0,r.kt)("p",null,"It's initialized only when the JOD Agent is executed as foreground command and allow user to manage internal JOD instance."),(0,r.kt)("p",null,"JOD Shell provide different commands. Here are listed all available commands grouped by JOD Sub System they interact with."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jod"},"JOD"),": object's info and states"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jcp"},"JCP"),": JOSP Cloud connection management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#communication"},"Communication"),": direct and cloud communications management"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#permissions"},"Permissions"),": list and edit object's permissions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structure"},"Structure"),": object's structure queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#workers"},"Workers"),": workers testing commands")),(0,r.kt)("p",null,"A full list of available JOD Shell commands can be printed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"?list")," command.\nType the ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," command, to exit from the JOD Shell and to shutdown the JOD Agent."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"jod"},"JOD"),(0,r.kt)("h3",{id:"info"},(0,r.kt)("inlineCode",{parentName:"h3"},"info")),(0,r.kt)("p",null,"Print current object's info like object's id, name, model, brand... and the owner id."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OBJECT'S INFO\n  ObjId . . . . . AAQNQ-AENAM-XCQUM\n  ObjName . . . . Gooseberry_44\n  Model . . . . . JOD Test Object 2.0\n  Brand . . . . . John OS\n  Descr . . . . . Object to use in design testing\nUSER'S INFO\n  OwnerId . . . . f89b2e21-d3cb-41d2-8349-ef2d5e247f37\n")),(0,r.kt)("h3",{id:"info-obj"},(0,r.kt)("inlineCode",{parentName:"h3"},"info-obj")),(0,r.kt)("p",null,"Print current object's info like object's id, name, model, brand..."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OBJECT'S INFO\n  ObjId . . . . . AAQNQ-AENAM-XCQUM\n  ObjName . . . . Gooseberry_44\n  Model . . . . . JOD Test Object 2.0\n  Brand . . . . . John OS\n  Descr . . . . . Object to use in design testing\n")),(0,r.kt)("h3",{id:"info-user"},(0,r.kt)("inlineCode",{parentName:"h3"},"info-user")),(0,r.kt)("p",null,"Print current object owner's info like owner id."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"USER'S INFO\n  OwnerId . . . . f89b2e21-d3cb-41d2-8349-ef2d5e247f37\n")),(0,r.kt)("h3",{id:"jod-state"},(0,r.kt)("inlineCode",{parentName:"h3"},"jod-state")),(0,r.kt)("p",null,"Print current JOD state. ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," if it's running, ",(0,r.kt)("inlineCode",{parentName:"p"},"STOP")," if not."),(0,r.kt)("h3",{id:"jod-start"},(0,r.kt)("inlineCode",{parentName:"h3"},"jod-start")),(0,r.kt)("p",null,"Start internal JOD instance.",(0,r.kt)("br",null),"\nThe internal instance is started by default on each JOD Agent startup."),(0,r.kt)("p",null,"You can check the internal JOD instance state using the ",(0,r.kt)("a",{parentName:"p",href:"#jod-state"},(0,r.kt)("inlineCode",{parentName:"a"},"jod-state")," command"),"."),(0,r.kt)("h3",{id:"jod-stop"},(0,r.kt)("inlineCode",{parentName:"h3"},"jod-stop")),(0,r.kt)("p",null,"Stop internal JOD instance.",(0,r.kt)("br",null),"\nThe internal instance can be stopped and the re-started with the ",(0,r.kt)("a",{parentName:"p",href:"#jod-start"},(0,r.kt)("inlineCode",{parentName:"a"},"jod-start")," command"),"."),(0,r.kt)("p",null,"You can check the internal JOD instance state using the ",(0,r.kt)("a",{parentName:"p",href:"#jod-state"},(0,r.kt)("inlineCode",{parentName:"a"},"jod-state")," command"),"."),(0,r.kt)("h3",{id:"print-java-versions"},(0,r.kt)("inlineCode",{parentName:"h3"},"print-java-versions")),(0,r.kt)("p",null,"Print working environment info like java path and version, environment vars, jod version..."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"John Object Daemon versions:   2.2.2-DEV-202110111459\n+-----------------\n| Current dir:     /Users/robertopompermaier/Workspaces/josp.com/com.robypomper.josp/envs/runnables/jod/JOD\n+-----------------\n| Java Version:    1.8(1.8.0_262)\n| Java VM Version: 1.8\n| Java Runtime:    OpenJDK Runtime Environment\n| Java Home:       /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/jre\n| Java Home (ENV): /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home\n| Java Vendor:     AdoptOpenJDK\n| Java Libs Path:  /Users/user/Library/Java/Extensions:/Library/Java/Extensions:/Network/Library/Java/Extensions:/System/Library/Java/Extensions:/usr/lib/java:.\n| Java ClassPath:  /Users/user/Workspaces/josp.com/com.robypomper.josp/build/classes/java/jospJOD:/Users/robertopompermaier/Workspaces/josp.com/com.robypomper.josp/build/resources/jospJOD:/Users/robertopompermaier/.m2/repository/com/robypomper/josp/jospCommons/2.2.2-DEV/jospCommons-2.2.2-DEV.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/commons-cli/commons-cli/1.4/c51c00206bb913cd8612b24abd9fa98ae89719b1/commons-cli-1.4.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.googlecode.clichemaven/cliche/110413/6b857d46798400f1f19f5fe7c4f6de4c5d16ede0/cliche-110413.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/net.sourceforge.htmlcleaner/htmlcleaner/2.24/3e193655071befbf2a1ed5efb7d2d05deb302325/htmlcleaner-2.24.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.jayway.jsonpath/json-path/2.4.0/765a4401ceb2dc8d40553c2075eb80a8fa35c2ae/json-path-2.4.0.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.apache.logging.log4j/log4j-slf4j-impl/2.13.1/79e92fe5b6c30cc4c8a52893378d4d130e298c65/log4j-slf4j-impl-2.13.1.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.apache.logging.log4j/log4j-core/2.13.1/533f6ae0bb0ce091493f2eeab0c1df4327e46ef1/log4j-core-2.13.1.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.apache.logging.log4j/log4j-api/2.13.1/cc670f92dc77bbf4540904c3fa211b997cba00d8/log4j-api-2.13.1.jar:/Users/robertopompermaier/.m2/repository/com/robypomper/josp/jospAPIs/2.2.2-DEV/jospAPIs-2.2.2-DEV.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.yaml/snakeyaml/1.25/8b6e01ef661d8378ae6dd7b511a7f2a33fae1421/snakeyaml-1.25.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.github.scribejava/scribejava-apis/6.9.0/a374c7a36533e58e53b42b584a8b3751ab1e13c4/scribejava-apis-6.9.0.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.github.scribejava/scribejava-core/6.9.0/ed761f450d8382f75787e8fee9ae52e7ec768747/scribejava-core-6.9.0.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.jmdns/jmdns/3.5.5/a156f2da3a29df61e2cab6f4d47c22f42114e2d/jmdns-3.5.5.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.jdom/jdom2/2.0.6/6f14738ec2e9dd0011e343717fa624a10f8aab64/jdom2-2.0.6.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/net.minidev/json-smart/2.3/7396407491352ce4fa30de92efb158adb76b5b/json-smart-2.3.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.slf4j/slf4j-api/1.7.30/b5a4b6d16ab13e34a88fae84c35cd5d68cac922c/slf4j-api-1.7.30.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.fasterxml.jackson.core/jackson-databind/2.10.5.1/7ff756c3af1fe95cb3cddba9158fc3289ca06387/jackson-databind-2.10.5.1.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.fasterxml.jackson.core/jackson-annotations/2.10.5/33298de8da86f92f8ccd61ced214d3b16f8c531e/jackson-annotations-2.10.5.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/net.minidev/accessors-smart/1.2/c592b500269bfde36096641b01238a8350f8aa31/accessors-smart-1.2.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/com.fasterxml.jackson.core/jackson-core/2.10.5/db2ba27938de7f2d478a97d6abcdaa17cbbd3cea/jackson-core-2.10.5.jar:/Users/robertopompermaier/.gradle/caches/modules-2/files-2.1/org.ow2.asm/asm/5.0.4/da08b8cce7bbf903602a25a3a163ae252435795/asm-5.0.4.jar\n+-----------------\n| OS Name:         Mac OS X\n| OS Version:      10.16\n| Current user:    user\n| Dflt language:   it\n| Dflt encoding:   UTF-8\n| File encoding:   UTF-8\n| Env Vars:        PATH: /Users/user/Workspaces/java jdks/google-cloud-sdk/bin:/opt/local/bin:/opt/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin\n                   HOME: /Users/user\n                   ...other env vars...\n+-----------------\n| Working dir:     /Users/robertopompermaier/Workspaces/josp.com/com.robypomper.josp/envs/runnables/jod/JOD\n+-----------------\n")),(0,r.kt)("h3",{id:"info-set-object-name-new_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"info-set-object-name (new_name)")),(0,r.kt)("p",null,"Update current object's name."),(0,r.kt)("p",null,"You can set any valid string as object's name, also including space and special chars."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JOD> info-set-object-name "Entrance Lamp 1"\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"jcp"},"JCP"),(0,r.kt)("h3",{id:"jcp-client-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"jcp-client-status")),(0,r.kt)("p",null,"Print JCP connection state. ",(0,r.kt)("inlineCode",{parentName:"p"},"JCP Client is connect.")," if current JOD instance is connected to the JCP, ",(0,r.kt)("inlineCode",{parentName:"p"},"JCP Client is NOT connect.")," if not."),(0,r.kt)("h3",{id:"jcp-client-connect"},(0,r.kt)("inlineCode",{parentName:"h3"},"jcp-client-connect")),(0,r.kt)("p",null,"Connect internal JOD instance to the JCP.",(0,r.kt)("br",null),"\nAt JOD Agent startup, the JCP connection is initialized only if the property ",(0,r.kt)("inlineCode",{parentName:"p"},"jcp.connect")," from ",(0,r.kt)("a",{parentName:"p",href:"configs"},"JOD Agent configs")," is set to 'true'."),(0,r.kt)("p",null,"You can check the JCP connection state using the ",(0,r.kt)("a",{parentName:"p",href:"#jcp-client-status"},(0,r.kt)("inlineCode",{parentName:"a"},"jcp-client-status")," command"),"."),(0,r.kt)("h3",{id:"jcp-client-disconnect"},(0,r.kt)("inlineCode",{parentName:"h3"},"jcp-client-disconnect")),(0,r.kt)("p",null,"Disconnect internal JOD instance from JCP.",(0,r.kt)("br",null),"\nThe internal instance can be disconnected and the re-connected with the ",(0,r.kt)("a",{parentName:"p",href:"#jcp-client-connect"},(0,r.kt)("inlineCode",{parentName:"a"},"jcp-client-connect")," command"),"."),(0,r.kt)("p",null,"You can check the JCP connection state using the ",(0,r.kt)("a",{parentName:"p",href:"#jcp-client-status"},(0,r.kt)("inlineCode",{parentName:"a"},"jcp-client-status")," command"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"communication"},"Communication"),(0,r.kt)("h3",{id:"comm-local-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-local-status")),(0,r.kt)("p",null,"Print the status of the JOD Local Server. Prints 'Local communication discovery system is true' if server is running, '' otherwise."),(0,r.kt)("h3",{id:"comm-local-start"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-local-start")),(0,r.kt)("p",null,"Start internal JOD Local Server.",(0,r.kt)("br",null),"\nAt JOD Agent startup, the local server is started only if the property ",(0,r.kt)("inlineCode",{parentName:"p"},"jod.comm.local.enabled")," from ",(0,r.kt)("a",{parentName:"p",href:"configs"},"JOD Agent configs")," is set to 'true'."),(0,r.kt)("p",null,"You can check the JOD Local Server state using the ",(0,r.kt)("a",{parentName:"p",href:"#comm-local-status"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-local-status")," command"),"."),(0,r.kt)("h3",{id:"comm-local-stop"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-local-stop")),(0,r.kt)("p",null,"Disconnect all Direct JOSP Services clients, and stop internal JOD Local Server.",(0,r.kt)("br",null),"\nThe local server can be stopped and the re-started with the ",(0,r.kt)("a",{parentName:"p",href:"#comm-local-start"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-local-start")," command"),"."),(0,r.kt)("p",null,"You can check the JOD Local Server state using the ",(0,r.kt)("a",{parentName:"p",href:"#comm-local-status"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-local-status")," command"),"."),(0,r.kt)("h3",{id:"comm-print-all-local-connections"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-print-all-local-connections")),(0,r.kt)("p",null,"Print a list of all Direct JOSP Service clients are connected to JOD Local Server."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LOCAL CONNECTIONS LIST\n- localhost/127.0.0.1:54284      (srv: test-client-srv; usr: f89b2e21-d3cb-41d2-8349-ef2d5e247f37; status: connected; local: /127.0.0.1:1234)\n")),(0,r.kt)("h3",{id:"comm-cloud-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-cloud-status")),(0,r.kt)("p",null,"Print the status of the JOD Local Server. Prints 'Local communication discovery system is true' if server is running, '' otherwise."),(0,r.kt)("h3",{id:"comm-cloud-connect"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-cloud-connect")),(0,r.kt)("p",null,"Connect JOD Gateway O2S Client to JCP if available.",(0,r.kt)("br",null),"\nAt JOD Agent startup, the gateway client is initialized only if the property ",(0,r.kt)("inlineCode",{parentName:"p"},"jod.comm.cloud.enabled")," from ",(0,r.kt)("a",{parentName:"p",href:"configs"},"JOD Agent configs")," is set to 'true'."),(0,r.kt)("p",null,"You can check the JOD Gateway O2S Client state using the ",(0,r.kt)("a",{parentName:"p",href:"#comm-cloud-status"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-cloud-status")," command"),"."),(0,r.kt)("h3",{id:"comm-cloud-disconnect"},(0,r.kt)("inlineCode",{parentName:"h3"},"comm-cloud-disconnect")),(0,r.kt)("p",null,"Disconnect the JOD Gateway O2S Client and then all Cloud JOSP Services clients.",(0,r.kt)("br",null),"\nThe gateway client can be disconnected and the re-connected with the ",(0,r.kt)("a",{parentName:"p",href:"#comm-cloud-connect"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-cloud-connect")," command"),"."),(0,r.kt)("p",null,"You can check the JOD Gateway O2S Client state using the ",(0,r.kt)("a",{parentName:"p",href:"#comm-cloud-status"},(0,r.kt)("inlineCode",{parentName:"a"},"comm-cloud-status")," command"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("h3",{id:"permissions-list"},(0,r.kt)("inlineCode",{parentName:"h3"},"permissions-list")),(0,r.kt)("p",null,"Print all object's permissions."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OBJECT'S PERMISSIONS LIST\n  +--------------------+----------------------+----------------------+---------------------------+-------------------------+-------------------------+\n  | ObjId              | SrvId                | UsrId                | Perm. and Connection Type | Updated At              | PermId                  |\n  +--------------------+----------------------+----------------------+---------------------------+-------------------------+-------------------------+\n  | AAQNQ-AENAM-XCQUM  | #All                 | #Owner               | CoOwner   , LocalAndCloud | 20211011-165956970      | NRJOPHLNLYMFHMEPFWQR    |\n  | AAQNQ-AENAM-XCQUM  | #All                 | #All                 | CoOwner   , OnlyLocal     | 20211011-165956970      | PKRWBGVQRJOERQDRQHWI    |\n  | AAQNQ-AENAM-XCQUM  | #All                 | #All                 | Actions   , OnlyLocal     | 20211011-171213402      | NPSIUIIFNOOLDQJSWGEW    |\n  | AAQNQ-AENAM-XCQUM  | #All                 | #All                 | Status    , LocalAndCloud | 20211011-171216574      | XVIUCTUFWQLNUCGUHCXG    |\n  +--------------------+----------------------+----------------------+---------------------------+-------------------------+-------------------------+\n")),(0,r.kt)("h3",{id:"permission-add-srvid-usrid-type-connection"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission-add (srvId, usrId, type, connection)")),(0,r.kt)("p",null,"Add a new permission build with given values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"srvId: service's id or '#All' wildcard"),(0,r.kt)("li",{parentName:"ul"},"usrId: user's id to or '#All' or '#Owner' wildcards"),(0,r.kt)("li",{parentName:"ul"},"type: permission level granted ('None', 'Status', 'Actions' or 'CoOwner')"),(0,r.kt)("li",{parentName:"ul"},"connection: ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlyLocal")," to apply permission only to direct communication, ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalAndCloud")," to apply permission also to cloud communications.")),(0,r.kt)("p",null,"Following example adds an Actions permission for any user that use the 'x-y-z' JOSP service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JOD> permission-add "x-y-z" "#All" Actions LocalAndCloud\n')),(0,r.kt)("h3",{id:"permission-update-permid-srvid-usrid-type-connection"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission-update (permId, srvId, usrId, type, connection)")),(0,r.kt)("p",null,"Update given permission with given values."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"permId: the reference to the permission to update, you can get it with the ",(0,r.kt)("a",{parentName:"li",href:"#permissions-list"},(0,r.kt)("inlineCode",{parentName:"a"},"permissions-list")," command"),"."),(0,r.kt)("li",{parentName:"ul"},"srvId: service's id or '#All' wildcard"),(0,r.kt)("li",{parentName:"ul"},"usrId: user's id to or '#All' or '#Owner' wildcards"),(0,r.kt)("li",{parentName:"ul"},"type: permission level granted ('None', 'Status', 'Actions' or 'CoOwner')"),(0,r.kt)("li",{parentName:"ul"},"connection: ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlyLocal")," to apply permission only to direct communication, ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalAndCloud")," to apply permission also to cloud communications.")),(0,r.kt)("h3",{id:"permission-remove-permid"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission-remove (permId)")),(0,r.kt)("p",null,"Delete given permission from object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"permId: the reference to the permission to remove, you can get it with the ",(0,r.kt)("a",{parentName:"li",href:"#permissions-list"},(0,r.kt)("inlineCode",{parentName:"a"},"permissions-list")," command"),".")),(0,r.kt)("h3",{id:"permission-owner-set-usrid"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission-owner-set (usrId)")),(0,r.kt)("p",null,"Set given user's id as object's owner id."),(0,r.kt)("h3",{id:"permission-owner-reset"},(0,r.kt)("inlineCode",{parentName:"h3"},"permission-owner-reset")),(0,r.kt)("p",null,"Set object's owner id equals '00000-00000-00000', the default value."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("h3",{id:"obj-tree"},(0,r.kt)("inlineCode",{parentName:"h3"},"obj-tree")),(0,r.kt)("p",null,"Prints current object's structure."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," Component             (Type)                      | Path\n---------------------------------------------------+------------------------------------------------\n+ root                 (JODRoot_Jackson)           |\n| + Group that contains status (AbsJODContainer)   | Group that contains status\n| | + State 0-50           (JODRangeState)         | Group that contains status>State 0-50\n| | + State On/Off         (JODBooleanState)       | Group that contains status>State On/Off\n| + Light example        (AbsJODContainer)         | Light example\n| | + Consumption          (JODRangeState)         | Light example>Consumption\n| | + Switch               (JODBooleanAction)      | Light example>Switch\n...\n")),(0,r.kt)("h3",{id:"obj-component-comppath"},(0,r.kt)("inlineCode",{parentName:"h3"},"obj-component (compPath)")),(0,r.kt)("p",null,"Prints 'compPath''s Pillar info like his full path and workers instances."),(0,r.kt)("p",null,"Example output for ",(0,r.kt)("inlineCode",{parentName:"p"},'obj-component "Light example > Switch"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--- Component START ---\n# Switch\n- Path #: Light example>Switch\n- Worker: file://Switch\n- Executor: shell://Switch\n--- --------------- ---\n")),(0,r.kt)("h3",{id:"obj-component"},(0,r.kt)("inlineCode",{parentName:"h3"},"obj-component")),(0,r.kt)("p",null,"Prints 'root' Pillar info like his full path and workers instances."),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--- Component START ---\n# root\nObject to use in design testing\n- Path #:\n- Model: JOD Test Object 2.0\n- Brand: John OS\n- Descr: This structure provide an object with basic pillars and structured examples.\n- SubComps #: 4\n- SubComps: [Group that contains status, Light example, Color Light example, Group that contains actions]\n--- --------------- ---\n")),(0,r.kt)("h3",{id:"obj-component-comppath-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"obj-component (compPath)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deprecated")," Executes a null action on 'compPath' Pillar."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"workers"},"Workers"),(0,r.kt)("h3",{id:"todo"},"TODO"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"abbrev"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"params"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ea"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-activate"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ed"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-deactivate"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elpp"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-puller-protos"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellp"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-listener-protos"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elep"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-executor-protos"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"elp"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-pullers"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ell"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ele"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-ls-executors"),(0,r.kt)("td",{parentName:"tr",align:null},"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eap"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-add-puller"),(0,r.kt)("td",{parentName:"tr",align:null},"(name, name, proto, configStr)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"erp"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-rm-puller"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eep"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-enable-puller"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edp"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-disable-puller"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"erl"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-rm-listener"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eal"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-add-listener"),(0,r.kt)("td",{parentName:"tr",align:null},"(type, name, proto, configStr)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eel"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-enable-listener"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edl"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-disable-listener"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eae"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-add-executor"),(0,r.kt)("td",{parentName:"tr",align:null},"(type, name, proto, configStr)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ere"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-rm-executor"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eee"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-enable-executor"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ede"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-disable-executor"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eae"),(0,r.kt)("td",{parentName:"tr",align:null},"exec-action-executor"),(0,r.kt)("td",{parentName:"tr",align:null},"(name)")))))}m.isMDXComponent=!0}}]);