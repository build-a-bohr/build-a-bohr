#pragma strict

// global var that is used to tell atom scene what atom config to create, need more variables for protons & neutrons
public static var atoms = 0;

// If input (now its a button later it will be a user prompt, then set the global var equal to something (later user defined)
function NumberOfAtoms(){
	atoms += 3;
	//Debug.Log("hello");
}
