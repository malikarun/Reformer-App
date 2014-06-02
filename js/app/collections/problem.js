app.collections.Problem = Backbone.Collection.extend({
  model: app.models.Problem,
  url: 'http://reformer.herokuapp.com/problem'
});
