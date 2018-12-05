
$(document).ready(function(){
  $('.filter-btn').click(function() {
    var number = parseInt($(this).attr('id').slice(-1)) - 1
    $('.dude').fadeOut(100)
    $('.dude').eq(number).delay(100).fadeIn(100)
    $('.message-dot').eq(number).fadeOut(100)
  })

  $('#showall').click(function() {
    $('.dude').fadeIn(100)
    $('.message-dot').fadeIn(100)
  })

  $('.dude').click(function() {
    var zoomed= parseInt($(this).attr('id').slice(-1)) -1
    $('.slideshow-overlay').fadeIn(300)
    $('.slideshow-image').eq(zoomed).delay(100).fadeIn(300)
  })

  $('.slideshow-overlay').click(function(){
    $('.slideshow-overlay').fadeOut(300)
    $('.slideshow-image').fadeOut(300)

  })
})
