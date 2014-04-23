app.routers.AppRouter = Backbone.Router.extend({
	routes: {
	  "": 'home',
      "catagories": 'home',
      "catagory/:id": "show"
  },

  initialize: function(){

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

  show: function(id) {
    // Since the home view never changes, we instantiate it and render it only once
    if (!app.courseView) {
        app.courseModel = new app.models.Course();
        app.courseView = new app.views.CourseView({model: app.courseModel});
        app.courseView.render();
    } else {
        console.log('reusing catagory view');
        app.courseView.delegateEvents(); // delegate events when the view is recycled
    }
    // app.slider.slidePage(app.courseView.$el);
    $('#app').html(app.courseView.$el);
  }
});