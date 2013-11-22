var GOG = GOG || {};

GOG.World = Class.extend({

    settings: {
        mapSize: 9
    },
    map: [],

    init: function() {
        console.log("init world");
        this.buildMap();
        console.log(this.map);
        console.log("a location is", this.map[4][5]); // should be 42.
    },

    buildMap: function() {
        var id=0;
        for (var r=0; r<this.settings.mapSize; r++) {
            var col = [];
            for (var c=0; c<this.settings.mapSize; c++) {
                col.push(new GOG.Location(++id));
            }
            this.map.push(col);
        }
    },

    forEachLocation: function(func) {
        $(this.map).each(function(i,e) {
            $(e).each(function(i,e) {
                func(e);
            });
        })
    },

    drawMap: function(container) {
        console.log("drawing map");
        this.forEachLocation(function(e) {
            $(container).append(e.getDomElement());
        })
    }
});