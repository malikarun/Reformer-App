app.collections.User = Backbone.Collection.extend({
  model: app.models.User,
  url: 'http://reformer.herokuapp.com/user'
});
