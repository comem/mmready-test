var MyLoginView = Backbone.View.extend();

var LoginView = MyLoginView.extend({
    template: templates.login,
    initialize: function(attrs, options) {
        this.listenTo(this.model, 'all', this.render);
        this.render();
    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {login: this.model.toJSON()}));
        console.log("render of LoginView is rendering");
//        this.$el.appendTo("#login");
        return this;

    },
    events: {
//          'submit #Activation': 'activation'
//        'click a.ico-edit': 'edit',
//        'click a.ico-detail': 'detail',
        
    }
});