function emailChecker() {
   var match = /f[a-z]*[.][a-z]+@[a-z]+?\.email/; //Your Regex goes between the forward slashes
  
   var email = window.prompt("Enter the Email: ");
  
   if (match.test(email)) {
       alert("Email"+ email +"looks fine");
       return true;
   }
   else {
 
       alert("Email is invalid");
       return false;
   }
}
