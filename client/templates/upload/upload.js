Template.upload.events({
  'click .upload-video': function(e) {
    e.preventDefault();

    var mediaFile = Session.get('mediaFile');

    Session.set('fileType', mediaFile.type);
    Session.set('fileName', mediaFile.name);

    window.resolveLocalFileSystemURL(
      mediaFile.fullPath,
      onFileReadSuccess,
      onFileReadFail
    );
  }
});

Template.upload.helpers({
  lat: function() { return Session.get('lat'); },
  lon: function() { return Session.get('lon'); }
});

var userGeoLocation = new ReactiveVar(null);

Tracker.autorun(function (computation) {
  userGeoLocation.set(Geolocation.latLng());
  if (userGeoLocation.get()) {
    console.log(userGeoLocation.get());
    computation.stop();

  }

});

function onFileReadSuccess(fileEntry) {
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onloadend = function(e) {
      var dataView = new DataView(this.result);
      var blob = new Blob([dataView], {type: Session.get('fileType')});
      blob.name = Session.get('fileName');

      Uploader = new Slingshot.Upload();
    }
  });
}
