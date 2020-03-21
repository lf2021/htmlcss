function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = 'green';
    context.fillRect(0,0,800,300);
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff';
    context.font = "normal 40px '微软雅黑','宋体'";
    context.textBaseline = "top";
    // context.textAlign = "start";
    context.fillText('欢迎收看麦子学院推出的',0,40);
    context.fillText('《HTML5+CSS3轻松入门与实战》',40,110);
    context.fillText('视频教程',580,180);
    context.fillText('12121121212121212212123213213211212121212《HTML5+CSS3轻松入门与实战》《HTML5+CSS3轻松入门与实战》《HTML5+CSS3轻松入门与实战》',0,220,800);
    // context.strokeText('南京邮电大学',0,40)
}