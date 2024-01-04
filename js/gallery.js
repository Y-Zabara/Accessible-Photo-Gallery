/*Name this external file gallery.js*/

function upDate(previewPic){

    let display = document.getElementById("image");
    display.innerHTML = previewPic.alt;
    display.style.backgroundImage = "url('" + previewPic.src + "')";
	}

	function unDo(){
    let display = document.getElementById("image");
    display.innerHTML="Hover over an image below to display here.";
		display.style.background="#8e68ff";
	}

function addTabIndexAttributes() {
    let images = document.getElementsByClassName("preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", 0);
    }
}