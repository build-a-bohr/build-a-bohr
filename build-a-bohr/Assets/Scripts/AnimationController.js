#pragma strict
var obj;
var decayType = RadArray.RadDecayType;
var electronSprite : GameObject;
var electronCaptureSprite: GameObject;
var alphaSprite : GameObject;
var protonSprite : GameObject;
var playedAnimation = false;
var messageVal = MessageScript.messageVal;
var Instantiater: GameObject;




function Update () 
{
	//keeps track of variables
	decayType = RadArray.RadDecayType;
	messageVal = MessageScript.messageVal;
	if(messageVal == 16 || messageVal == 8 && SceneManager.GetActiveScene().buildIndex == 2)
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
		else if(decayType == "Alpha" && playedAnimation == false)
		{
			AlphaDecay();
			playedAnimation = true;
			clearPN();
			ChangeAtoms.neutrons -= 2;
			ChangeAtoms.protons -= 2;
			Instantiater.gameObject.SetActive(true);

			
			
		}
		else if(decayType == "Proton" && playedAnimation == false)
		{
			ProtonEmission();
			playedAnimation = true;
			clearPN();
			ChangeAtoms.protons -= 1;
			Instantiater.gameObject.SetActive(true);

			
			
		}
		else if(decayType == "Electron" && playedAnimation == false)
		{
			ElectronCapture();
			playedAnimation = true;
			clearPN();
			ChangeAtoms.protons -= 1;
			ChangeAtoms.neutrons += 1;
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
	for(var i = 1; i > 0; i--)
	{
		Instantiate(electronSprite, Vector3(0, 0, 0), Quaternion.identity);
		electronSprite.GetComponent.<Animation>().Play("1Particle");
	}
}
function AlphaDecay ()
{
	yield WaitForSeconds(1);
	for(var i = 1; i > 0; i--)
	{
		Instantiate(alphaSprite, Vector3(0, 0, 0), Quaternion.identity);
		alphaSprite.GetComponent.<Animation>().Play("AlphaDecay");
	}
}
function ProtonEmission ()
{
	yield WaitForSeconds(1);
	for(var i = 1; i > 0; i--)
	{
		Instantiate(protonSprite, Vector3(0, 0, 0), Quaternion.identity);
		protonSprite.GetComponent.<Animation>().Play("1Particle");    
	}
}
function ElectronCapture ()
{
	yield WaitForSeconds(1);
	for(var i = 1; i > 0; i--)
	{
		var obj = Instantiate(electronCaptureSprite, Vector3(0, 0, 0), Quaternion.identity);
		electronCaptureSprite.GetComponent.<Animation>().Play("ElectronCapture");

	}
	yield WaitForSeconds(2);
	Destroy (obj);
	
}
function Scatter (){

	var ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
    for(var i = 0 ; i < ProtonArray.length ; i ++){
    	var randomDirection : Vector3 = new Vector3(Random.Range(-359, 359),Random.Range(-359, 359),Random.Range(-359, 359));
		transform.Rotate(randomDirection);
		for(var y = 10; y > 0; y--){    
			ProtonArray[i].transform.position += transform.forward * 3 *  Time.deltaTime;
		}			
    }
    var NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
    for(i = 0 ; i < NeutronArray.length ; i ++){
   		randomDirection = new Vector3(Random.Range(-359, 359),Random.Range(-359, 359),Random.Range(-359, 359)); 
		transform.Rotate(randomDirection);
		for(y = 10; y > 0; y--){    
			NeutronArray[i].transform.position += transform.forward * 3 *  Time.deltaTime;
		}	
    }
    yield WaitForSeconds (1);
	messageVal = 17;
	
    
    

}
function clearPN()
{
	if(SceneManager.GetActiveScene().buildIndex != 2)
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
}