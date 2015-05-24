#pragma strict
var Nname = ElementList.NameArray[protons];
var protons = ChangeAtoms.protons;
var neutrons = ChangeAtoms.protons;
function Start () {

}

function Update () {
    protons = ChangeAtoms.protons;
    Nname = ElementList.NameArray[protons];
	GetComponent.<UnityEngine.UI.Text>().text = Nname;
}