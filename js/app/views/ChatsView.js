app.views.ChatsView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'change', this.update);
    this.listenTo(this.collection, 'add', this.update);
    this.listenTo(this.collection, 'remove', this.update);
  },

  render: function () {
    this.$el.html(Handlebars.compile(this.template())(this.collection));
    return this;
  },

  update: function() {
    this.render();
    $(document).trigger('page-slided');
  }
});