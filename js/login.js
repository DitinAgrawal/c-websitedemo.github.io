let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let emailerrormsg = document.querySelector(".emailmsg");
let passerrormsg = document.querySelector(".passmsg");

const myemail = "admin@gmail.com";
const mypass = "admin@12345";

function validate(){
    if (email.value != myemail) {
        emailerrormsg.innerHTML = "Email Not Matched";
    }
    else{
        if (pass.value != mypass) {
            passerrormsg.innerHTML = "Password Not Matched";
        }
        else{
            document.querySelector("#continue").style.display = "block";
            document.querySelector("#login").style.display = "none";
        }
    }

    return false;
}