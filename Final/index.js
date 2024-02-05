$('.slider-Head').slick({
    arrows: false,
    autoplay:true,
    infinite:true,
    dots:true,
    autoplaySpeed: 3000
});


(function() {

    var today = new Date();
    var future = today.setDate(today.getDate() + 15);
    var futureDate = new Date(future);
  
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  
    function pad(num, size) {
        var s = "0" + num;
        return s.substr(s.length-size);
    }
  
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          days = Math.floor(t / (1000 * 60 * 60 * 24));
  
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  
    function clock(id, endtime) {
      var days = document.getElementById(id + '-days')
          hours = document.getElementById(id + '-hours'),
          minutes = document.getElementById(id + '-minutes'),
          seconds = document.getElementById(id + '-seconds');
  
      var timeinterval = setInterval(function() {
        var t = getTimeRemaining(endtime);
  
        if (t.total <= 0){
          clearInterval(timeinterval);
        } else {
    days.innerHTML = pad(t.days, 2);
    hours.innerHTML = pad(t.hours, 2);
    minutes.innerHTML = pad(t.minutes, 2);
    seconds.innerHTML = pad(t.seconds, 2);
    }
      }, 1000);
    }
  
    clock('js-clock', deadline);
  })();