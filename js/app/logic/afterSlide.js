$(document).on('page-slided', function(){
  console.log($('time').length);
  $('time').each(function( index ) {
    alert(moment($(this).val()).fromNow());
    time = moment($(this).val()).fromNow();
    $(this).val(time);
  });
});