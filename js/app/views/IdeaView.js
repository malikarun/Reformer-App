app.views.IdeaView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.update);
    this.listenTo(this.model, 'add', this.update);
    this.listenTo(this.model, 'remove', this.update);
  },

  render: function () {
    this.$el.html(Handlebars.compile(this.template())(this.model.attributes));
    return this;
  },

  update: function() {
    this.render();
    $(document).trigger('page-slided');
  }
});