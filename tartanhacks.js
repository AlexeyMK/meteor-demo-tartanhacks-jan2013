// JAVASCRIPT

Languages =
  new Meteor.Collection('languages');

if (Meteor.isClient) {
  Template.language_voter.list_languages =
    function () {
      // SELECT * FROM Languages
      //   ORDER BY votes desc
      return Languages.find({},
              {sort: {"votes": -1}});
  };

  Template.language.events({
    'click input' : function () {
      Languages.update({name: this.name},
                       {$inc: {votes: 1}});
    }
  });
}
