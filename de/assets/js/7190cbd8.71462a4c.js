"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"RDP",description:"Casvisor Assets RDP",keywords:["assets rdp"],authors:["leoil"]},s=void 0,p={unversionedId:"asset/rdp",id:"asset/rdp",title:"RDP",description:"Casvisor Assets RDP",source:"@site/docs/asset/rdp.md",sourceDirName:"asset",slug:"/asset/rdp",permalink:"/de/docs/asset/rdp",draft:!1,editUrl:"https://github.com/casbin/casvisor-website/edit/master/docs/asset/rdp.md",tags:[],version:"current",frontMatter:{title:"RDP",description:"Casvisor Assets RDP",keywords:["assets rdp"],authors:["leoil"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/de/docs/asset/overview"},next:{title:"VNC",permalink:"/de/docs/asset/vnc"}},i={},c=[{value:"Rdp connection",id:"rdp-connection",level:2},{value:"Remote App",id:"remote-app",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casvisor Support Connect to your assets via RDP protocol:"),(0,a.kt)("h2",{id:"rdp-connection"},"Rdp connection"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Guacamole Server"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name guacd -d -p 4822:4822 guacamole/guacd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new asset, set protocol to ",(0,a.kt)("inlineCode",{parentName:"p"},"rdp"),"\n",(0,a.kt)("img",{alt:"add list",src:r(9263).Z,width:"2484",height:"319"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"add edit",src:r(9044).Z,width:"2470",height:"1017"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to your asset by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," button"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"connect asset",src:r(9006).Z,width:"1920",height:"1080"})))),(0,a.kt)("h2",{id:"remote-app"},"Remote App"),(0,a.kt)("p",null,"We support remote app on Windows assets, you can add remote apps on ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset Edit")," page, and then you can connect to your remote app by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," button."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your remote app on the server end.",(0,a.kt)("br",{parentName:"p"}),"\n","You can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kimmknight/remoteapptool"},"RemoteApp Tool")," to register apps.\n",(0,a.kt)("img",{alt:"remote app config",src:r(5753).Z,width:"746",height:"909"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the remote app information in the asset edit page according to the server-end configuration.\n'remoteAppName', 'remoteAppDir', and 'remoteAppArgs' are required.\n",(0,a.kt)("img",{alt:"asset config",src:r(5571).Z,width:"2217",height:"175"}),"\nrefer to ",(0,a.kt)("a",{parentName:"p",href:"https://guacamole.apache.org/doc/gug/configuring-guacamole.html#remoteapp"},"Configuring Guacamole \u2014 Apache Guacamole Manual v1.5.3"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to your remote app."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"rmeote app connect",src:r(4368).Z,width:"2560",height:"1380"})))))}m.isMDXComponent=!0},9044:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/asset_edit-34f775bd68438c4f7a80597541a5898c.png"},9263:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/asset_list-4d147709188e8ec2a8b222f50b0c3708.png"},4368:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/asset_remote_app-621440cd11b59906989db7353ec7cc22.gif"},5571:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/casvisor_remote_app_config-ee204e9e0178261e3e04078b0c3302f3.png"},9006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rdp-9041ae01de477eccb4c7b2aef13d42fb.gif"},5753:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/remote_app_config-b1302c0ed2818d90062f44f4cd49415a.png"}}]);