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

var Instruments = MyCollection.extend({
        model: Instrument
});






















