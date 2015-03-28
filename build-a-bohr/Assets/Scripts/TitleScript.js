#pragma strict

function Start() {
	Invoke("Load", 10);
	
}

function Update() {
	//if(Input.GetMouseButtonDown(0)){
	//		Load();
			
	//}	
	
}

function Load() {
	Application.LoadLevel(Application.loadedLevel + 1);
}