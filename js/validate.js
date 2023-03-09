// validation function
const Validate = () => {
    // picking input fields with their names
    let email= document.register.email;
    let password = document.register.password;
    
    // pick error sections
    let mailError = document.getElementById("mailErr");
    let passError = document.getElementById("passErr");
    
    // email validations
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == "") {
      email.style.border = "2px solid red";
      mailError.textContent = "Email is required";
      mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      email.focus();
      return false;
    }else if (!email.value.match(emailregex)) {
      email.style.border = "2px solid red"
      mailError.textContent = "Please put in a correct email address";
      mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      email.focus();
      return false;
    }else {
      email.style.border = "2px solid green"
      mailError.textContent = "";
      password.focus();
    }
    
     // password validation
     if (password.value == "") {
       password.style.border = "2px solid red"
       passError.textContent = "Password is required";
       passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       password.focus();
       return false;
     }
     else if (password.value.length < 5) {
       password.style.border = "2px solid red"
       passError.textContent = "Please the password must be atleast 5 characters";
       passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       password.focus();
       return false;
     }else if (password.value.length > 15) {
       password.style.border = "2px solid red"
       passError.textContent = "Please the password must not be more than 15 characters";
       passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       password.focus();
       return false;
     }
     else {
       password.style.border = "2px solid green"
       passError.textContent = "";
     }
    
    }