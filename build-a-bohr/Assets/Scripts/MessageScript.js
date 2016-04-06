#pragma strict
import UnityEngine.SceneManagement;

//declares all the variables referencing gameobjects that are not UI
var Rutherford : GameObject;
var Bohr : GameObject;
var Curie : GameObject;
var Chadwick : GameObject;
var Thomson : GameObject;
var Instantiater : GameObject;
var ElectronController : GameObject;
var MessageBubble : GameObject;
var protonPrefab : GameObject;
//declares all the variables referencing UI components
var MessageText : UnityEngine.UI.Text;
var AtomicNumber : UnityEngine.UI.Text;
var MassNumber : UnityEngine.UI.Text;
var RestartButton : UnityEngine.UI.Button;
var ElementSymbol : UnityEngine.UI.Text;
var protonInput : UnityEngine.UI.InputField;
var neutronInput : UnityEngine.UI.InputField;
//declares all the numerical variables
var protons = ChangeAtoms.protons;
var neutrons = ChangeAtoms.neutrons;
public static var messageVal = 1;
var increment = 1;
var stage = 1;
//creates a message variable used to display text relating to if the created atom is radioactive or not
var RadioActiveMessage = "";
//creates all the arrays neccessary
var ProtonArray : GameObject[];
var NeutronArray : GameObject[];
var ElectronArray : GameObject[];
var ShellArray : GameObject[];
var loopVar = true;
private var MessageArr = [

	"Good day! My name is Ernest Rutherford, and in 1920, I discovered a positively charged subatomic particle which I called a proton.",
	"Okay! So what do you want to element do you want to build now?"
	
	
]; //instantiates the array with whatever text is neccessary for the beginning, the rest is not added as the values need to be updated
var NameArray = [ //creates an array with both the names and symbols, radioactivity is handled by a different one due to space and computational needs
	["Nothing", "N"],
	["Hydrogen", "H"],
	["Helium", "He"],
	["Lithium", "Li"],
	["Beryllium", "Be"],
	["Boron", "B"],
	["Carbon", "C" ],
	["Nitrogen", "N"],
	["Oxygen", "O"],
	["Fluorine", "F"],
 	["Neon", "Ne"],
 	["Sodium", "Na"],
 	["Magnesium", "Mg"],
 	["Aluminum", "Al"] ,
 	["Silicon", "Si"],
 	["Phosphorus", "P"],
 	["Sulfur", "S"],
	["Chlorine", "Cl"],
	["Argon", "Ar"],
	["Potassium", "K"],
	["Calcium", "Ca"],
	["Scandium", "Sc"],
	["Titanium", "Ti"],
 	["Vanadium", "V"],
 	["Chromium", "Cr"],
	["Manganese", "Mn"],
 	["Iron", "Fe"],
	["Cobalt", "Co"],
 	["Nickel", "Ni"],
 	["Copper", "Cu"],
 	["Zinc", "Zn"],
 	["Gallium", "Ga"],
 	["Germanium", "Ge"],
 	["Arsenic", "As"],
	["Selenium", "Se"],
 	["Bromine", "Br"],
	["Krypton", "Kr"],
 	["Rubidium", "Rb"],
	["Strontium", "Sr"],
	["Yttrium", "Y"],
 	["Zirconium", "Zr"],
	["Niobium", "Nb"],
 	["Molybdenum", "Mo"],
 	["Technetium", "Tc"],
 	["Ruthenium", "Ru"],
 	["Rhodium", "Rh"],
	["Palladium", "Pd"],
	["Silver", "Ag"],
 	["Cadmium", "Cd"],
	["Indium", "In"],
 	["Tin", "Sn"],
 	["Antimony", "Sb"],
 	["Tellurium", "Te"],
 	["Iodine", "I"],
 	["Xenon", "Xe"],
 	["Cesium", "Cs"],
 	["Barium", "Ba"],
 	["Lanthanum", "La"],
 	["Cerium", "Ce"],
 	["Praseodymium", "Pr"],
 	["Neodymium", "Nd"],
 	["Promethium", "Pm"],
 	["Samarium", "Sm"],
	["Europium", "Eu"],
 	["Gadolinium", "Gd"],
 	["Terbium", "Tb"],
 	["Dysprosium", "Dy"],
 	["Holmium", "Ho"],
 	["Erbium", "Er"],
 	["Thulium", "Tm"],
 	["Ytterbium", "Yb"],
	["Lutetium", "Lu"],
 	["Hafnium", "Hf"],
 	["Tantalum", "Ta"],
 	["Tungsten", "W"],
	["Rhenium", "Re"],
 	["Osmium", "Os"],
 	["Iridium", "Ir"],
 	["Platinum", "Pt"],
	["Gold", "Au"],
 	["Mercury", "Hg"],
 	["Thallium", "Tl"],
	["Lead", "Pb"],
 	["Bismuth", "Bi"],
 	["Polonium", "Po"],
 	["Astatine", "At"],
	["Radon", "Rn"],
 	["Francium", "Fr"],
	["Radium", "Ra"],
 	["Actinium", "Ac"],
 	["Thorium", "Th"],
 	["Protactinium", "Pa"],
 	["Uranium", "U"],
 	["Neptunium", "Np"],
	["Plutonium", "Pu"],
	["Americium", "Am"],
	["Curium", "Cm"],
	["Berkelium", "Bk"],
	["Californium", "Cf"],
 	["Einsteinium", "Es"],
	["Fermium", "Fm"],
	["Mendelevium", "Md"],
	["Nobelium", "No"],
	["Lawrencium", "Lr"],
	["Rutherfordium", "Rf"],
	["Dubnium", "Db"],
	["Seaborgium", "Sg"],
	["Bohrium", "Bh"],
	["Hassium", "Hs"],
	["Meitnerium", "Mt"],
	["Darmstadtium", "Ds"],
	["Roentgenium", "Rg"],
	["Copernicium", "Cn"],
	["Ununtrium", "Uut"],
	["Flerovium", "Fl"],
	["Ununpentium", "Uup"],
	["Livermorium", "Lv"],
	["Ununseptium", "Uus"],
	["Ununoctium", "Uuo"]
];

function Start() 
	{
 //Sets the text to whatever is neccessary depedning on if the user starts the scene or is simply restarting the process
 if(increment == 1)
 {
  MessageText.text = MessageArr[0];
 }
 else if(increment == 2)
 {
  MessageText.text = MessageArr[1];
 }
 
}

function Update() {
	//Used to transform the scene to make it fit the text and/or required inputs/display elements
	//Eventually will move this to a seperate UI script, because the MessageScript really should not be doing this
	protons = ChangeAtoms.protons;
	neutrons = ChangeAtoms.neutrons;
	RadioActiveMessage = RadArray.RadioActiveMessage;
	if(SceneManager.GetActiveScene().buildIndex == 1)
	{
		if(messageVal == 12 || messageVal == 5 || messageVal == 19)
		{
			MessageText.gameObject.SetActive(false);
		 	MessageBubble.gameObject.SetActive(false);
		}
		else
		{
			MessageText.gameObject.SetActive(true);
		 	MessageBubble.gameObject.SetActive(true);
		}
		if(messageVal >= 0 && messageVal < 6)
		{
			Rutherford.gameObject.SetActive(true);
			Chadwick.gameObject.SetActive(false);
			Thomson.gameObject.SetActive(false);
			Bohr.gameObject.SetActive(false);
			Curie.gameObject.SetActive(false);				
			
		}
		else if(messageVal >= 6 && messageVal < 14)
		{
			Rutherford.gameObject.SetActive(false);
			Chadwick.gameObject.SetActive(true);
			Thomson.gameObject.SetActive(false);
			Bohr.gameObject.SetActive(false);
			Curie.gameObject.SetActive(false);
		}
		else if(messageVal >= 14 && messageVal < 19)
		{
			Rutherford.gameObject.SetActive(false);
			Chadwick.gameObject.SetActive(false);
			Thomson.gameObject.SetActive(false);
			Bohr.gameObject.SetActive(false);
			Curie.gameObject.SetActive(true);
		
		}
		else if(messageVal == 19)
		{
			Rutherford.gameObject.SetActive(false);
			Chadwick.gameObject.SetActive(false);
			Thomson.gameObject.SetActive(true);
			Bohr.gameObject.SetActive(false);
			Curie.gameObject.SetActive(false);
		
		}
		else if(messageVal >= 20 && messageVal < 23)
		{
			Rutherford.gameObject.SetActive(false);
			Chadwick.gameObject.SetActive(false);
			Thomson.gameObject.SetActive(false);
			Bohr.gameObject.SetActive(true);
			Curie.gameObject.SetActive(false);
		
		}
			
		if(messageVal == 3)
		{
		 			protonInput.gameObject.SetActive(true);
		 			AtomicNumber.gameObject.SetActive(false);
		 		    ElementSymbol.gameObject.SetActive(false);
		}
		else if(messageVal == 4)
		{
		 			protonInput.gameObject.SetActive(false);
		 			AtomicNumber.gameObject.SetActive(true);
		 		    ElementSymbol.gameObject.SetActive(true);
		 			AtomicNumber.text = protons.ToString();
		 		    ElementSymbol.text = NameArray[protons][1].ToString();
		}
		else if(messageVal == 5)
		{
				   protonInput.gameObject.SetActive(false);
		 		   AtomicNumber.gameObject.SetActive(true);
		 		   ElementSymbol.gameObject.SetActive(true);
		 		   AtomicNumber.text = protons.ToString();
		 		   ElementSymbol.text = NameArray[protons][1].ToString();
		 		   Instantiater.gameObject.SetActive(true);
		 			
		}
		else if(messageVal == 6)
		{
		 		   Instantiater.gameObject.SetActive(false);
		 		   ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
	     		   for(var i = 0 ; i < ProtonArray.length ; i ++){
	         			Destroy(ProtonArray[i]);	
	         	   }
	         	   		
		}
		else if(messageVal == 10)
		{
					Instantiater.gameObject.SetActive(false);
		 		   	ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
	     		   	for(i = 0 ; i < ProtonArray.length ; i ++){
	         			Destroy(ProtonArray[i]);	
	         	   	}
		 			neutronInput.gameObject.SetActive(true);
		 			if(neutrons > RadArray.RadioactiveArray.length - (protons - 1))
		 			{
		 				neutrons = RadArray.RadioactiveArray.length - (protons - 1) ;
		 			}
		 			else if(neutrons == 0)
		 			{
		 			 neutrons = 1;
		 			}
		 			
		 			
		}
		else if(messageVal == 11)
		{
		 			neutronInput.gameObject.SetActive(false);
		 			MassNumber.gameObject.SetActive(true);
		 			MassNumber.text = (protons + neutrons).ToString();
		 			
		}
		else if(messageVal == 12)
		{
				   MassNumber.gameObject.SetActive(true);
		 		   MassNumber.text = (protons + neutrons).ToString();
		 		   Instantiater.gameObject.SetActive(true);
		 		   neutronInput.gameObject.SetActive(false);
		 			
		}
		else if(messageVal == 13)
		{
		 		   Instantiater.gameObject.SetActive(false);
		 			
		}
		else if(messageVal == 17){
			Instantiater.gameObject.SetActive(false);
			MassNumber.text = (protons + neutrons).ToString();
			AtomicNumber.text = protons.ToString();
			ElementSymbol.text = NameArray[protons][1].ToString();
			if(RadioActiveMessage == "Seems like this combination is stable, so we are good to go!" || RadioActiveMessage == "Not supported at this point!"){	
		 		  //nothing!
			}
		 	else{
		 		 messageVal = 23;
		 		 UpdateArray();
		 		 MessageText.text = MessageArr[messageVal];
		 		 Bohr.gameObject.SetActive(true);
		 	}
		}
		else if(messageVal == 19){
					//Shrinks both the Neutrons and Protons, so that we can demonstrate the bohr diagrams without scaling issues
					ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
	     			for(i = 0 ; i < ProtonArray.length ; i ++)
	     			{
	         			if(ProtonArray[i].transform.localScale.x > 0.03 && ProtonArray[i].transform.localScale.y > 0.03 )
	         			{
	         				ProtonArray[i].transform.localScale = ProtonArray[i].transform.localScale - new Vector3(0.015, 0.015, 0) * Time.deltaTime;
	         			}		
	         	  	}
	    			NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
	     		  	for(i = 0 ; i < NeutronArray.length ; i ++)
	     		  	{
	     		  		if(NeutronArray[i].transform.localScale.x > 0.03 && NeutronArray[i].transform.localScale.y > 0.03 )
	     		  		{
	         				NeutronArray[i].transform.localScale = NeutronArray[i].transform.localScale - new Vector3(0.015, 0.015, 0) * Time.deltaTime;
	         			}	
	         	  	}
		}
		else if(messageVal == 21){
			Bohr.gameObject.SetActive(true);		
		}
		else if(messageVal == 22){
			ElectronController.gameObject.SetActive(true);
			Instantiater.gameObject.SetActive(false);		
		}
		else if(messageVal == 23){
			ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
	     		  for(i = 0 ; i < ProtonArray.length ; i ++){
	         			Destroy(ProtonArray[i]);	
	         	  }
	        NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
	     		  for(i = 0 ; i < NeutronArray.length ; i ++){
	         			Destroy(NeutronArray[i]);	
	         	  }
	        ElectronArray =  GameObject.FindGameObjectsWithTag ("electron");
	     		  for(i = 0 ; i < ElectronArray.length ; i ++){
	         			Destroy(ElectronArray[i]);	
	         	  }
	        ShellArray =  GameObject.FindGameObjectsWithTag ("shell");
	     		  for(i = 0 ; i < ShellArray.length ; i ++){
	         			Destroy(ShellArray[i]);	
	         	  }
			RestartButton.gameObject.SetActive(true);
			messageVal = 0;
				
		 			
		}
	}
	else if(SceneManager.GetActiveScene().buildIndex == 2)
	{
		MessageText.gameObject.SetActive(true);
		MessageBubble.gameObject.SetActive(true);
		AtomicNumber.gameObject.SetActive(true);
		ElementSymbol.gameObject.SetActive(true);
		if(messageVal == 0)
		{
			RestartButton.gameObject.SetActive(false);
			AtomicNumber.text = protons.ToString();
		 	ElementSymbol.text = NameArray[protons][1].ToString();
		 	MassNumber.text = (protons + neutrons).ToString();
		}
		if(messageVal == 1)
		{
			Rutherford.gameObject.SetActive(true);
		}
		if(messageVal == 2)
		{
		 	protonInput.gameObject.SetActive(true);
		 	AtomicNumber.text = protons.ToString();
		 	ElementSymbol.text = NameArray[protons][1].ToString();

		}
		if(messageVal == 3)
		{
		 	protonInput.gameObject.SetActive(false);
		}
		if(messageVal == 4)
		{
			neutronInput.gameObject.SetActive(true);
			if(neutrons > RadArray.RadioactiveArray.length - (protons - 1))
		 	{
		 			neutrons = RadArray.RadioactiveArray.length - (protons - 1) ;
		 	}
		 	else if(neutrons == 0)
		 	{
		 			neutrons = 1;
		 	}
		 	MassNumber.gameObject.SetActive(true);
		 	MassNumber.text = (protons + neutrons).ToString();
		}
		if(messageVal == 5)
		{
					Instantiater.gameObject.SetActive(true);
					neutronInput.gameObject.SetActive(false);
					ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
	     			for(i = 0 ; i < ProtonArray.length ; i ++)
	     			{
	         			if(ProtonArray[i].transform.localScale.x > 0.03 && ProtonArray[i].transform.localScale.y > 0.03 )
	         			{
	         				ProtonArray[i].transform.localScale = ProtonArray[i].transform.localScale - new Vector3(0.015, 0.015, 0) * Time.deltaTime;
	         			}		
	         	  	}
	    			NeutronArray =  GameObject.FindGameObjectsWithTag ("neutron");
	     		  	for(i = 0 ; i < NeutronArray.length ; i ++)
	     		  	{
	     		  		if(NeutronArray[i].transform.localScale.x > 0.03 && NeutronArray[i].transform.localScale.y > 0.03 )
	     		  		{
	         				NeutronArray[i].transform.localScale = NeutronArray[i].transform.localScale - new Vector3(0.015, 0.015, 0) * Time.deltaTime;
	         			}	
	         	  	}
		}
		if(messageVal == 9)
		{
			ElectronController.gameObject.SetActive(true);
		}
		if(messageVal == 10)
		{
			RestartButton.gameObject.SetActive(true);
		}
	}
}
	
function UpdateArray () {
//updates the array so that it contains the correct values that it references (protons + namearray)
MessageArr = [

	"Good day! My name is Ernest Rutherford, and in 1920, I discovered a positively charged subatomic particle which I called a proton.",
	"Okay! So what do you want to element do you want to build now?",
	"The number of protons in an atom is what determines what the element is.",
	"So how many protons (1-118) do you want in this atom you are building?",
	 protons + " proton(s); good that means you are making an atom of " + NameArray[protons][0] + ". Check out the symbol (" + NameArray[protons][1] + ")" + " and the atomic number (" + protons + ") at the top", 
	"",
	"Hello, I am James Chadwick, and in 1932, I discovered a neutrally charged particle which came to be known as a 'neutron'.",
	"Neutrons and protons are held together by strong forces into a tight bundle known as an atomic 'nucleus'.",
	"But unless the positively charged protons have enough neutrons mixed in, they will repel each other too much and the nucleus will be too unstable and it will fly apart...",
	"If there are too many neutrons, that will also make the nucleus unstable!",
	"So, how many neutrons (0-" +  (protons + 10) + ") do you want in your atom?",
	neutrons + " neutron(s); good that means that you are making an atom of " + NameArray[protons][0] + "-" + (protons + neutrons),
	"",
	"Check out the atomic mass number (" + (protons + neutrons) + ") in the top right, above the atomic number. This is the number of protons + neutrons",
	"Hello, I am Marie Curie, and I did much of the pioneering work on nuclear stability and the theory of radioactivity.",
	"Now let's see if the proton - neutron combination you have chosen is stable...",
	 RadioActiveMessage,
	"The nucleus is very, very small, in fact if the nucleus was a football the atom would be the size of the football stadium!",
	"Now let's shrink it down a bit so we can add the final ingredients (remeber however that realisitically it should be a 10,000 times smaller than what you will see on screen!)",
	"",
	"Good day. My name is J. J Thompson, and in 1887, I discovered the electron.",
	"But it was me, Niels Bohr (the founder of build a bohr workshop) who figured out that electrons exist around the nucleus in quantum energy levels.",
	"Now, let's have a look at the bohr diagram for this element!",
	"Do you want to retry?",
	""	
];
}
function UpdateContinousArray () {
//updates the array so that it contains the correct values that it references (protons + namearray)
MessageArr = [

	"Okay! So what do you want to element do you want to build now?",
	"",
	"So how many protons (1-118) do you want in this atom you are building?",
	 protons + " proton(s); good that means you are making an atom of " + NameArray[protons][0] + ". Check out the symbol (" + NameArray[protons][1] + ")" + " and the atomic number (" + protons + ") at the top", 
	"So, how many neutrons (0-" +  (protons + 10) + ") do you want in your atom?",
	neutrons + " neutron(s); good that means that you are making an atom of " + NameArray[protons][0] + "-" + (protons + neutrons),
	"Now let's see if the proton - neutron combination you have chosen is stable...",
	 RadioActiveMessage,
	"",
	"Now, let's have a look at the bohr diagram for this element!",
	"Do you want to retry?",
	""	
];
}


function DecreaseMessageVal (){
	if(SceneManager.GetActiveScene().buildIndex == 2){
    	messageVal += increment;
	 	UpdateContinousArray();
   		MessageText.text = MessageArr[messageVal];
   	}
   	if(SceneManager.GetActiveScene().buildIndex == 1){
   	 	if(messageVal == 2)
   	 	{
   	 		increment = 2;
   	 	}
   	 	else if(RadioActiveMessage != "Seems like this combination is stable, so we are good to go!" && messageVal == 21)
   	 	{
   	 		increment = 6;
   	 	}
   	}
	messageVal -= increment;
	UpdateArray ();
   	MessageText.text = MessageArr[messageVal];

}
function IncreaseMessageVal (){
	 if(SceneManager.GetActiveScene().buildIndex == 2)
	 {
	 	if(messageVal >= 23)
	 	{
	 		messageVal = 0;
	 	}
	 	messageVal += increment;
	 	UpdateContinousArray();
   		MessageText.text = MessageArr[messageVal];
    
   	 }
   	 
	 if(SceneManager.GetActiveScene().buildIndex == 1)
	 {
	 	messageVal += increment;
	 	UpdateArray ();
   		MessageText.text = MessageArr[messageVal];
   	}
	
}