"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Intranet",description:"Connect assets in intranet",keywords:["Casvisor","intranet","nat-traversal"],authors:["leo220yuyaodog"]},s=void 0,i={unversionedId:"asset/intranet",id:"asset/intranet",title:"Intranet",description:"Connect assets in intranet",source:"@site/docs/asset/intranet.md",sourceDirName:"asset",slug:"/asset/intranet",permalink:"/ja/docs/asset/intranet",draft:!1,editUrl:"https://github.com/casvisor/casvisor-website/edit/master/docs/asset/intranet.md",tags:[],version:"current",frontMatter:{title:"Intranet",description:"Connect assets in intranet",keywords:["Casvisor","intranet","nat-traversal"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/ja/docs/asset/database"},next:{title:"Commands",permalink:"/ja/docs/category/commands"}},l={},c=[{value:"Config Casvisor server",id:"config-casvisor-server",level:2},{value:"Config intranet asset",id:"config-intranet-asset",level:2},{value:"Deploy Casvisor agent",id:"deploy-casvisor-agent",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The section will tell you how to config an intranet asset and connect to your intranet asset. Casvisor uses NAT traversal\ntechnology to connect to your intranet asset. You need to deploy a Casvisor agent in your intranet machine. After the\nagent is connected to the Casvisor server, you can both connect to the intranet RDP asset by Casvisor web UI and other tools like mstsc."),(0,a.kt)("h2",{id:"config-casvisor-server"},"Config Casvisor server"),(0,a.kt)("p",null,"If you want start the NAT traversal service, you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"gatewayEndpoint")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The host is your Casvisor server public IP or domain."),(0,a.kt)("li",{parentName:"ul"},"The port is the port that listens to the Casvisor agent connection request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},'gatewayEndpoint = "<host>:<port>"\n')),(0,a.kt)("h2",{id:"config-intranet-asset"},"Config intranet asset"),(0,a.kt)("p",null,"Fill in the required fields that connect to your intranet asset."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: The ",(0,a.kt)("strong",{parentName:"li"},"hostname")," of the intranet machine."),(0,a.kt)("li",{parentName:"ul"},"Category: The category of the asset, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Machine"),"."),(0,a.kt)("li",{parentName:"ul"},"Protocol: The protocol of the asset, select ",(0,a.kt)("inlineCode",{parentName:"li"},"RDP"),"."),(0,a.kt)("li",{parentName:"ul"},"Gateway port: The port in the Casvisor server that listens to the user's connection request.")),(0,a.kt)("p",null,"For example, fill in Gateway port with ",(0,a.kt)("inlineCode",{parentName:"p"},"7000"),". Then the user can connect to the intranet machine by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh <Username>@<Casvisor server public IP> -p 7000\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Endpoint: The host or IP of the intranet machine."),(0,a.kt)("li",{parentName:"ul"},"Port: The port of the application in the intranet machine."),(0,a.kt)("li",{parentName:"ul"},"Username: The username of the application."),(0,a.kt)("li",{parentName:"ul"},"Password: The password of the application.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"config",src:n(9268).Z,width:"1345",height:"944"})),(0,a.kt)("h2",{id:"deploy-casvisor-agent"},"Deploy Casvisor agent"),(0,a.kt)("p",null,"Casvisor agent is the same as Casvisor server, just deploy Casvisor in your intranet machine and start it with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," as the server."))}d.isMDXComponent=!0},9268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/asset_intranet_config-7694f000fe6a60c1cf581d054202f10d.png"}}]);