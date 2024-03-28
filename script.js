let btnDownload = document.querySelector(".element1")
let btnChangeLog = document.querySelector(".element2")
let btnFunctions = document.querySelector(".element3")

btnDownload.addEventListener("click", function() {
    animeAndRedirect(btnDownload, "https://t.me/NeverLineClient");
});
btnChangeLog.addEventListener("click", function() {
    animeAndRedirect(btnChangeLog, "pages/change-log.html");
});
btnFunctions.addEventListener("click", function() {
    animeAndRedirect(btnFunctions, "pages/functions.html");
});

function animeAndRedirect(button, redirect) {
    anime({
        targets: button,
        translateY: [
            {value: -15, duration: 200},
            {value: 0, duration: 350}
        ],
        easing: "easeInOutQuad"
    });
    setTimeout(function() {location.href = redirect;}, 550);
}



