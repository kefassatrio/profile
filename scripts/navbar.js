window.onscroll = function() {myFunction()};

function myFunction() { 
    navtexts = document.getElementsByClassName("navtext");
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.backgroundColor = "#1E1736";
    for(i=0; i<navtexts.length; i++){
        navtexts[i].style.color = "#ffffff";
    }
  } else {
    document.getElementById("nav").style.backgroundColor = "#fdfdfd";
    for(i=0; i<navtexts.length; i++){
        navtexts[i].style.color = "#323232";
    }
  }
}