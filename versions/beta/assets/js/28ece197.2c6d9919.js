"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[5898],{6109:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(5893),r=s(1151);const o={id:"mongo-memory-server",title:"MongoMemoryServer"},i=void 0,a={id:"api/classes/mongo-memory-server",title:"MongoMemoryServer",description:"API Documentation of MongoMemoryServer-Class",source:"@site/../docs/api/classes/mongo-memory-server.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-memory-server",permalink:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-server",draft:!1,unlisted:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-server.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-server",title:"MongoMemoryServer"},sidebar:"api",previous:{title:"Config Options",permalink:"/mongodb-memory-server/versions/beta/docs/api/config-options"},next:{title:"MongoMemoryReplSet",permalink:"/mongodb-memory-server/versions/beta/docs/api/classes/mongo-memory-replset"}},c={},d=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"create",id:"create",level:3},{value:"stateChange",id:"statechange",level:3},{value:"start",id:"start",level:3},{value:"getNewPort",id:"getnewport",level:3},{value:"getStartOptions",id:"getstartoptions",level:3},{value:"_startUpInstance",id:"_startupinstance",level:3},{value:"stop",id:"stop",level:3},{value:"cleanup",id:"cleanup",level:3},{value:"ensureInstance",id:"ensureinstance",level:3},{value:"getUri",id:"geturi",level:3},{value:"createAuth",id:"createauth",level:3},{value:"Values",id:"values",level:2},{value:"instanceInfo",id:"instanceinfo",level:3},{value:"_instanceInfo",id:"_instanceinfo",level:3},{value:"opts",id:"opts",level:3},{value:"state",id:"state",level:3},{value:"_state",id:"_state",level:3},{value:"auth",id:"auth",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["API Documentation of ",(0,t.jsx)(n.code,{children:"MongoMemoryServer"}),"-Class"]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"new",children:"new"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"constructor(opts?: MongoMemoryServerOpts)"})]}),"\n",(0,t.jsxs)(n.p,{children:["Create an new Instance without starting it, uses ",(0,t.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-opts",children:(0,t.jsx)(n.code,{children:"MongoMemoryServerOpts"})}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When directly starting the instance, ",(0,t.jsx)(n.a,{href:"#create",children:(0,t.jsx)(n.code,{children:"create"})})," should be used"]})}),"\n",(0,t.jsx)(n.h3,{id:"create",children:"create"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"static async create(opts?: MongoMemoryServerOpts): Promise<MongoMemoryServer>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Create an new Instance and start it (while being an Promise), uses ",(0,t.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-opts",children:(0,t.jsx)(n.code,{children:"MongoMemoryServerOpts"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"statechange",children:"stateChange"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"protected stateChange(newState: MongoMemoryServerStates): void"})]}),"\n",(0,t.jsxs)(n.p,{children:["Used to change the state of the class, uses ",(0,t.jsxs)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/enums/mongo-memory-server-states",children:[(0,t.jsx)(n.code,{children:"MongoMemoryServerStates"})," enum"]}),", it is ",(0,t.jsx)(n.code,{children:"protected"})," to not accidentally use it."]}),"\n",(0,t.jsx)(n.h3,{id:"start",children:"start"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async start(forceSamePort: boolean = false): Promise<boolean>"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to start an new Instance or to Re-Start an stopped instance"}),"\n",(0,t.jsxs)(n.p,{children:["with ",(0,t.jsx)(n.code,{children:"forceSamePort"})," set to ",(0,t.jsx)(n.code,{children:"true"})," and having ",(0,t.jsx)(n.code,{children:"instance.port"})," set, it will use that port and not generate a new port.",(0,t.jsx)(n.br,{}),"\n","with ",(0,t.jsx)(n.code,{children:"forceSamePort"})," set to ",(0,t.jsx)(n.code,{children:"true"})," and not having ",(0,t.jsx)(n.code,{children:"instance.port"})," set, it will generate a new free port."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Will Error if instance is already running"})}),"\n",(0,t.jsx)(n.h3,{id:"getnewport",children:"getNewPort"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"protected async getNewPort(port?: number): Promise<number>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Finds an new non-locked port, uses ",(0,t.jsx)(n.code,{children:"port"})," if available or as a starting point."]}),"\n",(0,t.jsx)(n.h3,{id:"getstartoptions",children:"getStartOptions"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"protected async getStartOptions(forceSamePort: boolean = false): Promise<MongoMemoryServerGetStartOptions>"})]}),"\n",(0,t.jsxs)(n.p,{children:["with ",(0,t.jsx)(n.code,{children:"forceSamePort"})," set to ",(0,t.jsx)(n.code,{children:"true"})," and having ",(0,t.jsx)(n.code,{children:"instance.port"})," set, it will use that port and not generate a new port.",(0,t.jsx)(n.br,{}),"\n","with ",(0,t.jsx)(n.code,{children:"forceSamePort"})," set to ",(0,t.jsx)(n.code,{children:"true"})," and not having ",(0,t.jsx)(n.code,{children:"instance.port"})," set, it will generate a new free port."]}),"\n",(0,t.jsx)(n.p,{children:"Constructs the Starting Options"}),"\n",(0,t.jsx)(n.h3,{id:"_startupinstance",children:"_startUpInstance"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async _startUpInstance(forceSamePort: boolean = false): Promise<void>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Internal Functions used by ",(0,t.jsx)(n.a,{href:"#start",children:(0,t.jsx)(n.code,{children:"start"})})]}),"\n",(0,t.jsx)(n.h3,{id:"stop",children:"stop"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async stop(cleanupOptions?: Cleanup): Promise<boolean>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Stop an running instance, this function will by default call ",(0,t.jsx)(n.a,{href:"#cleanup",children:(0,t.jsx)(n.code,{children:".cleanup"})})," with ",(0,t.jsx)(n.code,{children:"{ doCleanup: true, force: false }"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"cleanupOptions"})," options for cleanup can be manually set."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Will not Error if instance is not running"})}),"\n",(0,t.jsx)(n.h3,{id:"cleanup",children:"cleanup"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async cleanup(options?: Cleanup): Promise<void>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Cleanup all files used by this instance, by default ",(0,t.jsx)(n.code,{children:"{ doCleanup: true, force: false }"})," is used."]}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"options"})," can be set how to run a cleanup."]}),"\n",(0,t.jsx)(n.h3,{id:"ensureinstance",children:"ensureInstance"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async ensureInstance(): Promise<MongoInstanceData>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that the instance is running, will run ",(0,t.jsx)(n.a,{href:"#start",children:(0,t.jsx)(n.code,{children:"start"})})," if stopped, will wait if state is ",(0,t.jsx)(n.code,{children:"starting"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to ",(0,t.jsx)(n.code,{children:"await"})," the promise returned from ",(0,t.jsx)(n.code,{children:"start"})," when available."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Will Error if instance cannot be started"})}),"\n",(0,t.jsx)(n.h3,{id:"geturi",children:"getUri"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"getUri(otherDbName?: string, otherIp?: string): string"})]}),"\n",(0,t.jsx)(n.p,{children:"Get an mongodb-usable uri (can also be used in mongoose)"}),"\n",(0,t.jsxs)(n.p,{children:["When no arguments are set, the URI will always use ip ",(0,t.jsx)(n.code,{children:"127.0.0.1"})," and end with ",(0,t.jsx)(n.code,{children:"/"})," (not setting a database).",(0,t.jsx)(n.br,{}),"\n","When setting ",(0,t.jsx)(n.code,{children:"otherDbName"}),", the value of ",(0,t.jsx)(n.code,{children:"otherDbName"})," will be appended after ",(0,t.jsx)(n.code,{children:"/"})," and before any query arguments.",(0,t.jsx)(n.br,{}),"\n","When setting ",(0,t.jsx)(n.code,{children:"otherIp"}),", the ip will be the value of ",(0,t.jsx)(n.code,{children:"otherIp"})," instead of ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"createauth",children:"createAuth"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"async createAuth(data: StartupInstanceData): Promise<void>"})]}),"\n",(0,t.jsx)(n.p,{children:"Logs in into the currently running instance and restarts it with auth enabled"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Instance will not be restarted if the storage engine is ",(0,t.jsx)(n.code,{children:"ephemeralForTest"})," because data will not persist across restarts",(0,t.jsx)("br",{}),"\nIt is still usefull if an user is always required in connection logic and mongodb throws an error that an user does not exists / cannot login"]})}),"\n",(0,t.jsx)(n.h2,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h3,{id:"instanceinfo",children:"instanceInfo"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"get instanceInfo(): MongoInstanceData | undefined"})]}),"\n",(0,t.jsxs)(n.p,{children:["Getter for ",(0,t.jsx)(n.a,{href:"#_instanceInfo",children:(0,t.jsx)(n.code,{children:"_instanceInfo"})})]}),"\n",(0,t.jsx)(n.h3,{id:"_instanceinfo",children:"_instanceInfo"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"protected _instanceInfo?: MongoInstanceData"})]}),"\n",(0,t.jsx)(n.p,{children:"Stores the instance information"}),"\n",(0,t.jsx)(n.h3,{id:"opts",children:"opts"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"opts: MongoMemoryServerOpts"})]}),"\n",(0,t.jsxs)(n.p,{children:["Store the instance options, uses ",(0,t.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-opts",children:(0,t.jsx)(n.code,{children:"MongoMemoryServerOpts"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"state",children:"state"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"get state(): MongoMemoryServerStates"})]}),"\n",(0,t.jsxs)(n.p,{children:["Getter for ",(0,t.jsx)(n.a,{href:"#_state",children:(0,t.jsx)(n.code,{children:"_state_"})})]}),"\n",(0,t.jsx)(n.h3,{id:"_state",children:"_state"}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:"Internal"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"protected _state: MongoMemoryServerStates"})]}),"\n",(0,t.jsxs)(n.p,{children:["Stores the current State, uses ",(0,t.jsxs)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/enums/mongo-memory-server-states",children:[(0,t.jsx)(n.code,{children:"MongoMemoryServerStates"})," enum"]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"auth",children:"auth"}),"\n",(0,t.jsxs)(n.p,{children:["Typings: ",(0,t.jsx)(n.code,{children:"readonly auth?: Required<AutomaticAuth>"})]}),"\n",(0,t.jsxs)(n.p,{children:["Stores automatic auth creation options, uses ",(0,t.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/interfaces/mongo-memory-server-automaticauth",children:(0,t.jsx)(n.code,{children:"AutomaticAuth"})})," with all values defined."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);