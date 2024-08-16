// *************************Extract Values*********************
let randomGuss = parseInt(Math.random() * 90 + 1);
let userGuss = document.querySelector('#userGuess')
let submit = document.querySelector('#submitGuess')
let prevGuessSlot = document.querySelector('#previousGuess')
let reamingGuss = document.querySelector('#remaingGuss')
let gussinfo = document.querySelector('#gussinfo')
let gussResult = document.querySelector('.gussResult')
const p = document.createElement('p');


let play = true;
let previousGuss = [];
let gussess = 1;
if (play) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();

        const guss = parseInt(userGuss.value);
        validteGuss(guss)
    });

}

function validteGuss(guss) {
    if (isNaN(guss)) {
        displayMessage(`Please enter a valid Number `)
    }

    else if (guss > 90) {
        displayMessage(`Number out of range `)
    }

    else if (guss < 1) {
        displayMessage(`Number below  in range `)
    }

    else {
        previousGuss.push(guss)

        if (gussess > 10) {
            // displayGuss(guss);
            endGame();
        }
        else {
            displayGuss(guss);
            checkGuss(guss)
        }
    }
}

function checkGuss(guss) {

    if (guss === randomGuss) {
        displayMessage("wow! You are Rock ")
        endGame();
    }

    else if (guss > randomGuss) {
        displayMessage("owh! You geuss too high Number ")

    }

    else if (guss < randomGuss) {
        displayMessage("owh! You geuss too low Number ")

    }
}


function displayGuss(guss) {
    userGuss.value = ''
    prevGuessSlot.innerHTML += `${guss} | `
    gussess++
    reamingGuss.innerHTML = `${6 - gussess}`
}

function displayMessage(message) {
    gussinfo.innerHTML = `<h3> ${message} </h3>`
}

function endGame() {
    userGuss.value = ''
    userGuss.setAttribute('disabled', '')
    p.classList.add('startAgain')
    p.innerHTML = `<p id="new_game"> Start new Game </p>`
    gussResult.appendChild(p);
    play = false;
    playAgain();

}

function playAgain() {
    const game = document.querySelector('#new_game')
    game.addEventListener('click', (e) => {
        previousGuss = []
        prevGuessSlot.innerHTML = 'Previous Guess:'
        gussess = 1;
        reamingGuss.innerHTML = `${11 - gussess}`
        userGuss.removeAttribute('disabled')
        gussResult.removeChild(p)
        displayMessage('')
        play = true

    })
}
