var o=document.querySelector("#error-message").content.querySelector(".add-tasks__error"),n=document.createDocumentFragment(),a=document.querySelector(".add-tasks"),t=JSON.parse(localStorage.getItem("id"))||0,s=()=>(t+=1,localStorage.setItem("id",JSON.stringify(t)),t);function c(){return JSON.parse(localStorage.getItem("tasks"))||[]}var d=(e,r)=>({id:s(),name:e,done:r}),m=()=>{let e=o.cloneNode(!0);n.append(e),a.append(e),setTimeout(()=>{e.remove()},5e3)};export{d as createTask,c as getTasks,m as showAlert};