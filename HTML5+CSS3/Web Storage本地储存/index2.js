function saveStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    localStorage.setItem('amessage',str);
}
function loadStorage(id) {
    var target = document.getElementById(id);
    var msg = localStorage.getItem('amessage');
    target.innerHTML = msg;
}