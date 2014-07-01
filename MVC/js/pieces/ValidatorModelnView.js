// Since we are automatically updating the model, we want the model
// to also hold invalid values, otherwise, we might be validating
// something else than the user has entered in the form.
// See: http://thedersen.com/projects/backbone-validation/#configuration/force-update
Backbone.Validation.configure({
    forceUpdate: true
});

// Extend the callbacks to work with Bootstrap, as used in this example
// See: http://thedersen.com/projects/backbone-validation/#configuration/callbacks
_.extend(Backbone.Validation.callbacks, {
    valid: function (view, attr, selector) {
        var $el = view.$('[name=' + attr + ']'), 
            $group = $el.closest('.input-group');
        
        $group.removeClass('has-error');
        $group.find('.help-block').html('').addClass('hidden');
    },
    invalid: function (view, attr, error, selector) {
        var $el = view.$('[name=' + attr + ']'), 
            $group = $el.closest('.input-group');
        
        $group.addClass('has-error');
        $group.find('.help-block').html(error).removeClass('hidden');
    }
});



Backbone.Validation.configure({
  labelFormatter: 'label'
});


// Define a model with some validation rules
var CreatArtistModel = Backbone.Model.extend({
    
    validation: {
        nameArtistInput: {
            
            minLength: 8,
            required: false,
            msg: "Min 8"
        },genreArtistInput: {
            required: true,
        },
        shortDescrArtistInput: {
            required: true,
            msg: "min 1 genre"
        }
    }
});

var CreatAnArtist = Backbone.View.extend({
    events: {
        'click #btnCreateArtist': function (e) {
            e.preventDefault();
            this.creatArtist();
        }
    },
    
    // Use stickit to perform binding between
    // the model and the view
    // See: https://github.com/NYTimes/backbone.stickit
    bindings: {
        '[name=nameArtistInput]': {
            observe: 'nameArtistInput',
            setOptions: {
                validate: false
            }
        },
        '[name=shortDescrArtistInput]': {
            observe: 'shortDescrArtistInput',
            setOptions: {
                validate: true
            }
        }
        ,
        '[name=genreArtistInput]': {
            observe: 'genreArtistInput',
            setOptions: {
                validate: true
            }
        }
    },

    initialize: function () {
        // This hooks up the validation
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/validation-binding
        Backbone.Validation.bind(this);
    },
    
    render: function() {
        this.stickit();
        return this;
    },
    
    creatArtist: function () {
        // Check if the model is valid before saving
        // See: http://thedersen.com/projects/backbone-validation/#methods/isvalid
        if(this.model.isValid(true)) {       
            // this.model.save();
            alert('Great Success!');
        }
    },
    
    remove: function() {
        // Remove the validation binding
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }
});

$(function () {
    var view = new CreatAnArtist({
        el: 'form',
        model: new CreatArtistModel()
    });
    view.render();
});