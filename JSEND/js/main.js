console.log('**********************');
console.log('******** TP1 *********');
console.log('**********************');
(function () {
    console.log('**** Exercice 1.a ****');
    var Task = Backbone.Model.extend();
    var t1 = new Task({title: 'task 1'});
    var t2 = new Task({title: 'task 2'});
    console.log(t1.get('title'));
    console.log(t2.get('title'));
}());



$(document).ready(function($) {
console.log('jquery Ready');







});

