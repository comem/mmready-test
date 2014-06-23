/////////////////// View Template Extended////////////////////////////////////////// 

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
        console.log(this.model.attributes);
        return this;
    }
});

//var eventList = new EventListView();


