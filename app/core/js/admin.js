function init() {
	$.post(
		"core/core.php",
		{
			"action" : "init"
		},
		showItems
	);
}

function showItems(data) {
	console.log(data);
	data = JSON.parse(data);
	let out = '<select>';
	out += '<option data-id="0">New item</option>';
	for (let id in data) {
		out += `<option data-id="${id}">${data[id].name}</option>`;
	}
	out += '</select>';
	$('.items_out').html(out);
	selectItems();
	$('.items_out select').on('change', selectItems);
}

function selectItems() {
	let id = $('.items_out select option:selected').attr('data-id');
	$.post(
		"core/core.php",
		{
			"action" : "selectItem",
			"iid" : id
		},
		function(data) {
			data = JSON.parse(data);
			$('#iid').val(data.id);
			$('#iname').val(data.name);
			$('#iimg').val(data.img);
			$('#ibreed').val(data.breed);
			$('#idesc').val(data.description);
			$('#iage').val(data.age);
			$('#iinoc').val(data.inoculation);
			$('#idis').val(data.diseases);
			$('#iper').val(data.peresites);
		}
	);
}

function saveToDb() {
	let id = $('#iid').val();
	if (id != "") {
		$.post(
		"core/core.php",
		{
			"action" : "updateItems",
			"id" : id,
			"iname" : $('#iname').val(),
			"iimg" : $('#iimg').val(),
			"ibreed" : $('#ibreed').val(),
			"idesc" : $('#idesc').val(),
			"iage" : $('#iage').val(),
			"iinoc" : $('#iinoc').val(),
			"idis" : $('#idis').val(),
			"iper" : $('#iper').val()
		},
		function(data) {
			if (data == 1) {
				init();
				alert("Updated");
			} else {
			console.log(data);
			}
		})
	} else {
		$.post(
		"core/core.php",
		{
			"action" : "newItems",
			"id" : 0,
			"iname" : $('#iname').val(),
			"iimg" : $('#iimg').val(),
			"ibreed" : $('#ibreed').val(),
			"idesc" : $('#idesc').val(),
			"iage" : $('#iage').val(),
			"iinoc" : $('#iinoc').val(),
			"idis" : $('#idis').val(),
			"iper" : $('#iper').val()
		},
		function(data) {
			if (data == 1) {
				init();
				alert("Added");
			} else {
			console.log(data);
			}
		})
	}
}

$(document).ready(function () {
	init();
	$('.add-to-db').on('click', saveToDb);
});