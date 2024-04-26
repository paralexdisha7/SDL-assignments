function validateForm() {
    let valid = true;
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("firstnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("errorPassword").innerText = "";


    if(firstName === " "){
        valid = false;
        document.getElementById("firstnameError").innerText = "firstName required **";
    }
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}) +$/;
    if(!emailRegEx.test(email)){
        valid=false;
        document.getElementById("emailError").innerText = "email format incorrect **";
    }
    if(password.length < 6){
        valid = false ;
        document.getElementById("errorPassword").innerText = "password is too short.";
    }
    if(valid){
        alert("form submitted");
        return true;
    }else{
        return false;
    }
    
}