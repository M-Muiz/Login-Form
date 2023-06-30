let switchContainer = ()=>{
    let  singUp = document.getElementById("singUp");
    let login = document.getElementById("login");
    singUp.classList.toggle("active");
 login.classList.toggle("active");
}

let singUpName;
let singUpEmail;
let singUpPassword;
function singUp() {
    singUpName = document.getElementById("Name").value.toLowerCase();
    singUpEmail = document.getElementById("email").value.toLowerCase();
    singUpPassword = document.getElementById("password").value.toLowerCase();

        if (singUpName == "".trim() && singUpEmail == " ".trim() && singUpPassword == " ".trim()){
         let  inputsRequired = document.querySelector(".singup");
            inputsRequired.style.border = "8px solid red";
            setTimeout(function () {
                inputsRequired.style.border = "none";
            }, 1000);
        }
         else {
            switchContainer();
            localStorage.setItem("Email", singUpEmail);
            localStorage.setItem("Password", singUpPassword);
        }
    
}

function login(){
    let loginEmail = document.getElementById("loginEmail").value.toLowerCase();
    let loginPassword = document.getElementById("loginPassword").value.toLowerCase();  
    // console.log(loginEmail)
   let emailchk = localStorage.getItem("Email", singUpEmail);  
   let passchk =  localStorage.getItem("Password", singUpPassword);

   if(loginEmail == emailchk && loginPassword == passchk){
    
    swal ( "Oops" ,  "Login Successfull!" ,  "success" )
   }
   else{
    swal ( "Oops" ,  "Invalid UserName or Password!" ,  "error" );
   }
}