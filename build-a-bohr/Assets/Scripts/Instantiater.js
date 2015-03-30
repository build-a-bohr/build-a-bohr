#pragma strict

var protons : Transform;
var number = ChangeAtoms.protons;
var prevnumber = -1;
var range = 0;

function Update() {
	number = ChangeAtoms.protons;

	if(prevnumber != number) {	
		Debug.Log(number);

		Change();
	}
}

function Change() {
	Debug.Log("Change()");

	if(number > 0 && number <= 45) {
		range = 1.00;
	}
	if(number > 45 && number < 93) {
		range = 3.00;
	}
	if(number > 93 && number <= 118) {
		range = 4.00;
	}
	
	if(Destroy()) {
		Debug.Log("Destroy");
	}
	
	if(number == 0) {
		number = ChangeAtoms.protons;
	}
	
	if(number > 0 && number <= 118) {			
		Debug.Log("Create"); // check if actually happening
		Create();
		prevnumber = ChangeAtoms.protons;
	}
}

function Create() {
	for(var y = 0; y < number; y++) {
		Instantiate(protons, Vector3 (Random.Range(0.0, range), Random.Range(0.0, range), 0), Quaternion.identity);
	}
}

function Destroy() {
	var gos = GameObject.FindGameObjectsWithTag("proton");
	
	if(gos.Length > 0) {
		for(var i = 0; i < gos.Length; i++) {
			Destroy(gos[i]);
		}
		return true;
	} else {
		return false;
	}
}