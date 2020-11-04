function changeColor(inputId, fondId) {
	let color = document.getElementById(inputId).value;
	document.getElementById(fondId).style.fill = color;
}
