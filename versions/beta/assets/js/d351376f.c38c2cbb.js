"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[75],{4592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=s(5893),r=s(1151);const o={id:"mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts"},t=void 0,d={id:"api/interfaces/mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts",description:"API Documentation of MongoMemoryInstanceOpts-Interface",source:"@site/../docs/api/interfaces/mongo-memory-instance-opts.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mongo-memory-instance-opts",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-instance-opts",draft:!1,unlisted:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/interfaces/mongo-memory-instance-opts.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-instance-opts",title:"MongoMemoryInstanceOpts"},sidebar:"api",previous:{title:"CreateUser",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-createuser"},next:{title:"ReplicaMemberConfig",permalink:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-instance-replicamemberconfig"}},a={},c=[{value:"Values for <code>MongoMemoryInstanceOpts</code>",id:"values-for-mongomemoryinstanceopts",level:2},{value:"auth",id:"auth",level:3},{value:"dbName",id:"dbname",level:3},{value:"ip",id:"ip",level:3},{value:"replSet",id:"replset",level:3},{value:"keyfileLocation",id:"keyfilelocation",level:3},{value:"Values for <code>MongoMemoryInstanceOptsBase</code>",id:"values-for-mongomemoryinstanceoptsbase",level:2},{value:"args",id:"args",level:3},{value:"port",id:"port",level:3},{value:"dbPath",id:"dbpath",level:3},{value:"storageEngine",id:"storageengine",level:3},{value:"replicaMemberConfig",id:"replicamemberconfig",level:3},{value:"Helper Type <code>StorageEngine</code>",id:"helper-type-storageengine",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["API Documentation of ",(0,i.jsx)(n.code,{children:"MongoMemoryInstanceOpts"}),"-Interface"]}),"\n",(0,i.jsxs)(n.h2,{id:"values-for-mongomemoryinstanceopts",children:["Values for ",(0,i.jsx)(n.code,{children:"MongoMemoryInstanceOpts"})]}),"\n",(0,i.jsxs)(n.p,{children:["Inherits from ",(0,i.jsx)(n.a,{href:"#values-for-mongomemoryinstanceoptsbase",children:(0,i.jsx)(n.code,{children:"MongoMemoryInstanceOptsBase"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"auth",children:"auth"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"auth?: boolean"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n",(0,i.jsx)(n.p,{children:"Set which option auth argument to add:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if ",(0,i.jsx)(n.code,{children:"true"}),", add ",(0,i.jsx)(n.code,{children:"--auth"})]}),"\n",(0,i.jsxs)(n.li,{children:["if ",(0,i.jsx)(n.code,{children:"false"}),", add ",(0,i.jsx)(n.code,{children:"--noauth"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This options gets automatically set (overwritten) when using ",(0,i.jsx)(n.code,{children:"createAuth"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"dbname",children:"dbName"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"dbName?: string"})]}),"\n",(0,i.jsxs)(n.p,{children:["Previously set the ",(0,i.jsx)(n.code,{children:"dbName"})," for the ",(0,i.jsx)(n.code,{children:"getUri"})," calls, but currently unused."]}),"\n",(0,i.jsx)(n.h3,{id:"ip",children:"ip"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"ip?: string"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set the ip to bind to, if defined will add the argument ",(0,i.jsx)(n.code,{children:"--bind_ip"})," with the input string."]}),"\n",(0,i.jsx)(n.h3,{id:"replset",children:"replSet"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"replSet?: string"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set the ReplSet name to use, if defined will add the argument ",(0,i.jsx)(n.code,{children:"--replSet"})," with the input string."]}),"\n",(0,i.jsx)(n.h3,{id:"keyfilelocation",children:"keyfileLocation"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"keyfileLocation?: string"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set a custom location for where the keyfile for authentication will be stored, if defined will add the argument ",(0,i.jsx)(n.code,{children:"--keyfile"})," with the input string.",(0,i.jsx)(n.br,{}),"\n","Only has a effect when used in a ",(0,i.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-replset",children:(0,i.jsx)(n.code,{children:"MongoMemoryReplSet"})})," and ",(0,i.jsx)(n.code,{children:"auth"})," is enabled.",(0,i.jsx)(n.br,{}),"\n","This option will get automatically set when not manually defined."]}),"\n",(0,i.jsxs)(n.h2,{id:"values-for-mongomemoryinstanceoptsbase",children:["Values for ",(0,i.jsx)(n.code,{children:"MongoMemoryInstanceOptsBase"})]}),"\n",(0,i.jsx)(n.h3,{id:"args",children:"args"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"args?: string[]"})]}),"\n",(0,i.jsx)(n.p,{children:"Set extra Arguments to add to the started instance, will likely overwrite arguments set by other options, depending on how the binary parses arguments."}),"\n",(0,i.jsx)(n.h3,{id:"port",children:"port"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"port?: number"})]}),"\n",(0,i.jsxs)(n.p,{children:["When set, adds the ",(0,i.jsx)(n.code,{children:"--port"})," argument with the input.",(0,i.jsx)(n.br,{}),"\n","This options will get automatically set with a free port that is found."]}),"\n",(0,i.jsx)(n.h3,{id:"dbpath",children:"dbPath"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"dbPath?: string"})]}),"\n",(0,i.jsxs)(n.p,{children:["When set, adds the ",(0,i.jsx)(n.code,{children:"--dbpath"})," argument with the input.",(0,i.jsx)(n.br,{}),"\n","This option will automatically be set with a directory generated by ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fspromisesmkdtempprefix-options",children:(0,i.jsx)(n.code,{children:"mkdtemp"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"storageengine",children:"storageEngine"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"storageEngine?: StorageEngine"}),(0,i.jsx)(n.br,{}),"\n","Default: ",(0,i.jsx)(n.code,{children:"ephemeralForTest"})," (unless mongodb version is ",(0,i.jsx)(n.code,{children:"7.0.0"}),", where its ",(0,i.jsx)(n.code,{children:"wiredTiger"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:["Set which storage engine to use, uses ",(0,i.jsx)(n.a,{href:"#helper-type-storageengine",children:(0,i.jsx)(n.code,{children:"StorageEngine"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"replicamemberconfig",children:"replicaMemberConfig"}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"replicaMemberConfig?: ReplicaMemberConfig"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set custom a custom Replica Member Config, uses ",(0,i.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-instance-replicamemberconfig",children:(0,i.jsx)(n.code,{children:"ReplicaMemberConfig"})}),".",(0,i.jsx)(n.br,{}),"\n","Only has a effect when started with ",(0,i.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-replset",children:(0,i.jsx)(n.code,{children:"MongoMemoryReplSet"})}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"helper-type-storageengine",children:["Helper Type ",(0,i.jsx)(n.code,{children:"StorageEngine"})]}),"\n",(0,i.jsxs)(n.p,{children:["Typings: ",(0,i.jsx)(n.code,{children:"StorageEngine = 'ephemeralForTest' | 'wiredTiger'"})]}),"\n",(0,i.jsxs)(n.p,{children:["Storage Engines supported by mongodb, see ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/storage-engines/",children:"MongoDB Storage Engines"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Custom Explanation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ephemeralForTest"})," is a in-memory storage engine, which stores everything in RAM, which is great to use when wanting a simple database testing backend, is not the same as the Enterprise In-Memory Engine"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wiredTiger"})," is a storage engine which stores data on disk."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["MongoDB has stated that storage-engine ",(0,i.jsx)(n.code,{children:"ephemeralForTest"})," is unstable and has been deprecated, it will be removed with mongodb 7."]}),(0,i.jsxs)(n.p,{children:["In MMS there has been no observation of ",(0,i.jsx)(n.code,{children:"ephemeralForTest"})," being unstable (aside from some missing features) and will continue to be the default until mongodb-memory-server changes to a version where ",(0,i.jsx)(n.code,{children:"ephemeralForTest"})," is not present anymore."]}),(0,i.jsxs)(n.p,{children:["With mongodb-memory-server 9.0.0, if mongodb 7.0.0 or higher is used, ",(0,i.jsx)(n.code,{children:"wiredTiger"})," is the default engine."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(7294);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);