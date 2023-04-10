const signUp = e => {
    let firstname = document.getElementById('firstname').value,
        lastname  = document.getElementById('lastname').value,
        email = document.getElementById('email').value,
        password = document.getElementById('newpassword').value;
        confrimpassword= document.getElementById('confrimpassword').value;
    let formData = JSON.parse(localStorage.getItem('formData'));
    
    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data =>
    data.firstname.toLowerCase() == firstname.toLowerCase()&&
    data.lastname.toLowerCase() == lastname.toLowerCase());

    
    if(firstname==""||lastname==""||email==""||password==""||confrimpassword==""){
        alert("fill all the fields");
    }
    else if(password!=confrimpassword){
        alert("passowrd dosen't match")
    }
    else if(!exist){
        formData.push({firstname, lastname, email, password});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('firstname').focus();
        alert("Account Created!");
        location.href="login.html";
    }
    else{    
        alert("you already have a account!");
    }
    e.preventDefault();
}
function signIn(e) {
    let email = document.getElementById('email').value,
    password= document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(!exist){
        if (email=="admin@gmail.com" && password=="123456"){
            location.href="admin.html";
       }
       else{
        alert("incorrect login credentials");}
    }
    
    else{
        location.href="bikeexisting.html";
    }
    e.preventDefault();
}