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
  loc: function() {
    return Session.get('geolocation');
  },
  date: function() {
    return new Date();
  },
  error: Geolocation.error
});

function onFileReadSuccess(fileEntry) {
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onloadend = function(e) {
      var dataView = new DataView(this.result);
      var blob = new Blob([dataView], {type: Session.get('fileType')});
      blob.name = Session.get('fileName');

      Uploader = new Slingshot.Upload("mdkUploads");
      Uploader.send(blob, function (error, downloadUrl) {
        if (error) {
          console.log(error);
        }
      });
    }

    reader.readAsArrayBuffer(file);
  });
}

function onFileReadFail() {
  console.log("Error");
}
