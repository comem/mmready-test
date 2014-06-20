/////////////////// View Template Extended////////////////////////////////////////// 

var MyView = Backbone.View.extend();

var EventListView = MyView.extend({
    template: _.template('../mmReadyHTMLCSS/index.html'),
    events: {
        "click #artist": "artist"
    },
    initialize: function() {
        this.listenTo(this.model, 'change add remove', this.render);
        this.render();
    }
//    render: function() {
//        console.log(this.model.attributes);
//        return this;
//    }
});

//
//var ArtistListView = MyView.extend({
//    template: _.template('../mmReadyHTMLCSS/artistList.html'),
//    initialize: function() {
//        this.listenTo(this.model, 'change add remove', this.render);
//        this.render();
//    }
////    render: function() {
////        console.log(this.model.attributes);
////        return this;
////    }
//});


var artist = function() {
    console.log('artist');
};