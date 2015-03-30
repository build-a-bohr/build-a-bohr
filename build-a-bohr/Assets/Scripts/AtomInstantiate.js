#pragma strict

// placeholder variable as to not overwrite the global one
var numberAtom = 0;

function Start() {
	
}

// sets the placeholder equal to global and if condition is met does something involving atoms, and no cats :(
function Update() {
	//numberAtom = ChangeAtoms.atoms;
 	if(numberAtom == 3) {
		gameObject.SetActive(false);
	}
}