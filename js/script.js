$(document).ready(function() {
    gamePlay.start();
});

// Player Moves

var playerMoves = {
    twoCards: [],
    choosenTwo: [],
    cardCounter: 0,
    cardSelect: $('.card').on('click', function(event) {
        event.preventDefault();
        playerMoves.twoCards.unshift(event.target.id);
        playerMoves.reveal(event.target);
    }),

    cardHighlight:

    //Card Highlighter
        $('.card').hover(function() {
            $(this).addClass('highlight');
    }, function() {
        $(this).removeClass('highlight');
    }),
    reveal: function(event) {

        // Reveal the reverse of the selected card
        var clickedCard = $(event).html();
        if (playerMoves.cardCounter < 2) {

            //"flips" over card
            $(event).addClass(clickedCard);
            playerMoves.choosenTwo.push(clickedCard);
            playerMoves.match(playerMoves.choosenTwo);
            playerMoves.cardCounter++;

        }

        else {
            playerMoves.cardCounter = 0;
            $("div").removeClass(playerMoves.choosenTwo[0]);
            $("div").removeClass(playerMoves.choosenTwo[1]);
            playerMoves.choosenTwo = [];
        }

    },

    match: function(twoCards) {

        // Finds a match between two cards
        if (twoCards[0] == twoCards[1]) {
            alert("You have a match!");
            for (var i = 0; i < playerMoves.twoCards.length; i++) {
                $("#" + playerMoves.twoCards[0]).addClass("flipOutY");
                $("#" + playerMoves.twoCards[1]).addClass("flipOutY");
            }
            playerMoves.cardCounter = 0;
            playerMoves.twoCards = [];
            playerMoves.choosenTwo = [];
        } else {
            var delay = setTimeout(function() {
                $("div").removeClass(playerMoves.choosenTwo[0]);
                $("div").removeClass(playerMoves.choosenTwo[1]);
                playerMoves.cardCounter = 0;
                playerMoves.choosenTwo = [];
            }, 3000);
        }
    }
};

// Store card fronts
var gamePlay = {

    // Play button triggers alert to play
    start: function() {
        gamePlay.arrangeBoard();
            // alert("Select two cards untill you've matched them all!")
    },

    // Card Deck
    cardDeck1: ["android",
        "angular",
        "js",
        "arch",
        "backbone",
        "bitcoin",
        "bower",
        "C",
        "Cplusplus",
        "chakra",
        "clementine",
        "coffee",
        "copyleft",
        "csharp",
        "css3",
        "dart",
        "debian",
        "diaspora"
    ],

    fullBoard: [],
    shuffledBoard: [],

    // Creates 2 instances of each card used
    arrangeBoard: function() {
        gamePlay.fullBoard = gamePlay.cardDeck1.concat(gamePlay.cardDeck1);
        return gamePlay.shuffle(gamePlay.fullBoard);
    },

    // Shuffles cards
    shuffle: function(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
            gamePlay.shuffledBoard = o;
        return gamePlay.addToBoard();
    },

    // Associates the cards to the DOM
    addToBoard: function() {
        $("#r1c1").append(gamePlay.shuffledBoard[0]);
        $("#r1c2").append(gamePlay.shuffledBoard[1]);
        $("#r1c3").append(gamePlay.shuffledBoard[2]);
        $("#r1c4").append(gamePlay.shuffledBoard[3]);
        $("#r1c5").append(gamePlay.shuffledBoard[4]);
        $("#r1c6").append(gamePlay.shuffledBoard[5]);
        $("#r1c7").append(gamePlay.shuffledBoard[6]);
        $("#r1c8").append(gamePlay.shuffledBoard[7]);
        $("#r1c9").append(gamePlay.shuffledBoard[8]);

        $("#r2c1").append(gamePlay.shuffledBoard[9]);
        $("#r2c2").append(gamePlay.shuffledBoard[10]);
        $("#r2c3").append(gamePlay.shuffledBoard[11]);
        $("#r2c4").append(gamePlay.shuffledBoard[12]);
        $("#r2c5").append(gamePlay.shuffledBoard[13]);
        $("#r2c6").append(gamePlay.shuffledBoard[14]);
        $("#r2c7").append(gamePlay.shuffledBoard[15]);
        $("#r2c8").append(gamePlay.shuffledBoard[16]);
        $("#r2c9").append(gamePlay.shuffledBoard[17]);

        $("#r3c1").append(gamePlay.shuffledBoard[18]);
        $("#r3c2").append(gamePlay.shuffledBoard[19]);
        $("#r3c3").append(gamePlay.shuffledBoard[20]);
        $("#r3c4").append(gamePlay.shuffledBoard[21]);
        $("#r3c5").append(gamePlay.shuffledBoard[22]);
        $("#r3c6").append(gamePlay.shuffledBoard[23]);
        $("#r3c7").append(gamePlay.shuffledBoard[24]);
        $("#r3c8").append(gamePlay.shuffledBoard[25]);
        $("#r3c9").append(gamePlay.shuffledBoard[26]);

        $("#r4c1").append(gamePlay.shuffledBoard[27]);
        $("#r4c2").append(gamePlay.shuffledBoard[28]);
        $("#r4c3").append(gamePlay.shuffledBoard[29]);
        $("#r4c4").append(gamePlay.shuffledBoard[30]);
        $("#r4c5").append(gamePlay.shuffledBoard[31]);
        $("#r4c6").append(gamePlay.shuffledBoard[32]);
        $("#r4c7").append(gamePlay.shuffledBoard[33]);
        $("#r4c8").append(gamePlay.shuffledBoard[34]);
        $("#r4c9").append(gamePlay.shuffledBoard[35]);
    }
};

// Buttons

var buttons = {

    // Reset button
    reset:

    // Reset button: complete
        $('#reset').on('click', function(event) {
            event.preventDefault();
            window.location.reload();
    })

};
