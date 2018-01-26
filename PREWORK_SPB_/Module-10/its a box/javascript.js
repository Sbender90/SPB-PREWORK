
    function fadeOutEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 200);
}


//button1 grow

document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("box").style.height = "500px";
});
document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("box").style.width = "500px";
});

//button2 blue

document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor= "blue";
});

//button3 fade

document.getElementById("button3").addEventListener('click', fadeOutEffect);

//button4 reset

document.getElementById("button4").addEventListener("click", function(){
  document.getElementById("box").style.height = "150px";
});
document.getElementById("button4").addEventListener("click", function(){
  document.getElementById("box").style.width = "150px";
});
document.getElementById("button4").addEventListener("click",function(){
	document.getElementById("box").style.backgroundColor = "orange";
});
document.getElementById("button4").addEventListener("click",function(){
	document.getElementById("box").style.opacity = (1);
});
