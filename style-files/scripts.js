// This is used to control the Magic-Y menu
// Toggle Layer style for left property
function togLyr (el, status) { 
    var yale = (status == 1) ? "0" : "-999em";
    document.getElementById(el).style.left = yale;
}


// goToSection script for ITS Gateways menu
function toggleGTS(state) {
	if (document.getElementById) {
		var gtsLink = document.getElementById("gtsLink");
		gtsLink.setAttribute("href", "#");
		var menu = document.getElementById("goToSectionBox").firstChild;
		while (menu.nodeType != 1) {
			menu = menu.nextSibling;
		}
		setElementClass(gtsLink, state);
		setElementClass(menu, state);
		if (document.getElementById("searchType")) {
			if (state == "active") { 
				document.getElementById("searchType").style.visibility = "hidden";
			} else {
				document.getElementById("searchType").style.visibility = "visible";
			}
		}
	}
}

function getElementClass(element) {
	if (element.getAttribute("class")) {
		return element.getAttribute("class");
	} else if (element.getAttribute("className")) {
		return element.getAttribute("className");
	}
}

function setElementClass(element, classValue) {
	if (element.setAttribute("class", classValue)) {
		element.setAttribute("class", classValue);
	} else if (element.setAttribute("className", classValue)) {
		element.setAttribute("className", classValue);
	}
}

//Toggle Script
//Allows hide/unhide functionality of ID elements
//Added 4-19-07 by Vincent Massaro
function toggle(elementID){
var target1 = document.getElementById(elementID)
if (target1.style.display == 'none') {
target1.style.display = 'block'
} else {
target1.style.display = 'none'
}
}

function showall(elementID){
var target1 = document.getElementById(elementID)
if (target1.style.display == 'none') {
target1.style.display = 'block'
} else if (
target1.style.display = 'block'
)
target1.style.display = 'block'
}

function hideall(elementID){
var target1 = document.getElementById(elementID)
if (target1.style.display == 'block') {
target1.style.display = 'none'
} else if (
target1.style.display = 'none'
)
target1.style.display = 'none'
}

//Jump drop-down menu used in /its/help/
//Added 5-24-07 by Vincent Massaro
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}