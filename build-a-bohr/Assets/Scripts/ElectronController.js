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
  		while(electronsToCount <= 0){	
  			pos = Vector3(0,0,1);
  			Instantiate(BohrShell1, pos, Quaternion.identity);
  			if(electrons >= 8){
  	 		electronsToCount = 8;
  			}
  			if(electrons < 8){
  	 		electronsToCount = electrons;
  			}
  			// use trig to spawn electrons around the circle with a max of 2, coordinates of (0, and pi)
  			i = 0;
  		    }
  		    var x = electronsToCount;
  		    y = 4;
  			while(electronsToCount > 0){
  				Debug.Log(electronsToCount);
  				for(x = x; x == electronsToCount; x -= 2){
  					Instantiate(electronSprite, Vector3((z * (Mathf.Acos(0) + 0.5)), Random.Range(0.4,-0.4), 0), Quaternion.identity);
  					z = z * -1;
  					i += 1;
                    electronsToCount -= 2;
  				}
  				for(x = x; x == electronsToCount-i; x -= 2){
  					Instantiate(electronSprite, Vector3((z * (Mathf.Acos(0) + 0.5)), Random.Range(0.4,-0.4), 0), Quaternion.identity);
  			 		i += 1;
  					z = z * -1;
  					electronsToCount -= 1;

  				}
  				for(y = y; y == electronsToCount-2*i;  y -= 4){
  					Instantiate(electronSprite, Vector3(Random.Range(0.4,-0.4),(n * (Mathf.Acos(0) + 0.5)), 0), Quaternion.identity);
  					i += 1;
  					n = n* -1;
  					electronsToCount -= 2;
  					
  				
  				}
  				
  		     yield;	
  			}
  			electrons = 0;
  			}
  			
  			
  			
  		
 }	
}