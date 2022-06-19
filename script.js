let sliderElement = document.querySelector("#slider")
let sizePass = document.querySelector("#valor")
let passField = document.querySelector("#password")
let containerPass = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!/-*"
let newPass = ""


sizePass.innerHTML = sliderElement.value
slider.oninput = function(){
    sizePass.innerHTML = this.value
}

document.querySelector(".btn-cta").addEventListener("click", function generatePassword(){
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPass.classList.remove("hide")
    passField.innerHTML = pass
    newPass = pass
})

function copyPass(){
    console.log(newPass)
    navigator.clipboard.writeText(newPass)
}

containerPass.addEventListener("click", ()=>{
    copyPass()
})

