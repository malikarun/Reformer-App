app.views.LoginView = Backbone.View.extend({

  render: function () {
    this.$el.html(Handlebars.compile(this.template()));
    return this;
  }
});