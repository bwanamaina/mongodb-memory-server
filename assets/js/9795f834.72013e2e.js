"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[515],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5051:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"docker",title:"Integration with Docker"},d=void 0,s={unversionedId:"guides/integration-examples/docker",id:"guides/integration-examples/docker",title:"Integration with Docker",description:"This Guide will show how mongodb-memory-server can be used with Docker & dockerfiles.",source:"@site/../docs/guides/integration-examples/docker.md",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/docker",permalink:"/mongodb-memory-server/docs/guides/integration-examples/docker",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/integration-examples/docker.md",tags:[],version:"current",frontMatter:{id:"docker",title:"Integration with Docker"},sidebar:"guides",previous:{title:"Integration with Test Runners",permalink:"/mongodb-memory-server/docs/guides/integration-examples/test-runners"},next:{title:"Enable Debug Mode",permalink:"/mongodb-memory-server/docs/guides/enable-debug-mode"}},c={},m=[{value:"Important Notes before Starting",id:"important-notes-before-starting",level:2},{value:"Writing a dockerfile with mongodb binary caching",id:"writing-a-dockerfile-with-mongodb-binary-caching",level:2},{value:"<code>.dockerignore</code>",id:"dockerignore",level:3},{value:"<code>dockerfile</code>",id:"dockerfile",level:3}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This Guide will show how ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server")," can be used with Docker & dockerfiles."),(0,i.kt)("h2",{id:"important-notes-before-starting"},"Important Notes before Starting"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is common that images like ",(0,i.kt)("inlineCode",{parentName:"p"},"node:16-alpine")," are used, which will not work with this package, because mongodb does not provide binaries for Alpine yet.\nIt is recommended to switch to images like ",(0,i.kt)("inlineCode",{parentName:"p"},"node:16")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"node:16-buster"),") for Debian builds."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/guides/known-issues#no-build-available-for-alpine-linux"},"No Build available for Alpine Linux"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Docker Debian builds (at least with ",(0,i.kt)("inlineCode",{parentName:"p"},"debian:11"),"), extra packages have to be installed:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"apt-get install libcurl4 # for Debian 10+ to fix CURL_OPENSSL_4\n# OR\napt-get install libcurl3 # for Debian 9 (and before) to fix CURL_OPENSSL_3\n"))),(0,i.kt)("h2",{id:"writing-a-dockerfile-with-mongodb-binary-caching"},"Writing a dockerfile with mongodb binary caching"),(0,i.kt)("p",null,"Sometimes you want to have the tests isolated from the host system and also have caching working for mongodb-memory-server."),(0,i.kt)("h3",{id:"dockerignore"},(0,i.kt)("inlineCode",{parentName:"h3"},".dockerignore")),(0,i.kt)("p",null,"It is recommended to have the following added to the ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," file to make sure that no host-specific things are copied into the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerignore"},"# ignore all node_modules, no matter where, like when having a monorepo\n**/node_modules\n")),(0,i.kt)("p",null,"If the above is not added to the ",(0,i.kt)("inlineCode",{parentName:"p"},".dockeringore")," then the following may happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Best case is just added bloat if the host system is not debian (like having the host's mongodb binary copied into the image)"),(0,i.kt)("li",{parentName:"ul"},"If the host system is Debian (and to that not matching version), then the host's mongodb binary is copied in and will be used instead of downloading the actual required mongodb binary")),(0,i.kt)("p",null,"Alternatively, if no ",(0,i.kt)("inlineCode",{parentName:"p"},".dockeringore")," is used, the following could also be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# ...\nCOPY node:node . /project\n\n# Put this Instruction between the COPY and the RUN "npm install" steps\n# The following recursively deletes all directories it finds that are a directory AND have a name matching "node_modules"\nRUN find . -type d -iname "node_modules" -exec rm -rf {} \\;\n\nRUN npm install\n# ...\n')),(0,i.kt)("h3",{id:"dockerfile"},(0,i.kt)("inlineCode",{parentName:"h3"},"dockerfile")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerfile")," contains the recommended steps to build a good MMS image:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerfile")," has examples for 2 package managers: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", be sure to remove the one that will not be used.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Using a Debian build\nFROM node:16\n\n# Installing "libcurl4" because some Debian images may not come with this package installed, but is required by the mongodb binaries\nRUN apt-get install libcurl4\n\n# Settings the CWD (Current Work Directory) to "/project" to have a isolated folder for the project\n# Note: it is not recommended to set it to "/home/dockeruser", but to use "/home/dockeruser/project"\nWORKDIR /project\n\n# Copy the project (all files) into the image into "/project" as user "node:node"\n# User "node:node" is the default nodejs user in the docker images\nCOPY node:node . /project\n\n# Explicitly set the user that will be used for the next Instructions and ENTRYPOINT\nUSER node\n\n# Install all required dependencies locked to the package-lock (or yarn.lock)\n# Replace "npm install" with your package manager command of choice\nRUN npm install --ci\n# OR\nRUN yarn install --frozen-lockfile\n\n# Set the default command that will be used when running the image\n# Replace this with your command / package manager command of choice\nENTRYPOINT ["npm", "run", "test"]\n# OR\nENTRYPOINT ["yarn", "run", "test"]\n')))}u.isMDXComponent=!0}}]);