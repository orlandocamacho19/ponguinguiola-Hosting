/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateLogin() {
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    if (user.value === "" && password.value === "") {
        user.style.cssText = "border-bottom: 2px solid red;";
        password.style.cssText = "border-bottom: 2px solid red;";
        document.getElementById("message").innerHTML = "Favor de llenar todos los campos";
        message.style.cssText = "color: #000;";
        return false;
    } else if (user.value === ""){
        user.style.cssText = "border-bottom: 2px solid red;";
        password.style.cssText = "border-bottom: 2px solid #f7f7f7;";
        document.getElementById("message").innerHTML = "Favor de llenar todos los campos";
        message.style.cssText = "color: #000;";
        return false;
    } else if (password.value === ""){
        user.style.cssText = "border-bottom: 2px solid #f7f7f7;";
        password.style.cssText = "border-bottom: 2px solid red;";
        document.getElementById("message").innerHTML = "Favor de llenar todos los campos";
        message.style.cssText = "color: #000;";
        return false;
    } else if (user.value !== "Admin" && password.value !== "admin"){
        user.style.cssText = "border-bottom: 2px solid red;";
        password.style.cssText = "border-bottom: 2px solid red;";
        document.getElementById("message").innerHTML = "Datos incorrectos. Reintente";
        message.style.cssText = "color: #000;";
        return false;
    }
}


    
