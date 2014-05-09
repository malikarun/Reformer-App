app.views.SignupView = Backbone.View.extend({
  render: function () {
    this.$el.html(Handlebars.compile(this.template()));
    return this;
  }
});