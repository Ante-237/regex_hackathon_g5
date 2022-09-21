function ID_Checker() {
   var match = /^[0-9][^A-Z]*[a-z]/;//Your Regex goes between the forward slashe
  
   var identity = window.prompt("Enter Your ID: ");
  
   if (match.test(identity)) {
       alert("Your ID"+ identity +"looks fine");
       return true;
   }
   else {
 
       alert("Your ID is invalid");
       return false;
   }
}
