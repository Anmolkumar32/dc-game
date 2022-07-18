var bat = document.getElementById('bat');
var obstacle = document.getElementById('obstacle');
var counter = 0;

function jump(){
    if(bat.classList != "animate"){
        bat.classList.add("animate");
    }
    setTimeout(function(){
        bat.classList.remove("animate");
        counter++;
    },500);
}
 
var lose = setInterval(function() {
    var batTop = 
    parseInt(window.getComputedStyle(bat).
    getPropertyValue("top"));
    var blockLeft = 
    parseInt(window.getComputedStyle(obstacle).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && batTop>=130){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("score:"+ counter);
        counter = 0;
    }
}, 10);
