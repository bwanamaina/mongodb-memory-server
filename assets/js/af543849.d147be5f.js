"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[748],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"quick-start-guide",title:"Quick Start Guide"},s=void 0,p={unversionedId:"guides/quick-start-guide",id:"guides/quick-start-guide",title:"Quick Start Guide",description:"This Guide will show how to setup this package for basic use",source:"@site/../docs/guides/quick-start-guide.md",sourceDirName:"guides",slug:"/guides/quick-start-guide",permalink:"/mongodb-memory-server/docs/guides/quick-start-guide",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/quick-start-guide.md",tags:[],version:"current",frontMatter:{id:"quick-start-guide",title:"Quick Start Guide"},sidebar:"guides",next:{title:"Frequently Asked Questions",permalink:"/mongodb-memory-server/docs/guides/faq"}},c={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Choose the right package",id:"choose-the-right-package",level:2},{value:"Normal Server",id:"normal-server",level:2},{value:"ReplicaSet",id:"replicaset",level:2},{value:"Final Notes",id:"final-notes",level:2}],u={toc:m},d="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This Guide will show how to setup this package for basic use"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Examples on this page assume Top-Level async-await for readability.",(0,i.kt)("br",{parentName:"p"}),"\n","If Top-Level async-await is not available for your case, the code can in most cases be wrapped like:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  // async code in where\n})();\n"))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NodeJS: 14.20.1+"),(0,i.kt)("li",{parentName:"ul"},"Typescript: 5.0+ (if used)")),(0,i.kt)("p",null,"When on Linux, one of the following are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"having ",(0,i.kt)("inlineCode",{parentName:"li"},"lsb-core")," installed (or any that provides the ",(0,i.kt)("inlineCode",{parentName:"li"},"lsb_release")," command)"),(0,i.kt)("li",{parentName:"ul"},"having an ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/os-release")," file that is compliant to the ",(0,i.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/os-release.html"},"OS-Release Spec")),(0,i.kt)("li",{parentName:"ul"},"having an ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/*-release")," file that is compliant to the ",(0,i.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/os-release.html"},"OS-Release Spec")," (and does not include ",(0,i.kt)("inlineCode",{parentName:"li"},"lsb"),")"),(0,i.kt)("li",{parentName:"ul"},"manually specify which version & system should be used")),(0,i.kt)("p",null,"On Linux, you will also need ",(0,i.kt)("inlineCode",{parentName:"p"},"libcurl")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"libcurl3"),' on some older distro versions). This will probably only be an issue on "slim" Docker images.'),(0,i.kt)("h2",{id:"choose-the-right-package"},"Choose the right package"),(0,i.kt)("p",null,"There are multiple packages for this project, here are the differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongodb-memory-server-core")," is the main package, which does not have any hooks on install"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongodb-memory-server")," adds hooks to install on ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn install")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to install the ",(0,i.kt)("em",{parentName:"li"},"latest package locally")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongodb-memory-server-global")," adds hooks to install on ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn install")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to install the ",(0,i.kt)("em",{parentName:"li"},"latest package globally")," (into $HOME)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mongodb-memory-server-global-X.X")," adds hooks to install on ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn install")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to install ",(0,i.kt)("em",{parentName:"li"},"MongoDB with version ",(0,i.kt)("inlineCode",{parentName:"em"},"X.X")," globally")," (into $HOME)")),(0,i.kt)("h2",{id:"normal-server"},"Normal Server"),(0,i.kt)("p",null,"A Normal Server can be easily started with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { MongoMemoryServer } from 'mongodb-memory-server';\n\n// This will create an new instance of \"MongoMemoryServer\" and automatically start it\nconst mongod = await MongoMemoryServer.create();\n\nconst uri = mongod.getUri();\n\n// The Server can be stopped again with\nawait mongod.stop();\n")),(0,i.kt)("h2",{id:"replicaset"},"ReplicaSet"),(0,i.kt)("p",null,"A ReplicaSet can be easily started with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { MongoMemoryReplSet } from \'mongodb-memory-server\';\n\n// This will create an new instance of "MongoMemoryReplSet" and automatically start all Servers\nconst replset = await MongoMemoryReplSet.create({ replSet: { count: 4 } }); // This will create an ReplSet with 4 members\n// To use Transactions, the "storageEngine" needs to be changed to `wiredTiger`\nconst replset = await MongoMemoryReplSet.create({ replSet: { count: 4, storageEngine: \'wiredTiger\' } }); // This will create an ReplSet with 4 members and storage-engine "wiredTiger"\n\nconst uri = replset.getUri();\n\n// The ReplSet can be stopped again with\nawait replset.stop();\n')),(0,i.kt)("h2",{id:"final-notes"},"Final Notes"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"When you are not using a global instance for tests and run multi-threaded tests, it can cause Race Conditions.")))}g.isMDXComponent=!0}}]);