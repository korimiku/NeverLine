let btn = document.querySelector(".btn-exit")


btn.addEventListener("click", function() {
    anime({
        targets: btn,
        translateY: [
            {value: -15, duration: 200},
            {value: 0, duration: 350}
        ],
        easing: "easeInOutQuad"
    });
    setTimeout(function() {location.href = "../index.html";}, 550);
})