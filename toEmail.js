function emailSend(){

	var userName = document.getElementById('location').value;
	// var phone = document.getElementById('phone').value;
	// var email = document.getElementById('email').value;

	var messageBody = "Name " + userName;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nima96981@gmail.com",
    Password : "DE151B64860C535A4D50A1E67E31162BD040",
    To : 'daredevil9875123@gmail.com',
    From : "nima96981@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  }
);
}