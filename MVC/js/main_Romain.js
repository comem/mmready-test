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


var login = new MyInitModel({"txtButton":"Activation"});
var loginViewVar = new LoginView({model: login});

var createArtist = new MyModel();
var createArtistView = new CreateArtistView({model: createArtist});

var genresList = new Genres();
var genresListView = new GenresListView({collection: genresList});


    
//--------------------------------------------------------
//  DOM READY   Actuel main.js de anciennement login.js de RomainNaty
//--------------------------------------------------------


$.holdReady( true );
$.getScript( "../js/pieces/ValidatorModelnView.js", function() {
$.holdReady( false );
});

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
      var descr = $("#shortDescrArtistInput").val();
        console.log("name");
        console.log(name);
        if(name === " "){
            console.log("caractère vide");
        }else{
          newArtist(name, genre, descr);  
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

