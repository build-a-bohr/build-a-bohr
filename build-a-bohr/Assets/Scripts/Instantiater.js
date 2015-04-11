#pragma strict

var TOTAL_NUM_ELEMENTS = 118; // const?

var protons : Transform;
var neutrons : Transform;
var numProtons = ChangeAtoms.protons;
var numNeutrons = ChangeAtoms.neutrons;
var prevNumProtons = 0;
var prevNumNeutrons = 0;
var range = 0;

function Update() {
	numProtons = ChangeAtoms.protons;
	numNeutrons = ChangeAtoms.neutrons;


	if(numProtons != prevNumProtons && numProtons != 0 && numProtons <= TOTAL_NUM_ELEMENTS) {
		Debug.Log("numProtons: " + numProtons);

		Changer();
	} 
	
	if(numNeutrons != prevNumNeutrons && numNeutrons != 0){
	 Changer();
	}
	
	else if(numProtons > TOTAL_NUM_ELEMENTS && numNeutrons > TOTAL_NUM_ELEMENTS ) {
		Destroyer("proton");
		
	}
}

function Changer() {
	Debug.Log("Changer()");

	if(numProtons > 0 && numProtons <= 20 && numNeutrons < 25) {
		range = 0.50;
	}
	if(numProtons > 0 && numProtons <= 20 && numNeutrons > 25) {
	}
	if(numProtons > 20 && numProtons <= 45){
	 range = 0.75;
	} 
	if(numProtons > 45 && numProtons < 93) {
		range = 0.85;
	}
	if(numProtons > 93 && numProtons <= 118) {
		range = 2.00;
	}
	
	//Destroyer("proton");
	
	if(numProtons == 0) {
		numProtons = ChangeAtoms.protons;
	}
	
	if(numNeutrons == 0) {
		numNeutrons = ChangeAtoms.neutrons;
	}
	
	if(numProtons > 0 && numProtons <= TOTAL_NUM_ELEMENTS) {			
		CreatorP();
		prevNumProtons = ChangeAtoms.protons;
	}
	if(numNeutrons > 0 && numNeutrons <= TOTAL_NUM_ELEMENTS) {			
		CreatorN();
		prevNumNeutrons = ChangeAtoms.neutrons;
		
	}
}

// allow for type of particle to be passed in
// try to eliminate blank spaces between protons, instantiate objects touching other objects
// spawn in circle
function CreatorP() {
	Debug.Log("Creator()"); // check if actually happening

	for(var y = 0; y < numProtons; y++) {
		var pos = Vector3(Random.Range(0.0, range), Random.Range(0.0, range), Random.Range(-1.0, 1.0));
		Instantiate(protons, pos, Quaternion.identity);
	}
	
	
}
function CreatorN() {
	Debug.Log("Creator()"); // check if actually happening

	for(var y = 0; y < numProtons; y++) {
		var pos = Vector3(Random.Range(0.0, range + 1), Random.Range(0.0, range + 1), Random.Range(-1.0, 1.0));
		Instantiate(neutrons, pos, Quaternion.identity);
	}
	
	
}

function Destroyer(particle) {
	var gos = GameObject.FindGameObjectsWithTag(particle);
	if(gos.Length > 0) {
        for(var i = 0; i < gos.Length; i++) {
			Destroy(gos[i]);
		}
		
		Debug.Log("Destroyer()");
		return true;
	} else {
		return false;
	}
}