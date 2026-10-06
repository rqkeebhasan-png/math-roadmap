(function(){
var MK="mathroadmap-meta",M={start:null,prob:0,days:{},dates:{},rev:{}};
try{var r=JSON.parse(localStorage.getItem(MK)||"null");if(r)M=Object.assign(M,r)}catch(e){}
function ymd(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function dn(s){var a=s.split("-");return Date.UTC(+a[0],+a[1]-1,+a[2])/864e5}
var T=ymd();if(!M.start)M.start=T;
function sv(){try{localStorage.setItem(MK,JSON.stringify(M))}catch(e){}}
function act(){M.days[T]=1;sv()}
var st=document.createElement("style");
st.textContent="#dash{margin:0 0 14px}.dh{font-size:1.05rem;font-weight:700;margin:0 0 8px}.dc{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px;margin-bottom:10px}.dst{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}.dst>div{flex:1 1 96px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:.88rem}.dst b{display:block;font:500 1.25rem 'Fira Code',monospace}.dm{border-left:6px solid var(--c0)}.dm h3,.dc h3{margin:0 0 4px;font-size:.95rem;color:var(--mute);font-weight:500}.dm .tt{font-size:1.15rem;font-weight:700}.dm .go{margin-top:8px;background:var(--c0);color:#fff;border-color:var(--c0);font-weight:700}.pb{display:flex;gap:6px;margin-top:6px}.pb button{padding:3px 9px}.rv{display:flex;align-items:center;gap:8px;padding:2px 0}.rv button{padding:1px 8px;margin-left:auto}.rm{display:grid;grid-template-columns:1fr 1fr;gap:6px}.rm button{text-align:left;display:flex;gap:8px}.rm i{font:normal 500 .8rem 'Fira Code',monospace;color:var(--mute)}@media(max-width:420px){.rm{grid-template-columns:1fr}}";
document.head.appendChild(st);
var d=document.createElement("section");d.id="dash";
d.innerHTML='<div class="dh">Your 52-Week Journey</div>'
+'<div class="dst"><div><b id="dpc">0%</b>Complete</div><div><b id="dsk">0</b>🔥 Day Streak</div><div><b id="dtm">0</b>📚 Topics Mastered</div>'
+'<div><b id="dpr">0</b>✏️ Problems Solved<div class="pb"><button id="p1">+1</button><button id="p10">+10</button><button id="pm">−1</button></div></div></div>'
+'<div class="dc dm"><h3>TODAY\'S MISSION</h3><div id="dmw"></div><div class="tt" id="dmt"></div><div id="dmx" style="color:var(--mute)"></div><div>2h estimated</div><button class="go" id="dgo">▶ START TODAY</button></div>'
+'<div class="dc"><h3>CONTINUE LEARNING</h3><div id="dcl"></div></div>'
+'<div class="dc"><h3>⚠️ NEEDS REVIEW</h3><div id="drv"></div></div>'
+'<div class="dc"><h3>ROADMAP</h3><div class="rm" id="drm"></div></div>';
var sub=document.querySelector(".sub");sub.parentNode.insertBefore(d,sub.nextSibling);
var $=function(i){return document.getElementById(i)};
["Foundation","Discrete Mathematics","Calculus","Linear Algebra","Probability & Statistics","Consolidation","Advanced / Pro"].forEach(function(n,i){
 var b=document.createElement("button");b.innerHTML="<i>0"+(i+1)+"</i>"+n;
 b.onclick=function(){var p=document.querySelectorAll(".ph")[i];if(p){p.open=true;p.scrollIntoView({behavior:"smooth"})}};$("drm").appendChild(b)});
function grp(inp){var dt=inp.closest("details"),s=dt.querySelector("summary"),w=s.querySelector(".wk");
 return{n:s.firstChild.textContent.trim(),w:w?w.textContent:""}}
function dash(){
 var ins=[].slice.call(document.querySelectorAll("#root .t input")),done=0,first=null;
 ins.forEach(function(i){if(i.checked){done++;if(!M.dates[i.id]){M.dates[i.id]=T;M.days[T]=1}}else{delete M.dates[i.id];delete M.rev[i.id];if(!first)first=i}});
 sv();
 $("dpc").textContent=(ins.length?Math.round(done/ins.length*100):0)+"%";$("dtm").textContent=done;$("dpr").textContent=M.prob;
 var k=0,c=dn(T);if(!M.days[T])c--;while(M.days[ymd2(c)]){k++;c--}$("dsk").textContent=k;
 var diff=dn(T)-dn(M.start),wk=Math.min(52,Math.floor(diff/7)+1),dy=diff%7+1;
 $("dmw").textContent="Week "+wk+" · Day "+dy+(dy===7?" · রিভিশন দিন":"");
 if(first){var g=grp(first);$("dmt").textContent=g.n;$("dmx").textContent="পরের টপিক: "+first.nextElementSibling.textContent;$("dcl").textContent=(g.w||"")+" → "+g.n;$("dgo").onclick=function(){act();var a=first.parentNode;while((a=a.parentNode)&&a!==document.body){if(a.tagName==="DETAILS")a.open=true}first.scrollIntoView({behavior:"smooth",block:"center"});first.focus();dash()}}
 else{$("dmt").textContent="সব টপিক শেষ 🎉";$("dmx").textContent="";$("dcl").textContent="পুরো রোডম্যাপ সম্পন্ন";$("dgo").onclick=null}
 var rv=$("drv");rv.textContent="";var n=0;
 Object.keys(M.dates).forEach(function(id){if(n>=5||M.rev[id]||dn(T)-dn(M.dates[id])<3)return;var l=document.querySelector('label[for="'+id+'"]');if(!l)return;n++;
  var r=document.createElement("div");r.className="rv";var s=document.createElement("span");s.textContent="• "+l.textContent;var b=document.createElement("button");b.textContent="✓ রিভিউ হয়েছে";b.onclick=function(){M.rev[id]=T;act();dash()};r.appendChild(s);r.appendChild(b);rv.appendChild(r)});
 if(!n)rv.textContent="এখন কিছু রিভিউ বাকি নেই। টিক দেওয়ার ৩ দিন পর টপিক এখানে আসবে।"}
function ymd2(n){var x=new Date(n*864e5);return x.getUTCFullYear()+"-"+("0"+(x.getUTCMonth()+1)).slice(-2)+"-"+("0"+x.getUTCDate()).slice(-2)}
$("p1").onclick=function(){M.prob++;act();dash()};
$("p10").onclick=function(){M.prob+=10;act();dash()};
$("pm").onclick=function(){M.prob=Math.max(0,M.prob-1);sv();dash()};
var _u=window.upd;window.upd=function(){_u();dash()};
dash();
})();
