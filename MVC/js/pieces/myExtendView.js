var MyView2 = Backbone.View.extend();

var ViewArtists = MyView2.extend({
    template: templates.artistsList,
    events: {
        'click a.ico-delete': 'delete',
        'click a.ico-edit': 'edit',
        'click a.ico-detail': 'detail',
        'click #btn-addArtist': 'addArtist'

    },
    initialize: function(attrs, options) {
        this.listenTo(this.collection, 'all', this.render);
        this.render();


    },
    render: function() {
        this.$el.html(Mustache.render(this.template, {artists: this.collection.toJSON()}));
        return this;

    },
    'delete': function(event) {
        console.log('delete');
    },
    edit: function(event) {
        console.log('edit');
    },
    detail: function(event) {
        $('#artistsList').hide();
        $('#showDetailArtist').show();
    },
    addArtist: function(event) {
        $('#eventsList').hide();
        $('#advancedResearchEvents').hide();
        $('#addEvent').show();
    }
});