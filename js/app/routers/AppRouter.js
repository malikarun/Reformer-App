app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'process',
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
    app.loggedIn = (window.localStorage.getItem("username") != null) && (window.localStorage.getItem("password") != null);

  },

  process: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.homeView.render().$el);
    }
    else {
      app.slider.slidePage(app.loginView.render().$el);
    }

  },

  login: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.loginView.render().$el);
    } else {
      app.slider.slidePage(app.HomeView.render().$el);
    }
  },

  signup: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.signupView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  home: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.homeView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  chat: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.chatView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  group: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.groupView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  setting: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.settingView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  reformer: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.reformerView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  }
});