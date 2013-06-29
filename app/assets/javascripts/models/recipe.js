Cookingember.Recipe = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  comments: DS.hasMany("Cookingember.Comment")
  // ingredients
  // instructions
  // photos
  // video
});

Cookingember.Recipe.FIXTURES = [
  { 
    id: 1,
    title: "Fried patatoes",
    description: ".....",
    comments: [ 10 ]
  },
  {id: 2, title: "Ugali and Nyama Choma"   , description: "....."},
  {id: 3, title: "Feijoada a Transmontana" , description: "....."}
];
