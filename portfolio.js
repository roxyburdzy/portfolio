var element = document.querySelector("#zegar");
function now_time() {
  var data = new Date();
  var time = data.toLocaleTimeString();
  element.innerHTML = time;
}

setInterval(now_time, 1000);
