#pragma strict
var neutrons = ChangeAtoms.neutrons;
var protons = ChangeAtoms.protons;
var massnumber = 0;
var longstring = "";
public static var RadioActiveMessage = "c";
public var RadioactiveArray = [
	[ 0, 0],
    [ 0,  1, 1, 3, 3, 3, 3,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 2, 3, 1],
    [ 0, 2, 4, 2],
    [ 0, 2, 4, 3]
];
function Start () {
	var y = 194;
	for(var i = 0; i < y; i++){
		longstring += ' 2,';
	}
}

function Update () {
	protons = ChangeAtoms.protons;
	neutrons = ChangeAtoms.neutrons;
	massnumber = protons + neutrons;
	if(RadioactiveArray[protons][massnumber] == 1){
		RadioActiveMessage = "Seems like this element is stable!";
	}
	else if(RadioactiveArray[protons][massnumber] == 2) 
	{
		RadioActiveMessage = "Too unstable to even exist for a moment!";
	}
	else if(RadioactiveArray[protons][massnumber] == 3) 
	{
		RadioActiveMessage = "Beta decay!";
	}
	else if(RadioactiveArray[protons][massnumber] == 4) 
	{
		RadioActiveMessage = "Alpha decay!";
	}
	
	
}
