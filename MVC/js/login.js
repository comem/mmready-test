//--------------------------------------------------------
//                login de index romain
//--------------------------------------------------------



////window.onload="sart()";
//
//function start(){};
//    $('#activation').on('click', function (e){
//        login();
//    });
//window.onload = pageSet();
//function pageSet(){};


var MyLoginModel = Backbone.Model.extend();

var MyLoginView = Backbone.View.extend();

var LoginView = MyLoginView.extend({
    template: templates.login,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {login: this.model.toJSON()}));
        console.log("render is rendering");
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    }
});


var login = new MyLoginModel({"txtButton":"Activation"});
    var loginViewVar = new LoginView({model: login});
    
//--------------------------------------------------------
//                DOM READY
//--------------------------------------------------------


$(document).ready(function() {
      console.log("document ready occurred!");
      
     
    loginViewVar.render().$el.appendTo("#login");
    
    $('button').click(function(){
        
    
        
    
        console.log("click activation");
        
    var email = $("input#email").val();
    console.log(email);
    var password = $("input#password").val();
    
//    var user = '{"email":"'+email+'", "password":"'+password+'"}';
//    var userJ = $(user).toJSON();
//    console.log(user);
    //Requête de connection API
    $.ajax({  
    type: "POST",
    url: LOGIN,
    dataType: 'json',
    //async: false,
    data: {"email":email ,"password":password} ,                       //AUTH_MANAGER_FR ,      //"matou@matou.ch""matou"}

    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      
      console.log(data);
      if(data.status==='success'){
          console.log("Data.title : ");
          console.log(data.data.title);
          $("#login").hide();
          alert("Vous êtes bien authentifié en tant que Manager");
      }else{
          console.log("Phrase d'erreur : "+ data.message.title);
          //IsConnected();
          return;
      }
      
      //IsConnected();
    },
    crossDomain: true
//    error: function(jqXHR, textStatus,errorThrown){
//        console.log("Vous n'êtes pas authentifié blblblbl!");
//        console.log(textStatus);
//        console.log(errorThrown);
//        console.log(jqXHR);
//        
//    }
}); //FIN AJAX
    }); // FIN ONCLICK
            
});//FIN DU DOM




