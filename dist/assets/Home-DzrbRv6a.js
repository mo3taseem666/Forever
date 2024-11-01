import{r as l,j as e,F as o,f as b,a as N,b as y,u as v,c as S,d as z}from"./index-Cp609rtK.js";import{T as f}from"./Title-D6jIki7v.js";import{p,P as g}from"./assets-B6sSFy5h.js";import{S as C}from"./Subscribe-0Wsx2qAn.js";import{n as E,a as w,Q as k}from"./Toast-37yDNbqs.js";import"./clsx-B-dksMZM.js";const d="/assets/2147825037-BTD9lFjt.webp",x="/assets/2148760653-BO1NGMjf.webp",u="/assets/2148624967-DCemKCRP.webp";function L({setSelected:s,heroPic3:i,heroPic2:t,heroPic:a,selected:r}){const[c,j]=l.useState(!0);function h(n){n.stopPropagation()}return e.jsxs("div",{onClick:()=>j(!c),className:`${c?"xs:opacity-0":""} duration-200 absolute top-0 h-full left-20 xs:backdrop-blur-sm xs:bg-white/40 xs:left-0 xs:gap-4 xs:w-full text-gray-800 xs:text-gray-950 gap-10 flex-row-reverse flex items-center justify-center`,children:[e.jsxs("div",{className:"flex cursor-default flex-col gap-2 justify-center",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"h-[2px] w-10 bg-gray-800"}),e.jsx("p",{className:"font-semibold xs:text-sm",children:"OUR BESTSELLERS"})]}),e.jsx("p",{className:"text-7xl font-medium xs:text-4xl font-FrankRuhlLibre",children:"Latest Arrivals"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("p",{className:"font-semibold xs:text-sm",children:"SHOP NOW"}),e.jsx("div",{className:"h-[1px] w-10 bg-gray-800"})]})]}),e.jsxs("div",{onClick:n=>h(n),className:"flex flex-col items-center gap-3 ",children:[e.jsx("div",{className:"size-4 xs:size-3 flex justify-center items-center",children:e.jsx("div",{onClick:()=>s(a),className:`${r===a?"size-4 xs:size-3 bg-gray-700 xs:bg-gray-950":"size-3 xs:size-2 bg-gray-500 xs:bg-gray-700"} cursor-pointer duration-[100ms] ease-in-out rounded-full`})}),e.jsx("div",{className:"size-4 xs:size-3 flex justify-center items-center",children:e.jsx("div",{onClick:()=>s(t),className:`${r===t?"size-4 xs:size-3 bg-gray-700 xs:bg-gray-950":"size-3 xs:size-2 bg-gray-500 xs:bg-gray-700"} cursor-pointer duration-[100ms] ease-in-out rounded-full`})}),e.jsx("div",{className:"size-4 xs:size-3 flex justify-center items-center",children:e.jsx("div",{onClick:()=>s(i),className:`${r===i?"size-4 xs:size-3 bg-gray-700 xs:bg-gray-950":"size-3 xs:size-2 bg-gray-500 xs:bg-gray-700"} cursor-pointer duration-[100ms] ease-in-out rounded-full`})})]})]})}function P(){const[s,i]=l.useState(x),[t,a]=l.useState(0);return l.useEffect(()=>{s!==u&&a(r=>r+1)},[s]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border border-black relative h-full w-full",children:e.jsx("img",{src:s,alt:"heroPic",className:`w-full ${t&&"fadeScale"} h-[650px] ${s===x?"object-right-cus2":s===d?"xs:object-right-cus3":""} xs:object-right-cus2 xs:h-[500px] xs:object-right-cus object-cover shrink-0`},s)}),e.jsx(L,{selected:s,heroPic:u,heroPic2:x,heroPic3:d,setSelected:i})]})}function T(){return e.jsxs("div",{className:"pt-14 xs:pt-10 ",children:[e.jsx(f,{first:"LATEST",second:"COLLECTION"}),e.jsx("p",{className:"text-center xs:mb-2 text-sm font-medium",children:"Explore our newest collection and be unique like our modern pieces"}),e.jsx("div",{className:"grid gap-5 mt-10 xs:grid-cols-2 grid-cols-5",children:p.slice(10,20).map(s=>e.jsx(g,{name:s.name,price:s.price,img:s.image,product:s},s._id))})]})}function O(){return e.jsxs("div",{className:"pt-14",children:[e.jsx(f,{first:"BEST",second:"SELLERS"}),e.jsx("p",{className:"text-center text-sm font-medium",children:"Explore our best collection and our people's favourite pieces"}),e.jsx("div",{className:"grid BEST xs:mt-5 mt-10 xs:grid-cols-2 gap-5 grid-cols-5",children:p.filter(s=>s.bestseller).slice(0,5).map(s=>e.jsx(g,{name:s.name,price:s.price,img:s.image,product:s},s._id))})]})}function m({icon:s,name:i,details:t}){return e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[s,e.jsx("p",{className:"font-semibold text-gray-800 mt-5",children:i}),e.jsx("p",{className:"font-medium text-gray-400",children:t})]})}function R(){return e.jsxs("div",{className:"flex w-[90%] xs:flex-col xs:gap-10 mx-auto items-center mt-32 xs:mt-10 xs:border-y xs:py-10 justify-between",children:[e.jsx(m,{name:"Easy Exchange Policy",details:"We offer hassle free exchange policy",icon:e.jsx(o,{icon:b,className:"text-4xl"})}),e.jsx(m,{name:"7 Days Return Policy",details:"We provide 7 days free return policy",icon:e.jsx(o,{icon:N,className:"text-4xl"})}),e.jsx(m,{name:"Best customer support",details:"we provide 24/7 customer support",icon:e.jsx(o,{icon:y,className:"text-4xl"})})]})}function I(){const s=v(),i=S(),{userInfo:t,user:a}=z();return console.log(t),l.useEffect(()=>{var r,c;(r=s==null?void 0:s.state)!=null&&r.loggedIn?(E(t!=null&&t.fullName?t.fullName:a!=null&&a.displayName?a.displayName:""),i("/",{replace:!0})):(c=s==null?void 0:s.state)!=null&&c.SingedUp&&(w(),i("/",{replace:!0}))},[s.state,i,t]),e.jsxs(e.Fragment,{children:[e.jsx(k,{autoClose:2e3,pauseOnHover:!1}),e.jsxs("div",{className:"w-full mt-14",children:[e.jsx("div",{className:"relative",children:e.jsx(P,{})}),e.jsx(T,{}),e.jsx(O,{}),e.jsx(R,{}),e.jsx(C,{})]})]})}export{I as default};