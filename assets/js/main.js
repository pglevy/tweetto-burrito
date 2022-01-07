new ClipboardJS('#clipboard');


  $("#getlink").on("click", function () {
    var baseurl = "https://twitter.com/intent/tweet?";
    var text = $("#text").val();
    var url = $("#url").val();
    var hashtags = $("#hashtags").val();
    var encodedurl = encodeURIComponent(url);
    var encodedtext = encodeURIComponent(text);
    var trimmedtags = hashtags.replace(/\s/g, "");
    var webintent = baseurl +
        "text=" +
        encodedtext +
        "&url=" +
        encodedurl +
        "&hashtags=" +
        trimmedtags;
    $("#webintent").text(
      baseurl +
        "text=" +
        encodedtext +
        "&url=" +
        encodedurl +
        "&hashtags=" +
        trimmedtags
    );
    $('#preview').attr('href', webintent);
    $('#thelink').val(webintent);
    $('#link').show();
    $('#editlink').on('click', function(){
      $('#getlink').text('Update link');
    });
  });


//https://twitter.com/intent/tweet?text=A&url=B&hashtags=C&via=D
