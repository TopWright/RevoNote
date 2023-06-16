const UIController = () => {
    let DOMstrings = {
        inputName: '.name',
        inputEmail: '.email',
        inputPassword: '.password',
        inputConfirm: '.confirm-password',
        signUp: '.sign-up',
        login: '.login',
        logOut: '.log-out',
        loginPage: '.login-form',
        signUpPage: '.sign-up-form',
        auth: '.auth',
        notePad: '.main-page',
    }

    return {
        DOMstrings,
    }
}
let DOM = UIController().DOMstrings;

// Page Switching Function
const switchAuthPage = (e) => {
    e.preventDefault();
    // Display Sign-up page
    if (e.target.matches(DOM.signUp)) {
        document.querySelector(DOM.signUpPage).classList.remove('none')
        document.querySelector(DOM.loginPage).classList.add('none')
    }

    // Display Login Page
    if (e.target.matches(DOM.login)) {
        document.querySelector(DOM.signUpPage).classList.add('none')
        document.querySelector(DOM.loginPage).classList.remove('none')
    }
}
if (document.querySelector(DOM.auth)) {
    document.querySelector(DOM.auth).addEventListener('click', switchAuthPage)
}
if (document.querySelector(DOM.notePad)) {
    document.querySelector(DOM.notePad).addEventListener('click', switchAuthPage)

}















































// const AuthController = () => {

// }