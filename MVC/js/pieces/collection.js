//***************************************************************************//
//*******************           Collection            ***********************//
//***************************************************************************//


var MyCollection = Backbone.Collection.extend({
    parse: function (response) {
        // Gestion conditionnelle du format JSEND
        console.log("La response reçue du Parse d'un collection");
        console.log(response.data.artists);
        return typeof response.data.artists != "undefined" ? response.data.artists : response;
    }
});



var Events = MyCollection.extend({
    url: "../php/services/EventCollectionSUCCESS.php", //EVENTS
    model:Event
        //model: Instrument//diff de Chabloz lui il n'a rien
});

var Artists = MyCollection.extend({
    url: ARTISTS+"-new", 
    model:Artist
        //model: Instrument//diff de Chabloz lui il n'a rien
});


var Musicians = MyCollection.extend({
    url: MUSICIANS, 
    model:Musician
//    parse: function (attrs, opt) { chabloz parse dans l'extension de backbone
//        console.log("Into parse function of Musicians");
//        console.log("If typeof attrs != 'undefined'");
//        if (typeof attrs != "undefined") {
//            
//            console.log("THEN");
//            console.log("attrs.data is");
//            console.log(attrs.data);
//            return attrs.data;
//            
//        }else{
//            console.log("ELSE");
//            console.log("attrs.data de parse de Musicians : ");
//            console.log(attrs.data);
//            
//            return attrs.data;
//        }
//        
//    }
    
});

var Instruments = MyCollection.extend({
    url: INSTRUS, 
    model:Instrument
        //model: Instrument//diff de Chabloz lui il n'a rien
});

var Representers = MyCollection.extend({
    url: REPRESENTERS, 
    model:Representer
        //model: Instrument//diff de Chabloz lui il n'a rien
});






















