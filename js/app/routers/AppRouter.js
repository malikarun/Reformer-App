app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'login',
    '/signup': 'signup'
  },

  initialize: function(){
    app.slider = new PageSlider($('body'));
    app.loginView = new app.views.LoginView();
    app.signupView = new app.views.SignupView();

  },

  login: function(){
    app.slider.slidePage(app.loginView.render().$el);
  },

  signup: function(){
    app.slider.slidePage(app.signupView.render().$el);
  },
});