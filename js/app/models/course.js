app.models.Course = Backbone.Model.extend({
  defaults: {
    courseList: [
      {id: '1', catagory_id: 1, name: 'first'},
      {id: '2', catagory_id: 1, name: 'second'},
      {id: '3', catagory_id: 2, name: 'third'},
      {id: '4', catagory_id: 2, name: 'four'}
    ]
  }
});
