/**
 * @file allows scene to be changed
 * @license BSD-3-Clause
 * @author Aaron Raimist <aaronraimist@protonmail.ch>
 * @author Eli Verbrugge <eli.verbrugge@gmail.com>
 *
 * @todo combine TitleScript into SceneChanger so only this one script is needed
 */
 
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