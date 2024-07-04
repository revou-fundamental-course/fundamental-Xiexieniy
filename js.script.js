// JavaScript untuk keseluruhan proyek
document.addEventListener('DOMContentLoaded', function() {
    var name = prompt("Please enter your name:");
    document.getElementById('welcomeMessage').textContent = 'Hi ' + name + ', Welcome To Website';
});

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}

function showProfile() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

function validateForm(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById('message').value;

    var formResult = document.getElementById('formResult');
    formResult.innerHTML = `
        <h3>Form Data</h3>
        <p>Nama: ${name}</p>
        <p>Tanggal Lahir: ${dob}</p>
        <p>Jenis Kelamin: ${gender}</p>
        <p>Pesan: ${message}</p>
    `;
}
