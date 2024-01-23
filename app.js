// function signUp() {
//     var sEmail = document.getElementById('sEmail').value
//     var sPass = document.getElementById('sPass').value
//     localStorage.setItem('Email', sEmail)
//     localStorage.setItem('Password', sPass)
//     location.href = './login.html'
// }

// function logIn() {
//     var lEmail = document.getElementById('lEmail').value
//     var lPass = document.getElementById('lPass').value
//     if (localStorage.getItem('Email') === lEmail) {
//         if (localStorage.getItem('Password') === lPass) {
//             alert('Hurrah! User found')
//             location.href = './welcome.html'
//         }
//     }

//     else {
//         alert('Ooops! User Not found')
//         location.href = './signup.html'
//     }

// }



// let myObj = {
//     firstEmail: 'javeria123@gmail.com',
//     firstPassword: 'jfaya',
//     secondEmail: 'javeria123@gmail.com',
//     secondPassword: 'jfaya',
//     thirdEmail: 'javeria123@gmail.com',
//     thirdPassword: 'jfaya',
    // localStorage.setItem(key, myObj[key])
// }

// ye bt yd rh k mn loop k bgher obj ko kbh bh print nh krwaskti na hi doc pe na or khin hn bs console pe krwaskti hn
// lkn console t wse bh rough work h user usko access t nh krskta. inshort mnn obj ko kbhi bh khin bh without the forIn
// loop k print nh krwaskti or isi trhn mn obj ko local ya session storage mn bh loop k bgher store nh krwaskti.

// for (var key in myObj) {
//     document.write(key, ' : ', myObj[key], '<br>', '<br>')
    //    localStorage.setItem(key, myObj[key])
// }

// localStorage.setItem(key, myObj[key])
// localStorage.setItem('name', 'javeria')




// function signup() {
//     var email = document.getElementById("sEmail").value 
//     var pass = document.getElementById("sPass").value
//     localStorage.setItem("Email", email)
//     localStorage.setItem("Password", pass)
//     location.href = "./login.html"
// }

// function login() {
//     var email = document.getElementById("lEmail").value
//     var pass = document.getElementById("lPass").value
//     if(localStorage.getItem("Email") === email) {
//         if (localStorage.getItem("Password") === pass) {
//             location.href = "./welcome.html";
//         }
//     }

//     else{
//         alert("User Not found")
//         location.href = "./signup.html"
//     }
// }

// function logout() {
//     localStorage.clear()
// }

// perfect work strt:

// let myObj = {
//     Email1: 'javeria@',
//     Email2: 'aliza@', 
//     Email3: 'yasmeen@',
//     Email4: 'afnan@',
// }

// let sto = JSON.stringify(myObj)

// console.log(sto)
// for (let key in myObj) {
//     localStorage.setItem('Email', sto)
//     localStorage.setItem('Email', sto)
    
// }

// let getting = localStorage.getItem('Email')
// document.write(getting, "<br>")
// let get2 = JSON.parse(getting)
// document.write(get2)

// perfect work end.

// localStorage.setItem('Email', myObj.Email1)



// for (let i = 0; i < 8; i = i+2) {
//     document.write(get2[i])
// }
// let getting = JSON.parse(localStorage.getItem('Email'))

// for (let abc in getting) {
//     document.write(getting)
// }

// for (let i = 0; i < getting.length; i++) {
//     document.write(getting)
// }

// let getting = localStorage.getItem('Email')
// document.write(JSON.parse(getting))

// for (var key in getting) 

// let getting = JSON.parse(localStorage.getItem('Email'))
// document.write(getting)

// document.write(JSON.parse(localStorage.getItem('Email')))

// document.write(JSON.parse(getting))

// document.write(localStorage.getItem('Email'))

// for (var key in myObj) {
//     localStorage.setItem('Email', myObj[key])
//     document.write('Email', myObj[key])
// }



// let firstName = "javeria"
// let age = 20

// let lSto = localStorage.setItem('First Name: ', firstName)
// let lSto2 = localStorage.setItem('Age', age)

// document.write(typeof lSto)
// document.write(typeof firstName)

// let lGet = localStorage.getItem('Age')
// document.write(lGet)
// document.write(typeof lGet)