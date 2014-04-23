var app = {
  views: {},
  models: {},
  routers: {},
  utils: {},
  adapters: {}
};

$(document).on("ready", function () {
  app.router = new app.routers.AppRouter();
  app.utils.templates.load(['HomeView', 'CourseView'], function () {
    app.router = new app.routers.AppRouter();
    Backbone.history.start();
  });
});

$(document).on("load", function(){
  FastClick.attach(document.body);
});