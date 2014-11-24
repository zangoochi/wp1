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
	<td class="leftbox">
		<?php include 'nav.php' ?>
	</td>

	<td class="about">
		<iframe name="iframe_a" src="about.php"></iframe>
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