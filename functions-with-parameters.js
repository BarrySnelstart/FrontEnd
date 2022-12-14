/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"
function greeter(name)  {
  return name;
}

const greetJan = greeter('jan');
const greetKees = greeter('kees');
console.log("Hoi " + greetJan + "!");
console.log("Hoi " + greetKees+ "!");

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380
const minutesToSeconds = (minutesToSeconds) => {
  return minutesToSeconds * 60
}

const minutesToSeconds1 = minutesToSeconds(1);
const minutesToSeconds2 = minutesToSeconds(3);
const minutesToSeconds3 = minutesToSeconds(23);
console.log(minutesToSeconds1, minutesToSeconds2, minutesToSeconds3);

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

const merge = (string1, string2) => {
return merge
}

const sweetJuicy = merge("soet","sappig");
console.log(sweetJuicy);
const tover = merge ("abra","cadabra");
console.log(tover);


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."
const calculateDogYears = (dogyear) => {
  return dogyear * 7
}

const dog6 = calculateDogYears(6);
console.log("blafblaf = " + dog6 + " jaren oud")
const dog2 = calculateDogYears(2);
console.log("blafblaf = " + dog2 + " jaren oud")

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"
const wrapper = (param1,param2) => {
  return param1 + param2 + param1;
}
const bril = wrapper('*','bril');
console.log(bril);
const beep = wrapper('_','beep');
console.log(beep);
const kaas = wrapper('Q','kaas');
console.log(kaas);
/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."
const createDetailString = (firstName, lastName, profession) => {
  return "Het beroep vam "+ firstName + " " +lastName + " is " +profession
}

const createDetailStringJansen = createDetailString("Jan","Jansen", "docent")
const createDetailStringklaas = createDetailString("kees","klazen", "brandweerman")
console.log(createDetailStringJansen);
console.log(createDetailStringklaas);
