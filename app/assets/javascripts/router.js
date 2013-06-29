App.Router.map(function() {
  this.resource('recipes');
  this.resource('recipe', { path: "/recipes/:recipe_id" });
})
