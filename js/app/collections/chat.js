app.collections.Chat = Backbone.Collection.extend({
  model: app.models.Chat,
  url: 'http://reformer.herokuapp.com/chat'
});
