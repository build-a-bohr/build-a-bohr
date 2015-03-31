﻿#pragma strict

var TOTAL_NUM_ELEMENTS = 118; // const?

var protons : Transform;
var neutrons : Transform;
var numProtons = ChangeAtoms.protons;
var prevNumProtons = 0;
var range = 0;

function Update() {
	numProtons = ChangeAtoms.protons;

	if(numProtons != prevNumProtons && numProtons != 0 && numProtons <= TOTAL_NUM_ELEMENTS) {
		Debug.Log("numProtons: " + numProtons);

		Changer();
	} else if(numProtons > TOTAL_NUM_ELEMENTS) {
		Destroyer("proton");
		
	}
}

function Changer() {
	Debug.Log("Changer()");

	if(numProtons > 0 && numProtons <= 45) {
		range = 0.75;
	}
	if(numProtons > 45 && numProtons < 93) {
		range = 1.50;
	}
	if(numProtons > 93 && numProtons <= 118) {
		range = 1.75;
	}
	
	//Destroyer("proton");
	
	if(numProtons == 0) {
		numProtons = ChangeAtoms.protons;
	}
	
	if(numProtons > 0 && numProtons <= TOTAL_NUM_ELEMENTS) {			
		Creator();
		prevNumProtons = ChangeAtoms.protons;
	}
}

// allow for type of particle to be passed in
// try to eliminate blank spaces between protons, instantiate objects touching other objects
// spawn in circle
function Creator() {
	Debug.Log("Creator()"); // check if actually happening

	for(var y = 0; y < numProtons; y++) {
		var pos = Vector3(Random.Range(0.0, range + 1), Random.Range(0.0, range + 1), range);
		Instantiate(protons, pos, Quaternion.identity);
	}
	
}

function Destroyer(particle) {
	var gos = GameObject.FindGameObjectsWithTag(particle);
	if(gos.Length > 0) {
			Destroy(gos[i]);
		}
		
		Debug.Log("Destroyer()");
		return true;
	} else {
		return false;
	}
}