require.config(
{
  baseUrl: "js/lib",
  paths: {
    jquery: "jquery-1.9.1",
    handlebars: "handlebars-1.0.0",
    ember: "ember-1.0.0",
    socketio: "socket.io",
    hashes: "hashes.min"
  },
  shim: {
    "ember": {
      exports: "Ember",
      deps: ["jquery","handlebars"]
    },
    "socketio": {
      exports: "io"
    }
  }
});

require( ["ember","socketio","hashes"], function( Em, io, hashes )
{
  App = Em.Application.create({
    rootElement: "#chat",
    LOG_TRANSITIONS: true
  });
  App.GravatarImageComponent = Em.Component.extend({
    size: 200,
    email: '',
    gravatarUrl: function() {
      var email = this.get('email'), size = this.get('size');
      var hash = new hashes.MD5;
      return 'http://www.gravatar.com/avatar/' + hash.hex(email) + '?s=' + size;
    }.property('email', 'size')
  });
  App.Router.map(function(){});
  App.IndexRoute = Em.Route.extend({
    model: function() {
      return ["tomster@emberjs.com",""];
    }
  });
});