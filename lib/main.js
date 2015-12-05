Meteor.startup(function()
{
	Router.addRoute('/record', 'recordTemplate');
	Router.addRoute('/loading', 'loadingTemplate');
	Router.addRoute('/stopScreen', 'stopScreenTemplate');
	Router.addRoute('/finished', 'finishedTemplate');
	
	Router.run();
});