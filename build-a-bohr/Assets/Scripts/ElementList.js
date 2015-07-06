﻿#pragma strict
var protons = ChangeAtoms.protons;
public static var vtext = "Hydrogen";

public static var NameArray : String[] = [
	"Nothing",
	"Hydrogen",
	"Helium",
	"Lithium",
	"Beryllium",
	"Boron",
	"Carbon",
	"Nitrogen",
	"Oxygen",
	"Fluorine",
 	"Neon",
 	"Sodium",
 	"Magnesium",
 	"Aluminum" ,
 	"Silicon",
 	"Phosphorus",
 	"Sulfur",
	"Chlorine",
	"Argon",
	"Potassium",
	"Calcium",
	"Scandium",
	"Titanium",
 	"Vanadium",
 	"Chromium",
	"Manganese",
 	"Iron",
	"Cobalt",
 	"Nickel",
 	"Copper",
 	"Zinc",
 	"Gallium",
 	"Germanium",
 	"Arsenic",
	"Selenium",
 	"Bromine",
	"Krypton",
 	"Rubidium",
	"Strontium",
	"Yttrium",
 	"Zirconium",
	"Niobium",
 	"Molybdenum",
 	"Technetium",
 	"Ruthenium",
 	"Rhodium",
	"Palladium",
	"Silver",
 	"Cadmium",
	"Indium",
 	"Tin",
 	"Antimony",
 	"Tellurium",
 	"Iodine",
 	"Xenon",
 	"Cesium",
 	"Barium",
 	"Lanthanum",
 	"Cerium",
 	"Praseodymium",
 	"Neodymium",
 	"Promethium",
 	"Samarium",
	"Europium",
 	"Gadolinium",
 	"Terbium",
 	"Dysprosium",
 	"Holmium",
 	"Erbium",
 	"Thulium",
 	"Ytterbium",
	"Lutetium",
 	"Hafnium",
 	"Tantalum",
 	"Tungsten",
	"Rhenium",
 	"Osmium",
 	"Iridium",
 	"Platinum",
	"Gold",
 	"Mercury",
 	"Thallium",
	"Lead",
 	"Bismuth",
 	"Polonium",
 	"Astatine",
	"Radon",
 	"Francium",
	"Radium",
 	"Actinium",
 	"Thorium",
 	"Protactinium",
 	"Uranium",
 	"Neptunium",
	"Plutonium",
	"Americium",
	"Curium",
	"Berkelium",
	"Californium",
 	"Einsteinium",
	"Fermium",
	"Mendelevium",
	"Nobelium",
	"Lawrencium",
	"Rutherfordium",
	"Dubnium",
	"Seaborgium",
	"Bohrium",
	"Hassium",
	"Meitnerium",
	"Darmstadtium",
	"Roentgenium",
	"Copernicium",
	"Ununtrium",
	"Flerovium",
	"Ununpentium",
	"Livermorium",
	"Ununseptium",
	"Ununoctium"
	];
function Start (){
 var protons = ChangeAtoms.protons;
 if(protons <= 0){
 Application.LoadLevel(Application.loadedLevel - 1);
 }
}
function Update () {
 
 var protons = ChangeAtoms.protons;
 var vtext = NameArray[protons];
 Debug.Log(NameArray[protons]);


}