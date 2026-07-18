

let passport =
JSON.parse(localStorage.getItem("passport")) || {};





document.getElementById("htmlScore").innerHTML =
passport.html
?
passport.html.score + "% " + passport.html.badge
:
"Not Verified";



document.getElementById("cssScore").innerHTML =
passport.css
?
passport.css.score + "% " + passport.css.badge
:
"Not Verified";



document.getElementById("pythonScore").innerHTML =
passport.python
?
passport.python.score + "% " + passport.python.badge
:
"Not Verified";



document.getElementById("communicationScore").innerHTML =
passport.communication
?
passport.communication.score + "% " + passport.communication.badge
:
"Not Verified";





/*=========================
CREATE ACHIEVEMENTS
==========================*/


let badgeContainer =
document.getElementById("badgeContainer");



let badges = [

{
name:"HTML",
icon:"🏆",
data:passport.html
},

{
name:"CSS",
icon:"🎨",
data:passport.css
},

{
name:"Python",
icon:"🐍",
data:passport.python
},

{
name:"Communication",
icon:"💬",
data:passport.communication
}

];



badges.forEach(skill=>{


if(skill.data){


let badge=document.createElement("div");


badge.className="badge";


badge.innerHTML =
`
${skill.icon} ${skill.name} Verified
`;



badgeContainer.appendChild(badge);


}


});








let user =
localStorage.getItem("username");


if(user){

document.getElementById("studentName").innerHTML=user;

}




function downloadPassport(){

alert(
"Prototype Demo\n\nPassport PDF download will be available in the full version."
);

}




function printPassport(){

window.print();

}




/*=========================
Badge Animation
==========================*/


const badgesAnimation =
document.querySelectorAll(".badge");



badgesAnimation.forEach((badge,index)=>{


setTimeout(()=>{


badge.style.transform="scale(1.08)";


setTimeout(()=>{


badge.style.transform="scale(1)";


},300);



},index*250);



});