"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[332],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5116:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],l={id:"migrate7",title:"Migrate to version 7.0.0"},s=void 0,p={unversionedId:"guides/migration/migrate7",id:"guides/migration/migrate7",title:"Migrate to version 7.0.0",description:"Here are the Important changes made for 7.0.0",source:"@site/../docs/guides/migration/migrate7.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate7",permalink:"/mongodb-memory-server/docs/guides/migration/migrate7",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/migration/migrate7.md",tags:[],version:"current",frontMatter:{id:"migrate7",title:"Migrate to version 7.0.0"},sidebar:"guides",previous:{title:"Migrate to version 8.0.0",permalink:"/mongodb-memory-server/docs/guides/migration/migrate8"}},d={},c=[{value:"Requirement Changes",id:"requirement-changes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"no function other than start, create, ensureInstance will be starting anything",id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything",level:3},{value:"getUri is no longer async",id:"geturi-is-no-longer-async",level:3},{value:"new no longer automatically starts",id:"new-no-longer-automatically-starts",level:3},{value:"mongod binaries storage path changed",id:"mongod-binaries-storage-path-changed",level:3},{value:"getConnectionString got removed",id:"getconnectionstring-got-removed",level:3},{value:"MongoInstance.waitPrimaryReady got removed",id:"mongoinstancewaitprimaryready-got-removed",level:3},{value:"Functions that returned public values on classes got removed",id:"functions-that-returned-public-values-on-classes-got-removed",level:3},{value:"Manager Class functions got unified",id:"manager-class-functions-got-unified",level:3},{value:"getUri by default does not include any dbName anymore",id:"geturi-by-default-does-not-include-any-dbname-anymore",level:3},{value:"Non-Breaking changes / Additions",id:"non-breaking-changes--additions",level:2},{value:"Config Values are now collected in an enum",id:"config-values-are-now-collected-in-an-enum",level:3},{value:"Config helper function &quot;envName&quot;",id:"config-helper-function-envname",level:3},{value:"All Manager Classes are now extending EventEmitter",id:"all-manager-classes-are-now-extending-eventemitter",level:3},{value:"Automatic Authentication creation",id:"automatic-authentication-creation",level:3},{value:"Explicit &amp; Implicit Cleanup",id:"explicit--implicit-cleanup",level:3},{value:"ReplSet&#39;s can now gracefully exit",id:"replsets-can-now-gracefully-exit",level:3},{value:"Linux Distribution Detection enhanced",id:"linux-distribution-detection-enhanced",level:3},{value:"ArchLinux got somewhat supported",id:"archlinux-got-somewhat-supported",level:3},{value:"Runtime downloads can now be disabled or explicitly enabled",id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled",level:3},{value:"Unified Common Errors",id:"unified-common-errors",level:3}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are the Important changes made for 7.0.0"),(0,i.kt)("admonition",{title:"Important, Read this first",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This Guide is written for migration from version ",(0,i.kt)("inlineCode",{parentName:"p"},"6.9.6")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"7.0.0"),", for versions ",(0,i.kt)("inlineCode",{parentName:"p"},">7.0.0 <8.0.0"),", please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/blob/master/CHANGELOG.md"},"CHANGELOG"))),(0,i.kt)("h2",{id:"requirement-changes"},"Requirement Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodejs ",(0,i.kt)("inlineCode",{parentName:"li"},"10")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"11")," are now unsupported, lowest supported version is now ",(0,i.kt)("inlineCode",{parentName:"li"},"12.22"))),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("h3",{id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"no function other than start, create, ensureInstance will be starting anything"),(0,i.kt)("p",null,"For 7.0.0, the only functions that start / wait for an starting instance will be ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ensureInstance")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this no longer works\nconst mongo = new MongoMemoryServer();\nconst uri = await mongo.getUri(); // ERROR: instance not started\n\n// it is now\nconst mongo = await MongoMemoryServer.create();\nconst uri = mongo.getUri();\n")),(0,i.kt)("h3",{id:"geturi-is-no-longer-async"},"getUri is no longer async"),(0,i.kt)("p",null,"For 7.0.0, all ",(0,i.kt)("inlineCode",{parentName:"p"},".getUri")," are now sync, see ",(0,i.kt)("a",{parentName:"p",href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"this change")),(0,i.kt)("h3",{id:"new-no-longer-automatically-starts"},"new no longer automatically starts"),(0,i.kt)("p",null,"Until 7.0.0, ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," (",(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),") automatically started the instance, which is no longer the case, for this behaviour use ",(0,i.kt)("inlineCode",{parentName:"p"},".create"),", see ",(0,i.kt)("a",{parentName:"p",href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"this change")),(0,i.kt)("h3",{id:"mongod-binaries-storage-path-changed"},"mongod binaries storage path changed"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mongod")," binary path changed from ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath/version/mongod")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"basePath/mongod-arch-dist-version"),(0,i.kt)("br",{parentName:"p"}),"\n","This will make it easier to work with sharing the project folder (like host to docker)"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This package will ",(0,i.kt)("strong",{parentName:"p"},"not")," delete the old binaries, these need to be manually deleted, see ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options#download_dir"},"storage paths")," for where binaries are stored")),(0,i.kt)("h3",{id:"getconnectionstring-got-removed"},"getConnectionString got removed"),(0,i.kt)("p",null,"Function ",(0,i.kt)("inlineCode",{parentName:"p"},"getConnectionString")," got removed in favor of just ",(0,i.kt)("inlineCode",{parentName:"p"},"getUri")),(0,i.kt)("h3",{id:"mongoinstancewaitprimaryready-got-removed"},"MongoInstance.waitPrimaryReady got removed"),(0,i.kt)("p",null,"Function ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoInstance.prototype.waitPrimaryReady")," got removed, in favor of listening to event ",(0,i.kt)("inlineCode",{parentName:"p"},"instancePrimary")),(0,i.kt)("h3",{id:"functions-that-returned-public-values-on-classes-got-removed"},"Functions that returned public values on classes got removed"),(0,i.kt)("p",null,"Functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer.prototype.getInstanceInfo")," got removed in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer.prototype.instanceInfo")," (readonly value)"),(0,i.kt)("p",null,"These include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.getInstanceInfo")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.instanceInfo")," (readonly value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.getPort")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.instanceInfo.port")," (readonly value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.getDbPath")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.instanceInfo.dbPath")," (readonly value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.getDbName")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.prototype.instanceInfo.dbName")," (readonly value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryReplSet.prototype.getDbName")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoMemoryReplSet.prototype.opts.replSet.db")," (readonly value)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.getPid")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.mongodProcess.pid")," (readonly value)")),(0,i.kt)("h3",{id:"manager-class-functions-got-unified"},"Manager Class functions got unified"),(0,i.kt)("p",null,"Manager-Classes got unified, these include ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoInstance"),(0,i.kt)("br",{parentName:"p"}),"\n","This means that all of them have unified typings for ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getUri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanup")),(0,i.kt)("p",null,"This also includes function renames:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(static) ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.run")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.create")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.run")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.start")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.kill")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoInstance.prototype.stop"))),(0,i.kt)("h3",{id:"geturi-by-default-does-not-include-any-dbname-anymore"},"getUri by default does not include any dbName anymore"),(0,i.kt)("p",null,"This was changed to allow mongodb and mongoose URI's to work at the same time (they slightly differ)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/blob/3624253f509a54cff04997943894b9eb7e7e64fe/packages/mongodb-memory-server-core/src/util/utils.ts#L13-L17"},"See the code comment for more information")),(0,i.kt)("h2",{id:"non-breaking-changes--additions"},"Non-Breaking changes / Additions"),(0,i.kt)("h3",{id:"config-values-are-now-collected-in-an-enum"},"Config Values are now collected in an enum"),(0,i.kt)("p",null,"Config values like ",(0,i.kt)("inlineCode",{parentName:"p"},"DOWNLOAD_DIR")," are now collected in an enum called ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolveConfigVariables"),", ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options"},"see more here")),(0,i.kt)("h3",{id:"config-helper-function-envname"},'Config helper function "envName"'),(0,i.kt)("p",null,"An helper function named ",(0,i.kt)("inlineCode",{parentName:"p"},"envName")," is introduced into 7.0.0, which does:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// previously\nprocess.env[ENV_CONFIG_PREFIX + ResolveConfigVariables.DOWNLOAD_DIR] = 'someValue';\n\n// now\nprocess.env(envName(ResolveConfigVariables.DOWNLOAD_DIR)) = 'someValue';\n")),(0,i.kt)("p",null,"this does not only save space, but also provide direct auto-completion-suggestions for ",(0,i.kt)("inlineCode",{parentName:"p"},"ResolveConfigVariables")),(0,i.kt)("h3",{id:"all-manager-classes-are-now-extending-eventemitter"},"All Manager Classes are now extending EventEmitter"),(0,i.kt)("p",null,"All Manager-Classes are now extending ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter"),", which makes them easier to use and listen for changes"),(0,i.kt)("h3",{id:"automatic-authentication-creation"},"Automatic Authentication creation"),(0,i.kt)("p",null,"For 7.0.0 there is now Automatic Authentication created, which can be enabled by providing config option ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," in the code"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// This will create an Auth-enabled instance with default auth-values\nconst mongoServer = await MongoMemoryServer.create({\n  auth: {}, // anything else than "undefined / null" will enable auth, can be explicitly disabled with "auth: { disable: true }"\n  instance: {\n    auth: true,\n    storageEngine: \'wiredTiger\',\n  },\n});\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Instance will not be restarted if the storage engine is ",(0,i.kt)("inlineCode",{parentName:"p"},"ephemeralForTest")," because data will not persist across restarts",(0,i.kt)("br",null))),(0,i.kt)("p",null,"For available Values look into either the source code or let intellisense show values"),(0,i.kt)("h3",{id:"explicit--implicit-cleanup"},"Explicit & Implicit Cleanup"),(0,i.kt)("p",null,"Cleanup behaviour can now be controlled, default is an ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpDir")," that will get automatically removed on instance-stop / process exit, if it is not an ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpDir")," then ",(0,i.kt)("inlineCode",{parentName:"p"},".cleanup")," needs to be manually called with ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," (force)  "),(0,i.kt)("p",null,"If persistence between restarts is wanted (even if it is an ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpDir"),"), then call ",(0,i.kt)("inlineCode",{parentName:"p"},".stop")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (",(0,i.kt)("inlineCode",{parentName:"p"},"cleanup")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpDir")," will still be run on process exit)"),(0,i.kt)("h3",{id:"replsets-can-now-gracefully-exit"},"ReplSet's can now gracefully exit"),(0,i.kt)("p",null,"Since Mongod ~4.2 replset's dont exit anymore on ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM")," if they cannot step-down (no other instance to give primary to)",(0,i.kt)("br",{parentName:"p"}),"\n","In 7.0.0 this is now handled with mongodb command ",(0,i.kt)("inlineCode",{parentName:"p"},"replSetStepDown: 1, force: true")),(0,i.kt)("h3",{id:"linux-distribution-detection-enhanced"},"Linux Distribution Detection enhanced"),(0,i.kt)("p",null,"For 7.0.0, the Linux Distribution Detection got enhanced, now preferring to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/upstream-release/lsb-release")," instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/")," ones, which enables based-on distributions to be easier mapped (and fallback correctly)"),(0,i.kt)("p",null,"This mostly impacts Debian based distros and Ubuntu based distros"),(0,i.kt)("h3",{id:"archlinux-got-somewhat-supported"},"ArchLinux got somewhat supported"),(0,i.kt)("p",null,"Some reports said that the ubuntu binaries work on arch, so there is now an automatic fallback to ubuntu binaries (MongoDB still dosnt have binaries for arch)"),(0,i.kt)("h3",{id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled"},"Runtime downloads can now be disabled or explicitly enabled"),(0,i.kt)("p",null,"Version 7.0.0 brings an new config value named ",(0,i.kt)("inlineCode",{parentName:"p"},"RUNTIME_DOWNLOAD"),", which is an boolean, to disable Runtime Downloads or explicitly enable them"),(0,i.kt)("h3",{id:"unified-common-errors"},"Unified Common Errors"),(0,i.kt)("p",null,"In pre-7.0.0, errors were all over the place, now the most common are unified into custom errors"))}u.isMDXComponent=!0}}]);