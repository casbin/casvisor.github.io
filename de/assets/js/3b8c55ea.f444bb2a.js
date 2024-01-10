"use strict";(self.webpackChunkcasvisor_website=self.webpackChunkcasvisor_website||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"Server Installation",description:"Install and configure Casvisor server.",keywords:["Casvisor server","installation","configuration"],authors:["leo220yuyaodog"]},i=void 0,l={unversionedId:"installation",id:"installation",title:"Server Installation",description:"Install and configure Casvisor server.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/de/docs/installation",draft:!1,editUrl:"https://github.com/casbin/casvisor-website/edit/master/docs/installation.md",tags:[],version:"current",frontMatter:{title:"Server Installation",description:"Install and configure Casvisor server.",keywords:["Casvisor server","installation","configuration"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/de/docs/overview"},next:{title:"Assets",permalink:"/de/docs/category/assets"}},s={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Casdoor configuration",id:"casdoor-configuration",level:3},{value:"Create an organization",id:"create-an-organization",level:4},{value:"Create an application",id:"create-an-application",level:4},{value:"Download",id:"download",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Backend",id:"backend",level:3},{value:"Database",id:"database",level:4},{value:"Connect Casdoor",id:"connect-casdoor",level:4},{value:"Frontend",id:"frontend",level:3},{value:"Run",id:"run",level:2},{value:"Production",id:"production",level:3},{value:"Build frontend",id:"build-frontend",level:4},{value:"Run backend",id:"run-backend",level:4},{value:"Development",id:"development",level:3},{value:"Run frontend",id:"run-frontend",level:4},{value:"Run backend",id:"run-backend-1",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Casvisor server uses Casdoor as the authentication and authorization system. So you need to install Casdoor first. If\nyou haven't installed Casdoor, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation"},"Casdoor Installation"),"."),(0,o.kt)("h3",{id:"casdoor-configuration"},"Casdoor configuration"),(0,o.kt)("p",null,"You have installed Casdoor, now you need to do some necessary configuration in Casdoor in order to use Casvisor."),(0,o.kt)("h4",{id:"create-an-organization"},"Create an organization"),(0,o.kt)("p",null,"First, you need to create an organization (Except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"build-in"),") in Casdoor. The organization page is at ",(0,o.kt)("strong",{parentName:"p"},"User Management -> Organizations"),".\nAnd you can create an organization by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create organization",src:n(372).Z,width:"1916",height:"976"})),(0,o.kt)("h4",{id:"create-an-application"},"Create an application"),(0,o.kt)("p",null,"You need to create an application for Casvisor in Casdoor. The application page is at ",(0,o.kt)("strong",{parentName:"p"},"Identity -> Applications"),". And you\ncan create an application by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create application",src:n(4078).Z,width:"1898",height:"961"})),(0,o.kt)("p",null,"Required fields:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Home"),": The host of Casvisor server, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:16001"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Ognization"),": The organization you created in the previous step."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Callback URLs"),": The callback URL of Casvisor server, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:16001/callback"),". You can add multiple\ncallback URLs by clicking the ",(0,o.kt)("inlineCode",{parentName:"li"},"add")," button. These are the urls that is allowed to be redirected after login.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"application edit",src:n(5107).Z,width:"1153",height:"861"})),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"The source code of Casvisor is hosted on GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casvisor"},"https://github.com/casbin/casvisor"),". Both the Go backend code and React frontend code are contained in a single repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"),(0,o.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("td",{parentName:"tr",align:null},"Web frontend UI for Casdoor"),(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript + React"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casvisor/tree/master/web"},"https://github.com/casbin/casvisor/tree/master/web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backend"),(0,o.kt)("td",{parentName:"tr",align:null},"RESTful API backend for Casdoor"),(0,o.kt)("td",{parentName:"tr",align:null},"Golang + Beego + XORM"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casvisor"},"https://github.com/casbin/casvisor"))))),(0,o.kt)("p",null,"Casvisor supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Go Modules"),". To download the code, simply clone the code using git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/casbin/casvisor\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"The configuration file of Casvisor backend located at ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),". You need to modify the following fields:"),(0,o.kt)("h4",{id:"database"},"Database"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSourceName")," to your own database connection string. Casvisor will create a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"casvisor")," if it doesn't exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"driverName = mysql\ndataSourceName = root:123456@tcp(localhost:3306)/\ndbName = casvisor\n")),(0,o.kt)("h4",{id:"connect-casdoor"},"Connect Casdoor"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorEndpoint"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorOrganization")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"casdoorApplication")," to your own Casdoor configuration.\nYou can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret")," from the application page that you created in the previous step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'casdoorEndpoint = http://localhost:8000\nclientId = c34fdf145f41313727a8\nclientSecret = 615c503d4552d24a40360cf908b6d17e3b7f8832\ncasdoorOrganization = "casbin"\ncasdoorApplication = "app-casvisor"\n')),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"web/src/conf.js"),", you need to modify the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    export const AuthConfig = {\n    serverUrl: "http://localhost:8000",\n    clientId: "c34fdf145f4131b727a8",\n    appName: "app-casvisor",\n    organizationName: "casbin",\n    redirectPath: "/callback",\n};\n')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Before running Casvisor, make sure Casdoor is running."),(0,o.kt)("h3",{id:"production"},"Production"),(0,o.kt)("p",null,"In production, you need to build the frontend code first, then run the backend code."),(0,o.kt)("h4",{id:"build-frontend"},"Build frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nyarn install\nyarn build\n")),(0,o.kt)("p",null,"After building successfully, the frontend bundle will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"web/build")," directory."),(0,o.kt)("h4",{id:"run-backend"},"Run backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n")),(0,o.kt)("p",null,"Visit backend server at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:19000"},"http://localhost:19000"),"."),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"In development, you need to run the frontend code and backend code at the same time."),(0,o.kt)("h4",{id:"run-frontend"},"Run frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web\nyarn install\nyarn start\n")),(0,o.kt)("h4",{id:"run-backend-1"},"Run backend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go build\n")),(0,o.kt)("p",null,"Visit frontend server ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:16001"},"http://localhost:16001"),"."))}u.isMDXComponent=!0},4078:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installtion_application-4e6390480ceae235dbc7913f1c68c8be.png"},5107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installtion_application_edit-4e415510dcbb00ba6342c558f76c29f0.png"},372:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installtion_organization-cd98db6b989aff2c57d870cbd0aced85.png"}}]);