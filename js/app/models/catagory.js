app.models.Catagory = Backbone.Model.extend({
  defaults: {
    catagoriesList: [
      {id: '1', name: 'IELTS', courses: '2'},
      {id: '2', name: 'TOFEL', courses: '3'},
      {id: '3', name: 'GENERAL', courses: '4'},
      {id: '4', name: 'LIFESTYLE', courses: '5'}
    ]
  }
});
