app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'process',
    "login": 'login',
    "logout": 'logout',
    'signup': 'signup',
    'ideas': 'ideas',
    'idea': 'idea',
    'chats': 'chats',
    'chat': 'chat',
    'problems': 'problems',
    'problem': 'problem',
    'reformers': 'reformers',
    'reformers/:id': 'reformer',
    'settings': 'settings',
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
    // app.ideaView = new app.views.IdeaView();
    // app.ideasView = new app.views.IdeasView();
    app.chatView = new app.views.ChatView();
    app.chatsView = new app.views.ChatsView();
    app.problemView = new app.views.ProblemView();
    app.problemsView = new app.views.ProblemsView();
    // app.reformerView = new app.views.ReformerView();
    app.settingsView = new app.views.SettingsView();
    app.loggedIn = window.sessionStorage.getItem("key") !== null;
  },

  process: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.ideaView.render().$el);
    }
    else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  login: function(){
    if(!app.loggedIn){
      app.slider.slidePage(app.loginView.render().$el);
    } else {
      app.slider.slidePage(app.ideaView.render().$el);
    };
  },

  logout: function(){
    if (confirm('Are you sure?')) {
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('password');
      window.sessionStorage.removeItem('key');
      app.loggedIn = false;
      app.router.navigate('#login', {trigger: true});
    }
    else {
      app.router.navigate('#setting', {trigger: true});
    };
  },

  signup: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.signupView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  ideas: function(){
    if(app.loggedIn){
      app.ideas = new app.collections.Idea();
      app.ideas.fetch();
      app.ideasView = new app.views.IdeasView({collection: app.ideas});
      app.slider.slidePage(app.ideasView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  idea: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.ideaView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  chats: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.chatsView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  chat: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.chatView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  problems: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.problemsView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  problem: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.problemView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  settings: function(){
    if(app.loggedIn){
      app.slider.slidePage(app.settingsView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  reformers: function(){
    if(app.loggedIn){
      app.users = new app.collections.User();
      app.users.fetch();
      app.reformerView = new app.views.ReformersView({collection: app.users});
      app.slider.slidePage(app.reformerView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },

  reformer: function(){
    if(app.loggedIn){
      app.users = new app.collections.User();
      app.users.fetch();
      app.reformerView = new app.views.ReformerView({collection: app.users});
      app.slider.slidePage(app.reformerView.render().$el);
    } else {
      app.slider.slidePage(app.loginView.render().$el);
    };
  },
});