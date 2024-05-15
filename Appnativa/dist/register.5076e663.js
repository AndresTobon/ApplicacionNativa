document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("register-form");e.addEventListener("submit",t=>{t.preventDefault(),e.username.value,e.password.value,alert("Usuario registrado con éxito"),window.localStorage.setItem("loggedIn","true"),window.location.href="index.html"})});
//# sourceMappingURL=register.5076e663.js.map
