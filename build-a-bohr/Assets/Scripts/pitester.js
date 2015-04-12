#pragma strict
var fun = 0.00;
function Start () {

}

function Update () {
	Debug.Log(Mathf.Cos(fun));
	fun += .2;
}