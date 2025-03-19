const email = document.querySelector("#email");
const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const submitButton = document.querySelector('#submit');
const error = document.querySelector("#error");

submitButton.addEventListener('click', onSubmit);

function validateEmail(emailInput){
    return emailRegExp.test(String(emailInput).toLowerCase());
}

function onSubmit(){
    event.preventDefault();
    if (validateEmail(email.value)) {
        email.classList.remove('errborder');
        email.classList.remove('errinput');
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
        email.classList.add('errborder');
        email.classList.add('errinput');
    }
}