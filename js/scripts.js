
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);}

$(document).ready(function(){
  $('#navButton').click(function(){
    if($('#navButton').children('span').hasClass('fa fa-bars')) {
      $('#navButton').children('span').removeClass('fa fa-bars');
        $('#navButton').children('span').addClass('fa fa-times');
    }
    else{
      $('#navButton').children('span').removeClass('fa fa-times');
      $('#navButton').children('span').addClass('fa fa-bars');

    }
  });
});


$('#carouselButton').click(function(){
  if($('#carouselButton').children('span').hasClass('fa-pause')) {
    $('#mycarousel').carousel('pause');
    $('#carouselButton').children('span').removeClass('fa-pause');
    $('#carouselButton').children('span').addClass('fa-play');
  }
  else {
    $('#mycarousel').carousel('cycle');
    $('#carouselButton').children('span').removeClass('fa-play');
    $('#carouselButton').children('span').addClass('fa-pause');
  }
});

$('#loginButton').click(function(){
  $('#loginModal').modal();
});
$('#reserveButton').click(function(){
  $('#reserveModal').modal();
});

$('#loginButton').click(function(){
  $('#loginModal').modal()
});
