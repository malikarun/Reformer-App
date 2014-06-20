$(document).on('page-slided', function(){
  $('time').each(function( index ) {
    time = moment($(this).text()).fromNow();
    $(this).text(time);
  });
});