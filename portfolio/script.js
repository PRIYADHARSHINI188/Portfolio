document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // Here you could add code to send the data to a server or an API.
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
