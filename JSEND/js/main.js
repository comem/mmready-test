$(document).ready(function($) {
console.log('jquery Ready');



var test = $.ajax( "test.json" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
 





});