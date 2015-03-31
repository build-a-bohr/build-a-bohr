#pragma strict

function Start() {
	Invoke("Load", 10);
}

function Update() {

}

function Load() {
	Application.LoadLevel(Application.loadedLevel + 1);
}