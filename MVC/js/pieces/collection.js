//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//


var MyCollection = Backbone.Collection.extend({
    parse: function (response) {
        // todo error et fail   
        return typeof response.data.artists != "undefined" ? response.data.artists : response;
    }
});


var Paginates = MyModel.extend();
/*---------------------------------------------------------------------------
 * ------------  Artist nested
 *///------------------------------------------------------------------------



var Links = MyModel.extend({
    
});
var Genres = MyModel.extend();
var Images = MyModel.extend();

var Gifts = MyModel.extend();



var Representers = MyModel.extend();
var Performers = MyModel.extend();

var Instruments = MyModel.extend();
var Musicians = MyModel.extend();
var Artists = MyModel.extend({
    url: ARTISTS
});
var Events = MyModel.extend();

/*---------------------------------------------------------------------------
 * Event nested
 *///------------------------------------------------------------------------


var Tickets = MyModel.extend();
var Ticket_Cats = MyModel.extend();
/*---------------------------------------------------------------------------
 * ------------  Artist nested
 *///------------------------------------------------------------------------



var Link = MyModel.extend();
var Genre = MyModel.extend();
var Image = MyModel.extend();

var Gift = MyModel.extend();



var Representer = MyModel.extend();
var Performer = MyModel.extend();

var Instrument = MyModel.extend();
var Musician = MyModel.extend();
var Artist = MyModel.extend();
var Event = MyModel.extend();

/*---------------------------------------------------------------------------
 * Event nested
 *///------------------------------------------------------------------------


var Ticket = MyModel.extend();
var Ticket_Cat = MyModel.extend();




//var Events = MyCollection.extend({
//    url: "../php/services/EventCollectionSUCCESS.php", //EVENTS
//    model:Event
//        //model: Instrument//diff de Chabloz lui il n'a rien
//});
//var GenresListColl = MyCollection.extend({
//    url: GENRESLOCAL, 
//    model:Genre,
//        //model: Instrument//diff de Chabloz lui il n'a rien
//        parse: function (response) {        
//        return typeof response.data.response != "undefined" ? response.data.response : response;
//    }
//});
//
//var Artists = MyCollection.extend({
//    url: ARTISTS+"-new", 
//    model:Artist
//        //model: Instrument//diff de Chabloz lui il n'a rien
//});
//
//
//var Musicians = MyCollection.extend({
//    url: MUSICIANS, 
//    model:Musician
////    parse: function (attrs, opt) { chabloz parse dans l'extension de backbone
////        console.log("Into parse function of Musicians");
////        console.log("If typeof attrs != 'undefined'");
////        if (typeof attrs != "undefined") {
////            
////            console.log("THEN");
////            console.log("attrs.data is");
////            console.log(attrs.data);
////            return attrs.data;
////            
////        }else{
////            console.log("ELSE");
////            console.log("attrs.data de parse de Musicians : ");
////            console.log(attrs.data);
////            
////            return attrs.data;
////        }
////        
////    }
//    
//});
//
//var Instruments = MyCollection.extend({
//    url: INSTRUS, 
//    model:Instrument
//        //model: Instrument//diff de Chabloz lui il n'a rien
//});
//
//var Representers = MyCollection.extend({
//    url: REPRESENTERS, 
//    model:Representer
//        //model: Instrument//diff de Chabloz lui il n'a rien
//});






















