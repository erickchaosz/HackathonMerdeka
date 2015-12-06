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
		Session.setDefault('ionNavDirection', 'forward');
		
		if (Platform.isAndroid())
		{
			this.transition = 'android';
		}
		else
		{
			this.transition = 'ios';
		}
		
		if (this.data && this.data.transition)
		{
			this.transition = this.data.transition;
		}
		
		if (this.transition === 'ios')
		{
			this.transitionDuration = 450;
		}
		else
		{
			this.transitionDuration = 320;
		}
	};
	
	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
