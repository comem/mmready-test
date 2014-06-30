//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//


var MyCollection = Backbone.Collection.extend({
    parse: function (response) {
        // todo error et fail   
        return typeof response.data.response != "undefined" ? response.data.response : response;
    }
});


var Paginates = MyCollection.extend();
/*---------------------------------------------------------------------------
 * ------------  Artist nested
 *///------------------------------------------------------------------------



var Links = MyCollection.extend({
    
});
var Genres = MyCollection.extend();
var Images = MyCollection.extend();

var Gifts = MyCollection.extend();



var Representers = MyCollection.extend();
var Performers = MyCollection.extend();

var Instruments = MyCollection.extend();
var Musicians = MyCollection.extend();
var Artists = MyCollection.extend({
    url: ARTISTS
});
var Events = MyCollection.extend();

/*---------------------------------------------------------------------------
 * Event nested
 *///------------------------------------------------------------------------


var Tickets = MyCollection.extend();
var Ticket_Cats = MyCollection.extend();
/*---------------------------------------------------------------------------
 * ------------  Artist nested
 *///------------------------------------------------------------------------



var Link = MyCollection.extend();
var Genre = MyCollection.extend();
var Image = MyCollection.extend();

var Gift = MyCollection.extend();



var Representer = MyCollection.extend();
var Performer = MyCollection.extend();

var Instrument = MyCollection.extend();
var Musician = MyCollection.extend();
var Artist = MyCollection.extend();
var Event = MyCollection.extend();

/*---------------------------------------------------------------------------
 * Event nested
 *///------------------------------------------------------------------------


var Ticket = MyCollection.extend();
var Ticket_Cat = MyCollection.extend();




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






















