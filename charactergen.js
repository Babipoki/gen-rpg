// Generator stuff...
var toddlerOccupations = ["toddler", "urchin"];
var childhoodOccupations = ["private school student", "public school student", "privately mentored student", "adventurer", "urchin"];
var studentTypes = ["bully", "class clown", "teachers' friend", "nerd", "quiet kid", "well-mannered kid", "kid who loved balloons"];
var adultOccupations = ["blacksmith", "infantry soldier", "knight", "paladin", "shoemaker", "balloon shopkeeper", "mercenary", "assassin", "shinobi", "innkeeper", 
    "tanner", "leatherworker", "mayor", "school teacher", "pawn shop owner", "butcher", "breeder", "farmer", "homeless person", "hunter", "trapper", "woodcutter", "acrobat" ,
    "musician", "painter", "piper", "writer", "actor", "banker", "guild master", "merchant", "collector", "translator", "courier", "bladesmith", "jeweler", "tanner", "woodcarver",
    "goldsmith", "potter", "bandit", "pirate", "burglar", "thief", "outlaw", "kidnapper", "mathematician", "sorcerer", "wizard", "squire", "courtier", "chancellor", "diplomat",
    "herbalist", "doctor", "healer", "alchemist", "baker", "orphanage caretaker", "necromancer", "elementalist", "shaman", "warlock", "mage", "bouncer", "detective",
    "spy", "scout", "cleric", "cultist", "sea captain", "caravaneer", "navigator", "pilgrim", "housewife", "bounty hunter", "gambler", "exile", "tomb raider"];
var retiredOccupations = ["retiree", "military commander", "writer", "refugee", "beggar"];
var primaryPersonalityTraits = ["naughty", "kind", "optimistic", "pessimistic", "sweaty", "generous", "creepy", "perverted"];
var secondaryPersonalityTraits = ["smart", "cruel", "brave", "cowardly", "careless", "alcoholic", "racist"];
var physicalTraits = ["fat", "obese", "good-looking", "athletic", "buff", "muscular", "slender", "slim", "short", "tall", "overweight", "skinny"]
var genders = ["male", "female"];
var races = ["human", "youdel", "lafahl"];
var nations = ["feretti", "ekkionlor", "junjian"]
var commonLanguages = ["Youdelish", "Orc", "Elvish", "Torasian", "Besizottian", "Rotalian"]; // except Abraxian, which is known to anyone who is generated here. To be implemented later.
var exoticLanguages = ["Abyssal", "Celestial", "Draconic", "Infernal", "Sylvan", "Undercommon"];


// Character Generation
function generateCharacter(birthNation = null, race = null) {
    var primaryPersonalityTrait = "";
    var secondaryPersonalityTrait = "";
    var physicalTrait = "";
    var languagesSpoken = 0;
    var childhoodOccupation = "";
    var adultOccupation = "";
    var currentOccupation = "";
    var studentType = "";
    var maturityAges = [16, 30, 18];
    var retirementAges = [60, 348, 68];
    var lifeSpans = [80, 420, 95];
    var childhoodAges = [6, 8, 12];
    var raceID = -1;
    var childhoodAge = 0; // age when you go to school or are able to walk and communicate
    var maturityAge = 0; // age when you are legally responsible for yourself
    var retirementAge = 0; // age when you retire
    var lifeSpan = 0;
    var age = 0;
    var result = "";
    var birthNationName = ""; // full name of the nation
    var pronoun = "";

    if (birthNation == null || birthNation == "random") {
        birthNation = nations[MathRInt(0, nations.length)]; 
    }

    if (birthNation == "feretti") birthNationName = "Feretti Kingdom";
    if (birthNation == "ekkionlor") birthNationName = "Ekkionlor";
    if (birthNation == "junjian") birthNationName = "Junjian Empire";
    if (race == null || race == "random") {
        race = races[MathRInt(0, races.length)]; 
    }

    if (race == "human") {
        raceID = 0;
    } else if (race == "youdel") {
        raceID = 1;
    } else if (race == "lafahl") {
        raceID = 2;
    }
    childhoodAge = childhoodAges[raceID];
    maturityAge = maturityAges[raceID];
    retirementAge = retirementAges[raceID];
    lifeSpan = lifeSpans[raceID];
    age = MathRInt(0, lifeSpan);

        // Generate occupations.
    if (age < childhoodAge) {
        currentOccupation = toddlerOccupations[MathRInt(0, toddlerOccupations.length)];
        childhoodOccupation = "nothing lol";
    } else if (age < maturityAge) {
        currentOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length)];
        childhoodOccupation = currentOccupation;
    } else if (age < retirementAge) {
        currentOccupation = adultOccupations[MathRInt(0, adultOccupations.length)];
        childhoodOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length)];
    } else {
        currentOccupation = retiredOccupations[MathRInt(0, retiredOccupations.length)];
        adultOccupation = adultOccupations[MathRInt(0, adultOccupations.length)];
        childhoodOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length)];
    }
    // Generate student type.
    studentType = studentTypes[MathRInt(0, studentTypes.length)];

    // Generate personality traits and stuff...
    primaryPersonalityTrait = primaryPersonalityTraits[MathRInt(0, primaryPersonalityTraits.length)];
    secondaryPersonalityTrait = secondaryPersonalityTraits[MathRInt(0, secondaryPersonalityTraits.length)];
    physicalTrait = physicalTraits[MathRInt(0, physicalTraits.length)];

    var birthCity = generateSettlement(birthNation);
    var gender = genders[MathRInt(0, genders.length)];
    if (gender == "male") pronoun = "He";
    if (gender == "female") pronoun = "She";
    var characterName = generateName(gender, race);

    // Check if yordle name contains a profession
    if (characterName.includes(" the ")) {
        currentOccupation = characterName.split(" the ")[1].toLowerCase();
    }

    result = "<b>" + characterName + "</b> is " + indefinite_article(physicalTrait) + " " + physicalTrait + " " + age + " year old " + gender + " " + race + ", born in " + birthCity + ", " + birthNationName + ". ";
    result += pronoun + " is " + indefinite_article(primaryPersonalityTrait) +" " + primaryPersonalityTrait + " and " + secondaryPersonalityTrait + " " + currentOccupation + ". ";
    // Add childhood or adult occupations based on age into text:
    
    if (age >= maturityAge) {
        result += "During the childhood, " + characterName + " was " + indefinite_article(childhoodOccupation) + " " + childhoodOccupation + ". ";
    } if (age >= retirementAge) {
        result += "Before retirement, " + pronoun.toLowerCase() + " was " + indefinite_article(adultOccupation) + " " + adultOccupation + ". "
    }
        result += "<br><br>";
    // Add student type info.
    if (currentOccupation.includes("student") || childhoodOccupation.includes("student")) {
        if (age < maturityAge && age >= childhoodAge) {
            result += "In school, " + pronoun.toLowerCase() + " is regarded to as " + indefinite_article(studentType) + " " + studentType + ". ";
        } else if (age >= maturityAge && age < retirementAge) {
            result += "When " + pronoun.toLowerCase() + " was in school, " + pronoun.toLowerCase() + " was mostly regarded as " + indefinite_article(studentType) + " " + studentType + ". ";
        } else if (age >= retirementAge) {
            result += pronoun + " clearly remembers how back in the school days, " + characterName + " was the name associated with the " + studentType + " of the class. ";
        }
    }

    document.getElementById("result").innerHTML = result;
}

if (gen == "character") {
    generateCharacter();
}