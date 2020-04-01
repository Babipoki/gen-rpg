var gameTimelines = ["Random", "Abstract", "Sci-Fi", "Fantasy", "Modern", "Medieval", "Big Mess"]; // Big mess means it takes all categories and plays with the whole thing.

if (gen == "gameidea")initGameIdeaPageSelector();

function initGameIdeaPageSelector () {
    var result = `<label for="timeline">Timeline: </label><select id="timeline">`;
    for (var i = 0; i < gameTimelines.length; i++) {
        result += `<option>${gameTimelines[i]}</option>`;
    }
    document.getElementById("GIcategorySelector").innerHTML = result;
}


function generateGameIdea(timeline) {
    var result = ``;
    if (timeline == "Random") timeline = gameTimelines[MathRInt(1, gameTimelines.length - 1)];


    // Setup
    var protagonist = "";
    var races = ["a human", "a youdel", "a lafahl", "an animal"]
    var protagonistRace = races[MathRInt(0, races.length - 1)];
    var genres = ["An arcade", "An RPG", "A racing", "An action-adventure"];
    var genre = genres[MathRInt(0, genres.length - 1)];
    var setting = "";
    var faction = "";
    var goal = "";
    var enemy = "";

    // Stuff
    var generalSettings = [];
    var scifiSettings = ["inside the space station", "at the hostile planet", "on Mars"];
    var modernSettings = ["inside a police station", "in the crime-infested city", "inside the candy factory"];
    var abstractSettings = ["inside the Emptyness", "inside the Void", "at the Rainbow Island"];
    var medievalSettings = ["in the countryside", "at the rival's castle"];
    var fantasySettings = ["on top of the floating island", "on a giant pirate ship", "in alternate Earth"];

    var generalProtagonists = ["kid"];
    var scifiProtagonists = ["ship captain", "ship janitor"];
    var modernProtagonists = ["police officer", "office worker"];
    var abstractProtagonists = ["star collector", "world traveller"];
    var medievalProtagonists = ["knight", "urchin", "clown"];
    var fantasyProtagonists = ["sorcerer", "necromancer", "ninja", "assassin"];

    var generalFactions = ["himself"];
    var scifiFactions = ["Universal Peace Federation", "Interplanetary Foundation", "Space Pirates"];
    var modernFactions = ["the police", "the game development company"];
    var abstractFactions = ["Star Collector Society", "the Disc Cleaning Company"];
    var medievalFactions = ["town guards", "merchants"];
    var fantasyFactions = ["the thieves' guild", "the mage guild"];

    var generalGoals = ["tries to survive"];
    var scifiGoals = ["discovers new alien race", "kills all the aliens", "fends the aliens off"];
    var modernGoals = ["seeks fame", "tries to capture the base", "discovers an ancient artifact"];
    var abstractGoals = ["destroys all the balloons", "collects all stars", "deciphers a secret message"];
    var medievalGoals = ["proves loyalty to the King", "tries to usurp the throne of the King", "fights for survival", "fights for honor"];
    var fantasyGoals = ["learns a powerful spell", "finds a dangerous scroll"];

    var generalEnemies = [];
    var scifiEnemies = ["the insane space pirates", "the rogue government of a planet"];
    var modernEnemies = ["the criminals", "Kudos Corporation"];
    var abstractEnemies = ["the bubbles", "the balloons", "the dots", "the triangles"];
    var medievalEnemies = ["the thieves", "the cultists"];
    var fantasyEnemies = ["the local witch", "the hog", "the Empire"];

    switch (timeline) {
        case "Abstract":
            var possibleSettings = [...abstractSettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...abstractProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...abstractFactions, ...generalFactions];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...abstractGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...abstractEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
        case "Sci-Fi":
            var possibleSettings = [...scifiSettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...scifiProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...scifiFactions, ...generalFactions];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...scifiGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...scifiEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
        case "Modern":
            var possibleSettings = [...modernSettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...modernProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...modernFactions, ...generalFactions];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...modernGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...modernEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
        case "Medieval":
            var possibleSettings = [...medievalSettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...medievalProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...medievalFactions, ...generalFactions];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...medievalGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...medievalEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
        case "Fantasy":
            var possibleSettings = [...fantasySettings, ...medievalSettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...fantasyProtagonists, ...medievalProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...fantasyFactions, ...medievalFactions, ...generalFactions];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...fantasyGoals, ...medievalGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...fantasyEnemies, ...medievalEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
        case "Big Mess":
            var possibleSettings = [...abstractSettings, ...modernSettings, ...scifiSettings, ...medievalSettings, ...fantasySettings, ...generalSettings];
            setting = possibleSettings[MathRInt(0, possibleSettings.length - 1)];

            var possibleProtagonists = [...abstractProtagonists, ...modernProtagonists, ...scifiProtagonists, ...medievalProtagonists, ...fantasyProtagonists, ...generalProtagonists];
            protagonist = possibleProtagonists[MathRInt(0, possibleProtagonists.length - 1)];

            var possibleFactions = [...abstractFactions, ...modernFactions, ...scifiFactions, ...medievalFactions, ...fantasyFactions, ...generalFactions, ];
            faction = possibleFactions[MathRInt(0, possibleFactions.length - 1)];

            var possibleGoals = [...abstractGoals, ...modernGoals, ...scifiGoals, ...medievalGoals, ...fantasyGoals, ...generalGoals];
            goal = possibleGoals[MathRInt(0, possibleGoals.length - 1)];

            var possibleEnemies = [...abstractEnemies, ...modernEnemies, ...scifiEnemies, ...medievalEnemies, ...fantasyEnemies, ...generalEnemies];
            enemy = possibleEnemies[MathRInt(0, possibleEnemies.length - 1)];
            break;
    }

    // "A [genre] game where [a/an] [Protagonist race] [Protagonist (job)], who works with [Faction] against [Enemy], [Goal] [Setting]."

    result = `${genre} game where ${protagonistRace} ${protagonist}, who works with ${faction} against ${enemy}, ${goal} ${setting}.`;

    document.getElementById("result").innerHTML = result;
}