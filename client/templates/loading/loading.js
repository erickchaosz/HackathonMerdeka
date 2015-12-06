Template.loading.onRendered = function () {
	if (!this.onRendered)
	{
		this._onRendered = true;
		setTimeout(Router.go("homepage"), 2000);
	}
}