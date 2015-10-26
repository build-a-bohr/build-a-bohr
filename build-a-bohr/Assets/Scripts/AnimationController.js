#pragma strict
var decayType = RadArray.RadDecayType;
var electronSprite : GameObject;
var playedAnimation = false;
var messageVal = MessageScript.messageVal;
var Instantiater: GameObject;




function Update () 
{
	//keeps track of variables
	decayType = RadArray.RadDecayType;
	messageVal = MessageScript.messageVal;
	if(messageVal == 16)
	{
		if( decayType == "Beta" && playedAnimation == false)
		{
			BetaDecay();
			playedAnimation = true;
			clearPN();
			ChangeAtoms.neutrons -= 1;
			ChangeAtoms.protons += 1;
			Instantiater.gameObject.SetActive(true);
		}			
		else if(decayType == "Unstable" && playedAnimation == false)
		{
			Scatter();
			playedAnimation = true;
		}
	}
}

function BetaDecay ()
{
	yield WaitForSeconds(1);
	Instantiate(electronSprite, Vector3(0, 0, 0), Quaternion.identity);
	for(var i = 1; i > 0; i--)
	{
		Instantiate(electronSprite, Vector3(0, 0, 0), Quaternion.identity);
		electronSprite.GetComponent.<Animation>().Play("BetaDecay");
	}
}
function Scatter (){

	var ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
    for(var i = 0 ; i < ProtonArray.length ; i ++){
    	var randomDirection : Vector3 = new Vector3(Random.Range(-359, 359),Random.Range(-359, 359),Random.Range(-359, 359));
		transform.Rotate(randomDirection);
		for(var y = 10; y > 0; y--){    
			ProtonArray[i].transform.position += transform.forward * 2 *  Time.deltaTime;
		}			
    }
    var NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
    for(i = 0 ; i < NeutronArray.length ; i ++){
   		randomDirection = new Vector3(Random.Range(-359, 359),Random.Range(-359, 359),Random.Range(-359, 359)); 
		transform.Rotate(randomDirection);
		for(y = 10; y > 0; y--){    
			NeutronArray[i].transform.position += transform.forward * 2 *  Time.deltaTime;
		}	
    }
    yield WaitForSeconds (1);
	messageVal = 17;
	
    
    

}

function clearPN ()
{
  	var ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
    for(var i = 0 ; i < ProtonArray.length ; i ++){
         			Destroy(ProtonArray[i]);	
    }
    var NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
    for(i = 0 ; i < NeutronArray.length ; i ++){
         			Destroy(NeutronArray[i]);	
    }	
}