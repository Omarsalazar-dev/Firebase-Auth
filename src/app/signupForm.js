import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        
        // close the signup modal
        const signupModal = document.querySelector("#SignupModal");
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        // reset the form
        signupForm.reset();

        // show welcome message
        showMessage("Welcome " + userCredentials.user.email);
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            showMessage("Email already in use.", "error");
        } else if (error.code === "auth/invalid-email") {
            showMessage("Invalid email.", "error");
        } else if (error.code === "auth/weak-password") {
            showMessage("Password is too weak.", "error");
        } else if (error.code) {
            showMessage("something went wrong", "error");
        }
    }
});
