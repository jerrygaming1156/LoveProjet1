function loading (){
  var elem = document.getElementById("loadingBarIn"); //loading bar
  var width = 1;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

loading();