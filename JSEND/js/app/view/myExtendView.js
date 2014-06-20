/////////////////// View Template Extended////////////////////////////////////////// 

var MyView = Backbone.View.extend();

var EventListView = MyView.extend({
    template: _.template(templates.index),
    initialize: function() {
        this.listenTo(this.model, 'change add remove', this.render);
        this.render();
    }
//    render: function() {
//        console.log(this.model.attributes);
//        return this;
//    }
});


var ArtisteListView = MyView.extend({
    template: _.template(templates.artistList),
    initialize: function() {
        this.listenTo(this.model, 'change add remove', this.render);
        this.render();
    }
//    render: function() {
//        console.log(this.model.attributes);
//        return this;
//    }
});
