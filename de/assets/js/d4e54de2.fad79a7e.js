"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"Server Installation",description:"Install and configure Casvisor server.",keywords:["Casvisor server","installation","configuration"],authors:["leo220yuyaodog"]},i=void 0,l={unversionedId:"basic/installation",id:"basic/installation",title:"Server Installation",description:"Install and configure Casvisor server.",source:"@site/docs/basic/installation.md",sourceDirName:"basic",slug:"/basic/installation",permalink:"/de/docs/basic/installation",draft:!1,editUrl:"https://github.com/casvisor/casvisor-website/edit/master/docs/basic/installation.md",tags:[],version:"current",frontMatter:{title:"Server Installation",description:"Install and configure Casvisor server.",keywords:["Casvisor server","installation","configuration"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/de/docs/overview"},next:{title:"(Optional) Try with Docker",permalink:"/de/docs/basic/try-with-docker"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Casdoor",id:"casdoor",level:3},{value:"Create an organization",id:"create-an-organization",level:4},{value:"Create an application",id:"create-an-application",level:4},{value:"guacd",id:"guacd",level:3},{value:"Download",id:"download",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Backend",id:"backend",level:3},{value:"Database",id:"database",level:4},{value:"Connect Casdoor",id:"connect-casdoor",level:4},{value:"Frontend",id:"frontend",level:3},{value:"Run",id:"run",level:2},{value:"Production",id:"production",level:3},{value:"Build frontend",id:"build-frontend",level:4},{value:"Run backend",id:"run-backend",level:4},{value:"Development",id:"development",level:3},{value:"Run frontend",id:"run-frontend",level:4},{value:"Run backend",id:"run-backend-1",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Casvisor server uses Casdoor as the authentication and authorization system. So you need to install Casdoor first. If\nyou haven't installed Casdoor, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation"},"Casdoor Installation"),"."),(0,o.kt)("h3",{id:"casdoor"},"Casdoor"),(0,o.kt)("p",null,"You have installed Casdoor, now you need to do some necessary configuration in Casdoor in order to use Casvisor."),(0,o.kt)("h4",{id:"create-an-organization"},"Create an organization"),(0,o.kt)("p",null,"First, you need to create an organization (Except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"build-in"),") in Casdoor. The organization page is at ",(0,o.kt)("strong",{parentName:"p"},"User Management -> Organizations"),".\nAnd you can create an organization by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create organization",src:a(372).Z,width:"1916",height:"976"})),(0,o.kt)("h4",{id:"create-an-application"},"Create an application"),(0,o.kt)("p",null,"You need to create an application for Casvisor in Casdoor. The application page is at ",(0,o.kt)("strong",{parentName:"p"},"Identity -> Applications"),". And you\ncan create an application by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create application",src:a(4078).Z,width:"1898",height:"961"})),(0,o.kt)("p",null,"Required fields:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Home"),": The host of Casvisor server, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:16001"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Ognization"),": The organization you created in the previous step."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Callback URLs"),": The callback URL of Casvisor server, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:16001/callback"),". You can add multiple\ncallback URLs by clicking the ",(0,o.kt)("inlineCode",{parentName:"li"},"add")," button. These are the urls that is allowed to be redirected after login.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"application edit",src:a(5107).Z,width:"1153",height:"861"})),(0,o.kt)("h3",{id:"guacd"},"guacd"),(0,o.kt)("p",null,"Casvisor uses guacamole-server to provide remote desktop access. If you want to use this feature, you need to install\nguacamole-server first. If you haven't installed guacamole-server, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://guacamole.apache.org/doc/gug/installing-guacamole.html"},"guacamole-server Installation"),"."),(0,o.kt)("p",null,"You can also run guacd in docker with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name guacd -p 4822:4822 guacamole/guacd\n")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"The source code of Casvisor is hosted on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casvisor/casvisor"},"https://github.com/casvisor/casvisor"),". Both the Go backend code and React frontend code are contained in a single repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"),(0,o.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("td",{parentName:"tr",align:null},"Web frontend UI for Casdoor"),(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript + React"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casvisor/casvisor/tree/master/web"},"https://github.com/casvisor/casvisor/tree/master/web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backend"),(0,o.kt)("td",{parentName:"tr",align:null},"RESTful API backend for Casdoor"),(0,o.kt)("td",{parentName:"tr",align:null},"Golang + Beego + XORM"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casvisor/casvisor"},"https://github.com/casvisor/casvisor"))))),(0,o.kt)("p",null,"Casvisor supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Go Modules"),". To download the code, simply clone the code using git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casvisor/casvisor\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"The configuration file of Casvisor backend located at ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),". You need to modify the following fields:"),(0,o.kt)("h4",{id:"database"},"Database"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSourceName")," to your own database connection string. Casvisor will create a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"casvisor")," if it doesn't exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"driverName = mysql\ndataSourceName = root:123456@tcp(localhost:3306)/\ndbName = casvisor\n")),(0,o.kt)("h4",{id:"connect-casdoor"},"Connect Casdoor"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorEndpoint"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorOrganization")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorApplication")," to your own Casdoor configuration.\nYou can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," from the application page that you created in the previous step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'casdoorEndpoint = http://localhost:8000\nclientId = c34fdf145f41313727a8\nclientSecret = 615c503d4552d24a40360cf908b6d17e3b7f8832\ncasdoorOrganization = "casbin"\ncasdoorApplication = "app-casvisor"\n')),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"web/src/conf.js"),", you need to modify the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    export const AuthConfig = {\n    serverUrl: "http://localhost:8000",\n    clientId: "c34fdf145f4131b727a8",\n    appName: "app-casvisor",\n    organizationName: "casbin",\n    redirectPath: "/callback",\n};\n')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Before running Casvisor, make sure Casdoor is running."),(0,o.kt)("h3",{id:"production"},"Production"),(0,o.kt)("p",null,"In production, you need to build the frontend code first, then run the backend code."),(0,o.kt)("h4",{id:"build-frontend"},"Build frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nyarn install\nyarn build\n")),(0,o.kt)("p",null,"After building successfully, the frontend bundle will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"web/build")," directory."),(0,o.kt)("h4",{id:"run-backend"},"Run backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n")),(0,o.kt)("p",null,"Visit backend server at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:19000"},"http://localhost:19000"),"."),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"In development, you need to run the frontend code and backend code at the same time."),(0,o.kt)("h4",{id:"run-frontend"},"Run frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nyarn install\nyarn start\n")),(0,o.kt)("h4",{id:"run-backend-1"},"Run backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n")),(0,o.kt)("p",null,"Visit frontend server ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:16001"},"http://localhost:16001"),"."))}u.isMDXComponent=!0},4078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installtion_application-4e6390480ceae235dbc7913f1c68c8be.png"},5107:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installtion_application_edit-4e415510dcbb00ba6342c558f76c29f0.png"},372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installtion_organization-cd98db6b989aff2c57d870cbd0aced85.png"}}]);