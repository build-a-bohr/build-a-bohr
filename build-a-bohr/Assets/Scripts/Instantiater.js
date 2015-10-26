#pragma strict

var TOTAL_NUM_ELEMENTS = 118; // const?

var protons : Transform;
var neutrons : Transform;
var numProtons = ChangeAtoms.protons;
var numNeutrons = ChangeAtoms.neutrons;
var prevNumProtons = 0;
var prevNumNeutrons = 0;
var range : float = 0;

function Update() {
	numProtons = ChangeAtoms.protons;
	numNeutrons = ChangeAtoms.neutrons;

	if(numProtons != prevNumProtons && numProtons != 0 && numProtons <= TOTAL_NUM_ELEMENTS) {
		Changer();
	} 
	
	if(numNeutrons != prevNumNeutrons && numNeutrons != 0 ) {
		Changer();
	} 
	//else if(numProtons > TOTAL_NUM_ELEMENTS && numNeutrons > TOTAL_NUM_ELEMENTS ) {
		//Destroyer("proton");
	//}
}

function Changer() {
	
	if(numProtons > 0 && numProtons <= 10)
	{
	
	}
	else if(numProtons > 10 && numProtons <= 20) {
		range = 0.2;
	}
	else if(numProtons > 20 && numProtons <= 45) {
		range = 0.3;
	} 
	else if(numProtons > 45 && numProtons < 93) {
		range = 0.35;
	}
	else if(numProtons > 93 && numProtons <= 118) {
		range = 0.4;
	}
	
	
	
	if(numProtons == 0) {
		numProtons = ChangeAtoms.protons;
	}
	
	if(numNeutrons == 0) {
		numNeutrons = ChangeAtoms.neutrons;
	}
	
	if(numProtons > 0 && numProtons <= TOTAL_NUM_ELEMENTS) {			
		CreatorP();
		prevNumProtons = numProtons;
	}
	if(numNeutrons > 0 && numProtons <= TOTAL_NUM_ELEMENTS) {			
		CreatorN();
		prevNumNeutrons = numNeutrons;
		
	}
}

// allow for type of particle to be passed in
// try to eliminate blank spaces between protons, instantiate objects touching other objects
// spawn in circle
function CreatorP() {
	

	for(var y = 0; y < numProtons; y++) {
		var pos = Vector3(Random.Range(-range, range), Random.Range(-range - 0.02, range + 0.02), Random.Range(-1.0, 1.0));
		Instantiate(protons, pos, Quaternion.identity);
		yield WaitForSeconds (0.01);
	}
}

function CreatorN() {
	

	for(var y = 0; y < numNeutrons; y++) {
		var pos = Vector3(Random.Range(-range - 0.1, range + 0.1), Random.Range(-range -0.2, range + 0.2), Random.Range(-1.0, 1.0));
		Instantiate(neutrons, pos, Quaternion.identity);
		yield WaitForSeconds (0.01);
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