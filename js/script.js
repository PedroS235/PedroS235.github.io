function validateForm() {
  var name = document.getElementById('form-name').value;
  var email = document.getElementById('form-email').value;
  var message = document.getElementById('form-message').value;
  console.log('Received form data');
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);

  console.warn('This form is not yet configured to send emails.');
}
