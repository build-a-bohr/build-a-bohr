﻿#pragma strict

public static var electrons = 0;
var protons = ChangeAtoms.protons;
var electronSprite : Transform;
var neutronSprite : Transform;
var BohrShell : Transform;
var BohrShell1 : Transform;
var BohrShell2 : Transform;
var BohrShell3 : Transform;
var BohrShell4 : Transform;
var BohrShell5 : Transform;
var BohrShell6 : Transform;
var BohrShell7 : Transform;
var n = 1;
var z = 1;
var i = 1;
var electronsToCount = 0;
var electronsToRemember = 0;
var electronsToCountTo = 0;
var shift : float = 0;
var shift2 : float = 0;
var scale : float = 0;


function Start () {
 electrons = ChangeAtoms.protons;
}
function Update (){
if(electrons > 0 && electrons <= 56 ){
  CreateSmall();
 }
else{
  	if(electrons == 57){
   		electronsToRemember = electrons - 56;
   		electronsToCountTo = 56;
   		electrons = electronsToCountTo;
   		CreateSmall();
   		electrons = electronsToRemember;
   		Instantiate(electronSprite, Vector3(Mathf.Cos((4*Mathf.PI/16))*3.5, Mathf.Sin((4*Mathf.PI/16))*3.5, 0), Quaternion.identity);
  	}
  	else if(electrons > 57 && electrons <= 77 ){
   		electronsToRemember = electrons - 56;
   		electronsToCountTo = 56;
   		electrons = electronsToCountTo;
   		CreateSmall();
   		electrons = electronsToRemember;
   		CreateMedium ();
  	}
 	 else if(electrons > 77 && electrons <= 79){ 
 
      //code goes here
 	}
}

}

function CreateSmall () {
// Deals with spawning elements up to Barium (56), uses weird coordinates however it works for now (might eventually rewrite)
 if(electrons > 0){
  	var pos = Vector3(-0.1, -0.12, 1);
  	Instantiate(BohrShell, pos, Quaternion.identity);
  	if(electrons > 2){
  	 electronsToCount = 2;
  	 shift2 = 1;
  	}
  	if(electrons <= 2){
  	 electronsToCount = electrons;
  	 shift2 = 1.3;
  	}
  	// use trig to spawn electrons around the circle with a max of 2, coordinates of (0, and pi)
  	for(var y = electronsToCount; y > 0; y -= 1){
  	Instantiate(electronSprite, Vector3((n * Mathf.Acos(0) * shift2), 0, 0), Quaternion.identity);
  	n = n * -1;
  	}
  	shift2 = 0;
    electrons -= 2;
    electronsToCount = 0;
    if(electrons > 0){
    	scale = 1.9;
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
  		electronsToCount -= 8;
  		if(electrons > 0){
    		scale = 2.5;
  			Instantiate(BohrShell2, pos, Quaternion.identity);
    		if(electrons >= 20){
  	 			electronsToCount = 20;
  			}
  			if(electrons < 20){
  	 			electronsToCount = electrons;
  	 		
  			}
  			
  			for(y = electronsToCount; y > electronsToCount - 8 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((1*Mathf.PI/9) - shift)*scale, Mathf.Sin((1*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  				shift += (2*Mathf.PI/9);
  			}
  			electronsToCount -= 8;
  			shift = 0;
  			Instantiate(BohrShell3, pos, Quaternion.identity);
  			scale = 3;
  			for(y = electronsToCount; y > electronsToCount - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((0*Mathf.PI/9) - shift)*scale, Mathf.Sin((0*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  				shift += (2*Mathf.PI/9);
  			}
  			electronsToCount -= 2;
  			scale = 2.5;
  			for(y = electronsToCount; y > electronsToCount - 9 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((0*Mathf.PI/9) - shift)*scale, Mathf.Sin((0*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  				shift += (2*Mathf.PI/9);
  			}
  			electronsToCount -= 9;
  			for(y = electronsToCount; y > electronsToCount - 1 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  				Instantiate(electronSprite, Vector3(Mathf.Cos((7.5*Mathf.PI/9) - shift)*scale, Mathf.Sin((7.5*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  				
  			}
  			electronsToCount -= 1;
  			electrons -= 20;
  			electronsToCount = 0;
  			if(electrons > 0){
  			 	scale = 3;
    			if(electrons >= 26){
  	 				electronsToCount = 100;
  				}	
  				if(electrons < 26){
  	 				electronsToCount = electrons + 1;
  				}
  				

  				for(y = electronsToCount; y > electronsToCount - 8 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((8*Mathf.PI/9) - shift)*scale, Mathf.Sin((8*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);

  					shift += (2*Mathf.PI/9);
  					
 
  				}
  				electronsToCount -= 8;
  				if(electronsToCount > 0){
  				Instantiate(BohrShell4, pos, Quaternion.identity);
  				shift = 0;
  				scale = 3;
  				for(y = electronsToCount; y > electronsToCount - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((1*Mathf.PI/16) - shift2)*scale, Mathf.Sin((1*Mathf.PI/16) - shift2)*scale, 0), Quaternion.identity);
  					shift2 += (22*Mathf.PI/16);
  				}
  				shift += (1*Mathf.PI/4);
  				scale = 3.0;
  				for(y = electronsToCount; y > electronsToCount - 8 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((1*Mathf.PI/9) - shift)*scale, Mathf.Sin((1*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  					shift += (2*Mathf.PI/9);
  				}
  				electronsToCount -= 9;
  				//for(y = electronsToCount; y > electronsToCount - 1 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					//Instantiate(electronSprite, Vector3(Mathf.Cos((10.5*Mathf.PI/9) - shift)*scale, Mathf.Sin((12*Mathf.PI/9) - shift)*scale, 0), Quaternion.identity);
  				
  				//}
  				scale = 3.5;
  				shift = 0;
  				for(y = electronsToCount; y > electronsToCount - 4 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((0*Mathf.PI/16) - shift)*scale, Mathf.Sin((0*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  					shift += (8*Mathf.PI/16);
  				}
  				shift = 0;
  				for(y = electronsToCount; y > electronsToCount - 4 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((1*Mathf.PI/16) - shift)*scale, Mathf.Sin((1*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  					shift += (8*Mathf.PI/16);
  				}
  				electronsToCount -= 18;
  				
  				if(electronsToCount > 0){
  				Instantiate(BohrShell5, pos, Quaternion.identity);
  				scale = 4;
  				for(y = electronsToCount; y > electronsToCount - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  					Instantiate(electronSprite, Vector3(Mathf.Cos((0*Mathf.PI/4) - shift)*scale, Mathf.Sin((0*Mathf.PI/4) - shift)*scale, 0), Quaternion.identity);
  					shift += (4*Mathf.PI/4);
  				}
  				
  				electrons = 0;
  				electronsToCount = 0;
  			}
  			

  				
  			}
  		}
  			
    	}
		}
	}
	
}
function CreateMedium (){
   scale = 3.0;
   shift = 0;
   for(var y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((3*Mathf.PI/16) - shift)*scale, Mathf.Sin((3*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   electrons -= 2;
   shift = 0;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((6.4*Mathf.PI/16) - shift)*scale, Mathf.Sin((6.4*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((10.2*Mathf.PI/16) - shift)*scale, Mathf.Sin((10.2*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((13.6*Mathf.PI/16) - shift)*scale, Mathf.Sin((13.6*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((17*Mathf.PI/16) - shift)*scale, Mathf.Sin((17*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((20.4*Mathf.PI/16) - shift)*scale, Mathf.Sin((20.4*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((23.8*Mathf.PI/16) - shift)*scale, Mathf.Sin((23.8*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   scale = 3.5;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((5*Mathf.PI/16) - shift)*scale, Mathf.Sin((5*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((13*Mathf.PI/16) - shift)*scale, Mathf.Sin((13*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((21*Mathf.PI/16) - shift)*scale, Mathf.Sin((21*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
   for(y = electrons; y > electrons - 2 && y > 0; y -= 1){ // what number of electrons do you want the group to stop at
  		Instantiate(electronSprite, Vector3(Mathf.Cos((29*Mathf.PI/16) - shift)*scale, Mathf.Sin((29*Mathf.PI/16) - shift)*scale, 0), Quaternion.identity);
  		shift += (1*Mathf.PI/16);
   }
   shift = 0;
   electrons -= 2;
}