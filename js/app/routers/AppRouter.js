app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'login'
  },

  initialize: function(){
    app.slider = new PageSlider($('body'));
    app.loginView = new app.views.LoginView()

  },

  login: function(){
    app.slider.slidePage(app.loginView.render().$el);
  },

  home: function () {
    // Since the home view never changes, we instantiate it and render it only once
    if (!app.homeView) {
        app.catagoryModel = new app.models.Catagory();
        app.homeView = new app.views.HomeView({model: app.catagoryModel});
        app.homeView.render();
    } else {
        console.log('reusing home view');
        app.homeView.delegateEvents(); // delegate events when the view is recycled
    }
    // app.slider.slidePage(app.homeView.$el);
    $('#app').html(app.homeView.$el);
  },
});