Template.loading.onRendered = function () {
	if (!this.onRendered)
	{
		this._onRendered = true;
		setTimeout(Route.go("homepage"), 2000);
	}
}