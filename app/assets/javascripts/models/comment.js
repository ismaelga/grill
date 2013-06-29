App.Comment = DS.Model.extend({
  body: DS.attr('string')
  // user
});

App.Comment.FIXTURES = [
  { id: 10, body: "So cool!" }
];
