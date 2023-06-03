function login() {
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        
        window.location.href = "/";
      } else {
        alert("Login failed!");
      }
    }
  };
  xhr.send(JSON.stringify({
    username: username,
    password: password
  }));
}

document.getElementById("login").addEventListener("click", login);
