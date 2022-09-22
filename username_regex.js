function usernameChecker() {
   var match = /^([A-Z]\d*[a-z]*[A-Z]?)([a-z\d])*[^A-Z]$/;//Your Regex goes between the forward slashe
  
   var username = window.prompt("Enter the username: ");
  
   if (match.test(username)) {
       alert("Your username"+ username +"looks fine");
       return true;
   }
   else {
 
       alert("Your username is invalid");
       return false;
   }
}
