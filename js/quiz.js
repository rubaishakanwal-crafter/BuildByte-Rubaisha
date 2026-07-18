let currentSkill = "";

let currentQuestion = 0;

let score = 0;

let timer = 60;

let timerInterval = null;

let selectedAnswer = null;

let answers = [];





const quizzes = {


html:[

{
question:"A webpage looks broken on a mobile phone. What should you check first?",
options:[
"Viewport settings",
"Printer settings",
"Keyboard language",
"Browser history"
],
answer:0
},

{
question:"Why should images have alternative text?",
options:[
"For accessibility",
"To increase image size",
"To change colors",
"To improve internet speed"
],
answer:0
},

{
question:"Which improves website structure?",
options:[
"Semantic HTML elements",
"Random divs",
"Large images",
"Inline styles"
],
answer:0
},

{
question:"What makes a webpage user friendly?",
options:[
"Clear layout",
"Too many animations",
"Very small text",
"Auto music"
],
answer:0
},

{
question:"HTML is mainly used for:",
options:[
"Page structure",
"Database storage",
"Operating system",
"Video editing"
],
answer:0
}

],



css:[

{
question:"Which property controls element position?",
options:[
"position",
"color",
"font",
"background"
],
answer:0
},

{
question:"Which creates responsive layouts?",
options:[
"Flexbox",
"Only pixels",
"Tables",
"Images"
],
answer:0
},

{
question:"Smooth hover animation uses:",
options:[
"transition",
"overflow",
"float",
"display"
],
answer:0
},

{
question:"Responsive text commonly uses:",
options:[
"rem",
"inch",
"cm",
"only px"
],
answer:0
},

{
question:"Spacing inside an element is:",
options:[
"padding",
"margin",
"border",
"height"
],
answer:0
}

],



python:[

{
question:"Which stores multiple values?",
options:[
"List",
"Integer",
"Boolean",
"Float"
],
answer:0
},

{
question:"Which loop processes items?",
options:[
"for loop",
"break",
"return",
"pass"
],
answer:0
},

{
question:"Functions are useful because:",
options:[
"They reuse code",
"They slow programs",
"They create errors",
"They damage hardware"
],
answer:0
},

{
question:"Exception handling uses:",
options:[
"except",
"repeat",
"error",
"catching"
],
answer:0
},

{
question:"len() returns:",
options:[
"Number of items",
"Memory",
"Speed",
"CPU usage"
],
answer:0
}

],



communication:[

{
question:"A teammate misunderstands your task. First step?",
options:[
"Clarify expectations",
"Ignore them",
"Leave team",
"Complain"
],
answer:0
},

{
question:"Good communication requires:",
options:[
"Active listening",
"Interrupting",
"Guessing",
"Arguing"
],
answer:0
},

{
question:"Professional emails should be:",
options:[
"Clear and concise",
"Very long",
"Emotional",
"Informal only"
],
answer:0
},

{
question:"Feedback should be:",
options:[
"Respectful",
"Personal",
"Aggressive",
"Confusing"
],
answer:0
},

{
question:"Teamwork improves when members:",
options:[
"Communicate openly",
"Hide information",
"Ignore deadlines",
"Work separately"
],
answer:0
}

]

};


function startQuiz(skill){


currentSkill = skill;

currentQuestion = 0;

score = 0;

answers = [];

selectedAnswer = null;


document.querySelector(".quiz-home").style.display="none";


document.getElementById("quizBox").style.display="block";


document.getElementById("resultBox").style.display="none";


document.getElementById("skillTitle").innerText =

skill.charAt(0).toUpperCase()+skill.slice(1);



startTimer();


loadQuestion();


}


function loadQuestion(){


const q = quizzes[currentSkill][currentQuestion];


selectedAnswer = answers[currentQuestion] ?? null;



document.getElementById("question").innerText =
q.question;



document.getElementById("questionCount").innerText =

`Question ${currentQuestion+1} / ${quizzes[currentSkill].length}`;



let html="";



q.options.forEach((option,index)=>{


html+=`

<div class="option ${selectedAnswer===index?'selected':''}"

onclick="selectOption(${index},this)">

${option}

</div>

`;


});



document.getElementById("options").innerHTML=html;


updateProgress();


}







function selectOption(index,element){


selectedAnswer=index;


answers[currentQuestion]=index;



document.querySelectorAll(".option")

.forEach(option=>{

option.classList.remove("selected");

});



element.classList.add("selected");


}






function nextQuestion(){


if(selectedAnswer===null){

alert("Please select an answer");

return;

}



currentQuestion++;



if(currentQuestion < quizzes[currentSkill].length){

loadQuestion();

}

else{

calculateScore();

showResult();

}


}





function previousQuestion(){


if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}


}


function startTimer(){


clearInterval(timerInterval);


timer=60;


document.getElementById("time").innerText=timer;



timerInterval=setInterval(()=>{


timer--;


document.getElementById("time").innerText=timer;



if(timer<=0){


clearInterval(timerInterval);


calculateScore();

showResult();


}



},1000);


}


function calculateScore(){


score=0;


answers.forEach((answer,index)=>{


if(answer===quizzes[currentSkill][index].answer){

score++;

}


});


}




function updateProgress(){


let total=quizzes[currentSkill].length;


let percent=((currentQuestion+1)/total)*100;


document.getElementById("progressFill")

.style.width=percent+"%";


}




function showResult(){


clearInterval(timerInterval);



document.getElementById("quizBox").style.display="none";


document.getElementById("resultBox").style.display="flex";



let total=quizzes[currentSkill].length;


let percentage=Math.round(

(score/total)*100

);



document.getElementById("finalScore").innerText=

percentage+"%";



let badge;



if(percentage>=80){

badge="🏆 VERIFIED SKILL";

}

else if(percentage>=60){

badge="🥈 INTERMEDIATE";

}

else{

badge="📘 BEGINNER";

}



document.getElementById("badgeText").innerText=badge;



savePassport(percentage);



}


function savePassport(score){


let passport =

JSON.parse(localStorage.getItem("passport")) || {};



passport[currentSkill]=score;



localStorage.setItem(

"passport",

JSON.stringify(passport)

);



if(Object.keys(passport).length>=2){


localStorage.setItem(

"passportUnlocked",

"true"

);


}



}