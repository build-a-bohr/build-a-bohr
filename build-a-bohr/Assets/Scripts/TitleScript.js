#pragma strict

// allow click to continue also

function Start() {
	Invoke("Load", 3);
}

function Update() {
	
}

function Load() {
	Application.LoadLevel(1);
}