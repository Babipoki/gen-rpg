// Generator stuff...
var toddlerOccupations = ["toddler", "urchin"];
var childhoodOccupations = ["private school student", "public school student", "privately mentored student", "adventurer", "urchin", "travelling musician", "travelling circus performer",
    "little squire"];
var studentTypes = ["bully", "class clown", "teachers' friend", "nerd", "quiet kid", "well-mannered kid", "balloon enthusiast", "explosives expert", "school merchant",
    "dancer", "artist", "friend of all the teachers", "religious kid", "rebel"];
var adultOccupations = ["blacksmith", "infantry soldier", "knight", "paladin", "shoemaker", "balloon shopkeeper", "mercenary", "assassin", "shinobi", "innkeeper", 
    "tanner", "leatherworker", "mayor", "school teacher", "pawn shop owner", "butcher", "breeder", "farmer", "homeless person", "hunter", "trapper", "woodcutter", "acrobat" ,
    "musician", "painter", "piper", "writer", "actor", "banker", "guild master", "merchant", "collector", "translator", "courier", "bladesmith", "jeweler", "tanner", "woodcarver",
    "goldsmith", "potter", "bandit", "pirate", "burglar", "thief", "outlaw", "kidnapper", "mathematician", "sorcerer", "wizard", "squire", "courtier", "chancellor", "diplomat",
    "herbalist", "doctor", "healer", "alchemist", "baker", "orphanage caretaker", "necromancer", "elementalist", "shaman", "warlock", "mage", "bouncer", "detective",
    "spy", "scout", "cleric", "cultist", "sea captain", "caravaneer", "navigator", "pilgrim", "housewife", "bounty hunter", "gambler", "exile", "tomb raider"];
var retiredOccupations = ["retiree", "military commander", "writer", "refugee", "beggar"];
var primaryPersonalityTraits = ["naughty", "kind", "optimistic", "pessimistic", "sweaty", "generous", "creepy", "perverted", "absent-minded", "naive", "calm", "organized"];
var secondaryPersonalityTraits = ["smart", "cruel", "brave", "cowardly", "careless", "alcoholic", "racist", "shy", "fearful", "nervous", "proud", "unstable"];
var physicalTraits = ["fat", "obese", "good-looking", "athletic", "buff", "muscular", "slender", "slim", "short", "tall", "overweight", "skinny"]
var genders = ["male", "female"];
var races = ["human", "youdel", "lafahl"];
var nations = ["feretti", "ekkionlor", "junjian"]
var commonLanguages = ["Youdelish", "Orc", "Elvish", "Torasian", "Besizottian", "Rotalian"]; // except Abraxian, which is known to anyone who is generated here. To be implemented later.
var exoticLanguages = ["Abyssal", "Celestial", "Draconic", "Infernal", "Sylvan", "Undercommon"];
var sexualities = ["straight", "gay", "bisexual"];
var bodyParts = ["left leg", "right leg", "left foot", "right foot", "spine", "left arm", "right arm", "forehead", "groin"];
var balloonColors = ["red", "pink", "blue", "green", "yellow", "white", "black", "yellow smiley", "pink bunny-shaped"];
// Events
var childhoodEventCategories = ["betrayal", "injury", "discovery", "lost toy", "loss of relatives", "sickness", "paranormal/magical sighting", "commited crime"];

// Defaults
var archnemesis = "";
var bestFriend = "";
var romanticPartner = "";
var brokeUp = false;
var dadAlive = true;
var momAlive = true;




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
    var sexuality = "";

    // Sexuality
    sexuality = sexualities[MathRInt(0, sexualities.length)];

    // Birth Nation
    if (birthNation == null || birthNation == "random") {
        birthNation = nations[MathRInt(0, nations.length)]; 
    }

    if (birthNation == "feretti") birthNationName = "Feretti Kingdom";
    if (birthNation == "ekkionlor") birthNationName = "Ekkionlor";
    if (birthNation == "junjian") birthNationName = "Junjian Empire";
    if (race == null || race == "random") {
        race = races[MathRInt(0, races.length)]; 
    }

    // Race
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
    if (genderPref == "random" || genderPref == null) {
        gender = genders[MathRInt(0, genders.length)];
    } else if (genderPref == "male") {
        gender = "male";
    } else {
        gender = "female";
    }
    if (gender == "male") pronoun = "He";
    if (gender == "female") pronoun = "She";
    var characterName = generateName(gender, race);

    // Check if yordle name contains a profession
    if (characterName.includes(" the ")) {
        currentOccupation = characterName.split(" the ")[1].toLowerCase();
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
    // add events:
    if (age > childhoodAge) {
        result += generateChildhoodEvent(pronoun, characterName, birthNationName, race, age, maturityAge, childhoodAge, sexuality);
    }

    document.getElementById("result").innerHTML = result;
}

if (gen == "character") {
    generateCharacter();
}



// Generate Events

function generateChildhoodEvent(pronoun, characterName, birthNationName, race, age, maturityAge, childhoodAge, sexuality) {
    var result = "";
    var ageOfEvent = MathRInt(childhoodAge, age);
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
    var eventCategory = childhoodEventCategories[MathRInt(0, childhoodEventCategories.length)];
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
        var randomRoll = MathRInt(0, 3);
        if (randomRoll == 0) {result += whose + " best friend " + bestFriend + " betrayed " + whom + ", driving back the trust of the society as a whole.";
                    bestFriend = generateName("random", "random");
                    result += " " + bestFriend + " then became " + whose + " best friend."
    }
        else if (randomRoll == 1) result += whose + " parents betrayed " + whom + ", leaving him in the streets for " + whom + "self.";
        else if (randomRoll == 2) {result += whose + " " + partner + " " + romanticPartner +" betrayed " + whom + ", cheating their way into another kid's heart.";
                    romanticPartner = generateName(getPartner(pronoun, sexuality) == "boyfriend" ? "male" : "female") } // assign new romantic partner, since this one is lost.
        else if (randomRoll == 3) result += whose + " friend betrayed " + whom + ", as they joined " + characterName + "'s archnemesis - <b>" + archnemesis + "</b>.";
    } else if (eventCategory == "injury") {
        var randomRoll = MathRInt(0, 2); 
        var randomBodyPart = bodyParts[MathRInt(0, bodyParts.length)];
        if (randomRoll == 0) result += pronoun.toLowerCase() + " fell into the well, injuring " + whose + " " + randomBodyPart + " in the process.";
        else if (randomRoll == 1) result += pronoun.toLowerCase() + " was beaten up by other kids, injuring " + whose + " " + randomBodyPart + " heavily.";
        else if (randomRoll == 2) result += pronoun.toLowerCase() + " tried to punch a boulder, injuring the right hand in the process.";
    } else if (eventCategory == "discovery") {
        var randomRoll = MathRInt(0, 2);
        if (randomRoll == 0) result += pronoun.toLowerCase() + " discovered a terrible secret of one of " + whose + " parents. He kept it for " + whom + "self ever since.";
        else if (randomRoll == 1) {
            result += pronoun.toLowerCase() + " discovered that " + whose + " friend " + generateName("random", "random") +" was gay.";
            if (sexuality == "gay" || sexuality == "bisexual") {
                result += " It made " + characterName + " a more confident person, as " + pronoun.toLowerCase() + " was also " + sexuality + ".";
            } else {
                var reaction = MathRInt(0, 1);
                if (reaction == 0) result += " This angered " + characterName + " as " + pronoun.toLowerCase() + " grew up in a very homophobic environment.";
                if (reaction == 1) result += " " + characterName + " didn't seem to mind.";
            }
        }
        else if (randomRoll == 2) result += pronoun.toLowerCase() + " made a scientific discovery. Not something of spectacular scope. But for " + whom + " it was a big deal.";
    } else if (eventCategory == "lost toy") {
        var toys = ["balloon", "teddy bear", "doll"]
        var randomToy = toys[MathRInt(0, toys.length)];
        if (randomToy == "balloon") {
            var randomRoll = MathRInt(0, 2);
            var randomColor = balloonColors[MathRInt(0, balloonColors.length)];
            var locations = ["bazaar", "park", "streets"];
            var randomLocation = locations[MathRInt(0, locations.length)];
            if (randomRoll == 0) {
                var poppingTools = ["needle", "pointy branch", ""];
                var poppingTool = poppingTools[MathRInt(0, poppingTools.length)];
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += " when suddenly " + whose + " archnemesis, " + archnemesis + " appeared, and pulled out the " + poppingTool + " and struck it into the poor balloon, ";
                result += " making it pop into many different pieces. This event was one of the saddest in " + characterName + "'s life.";
            }
            else if (randomRoll == 1) {
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += "until accidentally bumping into someone in the street, making " + whom + " lose the grasp of the balloon. " + pronoun + " watched it ";
                result += "fly away gracefully, still remembering its disappearing dot in the skies to this day.";
            } else if (randomRoll == 2) {
                result += characterName + " was walking around the " + randomLocation + " with " + whose + " " + randomColor + " helium balloon, ";
                result += " when suddenly " + whose + " archnemesis, " + archnemesis + " appeared, snatching the balloon from " + characterName + "'s hand and running away.";
            }
            
        }
        else if (randomToy == "teddy bear") {
            var randomRoll = MathRInt(0, 1);
            var lostLocations = ["bedroom", "garden", "living room", "school"]
            var lostLocation = lostLocations[MathRInt(0, lostLocations.length)];
            if (randomRoll == 0) result += pronoun.toLowerCase() + "lost " + whose + " teddy bear somewhere in the " + lostLocation + ", never to be found again.";
            if (randomRoll == 1) result += pronoun.toLowerCase() + "had " + whose + " teddy bear stolen by none other but " + whose + " archnemesis - " + archnemesis + ".";
        }
    } else if (eventCategory == "loss of relatives") {
        var randomRoll = MathRInt(0, 2)
        var causesOfDeath = ["sickness", "accident at work", "being assassinated"];
        var causeofDeath = causesOfDeath[MathRInt(0, causesOfDeath.length)];
        if (randomRoll == 0) {
            result += pronoun.toLowerCase() + " lost " + whose + " father, who died after " + causeofDeath + ".";
            dadAlive = false;
        } else if (randomRoll == 1) {
            result += pronoun.toLowerCase() + " lost " + whose + " mother, who died after " + causesOfDeath + ".";
        } else {
            result += pronoun.toLowerCase() + " lost a distant relative. " + pronoun + " remembers not wanting to go to the funeral and also missing " + bestFriend + "'s, his best friend's birthday.";
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
         "desert fever, where skin took on a red tinge, fever and bouts of cold sweat"
            ]; // Source: http://dndspeak.com/2018/04/100-diseases/   I should add more later.
        var disease = diseases[MathRInt(0, diseases.length)];
        result += pronoun.toLowerCase() + " caught " + disease + "."
    } else if (eventCategory == "paranormal/magical sighting") {
        var magicalEvents = [
            "came across a wizard's book",
            "met a wizard and became his apprentice",
            "met an evil hog and got kidnapped, but managed to escape in the end",
            "met a talking balloon, who taught " + whom + " how to treat all the balloons in the world",
            "saw an extraplanar creature during the night",
            "found a magical treasure chest, containing secrets of the other world"
        ];
        var magicalEvent = magicalEvents[MathRInt(0, magicalEvents.length)];
        result += pronoun.toLowerCase() + " " + magicalEvent + ".";
    } else if (eventCategory == "commited crime") {
        var crimes = [
            "assaulted another kid, then proceeding to be sent to the dungeons for 9 days",
            "stole another kid's balloon",
            "popped another kid's balloon",
            "stole a loaf of bread from the bazaar",
            "punched a town guard in the " + bodyParts[MathRInt(0, bodyParts.length)],
            "participated in underground kids' gambling game",
            "gave " + archnemesis + ", " + whose + " archnemesis, a wedgie"
        ];
        var crime = crimes[MathRInt(0, crimes.length)];
        result += pronoun.toLowerCase() + " " + crimes + ".";
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