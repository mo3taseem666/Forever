import{c as b,r as l,j as r}from"./index-Cp609rtK.js";const v=({img:t,name:w,price:y,product:n,width:d,smallName:g})=>{const f=b(),[_,i]=l.useState(!1),[u,k]=l.useState(null),a=l.useRef({x:0,y:0}),h=e=>{if(k(Date.now()),"button"in e&&e.button===2){e.preventDefault();return}a.current={x:"clientX"in e?e.clientX:0,y:"clientY"in e?e.clientY:0},i(!1)},c=e=>{const m=Math.abs(("clientX"in e?e.clientX:0)-a.current.x),o=Math.abs(("clientY"in e?e.clientY:0)-a.current.y);(m>5||o>5)&&i(!0)},p=()=>{const e=Date.now()-(u||0),o=window.innerWidth<=768?20:200;!_&&e<=o&&f(`/product/${n._id}`,{state:n}),i(!1)};return r.jsxs("div",{onMouseDown:h,onMouseMove:c,onMouseUp:p,onTouchStart:h,onTouchMove:c,onTouchEnd:p,className:`${d||"w-full"} font-Montserrat cursor-pointer shrink-0  xs:mt-4`,children:[r.jsx("div",{className:"mb-2 overflow-hidden",children:r.jsx("img",{className:"w-full hover:scale-110 duration-200",src:n==null?void 0:n.image[0],alt:"product"})}),r.jsx("p",{className:`${g?"":"xs:text-sm"} xs:mb-1`,children:w}),r.jsxs("p",{className:`font-semibold ${g?"xs:text-base text-sm":"xs:text-xs text-sm"} `,children:["$ ",y]})]})},L=v,s=[{_id:0,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:100,image:["/assets/frontend_assets/p_img1.png"],category:"Women",subCategory:"Topwear",sizes:["S","M","L"],date:1716634345448,bestseller:!0},{_id:1,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:200,image:["/assets/frontend_assets/p_img2_1.png"],category:"Men",subCategory:"Topwear",sizes:["M","L","XL"],date:1716621345448,bestseller:!0},{_id:2,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:["/assets/frontend_assets/p_img3.png"],category:"Kids",subCategory:"Topwear",sizes:["S","L","XL"],date:1716234545448,bestseller:!0},{_id:3,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:110,image:["/assets/frontend_assets/p_img4.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","XXL"],date:1716621345448,bestseller:!0},{_id:4,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:130,image:["/assets/frontend_assets/p_img5.png"],category:"Women",subCategory:"Topwear",sizes:["M","L","XL"],date:1716622345448,bestseller:!0},{_id:5,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:["/assets/frontend_assets/p_img6.png"],category:"Kids",subCategory:"Topwear",sizes:["S","L","XL"],date:1716623423448,bestseller:!0},{_id:6,name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:["/assets/frontend_assets/p_img7.png"],category:"Men",subCategory:"Bottomwear",sizes:["S","L","XL"],date:1716621542448,bestseller:!1},{_id:7,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:["/assets/frontend_assets/p_img8.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716622345448,bestseller:!1},{_id:8,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:100,image:["/assets/frontend_assets/p_img9.png"],category:"Kids",subCategory:"Topwear",sizes:["M","L","XL"],date:1716621235448,bestseller:!1},{_id:9,name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:110,image:["/assets/frontend_assets/p_img10.png"],category:"Men",subCategory:"Bottomwear",sizes:["S","L","XL"],date:1716622235448,bestseller:!1},{_id:10,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:120,image:["/assets/frontend_assets/p_img11.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L"],date:1716623345448,bestseller:!1},{_id:11,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:150,image:["/assets/frontend_assets/p_img12.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716624445448,bestseller:!1},{_id:12,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:130,image:["/assets/frontend_assets/p_img13.png"],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716625545448,bestseller:!1},{_id:13,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:160,image:["/assets/frontend_assets/p_img14.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716626645448,bestseller:!1},{_id:14,name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:140,image:["/assets/frontend_assets/p_img15.png"],category:"Men",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716627745448,bestseller:!1},{_id:15,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:170,image:["/assets/frontend_assets/p_img16.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716628845448,bestseller:!1},{_id:16,name:"Men Tapered Fit Flat-Front Trousers",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:150,image:["/assets/frontend_assets/p_img17.png"],category:"Men",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716629945448,bestseller:!1},{_id:17,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:180,image:["/assets/frontend_assets/p_img18.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716631045448,bestseller:!1},{_id:18,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:160,image:["/assets/frontend_assets/p_img19.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716632145448,bestseller:!1},{_id:19,name:"Women Palazzo Pants with Waist Belt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:["/assets/frontend_assets/p_img20.png"],category:"Women",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716633245448,bestseller:!1},{_id:20,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:170,image:["/assets/frontend_assets/p_img21.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716634345448,bestseller:!1},{_id:21,name:"Women Palazzo Pants with Waist Belt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:200,image:["/assets/frontend_assets/p_img22.png"],category:"Women",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716635445448,bestseller:!1},{_id:22,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:180,image:["/assets/frontend_assets/p_img23.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716636545448,bestseller:!1},{_id:23,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:210,image:["/assets/frontend_assets/p_img24.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716637645448,bestseller:!1},{_id:24,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:190,image:["/assets/frontend_assets/p_img25.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716638745448,bestseller:!1},{_id:25,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:["/assets/frontend_assets/p_img26.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716639845448,bestseller:!1},{_id:26,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:200,image:["/assets/frontend_assets/p_img27.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716640945448,bestseller:!1},{_id:27,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:230,image:["/assets/frontend_assets/p_img28.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716642045448,bestseller:!1},{_id:28,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:210,image:["/assets/frontend_assets/p_img29.png"],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716643145448,bestseller:!1},{_id:29,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:240,image:["/assets/frontend_assets/p_img30.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716644245448,bestseller:!1},{_id:30,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:220,image:["/assets/frontend_assets/p_img31.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716645345448,bestseller:!1},{_id:31,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:250,image:["/assets/frontend_assets/p_img32.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716646445448,bestseller:!1},{_id:32,name:"Girls Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:230,image:["/assets/frontend_assets/p_img33.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716647545448,bestseller:!1},{_id:33,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:260,image:["/assets/frontend_assets/p_img34.png"],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716648645448,bestseller:!1},{_id:34,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:240,image:["/assets/frontend_assets/p_img35.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716649745448,bestseller:!1},{_id:35,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:270,image:["/assets/frontend_assets/p_img36.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716650845448,bestseller:!1},{_id:36,name:"Women Round Neck Cotton Top",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:250,image:["/assets/frontend_assets/p_img37.png"],category:"Women",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716651945448,bestseller:!1},{_id:37,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:280,image:["/assets/frontend_assets/p_img38.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716653045448,bestseller:!1},{_id:38,name:"Men Printed Plain Cotton Shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:260,image:["/assets/frontend_assets/p_img39.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716654145448,bestseller:!1},{_id:39,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:290,image:["/assets/frontend_assets/p_img40.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716655245448,bestseller:!1},{_id:40,name:"Men Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:270,image:["/assets/frontend_assets/p_img41.png"],category:"Men",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716656345448,bestseller:!1},{_id:41,name:"Boy Round Neck Pure Cotton T-shirt",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:300,image:["/assets/frontend_assets/p_img42.png"],category:"Kids",subCategory:"Topwear",sizes:["S","M","L","XL"],date:1716657445448,bestseller:!1},{_id:42,name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:280,image:["/assets/frontend_assets/p_img43.png"],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716658545448,bestseller:!1},{_id:43,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:310,image:["/assets/frontend_assets/p_img44.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716659645448,bestseller:!1},{_id:44,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:290,image:["/assets/frontend_assets/p_img45.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716660745448,bestseller:!1},{_id:45,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:320,image:["/assets/frontend_assets/p_img46.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716661845448,bestseller:!1},{_id:46,name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:300,image:["/assets/frontend_assets/p_img47.png"],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716662945448,bestseller:!1},{_id:47,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:330,image:["/assets/frontend_assets/p_img48.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716664045448,bestseller:!1},{_id:48,name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:310,image:["/assets/frontend_assets/p_img49.png"],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716665145448,bestseller:!1},{_id:49,name:"Kid Tapered Slim Fit Trouser",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:340,image:["/assets/frontend_assets/p_img50.png"],category:"Kids",subCategory:"Bottomwear",sizes:["S","M","L","XL"],date:1716666245448,bestseller:!1},{_id:50,name:"Women Zip-Front Relaxed Fit Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:320,image:["/assets/frontend_assets/p_img51.png"],category:"Women",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716667345448,bestseller:!1},{_id:51,name:"Men Slim Fit Relaxed Denim Jacket",description:"A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",price:350,image:["/assets/frontend_assets/p_img52.png"],category:"Men",subCategory:"Winterwear",sizes:["S","M","L","XL"],date:1716668445448,bestseller:!1}];s.filter(t=>t.category==="Men");s.filter(t=>t.category==="Women");s.filter(t=>t.category==="Kids");s.filter(t=>t.subCategory==="Topwear");s.filter(t=>t.subCategory==="Bottomwear");s.filter(t=>t.subCategory==="Winterwear");export{L as P,s as p};
