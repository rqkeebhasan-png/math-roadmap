(function(){
var MK="mathroadmap-meta",M={start:null,prob:0,days:{},dates:{},rs:{},pc:{},mb:[]};
try{var r=JSON.parse(localStorage.getItem(MK)||"null");if(r)M=Object.assign(M,r)}catch(e){}
M.days=M.days||{};M.dates=M.dates||{};M.rs=M.rs||{};M.pc=M.pc||{};M.mb=M.mb||[];
function ymd2(n){var x=new Date(n*864e5);return x.getUTCFullYear()+"-"+("0"+(x.getUTCMonth()+1)).slice(-2)+"-"+("0"+x.getUTCDate()).slice(-2)}
function ymd(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function dn(s){var a=s.split("-");return Date.UTC(+a[0],+a[1]-1,+a[2])/864e5}
var T=ymd(),I=[1,3,7,14,30,90];if(!M.start)M.start=T;
function sv(){try{localStorage.setItem(MK,JSON.stringify(M))}catch(e){}}
function act(){M.days[T]=1;sv()}
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function wkn(t){if(/বছর/.test(t))return 1000;var m=t.replace(/[০-৯]/g,function(c){return "০১২৩৪৫৬৭৮৯".indexOf(c)}).match(/\d+/);return m?+m[0]:1000}
var st=document.createElement("style");
st.textContent="#dash{margin:0 0 14px}.dh{font-size:1.05rem;font-weight:700;margin:0 0 8px}.dc{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px;margin-bottom:10px}.dst{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}.dst>div{flex:1 1 96px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:8px 10px;font-size:.88rem}.dst b{display:block;font:500 1.25rem 'Fira Code',monospace}.dm{border-left:6px solid var(--c0)}.dm h3,.dc h3{margin:0 0 4px;font-size:.95rem;color:var(--mute);font-weight:500}.dm .tt{font-size:1.15rem;font-weight:700}.dm .go{margin-top:8px;background:var(--c0);color:#fff;border-color:var(--c0);font-weight:700}.rv{display:flex;align-items:center;gap:8px;padding:2px 0}.rv button{padding:1px 8px;margin-left:auto;flex:none}.rv small{color:var(--mute)}.mf{display:grid;gap:6px;margin:8px 0}.mf input,.mf textarea{width:100%;font:inherit;padding:6px 8px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}.mf textarea{min-height:56px}.mi{border-top:1px solid var(--line);padding:8px 0}.mi p{margin:2px 0;font-size:.92rem}.mi .bd{background:#d33;color:#fff;border-radius:6px;padding:0 6px;font-size:.75rem;margin-left:6px}.mi .ac{display:flex;gap:6px;flex-wrap:wrap;margin-top:4px}.mi .ac button{padding:2px 8px}#cm{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;z-index:20;padding:16px}#cm.on{display:flex}#cm form{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;width:100%;max-width:360px}#cm p{margin:0 0 4px;font-weight:700}#cm small{display:block;color:var(--mute);margin:4px 0}.cl{display:flex;gap:8px;align-items:flex-start;margin:8px 0}.cl input{margin-top:6px;flex:none}.cl2{display:block;margin:6px 0}.cl2 input{width:100%;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);margin-top:4px}#cm .row{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}#cm button:disabled{opacity:.45}";
document.head.appendChild(st);
var d=document.createElement("section");d.id="dash";
d.innerHTML='<div class="dh">Your 52-Week Journey</div>'
+'<div class="dst"><div><b id="dpc">0%</b>Complete</div><div><b id="dsk">0</b>🔥 Day Streak</div><div><b id="dtm">0</b>📚 Topics Mastered</div><div><b id="dpr">0</b>✏️ Problems Solved</div></div>'
+'<div class="dc dm"><h3>TODAY\'S MISSION</h3><div id="dmw"></div><div class="tt" id="dmt"></div><div id="dmx" style="color:var(--mute)"></div><div id="dmn" style="font-size:.88rem;color:var(--mute)"></div><div>2h estimated</div><button class="go" id="dgo">▶ START TODAY</button></div>'
+'<div class="dc"><h3>CONTINUE LEARNING</h3><div id="dcl"></div></div>'
+'<div class="dc"><h3>⚠️ NEEDS REVIEW</h3><div id="drv"></div></div>'
+'<div class="dc"><h3>📓 MISTAKE BOOK</h3><details id="mbf"><summary>+ নতুন ভুল লিখুন</summary><div class="mf"><input id="mbt" placeholder="টপিক (যেমন: Quadratics)"><textarea id="mbm" placeholder="ভুলটা কী ছিল?"></textarea><input id="mbw" placeholder="কেন হলো?"><textarea id="mbc" placeholder="সঠিক ধারণা / সমাধান"></textarea><button id="mbs">সেভ করুন (রিট্রাই ৩ দিন পর)</button></div></details><div id="mbl"></div></div>';
var sub=document.querySelector(".sub");sub.parentNode.insertBefore(d,sub.nextSibling);
var $=function(i){return document.getElementById(i)};
var cm=document.createElement("div");cm.id="cm";cm.setAttribute("role","dialog");cm.setAttribute("aria-modal","true");
cm.innerHTML='<form id="cmf" autocomplete="off"><p>টপিক শেষ করবেন?</p><small id="cms"></small><label class="cl"><input type="checkbox" id="cmk"> আমি ৮০%+ সমস্যা সমাধান না দেখে নিজে করেছি</label><label class="cl2">কতটা সমস্যা করেছেন?<input type="number" id="cmn" min="0" max="9999" inputmode="numeric" placeholder="যেমন: 25"></label><small>৮০% না পারলে আরও প্র্যাকটিস করে তারপর টিক দিন।</small><div class="row"><button type="button" id="cmc">বাতিল</button><button type="submit" id="cmo" disabled>টিক দিন</button></div></form>';
document.body.appendChild(cm);
function grp(inp){var s=inp.closest("details").querySelector("summary"),w=s.querySelector(".wk"),t=w?w.textContent:"";return{n:s.firstChild.textContent.trim(),w:t,wn:wkn(t)}}
function renderMB(){
 var box=$("mbl");box.textContent="";
 var open=M.mb.filter(function(x){return!x.done}).sort(function(a,b){return a.r<b.r?-1:a.r>b.r?1:a.id-b.id}),nd=M.mb.length-open.length;
 if(!open.length)box.appendChild(el("p",null,M.mb.length?"সব ভুল সমাধান হয়েছে 🎉":"এখনও কোনো ভুল লেখা হয়নি।"));
 open.forEach(function(x){
  var c=el("div","mi"),h=el("div"),due=x.r<=T;
  h.appendChild(el("b",null,x.t));h.appendChild(el("small",null," · "+x.d));if(due)h.appendChild(el("span","bd","রিট্রাই আজ/ওভারডিউ"));
  c.appendChild(h);c.appendChild(el("p",null,"ভুল: "+x.m));if(x.w)c.appendChild(el("p",null,"কারণ: "+x.w));if(x.c)c.appendChild(el("p",null,"সঠিক: "+x.c));
  c.appendChild(el("p",null,"রিট্রাই: "+x.r));
  var a=el("div","ac"),ok=el("button",null,"✓ রিট্রাইয়ে পেরেছি"),no=el("button",null,"✗ আবার ভুল (+৩ দিন)"),del=el("button",null,"মুছুন");
  ok.onclick=function(){x.done=true;x.dd=T;act();renderMB()};
  no.onclick=function(){x.r=ymd2(dn(T)+3);act();renderMB()};
  del.onclick=function(){if(del.dataset.s){M.mb=M.mb.filter(function(y){return y!==x});sv();renderMB()}else{del.dataset.s=1;del.textContent="নিশ্চিত?"}};
  a.appendChild(ok);a.appendChild(no);a.appendChild(del);c.appendChild(a);box.appendChild(c)});
 if(nd&&open.length)box.appendChild(el("small",null,"সমাধান হয়েছে: "+nd+"টি"))}
function dash(){
 var ins=[].slice.call(document.querySelectorAll("#root .t input")),done=0,pr=M.prob|0,first=null,fg=null;
 ins.forEach(function(i){
  if(i.checked){done++;pr+=(M.pc[i.id]|0);if(!M.dates[i.id]){M.dates[i.id]=T;M.days[T]=1}}
  else{delete M.dates[i.id];delete M.rs[i.id];delete M.pc[i.id];var g=grp(i);if(!fg||g.wn<fg.wn){fg=g;first=i}}});
 sv();
 $("dpc").textContent=(ins.length?Math.round(done/ins.length*100):0)+"%";$("dtm").textContent=done;$("dpr").textContent=pr;
 var k=0,c=dn(T);if(!M.days[T])c--;while(M.days[ymd2(c)]){k++;c--}$("dsk").textContent=k;
 var diff=dn(T)-dn(M.start),wk=Math.min(52,Math.floor(diff/7)+1),dy=diff%7+1;
 $("dmw").textContent="Week "+wk+" · Day "+dy+(dy===7?" · রিভিশন দিন":"");
 if(first){$("dmt").textContent=fg.n;$("dmx").textContent="পরের টপিক: "+first.nextElementSibling.textContent;$("dcl").textContent=(fg.w||"")+" → "+fg.n;
  var df=fg.wn-wk;$("dmn").textContent=fg.wn>=1000?"":df<0?"⚠️ প্ল্যানের চেয়ে "+(-df)+" সপ্তাহ পিছিয়ে":df>0?"✅ প্ল্যানের চেয়ে "+df+" সপ্তাহ এগিয়ে":"✅ প্ল্যান অনুযায়ী চলছে";
  $("dgo").onclick=function(){act();var a=first.parentNode;while((a=a.parentNode)&&a!==document.body){if(a.tagName==="DETAILS")a.open=true}first.scrollIntoView({behavior:"smooth",block:"center"});first.focus();dash()}}
 else{$("dmt").textContent="সব টপিক শেষ 🎉";$("dmx").textContent="";$("dmn").textContent="";$("dcl").textContent="পুরো রোডম্যাপ সম্পন্ন";$("dgo").onclick=null}
 var rv=$("drv");rv.textContent="";var due=[];
 Object.keys(M.dates).forEach(function(id){var s=M.rs[id]|0;if(s>=I.length)return;var o=dn(T)-dn(M.dates[id])-I[s];if(o>=0&&document.querySelector('label[for="'+id+'"]'))due.push({id:id,s:s,o:o})});
 due.sort(function(a,b){return b.o-a.o});
 due.slice(0,5).forEach(function(x){var r=el("div","rv"),t=document.querySelector('label[for="'+x.id+'"]').textContent;
  r.appendChild(el("span",null,"• "+t+" "));r.appendChild(el("small",null,"(দিন "+I[x.s]+" রিভিউ)"));
  var b=el("button",null,"✓ রিভিউ হয়েছে");b.onclick=function(){M.rs[x.id]=x.s+1;act();dash()};r.appendChild(b);rv.appendChild(r)});
 if(due.length>5)rv.appendChild(el("small",null,"আরও "+(due.length-5)+"টি বাকি"));
 if(!due.length)rv.textContent="এখন রিভিউ বাকি নেই। টিক দেওয়ার ১, ৩, ৭, ১৪, ৩০ ও ৯০ দিন পর টপিক এখানে আসবে।";
 renderMB()}
var pend=null;
function closeC(){cm.classList.remove("on");$("cmk").checked=false;$("cmo").disabled=true;$("cmn").value="";pend=null}
document.getElementById("root").addEventListener("click",function(e){var c=e.target;
 if(c.type==="checkbox"&&!S[c.id]){e.preventDefault();e.stopImmediatePropagation();pend=c;$("cms").textContent=c.nextElementSibling.textContent;cm.classList.add("on");$("cmk").focus()}},true);
$("cmk").onchange=function(){$("cmo").disabled=!$("cmk").checked};
$("cmc").onclick=closeC;
cm.addEventListener("click",function(e){if(e.target===cm)closeC()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeC()});
$("cmf").onsubmit=function(e){e.preventDefault();if(!$("cmk").checked)return;var c=pend,n=Math.max(0,Math.min(9999,parseInt($("cmn").value,10)||0));closeC();
 M.pc[c.id]=n;c.checked=true;S[c.id]=true;save();act();upd()};
$("mbs").onclick=function(){var m=$("mbm").value.trim();if(!m){$("mbm").focus();return}
 M.mb.push({id:Date.now(),d:T,t:$("mbt").value.trim()||"—",m:m,w:$("mbw").value.trim(),c:$("mbc").value.trim(),r:ymd2(dn(T)+3),done:false});
 ["mbt","mbm","mbw","mbc"].forEach(function(i){$(i).value=""});$("mbf").open=false;act();renderMB()};
var _u=window.upd;window.upd=function(){_u();dash()};
dash();
})();
