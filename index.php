<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Twitch TV</title>
		<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
		<!-- jQuery library (served from Google) -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>
		<!--framer-->
		<link rel="stylesheet" href="framer/jquery.Framer.css">
	</head>
	<body>
		<div id="wrap">
			<div id="header">
				<div id="filter">
					<img id="openFilter" src="images/filter.png" alt="filter open">
					<div class="filterNav">
						<img id="closeFilter" src="images/close.png" alt="filter close">
						<ul>
							<li class="english"><label>English<input type="checkbox" name="language" value="en" id="en" class="category"></label></li>
							<li class="german"><label>German<input type="checkbox" name="language" value="de" id="de" class="category"></label></li>
							<li class="croatian"><label>Croatian<input type="checkbox" name="language" value="hr" id="hr" class="category"></label></li>
							<li class="italian"><label>Italian<input type="checkbox" name="language" value="it" id="it" class="category"></label></li>
						</ul>
					</div>
				</div>
				<div id="menu">
					<img id="openMenu" src="images/menu.png" alt="menu open">
					<div class="menuNav">
						<img id="closeMenu" src="images/close.png" alt="menu close">
						<ul id="NavMenu">
							<li class="League"><label>League of Legends<input type="checkbox" name="game" value="League" class="game" id="League"></label></li>
							<li class="Dota"><label>Dota 2<input type="checkbox" name="game" value="Dota" class="game" id="Dota"></label></li>
							<li class="Hearthstone"><label>Hearthstone<input type="checkbox" name="game" value="Hearthstone:" class="game" id="Hearthstone:"></label></li>
							<li class="Counter-Strike"><label>Counter-Strike<input type="checkbox" name="game" value="Counter-Strike:" class="game" id="Counter-Strike:"></label></li>
							<li class="Call"><label>Call of Duty<input type="checkbox" name="game" value="Call" class="game" id="Call"></label></li>
							<li class="Minecraft"><label>Minecraft<input type="checkbox" name="game" value="Minecraft" class="game" id="Minecraft"></label></li>
							<li class="Overwatch"><label>Overwatch<input type="checkbox" name="game" value="Overwatch" class="game" id="Overwatch"></label></li>
							<li class="Xcom"><label>Xcom 2<input type="checkbox" name="game" value="Xcom" class="game" id="Xcom"></label></li>
							<li class="Starcraft"><label>Starcraft II<input type="checkbox" name="game" value="Starcraft II" class="game" id="Starcraft"></label></li>
						</ul>
					</div>
				</div>
				<div class="clear"> </div>
			</div>
			<div id="head">
				<img src="images/logo.png" alt="logo twitch tv">
			</div>
			<div id="main">
				<div id="main-tiles" class="wrapper"> </div>
				<div class="clear"> </div>
				<div id="button">
					<button id="showBtn" class="button">Load<br />more</button>
				</div>
			</div>
		</div>
		<script src="includes/nav.js"></script>
		<script src="includes/category_list.js"></script>
		<script src="includes/list.js"></script>	
	</body>
</html>