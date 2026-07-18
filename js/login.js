const form=document.getElementById("loginForm");

const password=document.getElementById("password");

const toggle=document.getElementById("togglePassword");

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.classList.remove("fa-eye");

toggle.classList.add("fa-eye-slash");

}

else{

password.type="password";

toggle.classList.remove("fa-eye-slash");

toggle.classList.add("fa-eye");

}

});

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const pass=password.value.trim();

if(email===""||pass===""){

alert("Please fill all fields.");

return;

}

localStorage.setItem("loggedIn","true");

localStorage.setItem("userEmail",email);

window.location.href="dashboard.html";

});

const blobs=document.querySelectorAll(".blob");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

blobs.forEach((blob,index)=>{

const speed=(index+1)*15;

blob.style.transform=`translate(${x*speed}px,${y*speed}px)`;

});

});

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});