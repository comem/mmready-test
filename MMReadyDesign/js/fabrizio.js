$(document).ready(function() {



                $('#start').datetimepicker({
                    language: 'de'
                    
            });

                $('#start').data("DateTimePicker").setMinDate(new Date());


               $('#openingDoors').datetimepicker({
                    pickDate: false,
                    language:'de',  
                });




         $('#end').datetimepicker({
                    language: 'de'
                    
            });

                $('#end').data("DateTimePicker").setMinDate(new Date());


$('#tryitForm').bootstrapValidator({
        fields: {
            start: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            }
        },
        submitHandler: function(validator, form, submitButton) {
            var fullName = [validator.getFieldElements('firstName').val(),
                            validator.getFieldElements('lastName').val()].join(' ');
            $('#helloModal')
                .find('.modal-title').html('Hello ' + fullName).end()
                .modal();
        }
    });




	
});



