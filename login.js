function check(){
    
    let storename = localStorage.getItem("username");
    let storepwd = localStorage.getItem("password");
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(name == ""){

        alert("enter username");
        document.getElementById("usernameerror").innerHTML = "Enter username";
        let user = document.getElementById("username");
        user.style.border ="2px solid red";
        user.onblur = function(){
            document.getElementById("usernameerror").style.display = "none";
            document.getElementById("username").style.border = "none";
        }
    
        

    }
    else if(password == ""){
        alert("enter password");
        document.getElementById("passworderror").innerHTML = "Enter password";
        let pwd = document.getElementById("password");
        pwd.style.border ="2px solid red";
        pwd.onblur = function(){
            document.getElementById("passworderror").style.display = "none";
            document.getElementById("password").style.border = "none";
        }
    }

    else if(name == storename && password == storepwd){
        // alert("done");
      window.location.href = "./dashboard.html";
    // return false
    }

    else{
        alert("enter vailid username and password");
    }

}