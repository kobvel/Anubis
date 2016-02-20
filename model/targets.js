Targets = new Mongo.Collection("targets");

Targets.allow({
    insert: function (userId, target) {
        return userId && target.owner === userId;
    },
    update: function (userId, target, fields, modifier) {
        return userId && target.owner === userId;
    },
    remove: function (userId, target) {
        return userId && target.owner === userId;
    }

});

