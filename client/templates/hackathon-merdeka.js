Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
	Template.body.helpers({
		tasks: function () {
			return Tasks.find({});
		}
	});
	
	Template.recordTemplate.created = function ()
	{
		this.data = this.data || {};
		Session.setDefault('ionNavDirection', 'forward'
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
