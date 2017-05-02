


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function sendMail() {
  var email = document.getElementById("email").value
  var body = document.getElementById("body").value
  emailjs.send("shrey23","template_qBAaMarD",{from_name: email, message_html: body, to_name: "ShreyJay Photo"});
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("body").value = "Sent!";
}
