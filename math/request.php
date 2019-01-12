<?php
	$type = $_GET['type'];
	$data = $_GET['data'];

	$f = fopen("test.in", "w");
	fwrite($f, $data);
	fclose($f);

	exec("./test < test.in > test.out");

	$f = fopen("test.out", "r");
	$res = fread($f, filesize("test.out"));
	fclose($f);

	echo $res;
?>
