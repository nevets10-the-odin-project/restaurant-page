(()=>{"use strict";const e=document.createElement("div"),t=document.createElement("button");t.textContent="Home",t.setAttribute("class","nav-btn"),e.appendChild(t);const n=document.createElement("button");n.textContent="Menu",n.setAttribute("class","nav-btn"),e.appendChild(n);const a=document.createElement("button");a.textContent="Contact",a.setAttribute("class","nav-btn"),e.appendChild(a);const c=e,o=document.createElement("div"),d=document.createElement("h1");d.textContent="Heck's Kitchen",o.appendChild(d);const i=document.createElement("div"),r=document.createElement("h2");r.textContent="About Us",i.appendChild(r);const m=document.createElement("p");m.textContent="Bacon ipsum dolor amet chuck pastrami rump, ham hock meatloaf tongue ball tip pig. Frankfurter salami kielbasa prosciutto drumstick jerky jowl alcatra. Beef ribs alcatra tail fatback cupim, rump burgdoggen strip steak ham. Pork chop flank brisket shoulder bacon cow chislic swine buffalo jowl tri-tip short ribs hamburger doner spare ribs. Chislic salami flank fatback. Tri-tip capicola tenderloin pork chop shank beef ribs pancetta pastrami jerky.",i.appendChild(m),o.appendChild(i);const l=document.createElement("div"),s=document.createElement("h2");s.textContent="Hours",l.appendChild(s);const p=document.createElement("ul");["Sunday: 8:00am - 8:00pm","Monday: 8:00am - 8:00pm","Tuesday: 8:00am - 8:00pm","Wednesday: 8:00am - 8:00pm","Thursday: 8:00am - 8:00pm","Friday: 8:00am - 10:00pm","Saturday: 8:00am - 10:00pm"].forEach((e=>{const t=document.createElement("li");t.textContent=e,p.appendChild(t)})),l.appendChild(p),o.appendChild(l);const u=document.createElement("div"),h=document.createElement("img");h.setAttribute("id","fire"),h.setAttribute("alt",'Fire saying "This is fine."'),h.setAttribute("src","../src/img/fire.png"),u.appendChild(h),o.appendChild(u);const b=o,C=document.createElement("div"),E=document.createElement("h1");E.textContent="Menu",C.appendChild(E);const f=C,k=document.createElement("div");k.textContent="Contact";const v=[b,f,k],y=document.getElementById("content");y.appendChild(c);const g=document.createElement("div");function x(e){g.replaceChildren(v[e])}g.setAttribute("id","content-body"),y.appendChild(g),x(0),document.querySelectorAll(".nav-btn").forEach(((e,t)=>{e.addEventListener("mousedown",(e=>{e.preventDefault,x(t)}))}))})();