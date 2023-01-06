var circle = document.getElementById("circle");
var loading = document.getElementById("loading");
var content = document.getElementById("content")
var text = document.getElementById("text");

var red = 0;
var green = 0;
var blue = 0;
var angle = 0;

var width = content.offsetWidth;
var height = content.offsetHeight;
content.style.marginTop = "-"+(height/2)+"px";
content.style.marginLeft = "-"+(width/2)+"px";

setInterval(() => {
    angle += 1;  
    if (angle<60) {red = 255; green = Math.round(angle*4.25-0.01); blue = 0;} else
    if (angle<120) {red = Math.round((120-angle)*4.25-0.01); green = 255; blue = 0;} else 
    if (angle<180) {red = 0, green = 255; blue = Math.round((angle-120)*4.25-0.01);} else 
    if (angle<240) {red = 0, green = Math.round((240-angle)*4.25-0.01); blue = 255;} else 
    if (angle<300) {red = Math.round((angle-240)*4.25-0.01), green = 0; blue = 255;} else 
    {red = 255, green = 0; blue = Math.round((360-angle)*4.25-0.01);}
    if(angle == 360) {
        angle = 0;
    }
    circle.style.borderTopColor = "rgb("+red+","+green+","+blue+")";
    circle.style.transform = "rotate("+angle+"deg)";
    loading.style.color = "rgb("+red+","+green+","+blue+")";
    text.style.color = "rgb("+red+","+green+","+blue+")";
}, 10);
