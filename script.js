const email = document.querySelector("#email");
const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const submitButton = document.querySelector('#submit');
const errorMessage = document.querySelector("#error");

submitButton.addEventListener('click', onSubmit);

function validateEmail(emailInput){
    return emailRegExp.test(String(emailInput).toLowerCase());
  }

function onSubmit(){
    if (validateEmail(email.value)) {
        email.classList.remove('errinput');
        email.classList.remove('errinput');
        email.style.border = '1px solid var(--grayishBlue)';
        email.classList.add('.errinput');
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
        email.style.border = '2px solid var(--red)';
        email.classList.add('.errinput');
    }
}