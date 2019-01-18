

function validateSignUpForm() {
    
    var passwordInput = document.forms["signUpForm"]["password"].value;
    var passwordConfirmInput = document.forms["signUpForm"]["password-confirm"].value;
    
    var emailInput = document.forms["signUpForm"]["email"].value;
    var phoneInput = document.forms["signUpForm"]["phone"].value;
    
    var phoneRegEx = /^[0-9]+$/;
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if(passwordConfirmInput !== passwordInput) {
    	alert("Password confirmation does not match");
    	return false;
    } else if(emailRegEx.test(emailInput) === false) {
    	alert("Invalid Email");
    	return false;
    } else if(phoneRegEx.test(phoneInput) ===  false) {
    	alert("Invalid phone number");
    	return false;
    }

    
    
        
	var currentDate = new Date();

    var userInput = new Date(document.forms["signUpForm"]["birthday"].value);
    
    var timeDifference = Math.abs(userInput.getTime() - currentDate.getTime());
    
    var daysDifference = timeDifference / (1000 * 3600 * 24); 
    
    if(userInput > currentDate)
    {
      alert("Invalid Birthday.");
      return false;
    }
    else if(daysDifference<(365*16))
    {
      alert("Sorry! But you have to be +16 to be able to sign up.");
      return false;
    }
    else
    {
        alert("Thanks for signing up.");
    }
}

function validateReservationForm() {

 
	var currentDate = new Date();

    var userInput = new Date(document.forms["reservationForm"]["day"].value);
    
    var timeDifference = Math.abs(userInput.getTime() - currentDate.getTime());
    
    var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); 
    
    if(userInput < currentDate)
    {
      alert("Invalid Date!");
      return false;
    }
    else if(daysDifference>365)
    {
      alert("Too Far Date!");
      return false;
    }
    else
    {
    getExpectedDeposit();
    }
  
    
}