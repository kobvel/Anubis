Targets = new Mongo.Collection("targets");

Targets.allow({
    insert: function (userId, target) {
        return target.owner === 1 || target.owner === userId;
    },
    update: function (userId, target, fields, modifier) {
        return target.owner === 1 || target.owner === userId;
    },
    remove: function (userId, target) {
        return userId && target.owner === userId;
    }

});