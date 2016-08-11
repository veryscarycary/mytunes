// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // console.log(this);
    // this.collection.render();
    // this.collection.on('change', this.render, this);
    // this.collection.on('render', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    // look up .detach()

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );  
  }

});
