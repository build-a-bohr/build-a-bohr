#pragma strict

function Start() {
	Invoke("Load", 10);
}

function Update() {
<<<<<<< HEAD
	if(Input.GetMouseButtonDown(0)) {
		Load();	
	}
=======
	//if(Input.GetMouseButtonDown(0)){
	//		Load();
			
	//}	
	
>>>>>>> 44ae0a2f551cf7db46dcd49f028b8d76705e5271
}

function Load() {
	Application.LoadLevel(Application.loadedLevel + 1);
}