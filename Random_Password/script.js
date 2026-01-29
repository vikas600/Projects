const inputSlider=document.getElementById("inputSlider");
const sliderValue=document.getElementById("slidervalue");
const passBox=document.getElementById("passBox");
const lowercaseEl=document.getElementById("lowercase");
const uppercaseEl=document.getElementById("uppercase");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const generateBtn=document.getElementById("genBtn");
const copyBtn=document.getElementById("copyIcon");
const passIndicator=document.getElementById("pass-indicator");

const lowercaseLetters= "abcdefghijklmnopqrstuvwxyz";

const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers= "0123456789";
const symbols="!@#$%^&*()_+-=[]{}\\|;':\",./<>?";
sliderValue.textContent=inputSlider.ariaValueMax;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;
    generatePassword();
})
function generatePassword(){
    const length= inputSlider.value;
    let character="";
    let password="";

    character += lowercaseEl.checked ?lowercaseLetters :"";
    character += uppercaseEl.checked ?uppercaseLetters :"";
    character += numbersEl.checked ?numbers :"";
    character += symbolsEl.checked ? symbols:"";

    for(let i=0; i<length; i++){
        password +=character.charAt(Math.floor(Math.random() * character.length));
    }

    passBox.value = password;
    updatePasswordIndicator();
}

generateBtn.addEventListener("click",()=>{
    generatePassword();
})
function updatePasswordIndicator(){
    const PasswordStrength = getPasswordStrength(passBox.value);
    passIndicator.className= "pass-indicator " + PasswordStrength;
   
}

function getPasswordStrength(password){
    if(password.length <=10){
        return "weak";

    }
    else if(password.length<=20){
        return "medium";
    }
    else{
        return "strong";
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    updatePasswordIndicator();
})

copyBtn.addEventListener("click",()=>{
    if(passBox.value !="" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText="check";

        setTimeout(()=>{
            copyBtn.innerHTML="content_copy";
        },3000);
    }
})
