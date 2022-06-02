// length
let valueOfI = document.querySelectorAll(".drum").length;

for (var i = 0; i < valueOfI; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", func);

    function func() {
        let btn = this.innerHTML;
        makeSound(btn);
        animateBtn(btn);
    }
};

// detects key
document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    animateBtn(e.key);
}
);


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animateBtn(press) {
    let active = document.querySelector("." + press);
    active.classList.add("pressed");

    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
}

