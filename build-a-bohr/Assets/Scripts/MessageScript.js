#pragma strict

var MessageText : UnityEngine.UI.Text;

var MessageArr = ["this is message 1", "this is message 2"]; // primitive message system
var i = 0;

function Start() {

}

function Update() {
	if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {
		NewMessage();	
	}
}

function NewMessage() {
	MessageText.text = MessageArr[i];
	i++;
}