"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[2332],{515:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=o(5893),t=o(1151);const r={id:"migrate7",title:"Migrate to version 7.0.0"},s=void 0,a={id:"guides/migration/migrate7",title:"Migrate to version 7.0.0",description:"Here are the Important changes made for 7.0.0",source:"@site/../docs/guides/migration/migrate7.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate7",permalink:"/mongodb-memory-server/docs/guides/migration/migrate7",draft:!1,unlisted:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/migration/migrate7.md",tags:[],version:"current",frontMatter:{id:"migrate7",title:"Migrate to version 7.0.0"},sidebar:"guides",previous:{title:"Migrate to version 8.0.0",permalink:"/mongodb-memory-server/docs/guides/migration/migrate8"}},l={},c=[{value:"Requirement Changes",id:"requirement-changes",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"no function other than start, create, ensureInstance will be starting anything",id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything",level:3},{value:"getUri is no longer async",id:"geturi-is-no-longer-async",level:3},{value:"new no longer automatically starts",id:"new-no-longer-automatically-starts",level:3},{value:"mongod binaries storage path changed",id:"mongod-binaries-storage-path-changed",level:3},{value:"getConnectionString got removed",id:"getconnectionstring-got-removed",level:3},{value:"MongoInstance.waitPrimaryReady got removed",id:"mongoinstancewaitprimaryready-got-removed",level:3},{value:"Functions that returned public values on classes got removed",id:"functions-that-returned-public-values-on-classes-got-removed",level:3},{value:"Manager Class functions got unified",id:"manager-class-functions-got-unified",level:3},{value:"getUri by default does not include any dbName anymore",id:"geturi-by-default-does-not-include-any-dbname-anymore",level:3},{value:"Non-Breaking changes / Additions",id:"non-breaking-changes--additions",level:2},{value:"Config Values are now collected in an enum",id:"config-values-are-now-collected-in-an-enum",level:3},{value:"Config helper function &quot;envName&quot;",id:"config-helper-function-envname",level:3},{value:"All Manager Classes are now extending EventEmitter",id:"all-manager-classes-are-now-extending-eventemitter",level:3},{value:"Automatic Authentication creation",id:"automatic-authentication-creation",level:3},{value:"Explicit &amp; Implicit Cleanup",id:"explicit--implicit-cleanup",level:3},{value:"ReplSet&#39;s can now gracefully exit",id:"replsets-can-now-gracefully-exit",level:3},{value:"Linux Distribution Detection enhanced",id:"linux-distribution-detection-enhanced",level:3},{value:"ArchLinux got somewhat supported",id:"archlinux-got-somewhat-supported",level:3},{value:"Runtime downloads can now be disabled or explicitly enabled",id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled",level:3},{value:"Unified Common Errors",id:"unified-common-errors",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here are the Important changes made for 7.0.0"}),"\n",(0,i.jsx)(n.admonition,{title:"Important, Read this first",type:"caution",children:(0,i.jsxs)(n.p,{children:["This Guide is written for migration from version ",(0,i.jsx)(n.code,{children:"6.9.6"})," to ",(0,i.jsx)(n.code,{children:"7.0.0"}),", for versions ",(0,i.jsx)(n.code,{children:">7.0.0 <8.0.0"}),", please consult the ",(0,i.jsx)(n.a,{href:"https://github.com/nodkz/mongodb-memory-server/blob/master/CHANGELOG.md",children:"CHANGELOG"})]})}),"\n",(0,i.jsx)(n.h2,{id:"requirement-changes",children:"Requirement Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Nodejs ",(0,i.jsx)(n.code,{children:"10"})," & ",(0,i.jsx)(n.code,{children:"11"})," are now unsupported, lowest supported version is now ",(0,i.jsx)(n.code,{children:"14.0"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsx)(n.h3,{id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything",children:"no function other than start, create, ensureInstance will be starting anything"}),"\n",(0,i.jsxs)(n.p,{children:["For 7.0.0, the only functions that start / wait for an starting instance will be ",(0,i.jsx)(n.code,{children:"create"}),", ",(0,i.jsx)(n.code,{children:"start"})," and ",(0,i.jsx)(n.code,{children:"ensureInstance"})]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// this no longer works\nconst mongo = new MongoMemoryServer();\nconst uri = await mongo.getUri(); // ERROR: instance not started\n\n// it is now\nconst mongo = await MongoMemoryServer.create();\nconst uri = mongo.getUri();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"geturi-is-no-longer-async",children:"getUri is no longer async"}),"\n",(0,i.jsxs)(n.p,{children:["For 7.0.0, all ",(0,i.jsx)(n.code,{children:".getUri"})," are now sync, see ",(0,i.jsx)(n.a,{href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything",children:"this change"})]}),"\n",(0,i.jsx)(n.h3,{id:"new-no-longer-automatically-starts",children:"new no longer automatically starts"}),"\n",(0,i.jsxs)(n.p,{children:["Until 7.0.0, ",(0,i.jsx)(n.code,{children:"new"})," (",(0,i.jsx)(n.code,{children:"constructor"}),") automatically started the instance, which is no longer the case, for this behaviour use ",(0,i.jsx)(n.code,{children:".create"}),", see ",(0,i.jsx)(n.a,{href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything",children:"this change"})]}),"\n",(0,i.jsx)(n.h3,{id:"mongod-binaries-storage-path-changed",children:"mongod binaries storage path changed"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mongod"})," binary path changed from ",(0,i.jsx)(n.code,{children:"basePath/version/mongod"})," to ",(0,i.jsx)(n.code,{children:"basePath/mongod-arch-dist-version"}),(0,i.jsx)(n.br,{}),"\n","This will make it easier to work with sharing the project folder (like host to docker)"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This package will ",(0,i.jsx)(n.strong,{children:"not"})," delete the old binaries, these need to be manually deleted, see ",(0,i.jsx)(n.a,{href:"/mongodb-memory-server/docs/api/config-options#download_dir",children:"storage paths"})," for where binaries are stored"]})}),"\n",(0,i.jsx)(n.h3,{id:"getconnectionstring-got-removed",children:"getConnectionString got removed"}),"\n",(0,i.jsxs)(n.p,{children:["Function ",(0,i.jsx)(n.code,{children:"getConnectionString"})," got removed in favor of just ",(0,i.jsx)(n.code,{children:"getUri"})]}),"\n",(0,i.jsx)(n.h3,{id:"mongoinstancewaitprimaryready-got-removed",children:"MongoInstance.waitPrimaryReady got removed"}),"\n",(0,i.jsxs)(n.p,{children:["Function ",(0,i.jsx)(n.code,{children:"MongoInstance.prototype.waitPrimaryReady"})," got removed, in favor of listening to event ",(0,i.jsx)(n.code,{children:"instancePrimary"})]}),"\n",(0,i.jsx)(n.h3,{id:"functions-that-returned-public-values-on-classes-got-removed",children:"Functions that returned public values on classes got removed"}),"\n",(0,i.jsxs)(n.p,{children:["Functions like ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.getInstanceInfo"})," got removed in favor of ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.instanceInfo"})," (readonly value)"]}),"\n",(0,i.jsx)(n.p,{children:"These include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.getInstanceInfo"})," -> ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.instanceInfo"})," (readonly value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.getPort"})," -> ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.instanceInfo.port"})," (readonly value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.getDbPath"})," -> ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.instanceInfo.dbPath"})," (readonly value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.getDbName"})," -> ",(0,i.jsx)(n.code,{children:"MongoMemoryServer.prototype.instanceInfo.dbName"})," (readonly value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoMemoryReplSet.prototype.getDbName"})," -> ",(0,i.jsx)(n.code,{children:"MongoMemoryReplSet.prototype.opts.replSet.db"})," (readonly value)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoInstance.prototype.getPid"})," -> ",(0,i.jsx)(n.code,{children:"MongoInstance.prototype.mongodProcess.pid"})," (readonly value)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"manager-class-functions-got-unified",children:"Manager Class functions got unified"}),"\n",(0,i.jsxs)(n.p,{children:["Manager-Classes got unified, these include ",(0,i.jsx)(n.code,{children:"MongoMemoryServer"}),", ",(0,i.jsx)(n.code,{children:"MongoMemoryReplSet"}),", ",(0,i.jsx)(n.code,{children:"MongoInstance"}),(0,i.jsx)(n.br,{}),"\n","This means that all of them have unified typings for ",(0,i.jsx)(n.code,{children:"start"}),", ",(0,i.jsx)(n.code,{children:"stop"}),", ",(0,i.jsx)(n.code,{children:"create"}),", ",(0,i.jsx)(n.code,{children:"getUri"}),", ",(0,i.jsx)(n.code,{children:"cleanup"})]}),"\n",(0,i.jsx)(n.p,{children:"This also includes function renames:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(static) ",(0,i.jsx)(n.code,{children:"MongoInstance.run"})," -> ",(0,i.jsx)(n.code,{children:"MongoInstance.create"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoInstance.prototype.run"})," -> ",(0,i.jsx)(n.code,{children:"MongoInstance.prototype.start"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MongoInstance.prototype.kill"})," -> ",(0,i.jsx)(n.code,{children:"MongoInstance.prototype.stop"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"geturi-by-default-does-not-include-any-dbname-anymore",children:"getUri by default does not include any dbName anymore"}),"\n",(0,i.jsx)(n.p,{children:"This was changed to allow mongodb and mongoose URI's to work at the same time (they slightly differ)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/nodkz/mongodb-memory-server/blob/3624253f509a54cff04997943894b9eb7e7e64fe/packages/mongodb-memory-server-core/src/util/utils.ts#L13-L17",children:"See the code comment for more information"})}),"\n",(0,i.jsx)(n.h2,{id:"non-breaking-changes--additions",children:"Non-Breaking changes / Additions"}),"\n",(0,i.jsx)(n.h3,{id:"config-values-are-now-collected-in-an-enum",children:"Config Values are now collected in an enum"}),"\n",(0,i.jsxs)(n.p,{children:["Config values like ",(0,i.jsx)(n.code,{children:"DOWNLOAD_DIR"})," are now collected in an enum called ",(0,i.jsx)(n.code,{children:"ResolveConfigVariables"}),", ",(0,i.jsx)(n.a,{href:"/mongodb-memory-server/docs/api/config-options",children:"see more here"})]}),"\n",(0,i.jsx)(n.h3,{id:"config-helper-function-envname",children:'Config helper function "envName"'}),"\n",(0,i.jsxs)(n.p,{children:["An helper function named ",(0,i.jsx)(n.code,{children:"envName"})," is introduced into 7.0.0, which does:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// previously\nprocess.env[ENV_CONFIG_PREFIX + ResolveConfigVariables.DOWNLOAD_DIR] = 'someValue';\n\n// now\nprocess.env(envName(ResolveConfigVariables.DOWNLOAD_DIR)) = 'someValue';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["this does not only save space, but also provide direct auto-completion-suggestions for ",(0,i.jsx)(n.code,{children:"ResolveConfigVariables"})]}),"\n",(0,i.jsx)(n.h3,{id:"all-manager-classes-are-now-extending-eventemitter",children:"All Manager Classes are now extending EventEmitter"}),"\n",(0,i.jsxs)(n.p,{children:["All Manager-Classes are now extending ",(0,i.jsx)(n.code,{children:"EventEmitter"}),", which makes them easier to use and listen for changes"]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-authentication-creation",children:"Automatic Authentication creation"}),"\n",(0,i.jsxs)(n.p,{children:["For 7.0.0 there is now Automatic Authentication created, which can be enabled by providing config option ",(0,i.jsx)(n.code,{children:"auth"})," in the code"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// This will create an Auth-enabled instance with default auth-values\nconst mongoServer = await MongoMemoryServer.create({\n  auth: {}, // anything else than "undefined / null" will enable auth, can be explicitly disabled with "auth: { disable: true }"\n  instance: {\n    auth: true,\n    storageEngine: \'wiredTiger\',\n  },\n});\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The Instance will not be restarted if the storage engine is ",(0,i.jsx)(n.code,{children:"ephemeralForTest"})," because data will not persist across restarts",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(n.p,{children:"For available Values look into either the source code or let intellisense show values"}),"\n",(0,i.jsx)(n.h3,{id:"explicit--implicit-cleanup",children:"Explicit & Implicit Cleanup"}),"\n",(0,i.jsxs)(n.p,{children:["Cleanup behaviour can now be controlled, default is an ",(0,i.jsx)(n.code,{children:"tmpDir"})," that will get automatically removed on instance-stop / process exit, if it is not an ",(0,i.jsx)(n.code,{children:"tmpDir"})," then ",(0,i.jsx)(n.code,{children:".cleanup"})," needs to be manually called with ",(0,i.jsx)(n.code,{children:"true"})," (force)"]}),"\n",(0,i.jsxs)(n.p,{children:["If persistence between restarts is wanted (even if it is an ",(0,i.jsx)(n.code,{children:"tmpDir"}),"), then call ",(0,i.jsx)(n.code,{children:".stop"})," with ",(0,i.jsx)(n.code,{children:"false"})," (",(0,i.jsx)(n.code,{children:"cleanup"})," for ",(0,i.jsx)(n.code,{children:"tmpDir"})," will still be run on process exit)"]}),"\n",(0,i.jsx)(n.h3,{id:"replsets-can-now-gracefully-exit",children:"ReplSet's can now gracefully exit"}),"\n",(0,i.jsxs)(n.p,{children:["Since Mongod ~4.2 replset's dont exit anymore on ",(0,i.jsx)(n.code,{children:"SIGTERM"})," if they cannot step-down (no other instance to give primary to)",(0,i.jsx)(n.br,{}),"\n","In 7.0.0 this is now handled with mongodb command ",(0,i.jsx)(n.code,{children:"replSetStepDown: 1, force: true"})]}),"\n",(0,i.jsx)(n.h3,{id:"linux-distribution-detection-enhanced",children:"Linux Distribution Detection enhanced"}),"\n",(0,i.jsxs)(n.p,{children:["For 7.0.0, the Linux Distribution Detection got enhanced, now preferring to use ",(0,i.jsx)(n.code,{children:"/etc/upstream-release/lsb-release"})," instead of the ",(0,i.jsx)(n.code,{children:"/etc/"})," ones, which enables based-on distributions to be easier mapped (and fallback correctly)"]}),"\n",(0,i.jsx)(n.p,{children:"This mostly impacts Debian based distros and Ubuntu based distros"}),"\n",(0,i.jsx)(n.h3,{id:"archlinux-got-somewhat-supported",children:"ArchLinux got somewhat supported"}),"\n",(0,i.jsx)(n.p,{children:"Some reports said that the ubuntu binaries work on arch, so there is now an automatic fallback to ubuntu binaries (MongoDB still dosnt have binaries for arch)"}),"\n",(0,i.jsx)(n.h3,{id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled",children:"Runtime downloads can now be disabled or explicitly enabled"}),"\n",(0,i.jsxs)(n.p,{children:["Version 7.0.0 brings an new config value named ",(0,i.jsx)(n.code,{children:"RUNTIME_DOWNLOAD"}),", which is an boolean, to disable Runtime Downloads or explicitly enable them"]}),"\n",(0,i.jsx)(n.h3,{id:"unified-common-errors",children:"Unified Common Errors"}),"\n",(0,i.jsx)(n.p,{children:"In pre-7.0.0, errors were all over the place, now the most common are unified into custom errors"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var i=o(7294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);