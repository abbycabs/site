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
          position: new google.maps.LatLng(49.276765,-122.917957),
          map: map,
          title: "Simon Fraser University, Feb 22 and Mar 1, 2014",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://bernhardkonrad.github.io/2014-02-22-SFU/">Simon Fraser University</a></h5>' +
          '<h6><a href="/">Feb 22 and Mar 1, 2014</a></h6>' +
          '</div>';
            set_info_window(map, marker, info_window, info_string);
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.46871,-3.94383),
          map: map,
          title: "ESAC, Feb 24-25, 2014",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://justincely.github.io/2014-02-24-esac/">ESAC</a></h5>' +
          '<h6><a href="/">Feb 24-25, 2014</a></h6>' +
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

  maps.previous = function() {
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(25,8),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    info_window   = new google.maps.InfoWindow({}),
    map           = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var markers = [];
    var mcOptions = {
          zoomOnClick: false,
          maxZoom: 5,
          gridSize: 25,
          minimumClusterSize: 1
        }
    var oms = new OverlappingMarkerSpiderfier(map,{markersWontMove: true, markersWontHide: true, keepSpiderfied: true});
	var iw = new google.maps.InfoWindow();
	oms.addListener('click', function(marker, event) {
		iw.setContent(marker.desc);
		iw.open(map, marker);
	});
	oms.addListener('spiderfy', function(markers) {
		iw.close();
	});

    // Go over all the previous camps and create pins in the map
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.661476,-79.395189),
          map: map,
          title: "University of Toronto, Nov 7-8, 2011",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2011-11-07-toronto/index.html">University of Toronto</a></h5>' +
          '<h6><a href="/bootcamps/2011-11-07-toronto/index.html">Nov 7-8, 2011</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.332604,-76.62319),
          map: map,
          title: "Space Telescope Science Institute, Jan 18-19, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-01-18-stsci/index.html">Space Telescope Science Institute</a></h5>' +
          '<h6><a href="/bootcamps/2012-01-18-stsci/index.html">Jan 18-19, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(45.703255,13.718013),
          map: map,
          title: "International Centre for Theoretical Physics, Feb 20 - March 2, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-02-20-itcp/index.html">International Centre for Theoretical Physics</a></h5>' +
          '<h6><a href="/bootcamps/2012-02-20-itcp/index.html">Feb 20 - March 2, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.661476,-79.395189),
          map: map,
          title: "University of Toronto, February 23-24, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-02-23-toronto/index.html">University of Toronto</a></h5>' +
          '<h6><a href="/bootcamps/2012-02-23-toronto/index.html">February 23-24, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.1663815,-86.526621),
          map: map,
          title: "Indiana University, March 7-8, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-03-07-indiana/index.html">Indiana University</a></h5>' +
          '<h6><a href="/bootcamps/2012-03-07-indiana/index.html">March 7-8, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(36.802151,-121.788163),
          map: map,
          title: "Monterey Bay Aquarium Research Institute, March 26-27, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-03-26-mbari/index.html">Monterey Bay Aquarium Research Institute</a></h5>' +
          '<h6><a href="/bootcamps/2012-03-26-mbari/index.html">March 26-27, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8083814,-122.2675787),
          map: map,
          title: "NERSC, March 28-29, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-03-28-nersc/index.html">NERSC</a></h5>' +
          '<h6><a href="/bootcamps/2012-03-28-nersc/index.html">March 28-29, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.7901128,-87.6007318),
          map: map,
          title: "University of Chicago, April 2-3, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-04-02-chicago/index.html">University of Chicago</a></h5>' +
          '<h6><a href="/bootcamps/2012-04-02-chicago/index.html">April 2-3, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.7449488,-111.8042944),
          map: map,
          title: "Utah State University, April 14-15, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-04-14-utahstate/index.html">Utah State University</a></h5>' +
          '<h6><a href="/bootcamps/2012-04-14-utahstate/index.html">April 14-15, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.5598815,-0.1334579),
          map: map,
          title: "University College London, April 30 - May 1, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-04-30-ucl/index.html">University College London</a></h5>' +
          '<h6><a href="/bootcamps/2012-04-30-ucl/index.html">April 30 - May 1, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.7272884,-84.482106),
          map: map,
          title: "Michigan State University, May 7-8, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-05-07-michiganstate/index.html">Michigan State University</a></h5>' +
          '<h6><a href="/bootcamps/2012-05-07-michiganstate/index.html">May 7-8, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(54.980095,-1.6146142),
          map: map,
          title: "Newcastle University, May 14-15, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-05-14-newcastle/index.html">Newcastle University</a></h5>' +
          '<h6><a href="/bootcamps/2012-05-14-newcastle/index.html">May 14-15, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.5234543,-113.5259951),
          map: map,
          title: "University of Alberta, May 16-17, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-05-16-alberta/index.html">University of Alberta</a></h5>' +
          '<h6><a href="/bootcamps/2012-05-16-alberta/index.html">May 16-17, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.2617149,-123.2534305),
          map: map,
          title: "University of British Columbia, May 22-23, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-05-22-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2012-05-22-ubc/index.html">May 22-23, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.3275798,-76.6207579),
          map: map,
          title: "Johns Hopkins University, June 18-19, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-06-18-jhu/index.html">Johns Hopkins University</a></h5>' +
          '<h6><a href="/bootcamps/2012-06-18-jhu/index.html">June 18-19, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.831673,2.355623),
          map: map,
          title: "INRIA Paris, June 28-29, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-06-28-inria/index.html">INRIA Paris</a></h5>' +
          '<h6><a href="/bootcamps/2012-06-28-inria/index.html">June 28-29, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.3591326,-71.093201),
          map: map,
          title: "MIT, July 9-10, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-07-09-mit/index.html">MIT</a></h5>' +
          '<h6><a href="/bootcamps/2012-07-09-mit/index.html">July 9-10, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.4701302,-80.5357712),
          map: map,
          title: "University of Waterloo, July 12-13, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-07-12-waterloo/index.html">University of Waterloo</a></h5>' +
          '<h6><a href="/bootcamps/2012-07-12-waterloo/index.html">July 12-13, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(44.6322608,-63.5802627),
          map: map,
          title: "Halifax, July 16-17, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-07-16-halifax/index.html">Halifax</a></h5>' +
          '<h6><a href="/bootcamps/2012-07-16-halifax/index.html">July 16-17, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.7835514,-79.1863972),
          map: map,
          title: "University of Toronto (Scarborough), July 19-20, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-07-19-utsc/index.html">University of Toronto (Scarborough)</a></h5>' +
          '<h6><a href="/bootcamps/2012-07-19-utsc/index.html">July 19-20, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.9481933,-1.0529144),
          map: map,
          title: "DAFx Conference, Sept 13-14, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-09-13-dafx/index.html">DAFx Conference</a></h5>' +
          '<h6><a href="/bootcamps/2012-09-13-dafx/index.html">Sept 13-14, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(59.9399586,10.7217496),
          map: map,
          title: "University of Oslo, Sept 17-18, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-09-17-oslo/index.html">University of Oslo</a></h5>' +
          '<h6><a href="/bootcamps/2012-09-17-oslo/index.html">Sept 17-18, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.8080777,-73.9635678),
          map: map,
          title: "Columbia University, Sept 28-29, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-09-28-columbia/index.html">Columbia University</a></h5>' +
          '<h6><a href="/bootcamps/2012-09-28-columbia/index.html">Sept 28-29, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.4282668,-86.9143245),
          map: map,
          title: "Purdue University, Oct 8-9, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-08-purdue/index.html">Purdue University</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-08-purdue/index.html">Oct 8-9, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8759281,-122.2500418),
          map: map,
          title: "Lawrence Berkeley National Laboratory, Oct 17-18, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-17-lbl/index.html">Lawrence Berkeley National Laboratory</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-17-lbl/index.html">Oct 17-18, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.2617149,-123.2534305),
          map: map,
          title: "University of British Columbia, Oct 18-19, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-18-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-18-ubc/index.html">Oct 18-19, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8695,-122.258949),
          map: map,
          title: "University of California Berkeley, Oct 20-21, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-20-ucb/index.html">University of California Berkeley</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-20-ucb/index.html">Oct 20-21, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(54.980095,-1.6146142),
          map: map,
          title: "University of Newcastle, Oct 22-23, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-22-newcastle/index.html">University of Newcastle</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-22-newcastle/index.html">Oct 22-23, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.141411,-118.1249),
          map: map,
          title: "Caltech, Oct 23-24, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-23-caltech/index.html">Caltech</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-23-caltech/index.html">Oct 23-24, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.831513,-77.308746),
          map: map,
          title: "George Mason University, Oct 25-26, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-25-gmu/index.html">George Mason University</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-25-gmu/index.html">Oct 25-26, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.7571373,-1.2569052),
          map: map,
          title: "Oxford University, Oct 30-31, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-10-30-oxford/index.html">Oxford University</a></h5>' +
          '<h6><a href="/bootcamps/2012-10-30-oxford/index.html">Oct 30-31, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.2613285,-79.9202476),
          map: map,
          title: "McMaster University, Nov 8-9, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-11-08-mcmaster/index.html">McMaster University</a></h5>' +
          '<h6><a href="/bootcamps/2012-11-08-mcmaster/index.html">Nov 8-9, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.6480562,-90.3050959),
          map: map,
          title: "Washington University in St. Louis, Nov 10-11, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-11-10-wustl/index.html">Washington University in St. Louis</a></h5>' +
          '<h6><a href="/bootcamps/2012-11-10-wustl/index.html">Nov 10-11, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.8953297,-117.2421882),
          map: map,
          title: "Scripps Research Institute, Nov 15-16, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-11-15-scripps/index.html">Scripps Research Institute</a></h5>' +
          '<h6><a href="/bootcamps/2012-11-15-scripps/index.html">Nov 15-16, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.2274248,-77.8791793),
          map: map,
          title: "University of North Carolina, Nov 28-29, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-11-28-unc/index.html">University of North Carolina</a></h5>' +
          '<h6><a href="/bootcamps/2012-11-28-unc/index.html">Nov 28-29, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(21.3006615,-157.8191655),
          map: map,
          title: "University of Hawaii, Nov 30 - Dec 1, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-11-30-hawaii/index.html">University of Hawaii</a></h5>' +
          '<h6><a href="/bootcamps/2012-11-30-hawaii/index.html">Nov 30 - Dec 1, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(55.9453279,-3.1911838),
          map: map,
          title: "University of Edinburgh, Dec 4-5, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-12-04-edinburgh/index.html">University of Edinburgh</a></h5>' +
          '<h6><a href="/bootcamps/2012-12-04-edinburgh/index.html">Dec 4-5, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(30.2835989,-97.7344283),
          map: map,
          title: "University of Texas (Austin), Dec 10-11, 2012",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2012-12-10-uta/index.html">University of Texas (Austin)</a></h5>' +
          '<h6><a href="/bootcamps/2012-12-10-uta/index.html">Dec 10-11, 2012</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.2617149,-123.2534305),
          map: map,
          title: "University of British Columbia, Jan 11 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-11-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-11-ubc/index.html">Jan 11 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.7901128,-87.6007318),
          map: map,
          title: "University of Chicago, Jan 12-13, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-12-chicago/index.html">University of Chicago</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-12-chicago/index.html">Jan 12-13, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(45.4174172,-73.9489284),
          map: map,
          title: "McGill University, Jan 12-13, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-12-mcgill/index.html">McGill University</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-12-mcgill/index.html">Jan 12-13, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.4691285,-80.5398649),
          map: map,
          title: "University of Waterloo, Jan 12-13, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-12-waterloo/index.html">University of Waterloo</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-12-waterloo/index.html">Jan 12-13, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.2617149,-123.2534305),
          map: map,
          title: "University of British Columbia, Jan 21-22, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-21-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-21-ubc/index.html">Jan 21-22, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.264934,11.669121),
          map: map,
          title: "Technische Universitat Munchen, Jan 22-23, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-22-tum/index.html">Technische Universitat Munchen</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-22-tum/index.html">Jan 22-23, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.6471184,-79.3942998),
          map: map,
          title: "Mozilla Foundation, Jan 24-25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-24-camh/index.html">Mozilla Foundation</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-24-camh/index.html">Jan 24-25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.5369804,9.058935),
          map: map,
          title: "Max Planck Institute Tuebingen, Jan 25-25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-25-tuebingen/index.html">Max Planck Institute Tuebingen</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-25-tuebingen/index.html">Jan 25-25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.8080777,-73.9635678),
          map: map,
          title: "Columbia University, Jan 30 - Feb 2, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-30-columbia/index.html">Columbia University</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-30-columbia/index.html">Jan 30 - Feb 2, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.2283843,-80.4234167),
          map: map,
          title: "Virginia Tech, Jan 31 - Feb 1, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-01-31-vt/index.html">Virginia Tech</a></h5>' +
          '<h6><a href="/bootcamps/2013-01-31-vt/index.html">Jan 31 - Feb 1, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.2617149,-123.2534305),
          map: map,
          title: "University of British Columbia, Feb 5-6, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-02-05-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2013-02-05-ubc/index.html">Feb 5-6, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-33.773636,151.112005),
          map: map,
          title: "Macquarie University, Feb 7-8, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-02-07-macquarie/index.html">Macquarie University</a></h5>' +
          '<h6><a href="/bootcamps/2013-02-07-macquarie/index.html">Feb 7-8, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-37.8253285,144.9516212),
          map: map,
          title: "AMOS Conference (Melbourne), Feb 14-15, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-02-14-amos/index.html">AMOS Conference (Melbourne)</a></h5>' +
          '<h6><a href="/bootcamps/2013-02-14-amos/index.html">Feb 14-15, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(47.655965,-122.309377),
          map: map,
          title: "University of Washington, Feb 25-26, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-02-25-uwash/index.html">University of Washington</a></h5>' +
          '<h6><a href="/bootcamps/2013-02-25-uwash/index.html">Feb 25-26, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8759281,-122.2500418),
          map: map,
          title: "Lawrence Berkeley National Laboratory, March 4-5 and March 6-7, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-03-04-lbl/index.html">Lawrence Berkeley National Laboratory</a></h5>' +
          '<h6><a href="/bootcamps/2013-03-04-lbl/index.html">March 4-5 and March 6-7, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.031441,-78.499356),
          map: map,
          title: "University of Virginia, March 7-8, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-03-07-virginia/index.html">University of Virginia</a></h5>' +
          '<h6><a href="/bootcamps/2013-03-07-virginia/index.html">March 7-8, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(33.900058,35.482727),
          map: map,
          title: "American University of Beirut, March 20-21, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-03-20-aub/index.html">American University of Beirut</a></h5>' +
          '<h6><a href="/bootcamps/2013-03-20-aub/index.html">March 20-21, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.7449488,-111.8042944),
          map: map,
          title: "Utah State University, March 23-24, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-03-23-utahstate/index.html">Utah State University</a></h5>' +
          '<h6><a href="/bootcamps/2013-03-23-utahstate/index.html">March 23-24, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(22.3101,39.1259),
          map: map,
          title: "King Abdullah University of Science and Technology, March 24-25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-03-24-kaust/index.html">King Abdullah University of Science and Technology</a></h5>' +
          '<h6><a href="/bootcamps/2013-03-24-kaust/index.html">March 24-25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.2363584,-110.9495396),
          map: map,
          title: "University of Arizona, April 4-5, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-04-arizona/index.html">University of Arizona</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-04-arizona/index.html">April 4-5, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.524789,-0.133578),
          map: map,
          title: "University College London, April 4 and 8, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-04-ucl/index.html">University College London</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-04-ucl/index.html">April 4 and 8, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-33.929492,18.865391),
          map: map,
          title: "Stellenbosch University, April 8-9, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-08-stellenbosch/index.html">Stellenbosch University</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-08-stellenbosch/index.html">April 8-9, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.467102,-2.233958),
          map: map,
          title: "EGI Forum, Manchester, April 11, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-11-egi/index.html">EGI Forum, Manchester</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-11-egi/index.html">April 11, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8695,-122.258949),
          map: map,
          title: "University of California Berkeley, April 13-14, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-13-ucb/index.html">University of California Berkeley</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-13-ucb/index.html">April 13-14, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.4783491,-2.2416052),
          map: map,
          title: "University of Manchester, April 18-19, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-18-manchester/index.html">University of Manchester</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-18-manchester/index.html">April 18-19, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.82629,2.34642),
          map: map,
          title: "Telecom ParisTech, April 20-21, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-20-paris/index.html">Telecom ParisTech</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-20-paris/index.html">April 20-21, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.291389,-76.625),
          map: map,
          title: "University of Maryland, Baltimore, April 27-28, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-27-umaryland/index.html">University of Maryland, Baltimore</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-27-umaryland/index.html">April 27-28, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.07718,-89.40399),
          map: map,
          title: "University of Wisconsin - Madison, April 29-30, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-04-29-wisc/index.html">University of Wisconsin - Madison</a></h5>' +
          '<h6><a href="/bootcamps/2013-04-29-wisc/index.html">April 29-30, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(52.33399,4.86305),
          map: map,
          title: "Vrije Universiteit, Amsterdam, May 2-3, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-02-vu/index.html">Vrije Universiteit, Amsterdam</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-02-vu/index.html">May 2-3, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(54.32707,10.18265),
          map: map,
          title: "GEOMAR (Kiel), May 6-7, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-06-geomar/index.html">GEOMAR (Kiel)</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-06-geomar/index.html">May 6-7, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.07141,-77.46427),
          map: map,
          title: "Howard Hughes Medical Institute, May 6-7, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-06-hhmi/index.html">Howard Hughes Medical Institute</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-06-hhmi/index.html">May 6-7, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.42949,-122.17186),
          map: map,
          title: "Stanford University, May 6-7, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-06-stanford/index.html">Stanford University</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-06-stanford/index.html">May 6-7, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.8759281,-122.2500418),
          map: map,
          title: "Lawrence Berkeley National Laboratory, May 9-10, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-09-lbl/index.html">Lawrence Berkeley National Laboratory</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-09-lbl/index.html">May 9-10, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.64712,-79.39430),
          map: map,
          title: "Mozilla Foundation (Toronto), May 9-10, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-09-mozilla/index.html">Mozilla Foundation (Toronto)</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-09-mozilla/index.html">May 9-10, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.759865,-1.258648),
          map: map,
          title: "University of Oxford, May 9-10, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-09-oxford/index.html">University of Oxford</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-09-oxford/index.html">May 9-10, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.54926,-121.76709),
          map: map,
          title: "University of California Davis, May 13-14, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-13-ucdavis/index.html">University of California Davis</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-13-ucdavis/index.html">May 13-14, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(36.00803,-78.92323),
          map: map,
          title: "NESCent, May 16-17, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-16-nescent/index.html">NESCent</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-16-nescent/index.html">May 16-17, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(50.060833,19.932778),
          map: map,
          title: "Jagiellonian University, May 18-19, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-18-krakow/index.html">Jagiellonian University</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-18-krakow/index.html">May 18-19, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(36.00283,-78.93827),
          map: map,
          title: "Duke University, May 20-21, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-20-duke/index.html">Duke University</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-20-duke/index.html">May 20-21, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.03131,-105.2459),
          map: map,
          title: "NCAR, May 23-24, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-23-ucar/index.html">NCAR</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-23-ucar/index.html">May 23-24, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.388889,-72.527778),
          map: map,
          title: "University of Massachusetts Amherst, May 23-24, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-23-umass/index.html">University of Massachusetts Amherst</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-23-umass/index.html">May 23-24, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(53.52345,-113.52600),
          map: map,
          title: "University of Alberta, May 30-31, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-05-30-alberta/index.html">University of Alberta</a></h5>' +
          '<h6><a href="/bootcamps/2013-05-30-alberta/index.html">May 30-31, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(50.937716,-1.395599),
          map: map,
          title: "University of Southampton, June 3-4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-03-southampton/index.html">University of Southampton</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-03-southampton/index.html">June 3-4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.35076,-71.06274),
          map: map,
          title: "Tufts University, June 3-4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-03-tufts/index.html">Tufts University</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-03-tufts/index.html">June 3-4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.789722,-87.599722),
          map: map,
          title: "Data Science for Social Good, June 4-5 and June 17-18, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-04-dssg/index.html">Data Science for Social Good</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-04-dssg/index.html">June 4-5 and June 17-18, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.276765,-122.917957),
          map: map,
          title: "Simon Fraser University, June 6-7, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-06-sfu/index.html">Simon Fraser University</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-06-sfu/index.html">June 6-7, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.887151,-117.246212),
          map: map,
          title: "Salk Institute, June 10-11, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-10-salk/index.html">Salk Institute</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-10-salk/index.html">June 10-11, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.7901128,-87.6007318),
          map: map,
          title: "University of Chicago, June 17-18, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-17-chicago/index.html">University of Chicago</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-17-chicago/index.html">June 17-18, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.3625,-71.085),
          map: map,
          title: "Women in Science and Engineering (Boston), June 24-25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-24-wise/index.html">Women in Science and Engineering (Boston)</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-24-wise/index.html">June 24-25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(30.2835989,-97.7344283),
          map: map,
          title: "SciPy 2013, June 25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-06-25-scipy/index.html">SciPy 2013</a></h5>' +
          '<h6><a href="/bootcamps/2013-06-25-scipy/index.html">June 25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-43.523333,172.581944),
          map: map,
          title: "eResearch New Zealand, July 1-4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-01-christchurch/index.html">eResearch New Zealand</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-01-christchurch/index.html">July 1-4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(35.20859,-97.44566),
          map: map,
          title: "University of Oklahoma, July 1-2, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-01-oklahoma/index.html">University of Oklahoma</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-01-oklahoma/index.html">July 1-2, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(59.9399586,10.7217496),
          map: map,
          title: "University of Oslo, July 3-4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-03-oslo/index.html">University of Oslo</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-03-oslo/index.html">July 3-4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(30.538977502418366,114.32192802429199),
          map: map,
          title: "Wuhan Institute of Virology, July 8-9, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-08-wuhan/index.html">Wuhan Institute of Virology</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-08-wuhan/index.html">July 8-9, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.1663815,-86.526621),
          map: map,
          title: "Indiana University, July 11-12, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-11-indiana/index.html">Indiana University</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-11-indiana/index.html">July 11-12, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.3777431,-2.3263779),
          map: map,
          title: "University of Bath, July 15-16, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-15-bath/index.html">University of Bath</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-15-bath/index.html">July 15-16, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.2283843,-80.4234167),
          map: map,
          title: "Virginia Tech, July 15-16, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-15-vt/index.html">Virginia Tech</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-15-vt/index.html">July 15-16, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.74080,-111.81416),
          map: map,
          title: "CUAHSI Water Data Center, July 16-17, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-16-cuahsi/index.html">CUAHSI Water Data Center</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-16-cuahsi/index.html">July 16-17, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.70522,-86.23531),
          map: map,
          title: "University of Notre Dame, July 18-19, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-18-notredame/index.html">University of Notre Dame</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-18-notredame/index.html">July 18-19, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(47.655,-122.303333),
          map: map,
          title: "University of Washington, July 18-19, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-18-washington/index.html">University of Washington</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-18-washington/index.html">July 18-19, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.443322,-79.943583),
          map: map,
          title: "Carnegie Mellon University, July 27-28, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-07-27-cmu/index.html">Carnegie Mellon University</a></h5>' +
          '<h6><a href="/bootcamps/2013-07-27-cmu/index.html">July 27-28, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(44.968657,-93.27457),
          map: map,
          title: "Ecological Society of America Annual Meeting, Aug 4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-08-04-esa/index.html">Ecological Society of America Annual Meeting</a></h5>' +
          '<h6><a href="/bootcamps/2013-08-04-esa/index.html">Aug 4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.9584551,-95.2432842),
          map: map,
          title: "University of Kansas, Aug 22-23, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-08-22-ku/index.html">University of Kansas</a></h5>' +
          '<h6><a href="/bootcamps/2013-08-22-ku/index.html">Aug 22-23, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.381705,-71.127904),
          map: map,
          title: "Harvard University, August 23-24, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2013-08-23-harvard/">Harvard University</a></h5>' +
          '<h6><a href="/">August 23-24, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.3019199,-90.8733522),
          map: map,
          title: "US Army Engineer Research and Development Center, Aug 27-29, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-08-27-erdc/index.html">US Army Engineer Research and Development Center</a></h5>' +
          '<h6><a href="/bootcamps/2013-08-27-erdc/index.html">Aug 27-29, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.07718,-89.40399),
          map: map,
          title: "University of Wisconsin - Madison, Aug 28-29, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-08-28-wisc/index.html">University of Wisconsin - Madison</a></h5>' +
          '<h6><a href="/bootcamps/2013-08-28-wisc/index.html">Aug 28-29, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.66293,-91.56203),
          map: map,
          title: "University of Iowa, Sept 5-6, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-05-iowa/index.html">University of Iowa</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-05-iowa/index.html">Sept 5-6, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.457971,-2.601474),
          map: map,
          title: "University of Bristol, Sept 12-13, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-12-bristol/index.html">University of Bristol</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-12-bristol/index.html">Sept 12-13, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.020493, -118.281233),
          map: map,
          title: "University of Southern California, Sept 16-17, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://arokem.github.io/2013-09-16-ISI/">University of Southern California</a></h5>' +
          '<h6><a href="/">Sept 16-17, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(39.33272,-76.62327),
          map: map,
          title: "Space Telescope Science Institute, Sept 16-17, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2013-09-16-stsci/">Space Telescope Science Institute</a></h5>' +
          '<h6><a href="/">Sept 16-17, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.79149, -87.60270),
          map: map,
          title: "University of Chicago, Sept 19-20, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://jdblischak.github.io/2013-09-19-chicago/">University of Chicago</a></h5>' +
          '<h6><a href="/">Sept 19-20, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.468889,-80.54),
          map: map,
          title: "University of Waterloo, Sept 21-22, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-21-uwaterloo/index.html">University of Waterloo</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-21-uwaterloo/index.html">Sept 21-22, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.724085,-84.476265),
          map: map,
          title: "Michigan State University, Sept 23-26, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-23-msu/index.html">Michigan State University</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-23-msu/index.html">Sept 23-26, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-34.919159,138.60414),
          map: map,
          title: "Australian Bioinformatics Network: Adelaide, Sep 24-26, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-24-acpfgA/index.html">Australian Bioinformatics Network: Adelaide</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-24-acpfgA/index.html">Sep 24-26, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.261111,-123.253056),
          map: map,
          title: "University of British Columbia, Sept 26-27, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-09-26-ubc/index.html">University of British Columbia</a></h5>' +
          '<h6><a href="/bootcamps/2013-09-26-ubc/index.html">Sept 26-27, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-37.9083,145.138),
          map: map,
          title: "Australian Bioinformatics Network: Melbourne, Oct 1-3, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-10-01-acpfgM/index.html">Australian Bioinformatics Network: Melbourne</a></h5>' +
          '<h6><a href="/bootcamps/2013-10-01-acpfgM/index.html">Oct 1-3, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.84042, 2.31068),
          map: map,
          title: "Institut Pasteur, Oct 03-04, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://jdblischak.github.io/2013-10-03-pasteur/">Institut Pasteur</a></h5>' +
          '<h6><a href="/">Oct 03-04, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-35.27770,149.11853),
          map: map,
          title: "CSIRO/ANU, October 9-10, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2013-10-09-canberra/">CSIRO/ANU</a></h5>' +
          '<h6><a href="/">October 9-10, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.870206, -87.666934),
          map: map,
          title: "University of Illinois at Chicago, Oct 17-18, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://jdblischak.github.io/2013-10-17-uic/">University of Illinois at Chicago</a></h5>' +
          '<h6><a href="/">Oct 17-18, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(51.50066,0.00663),
          map: map,
          title: "Greenwich, England, Oct 24-25, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://swcarpentry.github.io/2013-10-24-greenwich/">Greenwich, England</a></h5>' +
          '<h6><a href="/">Oct 24-25, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.8080777,-73.9635678),
          map: map,
          title: "Columbia University and CUSP, October 25-26, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://justincely.github.io/2013-10-25-columbia/">Columbia University and CUSP</a></h5>' +
          '<h6><a href="/">October 25-26, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.052778,-118.255833),
          map: map,
          title: "Society of Vertebrate Paleontology Annual Meeting, Oct 29, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-10-29-vertpaleo/index.html">Society of Vertebrate Paleontology Annual Meeting</a></h5>' +
          '<h6><a href="/bootcamps/2013-10-29-vertpaleo/index.html">Oct 29, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(50.735788,-3.535033),
          map: map,
          title: "Exeter University, November 14-15, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://chryswoods.github.io/2013-11-14-exeter/">Exeter University</a></h5>' +
          '<h6><a href="/">November 14-15, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(41.526667,-70.663056),
          map: map,
          title: "Woods Hole Scientific Community, Nov 14-15, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="/Users/acabunoc/Projects/sc-site/bootcamps/2013-11-14-whoi/index.html">Woods Hole Scientific Community</a></h5>' +
          '<h6><a href="/bootcamps/2013-11-14-whoi/index.html">Nov 14-15, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-37.7963,144.9614),
          map: map,
          title: "University of Melbourne, Nov 25 & 27/Dec 2 & 4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://damienirving.github.io/2013-11-25-unimelb/">University of Melbourne</a></h5>' +
          '<h6><a href="/">Nov 25 & 27/Dec 2 & 4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(55.921628,-3.174155),
          map: map,
          title: "The University of Edinburgh, Dec 3-4, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://mikej888.github.io/2013-12-03-edinburgh/">The University of Edinburgh</a></h5>' +
          '<h6><a href="/">Dec 3-4, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(38.976734, -76.503296),
          map: map,
          title: "National Socio-Environmental Synthesis Center (SESYNC), Dec 3-6, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://wltrimbl.github.io/2013-12-03-sesync/">National Socio-Environmental Synthesis Center (SESYNC)</a></h5>' +
          '<h6><a href="/">Dec 3-6, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(50.735788,-3.535033),
          map: map,
          title: "Dundee University, Dec 16-17, 2013",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://gvwilson.github.io/2013-12-16-dundee/">Dundee University</a></h5>' +
          '<h6><a href="/">Dec 16-17, 2013</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.07718,-89.40399),
          map: map,
          title: "University of Wisconsin-Madison, Jan 13-14, 2014",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://uw-madison-aci.github.io/2014-01-13-wisc/">University of Wisconsin-Madison</a></h5>' +
          '<h6><a href="/">Jan 13-14, 2014</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(32.301199,-90.871617),
          map: map,
          title: "US Army Engineer Research and Development Center, January 21-22, 2014",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://geocarpentry.github.io/2014-01-21-erdc/">US Army Engineer Research and Development Center</a></h5>' +
          '<h6><a href="/">January 21-22, 2014</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(37.4225, 122.1653),
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(42.361947,-71.090936),
          map: map,
          title: "Massachusetts Institute of Technology, Jan 30 - Feb 1, 2014",
          //icon: openPin,
          visible: true,
        });
        var info_string = '<div class="info-window">' +
          '<h5><a href="http://geocarpentry.github.io/2014-01-30-mit/">Massachusetts Institute of Technology</a></h5>' +
          '<h6><a href="/">Jan 30 - Feb 1, 2014</a></h6>' +
          '</div>';
        set_info_window(map, marker, info_window, info_string);
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
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
        markers.push(marker); // For clustering
        oms.addMarker(marker); // For spiderfying
      
    
      
    
      
    
      
    
      
    
      
    
      
    
      
    
    var mc = new MarkerClusterer(map,markers,mcOptions);
  }

  maps.instructors = function() {
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(25,8),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    info_window   = new google.maps.InfoWindow({}),
    map           = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var markers = [];
    var mcOptions = {
          maxZoom: null,
          gridSize: 25,
          minimumClusterSize: 1
        }
    // Go over all airports to read instructor location
    
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(30.194444,-97.669722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(30.194444,-97.669722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-27.384167,153.1175),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.364167,-71.005),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.364167,-71.005),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.364167,-71.005),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.364167,-71.005),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.3825,-2.718889),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.175278,-76.668333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.175278,-76.668333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.175278,-76.668333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.175278,-76.668333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.012778,2.55),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-43.489167,172.532222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(32.898611,-80.040278),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.039167,-88.278056),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-33.964722,18.601667),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(38.851944,-77.0375),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(38.851944,-77.0375),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.858333,-104.666944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(56.4525,-3.025833),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.212222,-83.353333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(55.95,-3.3725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(55.95,-3.3725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(53.630278,9.988056),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(38.944444,-77.455556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(29.980278,-95.339722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.717222,-86.294167),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.717222,-86.294167),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.795,-73.1),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.050558,-94.233336),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(50.0775,19.784722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(42.778611,-84.587222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.505,0.054167),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.777222,-73.8725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.777222,-73.8725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.777222,-73.8725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.777222,-73.8725),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.148056,-0.190278),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.4775,-0.461389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.4775,-0.461389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.4775,-0.461389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.4775,-0.461389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(51.4775,-0.461389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(53.353611,-2.274722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(53.353611,-2.274722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(53.353611,-2.274722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(39.2975,-94.713889),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(41.785833,-87.752222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-37.673333,144.843333),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.139722,-89.3375),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.139722,-89.3375),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(48.353611,11.785833),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(55.0375,-1.691667),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.721111,-122.220556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(26.195556,127.645833),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(35.393056,-97.600556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(35.393056,-97.600556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(41.979444,-87.904444),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(41.979444,-87.904444),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(48.725278,2.359444),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(60.193889,11.100278),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(60.193889,11.100278),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.491389,-80.232778),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(35.8775,-78.787222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(35.8775,-78.787222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(35.8775,-78.787222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(47.448889,-122.309167),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(47.448889,-122.309167),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.618889,-122.374722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.618889,-122.374722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.618889,-122.374722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.618889,-122.374722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(1.355556,103.987222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(37.361667,-121.928889),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.788333,-111.9775),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(40.788333,-111.9775),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(33.675556,-117.868056),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(50.95,-1.356667),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(50.95,-1.356667),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(38.7475,-90.359722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(38.7475,-90.359722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(48.689722,9.221944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-33.946111,151.177222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-33.946111,151.177222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-33.946111,151.177222),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(45.827778,13.466389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(32.116111,-110.941389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(-23.008056,-47.134444),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(53.309722,-113.579722),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(44.880833,-63.508611),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(45.468056,-73.741389),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(49.195,-123.181944),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.677222,-79.630556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.677222,-79.630556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.677222,-79.630556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.677222,-79.630556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(43.677222,-79.630556),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
        
            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(36.516667,103.621667),
              map: map,
              visible: false // marker not shown directly, just clustered
	        });
    	    markers.push(marker); // For clustering
		
	
    var mc = new MarkerClusterer(map,markers,mcOptions);
  }

  return maps;
})();
