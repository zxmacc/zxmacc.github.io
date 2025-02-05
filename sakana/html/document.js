const htmlEl=document.documentElement;let device=String(navigator.userAgent.match(/steam|macos/i)).toLowerCase();(/iPhone|iPad|iPod/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&(device="ios"),htmlEl.setAttribute("data-device",device);const sticky=.1,maxR=60,maxY=110,minY=-110,el=document.querySelector(".main"),boxEl=document.querySelector(".single-box"),inertia=.1,params=new Proxy(new URLSearchParams(window.location.search),{get:(t,e)=>t.get(e)});params.alpha&&htmlEl.setAttribute("data-alpha",params.alpha),params.background&&(htmlEl.setAttribute("data-alpha",params.alpha),htmlEl.style.background=params.background);const Values={chisato:{r:1,y:40,t:0,w:0,d:.99},takina:{r:12,y:2,t:0,w:0,d:.988}},voiceButton=document.querySelector(".set-voice"),Voices={chisato:new Audio("chinanago.mp3"),takina:new Audio("sakana.mp3"),isMute:!1};Voices.takina.volume=Voices.chisato.volume=.8,Voices.takina.muted=Voices.chisato.muted=!0;const toggleVoiceMute=()=>{Voices.isMute="true"!==voiceButton.getAttribute("data-active"),voiceButton.setAttribute("data-active",Voices.isMute),Voices.takina.muted=Voices.chisato.muted=Voices.isMute};let runing=!0;const deepCopy=t=>JSON.parse(JSON.stringify(t));el.classList.add(params.v);let width,height,v=deepCopy(Values[params.v]||Values.takina);const canvas=document.querySelector("canvas"),ctx=canvas.getContext("2d"),resize=t=>{const{offsetWidth:e,offsetHeight:a}=htmlEl;width=Math.min(e,800),height=800,canvas.width=width,canvas.height=height;const i=e/a<.5757;htmlEl.setAttribute("data-is-super-vertical",i)};resize();const rotatePoint=(t,e,a,i,o)=>{const n=Math.PI/180*o,c=Math.cos(n),s=Math.sin(n);return{x:c*(a-t)+s*(i-e)+t,y:c*(i-e)-s*(a-t)+e}},draw=t=>{let{r:e,y:a,t:i,w:o,d:n}=v;const c=1*e;el.style.transform=`rotate(${e}deg) translateX(${c}px) translateY(${a}px)`,ctx.clearRect(0,0,width,height),ctx.save(),ctx.strokeStyle="#182562",ctx.lineWidth=10,ctx.beginPath(),ctx.translate(width/2,640),ctx.moveTo(0,140);const s=rotatePoint(0,-100,c,-a,e),r=s.x,l=-s.y-100;ctx.quadraticCurveTo(0,75,r,l),ctx.stroke(),ctx.restore()},loadImage=(t,e)=>{const a=new Image;a.onload=t=>e(a),a.src=t};let sakanaImageEl;const init=t=>{t()};let or=0;const run=t=>{if(!runing)return;requestAnimationFrame(run);let{r:e,y:a,t:i,w:o,d:n}=v;o=o-2*e-or,e+=.1*o*1.2,v.w=o*n,v.r=e,i-=2*a,a+=.1*i*2,v.t=i*n,v.y=a,draw()};init((t=>{requestAnimationFrame(run)}));const move=(t,e)=>{let a=.1*t;a=Math.max(-60,a),a=Math.min(60,a),e=.1*e*2,e=Math.max(-110,e),e=Math.min(110,e),v.r=a,v.y=e,v.w=0,v.t=0,draw()};el.onmousedown=t=>{t.preventDefault(),runing=!1;const{pageX:e,pageY:a}=t,i=a;Voices.takina.muted=Voices.chisato.muted=Voices.isMute,document.onmouseup=t=>{t.preventDefault(),document.onmousemove=null,document.onmouseup=null,runing=!0,playVoice(),run()},document.onmousemove=t=>{const e=boxEl.getBoundingClientRect(),a=e.left+e.width/2,{pageX:o,pageY:n}=(e.top,t);move(o-a,n-i)}},el.ontouchstart=t=>{if(t.preventDefault(),runing=!1,!t.touches[0])return;const{pageX:e,pageY:a}=t.touches[0],i=a;Voices.takina.muted=Voices.chisato.muted=Voices.isMute,document.ontouchend=t=>{document.ontouchmove=null,document.ontouchend=null,runing=!0,playVoice(),run()},document.ontouchmove=t=>{if(!t.touches[0])return;const e=boxEl.getBoundingClientRect(),a=e.left+e.width/2,{pageX:o,pageY:n}=(e.top,t.touches[0]);move(o-a,n-i)}};const playVoice=()=>{Voices.isMute||(el.classList.contains("chisato")?Math.abs(v.r)<=4&&Math.abs(v.y)>=20&&(console.log("nice chin~a~na~go~"),Voices.chisato.play()):v.r>=Values.takina.r&&(Math.abs(v.y)<=12||v.r>=3*Math.abs(v.y))&&(console.log("nice sakana~"),Voices.takina.play()))},canOrientation=!(!window.DeviceOrientationEvent||"function"!=typeof window.DeviceOrientationEvent.requestPermission);htmlEl.setAttribute("data-can-orientation",canOrientation);const getOrientationPermission=t=>{if(!canOrientation)return t();window.DeviceOrientationEvent.requestPermission().then((e=>{"granted"===e&&(htmlEl.setAttribute("data-permission-state",!0),t())}))},onDeviceOrientation=t=>{const{alpha:e,beta:a,gamma:i,acceleration:o}=t;or=-i/2,or=Math.min(60,or),or=Math.max(-60,or)},setOrientationListener=t=>{getOrientationPermission((t=>{window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",onDeviceOrientation)}))};let magicForceTimerHandle,magicForceFlag=!1;const magicForce=t=>{Math.random()<.1?switchValue():(v.t=v.t+150*(Math.random()-.5),v.w=v.w+200*(Math.random()-.5)),magicForceTimerHandle=setTimeout(magicForce,3e3*Math.random()+2e3)},triggerMagicLinkEl=document.querySelector(".trigger-magic-link"),triggerMagic=t=>{magicForceFlag=!magicForceFlag,htmlEl.setAttribute("data-magic-force",magicForceFlag),triggerMagicLinkEl.setAttribute("data-active",magicForceFlag),clearTimeout(magicForceTimerHandle),magicForceFlag&&(magicForceTimerHandle=setTimeout(magicForce,1e3*Math.random()+500))},switchValue=t=>{el.classList.toggle("chisato"),el.classList.contains("chisato")?(v=deepCopy(Values.chisato),history.replaceState({},"","?v=chisato")):(v=deepCopy(Values.takina),history.replaceState({},"","?v=takina"))};document.querySelector(".bed").addEventListener("click",(t=>{t.preventDefault(),switchValue()})),window.addEventListener("resize",resize);