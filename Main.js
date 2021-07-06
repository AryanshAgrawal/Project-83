canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lastpositionofmousex, lastpositionofmousey;
var lastpositionoftouchx, lastpositionoftouchy;
color = "black";
widthofline = 1;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("Linewidth").value;
    lastpositionoftouchx= e.touches[0].clientX - canvas.offsetLeft;
    console.log("lastx"+lastpositionoftouchx);
    lastpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;
    console.log("lasty"+lastpositionoftouchy);
}


canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
console.log(current_position_of_touch_x,current_position_of_touch_y);
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.moveTo(lastpositionoftouchx, lastpositionoftouchy);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

    lastpositionoftouchx = current_position_of_touch_x;
    lastpositionoftouchy = current_position_of_touch_y;
    console.log(lastpositionoftouchx,lastpositionoftouchy);
}
function ClearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}












var mouseevent="empty";
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("Linewidth").value;
    document.body.style.overflow="hidden";
    mouseevent = "mouseDown";
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseevent = "mouseUp";

}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseevent = "mouseLeave";

}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
console.log(current_position_of_mouse_x,current_position_of_mouse_y);
    if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.moveTo(lastpositionofmousex, lastpositionofmousey);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx.stroke();
    }
    lastpositionofmousex = current_position_of_mouse_x;
    lastpositionofmousey = current_position_of_mouse_y;
    console.log(lastpositionofx,lastpositionofy);
}