new ClipboardJS('#clipboard');

// for the raw inputs
var baseurl = "https://twitter.com/intent/tweet?"; //the base of the webintent url
var text; //the text of the tweet
var url; // the url to be included in the tweet
var hashtags; // the hashtags to be included in the tweet

// the url encoded pieces
var encodedurl;
var encodedtext;

// the compiled webintent link
var webintent;

// the data used for the tinyurl api
var mydata;

// hide the link section when the page loads
$("#link-section").hide();

// create the webintent link from the inputs
$("#getlink").on("click", function () {
  
  // set text from the value of the text input
  text = $("#text").val();

  // set url from the value of the url input
  url = $("#url").val();

  // set hashtags from the value of the hashtags input
  hashtags = $("#hashtags").val().replace(/\s/g, "");

  // url encode all the pieces
  encodedurl = encodeURIComponent(url);
  encodedtext = encodeURIComponent(text);
  
  // create the webintent link
  webintent = baseurl +
      "text=" +
      encodedtext +
      "&url=" +
      encodedurl +
      "&hashtags=" +
      hashtags;

  // this seems to be obselete
  // $("#webintent").text(
  //   baseurl +
  //     "text=" +
  //     encodedtext +
  //     "&url=" +
  //     encodedurl +
  //     "&hashtags=" +
  //     trimmedtags
  // );

  // set the preview link to webintent
  $('#preview').attr('href', webintent);

  // set the value of the link input to webintent
  $('#thelink').val(webintent);

  // show the link section
  $('#link-section').show();

  // change the label of the button to update the link if necessary
  $('#editlink').on('click', function(){
    $('#getlink').text('Update link');
  });

  console.log(webintent);

  // set mydata with the webintent link in case the tiny option is checked
  mydata = '{"url":"' + webintent + '", "domain":"tiny.one"}';
});

// use the tinyURL api to shorten the webintent link if needed
$("#make-it-tiny").on("click", function () {
  console.log(mydata);
  if($(this).prop("checked") == true) {
    $.ajax({
      url: "https://api.tinyurl.com/create?api_token=6bNI1jA1OAshWLp3kfbrW1XXrLpm5qt8rnRjVUnTgRTKL2TNEM8hfcjmMtwU",
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      data: mydata,
      success: function (data) {
        console.log(data.data.tiny_url);
        $('#thelink').val(data.data.tiny_url);
      },
      error: function(){
        $('#oops').show();
      }
    });
  }
  else {
    $('#thelink').val(webintent);
  }
});