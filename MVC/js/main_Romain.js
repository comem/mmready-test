/*--------------------------------------------------------------------------
 *    Default Value Ajax
 *///-----------------------------------------------------------------------


$.ajaxSetup({
    
    xhrFields: {
        withCredentials: true
    }
    
});

////--------------------------------------------------------
//                Création des instances
//--------------------------------------------------------

//Collection
var artistsList = new Artists();
//var artist = new Artist();
var musiciansList = new Musicians();
var instrusList = new Instruments();


//var login = new MyInitModel({"txtButton":"Activation"});
//var loginViewVar = new LoginView({model: login});

var createArtist = new MyModel();
var createArtistView = new CreateArtistView({model: createArtist});

var genresList = new Genres();
var genresListView = new GenresListView({collection: genresList});


    
//--------------------------------------------------------
//  DOM READY   Actuel main.js de anciennement login.js de RomainNaty
//--------------------------------------------------------


$(document).ready(function() {
    
    //loginViewVar.$el.appendTo("#login");
    createArtistView.$el.appendTo("#createArtist");
    
   //genresList.fetch();
      
    console.log("genresList depuis MAIN");
    console.log(genresList);
    //genresListView.$el.after("#nameArtistInput");
      console.log("document ready occurred!");
      
     
    //loginViewVar.render().$el.appendTo("#login");
   
    $('#btnTests').click(function(){
        TESTS();
    });
    
    
    $('#btnAllArtists').click(function(){
        
        getAllArtists();
        
        
    });
    
// collection.forEach(function(model, index) {
//    model.set(url, urlArray[index]);
//});
    $("#isDate").click(function(){
        
        var events = new Events();
        console.log(events);
//        events.fetch({
//            success: function (a, b, c){
//                
//                console.log("Event après fetch");
//                console.log(a);
//                console.log(b);
//                console.log(c);
//            }
//        });
    });
    $("#takeEvent").click(function(){
        
        
    });
    
    $('#btnAllEvents').click(function(){
        
        var events10 = new Events({});
        events10.fetch({}); // fetch est asynchrone il n'attends pas la réponse du serveur avant de passer à la ligne d'après
        
        
        
        
        
        
        
        
    });
    
    
    
    
    $('#Activation').click(function(){
       // loginFunction(); 
    });
    
    $("#btnOneArtist").on("click", function(){
        console.log("click");
        var id = $("#idArtistInput").val();
        getOneArtist(id);
});

$("#btnCreateArtist").on("click", function(){
        console.log("create Artist");
        
      var name = $("#nameArtistInput").val();  
      var genre = $("#genreArtistInput").val();
      var shortDescr = $("#shortDescrArtistInput").val();
      var longDescr = $("#LongDescrArtistInput").val();
      
      var order;
      var isSuppport;
      var hourArrival;
        
        if(name === " "){
            console.log("caractère vide");
        }else{
          saveArtist(name, genre, shortDescr, longDescr, order, isSuppport, hourArrival);  
        }
        
});

 $("#btnLOGINFab").on("click", function(){
        console.log("clickLOGIN");
        $("section").hide();
        
        var login = new MyLoginModel({});
     var loginViewVar = new LoginView({model: login});
        loginViewVar.$el.appendTo("body");
        
        //$("section#loginFab").show();
        loginButton();
});
   
    
    
    
      
});//FIN DU DOM

