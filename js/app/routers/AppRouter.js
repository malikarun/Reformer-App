app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'login',
    'signup': 'signup',
    'home': 'home'
  },

  initialize: function(){
    app.slider = new PageSlider($('body'));
    app.loginView = new app.views.LoginView();
    app.signupView = new app.views.SignupView();
    app.homeView = new app.views.HomeView();

  },

  login: function(){
    app.slider.slidePage(app.loginView.render().$el);
  },

  signup: function(){
    app.slider.slidePage(app.signupView.render().$el);
  },

  home: function(){
    app.slider.slidePage(app.homeView.render().$el);
  },
});