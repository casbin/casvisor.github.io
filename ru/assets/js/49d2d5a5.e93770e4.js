"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"VNC",description:"Casvisor Assets VNC",keywords:["assets vnc"],authors:["leoil"]},s=void 0,c={unversionedId:"asset/vnc",id:"asset/vnc",title:"VNC",description:"Casvisor Assets VNC",source:"@site/docs/asset/vnc.md",sourceDirName:"asset",slug:"/asset/vnc",permalink:"/ru/docs/asset/vnc",draft:!1,editUrl:"https://github.com/casvisor/casvisor-website/edit/master/docs/asset/vnc.md",tags:[],version:"current",frontMatter:{title:"VNC",description:"Casvisor Assets VNC",keywords:["assets vnc"],authors:["leoil"]},sidebar:"tutorialSidebar",previous:{title:"RDP",permalink:"/ru/docs/asset/rdp"},next:{title:"Database",permalink:"/ru/docs/asset/database"}},i={},l=[{value:"VCN Connect",id:"vcn-connect",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vcn-connect"},"VCN Connect"),(0,a.kt)("p",null,"VCN connection is similar to RDP connections."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Guacamole Server"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name guacd -d -p 4822:4822 guacamole/guacd\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new asset, set protocol to ",(0,a.kt)("inlineCode",{parentName:"p"},"vnc"),"\n",(0,a.kt)("img",{alt:"add list",src:r(9263).Z,width:"2484",height:"319"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to your asset by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," button"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"connect asset",src:r(3519).Z,width:"2560",height:"1380"})))))}d.isMDXComponent=!0},9263:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/asset_list-4d147709188e8ec2a8b222f50b0c3708.png"},3519:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vnc-50c65d3e8b1cf8be16552f788a5418c8.gif"}}]);