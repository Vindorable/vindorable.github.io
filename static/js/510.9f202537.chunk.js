(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[510],{4864:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});i(2791);var n=i(3767),a=i(3967),s=i(184);const r=e=>{let{children:t}=e;(0,a.Z)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{p:2,sx:{width:"100vw",maxWidth:"100%",flexGrow:1,height:"100%",overflowY:"scroll"},children:(0,s.jsx)(n.Z,{direction:"row",sx:{width:"100%"},justifyContent:"space-evenly",children:(0,s.jsx)(n.Z,{position:"relative",spacing:1,p:3,sx:{width:{xs:"100%",md:"80%",lg:"60%"},maxWidth:"896px"},children:t})})})})}},5959:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var n=i(2791),a=i(3767),s=i(8075),r=i(6934),o=i(3967),c=i(3169),l=i(184);const d=(0,r.ZP)("ul")((e=>{let{theme:t,cols:i}=e;return{display:"grid",padding:0,margin:0,width:"auto",height:"auto",rowHeight:"auto",gap:12,[t.breakpoints.up("xs")]:{gridTemplateColumns:i<3?"repeat(".concat(i,", 1fr)"):"repeat(3, 1fr)"},[t.breakpoints.up("sm")]:{gridTemplateColumns:i<4?"repeat(".concat(i,", 1fr)"):"repeat(4, 1fr)"},[t.breakpoints.up("md")]:{gridTemplateColumns:i<5?"repeat(".concat(i,", 1fr)"):"repeat(5, 1fr)"},[t.breakpoints.up("lg")]:{gridTemplateColumns:i<5?"repeat(".concat(i,", 1fr)"):"repeat(5, 1fr)"}}})),h=e=>{let{imageSet:t,width:i,height:r,columns:h,aspectRatio:p,objectFit:x}=e;const m=(0,o.Z)(),g=i,u=r,j=(0,n.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%"},children:(0,l.jsx)(d,{cols:h,children:t.map((e=>(0,l.jsx)(s.Z,{sx:{aspectRatio:p||1,transition:m.transitions.create("all",{easing:m.transitions.easing.sharp,duration:m.transitions.duration.leavingScreen}),"&:hover":{transform:"scale3d(1.05, 1.05, 1)"},"&:active":{transform:"scale3d(0.95, 0.95, 1)"},cursor:"pointer"},children:(0,l.jsx)("img",{srcSet:"".concat(e.img),src:"".concat(e.img),alt:e.title,style:{width:g,height:u,maxWidth:"100%",maxHeight:"100%",borderRadius:"8px",objectFit:x||"cover"},loading:"lazy",onClick:t=>j.current.openLightbox(e)})},e.img)))})}),(0,l.jsx)(c.Z,{ref:j,imageSet:t})]})}},281:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var n=i(2791),a=i(3767),s=i(697),r=i(3967),o=i(7689),c=i(3169),l=i(184);const d=e=>{let{src:t,alt:i,url:d,lightbox:h,height:p,maxWidth:x}=e;const m=(0,r.Z)(),g=(0,o.s0)(),u=(0,n.useRef)(null),j=[{img:t,title:i}];function b(e){return 0===e.indexOf("//")&&(e=window.location.protocol+e),e.toLowerCase().replace(/([a-z])?:\/\//,"$1").split("/")[0]}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{alignItems:"center",justifyContent:"center",sx:{width:"100%"},children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(s.Z,{component:"img",sx:{width:"100%",maxWidth:x,height:p||"auto",cursor:d||h?"pointer":"default",transition:m.transitions.create("all",{easing:m.transitions.easing.sharp,duration:m.transitions.duration.leavingScreen}),"&:hover":d||h?{transform:"scale3d(1.05, 1.05, 1)"}:void 0,"&:active":d||h?{transform:"scale3d(0.95, 0.95, 1)"}:void 0,objectFit:"contain"},alt:i,src:t,style:{objectFit:"contain",borderRadius:"8px"},onClick:function(){return d?function(e){return(e.indexOf(":")>-1||e.indexOf("//")>-1)&&b(window.location.href)!==b(e)}(d)?window.open(d,"_blank"):g(d):h?u.current.openLightbox(j[0]):void 0}})})}),(0,l.jsx)(c.Z,{ref:u,imageSet:j})]})}},3169:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var n=i(2791),a=i(9095),s=i(2739),r=i(2003),o=i(697),c=i(3767),l=i(3400),d=i(7283),h=i(1750),p=i(8579),x=i(184);const m=(0,n.forwardRef)(((e,t)=>{let{imageSet:i}=e;(0,n.useImperativeHandle)(t,(()=>({openLightbox(e){y(e)}})));const[m,g]=n.useState("false"),[u,j]=n.useState("false"),[b,Z]=n.useState(!1),y=e=>{g(e),j(e.img),Z(!0)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z,{open:b,onClose:()=>Z(!1),closeAfterTransition:!0,slots:{backdrop:s.Z},slotProps:{backdrop:{timeout:500}},children:(0,x.jsx)(r.Z,{in:b,children:(0,x.jsxs)(o.Z,{sx:{width:"100vw",height:"100dvh",backgroundColor:"#000"},children:[(0,x.jsx)(o.Z,{component:"img",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:u.width,height:"auto",maxWidth:"100%",maxHeight:"90%",bgcolor:"background.paper",border:"1px solid #fff",boxShadow:24,outline:"none",objectFit:"contain"},alt:"",src:u,style:{objectFit:"contain",borderRadius:"8px"}}),(0,x.jsxs)(c.Z,{sx:{width:"100vw",height:"100dvh"},children:[(0,x.jsx)(c.Z,{sx:{width:"100%",height:"100%"},p:1,justifyContent:"center",children:(0,x.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,x.jsx)(l.Z,{onClick:()=>(()=>{let e=i.indexOf(m);if(e<=0)Z(!1);else{let t=i[e-1];g(t),j(t.img)}})(),children:(0,x.jsx)(d.Z,{size:32})}),(0,x.jsx)(l.Z,{onClick:()=>(()=>{let e=i.indexOf(m);if(e>=i.length-1)Z(!1);else{let t=i[e+1];g(t),j(t.img)}})(),children:(0,x.jsx)(h.Z,{size:32})})]})}),(0,x.jsx)(c.Z,{direction:"row",sx:{width:"100%"},position:"absolute",p:1,alignItems:"center",justifyContent:"end",children:(0,x.jsx)(l.Z,{onClick:()=>Z(!1),children:(0,x.jsx)(p.Z,{size:32})})})]})]})})})})}))},4551:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});i(2791);var n=i(4721),a=i(184);const s=e=>{let{amount:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.Z,{sx:{visibility:"hidden",borderBottomWidth:t}})})}},4277:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});i(2791);var n=i(3767),a=i(697),s=i(184);const r=e=>{let{embedId:t}=e;return(0,s.jsx)(n.Z,{width:"100%",alignItems:"center",justifyContent:"center",children:(0,s.jsx)(n.Z,{width:"100%",maxWidth:"600px",children:(0,s.jsx)(a.Z,{sx:{position:"relative",width:"100%",paddingBottom:"56.25%"},children:(0,s.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),title:"YouTube video player",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0}})})})})}},1362:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>w});i(2791);var n=i(3767),a=i(890),s=i(4721),r=i(697),o=i(4864),c=i(281),l=i(4551),d=i(4277),h=i(5959);const p=(0,i(6934).ZP)(r.Z)((e=>{let{theme:t}=e;return{padding:"10px",borderRadius:"4px",marginBottom:"-20px",position:"relative","&::after":{content:"''",position:"absolute",top:"0",left:"0",right:"0",bottom:"0",borderRadius:"4px",background:"linear-gradient(120deg, #00F260, #0575E6, #00F260)",backgroundSize:"300% 300%",clipPath:"polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%)",zIndex:-1,animation:"frame-enter 1s forwards ease-in-out reverse, gradient-animation 4s ease-in-out infinite"},"@keyframes gradient-animation":{"0%":{backgroundPosition:"15% 0%"},"50%":{backgroundPosition:"85% 100%"},"100%":{backgroundPosition:"15% 0%"}},"@keyframes frame-enter":{"0%":{clipPath:"polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%)"},"25%":{clipPath:"polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%)"},"50%":{clipPath:"polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%)"},"75%":{WebkitClipPath:"polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%)"},"100%":{WebkitClipPath:"polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%)"}}}})),x=i.p+"static/media/artwork-2.9a67388ad9889d7a621b.png";var m=i(7188),g=i(687),u=i(914),j=i(8956);const b=(Z=i(4047)).keys().map(Z);var Z;const y=[{img:b[0],title:""},{img:b[1],title:""},{img:b[2],title:""},{img:b[3],title:""},{img:b[4],title:""},{img:b[5],title:""},{img:b[6],title:""},{img:b[7],title:""}];var f=i(8072),v=i(184);const w=()=>(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(p,{children:(0,v.jsx)(c.Z,{src:x})}),(0,v.jsx)(l.Z,{amount:10}),(0,v.jsxs)(n.Z,{direction:"row",children:[(0,v.jsxs)(n.Z,{width:"25%",children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 FACTSHEET \u2756"}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Developer"})}),(0,v.jsxs)(a.Z,{variant:"body2",children:["J. Games Entertainment",(0,v.jsx)("br",{}),"Based in Singapore"]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Release Date"})}),(0,v.jsx)(a.Z,{variant:"body2",children:"12 March, 2017"}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Platforms"})}),(0,v.jsx)(a.Z,{variant:"body2",children:"Android"}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Website"})}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.jgamesentertainment.frankriteatsmeat",target:"_blank",children:"Play Store"})}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Price"})}),(0,v.jsx)(a.Z,{variant:"body2",children:"Free To Play"})]}),(0,v.jsxs)(n.Z,{width:"75%",children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 DESCRIPTION \u2756"}),(0,v.jsx)(l.Z,{amount:10}),(0,v.jsx)(a.Z,{variant:"body2",children:"Frankrit, a gentle grotesque giant, created in an unorthodox scientific experiment finds himself stranded on a small island surrounded by vast ocean. His grumpy rumbling tummy growls for meat. He sees all sorts of meat delicacies flying around him. Is this abnormality real or just a mirage? No one knows. Feed him the meat he desires by hooking it!"}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 HISTORY \u2756"}),(0,v.jsx)(l.Z,{amount:10}),(0,v.jsxs)(a.Z,{variant:"body2",children:['The idea behind this game was to create something very simple that was easy to be grasped by anyone. A game that everyone can play and will play repeatedly which relies heavily on its own unique replay factor. In other words, we wanted a fun and enjoyable pocket "time-killer".',(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),"Either you are waiting for someone or something to happen, or you are in a short (perhaps long) bus / train ride, or you just have all the time in the world, this game will be right for you!"]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 FEATURES \u2756"}),(0,v.jsx)(l.Z,{amount:10}),(0,v.jsxs)(a.Z,{variant:"body2",children:["\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"SURVIVE"})})," \xa0 by hooking randomly flying Meats to stay alive.",(0,v.jsx)("br",{}),"\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"UPGRADE"})})," \xa0 your hook's size and speed to stay ahead of the game.",(0,v.jsx)("br",{}),"\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"AVOID"})})," \xa0 mysterious 'The Things' that hurt you, which can eventually kill your gentle grotesque giant!",(0,v.jsx)("br",{}),"\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"COLLECT"})})," \xa0 rare Gems that spawns in-game.",(0,v.jsx)("br",{}),"\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"UNLOCK"})})," \xa0 unique skins to customize Frankrit to suit your playstyle.",(0,v.jsx)("br",{}),"\u25c6 ",(0,v.jsx)("b",{children:(0,v.jsx)("i",{children:"COMPETE"})})," \xa0 with others globally to see who conquers the top spot of best Hook Streak, Gluttony & Undying!"]})]})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 VIDEO \u2756"}),(0,v.jsx)(d.Z,{embedId:"-DjaTHVWxrA"})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 IMAGES \u2756"}),(0,v.jsx)(h.Z,{imageSet:y,columns:2,aspectRatio:16/9,objectFit:"contain"})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,alignItems:"start",justifyContent:"start",children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 LOGO / ICON \u2756"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(c.Z,{src:m,height:180})})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 ADDITIONAL LINKS \u2756"}),(0,v.jsxs)(n.Z,{children:[(0,v.jsxs)(a.Z,{variant:"body2",children:[(0,v.jsx)("a",{href:"https://soundcloud.com/adetokunbo-adeshile/la2a-11-interview-with-jay-r-creator-of-frankrit-eats-mobile-video-game",target:"_blank",children:"Interview Podcast #1"}),"\xa0- Interviewed by\xa0",(0,v.jsx)("a",{href:"https://soundcloud.com/adetokunbo-adeshile",target:"_blank",children:"Life According to Adeshile"}),"."]}),(0,v.jsxs)(a.Z,{variant:"body2",children:[(0,v.jsx)("a",{href:"https://thegamemakerpodcast.blogspot.com/2017/04/episode-3-of-gamemaker-podcast-news.html",target:"_blank",children:"Interview Podcast #2"}),"\xa0- Interviewed by Jim from\xa0",(0,v.jsx)("a",{href:"https://thegamemakerpodcast.blogspot.com/",target:"_blank",children:"The Gamemaker Podcast"}),"."]}),(0,v.jsxs)(a.Z,{variant:"body2",children:[(0,v.jsx)("a",{href:"#".concat(f.p.playgroundSubpage.gameFrankritEatsMeat),target:"_blank",children:"Game Homepage"}),"\xa0- A simple homepage for the game with FAQs, etc."]}),(0,v.jsxs)(a.Z,{variant:"body2",children:[(0,v.jsx)("a",{href:"https://www.instagram.com/vindorable/",target:"_blank",children:"Instagram"}),"\xa0- Developer's (Jay R.) personal account where game updates are posted."]})]})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 ABOUT J. GAMES ENTERTAINMENT \u2756"}),(0,v.jsx)(n.Z,{children:(0,v.jsxs)(a.Z,{variant:"body2",children:["J. Games Entertainment was founded by Jay R. and built with the great support of two very close associates, Cameron and Gerard, who have helped through the process of making the game Frankrit Eats Meat ",(0,v.jsx)("i",{children:"(and another abandoned game Desare)"}),".",(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),"Both Cameron and Gerard have their own commitments and goals to achieve in life, as such J. Games Entertainment will be handled solely by Jay R. in the long term. Despite both of them going their separate ways to make their own mark in History, they will always be a part of the foundation that this Brand has built upon.",(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),"Our goal is to provide a simple yet highly engaging, relying heavily on each game's unique replay factor, gaming experience for everyone."]})})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 CREDITS \u2756"}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsxs)(n.Z,{direction:"row",alignItems:"center",justifyContent:"space-evenly",children:[(0,v.jsxs)(n.Z,{spacing:1,children:[(0,v.jsx)(c.Z,{src:g,height:200}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"body2",children:"Jay R."}),(0,v.jsxs)(a.Z,{inline:!0,align:"center",variant:"caption",children:["Founder / Producer",(0,v.jsx)("br",{}),"Art / Programming - Design & Concept Ideas"]})]})]}),(0,v.jsxs)(n.Z,{spacing:1,children:[(0,v.jsx)(c.Z,{src:u,height:200}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"body2",children:"Cameron E."}),(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"caption",children:"Programming - Design & Concept Ideas"})]})]})]}),(0,v.jsx)(n.Z,{children:(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"body2",children:(0,v.jsx)("i",{children:"And... special thanks to:"})})}),(0,v.jsxs)(n.Z,{spacing:1,children:[(0,v.jsx)(c.Z,{src:j,height:200}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"body2",children:"Gerard N."}),(0,v.jsx)(a.Z,{inline:!0,align:"center",variant:"caption",children:"Great guy who comes up with quirky stories and has been there from the start."})]})]})]})]}),(0,v.jsx)(l.Z,{amount:30}),(0,v.jsx)(s.Z,{}),(0,v.jsx)(l.Z,{amount:20}),(0,v.jsxs)(n.Z,{spacing:3,children:[(0,v.jsx)(a.Z,{variant:"h6",children:"\u2756 CONTACT \u2756"}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"E-mail"})}),(0,v.jsx)(a.Z,{variant:"body2",children:"j.raj93.designer@gmail.com"})]}),(0,v.jsxs)(n.Z,{children:[(0,v.jsx)(a.Z,{variant:"body2",children:(0,v.jsx)("b",{children:"Whatsapp"})}),(0,v.jsx)(a.Z,{variant:"body2",children:"(+65) 8298 4663"})]})]})]})})},8075:(e,t,i)=>{"use strict";i.d(t,{Z:()=>Z});var n=i(3366),a=i(7462),s=i(4419),r=i(3733),o=i(2791);i(8457);const c=o.createContext({});var l=i(6934),d=i(1402),h=i(9103),p=i(5878),x=i(1217);function m(e){return(0,x.Z)("MuiImageListItem",e)}const g=(0,p.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);var u=i(184);const j=["children","className","cols","component","rows","style"],b=(0,l.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{["& .".concat(g.img)]:t.img},t.root,t[i.variant]]}})((e=>{let{ownerState:t}=e;return(0,a.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(g.img)]:(0,a.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})})),Z=o.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiImageListItem"}),{children:l,className:p,cols:x=1,component:g="li",rows:Z=1,style:y}=i,f=(0,n.Z)(i,j),{rowHeight:v="auto",gap:w,variant:k}=o.useContext(c);let C="auto";"woven"===k?C=void 0:"auto"!==v&&(C=v*Z+w*(Z-1));const I=(0,a.Z)({},i,{cols:x,component:g,gap:w,rowHeight:v,rows:Z,variant:k}),E=(e=>{const{classes:t,variant:i}=e,n={root:["root",i],img:["img"]};return(0,s.Z)(n,m,t)})(I);return(0,u.jsx)(b,(0,a.Z)({as:g,className:(0,r.Z)(E.root,E[k],p),ref:t,style:(0,a.Z)({height:C,gridColumnEnd:"masonry"!==k?"span ".concat(x):void 0,gridRowEnd:"masonry"!==k?"span ".concat(Z):void 0,marginBottom:"masonry"===k?w:void 0,breakInside:"masonry"===k?"avoid":void 0},y),ownerState:I},f,{children:o.Children.map(l,(e=>o.isValidElement(e)?"img"===e.type||(0,h.Z)(e,["Image"])?o.cloneElement(e,{className:(0,r.Z)(E.img,e.props.className)}):e:null))}))}))},9103:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(2791);const a=function(e,t){var i,a;return n.isValidElement(e)&&-1!==t.indexOf(null!=(i=e.type.muiName)?i:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}},4047:(e,t,i)=>{var n={"./pic-1.png":6149,"./pic-2.jpg":8694,"./pic-3.png":5485,"./pic-4.png":9965,"./pic-5.png":3526,"./pic-6.png":8216,"./pic-7.png":3068,"./pic-8.png":2216};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=4047},914:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/cameron-e.d7e967dad45c9329142b.png"},8956:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/gerard-n.fe3a9c94d3dbaf2f20fd.png"},687:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/jay-r.fdf97714005acb49ecac.png"},6149:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-1.0661e857c7aaf7d1affb.png"},8694:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-2.2f9ae373eb6bda0eeaba.jpg"},5485:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-3.bcc16ce74b6b8c809283.png"},9965:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-4.926e2cef48989657639c.png"},3526:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-5.a0f366dd8dee785c58a4.png"},8216:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-6.0a7b07bc698bf75999cc.png"},3068:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-7.79a9a65844772ffee75b.png"},2216:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pic-8.e08b29fdb85a52750462.png"},7188:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/game-app-icon.447e9552878d2a0e3228.png"}}]);
//# sourceMappingURL=510.9f202537.chunk.js.map