document.getElementById('login').addEventListener('submit',function(e){
    e.preventDefault();
   let test = false;




    const erroruser = document.getElementById('errorueser');
    const errorpassword = document.getElementById('errorpass');
    erroruser.textContent="";
    errorpassword.textContent="";
    erroruser.style.display="non";
    errorpassword.style.display="non";


    
    const username = document.getElementById('userin').value,password = document.getElementById('passin').value;

   if(username === "mehdy"  &&  password === "2004"){
       window.location.href='Artiste.html';
       test = true;

   }else if(username !== "mehdy"  &&  password === "2004"){
        erroruser.textContent="Username is incorrect tryagain...";
        erroruser.style.display="block";
        
        test = false;
   }else{
        errorpassword.textContent="password is incorrect tryagain...";
        errorpassword.style.display="block";
        test = false;
        
   }


    

});




