#pragma strict
//declares all the variables referencing gameobjects that are not UI
var Rutherford : GameObject;
var Bohr : GameObject;
var Curie : GameObject;
var Chadwick : GameObject;
var Instantiater : GameObject;
var MessageBubble : GameObject;
//declares all the variables referencing UI components
var MessageText : UnityEngine.UI.Text;
var AtomicNumber : UnityEngine.UI.Text;
var MassNumber : UnityEngine.UI.Text;
var ElementSymbol : UnityEngine.UI.Text;
var protonInput : UnityEngine.UI.InputField;
var neutronInput : UnityEngine.UI.InputField;
//declares all the numerical variables
var protons = ChangeAtoms.protons;
var neutrons = ChangeAtoms.neutrons;
var messageVal = 1;
public static var increment = 1;
//creates a message variable used to display text relating to if the created atom is radioactive or not
var RadioActiveMessage = "";
//creates all the arrays neccessary
var ProtonArray : GameObject[];
var NeutronArray : GameObject[];
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

function Start() {
 //Sets the text to whatever is neccessary depedning on if the user starts the scene or is simply restarting the process
 if(increment == 1){
  MessageText.text = MessageArr[0];
 }
 else if(increment == 2){
  MessageText.text = MessageArr[1];
 }
 
}

function Update() {
	//used to transform the scene to make it fit the text and/or required inputs/display elements
	protons = ChangeAtoms.protons;
	neutrons = ChangeAtoms.neutrons;
	RadioActiveMessage = RadArray.RadioActiveMessage;
	if(messageVal == 3){
	 			protonInput.gameObject.SetActive(true);
	}
	else if(messageVal == 4){
	 			protonInput.gameObject.SetActive(false);
	 			AtomicNumber.gameObject.SetActive(true);
	 		    ElementSymbol.gameObject.SetActive(true);
	 			AtomicNumber.text = protons.ToString();
	 		    ElementSymbol.text = NameArray[protons][1].ToString();
	}
	else if(messageVal == 5){
	           MessageText.gameObject.SetActive(false);
	 		   MessageBubble.gameObject.SetActive(false);
	 		   Instantiater.gameObject.SetActive(true);
	 			
	}
	else if(messageVal == 6){
	 		   MessageText.gameObject.SetActive(true);
	 		   MessageBubble.gameObject.SetActive(true);
	 		   Instantiater.gameObject.SetActive(false);
	 		   ProtonArray =  GameObject.FindGameObjectsWithTag ("proton");
     		   for(var i = 0 ; i < ProtonArray.length ; i ++){
         			Destroy(ProtonArray[i]);	
         	   }
         	   Rutherford.gameObject.SetActive(false);
         	   Chadwick.gameObject.SetActive(true);		
	}
	else if(messageVal == 10){
	 			neutronInput.gameObject.SetActive(true);
	 			
	}
	else if(messageVal == 11){
	 			neutronInput.gameObject.SetActive(false);
	 			MassNumber.gameObject.SetActive(true);
	 			MassNumber.text = (protons + neutrons).ToString();
	 			
	}
	else if(messageVal == 12){
	 		   MessageText.gameObject.SetActive(false);
	 		   MessageBubble.gameObject.SetActive(false);
	 		   Instantiater.gameObject.SetActive(true);
	 			
	}
	else if(messageVal == 13){
	 		   MessageText.gameObject.SetActive(true);
	 		   MessageBubble.gameObject.SetActive(true);
	 		   Instantiater.gameObject.SetActive(false);
	 			
	}
	else if(messageVal == 14){
	 		   Chadwick.gameObject.SetActive(true);
	 		   Curie.gameObject.SetActive(true);				
	 			
	}
	//Debug.Log(MessageArr[messageVal]);
	if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {	
	 	//checks if the message is one requiring input, otherwise it will continue to the next message
	 	if(messageVal == 3){
	 	    //make sure that actual input has occured
	 		if(protons > 0){
	 		 	NewMessage();
	 		}
		}
		else if(messageVal == 10){
		    //make sure that acutal input has occured
			if(neutrons > 0){
			 NewMessage();
			}
		}
	 	else{
	 	   //if no input is required, just display the next message
	 		NewMessage();
	 		
	 		
	 	}	
	}
	
}

function NewMessage() {
    //Increases the value of the array, then updates it, before finally displauing the text to the user
    messageVal+= increment;
    UpdateArray ();
    MessageText.text = MessageArr[messageVal];
    
}

function UpdateArray () {
//updates the array so that it contains the correct values that it references (protons + namearray)
MessageArr = [

	"Good day! My name is Ernest Rutherford, and in 1920, I discovered a positively charged subatomic particle which I called a proton.",
	"Okay! So what do you want to element do you want to build now?",
	"The number of protons in an atom  is what determines what the element is",
	"So how many protons (1-118) do you want in this atom you are building?",
	 protons + " proton(s); good that means you are making an atom of " + NameArray[protons][0] + ". Check out the symbol (" + NameArray[protons][1] + ")" + " and the atomic number (" + protons + ") at the top", 
	"",
	"Hello, I am James Chadwick, and in 1932, I discovered a neutrally charged particle which came to be known as a 'neutron'.",
	"Neutrons and protons are held together by strong forces into a tight bundle known as an atomic 'nucleus'.",
	"But unless the positively charged protons have enough neutrons mixed in, they will repel each other too much and the nucleus will be too unstable and it will fly apart...",
	"If there are too many neutrons, that will also make the nucleus unstable!",
	"So, how many neutrons (0-200) do you want in your atom?",
	neutrons + " neutron(s); good that means that you are making an atom of " + NameArray[protons][0] + "-" + (protons + neutrons),
	"",
	"Check out the atomic mass number (" + (protons + neutrons) + ")in the top right, above the atomic number. This is the number of protons + neutrons",
	"Hello, I am Marie Curie, and I did much of the pioneering work on nuclear stability and the theory of radioactivity.",
	"Now let's see if the proton - neutron combination you have chosen is stable...",
	 RadioActiveMessage
	
	
];
}