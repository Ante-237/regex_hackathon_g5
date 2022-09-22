function phonenumberChecker() {
var match = /^\+?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{3})[- ]?([0-9]{2})$/; //Your Regex goes between the forward slashes
	
    var phonenumber = window.prompt("Enter Phone Number: ");


    if (match.test(phonenumber)) {
	alert("Your phone number"+ phonenumber +"looks fine");
	return true;

    }
    else {
 
       alert("Your phone number is invalid");
       return false;
   }
}
