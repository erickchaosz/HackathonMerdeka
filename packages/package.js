Package.onUse(function (api) {
  // Export Accounts (etc) to packages using this one.
  api.use("mdg:geolocation", ["client", "server"]);
});
