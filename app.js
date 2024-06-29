/*access signup page */

let signEmail = document.querySelector(".signEmail")
let signPass = document.querySelector(".signPass")
let signBtn = document.querySelector(".signBtn")

/*access login page */

let loginEmail = document.querySelector(".loginEmail")
let loginPass = document.querySelector(".loginPass")
let loginBtn = document.querySelector(".loginBtn")

let userName = document.querySelector(".userName")

let email = []
let password = []
let userFound = false
let signupContainer = document.querySelector(".signupContainer")
let loginContainer = document.querySelector(".loginContainer")
let welcomeContainer = document.querySelector(".welcomeContainer")

/*sign up btn fnc */

signBtn.addEventListener("click", () => {
    email.push(signEmail.value)
    password.push(signPass.value)
    
    let emailString = JSON.stringify(email)
    let passwordString = JSON.stringify(password)
    
    localStorage.setItem("Email", emailString)
    localStorage.setItem("Password", passwordString)
    
    loginContainer.classList.remove("hide")
    loginContainer.classList.add("active")
    
})

/*login btn fnc */

loginBtn.addEventListener("click", () => {
    let getEmail = localStorage.getItem("Email")
    let getPassword = localStorage.getItem("Password")

    let emailObj = JSON.parse(getEmail)
    let passwordObj = JSON.parse(getPassword)

    for(let key in emailObj) {
        if(loginEmail.value === emailObj[key]) {
            for(let key in passwordObj) {
                if(loginPass.value === passwordObj[key]) {
                    userFound = true
                    alert(`Congratulations ${loginEmail.value}! Your account is successfully created.`)
                    welcomeContainer.classList.remove("hide")
                    welcomeContainer.classList.add("active")
                    userName.innerHTML += `<h2> ${loginEmail.value} <h2>`
                    break
                }

                else{
                    userFound = false
                }
            }
        }
    }

    if(userFound === false) {
        alert("Oops! Your Email doesnot exist.")
    }
})