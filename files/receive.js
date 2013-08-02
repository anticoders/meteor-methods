
// CLIENT ONLY

Meteor.startup(function() {

  ClientCall.messages.find().observe({
    added: function(message) {

      if(ClientCall._methods[message.method]) {
        var result = ClientCall._methods[message.method].apply(message.arguments);

        setTimeout(function() {
          Meteor.call('meteor-clientCall-received', message._id, null, result);
        }, 500);

      } else {

        setTimeout(function() {
          Meteor.call('meteor-clientCall-received', message._id, {message: 'No such method!'}, null);
        }, 500);
        
      }

      

    },
  });


});
