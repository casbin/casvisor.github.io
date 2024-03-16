"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Database",description:"Connect to your databases",keywords:["Casvisor","database","mysql","redis"],authors:["leo220yuyaodog"]},s=void 0,i={unversionedId:"asset/database",id:"asset/database",title:"Database",description:"Connect to your databases",source:"@site/docs/asset/database.md",sourceDirName:"asset",slug:"/asset/database",permalink:"/fr/docs/asset/database",draft:!1,editUrl:"https://github.com/casbin/casvisor-website/edit/master/docs/asset/database.md",tags:[],version:"current",frontMatter:{title:"Database",description:"Connect to your databases",keywords:["Casvisor","database","mysql","redis"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"VNC",permalink:"/fr/docs/asset/vnc"}},l={},c=[{value:"Config database asset",id:"config-database-asset",level:2},{value:"Connect to database",id:"connect-to-database",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The section will tell you how to add a database asset and connect to your database."),(0,r.kt)("h2",{id:"config-database-asset"},"Config database asset"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In asset list page, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," button to add a new asset."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Database")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Category")," dropdown list."),(0,r.kt)("li",{parentName:"ol"},"Select the database type in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Database type")," dropdown list, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"MySQL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MariaDB"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft SQL Server"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Redis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MongoDB"),"."),(0,r.kt)("li",{parentName:"ol"},"Fill in the required fields that connect to your database.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"config database",src:a(1660).Z,width:"1043",height:"764"})),(0,r.kt)("h2",{id:"connect-to-database"},"Connect to database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In asset list page, click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Connect")," button to connect to your database."),(0,r.kt)("li",{parentName:"ul"},"In the workbench, click the database asset to connect to your database.")))}u.isMDXComponent=!0},1660:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_databse-2deda58ace89bf61464b8efb6bbf9d24.png"}}]);