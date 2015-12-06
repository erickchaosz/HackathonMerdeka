Template.loading.onRendered = function () {
	if (!this.onRendered)
	{
		this._onRendered = true;
		Meteor.setTimeout(function(){Router.go("homepage")}, 2000);
	}
}