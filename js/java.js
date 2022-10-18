let myMailCheck=document.querySelector(".valid-mail");
let myMail=document.querySelector(".E-mail");
let myPassword=document.querySelector("#password");
let myShowPass=document.querySelector(".show-pass");
let myPassValid=document.querySelector(".pass-check");
// let myPassSign=document.querySelector(".pass-sign");

let mysignupanchor=document.querySelector(".signup-anchor");
let mySignUp=document.querySelector(".sign-up");
mySignUp.addEventListener('click',()=>{
    mysignupanchor.href="sign-up.html";
    // window.open("http://127.0.0.1:5500/sign-up.html");
    // window.close("http://127.0.0.1:5500/index.html");
    })
//console.log(myMailCheck,myMail,myPassword,myShowPass,myPassValid);
function emailValidation(){
    let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let pregex=/^[0-9]{11,}$/;
    if(regex.test(myMail.value)||pregex.test(myMail.value)){
        myMailCheck.style.opacity=0;
        return true;
    }else{
        myMailCheck.style.opacity=1;
        return false;
    }
    }
myMail.addEventListener('keyup',emailValidation);

myShowPass.addEventListener('click',()=>{
    if(myPassword.type==="password"){
        myPassword.type="text";
        myPassValid.style.display='none';
    }
    else{
        myPassword.type="password";
        myPassValid.style.display="block";
    }
}) 
myPassword.addEventListener('input',()=>{
    let y=myPassword.value;
    let len = y.length;
    myPassValid.style.display="block";
  if(len>=6){myPassValid.style.color="green";myPassValid.innerHTML='<i class="fa-regular fa-face-smile-beam align-middle"></i>'+' More than 6 characters.';}
  else{myPassValid.style.color="red";myPassValid.innerHTML='<i class="fa-regular fa-face-frown-open align-middle"></i>'+' Enter more than 6 characters.';}  
})

function logIn(){
   let mail= emailValidation();
   let y=myPassword.value;
   let len = y.length;
 if(len>=6&&mail==true){myPassValid.style.color="green";myPassValid.innerHTML='<i class="fa-regular fa-face-smile-beam align-middle"></i>'+' More than 6 characters.';return true;}
 else{myPassValid.style.color="red";myPassValid.innerHTML='<i class="fa-regular fa-face-frown-open align-middle"></i>'+' Enter more than 6 characters.';myPassValid.style.display="block";return false;}   
}


//console.log(y.length);

