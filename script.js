function menuHandle(){
  var status = $('.menu a').css('display');
  if (status=='none'){
    $('.menu a').css('display', 'block');
  } else {
    $('.menu a').css('display', 'none');
  }
}
