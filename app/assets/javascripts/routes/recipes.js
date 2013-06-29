Cookingember.RecipesRoute = Em.Route.extend({
  model: function() {
    return Cookingember.Recipe.find();
  }
});
