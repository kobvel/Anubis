Meteor.publish("targets", function () {
    return Targets.find({ owner : this.userId }).targets;
});
