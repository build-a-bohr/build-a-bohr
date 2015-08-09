#pragma strict

var MessageText : UnityEngine.UI.Text;
var protonInput : UnityEngine.UI.InputField;
var neutronInput : UnityEngine.UI.InputField;
var protons = 0;
public static var messageVal = 2;
public static var increment = 1;

private var MessageArr = [

	"Good day! My name is \nErnest Rutherford, and in \n1920, I discovered a positively \ncharged subatomic particle \nwhich I called a proton.",
	"Okay! So what do you want to element do you want to build now?",
	"The number of protons in \n an atom  is what determines \n what the element is",
	"So how many protons (1-118) \ndo you want in this \natom you are building?",
	"And how many neutrons?",
	"The message has progressed!"
	
];

function Start() {

 if(increment == 1){
  MessageText.text = MessageArr[0];
 }
 else if(increment == 2){
  MessageText.text = MessageArr[1];
 }
 
}

function Update() {
	protons = ChangeAtoms.protons;
	Debug.Log(MessageArr[messageVal]);
	if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {	
	 	if(messageVal == 4){
	 		if(protons > 0){
	 		 NewMessage();
	 		}
		}
	 	else{
	 		NewMessage();
	 		Debug.Log("Boo!");
	 	}	
	}
	if(messageVal == 4){
	 	protonInput.gameObject.SetActiveRecursively(true);
	}
	if(messageVal == 5){
	 	protonInput.gameObject.SetActiveRecursively(false);
	 	neutronInput.gameObject.SetActiveRecursively(true);
	}
}

function NewMessage() {
	MessageText.text = MessageArr[messageVal];
	messageVal+= increment;
}