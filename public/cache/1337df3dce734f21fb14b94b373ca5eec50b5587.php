<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
		<title><?php echo e($name); ?></title>

		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="../css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
		<link href="../css/styles.css" type="text/css" rel="stylesheet" media="screen,projection"/>
	</head>
	<body>
		<header>
			<nav class="cyan lighten-2">
				<div class="nav-wrapper">
		<div class="container">
		<a href="#!" class="brand-logo">Matcha</a>
		<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
		<ul class="right hide-on-med-and-down">
		<li><a href="#"><?php echo e($value); ?></a></li>
		<li><a href="#">Login</a></li>
		<li><a href="#">Register</a></li>
		</ul>
		</div>
		</div>
			</nav>

			<ul class="sidenav cyan lighten-5" id="mobile-demo">
				<li><a href="#"><?php echo e($value); ?></a></li>
				<li><a href="#">Login</a></li>
				<li><a href="#">Register</a></li>
			</ul>
		</header>
		<main>
		<div class="parallax-container">
			<div class="parallax"><img src="../images/paralax-1.jpeg" alt="parallax-1"></div>
		</div>
		<div class="section  cyan lighten-4" style="height: 40em">
			<div class="row container">
				<h2 class="header">Parallax</h2>
				<p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
			</div>
		</div>
		<div class="parallax-container">
			<div class="parallax"><img src="../images/paralax-2.jpg" alt="parallax-2"></div>
		</div>
		</main>
		<footer class="page-footer cyan lighten-2">
			<div class="container">
				<div class="row">
					<div class="col l6 s12">
						<h5 class="white-text">Footer Content</h5>
						<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
					</div>
					<div class="col l4 offset-l2 s12">
						<h5 class="white-text">Links</h5>
						<ul>
							<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
							<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright">
				<div class="container">
					© 2018 Copyright Text
					<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
				</div>
			</div>
		</footer>






		<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<script src="../js/materialize.js"></script>
		<script>
			$(document).ready(function(){
				$('.sidenav').sidenav();
			});
			$(document).ready(function(){
				$('.parallax').parallax();
			});
		</script>
	</body>
</html>
