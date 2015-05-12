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

var gamePlay = function() {
 	    $('#card0').on("mouseenter mouseleave", function(){
	console.log('clicked');
	 //alert('#card0');

    //var clickX = (event.layerX == undefined ? event.offsetX : event.layerX) + 1;

    //var clickY = (event.layerY == undefined ? event.offsetY : event.layerY) + 1;

    //alert('Координаты клика: '+ clickX +' x '+ clickY);

  
   } );
 }



$(document).ready(function() {
	console.log(arrayFromHtml);

	 $('#NG').click(function(){

          $('#g').empty();
          $('#NewGame').css('z-index', -2);
		  startGame();
		  gamePlay();
		  
   });  
});
