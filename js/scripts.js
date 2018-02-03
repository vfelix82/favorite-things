console.log("Hi!");
$(document).ready(function(){
  $('#favoriteThings').submit(function(event){
  event.preventDefault();

  var favoriteThings1 = $('#favoriteThings1').val();
  var favoriteThings2 = $('#favoriteThings2').val();
  var favoriteThings3 = $('#favoriteThings3').val();

  var favoriteThings = [];

  favoriteThings.push(favoriteThings1,favoriteThings2, favoriteThings3);


    $('#output').text(favoriteThings.toString()).show();
  });

});
