#pragma strict
var neutrons = ChangeAtoms.neutrons;
var protons = ChangeAtoms.protons;
var massnumber = 0;
var longstring = "";
public static var RadioActiveMessage = "c";
public static var Restart = false;
public static var canRestart = false;
//The numbers in this array represent states of radioactivity, used because I think it is more efficient than words.
public var RadioactiveArray = [
	[ 0, 0],
    [ 0,  1, 1, 3, 3, 3, 3,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 2, 1, 1, 5, 3, 5, 3, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 2, 2, 1, 6, 1, 1, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 2, 2, 2, 1, 6, 7, 4, 1, 3, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 2, 2, 2, 2, 2, 6, 7, 4, 1, 1, 3, 3, 3, 3, 5, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 2, 2, 6, 7, 7, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 6, 7, 7, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 6, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 6, 6, 6, 7, 7, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 6, 7, 7, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 1, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 7, 2, 7, 7, 7, 7, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
function Start () {
	//var y = 299;
	//for(var i = 0; i < y; i++){
	//	longstring += ' 2,';
	//}
}

function Update () {
	protons = ChangeAtoms.protons;
	neutrons = ChangeAtoms.neutrons;
	massnumber = protons + neutrons;
	if(protons <= RadioactiveArray.length && protons > 0){
		if(RadioactiveArray[protons][massnumber] == 1){
			RadioActiveMessage = "Seems like this combination is stable, so we are good to go!";
		}
		else if(RadioactiveArray[protons][massnumber] == 2) 
		{
			RadioActiveMessage = "This combination is too unstable to even exist for a moment!";
		}
		else if(RadioactiveArray[protons][massnumber] == 3) 
		{
			RadioActiveMessage = "This combination will undergo Beta decay!";
		}
		else if(RadioactiveArray[protons][massnumber] == 4) 
		{
			RadioActiveMessage = "This combination will undergo Alpha decay!";
		}
		else if(RadioactiveArray[protons][massnumber] == 5) 
		{
			RadioActiveMessage = "This combination will undergo Neutron emission!";
		}
		else if(RadioactiveArray[protons][massnumber] == 6) 
		{
			RadioActiveMessage = "This combination will undergo Proton emission!";
		}
		else if(RadioactiveArray[protons][massnumber] == 7) 
		{
			RadioActiveMessage = "This combination will undergo Electron capture!";
		}
	}
	else{
	 RadioActiveMessage = "Not supported at this point!";
	}	
	
	
	
}
