#pragma strict

var protons : Transform;
var number = ChangeAtoms.protons;
var prevnumber = -1;
var range = 0;
function Update () {
  number = ChangeAtoms.protons;
  Debug.Log(number);
  if(number > 0 && number <= 45){
   range = 2.0;
  }
  if(number > 45 && number < 93){
   range = 3.0;
  }
  if(number > 93 && number < 115){
   range = 4.0;
  } 
  if(prevnumber != number){  
    if(number == 0){
     number = ChangeAtoms.protons;
    }
    if(number > 0){
     Debug.Log("Create");
     Create();
     prevnumber = ChangeAtoms.protons;
    }
}
}

function Create (){
 for (var y = 0; y < number; y++) {
      Instantiate(protons, Vector3 (Random.Range(0, range), Random.Range(0, range), 0), Quaternion.identity);
       
    }
}