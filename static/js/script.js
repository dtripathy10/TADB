// For Common entry
$(document).ready(function(){
	$(document).click(function(){
		$("#ajax_response").fadeOut('slow');
	});
	$("#keyword").focus();
	var offset = $("#keyword").offset();
	var width = $("#keyword").width()-2;
	//$("#ajax_response").css("left",offset.left); 
	$("#ajax_response").css("width",width);
	$("#keyword").keyup(function(event){
		 //alert(event.keyCode);
		 var keyword = $("#keyword").val();
		 if(keyword.length)
		 {
			 if(event.keyCode != 40 && event.keyCode != 38 && event.keyCode != 13)
			 {
				 $("#loading").css("visibility","visible");
				 $.ajax({
				   type: "POST",
				   url: "getsource.php",
				   data: "data="+keyword,
				   success: function(msg){	
					if(msg != 0)
					  $("#ajax_response").fadeIn("slow").html(msg);
					else
					{
					  $("#ajax_response").fadeIn("slow");	
					  $("#ajax_response").html('<div style="text-align:left;">No Matches Found</div>');
					}
					$("#loading").css("visibility","hidden");
				   }
				 });
			 }
			 else
			 {
				switch (event.keyCode)
				{
				 case 40:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.next().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:first").addClass("selected");
					 }
				 break;
				 case 38:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.prev().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:last").addClass("selected");
				 }
				 break;
				 case 13:
					$("#ajax_response").fadeOut("slow");
					$("#keyword").val($("li[class='selected'] a").text());
				 break;
				}
			 }
		 }
		 else
			$("#ajax_response").fadeOut("slow");
	});
	$("#ajax_response").mouseover(function(){
		$(this).find("li a:first-child").mouseover(function () {
			  $(this).addClass("selected");
		});
		$(this).find("li a:first-child").mouseout(function () {
			  $(this).removeClass("selected");
		});
		$(this).find("li a:first-child").click(function () {
			  $("#keyword").val($(this).text());
			  $("#ajax_response").fadeOut("slow");
		});
	});
});

// For Source
$(document).ready(function(){
	$(document).click(function(){
		$("#sajax_response").fadeOut('slow');
	});
	$("#skeyword").focus();
	var offset = $("#skeyword").offset();
	var width = $("#skeyword").width()-2;
	$("#sajax_response").css("left",offset.left); 
	$("#sajax_response").css("width",width);
	$("#skeyword").keyup(function(event){
		 //alert(event.keyCode);
		 var skeyword = $("#skeyword").val();
		 if(skeyword.length)
		 {
			 if(event.keyCode != 40 && event.keyCode != 38 && event.keyCode != 13)
			 {
				 $("#loading").css("visibility","visible");
				 $.ajax({
				   type: "POST",
				   url: "getsource.php",
				   data: "data="+skeyword,
				   success: function(msg){	
					if(msg != 0)
					  $("#sajax_response").fadeIn("slow").html(msg);
					else
					{
					  $("#sajax_response").fadeIn("slow");	
					  $("#sajax_response").html('<div style="text-align:left;">No Matches Found</div>');
					}
					$("#loading").css("visibility","hidden");
				   }
				 });
			 }
			 else
			 {
				switch (event.keyCode)
				{
				 case 40:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.next().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:first").addClass("selected");
					 }
				 break;
				 case 38:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.prev().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:last").addClass("selected");
				 }
				 break;
				 case 13:
					$("#sajax_response").fadeOut("slow");
					$("#skeyword").val($("li[class='selected'] a").text());
				 break;
				}
			 }
		 }
		 else
			$("#sajax_response").fadeOut("slow");
	});
	$("#sajax_response").mouseover(function(){
		$(this).find("li a:first-child").mouseover(function () {
			  $(this).addClass("selected");
		});
		$(this).find("li a:first-child").mouseout(function () {
			  $(this).removeClass("selected");
		});
		$(this).find("li a:first-child").click(function () {
			  $("#skeyword").val($(this).text());
			  $("#sajax_response").fadeOut("slow");
		});
	});
});

// For Destination
$(document).ready(function(){
	$(document).click(function(){
		$("#dajax_response").fadeOut('slow');
	});
	$("#dkeyword").focus();
	var offset = $("#dkeyword").offset();
	var width = $("#dkeyword").width()-2;
	//$("#dajax_response").css("left",offset.left); 
	$("#dajax_response").css("width",width);
	$("#dkeyword").keyup(function(event){
		 //alert(event.keyCode);
		 var dkeyword = $("#dkeyword").val();
		 if(dkeyword.length)
		 {
			 if(event.keyCode != 40 && event.keyCode != 38 && event.keyCode != 13)
			 {
				 $("#loading").css("visibility","visible");
				 $.ajax({
				   type: "POST",
				   url: "getsource.php",
				   data: "data="+dkeyword,
				   success: function(msg){	
					if(msg != 0)
					  $("#dajax_response").fadeIn("slow").html(msg);
					else
					{
					  $("#dajax_response").fadeIn("slow");	
					  $("#dajax_response").html('<div style="text-align:left;">No Matches Found</div>');
					}
					$("#loading").css("visibility","hidden");
				   }
				 });
			 }
			 else
			 {
				switch (event.keyCode)
				{
				 case 40:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.next().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:first").addClass("selected");
					 }
				 break;
				 case 38:
				 {
					  found = 0;
					  $("li").each(function(){
						 if($(this).attr("class") == "selected")
							found = 1;
					  });
					  if(found == 1)
					  {
						var sel = $("li[class='selected']");
						sel.prev().addClass("selected");
						sel.removeClass("selected");
					  }
					  else
						$("li:last").addClass("selected");
				 }
				 break;
				 case 13:
					$("#dajax_response").fadeOut("slow");
					$("#dkeyword").val($("li[class='selected'] a").text());
				 break;
				}
			 }
		 }
		 else
			$("#dajax_response").fadeOut("slow");
	});
	$("#dajax_response").mouseover(function(){
		$(this).find("li a:first-child").mouseover(function () {
			  $(this).addClass("selected");
		});
		$(this).find("li a:first-child").mouseout(function () {
			  $(this).removeClass("selected");
		});
		$(this).find("li a:first-child").click(function () {
			  $("#dkeyword").val($(this).text());
			  $("#dajax_response").fadeOut("slow");
		});
	});
});