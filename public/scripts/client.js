/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
/*
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

  const markup = `
    <section class="tweet-layout">
      <div class="icon-wrapper">
        <div class="person-container">
          <div class="person-flex-box">
            <i class="fas fa-user-circle">${tweets[0].user.avatars}</i>
            <div class="tweeter-name">${tweets[0].user.name}</div>
          </div>
        </div>
        <h3 class="tweeter-tagname">${tweets[0].user.handle}</h3>
      </div>
      <div class="card-body">
        <p class="tweet">${tweets[0].content.text}</p>
        <hr>
      </div>
      <div class="footer-container">
        <h5>${tweets[0].created_at}</h5>
        <div class="tweet-icons-container">
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </section>
  `;

  //document.body.innerHTML = markup;

  function createTweetElement(tweets) {
    return {
      "tweeter-name": tweets[0].user.name,
      "fa-user-circle": tweets[0].user.avatars,
      "tweeter-tagname": tweets[0].user.handle,
      "tweet": tweets[0].content.text,
      "footer-container": tweets[0].created_at,
    };
  };

  const $tweet = createTweetElement(tweets);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$("#tweet-layout").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
*/






///////////////////////////////////////////
const data = [
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

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets){
    let tweetElement = createTweetElement(tweet);
    $(".tweet-layout").append(tweetElement); 
  }
}

const createTweetElement = function(tweet) {
  let $tweet = { /* Your code for creating the tweet element */
    "tweeter-name": tweet.user.name,
    "fa-user-circle": tweet.user.avatars,
    "tweeter-tagname": tweet.user.handle,
    "tweet": tweet.content.text,
    "footer-container": timeago.format(tweet.created_at)
  };
  return $tweet;
}

renderTweets(data);