$(document).ready(function(){
  $("#new_comment_button").click(function(e) {
    $('#new_comment').show()
});
$("#new_comment").submit(function(e) {
  e.preventDefault()
  let commentBody = $('textarea[name="comment"]').val()
  let commentAuthor = $('input[id="authorName"]').val()
  $("#comment_list").append("<li>" + commentBody + "<span class='author'>" + commentAuthor +
  "</span></li>")
  $('#new_comment').hide()
})

});
