const zoya=document.getElementById("zoya");
const hamza=document.getElementById("hamza");
const ali=document.getElementById("ali");

function update(){

document.getElementById("value1").innerHTML=zoya.value+"%";
document.getElementById("value2").innerHTML=hamza.value+"%";
document.getElementById("value3").innerHTML=ali.value+"%";

document.getElementById("s1").innerHTML=zoya.value+"%";
document.getElementById("s2").innerHTML=hamza.value+"%";
document.getElementById("s3").innerHTML=ali.value+"%";

document.getElementById("bar1").style.width=zoya.value+"%";
document.getElementById("bar2").style.width=hamza.value+"%";
document.getElementById("bar3").style.width=ali.value+"%";

}

update();

zoya.oninput=update;
hamza.oninput=update;
ali.oninput=update;