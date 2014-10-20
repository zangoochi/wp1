<!DOCTYPE html>
<html>
<head> 
<link rel="stylesheet" type="text/css" href="index.css">
<link rel="stylesheet" type="text/css" href="head.css">
<link rel="stylesheet" type="text/css" href="aside.css">
<link rel="stylesheet" type="text/css" href="nav.css">

<meta charset="utf-8"/>
<title>Zach's Homepage</title> 

</head>
<body>

<table>
<tr>
<td colspan = "3">
	<?php include 'head.php' ?>
	</td>
</tr>
<tr>
<td colspan="3">
<iframe name="iframe_a"></iframe>
</td>
</tr>
<tr>
	<td class="leftbox">
		<?php include 'nav.php';?>
	</td>

	<td class="about">
		<h2>About Zach Montgomery</h2>
			<div class="sectionArticle">
				<p></p><br/>
				<p><img id="myPicture" src="pictures/me.jpg" alt="Picture of Zach Montgomery" > The picture is one of my high school graduation pictures from 4 years ago.</p>
				<p>My name is Zach Montgomery and I attend Kent State University. I am attending the college of arts and science. I am a senior this year and will be graduating in May with a degree in computer science. </p> <br/>
			</div>
	</td>

	<td class="aside">
			<p>Web Programming I Course Pages </p>
			<ul>
				<?php include('aside.php') ?>
			</ul>
	</td>
	</tr>

	<tr>
    <td colspan = "3">
      <footer>End-of-page- Footer</footer>
    </td>
</table>

</body>
</html>