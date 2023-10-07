import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

const signupForm = document.querySelector("#signup-form")


signupForm.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const email = signupForm['form-email'].value
    const password = signupForm['form-password'].value
    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);


    } 
    
    catch (error) {
        console.log(error.message)
        console.log(error.code)
        if (error.code === 'auth/email-already-in-use'){
            alert ('email ya registradp')
        }
        else if (error.code === 'auth/invalid-email'){
            alert ('email imvalido')
    }
    else if (error.code === 'auth/weak-password'){
        alert ('minimo de 6 caracteres')
}}})
