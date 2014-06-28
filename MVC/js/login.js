//window.onload="sart()";
//
//function start(){};
//    $('#activation').on('click', function (e){
//        login();
//    });
//window.onload = pageSet();
//function pageSet(){};


$(document).ready(function() {
      console.log("document ready occurred!");
      
      var login = new MyLoginModel({"txtButton":"Activation"});
    var loginViewVar = new LoginView({model: login});
    loginViewVar.render().$el.appendTo("#login");
    
    $('#Activation').on("click", activation(event));

});//FIN DU DOM

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
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    }
});

function activation(event){
    console.log("click activation");
    var email = $("#email").val();
    var password = $("#password").val();
    
    $.ajax //Requête de connection API
  ({
    type: "POST",
    url: LOGIN,
    dataType: 'json',
    //async: false,
    data:  "{'email':"+email+", 'password':"+password+"}",                             //AUTH_MANAGER_FR ,      //{"email":"matou@matou.ch", "password":"matou"}
    //email: email ,
    //password: password,
    
    success: function (data, textStatus, jqXHR){
      console.log("Dialogue client serveur : "+ textStatus);
      console.log("TextStatut : "+ data.status);
      
      
      console.log(data);
      if(data.status==='success'){
          console.log("Data.title : ");
          console.log(data.data.title);
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
});
    
    
    
    
}

//var LoginCollection = Backbone.Collection.extend({
//    model: Login 
//
//});

//$(window).load(function() {
//      
//      console.log("window load occurred!");
//    
//    
//        
//    
//
//var Login = Backbone.Model.extend({
//    label: function () {
//        return this.get("email");
//    }
//});
//
//});//FIN Windows Load


//
//
//new AutoCompleteView({
//    input: $("#email"), // your input field
//    collection: LoginCollection // your collection
//}).render();
//
//var AutoCompleteItemView = Backbone.View.extend({
//    tagName: "li",
//    template: _.template('<a href="#"><%= label %></a>'),
//
//    events: {
//        "click": "select"
//    },
//    
//    initialize: function(options) {
//        this.options = options;
//    },
//
//    render: function () {
//        this.$el.html(this.template({
//            "label": this.model.label()
//        }));
//        return this;
//    },
//
//    select: function () {
//        this.options.parent.hide().select(this.model);
//        return false;
//    }
//
//});


var AutoCompleteItemView = Backbone.Model.extend();

var AutoCompleteView = Backbone.View.extend({
    tagName: "input",
    className: "autocomplete",
    id: "email",
    //wait: 300,

    queryParameter: "query",
    minKeywordLength: 2,
    currentText: "",
    itemView: AutoCompleteItemView,

    initialize: function (options) {
        _.extend(this, options);
        this.filter = _.debounce(this.filter, this.wait);
    },

    render: function () {
        // disable the native auto complete functionality
        this.input.attr("autocomplete", "off");

        this.$el.width(this.input.outerWidth());

        this.input
            .keyup(_.bind(this.keyup, this))
            .keydown(_.bind(this.keydown, this))
            .after(this.$el);

        return this;
    },

    keydown: function (event) {
        if (event.keyCode == 38) return this.move(-1);
        if (event.keyCode == 40) return this.move(+1);
        if (event.keyCode == 13) return this.onEnter();
        if (event.keyCode == 27) return this.hide();
    },

    keyup: function () {
        var keyword = this.input.val();
        if (this.isChanged(keyword)) {
            if (this.isValid(keyword)) {
                this.filter(keyword);
            } else {
                this.hide()
            }
        }
    },

    filter: function (keyword) {
    	var keyword = keyword.toLowerCase();
        if (this.model.url) {

            var parameters = {};
            parameters[this.queryParameter] = keyword;

            this.collection.fetch({
                success: function () {
                    this.loadResult(this.collection.models, keyword);
                }.bind(this),
                data: parameters
            });

        } else {
            this.loadResult(this.collection.filter(function (model) {
                return model.label().toLowerCase().indexOf(keyword) !== -1
            }), keyword);
        }
    },

    isValid: function (keyword) {
        return keyword.length > this.minKeywordLength
    },

    isChanged: function (keyword) {
        return this.currentText != keyword;
    },

    move: function (position) {
        var current = this.$el.children(".active"),
            siblings = this.$el.children(),
            index = current.index() + position;
        if (siblings.eq(index).length) {
            current.removeClass("active");
            siblings.eq(index).addClass("active");
        }
        return false;
    },

    onEnter: function () {
        this.$el.children(".active").click();
        return false;
    },

    loadResult: function (model, keyword) {
        this.currentText = keyword;
        this.show().reset();
        if (model.length) {
            _.forEach(model, this.addItem, this);
            this.show();
        } else {
            this.hide();
        }
    },

    addItem: function (model) {
        this.$el.append(new this.itemView({
            model: model,
            parent: this
        }).render().$el);
    },

    select: function (model) {
        var label = model.label();
        this.input.val(label);
        this.currentText = label;
        this.onSelect(model);
    },

    reset: function () {
        this.$el.empty();
        return this;
    },

    hide: function () {
        this.$el.hide();
        return this;
    },

    show: function () {
        this.$el.show();
        return this;
    },

    // callback definitions
    onSelect: function () {}

});
new AutoCompleteView;





//
////var myView = Backbone.View.extend();
//
//var myModel = Backbone.Model.extend();
//var loginModel = myModel.extend({
//    initialize: function(){
//        console.log("New loginModel Created");
//    },
//    validate: function(){
//        
//    }
//});
//
//
//
//
//$(function(){
//    
//    console.log("------DOM IS READY--------");
//    
//    
//     
//    
//   window.LoginView = myView.extend({
//
//    initialize:function () {
//        console.log('Initializing Login View');
//        this.listenTo(this.model, 'all', this.render);
//      this.render();
//    },
//    template: templates.login,
//
//    events: {
//        "click #loginButton": "login"
//    },
//
//    render: function() {
//        this.$el.html(Mustache.render(this.template, {LoginView: this.model.toJSON()}));
//        return this;},
//
//    login:function (event) {
//        event.preventDefault(); // Don't let this button submit the form
//        $('.alert-error').hide(); // Hide any errors on a new submit
//        var url = LOGIN;
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
//    
//    
//    
//   console.log("------DOM IS Finish------"); 
//});

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

