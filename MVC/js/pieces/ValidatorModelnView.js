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

// Define a model with some validation rules
var AddEventModel = Backbone.Model.extend({
    
    validation: {
        artistName: {
            required: true,
            minLength: 8,
            msg: "Min 8"
        }
    }
});



var CreatAnEvent = Backbone.View.extend({
    events: {
        'click #saveEvent': function (e) {
            e.preventDefault();
            this.creatEvent();
        }
    },
    
    // Use stickit to perform binding between
    // the model and the view
    // See: https://github.com/NYTimes/backbone.stickit
    bindings: {
        '[name=nameArtistInput]': {
            observe: 'nameArtistInput',
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
    
    creatEvent: function () {
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
    var view = new CreatAnEvent({
        el: 'fieldset',
        model: new AddEventModel()
    });
    view.render();
});