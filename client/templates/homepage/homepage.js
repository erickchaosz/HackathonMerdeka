Template.homepage.events({
  'click .take-video': function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (Meteor.isCordova) {

      var userGeoLocation = new ReactiveVar(null);

      Tracker.autorun(function (computation) {
        userGeoLocation.set(Geolocation.latLng());
        if (userGeoLocation.get()) {
          Session.set('geolocation', userGeoLocation.get());
          computation.stop();
        }
      });

      navigator.device.capture.captureVideo(captureSuccess,
                                            captureError, {
                                              limit: 1, duration: 900
                                            });
    }
    else {
      console.log('Not on mobile');
    }
  }
});

function captureSuccess(mediaFiles) {
  var mediaFile = mediaFiles[0];
  Session.set('mediaFile', mediaFile);
  Router.go('upload');
}

function captureError(error) {
  console.log(error);
}
