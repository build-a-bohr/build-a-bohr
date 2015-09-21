#pragma strict

public var clickToLoad : boolean = false;
public var button : boolean = false;
public var secondsTillLoad : int = -1;

function Start() {
	
}

function Update() {
	
		if(clickToLoad) {
			if(!button && (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1))) {
				Load();
			}
		
			if(button && GUI.Button) {
				Load();
			}
		}
	
}

function Load() {
	if(Application.loadedLevel == 2){
		Debug.Log("Boo!");
		Application.LoadLevel(Application.loadedLevel);
	}
	else{
		Application.LoadLevel(Application.loadedLevel + 1);
	}
}