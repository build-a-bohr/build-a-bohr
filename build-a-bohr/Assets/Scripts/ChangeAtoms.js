#pragma strict

// global var that is used to tell the instantiater how many electrons to create
public static var protons = 0.0;

// Convert user input to a number
function NumberOfProtons(howmany : String){
	 protons = parseInt (howmany);
}
