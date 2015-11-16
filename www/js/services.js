angular.module('starter.services', [])

.factory('chats', function() {

  var chats = [{
    id: 0,
    title: 'Tesla\'s electric car a good idea?',
    details: 'Tesla launched Model-S, second of electric cars by the company. Do you think these can ever take-off?',
    isArchived: true,
    image: 'img/ModelS.jpg',
    comments: ["Absolutely, this is how cars should have worked in the first place.", "Nah, cars should only run on Gasoline.", "Electric shock to passengers is a risk."]
  }, {
    id: 1,
    title: 'Hyperloop',
    details: 'Is it practical to build a train that moves at speed close to 350 miles/hour?',
    isArchived: false,
    image: 'img/Hyperloop.jpg',
    comments: ["Will LA get it soon", "What will happen to airline industry?"]
  }, {
    id: 2,
    title: 'Angular-Material',
    details: 'What\'s the potential of Angular Material? Is Material Design apt for designers to adapt? Would you use it in your app?',
    isArchived: false,
    image: 'img/MaterialDesign.png',
    comments: ["It doesn't fit naturally with iOS", "Material design provides consistent look and feel. So yes, great potential"]
  }, {
    id: 3,
    title: 'Angular 2 and Type Script',
    details: 'What do you think about Type Script choice for Angular 2?',
    isArchived: false,
    image: 'img/angular2.png',
    comments: ["It makes sense. Type Script is open source too.", "I don't like Microsoft"]
  }, {
    id: 4,
    title: 'Windows 8',
    details: 'Do you like Windows 8?',
    isArchived: true,
    image: 'img/windows8.jpg',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
