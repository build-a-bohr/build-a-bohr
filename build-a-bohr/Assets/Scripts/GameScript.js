#pragma strict

function Start() {

}

function Update() {
		GetComponent.<Renderer>().enabled = !GetComponent.<Renderer>().enabled;
		Debug.Log("yo");
}