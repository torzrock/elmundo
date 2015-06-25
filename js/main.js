//Main JS
$(document).ready(function(){
    
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if(isAndroid) {
        $('#play').css({display: 'block'});
        if (Modernizr.video) {
          if (Modernizr.video.webm) {
            
            // replace the DOM node <video> and replace it with itself but only with a .webm file as source
            $('#video').replaceWith("<video id='video'  preload loop autobuffer src='video/palawan.m4v'></video>");
          }
        }

        
        
    }
    
    var video = document.getElementById('video');
    var playbtn = document.getElementById('play');
    playbtn.addEventListener('click',function(){
        video.play();
        $(this).remove();
    },false);
    
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
 
        $('.banner').remove();
  
    }
    
    
    
    $('.optionbox li a').each(function() {
       $(this).on('click',function(){
          if($(this).hasClass('active')){
              $(this).removeClass('active');
              $(this).siblings('div').removeClass('opened');
              
          } else {
              $(this).addClass('active');
              $(this).siblings('div').addClass('opened');
              $(this).parent('li').siblings().children('div').removeClass('opened');
              $(this).parent('li').siblings().children('a').removeClass('active');
          }
       }); 
    });
    
    //Smooth Scrolling
    $('a[href*=#]:not([href=#])').on('click',function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    
    
    var tour = $('.tours ul li ol li a');
    tour.each(function() {
       $(this).on('click',function() {
          if($(this).hasClass('active')) {
              $(this).removeClass('active');
              $(this).siblings('div').slideUp();
          } else {
              $(this).addClass('active');
              $(this).siblings('div').slideDown();
          }
       });
    });
    
    
    //MAP
    var map;
    var elmundo = new google.maps.LatLng(9.744396, 118.745824);
    var MY_MAPTYPE_ID = 'custom_style';

    function initialize() {

        var featureOpts  =  [ 
            { "stylers": [ { "visibility": "on" }, { "hue": "#DF9900" }, { "saturation": 100 } ] } 
        ];
      var mapOptions = {
        zoom: 17,
        center: elmundo,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

       var styledMapOptions = {
        name: 'Custom Style'
      };

      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

      var contentString = '<div id="mapinfocontent">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h2 id="firstHeading" class="firstHeading">El Mundo Travel and Tours.</h2>'+
          '<h3 id="statement">El Mundo Travel & Tours is travel service company committed to making travel safe, fun, exciting and hassle-free for its customers.</h3>' +
          '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
      });




      var marker = new google.maps.Marker({
          position: elmundo,
          map: map,
          title: 'Movent Inc!'
      });

      map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

    }

    google.maps.event.addDomListener(window, 'load', initialize);
    
});

