var L=document.querySelector("#error-message").content.querySelector(".add-tasks__error"),C=document.createDocumentFragment(),v=document.querySelector(".add-tasks"),c=JSON.parse(localStorage.getItem("id"))||0,I=()=>(c+=1,localStorage.setItem("id",JSON.stringify(c)),c);function n(){return JSON.parse(localStorage.getItem("tasks"))||[]}var m=(e,t)=>({id:I(),name:e,done:t}),i=()=>{let e=L.cloneNode(!0);C.append(e),v.append(e),setTimeout(()=>{e.remove()},5e3)};var b=1e3,O=document.querySelector("#tasks-placeholder"),x=()=>{document.querySelectorAll(".tasks__item").length===0&&O.classList.remove("hidden")},N=e=>{let t=n();t.forEach(s=>{s.id===parseInt(e.dataset.id,10)&&(s.done=!0)}),localStorage.setItem("tasks",JSON.stringify(t)),r(t)},u=e=>{let t=e.target.closest(".tasks__item"),s=t.querySelector(".task-card__label");t.classList.add("task-card--animation"),s.classList.add("task-card__label--effect"),e.target.disabled=!0,setTimeout(()=>{N(t),x()},b)};var F=1e3,R=document.querySelector("#tasks-placeholder"),A=()=>{document.querySelectorAll(".tasks__item").length===0&&R.classList.remove("hidden")},d=e=>{e.classList.add("task-card--animation");let t=n();t=t.filter(s=>s.id!==parseInt(e.dataset.id,10)),localStorage.setItem("tasks",JSON.stringify(t)),setTimeout(()=>{r(t)},F)},k=e=>{let t=e.target.closest(".tasks__item");e.target.disabled=!0,d(t),A()};var p=e=>{let t=e.target.closest(".tasks__item"),s=n();s.forEach(a=>{a.id===parseInt(t.dataset.id,10)&&(a.name=e.target.value)}),localStorage.setItem("tasks",JSON.stringify(s)),r(s)};var S=document.querySelector(".tasks__list"),H=document.querySelector("#new-task").content.querySelector(".tasks__item"),P=document.querySelector("#tasks-placeholder"),E=document.createDocumentFragment(),D=document.querySelector(".tasks__count"),T=document.querySelector(".done__list"),J=document.querySelector("#done-task").content.querySelector(".done__item"),M=document.querySelector(".done__count"),w=document.querySelector("#done-placeholder"),_=document.createDocumentFragment(),r=e=>{S.innerHTML="",T.innerHTML="";let t=0,s=0;e.forEach(a=>{if(a.done===!1){let o=H.cloneNode(!0),h=o.querySelector(".button-icon--check"),y=o.querySelector(".button-icon--bin"),q=o.querySelector(".task-card__text");o.querySelector(".task-card__text").value=a.name,o.dataset.id=a.id,E.append(o),S.append(E),P.classList.add("hidden"),h.addEventListener("change",u),y.addEventListener("click",k),q.addEventListener("change",p),t+=1}else{let o=J.cloneNode(!0);o.querySelector(".task-card__text").textContent=a.name,o.dataset.id=a.id,_.append(o),T.append(_),w.classList.add("hidden"),s+=1}}),D.textContent=t,M.textContent=s};var l=document.querySelector(".add-tasks__form"),B=l.querySelector(".add-tasks__field"),W=e=>{if(e){let t=n(),s=m(e,!1);t.push(s),localStorage.setItem("tasks",JSON.stringify(t)),r(t)}else i()},j=e=>{e.preventDefault(),W(B.value),l.reset()},g=()=>{l.addEventListener("submit",j)};var z=1e3,G=document.querySelector("#done-placeholder"),K=document.querySelector(".button-icon--clear"),Q=()=>{document.querySelectorAll(".done__item").forEach(t=>{t.classList.add("task-card--animation"),d(t)}),setTimeout(()=>{G.classList.remove("hidden")},z)},f=()=>{K.addEventListener("click",Q)};var U=n();r(U);f();g();