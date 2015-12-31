#pragma strict

var Slider : UnityEngine.UI.Slider;
var Controller : ElectronController; //= GetComponent(ElectronController);
var prevProtons = 0;
var ElectronManager : GameObject;

function Start () {

}

function Update () {
	ChangeAtoms.protons = Slider.value;
	
	if(ChangeAtoms.protons > 0 && ChangeAtoms.protons != prevProtons)
	{
		Debug.Log("hello");
		ElectronManager.SetActive (true);		
		prevProtons = ChangeAtoms.protons;
	}
	

	
}

function ClrScreen()
{
		var ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
     		  for(var i = 0 ; i < ProtonArray.length ; i ++){
         			Destroy(ProtonArray[i]);	
         	  }
        var NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
     		  for(i = 0 ; i < NeutronArray.length ; i ++){
         			Destroy(NeutronArray[i]);	
         	  }
        var ElectronArray =  GameObject.FindGameObjectsWithTag ("electron");
     		  for(i = 0 ; i < ElectronArray.length ; i ++){
         			Destroy(ElectronArray[i]);	
         	  }
        var ShellArray =  GameObject.FindGameObjectsWithTag ("shell");
     		  for(i = 0 ; i < ShellArray.length ; i ++){
         			Destroy(ShellArray[i]);	
         	  }
}