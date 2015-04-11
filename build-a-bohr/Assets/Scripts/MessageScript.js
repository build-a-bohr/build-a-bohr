#pragma strict

var MessageText : UnityEngine.UI.Text;

private var MessageArr = [
	"Good day!  I am Ernest Rutherford, and in 1920, I discovered a positively charged subatomic particle which I called a proton.",
	"The number of protons in an atom is what determines what the element is. "
];

private var i = 0;

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