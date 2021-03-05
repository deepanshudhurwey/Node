console.log('This is node Shop Free Application')
const signupform = document.querySelector('form')
const loginform = document.querySelector('#login')
const inputusername = document.querySelector('#username')
const inputemail = document.querySelector('#email')
const inputpassword = document.querySelector('#password')

signupform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const username = inputusername.value
    const email = inputemail.value
    const pass = inputpassword.value
    const bodysignup = { name: username,email: email, password:pass}
    const bodylogin = { email: email, password:pass}
    console.log(bodysignup,bodylogin)
    
fetch('http://localhost:3001/users',{method :'POST',  body: JSON.stringify(bodysignup),headers: { 'Content-Type': 'application/json' }}).then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})
})

loginform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email = inputemail.value
    const pass = inputpassword.value
    const bodylogin = { email: email, password:pass}
    console.log(bodylogin)
    
fetch('http://localhost:3001/login',{method :'POST',  body: JSON.stringify(bodylogin),headers: { 'Content-Type': 'application/json' }}).then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})


})
