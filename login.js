

function login() {
  // Ketika Username dan Password Benar
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  // if (username.value == "admin" && password.value == "12345") {
  //   alert("Successfull");
  //   window.location.assign("index.html");
  // }
  // Ketika Username dan Password Salah
  // else {
  //   alert("Login!");
  // }
  alert("successfully login! welcome ")
  window.location.assign("index.html");
}
