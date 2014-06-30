var myView = Backbone.View.extend();

var myModel = Backbone.Model.extend();
var loginModel = myModel.extend({
    initialize: function(){
        console.log("New loginModel Created");
    },
    validate: function(){
        
    }
});




$(function(){
    
    console.log("------DOM IS READY--------");
    
    
     
    
   window.LoginView = myView.extend({

    initialize:function () {
        console.log('Initializing Login View');
        this.listenTo(this.model, 'all', this.render);
      this.render();
    },
    template: templates.login,

    events: {
        "click #loginButton": "login"
    },

    render: function() {
        this.$el.html(Mustache.render(this.template, {LoginView: this.model.toJSON()}));
        return this;},

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = LOGIN;
        console.log('Loggin in... ');
        var formValues = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            success:function (data) {
                console.log(["Login request details: ", data]);
               
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            }
        });
    }
}); 
    
    
    
   console.log("------DOM IS Finish------"); 
});

//var ViewEvents = MyView.extend({
//    template: templates.login,
//    events: {
//         "click #loginButton": "login"
//    },
//    initialize: function(attrs, options) {
//        this.listenTo(this.model, 'all', this.render);
//        this.render();
//
//    },
//    render: function() {
//        this.$el.html(Mustache.render(this.template, {loginView: this.model.toJSON()}));
//        return this;
//
//    },
//    login:function (event) {
//        event.preventDefault(); // Don't let this button submit the form
//        //$('.alert-error').hide(); // Hide any errors on a new submit
//        var url = '../api/login';
//        console.log('Loggin in... ');
//        var formValues = {
//            email: $('#inputEmail').val(),
//            password: $('#inputPassword').val()
//        };
//
//        $.ajax({
//            url:url,
//            type:'POST',
//            dataType:"json",
//            data: formValues,
//            success:function (data) {
//                console.log(["Login request details: ", data]);
//               
//                if(data.error) {  // If there is an error, show the error messages
//                    $('.alert-error').text(data.error.text).show();
//                }
//                else { // If not, send them back to the home page
//                    window.location.replace('#');
//                }
//            }
//        });
//    }
//});
