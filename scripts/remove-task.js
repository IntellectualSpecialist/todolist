var v=document.querySelector("#error-message").content.querySelector(".add-tasks__error"),R=document.createDocumentFragment(),F=document.querySelector(".add-tasks"),H=JSON.parse(localStorage.getItem("id"))||0;function r(){return JSON.parse(localStorage.getItem("tasks"))||[]}var E=1e3,h=document.querySelector("#tasks-placeholder"),T=()=>{document.querySelectorAll(".tasks__item").length===0&&h.classList.remove("hidden")},y=t=>{let e=r();e.forEach(o=>{o.id===parseInt(t.dataset.id,10)&&(o.done=!0)}),localStorage.setItem("tasks",JSON.stringify(e)),a(e)},c=t=>{let e=t.target.closest(".tasks__item"),o=e.querySelector(".task-card__label");e.classList.add("task-card--animation"),o.classList.add("task-card__label--effect"),t.target.disabled=!0,setTimeout(()=>{y(e),T()},E)};var d=t=>{let e=t.target.closest(".tasks__item"),o=r();o.forEach(n=>{n.id===parseInt(e.dataset.id,10)&&(n.name=t.target.value)}),localStorage.setItem("tasks",JSON.stringify(o)),a(o)};var l=document.querySelector(".tasks__list"),f=document.querySelector("#new-task").content.querySelector(".tasks__item"),q=document.querySelector("#tasks-placeholder"),m=document.createDocumentFragment(),L=document.querySelector(".tasks__count"),i=document.querySelector(".done__list"),C=document.querySelector("#done-task").content.querySelector(".done__item"),I=document.querySelector(".done__count"),x=document.querySelector("#done-placeholder"),u=document.createDocumentFragment(),a=t=>{l.innerHTML="",i.innerHTML="";let e=0,o=0;t.forEach(n=>{if(n.done===!1){let s=f.cloneNode(!0),S=s.querySelector(".button-icon--check"),g=s.querySelector(".button-icon--bin"),_=s.querySelector(".task-card__text");s.querySelector(".task-card__text").value=n.name,s.dataset.id=n.id,m.append(s),l.append(m),q.classList.add("hidden"),S.addEventListener("change",c),g.addEventListener("click",k),_.addEventListener("change",d),e+=1}else{let s=C.cloneNode(!0);s.querySelector(".task-card__text").textContent=n.name,s.dataset.id=n.id,u.append(s),i.append(u),x.classList.add("hidden"),o+=1}}),L.textContent=e,I.textContent=o};var p=1e3,N=document.querySelector("#tasks-placeholder"),b=()=>{document.querySelectorAll(".tasks__item").length===0&&N.classList.remove("hidden")},O=t=>{t.classList.add("task-card--animation");let e=r();e=e.filter(o=>o.id!==parseInt(t.dataset.id,10)),localStorage.setItem("tasks",JSON.stringify(e)),setTimeout(()=>{a(e)},p)},k=t=>{let e=t.target.closest(".tasks__item");t.target.disabled=!0,O(e),setTimeout(()=>{b()},p)};export{k as onRemoveButtonClick,O as removeTask};
