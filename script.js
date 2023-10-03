function checkPassword() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  // Fetch the JSON file containing usernames and passwords
  fetch('passwords.json')
    .then(response => response.json())
    .then(data => {
      const storedPassword = data[usernameInput];

      if (storedPassword && passwordInput === storedPassword) {
        // Show the hidden content
        document.getElementById('content').style.display = 'block';
      } else {
        alert('Incorrect username or password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
      alert('An error occurred while checking the password. Please try again later.');
    });
}
