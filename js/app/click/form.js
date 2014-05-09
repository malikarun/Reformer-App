$(document).on("ready", function () {
  $( "body" ).on( "click", '.submit-form', function( event ) {
    var form = $(this).closest('form');
    $.post(form.attr('action'), form.serialize()).done(function(data){
      window.location = form.attr('target');
    });
  });
});