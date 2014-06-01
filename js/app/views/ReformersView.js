app.views.ReformersView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function () {
    this.$el.html(Handlebars.compile(this.template())(this.collection));
    // this.footerView = new app.views.FooterView();
    // this.$el.append(this.footerView.render().el);
    return this;
  },
});