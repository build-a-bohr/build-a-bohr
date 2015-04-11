#pragma strict

public var clickToLoad : boolean = false;
public var button : boolean = false;
public var secondsTillLoad : int = -1;

function Start() {
	if(secondsTillLoad != -1) {
		Invoke("Load", secondsTillLoad);
	}
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
	Application.LoadLevel(Application.loadedLevel + 1);
}