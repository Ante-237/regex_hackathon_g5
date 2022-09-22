function dateofbirthchecker(){
	var match = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;//Your Regex goes between the forward slashe

	var dob = window.prompt("Enter your date of birth: ");

	if (match.test(dob)) {
		alert("Your date of birth"+ dob +"looks fine");
		return true;
	}
	else{
		alert("Your date of birth is invalid");
		return false;
	}
}
