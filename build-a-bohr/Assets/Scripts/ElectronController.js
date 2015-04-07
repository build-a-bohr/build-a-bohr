#pragma strict

public static var electrons = 0;
var protons = ChangeAtoms.protons;
var electronSprite : Transform;
var BohrShell : Transform;

function Start () {
 electrons = protons;
}
function Update (){

if(electrons > 0){
  Create ();
 }

}
function Create () {
 if(electrons > 0){
  var pos = Vector3(0, 0, 0);
  Instantiate(BohrShell, pos, Quaternion.identity);
  BohrShell.transform.localScale += new Vector2(0.4F, 0.4F);
  electrons -= 2;
  if(electrons > 0){
  	Instantiate(BohrShell, pos, Quaternion.identity);
  	BohrShell.transform.localScale += new Vector2(0.4F, 0.4F);
  	electrons -= 8;
  }
 }
}