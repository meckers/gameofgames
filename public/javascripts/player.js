var GOG = GOG || {};

GOG.Player = Class.extend({

    id: null,
    noOfLocations: 0,

    init: function(id) {
        this.id = id;
    },

    getName: function() {
        return "Player " + this.id;
    }
});