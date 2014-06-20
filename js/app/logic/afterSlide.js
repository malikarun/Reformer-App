$(document).on('page-slided', function(){
  alert(moment([2007, 0, 29]).fromNow());
  console.log($('time').length);
  $('time').each(function( index ) {
    time = moment($(this).val()).fromNow();
    $(this).val(time);
  });
});