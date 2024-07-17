let giraffeImg = document.querySelector(".giraffe-img")
let userInput = document.querySelector("#username")
let passInput = document.querySelector("#password")
let pawR = document.querySelector(".paw-r")
let pawL = document.querySelector(".paw-l")
let formBtn = document.querySelector(".form-btn")

$(passInput).focus(function (e) {
    // girrafeImage.src = "/image/girrafe2.png"
    pawL.style.animation = "leftHandsMove .9s ease forwards"
    pawR.style.animation = " rightHandsMove .9s ease forwards"
    giraffeImg.style.transform = " rotate(15deg)"
    $(userInput).focus(function (e) {
        // girrafeImage.src = "/image/girrafe.png"
        pawL.style.animation = "leftHandsBack .6s ease-in reverse"
        pawR.style.animation = "rightHandsBack .6s ease-in reverse"
        giraffeImg.style.transform = " rotate(0deg)"
    });
});

$(formBtn).click(function (e) {
    e.preventDefault();

});