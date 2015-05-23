#pragma strict
var Nname = ElementList.vtext;
var protons = ChangeAtoms.protons;
var neutrons = ChangeAtoms.protons;
function Start () {

}

function Update () {
	GetComponent.<UnityEngine.UI.Text>().text = Nname;
}