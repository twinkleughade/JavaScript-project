function checkdata(){
    let namevalue=document.getElementById("fullname").value;
    let emailvalue = document.getElementById("email").value;
    let numbervalue = document.getElementById("phonenumber").value;
    let birthdatevalue = document.getElementById("birthdate").value;
    let usernamevalue = document.getElementById("username").value;
    let passwordvalue = document.getElementById("password").value;
    let cpasswordvalue = document.getElementById("cpassword").value;

    
    if(namevalue === "" && namevalue!="1234567890.-+/*!@#$%^&*(')_+-={}|[]\;':,./<>?" ){
        document.getElementById("nameerror").innerHTML = "Invailid input";
        let name = document.getElementById("fullname");
        name.style.border = "2px solid red"
        
        name.onblur = function(){
            document.getElementById("nameerror").style.display = "none";
            document.getElementById("fullname").style.border = "none";
        }
    }

    else if(emailvalue === ""){
        alert("email empty");

        document.getElementById("emailerror").innerHTML = "Enter vailid mail";
        let email = document.getElementById("email");
        email.style.border ="2px solid red";
        email.onblur = function(){
            document.getElementById("emailerror").style.display = "none";
            document.getElementById("email").style.border = "none";
        }
    }

    else if(numbervalue === ""){
         alert("number empty");
    

        document.getElementById("numbererror").innerHTML = "Enter vailid number";
        let number = document.getElementById("phonenumber");
        number.style.border ="2px solid red";
        number.onblur = function(){
            document.getElementById("numbererror").style.display = "none";
            document.getElementById("phonenumber").style.border = "none";
        }
    }

    else if(birthdatevalue === ""){
         alert("data empty");

        document.getElementById("dateerror").innerHTML = "Enter vailid date";
        let date = document.getElementById("birthdate");
        date.style.border ="2px solid red";
        date.onblur = function(){
            document.getElementById("dateerror").style.display = "none";
            document.getElementById("birthdate").style.border = "none";
        }
    }

    else if(usernamevalue === ""){
        alert("username empty");
        
        document.getElementById("usernameerror").innerHTML = "Enter username";
        let user = document.getElementById("username");
        user.style.border ="2px solid red";
        user.onblur = function(){
            document.getElementById("usernameerror").style.display = "none";
            document.getElementById("username").style.border = "none";
        }
    }

    else if(passwordvalue === "" ){
        alert("password empty");

        document.getElementById("passworderror").innerHTML = "Enter password";
        let pwd = document.getElementById("password");
        pwd.style.border ="2px solid red";
        pwd.onblur = function(){
            document.getElementById("passworderror").style.display = "none";
            document.getElementById("password").style.border = "none";
        }
    }

    else if(cpasswordvalue === ""){
         alert("cpassword empty");

        document.getElementById("cpassworderror").innerHTML = "Re-enter password";
        let cpwd = document.getElementById("cpassword");
        cpw.style.border ="2px solid red";
        cpwd.onblur = function(){
            document.getElementById("cpassworderror").style.display = "none";
            document.getElementById("cpassword").style.border = "none";
        }
    }
    else if(namevalue === namevalue && emailvalue === emailvalue && passwordvalue === passwordvalue && numbervalue === numbervalue && usernamevalue === usernamevalue && birthdatevalue === birthdatevalue && cpasswordvalue === cpasswordvalue){
        window.location.href = "/login.html";
    }

    localStorage.setItem("name",namevalue);
    localStorage.setItem("email",emailvalue);
    localStorage.setItem("number",numbervalue);
    localStorage.setItem("birthdate",birthdatevalue);
    localStorage.setItem("username",usernamevalue);
    localStorage.setItem("password",passwordvalue);
    
    return false;


    
}

