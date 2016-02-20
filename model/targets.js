Targets = new Mongo.Collection("targets");

Targets.allow({
    insert: function (userId, target) {
        // return userId && target.owner === userId;
        return true;
    },
    update: function (userId, target, fields, modifier) {
        // return userId && target.owner === userId;
        return true;
    },
    remove: function (userId, target) {
        return userId && target.owner === userId;
    }

});