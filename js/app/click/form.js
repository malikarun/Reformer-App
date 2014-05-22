$(document).on("ready", function () {
  $( "body" ).on( "click", '.submit-form', function( event ) {
    var form = $(this).closest('form');
    $.post(form.attr('action'), form.serialize()).done(function(data){
      window.scrollTo(0,0)
      window.location = form.attr('target');
    });
  });
});