console.log("login.js: Entry Point");

//This script handels the login logic an regex
window.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.querySelector("#login");
    
    const createAccountForm = document.querySelector("#createAccount");

    formSudoValidation();
   
    submitForm(loginForm);

});




function showRegisterForm(login_form, createAccountForm){

    document.querySelector("#linkCreateAccount").addEventListener('click', e => {

        e.preventDefault();
        //hide
        login_form.classList.add("lo--hidden")
        //show
        createAccountForm.classList.remove("createAccount--hidden");

        
    })
}
function showLoginForm(login_form, createAccountForm){

    document.querySelector("#linkCreateAccount").addEventListener('click', e => {

        e.preventDefault();
        //show
        login_form.classList.remove("form--hidden")
        //hide
        createAccountForm.classList.add("createAccount--hidden");

        
    })

}
function hideLoginForm(form){
            let main_menu = document.querySelector("#main-menu");
            main_menu.classList.remove("-hidden");

            let form = document.querySelector("#login-box");
            form.classList.add("-hidden");
            console.log(form);
            

}



function setFormMessage(formElement, type, message){
    // get the error message from our form
    const messageElement = formElement.querySelector('.form__message');
    console.log("setForm message"+messageElement);
    messageElement.textContent = message;
    messageElement.classList.remove('form__message--success', 'form__message--error');
    messageElement.classList.add(`form__message--${type}`);

}

function setInputError(inputElement, message){
    //Given input field box
    //add the custom error class to element
    inputElement.classList.add('form__input--error');
    //get the parent, and select the error div
    //So we can display the message inside it
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//remove the element error message
function clearInputError(inputElement){
    inputElement.classList.remove('form__input--error');
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}
function formSudoValidation(){
    document.querySelectorAll(".form__input").forEach(inputElement => {
        //blur() removes focus from given element
        inputElement.addEventListener("blur", e =>{
            if(e.target.id === "loginPassword" && e.target.value.length > 0 && e.target.value.length < 5){
                setInputError(inputElement, "Password must be at least 10 characters in length and no more than 15");
            }

        });
        //When input element gets input from user
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })

    });

}

function validatePassword(Password){

    //At least 8 characters long
    //Contain at least one lowercase 
    //Contain least one uppercase
    //contains least one digit
    //contins at least one spaicl charcter ("!, @, #, $, %,")

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]{8,}$/;
    return regex.test(Password);
}

function submitForm(login_form){
    login_form.addEventListener("submit", e => {
        // stops the form being submitted through ajax or on refresh
        
        e.preventDefault();
        //Perform Ajax/fecth login 
        // TODO: 1: success 
        let passwordInput = login_form.querySelector("#loginPassword");
        console.log("Debug" + passwordInput.value);

        if(!validatePassword(password)){

            setFormMessage(login_form, 'success', "you're logged in!");
            hideLoginForm(login_form);
            console.log("Login: success");

        }else{
            
            setFormMessage(login_form, 'error', 'Invalid Password');
            console.log("Login: Failed");

        }

        
    
    })
}

