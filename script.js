var arrayFromHtml = [];
var arrColor = ['black', 'navy','red', 'blue', 'green', 'orange', 'yellow', 'lime',  'black', 'navy', 'red', 'blue', 'green', 'orange', 'yellow', 'lime'];

var timeOpen = 700;
var Timeout = 2000;

var mousemove = 0;

var ArrayShuffle = function(a) {
  var d, c, b = a.length;

   while (b) {
    c = Math.floor(Math.random() * b);
    d = a[--b];
    a[b] = a[c];
    a[c] = d;
   }
   return a;
}

var startGame = function() {
    
    ArrayShuffle(arrColor);
     
 for(i=0; i<16; i++) {
         $('#g').append('<div id="card'+i+'" class="card ' + arrColor[i] + '">' + arrayFromHtml[i] + '</div>');
     }
       //$('.card').addClass('cardOut');
       //$('.layer').css('z-index', -1);
     }

var gamePlay = function () {
  $('.card').on("click", function (e) {
    var posX = $(this).offset().left,
        posY = $(this).offset().top;

    console.log(posX, posY);

    $.ajax({
      method: "POST",
      url: "service.php",
      data: {x: posX, y: posY}
    })
      .done(function (msg) {
        console.log("Done!")
      })
      .fail(function() {
        console.log("error");
      })
  });
};



$(document).ready(function() {
  console.log(arrayFromHtml);

   $('#NG').click(function(){

          $('#g').empty();
          $('#NewGame').css('z-index', -2);
      startGame();
      gamePlay();
      
   });  
});
