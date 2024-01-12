let container = document.getElementById("container");
let thanksContainer = document.getElementById("thanks");
let error = document.getElementById("error");
let link=document.getElementById("link");
function thanks() {
  let email = document.getElementById("emailid").value;

  if (isValidEmail(email)) {
    console.log("Valid email address");
    container.style.display = "none";
    thanksContainer.style.display = "flex";
    error.style.visibility = "hidden";
    link.innerHTML=email;
  } else {
    console.log("Invalid email address");
    error.style.visibility = "visible";
  }
}

function isValidEmail(email) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function dismiss() {
    if(screen.width>540){
  container.style.display = "grid";
  thanksContainer.style.display = "none";
    }
    else{
        container.style.display = "flex";
        thanksContainer.style.display = "none";
    }
}
