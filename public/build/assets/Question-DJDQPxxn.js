import{r as i,j as e}from"./app-CVFknPTs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),c=a=>{const t=x(a);return t.charAt(0).toUpperCase()+t.slice(1)},d=(...a)=>a.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),w=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:l,iconNode:u,...o},m)=>i.createElement("svg",{ref:m,...y,width:t,height:t,stroke:a,strokeWidth:s?Number(r)*24/Number(t):r,className:d("lucide",n),...!l&&!w(o)&&{"aria-hidden":"true"},...o},[...u.map(([p,g])=>i.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(a,t)=>{const r=i.forwardRef(({className:s,...n},l)=>i.createElement(j,{ref:l,iconNode:t,className:d(`lucide-${h(c(a))}`,`lucide-${a}`,s),...n}));return r.displayName=c(a),r};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],v=f("plus",b),N=[{question:"Siapa saja yang bisa menggunakan Tutormy.id?",answer:"Tutormy.id terbuka untuk pelajar SD, SMP, SMA, mahasiswa, bahkan umum yang ingin meningkatkan pengetahuan di bidang tertentu."},{question:"Siapa saja yang bisa menggunakan Tutormy.id?",answer:"GATAU"},{question:"Siapa saja yang bisa menggunakan Tutormy.id?",answer:"GATAU"},{question:"Siapa saja yang bisa menggunakan Tutormy.id?",answer:"GATAU."}],A=()=>{const[a,t]=i.useState(new Set([0])),r=s=>{const n=new Set(a);n.has(s)?n.delete(s):n.add(s),t(n)};return e.jsx("section",{className:"overflow-hidden ",children:e.jsxs("div",{className:"relative container mx-auto text-white py-16 lg:py-20 space-y-8",children:[e.jsx("div",{className:"absolute w-60 h-60 lg:w-80 lg:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full right-[-190px] top-16 z-0"}),e.jsxs("div",{className:"space-y-2 lg:space-y-4 w-full lg:w-1/2",children:[e.jsx("p",{className:"text-primary-2 text-sm font-semibold",children:"Frequently Ask Question"}),e.jsx("h2",{className:"text-2xl lg:text-4xl font-bold",children:"Pertanyaan yang Sering Diajukan"}),e.jsx("p",{className:"lg:text-xl text-gray-300",children:"Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 items-center gap-5 xl:gap-0",children:[e.jsx("div",{children:N.map((s,n)=>e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"rounded-lg transition-all duration-300 bg-neutral-4 px-6 py-5 relative overflow-hidden",children:[e.jsx("div",{className:"absolute left-3 top-5 bottom-5 w-[2px] bg-primary-2 rounded-full"}),e.jsxs("button",{onClick:()=>r(n),className:"w-full flex items-center justify-between text-left focus:outline-none",children:[e.jsx("span",{className:"lg:text-xl font-medium text-primary-2 pr-4",children:s.question}),e.jsx("div",{className:`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${a.has(n)?"bg-primary-4":"bg-neutral-6"}`,children:e.jsx(v,{className:`w-6 h-6 transition-colors duration-200 ${a.has(n)?"text-white":"text-neutral-1"}`})})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${a.has(n)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:e.jsx("div",{className:"pt-4",children:e.jsx("p",{className:"leading-relaxed text-sm lg:text-base",children:s.answer})})})]})},n))}),e.jsx("div",{className:"md:flex justify-center hidden",children:e.jsx("img",{src:"/assets/question-component.webp",alt:"image",className:"w-[494px] lg:h-96"})})]})]})})};export{A as default};
