var GOG = GOG || {};

GOG.App = {

    world: null,
    players: [],

    init: function() {

        this.players = [
            new GOG.Player(1),
            new GOG.Player(2),
            new GOG.Player(3)
        ];

        this.currentPlayer = this.players[0];

        this.world = new GOG.World();
        this.world.drawMap('#world');
    }

}