// http://stackoverflow.com/questions/25884754/rails-apllication-elem-is-null-in-classie-js

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('.navbar-default').addClass('navbar-shrink');
        }
        else{
            $('.navbar-default').removeClass('navbar-shrink');
        }
    });
});
