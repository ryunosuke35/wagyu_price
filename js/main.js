$(function(){
  $('a[href^="#top"]').click(function(){
    let speed = 600;
    let href= $(this).attr("href");
    let target = $(href == "#top" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
