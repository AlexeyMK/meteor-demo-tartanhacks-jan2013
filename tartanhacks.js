Hackathons = new Meteor.Collection('hackathons');

if (Meteor.isClient) {
  Template.hackathons.hackathons = function () {
    return Hackathons.find({}, {sort: {"votes": -1}});
  };

  Template.hackathon.events({
    'click input' : function () {
      Hackathons.update({name: this.name},
                        {$inc: {votes: 1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Hackathons.findOne()) {
      Hackathons.insert({
        name: "PennApps",
        votes: 1,
      });
      Hackathons.insert({
        name: "Tartan Hacks",
        votes: 0,
      });
      Hackathons.insert({
        name: "HackNY",
        votes: 0,
      });
    }
  });
}
