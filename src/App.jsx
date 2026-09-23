import React,{useState} from "react";
import logo from "./assets/logo.png";
const e=React.createElement,LOGO=logo;
const ISLE="M140 12C160 8 175 22 172 40C180 60 200 75 205 100C215 130 222 160 228 190C240 230 250 260 240 300C232 340 215 370 190 395C175 410 155 405 140 390C115 372 100 340 95 310C88 270 92 230 100 200C105 170 95 140 105 110C112 85 118 60 128 40C130 28 134 18 140 12Z";
const A={x:98,y:210};
const D=[{n:"Sigiriya",x:155,y:135,t:"Climb Lion Rock at sunrise",b:"Jan – Apr",d:2,p:120,c:"SGR"},{n:"Kandy",x:150,y:200,t:"Temple of the Tooth & tea hills",b:"Jan – Apr",d:2,p:110,c:"KDY"},{n:"Ella",x:180,y:285,t:"Nine Arch Bridge & the hill train",b:"Dec – Mar",d:3,p:150,c:"ELL"},{n:"Yala",x:205,y:335,t:"Leopard safaris at dawn",b:"Feb – Jul",d:2,p:170,c:"YLA"},{n:"Galle",x:130,y:372,t:"Dutch fort & golden sunsets",b:"Nov – Apr",d:2,p:100,c:"GLE"}];
const J=[["Cultural Triangle","Culture",7,"SGR",640],["Hill Country Escape","Nature",5,"ELL",420],["Southern Coast & Whales","Beach",6,"GLE",560],["Honeymoon Island Bliss","Honeymoon",10,"KDY",980],["Wildlife Safari Trail","Nature",4,"YLA",360],["Grand Island Circuit","Culture",10,"CMB",890]];
const S=[["Private tours & itineraries","Tailor-made routes built around your dates, pace and budget."],["Chauffeur-guides & vehicles","English-speaking drivers in clean, air-conditioned cars and vans."],["Airport transfers","Smooth pickup and drop-off at Colombo airport, any hour."],["Hotels & stays","Handpicked hotels, villas and boutique resorts."],["Honeymoons & groups","Romantic escapes, family trips and small group journeys."]];
const R=[["Absolutely seamless. Our driver became our friend and best guide.","Sarah · United Kingdom"],["Ella and Sigiriya were unforgettable. Every detail was handled.","Marco · Italy"],["The perfect honeymoon. We never had to worry about a thing.","Aisha & Omar · UAE"]];
function Header(){const[o,s]=useState(false);
return e("header",{className:"navy"},e("div",{className:"w nav"},e("a",{href:"#home",className:"brand"},e("img",{src:LOGO,alt:"NL Lanka logo"}),e("span",null,e("b",null,"NL Lanka"),e("small",null,"Travel & Tours"))),
e("nav",{className:"lk"+(o?" o":""),onClick:()=>s(false)},["Journeys","Plan","Services","Contact"].map(x=>e("a",{key:x,href:"#"+x.toLowerCase()},x)),e("a",{href:"#plan",className:"btn sm"},"Build my trip")),
e("button",{className:"bg","aria-label":"Menu",onClick:()=>s(!o)},o?"✕":"☰")))}
function Hero(){const[i,s]=useState(0),p=D[i];
const path="M"+A.x+" "+A.y+"Q"+((A.x+p.x)/2-30)+" "+((A.y+p.y)/2-30)+" "+p.x+" "+p.y;
return e("div",{id:"home",className:"hero"},e("div",{className:"w hg"},
e("div",null,e("p",{className:"eb"},"NL Lanka Travel & Tours · Negombo"),e("h1",null,"Sri Lanka, ",e("em",null,"routed"),e("br"),"your way."),
e("p",{className:"m"},"Private journeys with local experts. Pick a stop on the map and see where your trip could begin."),
e("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginTop:26}},e("a",{href:"#plan",className:"btn"},"Build my trip"),e("a",{href:"#journeys",className:"btn g"},"See journeys")),
e("div",{className:"st"},[["12+","Years"],["3,500+","Travellers"],["4.9★","Rating"]].map(x=>e("div",{key:x[0]},e("b",null,x[0]),e("small",{className:"m"},x[1]))))),
e("div",{className:"mapc"},e("svg",{viewBox:"0 0 300 420",className:"map"},
e("defs",null,e("linearGradient",{id:"g",x1:0,y1:0,x2:1,y2:1},e("stop",{offset:0,stopColor:"#1556C8"}),e("stop",{offset:1,stopColor:"#0A3D91"}))),
[1,2,3].map(k=>e("ellipse",{key:k,cx:150,cy:210,rx:60+k*50,ry:90+k*55,fill:"none",stroke:"rgba(255,255,255,.08)"})),
e("path",{d:ISLE,fill:"url(#g)",stroke:"#E3A72F",strokeWidth:2.5,strokeLinejoin:"round"}),
e("path",{key:"r"+i,d:path,className:"route",fill:"none"}),
e("text",{x:A.x-6,y:A.y+4,fontSize:15,fill:"#E3A72F",textAnchor:"end"},"✈ CMB"),
D.map((d,k)=>e("g",{key:d.n,className:"pin"+(k===i?" on":""),onClick:()=>s(k)},e("circle",{cx:d.x,cy:d.y,r:14,fill:"transparent"}),k===i&&e("circle",{className:"ring",cx:d.x,cy:d.y,r:5}),e("circle",{className:"d",cx:d.x,cy:d.y,r:k===i?6:4}),e("text",{x:d.x+11,y:d.y+4},d.n)))),
e("div",{className:"pass"},e("div",null,e("small",null,"From"),e("b",null,"CMB")),e("span",{className:"x"},"✈"),e("div",null,e("small",null,"To"),e("b",null,p.c)),
e("div",{className:"pd"},e("h3",null,p.n),e("p",null,p.t),e("small",null,"Best "+p.b+" · "+p.d+" days · from $"+p.p))))))}
function Marquee(){const x=["Sigiriya","Ella","Kandy","Galle","Yala","Mirissa","Nuwara Eliya","Trincomalee","Bentota"],l=x.concat(x,x,x);
return e("div",{className:"mq"},e("div",null,l.map((v,k)=>e("span",{key:k},v," ",e("b",null,"✦")))))}
function Journeys(){const cats=["All","Culture","Nature","Beach","Honeymoon"],[c,s]=useState("All");
return e("section",{id:"journeys"},e("div",{className:"w"},e("p",{className:"eb"},"Journeys"),e("h2",{className:"ti"},"Pick your boarding pass"),
e("div",{className:"chips"},cats.map(x=>e("button",{key:x,className:"chip"+(x===c?" on":""),onClick:()=>s(x)},x))),
e("div",{className:"tg"},J.filter(t=>c==="All"||t[1]===c).map(t=>e("div",{key:t[0],className:"tk"},
e("div",{className:"tm"},e("small",{className:"m"},"NL Lanka · "+t[1]),e("h3",null,t[0]),e("div",{className:"rt"},e("b",null,"CMB"),e("i"),e("b",null,t[3])),e("small",{className:"m"},t[2]+" days · private guide")),
e("div",{className:"ts"},e("small",{className:"m"},"From"),e("b",null,"$"+t[4]),e("span",{className:"bar"}),e("a",{href:"#plan",className:"btn sm"},"Plan")))))))}
function Planner(){const[dy,sd]=useState(7),[tv,st]=useState(2),[sy,ss]=useState(1),[pk,sp]=useState([0,1,2]);
const Y=[["Comfort",70],["Premium",110],["Luxury",180]],pp=Math.round(dy*(Y[sy][1]+90/tv)),tot=pp*tv;
const tg=k=>sp(pk.includes(k)?pk.filter(v=>v!==k):pk.concat(k));
return e("section",{id:"plan",className:"navy"},e("div",{className:"w"},e("p",{className:"eb"},"Trip planner"),e("h2",{className:"ti"},"Build your trip in seconds"),e("p",{className:"m"},"Move the sliders and watch your estimate update."),
e("div",{className:"pl",style:{marginTop:28}},e("div",{className:"ctl"},
e("div",null,e("label",null,e("b",null,"Days"),e("b",{style:{color:"var(--gold)"}},dy)),e("input",{type:"range",min:3,max:14,value:dy,onChange:v=>sd(+v.target.value)})),
e("div",null,e("label",null,e("b",null,"Travellers")),e("div",{className:"stp"},e("button",{onClick:()=>st(Math.max(1,tv-1))},"−"),e("b",{style:{fontSize:22}},tv),e("button",{onClick:()=>st(Math.min(8,tv+1))},"+"))),
e("div",null,e("label",null,e("b",null,"Comfort level")),e("div",{className:"chips",style:{margin:0}},Y.map((v,k)=>e("button",{key:v[0],className:"chip"+(k===sy?" on":""),onClick:()=>ss(k)},v[0])))),
e("div",null,e("label",null,e("b",null,"Stops")),e("div",{className:"chips",style:{margin:0}},D.map((d,k)=>e("button",{key:d.n,className:"chip"+(pk.includes(k)?" on":""),onClick:()=>tg(k)},d.n))))),
e("div",{className:"est"},e("small",{className:"m"},"Estimated total"),e("div",{className:"big"},"$"+tot.toLocaleString()),e("p",{className:"m",style:{margin:"6px 0 0"}},"about $"+pp.toLocaleString()+" per person · "+dy+" days · "+tv+" traveller"+(tv>1?"s":"")),
e("div",{className:"rp"},e("b",null,"Route: "),"CMB",D.filter((d,k)=>pk.includes(k)).map(d=>" → "+d.n).join("")),
e("a",{href:"#contact",className:"btn"},"Send this plan"),e("p",{className:"m",style:{fontSize:12,margin:"12px 0 0"}},"Demo estimate. Final quote after a free consultation.")))))}
function Services(){return e("section",{id:"services"},e("div",{className:"w"},e("p",{className:"eb"},"Services"),e("h2",{className:"ti"},"Everything for the journey"),
e("div",{className:"sv",style:{marginTop:24}},S.map((x,k)=>e("a",{key:x[0],href:"#contact"},e("i",null,"0"+(k+1)),e("div",null,e("h3",null,x[0]),e("span",{className:"m"},x[1])),e("span",null,"→")))),
e("div",{className:"q",style:{marginTop:56}},e("p",{className:"eb"},"Loved by travellers"),e(Quote))))}
function Quote(){const[k,s]=useState(0);
return e("div",null,e("blockquote",null,"“"+R[k][0]+"”"),e("p",{className:"m"},"★★★★★  "+R[k][1]),e("div",{className:"chips"},R.map((v,j)=>e("button",{key:j,className:"chip"+(j===k?" on":""),onClick:()=>s(j),"aria-label":"Review "+(j+1)},j+1))))}
function Contact(){const[d,s]=useState(false);
return e("section",{id:"contact",className:"navy"},e("div",{className:"w ct"},e("div",null,e("p",{className:"eb"},"Ready for take-off?"),e("h2",{className:"ti"},"Tell us your dream, we build the route"),
e("p",{className:"m"},"Send an enquiry and get a free custom itinerary."),e("p",null,"📞 +94 00 000 0000",e("br"),"✉️ info@nllanka.lk",e("br"),"📍 Negombo, Sri Lanka")),
e("div",{className:"fm"},e("div",{className:"hd"},e("small",null,"Boarding pass · Enquiry")),d?e("div",null,e("h3",null,"Thank you! 🎉"),e("p",{style:{margin:0,color:"#5A6885"}},"Demo form: your enquiry would be sent to NL Lanka here.")):
e("div",null,e("input",{className:"t",placeholder:"Passenger name"}),e("input",{className:"t",placeholder:"Email"}),e("input",{className:"t",placeholder:"Travel dates"}),e("textarea",{rows:3,placeholder:"Where would you like to go?"}),e("button",{className:"btn",onClick:()=>s(true)},"Confirm enquiry")))))}
function App(){return e(React.Fragment,null,e(Header),e(Hero),e(Marquee),e(Journeys),e(Planner),e(Services),e(Contact),e("footer",{className:"navy"},e("div",{className:"w"},e("span",null,"© 2026 NL Lanka Travel & Tours"),e("span",{className:"m"},"Demo website for client preview"))))}
export default App;
