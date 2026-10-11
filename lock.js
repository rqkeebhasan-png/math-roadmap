/* Password-protected untick, same rule as the Mathematics page.
   Works on any lesson checkbox inside '.cx-l' (C page now, other language pages later). */
(function(){
var PW='UkFLSUI=',md=null,pend=null,opener=null;
function css(){if(document.getElementById('lk-css'))return;var s=document.createElement('style');s.id='lk-css';s.textContent=`
#lk{position:fixed;inset:0;background:rgba(0,0,0,.45);display:none;align-items:center;justify-content:center;z-index:50;padding:16px}
#lk.on{display:flex}
#lk form{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:16px;width:100%;max-width:340px}
#lk p{margin:0 0 4px;font-weight:700}
#lk small{display:block;color:var(--mute);margin-bottom:10px}
#lk input{width:100%;font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}
#lk .err{color:#d33;min-height:1.4em;margin:6px 0;font-size:.9rem}
#lk .row{display:flex;gap:8px;justify-content:flex-end}
`;document.head.appendChild(s)}
function close(){if(!md)return;md.classList.remove('on');document.getElementById('lk-p').value='';document.getElementById('lk-e').textContent='';pend=null;if(opener&&opener.focus)opener.focus();opener=null}
function build(){if(md)return;css();md=document.createElement('div');md.id='lk';md.setAttribute('role','dialog');md.setAttribute('aria-modal','true');md.setAttribute('aria-labelledby','lk-t');
 md.innerHTML=`<form autocomplete='off'><p id='lk-t'>টিক তুলতে পাসওয়ার্ড দিন</p><small>একবার টিক দিলে পাসওয়ার্ড ছাড়া তোলা যায় না।</small><input id='lk-p' type='password' placeholder='পাসওয়ার্ড' aria-label='পাসওয়ার্ড'><div class='err' id='lk-e' role='alert'></div><div class='row'><button type='button' id='lk-c'>বাতিল</button><button type='submit'>টিক তুলুন</button></div></form>`;
 document.body.appendChild(md);
 md.querySelector('form').onsubmit=function(e){e.preventDefault();var v=document.getElementById('lk-p').value,ok=false;try{ok=btoa(v)===PW}catch(x){}
  if(ok){var a=pend;pend=null;close();if(a)a()}else{document.getElementById('lk-e').textContent='ভুল পাসওয়ার্ড। টিক থেকে যাবে।';document.getElementById('lk-p').select()}};
 document.getElementById('lk-c').onclick=close;
 md.addEventListener('click',function(e){if(e.target===md)close()})}
function ask(fn,from){build();pend=fn;opener=from;md.classList.add('on');document.getElementById('lk-p').focus()}

// Capture phase: runs before the page's own handlers, so an untick never reaches them without the password.
document.addEventListener('click',function(e){
 var t=e.target;if(!t||!t.matches)return;
 // Unticking a lesson (during the click the box already shows its new, unchecked state)
 if(t.matches('.cx-l input[type=checkbox]')&&!t.checked){
  e.preventDefault();setTimeout(function(){t.checked=true},0);
  ask(function(){t.checked=false;t.dispatchEvent(new Event('change',{bubbles:true}))},t);return}
 // Bulk button when every lesson of the module is already complete (it would untick them all)
 var b=t.closest?t.closest('button[data-all]'):null;
 if(b){var boxes=document.querySelectorAll('#cm'+b.getAttribute('data-all')+' .cx-l input[type=checkbox]'),all=boxes.length>0;
  boxes.forEach(function(x){if(!x.checked)all=false});
  if(all){e.stopPropagation();e.preventDefault();
   ask(function(){boxes.forEach(function(x){x.checked=false;x.dispatchEvent(new Event('change',{bubbles:true}))})},b)}}
},true);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();
