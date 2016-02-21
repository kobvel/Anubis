Messages = new Mongo.Collection("messages");

Messages.allow({
    insert: function (userId, target) {
        return true;
    },
    update: function (userId, target, fields, modifier) {
        return true;
    },
    remove: function (userId, target) {
        return false;
    }
});