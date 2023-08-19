document.getElementById('btn-submit').addEventListener('click', function () {
    const inputMail = document.getElementById('user-email')
    const mailValue = inputMail.value
    const inputPass = document.getElementById('user-password')
    const passValue = inputPass.value

    inputMail.value = '';
    inputPass.value = '';

    mailValue === 'masrif@islami.com' && passValue === 'masrif@islam' ? window.open('http://127.0.0.1:5500/dashboard.html') : alert(`invalid user.`);

})