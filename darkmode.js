var checkb = document.querySelector("#chk");
checkb.addEventListener("click", function() {
  toggleColorScheme();
});

function toggleColorScheme() {
  var body = document.querySelector("body");
  var navbar = document.querySelector("#nav");
  var ham = document.querySelector(".hamburger");
  var checkbox = document.querySelector("#chk");
  var ul = document.querySelectorAll("list1");


  if (checkbox.checked) {
    // Switch to dark color scheme
    body.style.backgroundImage = "url(bg/n.jpg)";
    body.style.color = "white";

    // navbar.style.backgroundImage = "url(bg/n.jpg)";
    // navbar.style.color = "white";

    // ham.style.backgroundColor = "grey";
    // ham.style.color = "white";
    // ham.style.borderColor= "white";

    // ul.style.backgroundColor = "rgb(72, 72, 72)";
    // ul.style.color="white";


  } else {
    // Switch to default color scheme
    body.style.backgroundImage = "url(bg/m2.jpg)";
    body.style.color = "black";

    // navbar.style.backgroundImage = "url(bg/m.jpg)";
    // navbar.style.color = "black";

    // ham.style.backgroundColor = "grey";
    // ham.style.color = "black";
    
        
  }
}
