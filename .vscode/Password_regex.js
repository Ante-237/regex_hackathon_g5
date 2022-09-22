function Password_Checker() {
   var match = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;//Your Regex goes between the forward slashe

   var identity = window.prompt("Enter Your Password: ");

   if (match.test(password)) {
       alert("Your password"+ password +"looks fine");
       return true;
   }
   else {

       alert("Your password is invalid");
       return false;
   }
}