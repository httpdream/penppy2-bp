
// Slider Open & Close
function openSlider(){
  $('.slider-ui').removeClass('hidden');
  $('.slider-ui').addClass('show');
}
function closeSlider(){
  $('.slider-ui').removeClass('show');
  $('.slider-ui').addClass('hidden');
  $('.room-line.assign-ui').removeClass('show')
}

// Document Ready
$( document ).ready(function() {

  // DEMO ONLY: Calendar Click Event Listner
  $('.table-calendar .room').click(function(){
    var avail = $(this).children($('.status-badge')).hasClass('available');
    if(avail === true){
      location.href='/bp-calendar-select';
    }
  });

  // 캘린더 전화문의 Hover
  $('.table-calendar .room').mouseover(function(){
    var callonly = $(this).children($('.status-badge')).hasClass('callonly');
    if(callonly === true){
      $(this).children($('.call-info')).addClass('show');
    }
    $(this).mouseout(function(){
      $('.call-info').removeClass('show');
    });
  });

  // PC테이블 전화문의 Hover
  $('.btn-callonly').mouseover(function(){
    $(this).parent().children($('.call-info')).addClass('show');

    $(this).mouseout(function(){
      $('.call-info2').removeClass('show');
    });
  });

  // 모바일 달력 선택 Toggle
  $('td.selectable').click(function(){
    $(this).toggleClass('selected');
    $('#bookSelectedBtn').hide();
    $('td.selectable.selected').each(function(){
      $('#bookSelectedBtn').show();
    });
  });

});

