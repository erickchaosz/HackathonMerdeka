Template.homepage.events({
  'click .take-video': function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (Meteor.isCordova) {
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
  mediaFile = mediaFiles[0];
  Session.set('mediaFile', mediaFile);
}

function captureError(error) {
  console.log(error);
}
