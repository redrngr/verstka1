<?php
function connect($server, $login, $pass, $table) {
	$conn = mysqli_connect($server, $login, $pass, $table);
	if (!$conn) {
		die("Connect failed ".mysql_connect_error());
	}
	return $conn;
}

function init() {
	$conn = connect("verstka1", "root", "root", "pets_db");
	$sql = "SELECT * FROM pets";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)) {
			$out[$row['id']] = $row;
		}
		echo json_encode($out);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}

function selectItem() {
	$conn = connect("localhost", "root", "root", "pets_db");
	$id = $_POST['iid'];
	$sql = "SELECT * FROM pets WHERE id = '$id'";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
		$row = mysqli_fetch_assoc($result);
		echo json_encode($row);
	} else {
		echo "0";
	}
	mysqli_close($conn);
}

function updateItems() {
	$conn = connect("localhost", "root", "root", "pets_db");
	$id = $_POST['id'];
	$name = $_POST['iname'];
	$img = $_POST['iimg'];
	$breed = $_POST['ibreed'];
	$desc = $_POST['idesc'];
	$age = $_POST['iage'];
	$inoc = $_POST['iinoc'];
	$dis = $_POST['idis'];
	$per = $_POST['iper'];
	$sql = "UPDATE pets SET name = '$name', image = '$img', breed = '$breed', description = '$desc', age = '$age', inoculation = '$inoc', diseases = '$dis', peresites = '$per'  WHERE id = '$id' ";
	if (mysqli_query($conn, $sql)) {
		echo 1;
	} else {
		echo "Error updating record " . mysqli_error($conn);
	}
	mysqli_close($conn);
	writeJSON();
}

function writeJSON() {
	$conn = connect("localhost", "root", "root", "pets_db");
	$sql = "SELECT * FROM `pets`";
	$result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)) {
			$out[$row['id']] = $row;
		}
		file_put_contents('../pets.json', json_encode($out));
	} else {
		echo "0";
	}
	mysqli_close($conn);
}

function newItems() {
	$conn = connect("127.0.0.1", "root@localhost", "root", "pets_db");
	$id = $_POST['id'];
	$name = $_POST['iname'];
	$img = $_POST['iimg'];
	$breed = $_POST['ibreed'];
	$desc = $_POST['idesc'];
	$age = $_POST['iage'];
	$inoc = $_POST['iinoc'];
	$dis = $_POST['idis'];
	$per = $_POST['iper'];
	$sql = "INSERT INTO `pets` (`name`, `img`, `breed`, `description`, `age`, `inoculation`, `diseases`, `peresites`) VALUES ('$name', '$img', '$breed', '$desc', '$age', '$inoc', '$dis', '$per')";
	if (mysqli_query($conn, $sql)) {
		echo 1;
	} else {
		echo "Error adding record " . mysqli_error($conn);
	}
	mysqli_close($conn);
	writeJSON();
}

