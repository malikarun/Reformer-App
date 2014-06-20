app.views.ProblemView = Backbone.View.extend({
  initialize: function(){
    if(this.model != null){
      this.listenTo(this.model, 'change', this.update);
    }
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