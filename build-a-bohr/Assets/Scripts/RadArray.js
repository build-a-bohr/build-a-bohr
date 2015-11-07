﻿#pragma strict
var neutrons = ChangeAtoms.neutrons;
var protons = ChangeAtoms.protons;
var massnumber = 2;
var longstring = "";
public static var RadioActiveMessage = "c";
public static var RadDecayType = "c";
//public static var Restart = false;
//public static var canRestart = false;

//The numbers in this array represent states of radioactivity, used because I think it is more efficient than words.
public var RadioactiveArray = [
	[ 0, 2],
    [ 0, 1, 1, 3, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 1, 1, 5, 3, 5, 3, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 1, 6, 1, 1, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 1, 6, 7, 4, 1, 3, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 6, 7, 4, 1, 1, 3, 3, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  	[ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 6, 7, 7, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2],
   	[ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 7, 7, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 1, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
   	[ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 2, 7, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
   	[ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 1, 1, 1, 3, 1, 3, 3, 3, 3, 2, 3, 3, 3, 3,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 7, 7, 1, 7, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3 , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //got to here in formatting[ 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,2,2,7,7,7,7,7,1,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,7,7,7,7,7,1,7,1,1,1,3,1,3,3,3,3,3,3,3,2,3,3,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,2,7,7,7,7,7,7, 7,1,3,3,9,3,3,3,3,9,3,3,2,2,2,3,3,3,2,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],   
	[ 0,2,7,7,7,7,7,7,7,1,1,1,1,1,3,3,3,2,3,3,3,2,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,7,7,7,7,7,9,7,7,7,7,1,3,3,3,3,3,3,3,3,3,2,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,7,7,7,7,7,7,7,7,7,1,1,1,3,3,3,3,3,3,3,3,3,2,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,7,7,7,7,7,7,7,7,7,7,7,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,7,7,7,7,7,7,7,7,7,9,1,7,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,7,2,7,7,7,7,7,7,7,7,7,9,1,3,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,7,7,7,7,7,7,1,7,1,1,1,3,1,3,3,3,3,3,1,3,3,3,3,3,3,2,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,7,2,7,7,7,7,7,7,1,7,1,3,3,3,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,7,7,7,7,7,7,7,1,7,1,1,1,3,9,2,3,3,3,3,3,3,3,3,3,9,3,3,3,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,2,2,7,7,7,7,7,7,7,7,1,3,1,3,9,3,3,9,3,3,3,3,3,3,3,3,3,3,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,7,7,7,7,7,7,7,7,7,1,7,9,1,1,9,1,3,9,1,3,3,3,3,3,3,3,3,3,3,3,3,2,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,2,2,2,7,7,7,7,7,7,7,7,7,3,1,9,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,7,7,7,7,7,7,7,7,7,7,1,7,1,1,9,1,3,9,1,3,9,3,3,3,3,3,3,3,3,3,2,3,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,6,2,7,7,7,7,9,7,7,7,7,7,9,7,9,7,2,1,9,3,9,1,3,9,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[ 0,2,2,7,7,7,7,7,7,7,1,7,9,1,7,9,1,1,9,1,3,9,1,3,3,3,3,3,3,3,3,3,2,3,2,3,2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

    //got to krypton
];
function Start () {
	//var y = 299;
	//for(var i = 2; i < y; i++){
	//	longstring += ' 2,';
	//}
}

function Update () {
	protons = ChangeAtoms.protons;
	neutrons = ChangeAtoms.neutrons;
	massnumber = protons + neutrons;
	if(protons <= RadioactiveArray.length && protons > 0){
		if(RadioactiveArray[protons][massnumber] == 0){
			RadioActiveMessage = "Unknown radioactive decay!";
			RadDecayType = "Unknown";
		}
		else if(RadioactiveArray[protons][massnumber] == 1){
			RadioActiveMessage = "Seems like this combination is stable, so we are good to go!";
			RadDecayType = "Stable";
		}
		else if(RadioactiveArray[protons][massnumber] == 2) 
		{
			RadioActiveMessage = "This combination is too unstable to even exist for a moment!";
			RadDecayType = "Unstable";
		}
		else if(RadioactiveArray[protons][massnumber] == 3) 
		{
			RadioActiveMessage = "This combination will undergo Beta decay!";
			RadDecayType = "Beta";
		}
		else if(RadioactiveArray[protons][massnumber] == 4) 
		{
			RadioActiveMessage = "This combination will undergo Alpha decay!";
			RadDecayType = "Alpha";
		}
		else if(RadioactiveArray[protons][massnumber] == 5) 
		{
			RadioActiveMessage = "This combination will undergo Neutron emission!";
			RadDecayType = "Neutron";
		}
		else if(RadioactiveArray[protons][massnumber] == 6) 
		{
			RadioActiveMessage = "This combination will undergo Proton emission!";
			RadDecayType = "Proton";
		}
		else if(RadioactiveArray[protons][massnumber] == 7) 
		{
			RadioActiveMessage = "This combination will undergo Electron capture!";
			RadDecayType = "Electron";
		}
		else if(RadioactiveArray[protons][massnumber] == 9) 
		{
			RadioActiveMessage = "This element has dubious decay properties, will be supported in the future!";
			RadDecayType = "Electron";
		}
	}
	else
	{
	 RadioActiveMessage = "Not supported at this point!";
	 RadDecayType = "Unsupported";
	}	
	
	
	
}
