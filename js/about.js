
const boxes=document.querySelectorAll(".timeline-box,.why-card,.sdg-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

boxes.forEach(box=>{

box.style.opacity="0";

box.style.transform="translateY(50px)";

box.style.transition=".8s";

observer.observe(box);

});