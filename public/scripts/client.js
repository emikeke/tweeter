/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweet = function(post) {
  const $tweetername = $(
    `<section class="tweet-layout">
      <div class="icon-wrapper">
        <div class="person-container">
          <div class="person-flex-box">
            <img src=${post.user.avatars} alt="profile avatar">
            <div class="tweeter-name">${post.user.name}</div>
          </div>
        </div>
        <h3 class="tweeter-tagname">${post.user.handle}</h3>
      </div>
      <div class="card-body">
        <p class="tweet">${post.content.text}</p>
        <hr>
      </div>
      <div class="footer-container">
        <h5>${timeago.format(post.created_at)}</h5>
        <div class="tweet-icons-container">
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </section>`);
 return $tweetername;
};

const renderTweets = function(tweets) {
  for (let tweet of tweets){  
    let tweetElement = createTweet(tweet);
    $(".allTweets").append(tweetElement); 
  }
};

const loadTweets = function() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
};

$(document).ready(function() {
  loadTweets();
  $("#tweet-form").on("submit", function(event) {
    console.log("hello");
    event.preventDefault();
    const $form = $(this);
    const $tweetText = $form.find("textarea");
    console.log($tweetText);
    const $tweetLength = $tweetText.val().trim().length;
    console.log($tweetLength);
    if ($tweetLength > 140) {
      return alert("This tweet has too many characters, please try again!");
    } else if (!$tweetLength) {
      //return alert("This tweet is empty, please try again!");
      return alert($tweetLength);
    } else {
        $.post("/tweets", $form.serialize()).then(data => {
          console.log("inside then", data);
          $tweetText.val("");
         let newTweet = createTweet(data);
         console.log(createTweet);
          $(".allTweets").prepend(newTweet); 
        })
        .catch(error => {
          console.log(error);
        })
      }
    });
});