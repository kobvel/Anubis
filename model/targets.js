Targets = new Mongo.Collection("targets");

Targets.allow({
    insert: function (userId, project) {
        return userId && project.owner === userId;
    },
    update: function (userId, project, fields, modifier) {
        return userId && project.owner === userId;
    },
    remove: function (userId, project) {
        return userId && project.owner === userId;
    }

});
