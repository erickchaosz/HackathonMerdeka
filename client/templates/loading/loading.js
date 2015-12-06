Template.loading.onRendered = function () {
	if (!this.onRendered)
	{
		this._onRendered = true;
		Meteor.setTimeout(function(){Router.go("/")}, 3000);
	}
}