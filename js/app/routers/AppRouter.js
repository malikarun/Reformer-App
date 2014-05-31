app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'process',
    "login": 'login',
    'signup': 'signup',
    'idea': 'idea',
    'chat': 'chat',
    'problem': 'problem',
    'reformer': 'reformer',
    'setting': 'setting',
  },

  initialize: function(){
    // initialize slider container
    app.slider = new PageSlider($('body'));

    // initialize collections
    // app.users = new app.collections.User();
    // app.users.fetch();

    // initialize models
    // app.user = new app.models.User();

    // initialize views
    app.loginView = new app.views.LoginView();
    app.signupView = new app.views.SignupView();
    app.ideaView = new app.views.IdeaView();
    app.chatView = new app.views.ChatView();
    app.problemView = new app.views.ProblemView();
    // app.reformerView = new app.views.ReformerView({collection: app.users});
    app.settingView = new app.views.SettingView();
    app.loggedIn = window.sessionStorage.getItem("key") !== null;

  },

  process: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.ideaView.render().$el);
    }
    else {
      app.slider.slidePage(app.loginView.render().$el);
    }

  },

  login: function(){
    if(!app.loggedIn){
      app.slider.slidePage(app.loginView.render().$el);
    } else {
      app.slider.slidePage(app.ideaView.render().$el);
    }
  },

  signup: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.signupView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  },

  idea: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.ideaView.render().$el);
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

  problem: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.problemView.render().$el);
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
      app.users = new app.collections.User();
      app.users.fetch();
      app.reformerView = new app.views.ReformerView({collection: app.users});
      app.slider.slidePage(app.reformerView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    }
  }
});