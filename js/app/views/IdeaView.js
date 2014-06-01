app.views.IdeaView = Backbone.View.extend({

  render: function () {
    this.$el.html(Handlebars.compile(this.template()));
    // this.footerView = new app.views.FooterView();
    // this.$el.append(this.footerView.render().el);
    return this;
  }
});