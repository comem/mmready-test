/////////////////// View Template Extended////////////////////////////////////////// 
var MyModel = Backbone.Model.extend();

var MyCollection = Backbone.Collection.extend();
var MyView = Backbone.View.extend();


var EventListView = MyView.extend({
    events: {
        "click #artist": "artist"
    },
    template: _.template(templates.eventList),
    initialize: function() {
        this.listenTo(this.model, 'change add remove', this.render);
        this.render();
    },
    artist: function(event) {
        console.log('artist');
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});



