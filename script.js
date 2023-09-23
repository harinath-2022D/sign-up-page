const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
const charLength = chars.length;

const nam = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const signUpBtn = document.getElementById('sign-up');
const signUpError = document.getElementById('sign-up-error');
const accessToken = genRandonString(16);
const profilePageADD = 'http://127.0.0.1:3000/profilePage.html';

if (localStorage.getItem('token') != null) {
    window.location.href = profilePageADD;
}

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    //console.log(signUpBtn.innerText);
    if (nam.value == '' || email.value == '' || password.value == '' || confirmPassword.value == '') {
        signUpError.style.display = 'block';
        //console.log('inside if');
    } else {
        // console.log(nam.value.length);
        if (validatePassword()) {
            localStorage.setItem('nam', nam.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            localStorage.setItem('token', accessToken);
            window.location.href = profilePageADD;
        } else {
            signUpError.innerText = 'Error : password mismatch !';
            signUpError.style.display = 'block';
        }
    }
});


function genRandonString(length) {
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * charLength));
    }
    //console.log(token);
    return token;
}

// we can add more validations checks
// here i am checking only lengths of passwords
function validatePassword() {
    const str1 = password.value.length;
    const str2 = confirmPassword.value.length;
    if (str1 != str2) {
        // console.log('abcd');
        return false;
    } else {
        return true;
    }

}

