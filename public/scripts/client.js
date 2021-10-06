/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1633332054872
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1633418454872
    }
  ];

var tweetList = [];

$(document).ready(function() {
  for(let tweet of tweets) {
    tweetList.push(createTweetElement(tweet));
  }
  console.log(tweetList);
});

function createTweetElement(tweetData) {
  return {
    'username': tweetData.user.name,
    'icon': tweetData.user.avatars,
    'handle': tweetData.user.handle,
    'content': tweetData.content.text,
    'timestamp': tweetData.created_at,
  };
};