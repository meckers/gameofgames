var GOG = GOG || {};

GOG.Location = Class.extend({

    player: null,
    id: null,
    domElement: null,

    init: function(id) {
        this.id = id;
        this.bindEvents();
    },

    bindEvents: function() {
        var me=this;
        this.getDomElement().click(function() {
            if (GOG.App.currentPlayer !== me.player) {
                me.assign(GOG.App.currentPlayer);
                Events.trigger('location-clicked', this);
            }
        })
    },

    getDomElement: function() {
        if (this.domElement == null)
        {
            this.domElement = $('<div></div>');
            this.domElement.addClass('location');
            this.domElement.html(this.id);
        }
        return this.domElement;
    },

    assign: function(player) {
        console.log("assigning player", player, "to", this);
        this.player = player;
        this.getDomElement().removeClass("player-1 player-2 player-3");
        this.getDomElement().addClass("player-" + player.id);
    }
});