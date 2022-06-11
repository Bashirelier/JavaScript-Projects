// Tracking who's turn it is
let activePlayer = 'X';
// Storing an array moves. we use this to determine win conditions
let selectedSquares = [];

// placing x and o
function placeXOrO(squareNumber) {
    // Ensure a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        // Checks whos turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();
        // checking for chnging th changing active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //plays placement sound
        audio('./media/place.mp3');
            // condition checks to see if it is conputuers turn
        if (activePlayer === 'O') {
            // Disables clicking for computer choice
            disableClick();
            // 1 seconds wait after computer turn
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }

    // This functionresults in a ramdom square being selected
    function computersTurn() {
        //this boolean is needed for oout while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;

        while (!success) {
            //a random number evaluates returns true, the square hasnet beeen selected yet
            pickASquare = String(Math.floor(Math.random() * 9));
            //a random number evaluates returns true, the square hasnet beeen selected yet
            if (placeXOrO(pickASquare)) {
            //this line calls the function
                placeXOrO(pickASquare);
                //This changes out boolean and ends the loop
                success = true;
            };
        }
    }
}

function checkWinConditions() {
    // x 0 1 2 condition
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
    }
    // x 3 4 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
    }
    // x 6 7 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508);
    }
    // x 0 3 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
    }
    // x 1 4 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
    }
    // x 2 5 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558);
    }
    // x 6 4 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90);
    }
    // x 0 4 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
    }
    // o 0 1 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
    }
    // o 3 4 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
    }
    // o 6 7 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508);
    }
    // o 0 3 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
    }
    // o 1 4 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
    }
    // o 2 5 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
    }
    // o 6 4 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90);
    }
    // o 0 4 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
    }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () {
            resetGame();
        }, 1000);
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If passed variables are in array, true is returned and drawWinLine is executed
        if (a === true && b === true && c === true) {
            return true;
        }
    }
}

// make element temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This make body element clickable again after 1 second
    setTimeout(function () {
        body.style.pointerEvents = 'auto';
    }, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // Clears content from the last iteration
        c.clearRect(0, 0, 608, 608);

        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y < y2) {
                y += 10;
            }
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y > y2) {
                y -= 10;
            }
            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {
        clear();
        resetGame();
    }, 1000);
}

//  reset
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}