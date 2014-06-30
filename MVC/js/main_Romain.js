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


$(document).ready(function() {
    
    loginViewVar.$el.appendTo("#login");
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
        loginFunction(); 
    });
    
    $("#btnOneArtist").on("click", function(){
        console.log("click");
        getOneArtist();
});
   
    
    
    
      
});//FIN DU DOM


