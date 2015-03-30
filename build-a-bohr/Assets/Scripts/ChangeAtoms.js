#pragma strict

// global vars used to tell the instantiater how many particles to create
public static var protons = 0.0;
public static var neutrons = 0.0;

// Convert user input to a number
function NumberOfProtons(howmanyP : String) {
	 protons = parseInt(howmanyP);
}

function NumberOfNeutrons(howmanyN : String) {
     neutrons = parseInt(howmanyN);
}


// ^ functions must check if nil to avoid error