/////////////////// View Template Extended////////////////////////////////////////// 

var MyView = Backbone.View.extend();

var musicianView = Backbone.MyView.extend({
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },
        render: function() {
            console.log(this.model.attributes);
            return this;
        }
    });
    var musicien1 = new musicianModel();
    var v1 = new musicianView({model: musicien1});