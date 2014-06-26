//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//


var MyCollection = Backbone.Collection.extend();


var Musicians = MyCollection.extend({
    url: URLSERVEURMusicianSuccess, //MUSICIANS
    model:Musician,
    parse: function (attrs, opt) {
        console.log("Into parse function of Musicians");
        console.log("If typeof attrs != 'undefined'");
        if (typeof attrs != "undefined") {
            
            console.log("THEN");
            console.log("attrs.data is");
            console.log(attrs.data);
            return attrs.data;
            
        }else{
            console.log("ELSE");
            console.log("attrs.data de parse de Musicians : ");
            console.log(attrs.data);
            
            return attrs.data;
        }
        
    }
    
});

//var Instruments = MyCollection.extend({
//        model: Instrument
//});






















//var MyCollection = Backbone.Collection.extend();
//var MyModel = Backbone.Model.extend();
//
//
//
//var MyModelNestedCollection = Backbone.Model.extend({
//    nested: 'collection',
//    initialize: function(attrs, options) {
//        this.get(this.nested).on('change', function() {
//            this.trigger('change', this);
//        }, this);
//    },
//    toJSON: function() {
//        var colObj = {};
//        colObj[this.nested] = this.get(this.nested).toJSON();
//        return _.extend(
//                Backbone.Model.prototype.toJSON.apply(this, arguments),
//                colObj
//                );
//
//    }
//
//});
//
//
//var eventsNested = MyModelNestedCollection.extend();
//var artists = MyModelNestedCollection.extend();
//
//
//
//
//var eventModel = MyModel.extend();
//
//
//
// var allEvents = MyCollection.extend({
//        url: URLSERVEURsuccess,
//        model: eventModel, //je fais le lien avec le model
//        events: new eventsNested(),
//        initialize: function() {
//            
//            console.log("La collection events est cr��e");
//            var that = this;//astuce car "this" se perd trop profond dans anonymous function
//            setInterval(function() {                
//                that.fetch();
//            }, 10000);
//        }
//
//    });