/*list of streams*/
$.getJSON("https://api.twitch.tv/kraken/streams").done(function(data) {

		$.each(data.streams, function() {
			$.each(this, function(name, value) {
				
				if(name === "game") {
					
					$gname = value;
				} else if (name === "channel") {
					
					$dname = value.display_name;
					$language = value.language;
					$logo = value.logo;
				} else if(name === "viewers") {
					
					$viewers = value;
				} else if(name === "preview") {
					
					$img = value.large;
				} else if(name === "created_at") {
					
					$created= value;
				}
			});
			var $title = "<span class='streamer-name'>" + $dname + "</span>";
			var $game = "<span class='game'>" + $gname + "</span>";
			var $pic = "<img src=" + $img + ">";
			var $image = "<img src=" + $logo + " class='backup_picture'>";
			var $date = "<span class='date'>" + $created + "</span>";
			var $lang = "<span>" + $language + "</span>";
			var $view = "<span class='streamer-viewers'>" + $viewers + "</span>";
			
                             var $tile = "<div class='list " + $gname + "' data-tag='" + $language + "' " + "data-id='" + $gname + "' " + "data-category='" + $gname + " " + $language + "" + "'><a class='framer' data-framer-width='806' data-framer-height='491' href='http://www.twitch.tv/" + $dname + "'><div class='profileInfo'><p>" +  $image + $title + "</p></div>" + $pic + "<div class='game-views'>" + $game + "<br/>" + $view + $date +  "</div></a></div>";
			$('#main-tiles').append($tile);
				
		});
		
		$.getScript("framer/jquery.Framer.js", function(){
			
			$('.framer').Framer();
		});
		
		
		/*if image is not find, load backup image*/
		$(document).ready(function() {
			
			$(".backup_picture").error(function(){
				
				$(this).attr('src', './images/noimage.jpg');
			});
		});
	
		
		/*load more*/
	   $(document).ready(function() {
	   	
	   	$(".list").slice(0, 9).show(); // select the first 9
	   	$("#showBtn").click(function(e){ // click event for load more
	   		
	   		e.preventDefault();
	   		$(".list:hidden").slice(0, 9).show(); // select next 9 hidden divs and show them
	   		if($(".list:hidden").length == 0){ // check if any hidden divs still exist
	   			
	   			$("#showBtn").hide();
	   		}
	   	});
	   });
	});
/*end list of streams*/