#pragma strict

// allow click to continue also

function Start() {
	//Invoke("Load", 3);
}

function Update() {
	if(Input.GetMouseButtonDown(0)){
			Application.LoadLevel(Application.loadedLevel + 1);
	}	
	
}

function Load() {
	//Application.LoadLevel(1);
}