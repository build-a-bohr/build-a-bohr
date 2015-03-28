#pragma strict

var numberAtom = 0;

function Start() {
	
}

function Update() {
	numberAtom = ChangeAtoms.atoms;
 	if(numberAtom == 3){
		gameObject.SetActive(false);
	}
}