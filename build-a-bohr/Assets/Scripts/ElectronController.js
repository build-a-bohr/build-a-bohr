#pragma strict

public static var electrons = 0;
var protons = ChangeAtoms.protons;
var electronSprite : Transform;
var BohrShell : Transform;
var n = 1;
var shift = 0;
var electronsToCount = 0;

function Start () {
 electrons = protons;
}
function Update (){
Debug.Log(Mathf.Acos(Mathf.PI/4));
if(electrons > 0){
  Create ();
 }

}
function Create () {
 if(electrons > 0){
  	var pos = Vector3(0, 0, 1);
  	Instantiate(BohrShell, pos, Quaternion.identity);
  	if(electrons >= 2){
  	 electronsToCount = 2;
  	}
  	if(electrons < 2){
  	 electronsToCount = electrons;
  	}
  	// use trig to spawn 2 electrons around the cricle
  	for(var y = electronsToCount; y > 0; y -= 1){
  	 Instantiate(electronSprite, Vector3((n * Mathf.Acos(0)), 0, 0), Quaternion.identity);
  	 n = -1;
  	}
  electrons -= 2;
  //if(electrons > 0){
  	//Instantiate(BohrShell, pos, Quaternion.identity);
  	//BohrShell.transform.localScale += new Vector2(0.2F, 0.2F);
  //	electrons -= 8;
  //}
 }
}