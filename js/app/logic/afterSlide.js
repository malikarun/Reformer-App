$(document).on('page-slided', function(){
  console.log($('time').length);
  $('time').each(function( index ) {
    console.log($(this).text());
    time = moment($(this).text()).fromNow();
    $(this).text(time);
  });
});