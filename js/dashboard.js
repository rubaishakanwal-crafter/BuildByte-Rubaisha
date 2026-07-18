
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}




const counters = document.querySelectorAll(".counter h1");

const speed = 30;

const animateCounter = (counter) => {

    let target = Number(counter.getAttribute("data-target"));

    if (!target) {

        switch (counter.id) {

            case "students":
                target = 5000;
                break;

            case "skills":
                target = 1200;
                break;

            case "projects":
                target = 850;
                break;
        }

    }

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 80);

        if (count < target) {

            counter.innerHTML = count;

            setTimeout(update, speed);

        } else {

            counter.innerHTML = target + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});




window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "90%";

    document.querySelector(".css").style.width = "85%";

    document.querySelector(".python").style.width = "75%";

    document.querySelector(".comm").style.width = "80%";

});



const revealItems = document.querySelectorAll(

".card,.feature,.counter,.glass-card,.stat-box"

);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});




window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>40){

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.18)";

}

else{

navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}

});




document.querySelectorAll(".btn1,.btn2")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});




const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="☀️ Good Morning";

}

else if(hour<17){

greeting="🌤 Good Afternoon";

}

else{

greeting="🌙 Good Evening";

}

console.log(greeting);




const glass=document.querySelector(".glass-card");

let position=0;

setInterval(()=>{

position+=0.03;

if(glass){

glass.style.transform=

`translateY(${Math.sin(position)*8}px)`;

}

},30);




window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

const value=window.scrollY;

hero.style.backgroundPositionY=value*0.2+"px";

});



const links=document.querySelectorAll(".navbar a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});




window.onload=()=>{

document.body.style.opacity="1";

document.body.style.transition=".5s";

};




const quotes=[

"Believe in your skills.",

"Projects speak louder than certificates.",

"Practice makes professionals.",

"Consistency beats talent.",

"Every expert was once a beginner."

];

console.log(

quotes[Math.floor(Math.random()*quotes.length)]

);


// ===============================
// HERO TYPING EFFECT
// ===============================

const title=document.querySelector(".hero-tag");

if(title){

const text=title.innerText;

title.innerText="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();

}