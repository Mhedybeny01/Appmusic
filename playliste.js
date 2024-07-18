document.getElementById('login').onsubmit = function(e) {
    let usernameInput = document.querySelector("[name='username']");
    let passwordInput = document.querySelector("[name='password']");
    let errorueser = document.getElementById('errorueser');
    let errorpass = document.getElementById('errorpass');



    let usernameValid = usernameInput.value === "Mehdy";
    let passwordValid = passwordInput.value === "12345678";


    if (!usernameValid || !passwordValid) {
        e.preventDefault();
    }


    if(usernameInput !== usernameValid){
        errorueser.textContent = "Username is incorrect....";
        errorueser.style.display = "block";
    }else{
        errorueser.textContent = "Username is correct....";
        
    }

    if(passwordInput !== passwordValid){
        errorpass.textContent = "password is incorrect....";
        errorpass.style.display = "block";
    }else{
        errorpass.textContent = "password is correct....";
        
        
    }

    
}




