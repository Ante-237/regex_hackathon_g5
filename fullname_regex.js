function fullnameCheker() {
   var match = /^([a-zA-Z]+ ?[a-zA-Z.]+ [a-zA-Z])\w{1,20}$/;//Your Regex goes between the forward slashe
  
   var fullname = window.prompt("Enter Your full name: ");
  
   if (match.test(fullname)) {
       alert("Your full name"+ fullname +"looks fine");
       return true;
   }
   else {
 
       alert("Your full name is invalid");
       return false;
   }
}
