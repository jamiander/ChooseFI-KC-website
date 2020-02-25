function fi(why) {
  if (["yes","Yes","Y","y"].indexOf(why) > -1) {
    alert ("Welcome to the blueprint!");
  } else {
    alert ("This is not your tribe.");
    window.location.replace("https://www.amazon.com");
  }
}



if (window.location.href.includes("index.html")) {
  let why = prompt ("Do you want to be FI?");
  fi(why);
}
//adds calendar
function calendar(){
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var d=new Date();
    setText('calendar-day', day[d.getDay()]);
    setText('calendar-date', d.getDate());
    setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
};

function setText(id, val){
    if(val < 10){
        val = '0' + val;    //add leading 0 if val < 10
    }
    document.getElementById(id).innerHTML = val;
};
window.onload = calendar;



$(document).ready(function() {
  $('body').on('click', '.top', function() {
    $('nav.navbar').toggleClass('navbar_show');
  })
})
