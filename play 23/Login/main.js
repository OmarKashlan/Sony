document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtnSignUp = document.querySelector("#btnopen");
    const openModalBtnSignIn = document.querySelector("#btnopen1");
    const closeModalBtn = document.querySelector(".btn-close");
    

    // close modal function
    const closeModal = function () {
        modal.classList.add("hidden-modal");
        overlay.classList.add("hidden-modal");
    };

    // close the modal when the close button and overlay is clicked
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    // close modal when the Esc key is pressed
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden-modal")) {
            closeModal();
        }
    });

    // open modal function
    const openModal = function () {
        modal.classList.remove("hidden-modal");
        overlay.classList.remove("hidden-modal");
    };

    // open modal events
    openModalBtnSignUp.addEventListener("click", openModal);
    openModalBtnSignIn.addEventListener("click", openModal);
});




document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnopen").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Additional logic or actions you want to perform
        console.log("Button clicked!");
    });
});





document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnopen1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Additional logic or actions you want to perform
        console.log("Button clicked!");
    });
});



