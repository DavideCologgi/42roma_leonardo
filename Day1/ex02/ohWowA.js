function changeName() {
	var curr_name = document.getElementById("name");
	curr_name.innerText = "Construction site Elder";
}

function changePhoto() {
	var curr_photo = document.getElementById("photo_img");
	curr_photo.src = "https://images2-corrieredelveneto.corriereobjects.it/methode_image/2017/09/20/Treviso%20Belluno/Foto/anziani_cantieri.jpg";
}

function changeNote() {
	var curr_note = document.getElementById("note");
    curr_note.innerText = "We'll meet at the next 42 site";
}

function clone_Card() {
    var card = document.querySelector("#card");
    var clone = card.cloneNode(true);
	document.querySelector(".container").appendChild(clone);
}