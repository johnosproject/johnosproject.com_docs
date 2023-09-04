"use strict";(self.webpackChunkjosp_docs=self.webpackChunkjosp_docs||[]).push([[2566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(b,n(n({ref:t},c),{},{components:r})):o.createElement(b,n({ref:t},c))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,n=new Array(a);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:s,n[1]=i;for(var l=2;l<a;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),s=(r(67294),r(3905));const a={},n="References",i={unversionedId:"references",id:"references",title:"References",description:"JOD Template Scripts",source:"@site/3_references/5_tools/1_jod_dist_template/9_references.mdx",sourceDirName:".",slug:"/references",permalink:"/references/tools/jod_dist_template/references",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Build JOD Distribution TEMPLATE",permalink:"/references/tools/jod_dist_template/build_jod_distribution_template"}},p={},l=[{value:"JOD Template Scripts",id:"jod-template-scripts",level:2},{value:"JOD Template Distribution Scripts",id:"jod-template-distribution-scripts",level:2},{value:"Gradle project&#39;s tasks",id:"gradle-projects-tasks",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"references"},"References"),(0,s.kt)("h2",{id:"jod-template-scripts"},(0,s.kt)("a",{parentName:"h2",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/tmpl/tmpl.md"},"JOD Template Scripts")),(0,s.kt)("p",null,"Scripts that help maker to build, test, install and publish their own JOD Distriubutions. Those scripts and all their dependencies are provided within the JOD Distribution TEMPLATE's artifacts. So each distribution's project dir can be easily managed by Makers."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/tmpl/build.md"},"build"),": build the JOD Distribution"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/tmpl/install.md"},"install"),": install the JOD Distribution in a local dir"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/tmpl/publish.md"},"publish"),": generate the JOD Distribution's distributable file")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"jod-template-distribution-scripts"},(0,s.kt)("a",{parentName:"h2",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/dists.md"},"JOD Template Distribution Scripts")),(0,s.kt)("p",null,"Scripts for End User included in each JOD Distribution publication. Those scripts are used by End User to manage (get state, start/stop, install/uninstall) a JOD installation."),(0,s.kt)("p",null,"It provides a set of scripts to automate the JOD instance management."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/state.md"},"state"),": print the JOD instance state"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/start.md"},"start"),": start current JOD instance"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/stop.md"},"stop"),": stop current JOD instance"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/install.md"},"install"),": install current JOD instance as a service/daemon"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/dists/uninstall.md"},"uninstall"),": uninstall current JOD instance as a service/daemon")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"gradle-projects-tasks"},(0,s.kt)("a",{parentName:"h2",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/gradle/gradle.md"},"Gradle project's tasks")),(0,s.kt)("p",null,"Gradle's tasks to manage and publish JOD distribution TEMPLATE artifacts. Those tasks can be executed via Gradle Wrapper in the JOD Distribution TEMPLATE source code directory. ",(0,s.kt)("em",{parentName:"p"},"They are reserved for JOD Distribution TEMPLATE developers.")),(0,s.kt)("p",null,"This gradle configs provide 3 main tasks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/gradle/buildTMPL.md"},"buildTMPL"),": build the JOD Distribution TEMPLATE"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://bitbucket.org/johnosproject_shared/com.robypomper.josp.jod.template/src/develop/docs/gradle/publishTMPL.md"},"publishTMPL"),": build and publish the JOD Distribution TEMPLATE"),(0,s.kt)("li",{parentName:"ul"},"clean: remove all generated files")))}u.isMDXComponent=!0}}]);