Combat = Class.extend({
    init: function() {

    },
    resolve: function(location, attacker) {
        if (Math.random() > 0.5) {
            return false;
        }
    }
});