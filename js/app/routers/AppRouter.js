app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'login',
    "login": 'login',
    'signup': 'signup',
    'home': 'home',
    'chat': 'chat',
    'group': 'group',
    'reformer': 'reformer',
    'setting': 'setting',
  },

  initialize: function(){
    app.slider = new PageSlider($('body'));
    app.loginView = new app.views.LoginView();
    app.signupView = new app.views.SignupView();
    app.homeView = new app.views.HomeView();
    app.chatView = new app.views.ChatView();
    app.groupView = new app.views.GroupView();
    app.reformerView = new app.views.ReformerView();
    app.settingView = new app.views.SettingView();

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

  chat: function(){
    app.slider.slidePage(app.chatView.render().$el);
  },

  group: function(){
    app.slider.slidePage(app.groupView.render().$el);
  },

  setting: function(){
    app.slider.slidePage(app.settingView.render().$el);
  },

  reformer: function(){
    app.slider.slidePage(app.reformerView.render().$el);
  }
});