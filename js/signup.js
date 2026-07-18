const password=document.getElementById("password");
const confirm=document.getElementById("confirm");
const form=document.getElementById("signupForm");
const toggle=document.getElementById("togglePassword");

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.classList.replace("fa-eye","fa-eye-slash");

}else{

password.type="password";

toggle.classList.replace("fa-eye-slash","fa-eye");

}

});

password.addEventListener("input",()=>{

const fill=document.getElementById("strengthFill");
const text=document.getElementById("strengthText");

let value=password.value.length;

if(value<6){

fill.style.width="30%";
fill.style.background="#EF4444";
text.innerHTML="Weak Password";

}
else if(value<10){

fill.style.width="65%";
fill.style.background="#F59E0B";
text.innerHTML="Medium Password";

}
else{

fill.style.width="100%";
fill.style.background="#22C55E";
text.innerHTML="Strong Password";

}

});

form.addEventListener("submit",(e)=>{

e.preventDefault();

if(password.value!==confirm.value){

alert("Passwords do not match.");

return;

}

const selectedSkills=[
...document.querySelectorAll(".skill-select input:checked")
].map(skill=>skill.value);

const user={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

skills:selectedSkills

};

localStorage.setItem("skillbridgeUser",JSON.stringify(user));

window.location.href="login.html";

});