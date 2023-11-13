"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[7563],{9141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var o=s(5893),i=s(1151);const r={id:"known-issues",title:"Known Issues"},l=void 0,t={id:"guides/known-issues",title:"Known Issues",description:"ArchLinux on Docker",source:"@site/../docs/guides/known-issues.md",sourceDirName:"guides",slug:"/guides/known-issues",permalink:"/mongodb-memory-server/versions/beta/docs/guides/known-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/known-issues.md",tags:[],version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"guides",previous:{title:"Frequently Asked Questions",permalink:"/mongodb-memory-server/versions/beta/docs/guides/faq"},next:{title:"Supported Systems",permalink:"/mongodb-memory-server/versions/beta/docs/guides/supported-systems"}},d={},c=[{value:"ArchLinux on Docker",id:"archlinux-on-docker",level:2},{value:"No Build available for Alpine Linux",id:"no-build-available-for-alpine-linux",level:2},{value:"libcurl on older or custom Docker images",id:"libcurl-on-older-or-custom-docker-images",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"archlinux-on-docker",children:"ArchLinux on Docker"}),"\n",(0,o.jsxs)(n.p,{children:["It is known that ArchLinux on Docker does not have an ",(0,o.jsx)(n.code,{children:"/etc/os-release"})," or ",(0,o.jsx)(n.code,{children:"/etc/lsb-release"}),", so detection will not work."]}),"\n",(0,o.jsx)(n.p,{children:"Workaround:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create one of these files (either manually, or install ",(0,o.jsx)(n.code,{children:"lsb-release"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Use a SystemBinary with ",(0,o.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/config-options#SYSTEM_BINARY",children:(0,o.jsx)(n.code,{children:"SYSTEM_BINARY"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Use an pre-set Archive Name to be used with ",(0,o.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/config-options#ARCHIVE_NAME",children:(0,o.jsx)(n.code,{children:"ARCHIVE_NAME"})})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"no-build-available-for-alpine-linux",children:"No Build available for Alpine Linux"}),"\n",(0,o.jsxs)(n.p,{children:["It is known that ",(0,o.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/guides/supported-systems#Alpine",children:"AlpineLinux"})," does not have an official build (and no build like the ubuntu build works)."]}),"\n",(0,o.jsx)(n.p,{children:"Workaround:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use a SystemBinary with ",(0,o.jsx)(n.a,{href:"/mongodb-memory-server/versions/beta/docs/api/config-options#SYSTEM_BINARY",children:(0,o.jsx)(n.code,{children:"SYSTEM_BINARY"})})]}),"\n",(0,o.jsx)(n.li,{children:"Do not use AlpineLinux"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"libcurl-on-older-or-custom-docker-images",children:"libcurl on older or custom Docker images"}),"\n",(0,o.jsxs)(n.p,{children:["When running older docker images or a custom image not based on any ",(0,o.jsx)(n.code,{children:"node"})," image, then ",(0,o.jsx)(n.code,{children:"libcurl4"})," will likely need to be manually installed, otherwise MongoDB binary will not start since version ",(0,o.jsx)(n.code,{children:"5.0.0"})," on most distributions."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"libcurl4 is not available on your system. Mongod requires it and cannot be started without it."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This can be resolved by installing it in your image:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"apt-get install libcurl4\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var o=s(7294);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);