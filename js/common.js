function pureCssDropdown(el){
	this.dropdown = document.getElementById(el);
	var dropdown = this.dropdown;
	var dropdownTitle = dropdown.getElementsByTagName("input")[0];
	var dropdownList = dropdown.getElementsByTagName("ul")[0];
	var dropdownListItem = dropdownList.getElementsByTagName("li");
	var allDropdown = document.querySelectorAll(".pure-css-dropdown");
	dropdown.onclick = function(){
		window.event ? window.event.cancelBubble = true : e.stopPropagation();
		if (dropdownList.style.display == "block") {
			dropdown.className = "pure-css-dropdown";
			dropdownList.style.display = "none";
		}else {
			for (var i = 0; i < allDropdown.length; i++) {
				allDropdown[i].getElementsByTagName("ul")[0].style.display = "none";
				allDropdown[i].className = "pure-css-dropdown";
			}
			dropdownList.style.display = "block";
			dropdownList.className = "animation";
			dropdown.className = "pure-css-dropdown pure-css-dropdown-up";
		}
	}
	document.onclick = function (){
		for (var i = 0; i < allDropdown.length; i++) {
			allDropdown[i].getElementsByTagName("ul")[0].style.display = "none";
			allDropdown[i].className = "pure-css-dropdown";
		}
	}
	function selected(){
		for (var i = 0; i < dropdownListItem.length; i++) {
			dropdownListItem[i].onclick = function(){
				dropdownTitle.value = this.innerHTML;
			}
		}
	}
	selected()
}