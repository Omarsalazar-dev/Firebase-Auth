const loggetOutLinks = document.querySelectorAll(".logget-out");
const loggetInLinks = document.querySelectorAll(".logget-in");

export const loginCheck = (user) => {
    if (user) {
        loggetOutLinks.forEach((link) => {
            link.style.display = "none";
        });
        loggetInLinks.forEach((link) => {
            link.style.display = "block";
        });
    } else {
        loggetOutLinks.forEach((link) => {
            link.style.display = "block";
        });
        loggetInLinks.forEach((link) => {
            link.style.display = "none";
        });
    }
};
