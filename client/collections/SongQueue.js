// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(songModel) {
      this.remove(songModel);
    });
    this.on('enqueue', function() {});
    this.on('play', function(songModel) {

    });
    this.on('ended', function(songModel) {
      this.remove(this.first());
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function () {
    this.first().play();
  },

});