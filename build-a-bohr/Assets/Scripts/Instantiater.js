#pragma strict

var electron : Transform;
var number = ChangeAtoms.electrons;
function Update () {
    if(number == 0){
     number = ChangeAtoms.electrons;
    }
    if(number > 0){
     Create();
     number = -1;
     
    }
}

function Create (){
 for (var y = 0; y < number; y++) {
        for (var x = 0; x < number; x++) {
            Instantiate(electron, Vector3 (x, y, 0), Quaternion.identity);
        }
    }
}