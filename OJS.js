function openNav() {
    document.getElementById("navbg").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";};
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navbg").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";};
    
    window.onload = function(){
      document.getElementById("navbg").style.width = "0";
   document.getElementById("main").style.marginLeft = "0";
  };

  //nav 
  const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
                option.addEventListener("click", function() {
  barOuter.className = "bar-outer";
  barOuter.classList.add(`pos${option.index}`);
  if (option.index > current) {
    barOuter.classList.add("right");
  } else if (option.index < current) {
    barOuter.classList.add("left");
  }
  current = option.index;
}));
//password

function shwPwd() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}