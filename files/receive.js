
// CLIENT ONLY

Meteor.startup(function() {

  Meteor.ClientCall._messages.find().observe({
    added: function(message) {

      if(Meteor.ClientCall._methods[message.method]) {
        var result = Meteor.ClientCall._methods[message.method].apply({}, message.arguments);

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
