Router.configure({
    fastRender: 'true',
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
      'nav': {to: 'nav'},
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
});

// simple route with
// name 'about' that
// matches '/about' and automatically renders
// template 'about'
Router.map( function () {

  this.route('agency', {
    path: 'agency',
    template: 'agency',
    where: 'client',
  });

  this.route('home', {
    path: '/',
    template: 'home',
    where: 'client',
  });

  this.route('train', {
    path: 'train',
    template: 'train',
    where: 'client',
  });

  this.route('team', {
    path: 'team',
    template: 'team',
    where: 'client',
  });

  this.route('contact', {
    path: 'contact',
    template: 'contact',
    where: 'client',
  });

  this.route('support', {
    path: 'support',
    template: 'support',
    where: 'client',
  });
});


// Scroll to #id on page

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, 1500);
  }
};
