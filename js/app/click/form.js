$(document).on("ready", function () {
  $( "body" ).on( "click", '.submit-form', function( event ) {
    var form = $(this).closest('form'),
    username = form.find('#username').val(),
    password = form.find('#password').val();

    $.post(form.attr('action'), form.serialize()).done(function(data){
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
      window.scrollTo(0,0)
      window.location = form.attr('target');
    });
  });
});