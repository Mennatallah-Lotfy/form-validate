let myfristnamelb,mysecondnamelb,myfristnamein,mysecondnamein,myemaillb,myemailin,myphonelb,myphonein,
mypasswordlb,mypasswordin,myconfirmpasswordlb,myconfirmpasswordin, mybirth;
myfristnamelb=document.querySelector('.frNmLb');
myfristnamein=document.querySelector('.frNmIn');
mysecondnamelb=document.querySelector('.seNmLb');
mysecondnamein=document.querySelector('.seNmIn');
mypasswordlb=document.querySelector('.pssLb');
mypasswordin=document.querySelector('.pssIn');
myconfirmpasswordlb=document.querySelector('.cPssLb');
myconfirmpasswordin=document.querySelector('.cPssIn');
myphonelb=document.querySelector('.pNmbLb');
myphonein=document.querySelector('.pNmbIn');
myemaillb=document.querySelector('.emLb');
myemailin=document.querySelector('.emIn');
mybirth=document.querySelector('.mybirth');
let mybirthlb=document.querySelector('.mybirthLb');
let myReset=document.querySelector('#reset');
let myGender=document.querySelectorAll('.form-check-input');
let mygenderlb=document.querySelector('.mygender')

let myregistercancel=document.querySelector('.registercancel');
let myRgCancel=document.querySelector('#rgcancel');
myRgCancel.addEventListener('click',()=>{
window.alert('you are not registered');
myregistercancel.href="index.html";
// window.open("http://127.0.0.1:5500/index.html");
})
let myshowtitle=document.querySelectorAll(".showtitle");
let myshowtitletxt=document.querySelectorAll(".showtitletxt");
let myshowtitletxt2=document.querySelectorAll(".showtitletxt2");

// document.addEventListener('click',()=>{
//     for(let i=0;i<myshowtitle.length;i++){
//         myshowtitle[i].innerHTML="!" ;  
//     }
// })

// console.log(myshowtitle);
myshowtitle[0].addEventListener('click',()=>{
    myshowtitletxt[0].innerHTML=myfristnamein.title;
    })
myshowtitle[0].addEventListener('dblclick',()=>{
    myshowtitletxt[0].innerHTML="";
    })    
myshowtitle[1].addEventListener('click',()=>{
    myshowtitletxt2[0].innerHTML=mysecondnamein.title;
})
myshowtitle[1].addEventListener('dblclick',()=>{
    myshowtitletxt2[0].innerHTML="";
})
myshowtitle[2].addEventListener('click',()=>{
    myshowtitletxt[1].innerHTML=myemailin.title;
})
myshowtitle[2].addEventListener('dblclick',()=>{
    myshowtitletxt[1].innerHTML="";
})
myshowtitle[3].addEventListener('click',()=>{
    myshowtitletxt2[1].innerHTML=myphonein.title;
})
myshowtitle[3].addEventListener('dblclick',()=>{
    myshowtitletxt2[1].innerHTML="";
})
myshowtitle[4].addEventListener('click',()=>{
    myshowtitletxt[2].innerHTML=mypasswordin.title;
})
myshowtitle[4].addEventListener('dblclick',()=>{
    myshowtitletxt[2].innerHTML="";
})
myshowtitle[5].addEventListener('click',()=>{
    myshowtitletxt2[2].innerHTML=myconfirmpasswordin.title;
})
myshowtitle[5].addEventListener('dblclick',()=>{
    myshowtitletxt2[2].innerHTML="";
})


function resetFun(myVlue){
    myVlue.value="";
}
function isValid(label,labelTxt){
    label.innerHTML=labelTxt;
    label.style.color='black';
}
function isNotValid(label1,labelTxt1){
    label1.innerHTML=labelTxt1;
    label1.style.color='red';
}

myReset.addEventListener('click',()=>{
resetFun(myfristnamein);
resetFun(mysecondnamein);
resetFun(mypasswordin);
resetFun(myconfirmpasswordin);
resetFun(mybirth);
resetFun(myemailin);
resetFun(myphonein);
myGender.forEach((g)=>{g.checked=false;})
isValid(myfristnamelb,"First Name");
isValid(mysecondnamelb,"Second Name");
isValid(mypasswordlb,"Password");
isValid(myconfirmpasswordlb,"Confirm Password");
isValid(mybirthlb,"Birth Day");
isValid(myemaillb,"Email");
isValid(myphonelb,"Phone Number");
showp.innerHTML='<i class="fa-solid fa-eye-slash "></i>';
showc.innerHTML='<i class="fa-solid fa-eye-slash "></i>';
})

function firstvalid(){
    let valid =true;
    if(myfristnamein.value.indexOf(" ")==-1 && myfristnamein.value !==""){
        isValid(myfristnamelb,"First Name");
        valid=true;
}
    else{
        isNotValid(myfristnamelb,"*enter only first name");
        valid=false;
    }
   return valid
}
myfristnamein.addEventListener('keyup',firstvalid)

function secondvalid(){
    let valid =true;
        if(mysecondnamein.value.indexOf(" ")==-1&&mysecondnamein.value!==""){
            isValid(mysecondnamelb,"Second Name");
            valid=true;}
        else{
        isNotValid(mysecondnamelb,"*enter only second name");
        return valid=false;
    }
        return valid;
}
mysecondnamein.addEventListener('keyup',secondvalid)

function emailvalid(){  
    let valid=true;
let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
if(regex.test(myemailin.value)==true){
    isValid(myemaillb,"Email");
    return valid=true;
}else{
    isNotValid(myemaillb,"* invalid E-mail");
    valid=false;
}
return valid
}
myemailin.addEventListener('keyup',emailvalid)


function phonevalid(){
    let valid =true;
    let regex=/^\+(?:[0-9]?){6,14}[0-9]$/;
    if(regex.test(myphonein.value)==true){
        isValid(myphonelb,"Phone Number");
        valid=true;
    }else{
        isNotValid(myphonelb,"* invalid phone number");
        valid=false;
    }
        return valid
}
myphonein.addEventListener('keyup',phonevalid)

function passvalid(){
    let valid=true;
    let y=mypasswordin.value;
    let len = y.length;
if(len>=6){isValid(mypasswordlb,"Password");valid=true;}
  else{isNotValid(mypasswordlb,'* enter valid password'); valid=false;}
  return valid  
}
mypasswordin.addEventListener('keyup',passvalid)

function confirmvalid(){
    let valid=true;
if(mypasswordin.value==myconfirmpasswordin.value){isValid(myconfirmpasswordlb,"Confirm Password");valid=true;}
else{isNotValid(myconfirmpasswordlb,'* passwords do not match'); valid=false;}
return valid
}
myconfirmpasswordin.addEventListener('keyup',confirmvalid)

function birthvalid(){  
    let valid=true;
if(mybirth.value!==''){
    valid=true;
    isValid(mybirthlb,"Birth Day");
}else{
    valid=false;
    isNotValid(mybirthlb,"* Enter your Birthday");
}
return valid
}
mybirth.addEventListener('change',birthvalid)

function allValidation(){
    let valid =true;
    if(firstvalid()==false){
        isNotValid(myfristnamelb,"*enter only first name");
        valid=false;
     }else if(secondvalid()==false){
        isValid(myfristnamelb,"First Name");
        isNotValid(mysecondnamelb,"*enter only second name");
        valid=false;
    }else if(emailvalid()==false){
        isValid(mysecondnamelb,"Second Name");
        isNotValid(myemaillb,"* invalid E-mail");
         valid=false;
    }else if(phonevalid()==false){
        isValid(myemaillb,"Email");
        isNotValid(myphonelb,"* invalid phone number");
        valid=false;
    }else if(passvalid()==false){
        isValid(myphonelb,"Phone Number");
        isNotValid(mypasswordlb,'* enter valid password'); 
        valid=false;
    }else if(confirmvalid()==false){
        isValid(mypasswordlb,"Password");
        isNotValid(myconfirmpasswordlb,'* passwords do not match'); 
        valid=false;
    }else if(birthvalid()==false){
        isValid(myconfirmpasswordlb,"Confirm Password");
        isNotValid(mybirthlb,"* Enter your Birthday");
        valid=false;
    }else if(myGender[0].checked==false&&myGender[1].checked==false){
        isValid(mybirthlb,"Birth Day");
        isNotValid(mygenderlb,"*enter your gendr"); 
        valid=false;      
    }else{
        isValid(mygenderlb,"Gender")
        valid=true;
    }
    return valid;
    }

    myGender.forEach((x)=>{
        x.addEventListener('change',()=>{
        if(myGender[0].checked==false&&myGender[1].checked==false){
        isNotValid(mygenderlb,"*enter your gendr");        
    }else{
        isValid(mygenderlb,"Gender")} 
        })
    
    })
        

// allValidation();

//console.log(myfristnamelb,mysecondnamelb,myfristnamein,mysecondnamein,myemaillb,myemailin,myphonelb,myphonein,
   // mypasswordlb,mypasswordin,myconfirmpasswordlb,myconfirmpasswordin);

//    function emailValidation(){
//     let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
//     if(regex.test(myemailin.value)){
//         return true;
//     }else{
//         myemaillb.innerHTML="** invalid E-mail";
//         myemaillb.style.color="red";
//         return false;
//     }
// }

//**************************************************************************** */
// function birthvalid(){  
//     let valid="true";
// if(mybirth.value!==''){
//     valid='true';
//     mybirthlb.innerHTML="Birthday";
//     mybirthlb.style.color="black";
// }else{
//     valid='false';
//     mybirthlb.innerHTML="** Enter your Birthday";
//     mybirthlb.style.color="red";
// }
// return valid
// }
// mybirth.addEventListener('change',birthvalid)









//****************************************************************************************** */

 //let mye=emailvalid();
// let myp=passvalid();
// let myc=confirmvalid();
// let myph=phonevalid();
// let myf=firstvalid();
// let mys=secondvalid();







/////////////////////////////////////////////////////////////////////////////////////////////////////////
    let showc,showp;
    showc=document.querySelector('.showc');
    showp=document.querySelector('.showp');
    // console.log(showc,showp);
    showp.innerHTML="<i class='fa-solid fa-eye-slash'></i>";
    showc.innerHTML='<i class="fa-solid fa-eye-slash "></i>';
   
    showp.addEventListener('click',()=>{
    if(mypasswordin.type==="password"){
        mypasswordin.type="text";
        showp.innerHTML='<i class="fa-solid fa-eye ms-5"></i>';
    }
    else{
        mypasswordin.type="password";
        showp.innerHTML='<i class="fa-solid fa-eye-slash ms-5"></i>';
    }    
})

showc.addEventListener('click',()=>{
if(myconfirmpasswordin.type==="password"){
    myconfirmpasswordin.type="text";
    showc.innerHTML='<i class="fa-solid fa-eye"></i>';
}
else{
    myconfirmpasswordin.type="password";
    showc.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
}
})
    //  console.log()