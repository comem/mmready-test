 ////////////////////////////////////////////////////////////////////////
    console.log('why so serious');
    console.log('**********************');
    console.log('start coding..');
    console.log('**********************');
    ///////////////////////////////////////////////////////////////////////

/////////////////////// VARIABLES GLOBALES //////////////////////////////
// /!\ url depuis index.html
    var URLSERVEURsuccess = "services/EventCollectionSUCCESS.php";
    var URLSERVEURfail = "services/EventCollectionFAIL.php";
    var URLSERVEURerror = "services/EventCollectionERROR.php";
    var ONLINE;




/////////// TEST DE CONNECTION AU SERVEUR//////////////////////////////////////////
 $.ajax({
        url: URLSERVEURsuccess
    }).done(function() {
        ONLINE = true;
    }).fail(function() {
        ONLINE = false;
    }).always(function(data, txtStatus) {
        if(ONLINE){
            console.log("statut: online");
                    }else{
                       console.log("statut: offline");
                    }
                    
                    console.log("Données Reçues : "+ data);
                       
        
    });


////////////////// extending Backbone classes///////////////////////////
////////////////////////////////////////////////////////////////////////
var MyModel = Backbone.Model.extend();
var MyCollection = Backbone.Collection.extend();
var MyModelNestedCollection = Backbone.Model.extend({
    nested: 'collection',
    initialize: function(attrs, options) {
        this.get(this.nested).on('change', function() {
            this.trigger('change', this);
        }, this);
    },
    toJSON: function() {
        var colObj = {};
        colObj[this.nested] = this.get(this.nested).toJSON();
        return _.extend(
                Backbone.Model.prototype.toJSON.apply(this, arguments),
                colObj
                );

    }

});

var MyView = Backbone.View.extend();
  
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  
    
    console.log("DOM Ready() - URL du serveur : "+URLSERVEURsuccess);
  

});


