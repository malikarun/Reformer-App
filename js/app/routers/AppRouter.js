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
});