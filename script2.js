const nam = localStorage.getItem('nam');
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
const token = localStorage.getItem('token');
//console.log(nam);
const HOME = 'http://127.0.0.1:3000/index.html';

function validateToken(){

    if(token == null){
        window.location.href = HOME;
        //console.log('empty token');
    }
}

validateToken();

const namInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const tokenInput = document.getElementById('token');

const logoutBtn = document.getElementById('log-out');

namInput.innerText =': '+ nam;
emailInput.innerText =': '+ email;
passwordInput.innerText =': '+ password;
tokenInput.innerText =': '+ token;

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.href = HOME;
})

