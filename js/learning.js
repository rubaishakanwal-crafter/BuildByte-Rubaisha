

// Different learning paths
const learningPaths = [

{
title:"🌐 Web Development Roadmap",
text:`
✅ HTML Fundamentals<br>
✅ CSS & Responsive Design<br>
✅ JavaScript Basics<br>
✅ Build Portfolio Website<br>
✅ Learn Git & GitHub<br>
✅ Host on GitHub Pages
`
},

{
title:"🐍 Python Developer Roadmap",
text:`
✅ Python Basics<br>
✅ Functions & OOP<br>
✅ File Handling<br>
✅ Mini Projects<br>
✅ APIs<br>
✅ Automation
`
},

{
title:"🎨 UI/UX Designer Roadmap",
text:`
✅ Design Principles<br>
✅ Color Theory<br>
✅ Typography<br>
✅ Figma Basics<br>
✅ Responsive Design<br>
✅ Portfolio Creation
`
},

{
title:"📊 Data Analytics Roadmap",
text:`
✅ Excel<br>
✅ SQL<br>
✅ Python<br>
✅ Data Visualization<br>
✅ Power BI<br>
✅ Dashboard Projects
`
},

{
title:"🔒 Cyber Security Roadmap",
text:`
✅ Networking Basics<br>
✅ Linux Commands<br>
✅ Ethical Hacking Basics<br>
✅ Web Security<br>
✅ TryHackMe Labs<br>
✅ Capture The Flag Challenges
`
}

];


function recommend(){

const random =
Math.floor(Math.random()*learningPaths.length);

const path =
learningPaths[random];

document.getElementById("path").innerHTML=

`
<h3>${path.title}</h3>

<p>${path.text}</p>

`;

document.getElementById("path").style.display="block";

}



const cards=document.querySelectorAll(".learn-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});



const stats=[

{
id:"students",
target:5000
},

{
id:"courses",
target:200
},

{
id:"projects",
target:1200
}

];

function animateCounter(id,target){

let value=0;

const speed=target/100;

const counter=setInterval(()=>{

value+=speed;

if(value>=target){

value=target;

clearInterval(counter);

}

const element=document.getElementById(id);

if(element){

element.innerHTML=Math.floor(value);

}

},20);

}

window.onload=function(){

stats.forEach(stat=>{

animateCounter(stat.id,stat.target);

});

};



setTimeout(()=>{

const popup=document.createElement("div");

popup.innerHTML="🏆 Explore free resources and earn your first SkillBridge Badge!";

popup.style.position="fixed";

popup.style.bottom="20px";

popup.style.right="20px";

popup.style.background="#75BBA7";

popup.style.color="white";

popup.style.padding="18px";

popup.style.borderRadius="12px";

popup.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";

popup.style.zIndex="999";

popup.style.fontWeight="600";

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},5000);

},3000);



document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});