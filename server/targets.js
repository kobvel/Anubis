Meteor.publish("targets", function () {
    return Targets.find({ owner : 1 }).targets;
});
