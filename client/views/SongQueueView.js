// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // console.log(this);
    // this.collection.render();
    // this.collection.on('change', this.render, this);
    // this.collection.on('render', this.render, this);
    // SongQueueEntryView(this.collection);
  },

  render: function() {
    return this.$el;
  }

});
