var SWC = SWC || {};

SWC.maps = (function() {
  var maps = {};

  function MarkerPin(color) {
    var pin = new google.maps.MarkerImage(
      "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
    return pin;
  }

  function MarkerPinCluster(url, sizeX, sizeY) {
    var pin = new google.maps.MarkerImage(
    url,
    new google.maps.Size(sizeX,sizeY),
    new google.maps.Point(0,0),
    new google.maps.Point(10,34));
    return pin;
  }

  function set_info_window(map, marker, info_window, content) {
    google.maps.event.addListener(marker, 'click', function () {
      info_window.setContent(content);
      info_window.open(map, marker);
    });
  }

  function toggle_marker_visibility(marker) {
    if (marker.getVisible()) {
      marker.setVisible(false);
    } else {
      marker.setVisible(true);
    }
  }

  function toggle_markers_mc_visibility(markers, mc) {
    markers.forEach(toggle_marker_visibility);
    if (markers[0].visible) {
      mc.setMap(markers[0].getMap());
    }
    else {
      mc.setMap(null);
    }
  }

  maps.upcoming = function() {
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(25,8),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    info_window   = new google.maps.InfoWindow({}),
    map           = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    // Go over all the upcoming camps and create pins in the map
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(55.87185,-4.29155),
          map: map,
          title: "Glasgow University, Dec 12-13, 2013",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://bendmorris.github.io/2013-12-12-glasgow/">Glasgow University</a></h5>' +
          '<h6><a href="/">Dec 12-13, 2013</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(45.947214,-66.640325),
          map: map,
          title: "University of New Brunswick, Jan 6-7, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://jooolia.github.io/2014-01-06-unb/">University of New Brunswick</a></h5>' +
          '<h6><a href="/">Jan 6-7, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(52.209868,0.102439),
          map: map,
          title: "Centre for Mathematical Sciences, University of Cambridge, Jan 7-8, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://sje30.github.io/2014-01-07-cam/">Centre for Mathematical Sciences, University of Cambridge</a></h5>' +
          '<h6><a href="/">Jan 7-8, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.64711,-79.39423),
          map: map,
          title: "Library Sciences in Toronto, Jan 13-14, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://gvwilson.github.io/2014-01-13-toronto/">Library Sciences in Toronto</a></h5>' +
          '<h6><a href="/">Jan 13-14, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.492635,-71.422294),
          map: map,
          title: "Coastal Institute, University of Rhode Island, Jan 13-14, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://iglpdc.github.io/2014-01-13-uri/">Coastal Institute, University of Rhode Island</a></h5>' +
          '<h6><a href="/">Jan 13-14, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.467972,-2.233154),
          map: map,
          title: "University of Manchester, Jan 14-15, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://apawlik.github.io/2014-01-14-manchester/">University of Manchester</a></h5>' +
          '<h6><a href="/">Jan 14-15, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.413963,-119.848947),
          map: map,
          title: "University of California Berkeley, Jan 18-19, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2014-01-18-ucb/">University of California Berkeley</a></h5>' +
          '<h6><a href="/">Jan 18-19, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(45.530677,-73.624497),
          map: map,
          title: "CRIM (Montreal), Jan 20-21, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://gvwilson.github.io/2014-01-20-montreal/">CRIM (Montreal)</a></h5>' +
          '<h6><a href="/">Jan 20-21, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.4225,-122.1653),
          map: map,
          title: "Stanford University, Jan 27-28, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://arokem.github.io/2014-01-27-Stanford/">Stanford University</a></h5>' +
          '<h6><a href="/">Jan 27-28, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(25.7174346,-80.2781389),
          map: map,
          title: "University of Miami, Jan 27-28, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://jennybc.github.io/2014-01-27-miami/">University of Miami</a></h5>' +
          '<h6><a href="/">Jan 27-28, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.093692, -88.237606),
          map: map,
          title: "University of Illinois, Computational Science and Engineering, Jan 30-31, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://uiuc-cse.github.io/2014-01-30-cse/">University of Illinois, Computational Science and Engineering</a></h5>' +
          '<h6><a href="/">Jan 30-31, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.359392,-71.093271),
          map: map,
          title: "Massachusetts Institute of Technology, Jan 30-31, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://rhiever.github.io/2014-01-30-mit/">Massachusetts Institute of Technology</a></h5>' +
          '<h6><a href="/">Jan 30-31, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.412114,-119.842014),
          map: map,
          title: "University of California Santa Barbara, Jan 31-Feb 1, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2014-01-31-ucsb/">University of California Santa Barbara</a></h5>' +
          '<h6><a href="/">Jan 31-Feb 1, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(52.6217629,-1.2409930),
          map: map,
          title: "The Genome Analysis Centre (TGAC), Feb 3-4, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://apawlik.github.io/2014-02-03-TGAC/">The Genome Analysis Centre (TGAC)</a></h5>' +
          '<h6><a href="/">Feb 3-4, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-42.8806,147.3250),
          map: map,
          title: "AMOS conference, Feb 10-11, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://damienirving.github.io/2014-02-10-hobart/">AMOS conference</a></h5>' +
          '<h6><a href="/">Feb 10-11, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.64711,-79.39423),
          map: map,
          title: "Mozilla Toronto, Feb 11-12, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2014-02-11-toronto/">Mozilla Toronto</a></h5>' +
          '<h6><a href="/">Feb 11-12, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-33.917410,151.231307),
          map: map,
          title: "University of New South Wales, Feb 13-14, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://karthik.github.io/2014-02-13-UNSW/">University of New South Wales</a></h5>' +
          '<h6><a href="/">Feb 13-14, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-33.883898,151.201013),
          map: map,
          title: "University of Technology, Sydney, Feb 18-19, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://karthik.github.io/2014-02-18-UTS/">University of Technology, Sydney</a></h5>' +
          '<h6><a href="/">Feb 18-19, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.413963,-119.848947),
          map: map,
          title: "Women in Science and Engineering, Apr 14-15, 2014",
          //icon: openPin,
          visible: true,
        });

        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2014-04-14-wise/">Women in Science and Engineering</a></h5>' +
          '<h6><a href="/">Apr 14-15, 2014</a></h6>' +
          '</div>';

            set_info_window(map, marker, info_window, info_string);
      
    
  }

  return maps;
})();
