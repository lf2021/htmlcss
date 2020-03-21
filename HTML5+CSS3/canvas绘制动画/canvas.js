// var context;
// var width,height;
// var i;
// function draw(id) {
//     var canvas = document.getElementById(id);
//     context = canvas.getContext('2d');
//     width = canvas.width;
//     height = canvas.height;
//     setInterval(painting,100);
//     i = 0;
// }
// function painting() {
//     // context.fillStyle = 'green';
//     // context.fillRect(i,i,10,10);
//     // context.fillRect(400-i,400-i,10,10);
//     // context.fillRect(i,400-i,10,10);
//     // context.fillRect(400-i,i,10,10);
//
//     context.fillStyle = 'green';
//     context.fillRect(0,0,width,height);
//     context.clearRect(10,10,width-100,height-100);
//     context.fillStyle = 'green';
//     context.fillRect(i,20,10,10);
//     i=i+20;
// }


var context;
var i;
var width,height;
function draw(id) {
    var canvas = document.getElementById(id);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    context.fillStyle = '#F1F2F3';
    context.fillRect(0,0,width,height);
    i = 0;
    setInterval(painting,100);
}

function painting() {

    context.fillStyle = 'green';
    context.fillRect(i,i,20,20);
    context.fillRect(i,height-i-20,20,20);
    context.fillRect(width-i-20,i,20,20);
    context.fillRect(width-i-20,height-i-20,20,20);
    i = i+20
}