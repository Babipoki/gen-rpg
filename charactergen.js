// Generator stuff...
var toddlerOccupations = ["toddler", "urchin", "orphan"];
var childhoodOccupations = ["private school student", "public school student", "privately mentored student", "adventurer", "urchin", "travelling musician", "travelling circus performer",
    "little squire", "newspaper kid", "orphan", "magician's apprentice", "wizard's apprentice"];
var studentTypes = ["bully", "class clown", "teachers' friend", "nerd", "quiet kid", "well-mannered kid", "balloon enthusiast", "explosives expert", "school merchant",
    "dancer", "artist", "friend of all the teachers", "religious kid", "rebel"];
var adultOccupations = ["blacksmith", "infantry soldier", "knight", "paladin", "shoemaker", "balloon shopkeeper", "mercenary", "assassin", "shinobi", "innkeeper", 
    "tanner", "leatherworker", "mayor", "school teacher", "pawn shop owner", "butcher", "breeder", "farmer", "homeless person", "hunter", "trapper", "woodcutter", "acrobat" ,
    "musician", "painter", "piper", "writer", "actor", "banker", "guild master", "merchant", "collector", "translator", "courier", "bladesmith", "jeweler", "tanner", "woodcarver",
    "goldsmith", "potter", "bandit", "pirate", "burglar", "thief", "outlaw", "kidnapper", "mathematician", "sorcerer", "wizard", "squire", "courtier", "chancellor", "diplomat",
    "herbalist", "doctor", "healer", "alchemist", "baker", "orphanage caretaker", "necromancer", "elementalist", "shaman", "warlock", "mage", "bouncer", "detective",
    "spy", "scout", "cleric", "cultist", "sea captain", "caravaneer", "navigator", "pilgrim", "housekeeper", "bounty hunter", "gambler", "exile", "tomb raider", "warrior", "town guard", "red mage", "explorer", "loan shark", "grocer", "entrepreneur", "engineer", "architect", "sailor", "programmer", "electrician", "magician", "lawyer", "rogue", "janitor", "hotel manager", "bartender", "beekeeper", "shepherd", "zookeeper", "clown", "acrobat", "sculptor", "wrestler", "poet", "accountant", "pimp", "street vendor", "herald", "armorer", "bookbinder", "locksmith", "taxidermist", "toymaker", "factory worker", "crime boss", "drug lord", "smuggler", "anthropologist", "historian", "cartographer", "chemist", "professor", "philosopher", "scholar", "tax collector", "aristocrat", "noble", "physician", "surgeon", "veterinarian"];
var retiredOccupations = ["retiree", "military commander", "writer", "refugee", "beggar", "wizard"];
var primaryPersonalityTraits = ["naughty", "kind", "optimistic", "pessimistic", "sweaty", "generous", "creepy", "perverted", "absent-minded", "naive", "calm", "organized", "clueless"];
var secondaryPersonalityTraits = ["smart", "cruel", "brave", "cowardly", "careless", "alcoholic", "racist", "shy", "fearful", "nervous", "proud", "unstable", "observant", "artistic", "creative"];
var physicalTraits = ["fat", "obese", "good-looking", "athletic", "buff", "muscular", "slender", "slim", "short", "tall", "overweight", "skinny"]
var genders = ["male", "female"];
var races = ["human", "youdel", "lafahl", "namazu"];
var nations = ["feretti", "ekkionlor", "junjian", "toras", "besizottia", "rotali", "pentiga", "santeno", "abrax", "cora", "salimi"];
var commonLanguages = ["Youdelish", "Orc", "Elvish", "Torasian", "Besizottian", "Rotalian", "Salimian", "Santenian", "Pentigan", "Abian", "Borbonian", "Corian", "Eglenathian"]; // except Abraxian, which is known to anyone who is generated here. To be implemented later.
var exoticLanguages = ["Abyssal", "Celestial", "Draconic", "Infernal", "Sylvan", "Undercommon"];
var sexualities = ["straight", "gay", "bisexual"];
var bodyParts = ["left leg", "right leg", "left foot", "right foot", "spine", "left arm", "right arm", "forehead", "groin"];
var balloonColors = ["red", "pink", "blue", "green", "yellow", "white", "black", "yellow smiley", "pink bunny-shaped"];
// Events
var childhoodEventCategories = ["betrayal", "injury", "discovery", "lost toy", "loss of relatives", "sickness", "paranormal/magical sighting", "commited crime", "fortune"];

// Defaults
var archnemesis = "";
var bestFriend = "";
var romanticPartner = "";
var brokeUp = false;
var dadAlive = true;
var momAlive = true;

// Stats
var intelligence = 0;
var charisma = 0;
var constitution = 0;
var strength = 0;
var wisdom = 0;
var dexterity = 0;

var totalStats = 6;




// Character Generation
function generateCharacter(birthNation = null, race = null, agePref = null, genderPref = null) {
    var primaryPersonalityTrait = "";
    var secondaryPersonalityTrait = "";
    var physicalTrait = "";
    var gender = "";
    var languagesSpoken = 0;
    var childhoodOccupation = "";
    var adultOccupation = "";
    var currentOccupation = "";
    var studentType = "";
    var childhoodAges = [6, 8, 12, 2];
    var maturityAges = [16, 30, 18, 4];
    var retirementAges = [60, 348, 68, 8];
    var lifeSpans = [80, 420, 95, 60];
    var raceID = -1;
    var childhoodAge = 0; // age when you go to school or are able to walk and communicate
    var maturityAge = 0; // age when you are legally responsible for yourself
    var retirementAge = 0; // age when you retire
    var lifeSpan = 0;
    var age = 0;
    var result = "";
    var birthNationName = ""; // full name of the nation
    var pronoun = "";
    var sexuality = "";

    // Reset values
    brokeUp = false;
    dadAlive = true;
    momAlive = true;

    // reset stats
    intelligence = 0;
    charisma = 0;
    constitution = 0;
    strength = 0;
    wisdom = 0;
    dexterity = 0;
        

    // Sexuality
    sexuality = sexualities[MathRInt(0, sexualities.length - 1)];

    // Birth Nation
    if (birthNation == null || birthNation == "random") {
        birthNation = nations[MathRInt(0, nations.length - 1)]; 
    }

    if (birthNation == "feretti") birthNationName = "Feretti Kingdom";
    if (birthNation == "ekkionlor") birthNationName = "Ekkionlor";
    if (birthNation == "junjian") birthNationName = "Junjian Empire";
    if (birthNation == "toras") birthNationName = "Republic of Toras";
    if (birthNation == "besizottia") birthNationName = "Republic of Besizottia";
    if (birthNation == "rotali") birthNationName = "Rotali Sultanate";
    if (birthNation == "pentiga") birthNationName = "Republic of Pentiga";
    if (birthNation == "santeno") birthNationName = "Republic of Santeno";
    if (birthNation == "abrax") birthNationName = "Kingdom of Abrax";
    if (birthNation == "cora") birthNationName = "Realm of Cora";
    if (birthNation == "salimi") birthNationName = "Salimi Confederacy"

    if (race == null || race == "random") {
        race = races[MathRInt(0, races.length - 1)]; 
    }
    // Assign nation stats
    switch (birthNationName) {
        case "Feretti Kingdom":
            intelligence += 2;
            constitution -= 1;
            break;
        case  "Ekkionlor":
                dexterity += 3;
                intelligence -= 2;
            break;
        case  "Junjian Empire":
                strength += 1;
                charisma += 1;
                constitution += 1;
                wisdom -= 1;
            break;
        case  "Republic of Toras":
                constitution += 1;
                strength += 2;
                charisma += 2;
            break;
        case  "Republic of Besizottia":
                intelligence += 3;
                wisdom += 2;
                strength -= 1;
            break;
        case  "Rotali Sultanate":
                intelligence += 3;
            break;
        case  "Republic of Pentiga":
                intelligence += 2;
            break;
        case "Republic of Santeno":
                intelligence += 1;
                constitution += 2;
            break;
        case "Kingdom of Abrax":
                wisdom += 1;
                charisma += 1;
            break;
        case  "Realm of Cora":
                charisma += 1;
                constitution -= 1;
            break;
        case  "Salimi Confederacy":
                strength += 3;
                charisma += 1;
    }

    // Race & their stats
    if (race == "human") {
        raceID = 0;
        strength += 1;

    } else if (race == "youdel") {
        raceID = 1;
        dexterity += 1;
        constitution += 2;
        intelligence -= 2;
    } else if (race == "lafahl") {
        raceID = 2;
        intelligence += 2;
        charisma += 1;
    } else if (race == "namazu") {
        raceID = 3;
        charisma += 2;
        intelligence -= 1;
    }
    childhoodAge = childhoodAges[raceID];
    maturityAge = maturityAges[raceID];
    retirementAge = retirementAges[raceID];
    lifeSpan = lifeSpans[raceID];

    
    if (agePref == "random" || agePref == null) {
        age = MathRInt(0, lifeSpan);
    } else if (agePref == "toddler") {
        age = MathRInt(0, childhoodAge);
    } else if (agePref == "child") {
        age = MathRInt(childhoodAge, maturityAge);
    } else if (agePref == "adult") {
        age = MathRInt(maturityAge, retirementAge);
    } else {
        age = MathRInt(retirementAge, lifeSpan);
    }

        // Assign age stats;
    if (age / childhoodAge < 1) {
        wisdom -= 4;
        intelligence -= 3;
        dexterity += 1;
    } else if (age / maturityAge < 1) {
        wisdom -= 2;
        intelligence -= 1;
        dexterity += 3;
    } else if (age / retirementAge < 1) {
        wisdom += 1;
    } else {
        wisdom += 3;
        dexterity -= 4;
        charisma -= 3;
    }

        // Generate occupations.
    if (age < childhoodAge) {
        currentOccupation = toddlerOccupations[MathRInt(0, toddlerOccupations.length - 1)];
        childhoodOccupation = "nothing lol";
    } else if (age < maturityAge) {
        currentOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length - 1)];
        childhoodOccupation = currentOccupation;
    } else if (age < retirementAge) {
        currentOccupation = adultOccupations[MathRInt(0, adultOccupations.length - 1)];
        childhoodOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length - 1)];
    } else {
        currentOccupation = retiredOccupations[MathRInt(0, retiredOccupations.length - 1)];
        adultOccupation = adultOccupations[MathRInt(0, adultOccupations.length - 1)];
        childhoodOccupation = childhoodOccupations[MathRInt(0, childhoodOccupations.length - 1)];
    }

    // Female / male equivalents
    if (gender == "female") {
        if (currentOccupation == "bartender") currentOccupation = "barmaid";
        if (adultOccupation == "bartender") adultOccupation = "barmaid";
        if (adultOccupation == "hunter") adultOccupation = "huntress";
        if (currentOccupation == "hunter") currentOccupation = "huntress";
        if (currentOccupation == "actor") currentOccupation = "acress";
        if (adultOccupation == "actor") adultOccupation = "actress";
        if (currentOccupation == "bounty hunter") currentOccupation = "bounty huntress";
        if (adultOccupation == "bounty hunter") adultOccupation = "bounty huntress";
        if (currentOccupation == "housekeeper") currentOccupation = "housewife";
        if (adultOccupation == "housekeeper") adultOccupation = "housewife";
    }


    // Generate student type.
    studentType = studentTypes[MathRInt(0, studentTypes.length - 1)];

    // Childhood occupation's stats:
    if (age > childhoodAge) {
        if (childhoodOccupation == "private school student" || childhoodOccupation == "public school student") {
            intelligence += 3;
            // get student type stats:
            ////////// FILL ME IN
            if (studentType == "bully" || studentType == "rebel") {
                charisma += 2;
                strength += 2;
                intelligence -= 2;
                wisdom -= 1;
            } else if (studentType == "class clown") {
                charisma -= 1;
            } else if (studentType == "teachers' friend" || studentType == "quiet kid" || studentType == "friend of all the teachers") {
                charisma -= 1;
                wisdom += 1;
            } else if (studentType == "nerd" || studentType == "explosives expert") {
                constitution += 2;
                intelligence += 4;
            } else if (studentType == "well-mannered kid") {
                charisma += 1;
                intelligence += 1;
                wisdom += 2;
            } else if (studentType == "balloon enthusiast") {
                constitution -= 1;
            } else if (studentType == "school merchant") {
                wisdom += 3;
                charisma += 3;
            } else if (studentType == "dancer") {
                dexterity += 2;
            } else if (studentType == "artist") {
                wisdom += 2;
            } else if (studentType == "religious kid") {
                wisdom += 2;
                charisma += 1;
            }
        } else if (childhoodOccupation == "privately mentored student") {
            intelligence += 2;
        } else if (childhoodOccupation == "adventurer") {
            dexterity += 3;
            constitution += 2;
            wisdom += 1;
            charisma += 1;
        } else if (childhoodOccupation == "urchin") {
            dexterity += 1;
            constitution += 2;
        } else if (childhoodOccupation == "travelling musician") {
            charisma += 4;
        } else if (childhoodOccupation == "travelling circus performer") {
            dexterity += 3;
            charisma += 1;
        } else if (childhoodOccupation == "little squire") {
            strength += 1;
            dexterity += 1;
            intelligence += 1;
            wisdom += 1;
            charisma += 1;
            constitution += 1;
        } else if (childhoodOccupation == "newspaper kid") {
            intelligence += 3;
            dexterity += 1;
        } else if (childhoodOccupation == "orphan") {
            charisma -= 1;
            dexterity += 1;
            constitution += 1;
            wisdom -= 1;
        } else if (childhoodOccupation == "magician's apprentice") {
            charisma += 2;
            dexterity += 1;
            intelligence += 1;
        } else if (childhoodOccupation == "wizard's apprentice") {
            intelligence += 2;
            wisdom += 2;
        }
    }

    // Generate personality traits and stuff...
    primaryPersonalityTrait = primaryPersonalityTraits[MathRInt(0, primaryPersonalityTraits.length - 1)];
    secondaryPersonalityTrait = secondaryPersonalityTraits[MathRInt(0, secondaryPersonalityTraits.length - 1)];
    physicalTrait = physicalTraits[MathRInt(0, physicalTraits.length - 1)];

    // Physical trait's stats:
    if (physicalTrait == "fat" || physicalTrait == "obese" || physicalTrait == "overweight") {
        strength += 1;
        dexterity -= 2;
        intelligence -= 1; // lose weight if ur that smart, dumbass
        charisma -= 2;
        constitution -= 1;
    } else if (physicalTrait == "good-looking") {
        charisma += 2;
    } else if (physicalTrait == "athletic") {
        dexterity += 3;
        strength += 1;
        constitution += 2;
    } else if (physicalTrait == "buff" || physicalTrait == "muscular") {
        strength += 4;
    } else if (physicalTrait == "slender" || physicalTrait == "slim" || physicalTrait == "skinny") {
        dexterity += 1;
    } else if (physicalTrait == "short") {
        dexterity += 2;
    } else if (physicalTrait == "tall") {
        charisma += 1;
    }

    // Primary trait's stats:
    if (primaryPersonalityTrait == "naughty") {
        charisma += 2;
        wisdom -= 1;
    } else if (primaryPersonalityTrait == "kind") {
        charisma += 3;
        wisdom += 2;
    } else if (primaryPersonalityTrait == "optimistic") {
        wisdom -= 1;
        constitution += 1;
        intelligence += 1;
    } else if (primaryPersonalityTrait == "pessimistic") {
        wisdom -= 1;
        charisma -= 1;
        intelligence -= 1;
    } else if (primaryPersonalityTrait == "sweaty") {
        charisma -= 3;
        intelligence -= 1;
    } else if (primaryPersonalityTrait == "generous") {
        charisma += 3;
        wisdom += 1;
        intelligence += 1;
    } else if (primaryPersonalityTrait == "creepy" || primaryPersonalityTrait == "perverted") {
        charisma -= 1;
        wisdom -= 3;
    } else if (primaryPersonalityTrait == "absent-minded" || primaryPersonalityTrait == "clueless") {
        wisdom -= 2;
        intelligence -= 3;
    } else if (primaryPersonalityTrait == "naive") {
        charisma -= 2;
    } else if (primaryPersonalityTrait == "calm") {
        intelligence += 3;
        charisma += 1;
    } else if (primaryPersonalityTrait == "organized"){
        intelligence += 3;
        wisdom += 2;
    }

    // Secondary trait's stats:
    if (secondaryPersonalityTrait == "smart") {
        intelligence += 4;
        wisdom += 2;
    } else if (secondaryPersonalityTrait == "cruel") {
        charisma -= 1;
        strength += 2;
        constitution += 2;
        intelligence -= 1;
    } else if (secondaryPersonalityTrait == "brave") {
        constitution += 2;
        strength += 2;
    } else if (secondaryPersonalityTrait == "cowardly") {
        constitution -= 2;
        strength -= 3;
        dexterity += 1;
    } else if (secondaryPersonalityTrait == "careless") {
        wisdom -= 2;
        intelligence -= 2;
        dexterity += 1;
    } else if (secondaryPersonalityTrait == "alcoholic") {
        intelligence -= 1;
        wisdom -= 1;
        constitution -= 2;
        strength -= 1;
        charisma -= 1;
    } else if (secondaryPersonalityTrait == "racist") {
        charisma -= 1;
        intelligence -= 1;
        wisdom -= 2;
    } else if (secondaryPersonalityTrait == "shy") {
        charisma -= 3;
    } else if (secondaryPersonalityTrait == "fearful") {
        wisdom -= 2;
        constitution -= 2;
    } else if (secondaryPersonalityTrait == "nervous") {
        charisma -= 1;
    } else if (secondaryPersonalityTrait == "proud") {
        strength += 1;
        constitution += 1;
    } else if (secondaryPersonalityTrait == "unstable") {
        strength -= 2;
        dexterity -= 2;
        intelligence -= 4;
        constitution -= 4;
        charisma -= 3;
    } else if (secondaryPersonalityTrait == "observant") {
        wisdom += 3;
    } else if (secondaryPersonalityTrait == "creative" || secondaryPersonalityTrait == "artistic") {
        charisma += 2;
        intelligence += 2;
    }

    var birthCity = generateSettlement(birthNation);
    if (genderPref == "random" || genderPref == null) {
        gender = genders[MathRInt(0, genders.length - 1)];
    } else if (genderPref == "male") {
        gender = "male";
    } else {
        gender = "female";
    }
    if (gender == "male") pronoun = "He";
    if (gender == "female") pronoun = "She";
    var characterName = generateName(gender, race);


    // Generate gender stats
    if (gender == "male") {
        strength += 2;
        constitution += 1;
    } else {
        intelligence += 1;
        dexterity += 1;
        charisma += 1;
    }

    youdelNonprofessionTitles = ["Unknown", "Warhammer", "Longnose", "Keeper", "Smith", "Rocket Launcher", "Skullcarver", "Affiliator", "Balloonpopper", "Digmaster", "Evil", "Firemaker", "Grasshopper", "Humanhelper", "Inspector", "Jungler", "Killer", "Logmaster", "Materializer", "Nutcracker", "Observer", "Perfectionist", "Quiet", "Rocksmasher", "Shieldmaster", "Timetraveler", "Undercutter", "Vendor", "Xenocide", "Abstracted", "Balloonhugger", "Chickenwings", "Downer", "Eavesdropper", "Goatkeeper", "Herald", "Innkeeper", "Jokester", "Kilted", "Loser", "Master", "Naked", "Omitted", "Principious", "Ridiculous", "Smoocher", "Uninvited", "Vengeful", "Zealous", "Winner"]
    // Check if yordle name contains a profession
    if (characterName.includes(" the ")){
        if (!youdelNonprofessionTitles.includes(characterName.split(" the ")[1])) {
            currentOccupation = characterName.split(" the ")[1].toLowerCase();
        }
    }

    // Generate PEOPLE
    archnemesis = generateName("random", "random");
    bestFriend = generateName("random", "random");

    if (getPartner(pronoun, sexuality) == "boyfriend") romanticPartner = generateName("male");
    else romanticPartner = generateName("female");

    // Result:

    result = "<b>" + characterName + "</b> is " + indefinite_article(physicalTrait) + " " + physicalTrait + " " + age + " year old " + gender + " " + race + ", born in " + birthCity + ", " + birthNationName + ". ";
    result += pronoun + " is " + indefinite_article(primaryPersonalityTrait) +" " + primaryPersonalityTrait + " and " + secondaryPersonalityTrait + " " + currentOccupation + ". ";
    // Add childhood or adult occupations based on age into text:
    
    if (age >= maturityAge) {
        result += "During the childhood, " + characterName.split(" ")[0] + " was " + indefinite_article(childhoodOccupation) + " " + childhoodOccupation + ". ";
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
            result += pronoun + " clearly remembers how back in the school days, " + characterName.split(" ")[0] + " was the name associated with the " + studentType + " of the class. ";
        }
    }
    // add events:
    if (age > childhoodAge) {
        result += generateChildhoodEvent(pronoun, characterName, birthNationName, race, age, maturityAge, childhoodAge, sexuality);
    }
    displayStats();
    if (race == "namazu") result+= " Yes, yes.";
    document.getElementById("result").innerHTML = result;
}

if (gen == "character") {
    generateCharacter();
}



// Generate Events

function generateChildhoodEvent(pronoun, characterName, birthNationName, race, age, maturityAge, childhoodAge, sexuality) {
    var result = "";
    var ageOfEvent = MathRInt(childhoodAge, maturityAge);
    var whose = "his";
    if (pronoun == "He") whose = "his";
        else whose = "her";
    var whom = "him";
    if (pronoun == "He") whom = "him";
        else whom = "her";
    // Loop age of event till it's not the actual age of the character. As long as it's not the only possibility.
    if (age != childhoodAge) {
        while (ageOfEvent == age) {
            ageOfEvent = MathRInt(childhoodAge, age);
        }
    }
    var eventCategory = childhoodEventCategories[MathRInt(0, childhoodEventCategories.length - 1)];
    var partner = getPartner(pronoun, sexuality);
    
    

    // if the person still a child
    if (age < maturityAge) {
        var randomRoll = MathRInt(0, 3);
        if (randomRoll == 0) result += "Not too long ago, when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
        else if (randomRoll == 1) result += "Just a while back, when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
        else if (randomRoll == 2) result += "A little while ago, when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
        else if (randomRoll == 3) result += "It wasn't too long before, when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
    } // if the person is no longer a child
    else {
        var randomRoll = MathRInt(0, 3);
        if (randomRoll == 0) result += "Back when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
        else if (randomRoll == 1) result += "At the time when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
        else if (randomRoll == 2) result += "As one of more memorable childhood events " + pronoun.toLowerCase() + " remembers, at the age of " + ageOfEvent + ", ";
        else if (randomRoll == 3) result += "During the times when " + pronoun.toLowerCase() + " was " + ageOfEvent + " years old, ";
    }

    // Actual events:
    if (eventCategory == "betrayal") {
        var randomRoll = MathRInt(0, 4);
        if (randomRoll == 0) {result += whose + " best friend " + bestFriend + " betrayed " + whom + ", driving back the trust of the society as a whole.";
                    bestFriend = generateName("random", "random");
                    result += " " + bestFriend + " then became " + whose + " best friend."
    }
        else if (randomRoll == 1) result += whose + " parents betrayed " + whom + ", leaving him in the streets for " + whom + "self.";
        else if (randomRoll == 2) {result += whose + " " + partner + " " + romanticPartner +" betrayed " + whom + ", cheating their way into another kid's heart.";
                    romanticPartner = generateName(getPartner(pronoun, sexuality) == "boyfriend" ? "male" : "female") } // assign new romantic partner, since this one is lost.
        else if (randomRoll == 3) result += whose + " friend betrayed " + whom + ", as they joined " + getFirstWord(characterName) + "'s archnemesis - <b>" + archnemesis + "</b>.";
        else if (randomRoll == 4) result += whose + " parents sold " + whom + " to slavery, only to sustain themselves.";
    } else if (eventCategory == "injury") {
        var randomRoll = MathRInt(0, 3); 
        var randomBodyPart = bodyParts[MathRInt(0, bodyParts.length - 1)];
        if (randomRoll == 0) result += pronoun.toLowerCase() + " fell into the well, injuring " + whose + " " + randomBodyPart + " in the process.";
        else if (randomRoll == 1) result += pronoun.toLowerCase() + " was beaten up by other kids, injuring " + whose + " " + randomBodyPart + " heavily.";
        else if (randomRoll == 2) result += pronoun.toLowerCase() + " tried to punch a boulder, injuring the right hand in the process.";
        else if (randomRoll == 3) result += pronoun.toLowerCase() + " lost an eye after falling in the ruins."
    } else if (eventCategory == "discovery") {
        var randomRoll = MathRInt(0, 2);
        if (randomRoll == 0) result += pronoun.toLowerCase() + " discovered a terrible secret of one of " + whose + ` parents. ${pronoun} kept it for ` + whom + "self ever since.";
        else if (randomRoll == 1) {
            result += pronoun.toLowerCase() + " discovered that " + whose + " friend " + generateName("random", "random") +" was gay.";
            if (sexuality == "gay" || sexuality == "bisexual") {
                result += " It made " + getFirstWord(characterName) + " a more confident person, as " + pronoun.toLowerCase() + " was also " + sexuality + ".";
            } else {
                var reaction = MathRInt(0, 1);
                if (reaction == 0) result += " This angered " + getFirstWord(characterName) + " as " + pronoun.toLowerCase() + " grew up in a very homophobic environment.";
                if (reaction == 1) result += " " + getFirstWord(characterName) + " didn't seem to mind.";
            }
        }
        else if (randomRoll == 2) result += pronoun.toLowerCase() + " made a scientific discovery. Not something of spectacular scope. But for " + whom + " it was a big deal.";
    } else if (eventCategory == "lost toy") {
        var toys = ["balloon", "teddy bear", "doll", "wooden sword"]
        var randomToy = toys[MathRInt(0, toys.length - 1)];
        if (randomToy == "balloon") {
            var randomRoll = MathRInt(0, 2);
            var randomColor = balloonColors[MathRInt(0, balloonColors.length - 1)];
            var locations = ["bazaar", "park", "streets"];
            var randomLocation = locations[MathRInt(0, locations.length - 1)];
            if (randomRoll == 0) {
                var poppingTools = ["needle", "pointy branch", "pencil"];
                var poppingTool = poppingTools[MathRInt(0, poppingTools.length - 1)];
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += " when suddenly " + whose + " archnemesis, " + archnemesis + " appeared, and pulled out the " + poppingTool + " and struck it into the poor balloon, ";
                result += " making it pop into many different pieces. This event was one of the saddest in " + getFirstWord(characterName) + "'s life.";
            }
            else if (randomRoll == 1) {
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += "until accidentally bumping into someone, making " + whom + " lose the grasp of the balloon. " + pronoun + " watched it ";
                result += "fly away gracefully, still remembering its disappearing dot in the skies to this day.";
            } else if (randomRoll == 2) {
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += " when suddenly " + whose + " archnemesis, " + archnemesis + " appeared, snatching the balloon from " + getFirstWord(characterName) + "'s hand and running away.";
            }
            
        }
        else if (randomToy == "teddy bear") {
            var randomRoll = MathRInt(0, 1);
            var lostLocations = ["bedroom", "garden", "living room", "school"]
            var lostLocation = lostLocations[MathRInt(0, lostLocations.length - 1)];
            if (randomRoll == 0) result += pronoun.toLowerCase() + " lost " + whose + " teddy bear somewhere in the " + lostLocation + ", never to be found again.";
            if (randomRoll == 1) result += pronoun.toLowerCase() + " had " + whose + " teddy bear stolen by none other but " + whose + " archnemesis - " + archnemesis + ".";
        } else if (randomToy == "doll") {
            result += pronoun.toLowerCase() + " had " + whose + " doll stolen by " + whose + " archnemesis, " + archnemesis + ".";
        } else if (randomToy == "wooden sword") {
            var randomRoll = MathRInt(0, 1);
            if (randomRoll == 0) result += pronoun.toLowerCase() + " lost " + whose + " wooden sword, after it got confiscated by the guards.";
            else if (randomRoll == 1) result += pronoun.toLowerCase() + " lost " + whose + " wooden sword, after a the long childish duel with his archnemesis, " + archnemesis + ", who struck the sword and broke it into two pieces.";
        }
    } else if (eventCategory == "loss of relatives") {
        var randomRoll = MathRInt(0, 3)
        var causesOfDeath = ["sickness", "accident at work", "being assassinated", "being run over by a horse", "unsuccessful scientific experiments"];
        var causeOfDeath = causesOfDeath[MathRInt(0, causesOfDeath.length - 1)];
        var randomRelatives = ["grandma", "grandpa", "brother", "sister", "cousin"];
        var randomRelative = randomRelatives[MathRInt(0, randomRelatives.length - 1)];
        if (randomRoll == 0) {
            result += pronoun.toLowerCase() + " lost " + whose + " father, who died after " + causeOfDeath + ".";
            dadAlive = false;
        } else if (randomRoll == 1) {
            result += pronoun.toLowerCase() + " lost " + whose + " mother, who died after " + causeOfDeath + ".";
        } else if (randomRoll == 2){
            result += pronoun.toLowerCase() + " lost a " + randomRelative + ". " + pronoun + " remembers not wanting to go to the funeral and also missing " + bestFriend + "'s, his best friend's birthday.";
        } else if (randomRoll == 3) {
            result += pronoun.toLowerCase() + " lost a " + randomRelative + ". " + pronoun + " remembers how much " + pronoun.toLowerCase() + " loved them and how greatly it affected " + whose + " emotional state.";
        }
    } else if (eventCategory == "sickness") {
        var diseases = ["red rot, after direct contact with red ooze, where " + whose + " flesh began to slowly rot away",
         "gambling addiction",
         "the screaming sickness, beginning to moan and scream in " + whose + " sleep",
         "slate fever, an uncommon sickness that caused the skin to become hard and brittle",
         "spectre's decay, where " + whose + " soul and body separated but continued to move in unison",
         "summoning sickness, where after teleportation spell went wrong, " + whose + " stomach and head all turned around",
         "casters cough, after having spent too much time in a component pouch",
         "goblinitis, where every hour " + pronoun.toLowerCase() + " would alter between the normal form and that of a goblin",
         "hydrophobia, after almost drowning in a river",
         "begger's pox",
         "sewer rat flu",
         "brain fever, from proximity to Underdark denizens",
         "carrion fever, which caused migraines and an intense craving of raw meat",
         "desert fever, where skin took on a red tinge, fever and bouts of cold sweat",
         "demon ears, where " + pronoun.toLowerCase() + " could only hear what demons tell" + whom,
         "magic allergy, which caused mild allergic reaction to anything that was even slightly magical"
            ]; // Source: http://dndspeak.com/2018/04/100-diseases/   I should add more later.
        var disease = diseases[MathRInt(0, diseases.length - 1)];
        result += pronoun.toLowerCase() + " caught " + disease + "."
    } else if (eventCategory == "paranormal/magical sighting") {
        var magicalAnimals = ["dog", "cat", "tiger", "owl", "penguin", "giraffe", "lion", "puma", "fennec fox", "hamster", "mouse", "rat", "platypus", "monkey", "crow", "parrot", "elephant", "alligator", "crocodile", "bear", "hedgehog", "turtle", "armadillo", "otter", "goat", "sheep", "zebra", "wolf"];
        var magicalAnimal = magicalAnimals[MathRInt(0, magicalAnimals.length - 1)];
        var magicalEvents = [
            "came across a wizard's book",
            "met a wizard and became his apprentice",
            "met an evil hog and got kidnapped, but managed to escape in the end",
            "met a talking balloon, who taught " + whom + " how to treat all the balloons in the world",
            "saw an extraplanar creature during the night",
            "found a magical treasure chest, containing secrets of the other world",
            "encountered a magical " + magicalAnimal + " who could talk to " + whom + " and accompanied " + whom + " ever since"
        ];
        var magicalEvent = magicalEvents[MathRInt(0, magicalEvents.length - 1)];
        result += pronoun.toLowerCase() + " " + magicalEvent + ".";
    } else if (eventCategory == "commited crime") {
        var crimes = [
            "assaulted another kid, then proceeding to be sent to the dungeons for 9 days",
            "stole another kid's balloon",
            "popped another kid's balloon",
            "stole a loaf of bread from the bazaar",
            "punched a town guard in the " + bodyParts[MathRInt(0, bodyParts.length - 1)],
            "participated in underground kids' gambling game",
            "gave " + archnemesis + ", " + whose + " archnemesis, a wedgie"
        ];
        var crime = crimes[MathRInt(0, crimes.length - 1)];
        result += pronoun.toLowerCase() + " " + crime + ".";
    } else if (eventCategory == "fortune") {
        var fortunes = [
            pronoun.toLowerCase() + " won a lottery",
            pronoun.toLowerCase() + " became a known local merchant kid",
            whose + " parents sold their business, so there was a lot of money in the family",
            pronoun.toLowerCase() + " helped shut down a local gang and got rewarded by the government"
        ];
        var fortune = fortunes[MathRInt(0, fortunes.length - 1)];
        result += fortune + ".";
    }

    return result;
}

function getPartner(pronoun, sexuality) {
    var partner = "";
    if (sexuality == "straight") {
        if (pronoun == "He") partner = "girlfriend";
        else partner = "boyfriend";
    } else if (sexuality == "gay") {
        if (pronoun == "He") partner = "boyfriend";
        else partner = "girlfriend";
    } else if (sexuality == "bisexual") {
        var randomRoll = MathRInt(0, 1);
        if (randomRoll == 0) partner = "boyfriend";
        else partner = "girlfriend";
    }
    return partner;
}

function getFirstWord(sentence) {
    let spaceIndex = sentence.indexOf(' ');
    return spaceIndex === -1 ? sentence : sentence.substr(0, spaceIndex);
}

function displayStats() {
    var result = "";
    for (i = 0; i < totalStats; i++) {
        result += '<div class="stat"><div class="statProperty">';
        if (i == 0) result += "STR"
            else if (i == 1) result += "DEX";
            else if (i == 2) result += "CON";
            else if (i == 3) result += "INT";
            else if (i == 4) result += "WIS";
            else if (i == 5) result += "CHA";
        result += '</div><div class="statValue">';
        if (i == 0) result += plusMinus(strength);
            else if (i == 1) result += plusMinus(dexterity);
            else if (i == 2) result += plusMinus(constitution);
            else if (i == 3) result += plusMinus(intelligence);
            else if (i == 4) result += plusMinus(wisdom);
            else if (i == 5) result += plusMinus(charisma);
        result += '</div></div>'
    }

    document.getElementById("statsOutput").innerHTML = result;
}

function plusMinus(stat) {
    if (stat <= 0) return  stat;
    else if (stat > 0) return "+" + stat;
}