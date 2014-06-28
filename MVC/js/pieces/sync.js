Backbone.sync = function(method, model) {
  alert(method + ": " + JSON.stringify(model));
  model.set('cid', 1);
};