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
        <p class="tweet">${escape(post.content.text)}</p>
        <hr>
      </div>
      <div class="footer-container">
        <div class="timeago">
          <h5>${timeago.format(post.created_at)}</h5>
        </div>
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
    $(".allTweets").prepend(tweetElement); 
  }
};

const loadTweets = function() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

let resizeWindow = function() {
  let w = $(window).width();
  if(w < 1000) {
    $('.content').css('display', 'block');
    $('nav').css('background-color', '#99d2f0');
    $('nav').css('background-image', 'url(https://www.transparenttextures.com/patterns/tiny-grid.png)');
    $('header').css('width', '100%');
    $('header').css('height', '100%');
    $('header').css('padding-bottom', '10px');
    $('.header-image').css('margin-bottom', '30px');
    $('header').css('margin', '0');
    $('.main-container').css('padding', '90px');
    $('.main-container').css('padding-top', '0');
    $('.new-tweet').css('padding-top', '28px');
    $('body').css('background-image', 'url(https://www.transparenttextures.com/patterns/nice-snow.png)');
    $('.header-container').css('height', '375px');
    $('header').css('border-radius', '0px');
    $('.header-image').css('padding-top', '20px');
    $('.header-name').css('padding-top', '0');
    $('.header-name').css('padding-top', '0');
    $('.header-name').css('padding-bottom', '0');
    $('.header-name').css('padding-left', '0');
    $('.header-name').css('padding-right', '0');
  } else {
    $('.content').css('display', 'flex');
    $('header').css('margin-top', '3.25em');
    $('header').css('margin-right', '2em');
    $('header').css('margin-left', '4em');
    $('header').css('height', '15em');
    $('nav').css('background-color', '#4056a1');
    $('nav').css('background-image', 'none');
    $('.main-container').css('padding', '40px');
    $('.new-tweet').css('padding-top', '0px');
    $('.new-tweet').css('padding-bottom', '5px');
    $('body').css('background-image', 'url(https://www.transparenttextures.com/patterns/nice-snow.png)');
    $('header').css('border-radius', '50px');
    $('.header-image').css('padding-top', '20px');
    $('.header-name').css('padding-top', '8px');
    $('.header-name').css('padding-bottom', '0');
    $('.header-name').css('padding-left', '0');
    $('.header-name').css('padding-right', '0');
  }
};

$(document).ready(function() {
  resizeWindow();
  $(window).resize(resizeWindow);
  loadTweets();
  $("#tweet-form").on("submit", function(event) {
    event.preventDefault();
    const $form = $(this);
    const $tweetText = $form.find("textarea");
    const $tweetLength = $tweetText.val().trim().length;
    if ($tweetLength > 140) {
      $(".error1").slideDown();
    } else if (!$tweetLength) {
      $(".error2").slideDown();
    } else {
        $(".error1").slideUp();
        $(".error2").slideUp();
        $.post("/tweets", $form.serialize()).then(data => {
          $tweetText.val("");
         let newTweet = createTweet(data);
          $(".allTweets").prepend(newTweet); 
        })
        .catch(error => {
          return(error);
        })
      }
    });
});