var GOG = GOG || {};

GOG.App = {

    world: null,
    players: [],
    settings: {
        turnsPerRound: 3
    },
    currentPlayerIndex: 0,
    currentTurn: 0,
    currentRound: 1,

    init: function() {

        this.bindEvents();

        this.players = [
            new GOG.Player(1),
            new GOG.Player(2),
            new GOG.Player(3)
        ];

        this.currentPlayer = this.players[0];

        this.world = new GOG.World();
        this.world.drawMap('#world');
        this.nextTurn();
    },

    bindEvents: function() {
        Events.register('location-clicked', this, this.nextTurn);
    },

    nextTurn: function(location) {
        this.currentTurn++;
        if (this.currentTurn > this.settings.turnsPerRound) {
            if (this.currentPlayerIndex < this.players.length -1) {
                this.currentPlayerIndex++;
            }
            else {
                this.currentPlayerIndex = 0;
            }
            this.currentPlayer = this.players[this.currentPlayerIndex];
            this.currentTurn = 1;
            //this.currentRound++;
            console.log("new players round started", this.currentPlayerIndex + 1);
        }
        console.log("new turn started", this.currentTurn)
        this.countLocations();
        this.refreshStats();
    },

    countLocations: function() {
        $(this.players).each(function(i,e) {
            e.noOfLocations = 0;
        })
        this.world.forEachLocation(function(loc) {
            if (loc.player) {
                loc.player.noOfLocations++;
            }
        })
    },

    refreshStats: function() {
        $("#players").empty();
        $(this.players).each(function(i,e) {
            var playerElement = $("<div></div>");
            playerElement.html(e.getName() + ': ' + e.noOfLocations);
            $("#players").append(playerElement);
        })
    }

}