/* =========================================
   LOGIN
========================================= */

function checkPassword() {

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("error");

    if (!input) return;


    const entered =
        input.value.trim();


    if (entered === "0218") {

        sessionStorage.setItem(
            "loveWebsiteAccess",
            "true"
        );

        window.location.href =
            "home.html";

    } else {

        error.innerText =
            "Hmm... that's not it, idiot. 😭";

        input.value = "";

        input.style.animation =
            "shake .3s";

        setTimeout(() => {

            input.style.animation = "";

        }, 300);

    }

}


/* Allow Enter key */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById("password");

        if (input) {

            input.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {

                        checkPassword();

                    }

                }
            );

        }

    }
);


/* =========================================
   NAVIGATION
========================================= */

function goTo(page) {

    window.location.href = page;

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const items = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🐷"
    ];

    heart.innerText =
        items[
            Math.floor(
                Math.random() * items.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(
        () => heart.remove(),
        10000
    );

}


setInterval(
    createFloatingHeart,
    700
);


/* =========================================
   GAME
========================================= */

let score = 0;

let gameRunning = false;

let gameTimeout;


function startGame() {

    const area =
        document.getElementById("gameArea");

    const heart =
        document.getElementById("heart");

    const scoreElement =
        document.getElementById("score");

    const message =
        document.getElementById("gameMessage");


    if (!area || !heart) return;


    score = 0;

    gameRunning = true;

    scoreElement.innerText =
        score;

    message.innerText =
        "Catch them, idiot! ❤️";


    heart.style.display =
        "block";


    moveGameHeart();


    clearTimeout(gameTimeout);


    gameTimeout =
        setTimeout(
            endGame,
            30000
        );

}


function moveGameHeart() {

    if (!gameRunning) return;


    const area =
        document.getElementById("gameArea");

    const heart =
        document.getElementById("heart");


    const maxX =
        area.clientWidth - 60;

    const maxY =
        area.clientHeight - 60;


    heart.style.left =
        Math.random() * maxX + "px";

    heart.style.top =
        Math.random() * maxY + "px";

}


function catchHeart() {

    if (!gameRunning) return;


    score++;


    document.getElementById(
        "score"
    ).innerText = score;


    const messages = [

        "Nice one ❤️",

        "Look at you catching feelings 😂",

        "Your Baby Pig approves 🐷",

        "Another heart for my idiot ❤️",

        "Okayyyy, show off 😭",

        "Fine. You earned that one 💕",

        "Stop being good at this 😂"

    ];


    document.getElementById(
        "gameMessage"
    ).innerText =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];


    moveGameHeart();

}


function endGame() {

    gameRunning = false;


    const heart =
        document.getElementById("heart");

    if (heart) {

        heart.style.display =
            "none";

    }


    const message =
        document.getElementById(
            "gameMessage"
        );


    if (message) {

        message.innerText =
            "Game over! ❤️ Score: " +
            score +
            ". Your Baby Pig still loves you. 🐷";

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

function showFinalMessage() {

    const message =
        document.getElementById(
            "finalMessage"
        );

    const button =
        document.getElementById(
            "finalButton"
        );


    if (!message) return;


    message.style.display =
        "block";


    if (button) {

        button.style.display =
            "none";

    }


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 80
        );

    }

}


/* =========================================
   TYPEWRITER EFFECT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const textElement =
            document.getElementById(
                "typingText"
            );


        if (!textElement) return;


        const text =
            "Before you leave... I just want you to remember that yesterday was a moment. It doesn't define everything between us. ❤️";


        let index = 0;


        function type() {

            if (
                index <
                text.length
            ) {

                textElement.innerHTML +=
                    text.charAt(index);

                index++;

                setTimeout(
                    type,
                    35
                );

            }

        }


        type();

    }
);


/* =========================================
   SHAKE ANIMATION
========================================= */

const style =
    document.createElement("style");


style.innerHTML = `

@keyframes shake {

    0%,100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-8px);
    }

    75% {
        transform: translateX(8px);
    }

}

`;


document.head.appendChild(style);
