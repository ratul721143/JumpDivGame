var jumpbox=document.getElementById("jumpBox");
var runbox = document.getElementById("runningBox");


function jump(){
    if(jumpbox.classList != "animate"){
        jumpbox.classList.add("jumpAnimate");
    }
    setTimeout(function(){
        jumpbox.classList.remove("jumpAnimate");
    },500);
}

var check= setInterval(() => {
    var jumpBoxTop=parseInt(window.getComputedStyle(jumpbox).getPropertyValue("top"));
    //var runBoxTop=parseInt(window.getComputedStyle(runbox).getPropertyValue("top"));
    var runBoxLeft=parseInt(window.getComputedStyle(runbox).getPropertyValue("left"));
    
    if((500<=jumpBoxTop)  && ((300 <=runBoxLeft && runBoxLeft<=366) || (260<=runBoxLeft && runBoxLeft<=326))){
        alert("Game Over!");
    }
    
},10);
