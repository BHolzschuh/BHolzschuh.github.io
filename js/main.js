$(document).ready(function() { 
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = (this.hash);
    var $target = $(target);
  
    $('html, body').animate({
      'scrollTop': $target.offset().top + 20
    }, 800, 'swing');
  });

var highl = null;

  $('ul.navbar-nav').on('mouseenter', function(){
    if(highl != null){
      highl.closest('li').siblings('li').find('a').css({"color":"grey"}) 
    }
    else{$('ul.navbar-nav').find('a').css({"color":"grey"})}  
  });

  $('ul.navbar-nav').on('mouseleave', function(){
    $('ul.navbar-nav').find('a').css({"color":"white"})
  });

  $('li').on('mouseenter', 'a', function(){
    $(this).css({"color":"white"});
    highl = $(this);
  });

  $('li').on('mouseleave', 'a', function(){
    $(this).css({"color":"grey"});
    highl = null;
  });

});