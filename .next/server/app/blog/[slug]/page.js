(()=>{var e={};e.id=308,e.ids=[308],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3319:e=>{"use strict";e.exports=import("shiki")},4300:e=>{"use strict";e.exports=require("buffer")},7147:e=>{"use strict";e.exports=require("fs")},9411:e=>{"use strict";e.exports=require("node:path")},7742:e=>{"use strict";e.exports=require("node:process")},1041:e=>{"use strict";e.exports=require("node:url")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6385:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{GlobalError:()=>u.a,__next_app__:()=>g,originalPathname:()=>m,pages:()=>f,routeModule:()=>y,tree:()=>p});var a=r(4595);r(5498),r(5866);var o=r(3191),s=r(8716),i=r(7922),u=r.n(i),c=r(5231),l={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>c[e]);r.d(t,l);var d=e([a]);a=(d.then?(await d)():d)[0];let p=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4595)),"/home/youssef/projects/youssefsiam38/src/app/blog/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5498)),"/home/youssef/projects/youssefsiam38/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],f=["/home/youssef/projects/youssefsiam38/src/app/blog/[slug]/page.tsx"],m="/blog/[slug]/page",g={require:r,loadChunk:()=>Promise.resolve()},y=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}});n()}catch(e){n(e)}})},5303:()=>{},8585:(e,t,r)=>{"use strict";var n=r(1085);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return s},RedirectType:function(){return n.RedirectType},notFound:function(){return a.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),a=r(6399);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class s extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return a},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return d},permanentRedirect:function(){return l},redirect:function(){return c}});let a=r(4580),o=r(2934),s=r(8586),i="NEXT_REDIRECT";function u(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r+";";let o=a.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function l(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,a]=e.digest.split(";",4),o=Number(a);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in s.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4595:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>f,generateMetadata:()=>p,generateStaticParams:()=>d});var a=r(9510),o=r(550),s=r(9823),i=r(644),u=r(8585),c=r(1159),l=e([o]);async function d(){return(await (0,o.u3)()).map(e=>({slug:e.slug}))}async function p({params:e}){let t=await (0,o.xl)(e.slug),{title:r,publishedAt:n,summary:a,image:i}=t.metadata,u=i?`${s.D.url}${i}`:`${s.D.url}/og?title=${r}`;return{title:r,description:a,openGraph:{title:r,description:a,type:"article",publishedTime:n,url:`${s.D.url}/blog/${t.slug}`,images:[{url:u}]},twitter:{card:"summary_large_image",title:r,description:a,images:[u]}}}async function f({params:e}){let t=await (0,o.xl)(e.slug);return t||(0,u.notFound)(),(0,a.jsxs)("section",{id:"blog",children:[a.jsx("script",{type:"application/ld+json",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:t.metadata.title,datePublished:t.metadata.publishedAt,dateModified:t.metadata.publishedAt,description:t.metadata.summary,image:t.metadata.image?`${s.D.url}${t.metadata.image}`:`${s.D.url}/og?title=${t.metadata.title}`,url:`${s.D.url}/blog/${t.slug}`,author:{"@type":"Person",name:s.D.name}})}}),a.jsx("h1",{className:"title font-medium text-2xl tracking-tighter max-w-[650px]",children:t.metadata.title}),a.jsx("div",{className:"flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]",children:a.jsx(c.Suspense,{fallback:a.jsx("p",{className:"h-5"}),children:a.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:(0,i.p)(t.metadata.publishedAt)})})}),a.jsx("article",{className:"prose dark:prose-invert",dangerouslySetInnerHTML:{__html:t.source}})]})}o=(l.then?(await l)():l)[0],n()}catch(e){n(e)}})},550:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{u3:()=>b,xl:()=>h});var a=r(7147),o=r.n(a),s=r(3673),i=r.n(s),u=r(1017),c=r.n(u),l=r(9381),d=r(3908),p=r(1269),f=r(4641),m=r(5187),g=e([l]);async function y(e){return(await (0,m.l)().use(p.Z).use(f.Z).use(l.Z,{theme:{light:"min-light",dark:"min-dark"},keepBackground:!1}).use(d.Z).process(e)).toString()}async function h(e){let t=c().join("content",`${e}.mdx`),r=o().readFileSync(t,"utf-8"),{content:n,data:a}=i()(r);return{source:await y(n),metadata:a,slug:e}}async function x(e){let t=o().readdirSync(e).filter(e=>".mdx"===c().extname(e));return Promise.all(t.map(async e=>{let t=c().basename(e,c().extname(e)),{metadata:r,source:n}=await h(t);return{metadata:r,slug:t,source:n}}))}async function b(){return x(c().join(process.cwd(),"content"))}l=(g.then?(await g)():g)[0],n()}catch(e){n(e)}})},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,47,601,698,668],()=>r(6385));module.exports=n})();