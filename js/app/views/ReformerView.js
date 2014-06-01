app.views.ReformerView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(Handlebars.compile(this.template())(this.model.attributes));
    this.footerView = new app.views.FooterView();
    this.$el.append(this.footerView.render().el);
    return this;
  }
});