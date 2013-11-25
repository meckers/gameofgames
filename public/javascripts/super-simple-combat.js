var GOG = GOG || {}

GOG.SuperSimpleCombat = {
    resolve: function() {
        var success = Math.random() > 0.5;
        return {
            'success': success,
            'message': success ? 'The location was taken by the attacker!' : 'The location was successfully defended'
        }
    }
}