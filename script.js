var arrColor = ['black', 'navy', 'red', 'blue', 'green', 'orange', 'yellow', 'lime', 'black', 'navy', 'red', 'blue', 'green', 'orange', 'yellow', 'lime'];
var arrIDs = [];
var pickedCards = [];

var ArrayShuffle = function (a) {
    var d, c, b = a.length;

    while (b) {
        c = Math.floor(Math.random() * b);
        d = a[--b];
        a[b] = a[c];
        a[c] = d;
    }
    return a;
};

var startGame = function () {
    var cardsTotal = 16;

    for (var i = 0; i < cardsTotal; i++) {
        arrIDs.push(i)
    }

    ArrayShuffle(arrIDs);

    for (i = 0; i < cardsTotal; i++) {
        var id = arrIDs[i]
        $('#g').append('<div data-x="' + i%4 + '" data-y="' + Math.floor(i/4) + '" class="card ' + arrColor[id] + '">' + arrayFromHtml[id] + '</div>');
    }
};

var gamePlay = function () {

    $("#submit-btn-container").on("click", function (e) {

        console.log(pickedCards)

        $.ajax({
            method: "POST",
            url: "http://example.com/service.php",
            data: {
                "card-1-x": pickedCards[0].x,
                "card-1-y": pickedCards[0].y,
                "card-2-x": pickedCards[1].x,
                "card-2-y": pickedCards[1].y
            }
        })

        .done(function (msg) {
            console.log("Done!")
        })

        .fail(function () {
            console.log("Error!");
        });

        pickedCards = [];
        $("#submit-btn-container").toggleClass("hidden", true);
        $(".card").toggleClass("selected", false);

    });

    $('.card').on("click", function (e) {
        if (pickedCards.length < 3) {
            pickedCards.push({
                x: $(this).attr("data-x"),
                y: $(this).attr("data-y")
            })

            $(this).toggleClass("selected", true);
        }

        if (pickedCards.length == 2) {
            $("#submit-btn-container").toggleClass("hidden", false);
        }
    });
};


$(document).ready(function () {
    $('#NG').click(function () {
        $('#g').empty();
        $('#NewGame').css('z-index', -2);
        startGame();
        gamePlay();
    });
});
