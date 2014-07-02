//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//

//!\ LES POST DELETE ET PUT n'ont pas l'attr RESPONSE
//   ainsi que fail et error
var MyCollection = Backbone.Collection.extend({
    parse: function (response) {
        // todo error et fail   
        return typeof response.data.response != "undefined" ? response.data.response : response;
    }
});

//--------------------------------------------

var Artists = MyCollection.extend({
    url: ARTISTS
});

var Event = MyModelNestedCollection.extend({
    nested: 'artists',
    defaults: function() {
        return {
            artists: new Artists()
        }
    },
    parse: function(response) {
        var data = response.data;
        var date = new Date(data.date);
        data.month = date.getMonth();
        data.hour = date.getHours();
        return data;
    }
});
var Events = MyCollection.extend({
    url: EVENTS,
    parse: function (response) {
        // todo error et fail
        console.log(response.data.response);
        return typeof response.data.response != "undefined" ? response.data.response : response;
    }
});

var EventTypes = MyCollection.extend({
    url: EVENT_TYPES
});

var Genres = MyCollection.extend({
    url:GENRES
});

var Gifts = MyCollection.extend({
    url: GIFTS
});

//!\ plusieurs requêtes -> check DOC
var Illustrations = MyCollection.extend({
    url:ILLUS
});

var Images = MyCollection.extend({
    url:IMAGES
});

var Instruments = MyCollection.extend({
    url: INSTRUS
});

var Links = MyCollection.extend({
    url: LINKS
});

var Musicians = MyCollection.extend({
    url: MUSICIANS
});

var Performers = MyCollection.extend({
    url: PERFORMERS
});

var Representers = MyCollection.extend({
    url: REPRESENTERS
});

var Tickets = MyCollection.extend({
    url: TICKETS
});
var Ticket_Cats = MyCollection.extend({
    url: TICKET_CATS
});

var Paginates = MyCollection.extend();

//--------OLD----------------------------
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






















