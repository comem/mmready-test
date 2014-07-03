//--------------------------------------------------------
//                View Login
//--------------------------------------------------------

var LoginView = MyView.extend({///!\ doublon avec viewROmain

    template: templates.login,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {loginFab: this.model.toJSON()}));
        console.log("render LoginFab View is rendering");
        return this;

    },
    events: {
        'click #btnConnect': 'login'
    },
    login: function() {
        var email = $("input[type=email]").val();
        console.log("email");
        console.log(email);
        var password = $("input[type=password]").val();
        console.log("password");
        console.log(password);

        if ($('#remember').is(":checked"))
        {
            console.log("remember checked");
            var remember = "true"; //peut-être qu'en string ca ne marche pas à test

        } else {
            console.log("rememeber not checked");
            var remember = "false";
        }

        this.model.set({email: email, password: password, remember: remember});
        this.model.save({
             error: function(data, response, x) {
                alert("server communication failed");
            }
        });
    }
});



//----------------------------------------------------
//OLD SUCCESS FONCTION FOR LOGIN TO SHOW THE API TEXT TO USER in the success of save
//
//
//            success: function (){
//                console.log("Dialogue client serveur : "+ textStatus);
//      console.log("TextStatut : "+ data.status);
//      
//      
//      console.log(data);
//      if(data.status==='success'){
//          console.log("Data.title : ");
//          console.log(data.response.title);
//          //$("#loginFab").hide();
//          alert(data.response.title);
//      }else if (data.status==="error"){
//          alert(data.message);
//          return;
//      }else if((data.status==="fail")){
//          console.log("Phrase d'erreur : "+ data.message);
//          return;
//      }
//            }

