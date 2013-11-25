MessageLog = Class.extend({
    init: function(container) {
        this.container = $(container);
    },

    write: function(text) {
        this.container.append(text + "<br/>");
    }
});