#pragma strict

// global vars used to tell the instantiater how many particles to create
public static var protons = 0.0;
public static var neutrons = 0.0;

// Convert user input to a number
function NumberOfProtons(howmanyP : String) {
	try {
		protons = parseInt(howmanyP);
	} catch(e) {
		Debug.Log("Empty string passed to parseInt in function NumberOfProtons()");
	}
}

function NumberOfNeutrons(howmanyN : String) {
	try {
     neutrons = parseInt(howmanyN);
	} catch(e) {
		Debug.Log("Empty string passed to parseInt in function NumberOfNeutrons()");
	}
}