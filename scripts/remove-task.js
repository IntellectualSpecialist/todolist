var f=1500,i=400,l=document.querySelector(".done__list"),L=document.querySelector("#done-task").content.querySelector(".done__item"),C=document.querySelector("#done-placeholder"),m=document.createDocumentFragment(),I=()=>{let t=l.querySelector(".done__item:last-child");t&&t.scrollIntoView(!1)},u=t=>{let e=L.cloneNode(!0);e.classList.add("task-card--new"),e.querySelector(".task-card__text").textContent=t,m.append(e),C.classList.add("hidden"),l.append(m),setTimeout(()=>{l.querySelector(".task-card--new").classList.add("task-card--show")},i)},x=t=>{let e=r();e.forEach(s=>{s.id===parseInt(t.dataset.id,10)&&(s.done=!0)}),c(e),a(e)},k=t=>{let e=t.target.closest(".tasks__item"),s=e.querySelector(".task-card__label"),o=e.querySelector(".task-card__text").value;e.classList.add("task-card--animation"),s.classList.add("task-card__label--effect"),t.target.disabled=!0,setTimeout(()=>{u(o)},i),setTimeout(()=>{u(o),x(e),I(),d()},f)};var v=(t,e)=>{let s=r();s.forEach(o=>{o.id===parseInt(t.dataset.id,10)&&(o.name=e)}),c(s),a(s)},T=t=>{let e=t.target.closest(".tasks__item"),s=t.target.value;v(e,s)};var p=document.querySelector(".tasks__list"),N=document.querySelector("#new-task").content.querySelector(".tasks__item"),b=document.querySelector("#tasks-placeholder"),_=document.createDocumentFragment(),w=document.querySelector(".tasks__count"),S=document.querySelector(".done__list"),F=document.querySelector("#done-task").content.querySelector(".done__item"),O=document.querySelector(".done__count"),D=document.querySelector("#done-placeholder"),E=document.createDocumentFragment(),a=t=>{p.innerHTML="",S.innerHTML="";let e=0,s=0;t.forEach(o=>{if(o.done===!1){let n=N.cloneNode(!0),h=n.querySelector(".button-icon--check"),y=n.querySelector(".button-icon--bin"),q=n.querySelector(".task-card__text");n.querySelector(".task-card__text").value=o.name,n.dataset.id=o.id,_.append(n),b.classList.add("hidden"),h.addEventListener("change",k),y.addEventListener("click",g),q.addEventListener("change",T),e+=1}else{let n=F.cloneNode(!0);n.querySelector(".task-card__text").textContent=o.name,n.dataset.id=o.id,E.append(n),D.classList.add("hidden"),s+=1}}),p.append(_),S.append(E),w.textContent=e,O.textContent=s};var U=document.querySelector("#error-message").content.querySelector(".add-tasks__error"),X=document.createDocumentFragment(),Y=document.querySelector(".add-tasks"),R=document.querySelector("#tasks-placeholder"),Z=JSON.parse(localStorage.getItem("id"))||0;var r=()=>JSON.parse(localStorage.getItem("tasks"))||[],c=t=>{localStorage.setItem("tasks",JSON.stringify(t))};var d=()=>{document.querySelectorAll(".tasks__item").length===0&&R.classList.remove("hidden")};var M=1e3,P=t=>{let e=r();e=e.filter(s=>s.id!==parseInt(t.dataset.id,10)),c(e),a(e)},g=t=>{let e=t.target.closest(".tasks__item");t.target.disabled=!0,e.classList.add("task-card--animation"),setTimeout(()=>{P(e),d()},M)};export{g as onRemoveButtonClick,P as removeTask};