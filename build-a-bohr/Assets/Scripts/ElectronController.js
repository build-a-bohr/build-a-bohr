#pragma strict

public static var electrons = 0;
var protons = ChangeAtoms.protons;
var electronSprite : Transform;
var BohrShell : Transform;
var BohrShell1 : Transform;
var BohrShell2 : Transform;
var BohrShell3 : Transform;
var n = 1;
var z = 1;
var i = 1;
var electronsToCount = 0;
var shift : float = 0;
var scale : float = 0;


function Start () {
 electrons = ChangeAtoms.protons;
}
function Update (){
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
  	// use trig to spawn electrons around the circle with a max of 2, coordinates of (0, and pi)
  	for(var y = electronsToCount; y > 0; y -= 1){
  	Instantiate(electronSprite, Vector3((n * Mathf.Acos(0)), 0, 0), Quaternion.identity);
  	n = n * -1;
  	}
    electrons -= 2;
    electronsToCount = 0;
    if(electrons > 0){
    	pos = Vector3(0, 0, 1);
    	scale = 2.5;
  		Instantiate(BohrShell1, pos, Quaternion.identity);
    	if(electrons >= 8){
  	 		electronsToCount = 8;
  		}
  		if(electrons < 8){
  	 		electronsToCount = electrons;
  		}
  		for(y = electronsToCount; y > electronsToCount - 4 && y > 0; y -= 1){
  			Instantiate(electronSprite, Vector3(Mathf.Cos((7*Mathf.PI/16) - shift)*scale, Mathf.Sin((7*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  			shift += (8*Mathf.PI/16);
  			
  		}
  		shift = 0;
  		for(y = y; y <= electronsToCount - 4 && y > 0; y -= 1){
  			Instantiate(electronSprite, Vector3(Mathf.Cos((9*Mathf.PI/16) - shift)*scale, Mathf.Sin((9*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  			shift += (8*Mathf.PI/16);
  			
  		}
  		electrons -= 8;
  		if(electrons > 0){
    		pos = Vector3(0, 0, 1);
    		scale = 3.5;
    		Debug.Log(electrons);
  			Instantiate(BohrShell2, pos, Quaternion.identity);
    		if(electrons >= 18){
  	 			electronsToCount = 18;
  			}
  			if(electrons < 18){
  	 			electronsToCount = electrons;
  			}
  			for(y = electronsToCount; y > electronsToCount - 8 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((2*Mathf.PI/4) - shift)*scale, Mathf.Sin((2*Mathf.PI/4) - shift)*scale, 0), Quaternion.identity);
  				shift += (1*Mathf.PI/4);
  			}
  			electronsToCount -= 8;
  			shift = 0;
  			Instantiate(BohrShell3, pos, Quaternion.identity);
  			scale = 5;
  			for(y = electronsToCount; y > electronsToCount - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((0*Mathf.PI/4) - shift)*scale, Mathf.Sin((0*Mathf.PI/4) - shift)*scale, 0), Quaternion.identity);
  				shift += (1*Mathf.PI/4);
  			}
  			//scale = 3.5;
  			//for(y = electronsToCount; y > electronsToCount - 8 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  			//	Instantiate(electronSprite, Vector3(Mathf.Cos((1*Mathf.PI/8) - shift)*scale, Mathf.Sin((1*Mathf.PI/8) - shift)*scale, 0), Quaternion.identity);
  			//	shift += (1*Mathf.PI/8);
  			//}
  			
  			electrons -= 18;
    }
}
}  	
}