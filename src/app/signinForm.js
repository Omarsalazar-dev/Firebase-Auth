import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);

        // Close the login modal
        const signinModal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
        signinModal.hide();

        // reset the form
        signInForm.reset();

        // show welcome message
        showMessage("Welcome " + credentials.user.email);
    } catch (error) {
         if (error.code === "auth/wrong-password") {
            showMessage("Wrong password", "error");
        } else if (error.code === "auth/user-not-found") {
            showMessage("User not found", "error");
        } else if (error.code === "auth/user-disabled") {
            showMessage("User has been disabled", "error");
        } else {
            showMessage(error.message, "error");
        }
    }
});
