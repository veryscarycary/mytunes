// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // SongQueueView.call(this);
  // render: function () {
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // }
  initialize: function () {
    // this.trigger('render', this);
    console.log(this.model);
    return this.$el.html(this.template(this.model.attributes));
  }
});

// SongQueueEntryView.prototype = Object.create(SongQueueView.prototype);
// SongQueueEntryView.prototype.constructor = SongQueueEntryView;