if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>n(e,s),c={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"my-wedding"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/760f864b26962105.JPG",revision:null},{url:"/8b91c6a3ec907513.JPG",revision:null},{url:"/css/app.ff0826c9.css",revision:null},{url:"/img/aziz.ac3d601c.png",revision:null},{url:"/img/bca aziz.d9fa53bd.jpg",revision:null},{url:"/img/bca wery.58dfb70b.jpg",revision:null},{url:"/img/foot banner.444f963b.jpg",revision:null},{url:"/img/protocol.dc6b9258.png",revision:null},{url:"/img/wery1.85ac81f3.png",revision:null},{url:"/index.html",revision:"bc324b498e4b32f19f5884844c6c85e7"},{url:"/js/app.0cb2da18.js",revision:null},{url:"/js/chunk-vendors.b2aa6be6.js",revision:null},{url:"/manifest.json",revision:"5f6b16b38f7e49155a4ac355f4bef834"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
