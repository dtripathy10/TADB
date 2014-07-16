      // In the following example, markers appear when the user clicks on the map.
      // The markers are stored in an array.
      // The user can then click an option to hide, show or delete the markers.
      var map;
      var markers = [];
      var path = [];
      var dstpath =[];
      var pos;
      function initialize() {
        var iitb = new google.maps.LatLng(19.132817711247938, 72.91516542434692);
        var mapOptions = {
              zoom: 11,
              center: iitb,
              mapTypeId: google.maps.MapTypeId.ROADMAP
              //mapTypeId: google.maps.MapTypeId.SATELLITE
            };
        map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
        getsData();

      }

      // Sets the map on all markers in the array.
      function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }


      // Deletes all markers in the array by removing references to them.
      function deleteLastMarker() {
        setAllMap(null);   
      }


      //Getting details of selected source node and sending the all information to server
      var xmlhttp;
      function GetXmlHttpObject() 
      { 
        if (window.XMLHttpRequest) 
        { // code for IE7+, Firefox, Chrome, Opera, Safari 
            return new XMLHttpRequest(); 
        } 
        if (window.ActiveXObject) 
        { // code for IE6, IE5
          return new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        return null;
      }

      //For getting All Sites details
      function getsData()
      {
        xmlhttp=GetXmlHttpObject();
        if (xmlhttp==null) 
        { 
            alert ("Your browser does not support XMLHTTP!");
          return; 
        }
          var url="getsource.php"; 
          xmlhttp.onreadystatechange=getsDataResponse;
          xmlhttp.open("GET",url,true); 
          xmlhttp.send(null); 
      }
      function getsDataResponse() 
      { 
        if (xmlhttp.readyState==4)
        {
         /* var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({content: contentString});*/

          var jsonData = JSON.parse(xmlhttp.responseText);
          for (var data in jsonData) 
          {
            var latitude = jsonData[data]["Latitude"];
            var longitude = jsonData[data]["Longitude"];
            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+" "+latitude+" "+longitude
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
            var infowindow = new google.maps.InfoWindow({content: contentString});
            var latlng = new google.maps.LatLng(latitude,longitude);
            var marker = new google.maps.Marker({
                  position: latlng,
                    map: map,
                    title: ""+latlng,
                    Icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"//blue/yellow/purple/green
                  });
      
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', function(event) {
              console.log(event.latLng);
              infowindow.open(map,marker);
            });

          }
          setAllMap(map);
        }
      }