
// Reveal Animation

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

cards.forEach(card=>{

observer.observe(card);

});

// Hover Animation

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Icon Rotation

const icons=document.querySelectorAll(".project-image i");

icons.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="rotate(360deg)";

icon.style.transition=".8s";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="rotate(0deg)";

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>40){

nav.style.boxShadow="0 15px 40px rgba(0,0,0,.15)";

}else{

nav.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}

});

// Future Cards

const future=document.querySelectorAll(".future-card");

future.forEach(card=>{

observer.observe(card);

});

// Random Project Tip

const tips=[

"Projects impress employers more than certificates.",

"Keep your GitHub updated.",

"Write clean and documented code.",

"Deploy every project online.",

"Use responsive design."

];

console.log(

tips[Math.floor(Math.random()*tips.length)]

);

// Page Load

window.onload=()=>{

document.body.style.opacity="1";

document.body.style.transition=".5s";

console.log("Projects Loaded 🚀");

};