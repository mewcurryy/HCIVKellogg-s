// responsive navbar
let menu = document.getElementById('list-menu')
menu.style.maxHeight = "0rem"

function toggleMenu(){
    if(menu.style.maxHeight == "0rem"){
        menu.style.maxHeight = "50rem"
    }
    else{
        menu.style.maxHeight = "0rem"
    }
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// form untuk validasi
const form = document.getElementById("contact")
const err = document.getElementById("error")
console.log(form)
console.log(err)

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email')
    let dob = document.getElementById('dob').value
    let tel = document.getElementById('tel')

    if(firstname.length == 0){
      err.style.display = "block"
      err.innerHTML = "FIRST NAME MUST BE FILLED!!!"
      return
    }
    else if(lastname.length == 0){
      err.style.display = "block"
      err.innerHTML = "LAST NAME MUST BE FILLED!!!"
      return
    }
    else if(email.length == 0){
      err.style.display = "block"
      err.innerHTML = "EMAIL MUST BE FILLED!!!"
      return
    }
    else if(!email.value.endsWith("@kellogs.ac.id")){
      err.style.display = "block"
      err.innerHTML = "WRONG EMAIL FORMAT. Use VKellogg's user email (@kellogs.ac.id)!!!!!"
      return
    }
    else if(tel.value.length == 0){
      err.style.display = "block"
      err.innerHTML = "PHONE MUST NOT EMPTY!!!"
      return
    }
    else if(!tel.value.startsWith('08')){
      err.style.display = "block"
      err.innerHTML = "YOU MUST USE INDONESIAN NUMBER! (begin with 08)"
    }
    else if(tel.value.length != 12){
      err.style.display = "block"
      err.innerHTML = "INDONESIAN NUMBER MUST BE 12 DIGITS!!!"
    }
    else if(dob.length == 0){
      err.style.display = "block"
      err.innerHTML = "Date of Birth MUST BE FILLED!!!"
      return
    }
    else{
      console.log('submitted')
      err.style.display = "none";
      window.location.href = "home.html"
    }
})
