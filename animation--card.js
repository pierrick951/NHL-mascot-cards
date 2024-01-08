





const angle=20,rotateCard=window,lerp=(t,e,a)=>(1-a)*t+a*e,remap=(t,e,a)=>{const r=(t+e)*(2*a)/(2*e)-a;return Math.min(Math.max(r,-a),a)};window.addEventListener("DOMContentLoaded",(t=>{const e=document.querySelectorAll(".card");e.forEach((t=>{t.addEventListener("mousemove",(e=>{const a=t.getBoundingClientRect(),r=(a.left+a.right)/2,o=(a.top+a.bottom)/2,s=e.pageX-r,d=e.pageY-o,n=remap(s,a.width/2,20),l=remap(d,a.height/2,20);t.dataset.rotateX=n,t.dataset.rotateY=-l})),t.addEventListener("mouseout",(e=>{t.dataset.rotateX=0,t.dataset.rotateY=0}))}));setInterval((()=>{e.forEach((t=>{let e=parseFloat(t.style.getPropertyValue("--rotateY").slice(0,-1)),a=parseFloat(t.style.getPropertyValue("--rotateX").slice(0,-1));isNaN(e)&&(e=0),isNaN(a)&&(a=0);const r=lerp(e,t.dataset.rotateX,.05),o=lerp(a,t.dataset.rotateY,.05);t.style.setProperty("--rotateY",r+"deg"),t.style.setProperty("--rotateX",o+"deg")}))}),1e3/60)}));