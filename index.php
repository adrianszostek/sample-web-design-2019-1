<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Sample Page</title>
		<link rel="stylesheet" type="text/css" href="_tech/theme.css" />
		<link rel="stylesheet" type="text/css" href="_tech/components.css" />
		<link rel="stylesheet" type="text/css" href="_tech/general.css" />
		<link rel="stylesheet" type="text/css" href="_tech/main.css" />
		<script src="_tech/jquery.js"></script>
		<script src="_tech/jquery.bez.js"></script>
		<script src="_tech/prepend.js"></script>
		<link rel="icon" href="_favicon.png" type="image/png">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body class="home dark">
		<?php include("_tech/SVGKit.php"); ?>


		<header>
			<h2>Web Launcher (early version)</h2>
			<nav class="nav_home">
				<a id="theme" name-SVGKit="svg_theme">Light theme</a>
			</nav>
		</header>
		<section id="launcher">
				<?php include("Web Launcher.php"); ?>
		</section>


		<header>
			<h2>Cards</h2>
		</header>
		<section id="cards">
			<figure class="unpacked maxi" name-color-palette="polar">
				<?php include("Unpacked.php"); ?>
			</figure>
			<figure class="initiative semi" name-color-palette="azure">
				<?php include("card-1.php"); ?>
			</figure>
			<figure class="initiative semi" name-color-palette="amber">
				<?php include("card-2.php"); ?>
			</figure>
			<figure class="initiative semi" name-color-palette="ultramarine">
				<?php include("card-3.php"); ?>
			</figure>
			<figure class="initiative semi" name-color-palette="red">
				<?php include("card-4.php"); ?>
			</figure>
			<figure class="initiative semi" name-color-palette="avocado">
				<?php include("card-5.php"); ?>
			</figure>
			<a href="#" class="semi">
				<header style="background-image: url('_covers/components.svg'); ">
					<h2>Components</h2>
				</header>
			</a>
			<a href="#" class="semi">
				<header style="background-image: url('_covers/dev.svg'); ">
					<h2>Dev mode</h2>
				</header>
			</a>
		</section>
		
	</body>
	<script src="_tech/append.js"></script>
</html>
