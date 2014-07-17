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
	  var url="/accident"; 
	  xmlhttp.onreadystatechange=getsDataResponse;
	  xmlhttp.open("GET",url,true); 
	  xmlhttp.send(null); 
}

function getsDataResponse() { 
    if (xmlhttp.readyState==4) {
      var dictionary = JSON.parse(xmlhttp.responseText);
      var x = 0;
      for (row in dictionary) {
		row1 = "<tr><td>"+dictionary[row].id+"</td><td>"+dictionary[row].date_of_accident+"</td><td>"+dictionary[row].police_station+"</td><td>"+ dictionary[row].source_vehicle_type+"</td><td>"+ dictionary[row].destination_vehicle_type+"</td><td>"+ dictionary[row].gender_age+"</td><td>"+ dictionary[row].act+"</td><td>"+ dictionary[row].fatal_number+"</td><td>"+ dictionary[row].destination_plate_no+"</td><td>"+ dictionary[row].longitude+"</td><td>"+ dictionary[row].location+"</td><td>"+ dictionary[row].time_of_accident+"</td><td>"+ dictionary[row].latitude+"</td><td>"+ dictionary[row].source_plate_no+"</td></tr>";
		if(x == 1000) {
			break;
		}
		x++;
		$('#xyz tbody').append(row1);
	  }
	  $('.btn1').click(function(){
 	if ( $(this).text() != "Completed") {
 		$(this).addClass("btn-danger");
    	$(this).text("Completed");
 		}else {
 			$(this).removeClass("btn-danger");
    		$(this).text("Progress");
 		}

});

$('.btn2').click(function(){
 	

});


 $('#xyz').dataTable( {
			        "bSort": false,      // Disable sorting
					"iDisplayLength": 20,   //records per page
				 	"sDom": "t<'row row1'<'col-md-6'i><'col-md-'p>>",
					"sPaginationType": "bootstrap",
					"cssStyle": "light-theme",
					"pagingType": "scrolling"
				} );
    }

}




