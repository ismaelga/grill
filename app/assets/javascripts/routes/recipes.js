App.RecipesRoute = Em.Route.extend({
  model: function() {
    return App.Recipe.find();
  }
});
