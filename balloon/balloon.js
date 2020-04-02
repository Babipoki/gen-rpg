var occasions = ["Birthday", "Afterparty", "Event"];

if (gen == "balloon") displayOccassionSelector();

function displayOccassionSelector() {
    var result = `<label for="occasion">What occasion did you get the balloon(-s) from?</label> <select id="occasion"><option>Random</option>`;
    for (var i = 0; i < occasions.length; i++) {
        result += `<option>${occasions[i]}</option>`;
    }

    result += `</select>`;

    document.getElementById("occasionSelector").innerHTML = result;
}
var myBalloons = [];
var peopleInLocation = [];
var itemsInLocation = [];
var privacyLevel = 0; // 0 - 100% public. 1 - possible to go somewhere private. 2 - pretty much private
var protagonistPersonality = "";

function generateBalloons(n, occasion) {
    var characterName = generateName("male", "human");
    if (n == "random") n = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11][MathRInt(0, 20)];
    var result = ``;
    var weather = ``;
    var temperature = ``;
    itemsInLocation = [];
    var isIndoors = false;
    var protagonistAge = 0;
    // Reset my balloons on regeneration.
    myBalloons = [];
    var possibleWeathers = ["clear", "rainy", "snowy", "foggy", "windy", "thunderstormy"];
    weather = possibleWeathers[MathRInt(0, possibleWeathers.length - 1)];
    var possibleTemperatures = ["freezing", "cold", "cool", "warm", "hot", "searing hot"];
    temperature = possibleTemperatures[MathRInt(0, possibleTemperatures.length - 1)];
    var balloonShapes = ["round", "round", "round", "round", "round", "round", "round", "round", "bunny-shaped", "bunny-shaped", "bunny-shaped", "bunny-shaped", "mouse-shaped", "bear-shaped", "heart-shaped"]; // repeats increase the chance, nothing else
    var balloonColors = ["red", "red", "blue", "blue", "pink", "pink", "yellow", "yellow", "white", "black", "orange", "emerald green", "goldenrod", "lime green", "jewel lime green", "royal blue", "dark blue", "light blue", "navy blue", "purple", "hot pink", "berry", "peach", "clear", "silver", "gold", "brown"];
    var balloonSizes = ["12\"", "14\"" , "16\""];
    var balloonConditions = ["overinflated", "underinflated", "with a factory defect spot", "made of high quality latex", "made of average quality latex", "made of below average quality latex", "made of low quality latex", "made of very rare quality of latex", "made of very strong quality of latex", "slowly leaking air from a hole", "worn out and has been inflated many times"]; // "It is ..."
    var inflationTimes = ["just a few minutes ago", "an hour ago", "two hours ago", "three hours ago", "four hours ago", "five hours ago", "six hours ago", "seven hours ago", "eight hours ago", "nine hours ago", "ten hours ago", "yesterday"];
    var numerations = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    var inflationTypes = ["helium", "helium", "helium", "mouth-inflated", "pump-inflated"];
    var tyingTechniques = ["beautiful white ribbon", "old knitting yarn", "silver ribbon", "sewing string", "pink ribbon", "gold ribbon", "silver ribbon", "red ribbon", "purple ribbon", "baby blue ribbon", "copper ribbon"]; // for helium only
    var prints = ["polka dots", "a smiley face", "a happy boy face", "dog paws", "a scared/worried face", "a derpy face with a tongue sticking out", "a face in love, with heart-filled eyes", "a laughing face", "a pleading face", "a dabbing penguin", "hearts", "a cute duck", "a silly face showing off its teeth"];
    protagonistAge = MathRInt(7, 12);
    if (occasion == "Random") occasion = occasions[MathRInt(0, occasions.length - 1)];
    switch(occasion) {
        case "Birthday":
            var thBirthdays = ["7th", "8th", "9th", "10th", "11th", "12th"];
            var thBirthday = thBirthdays[MathRInt(0, thBirthdays.length - 1)];
            protagonistAge = Number(thBirthday.replace("th", ""));
            result += `Happy ${thBirthday} birthday, ${characterName.split(" ")[0]}! The ${n == 1 ? "balloon you got from your friend, " + generateName("male", "human").split(" ")[0] + " is:<br><br>" : "balloons you got for your birthday from your friends are:<br><br>"}`;
            break;
        case "Afterparty":
            var partyDescribers = ["a great", "an awesome", "a boring", "a wicked", "a fun", "an annoying", "a horrible"];
            var partyDescriber = partyDescribers[MathRInt(0, partyDescribers.length - 1)];
            result += `You had ${partyDescriber} party at friends' place, and managed to snatch ${n == 1 ? "the balloon after it was over.<br><br>" : "some balloons after it was over.<br><br>"}`;
            break;
        case "Event":
            var eventLocations = ["at the town", "in school", "in the city", "in your village", "near the hospital", "at the convention center", "near the stablemaster", "at the election office"];
            var eventLocation = eventLocations[MathRInt(0, eventLocations.length - 1)];
            var eventDescribers = ["a cool", "a boring", "an awesome"];
            var eventDescriber = eventDescribers[MathRInt(0, eventDescribers.length - 1)];
            result += `There was ${eventDescriber} event ${eventLocation} and they were giving out balloons. You managed to get ${n == 1 ? "one:": "a few:"}<br><br>`;
            break;
    }

    for (var i = 0; i < n; i++) {
        var balloonShape = balloonShapes[MathRInt(0, balloonShapes.length - 1)];
        var balloonColor = balloonColors[MathRInt(0, balloonColors.length - 1)];
        var balloonSize = balloonSizes[MathRInt(0, balloonSizes.length - 1)];
        var balloonCondition = balloonConditions[MathRInt(0, balloonConditions.length - 1)];
        var numeration = n == 1 ? "The" : numerations[i];
        var inflationType = inflationTypes[MathRInt(0, inflationTypes.length - 1)];
        var extra = ``;
        var tyingTechnique = tyingTechniques[MathRInt(0, tyingTechniques.length - 1)]
        var print = null;
        var everyNthIsPrint = 2;
        var randomPrintChance = MathRInt(0, everyNthIsPrint);
        if (inflationType == "helium") extra += ` It is tied with a ${tyingTechnique}.`;
        if (randomPrintChance == everyNthIsPrint && balloonShape == "round")  {
            print = prints[MathRInt(0, prints.length - 1)];
            extra += ` It is printed with ${print}.`;

        }

        myBalloons.push([balloonShape, balloonColor, balloonSize, balloonCondition, inflationType, print]);
        result += `${numeration} balloon is a  ${inflationType} ${balloonSize} ${balloonShape} ${balloonColor} balloon. It is ${balloonCondition}.${extra}<br>
        `;
    }

    var inflationTime = "";
    
    // Time of Day setup
    var timesOfDay = ["early morning", "late morning", "afternoon", "evening"];
    var earlyMorningHours = [6, 7, 8];
    var lateMorningHours = [9, 10, 11];
    var afternoonHours = [12, 13, 14];
    var eveningHours = [15, 16, 17];
    var timeOfDay = timesOfDay[MathRInt(0, timesOfDay.length - 1)];
    var currentHour = 0;
        switch(timeOfDay) {
            case "early morning":
                currentHour = earlyMorningHours[MathRInt(0, earlyMorningHours.length - 1)];
                inflationTime = ["just a few minutes ago", "half an hour ago", "yesterday"][MathRInt(0, 2)];
                break;
            case "late morning":
                currentHour = lateMorningHours[MathRInt(0, lateMorningHours.length - 1)];
                inflationTime = ["just a few minutes ago", "half an hour ago", "an hour ago", "two hours ago", "three hours ago"][MathRInt(0, 4)];
                break;
            case "afternoon":
                currentHour = afternoonHours[MathRInt(0, afternoonHours.length - 1)];
                inflationTime = inflationTimes[MathRInt(0, inflationTimes.length - 1)];
                break;
            case "evening":
                currentHour = eveningHours[MathRInt(0, eveningHours.length - 1)];
                inflationTime = inflationTimes[MathRInt(0, inflationTimes.length - 1)];
                break;
        }
    result += `<br><br>
    `;
    result += n == 1 ? `The balloon was inflated ${inflationTime}.` : `All balloons were inflated ${inflationTime}.`;
    var destinations = ["home", "to the store"];
    if (timeOfDay == "early morning") destinations.push("to school");
    if (timeOfDay == "late morning") destinations.push("to the classroom");
    if (timeOfDay == "afternoon") destinations.push("home from school", "to the friend's house");
    if (timeOfDay == "evening") destinations.push("to the cinema", "to the theatre", "to the friend's house")
    var destination = destinations[MathRInt(0, destinations.length - 1)];
    var secondaryActions = ["cooking food", "playing video games", `playing with the ${n == 1 ? "balloon" : "balloons"}`, `popping ${n == 1 ? "that stupid balloon": "these stupid balloons"}`];
    if (timeOfDay == "early morning") secondaryActions.push("getting ready for the school trip");
    if (timeOfDay == "afternoon") secondaryActions.push("doing homework");
    if (timeOfDay == "evening") secondaryActions.push("doing homework");
    var secondaryAction = secondaryActions[MathRInt(0, secondaryActions.length - 1)];
    var locations = ["walking at the park and enjoying the view", `walking in the alley on your way ${destination}`, `walking through the park on your way ${destination}`, "in class at your school", "on break at your school", `chilling at home and ${secondaryAction}`, `opening your home's door and planning on ${secondaryAction}`, "spending your time at the boy scouts' camp", "sunbathing at the beach", "eating at the fast food store"];
    
    var actualLocation = ``;
    peopleInLocation = [];
    var currentLocation = locations[MathRInt(0, locations.length - 1)];
    var secondCharacter = generateName("male", "human");
    var relations = ["archnemesis", "best friend", "old friend", "friend", "ex-boyfriend", "classmate", "big brother", "small brother", "twin brother", "boyfriend"];
    var relation = relations[MathRInt(0, relations.length - 1)];
    var poppingTools = ["a pointy wooden stick", "a rather blunt wooden stick", "an unsharpened pencil", "a sharp pencil", "a fountain pen", "a fork", "a sewing needle", "a pushpin", "a pair of scissors", "a pair of rounded safety scissors", "a construction nail", "a ninja with sharp shuriken toy", "a paper knife", "an origami paper", "no sharp objects... why would he need any? That's ridiculous", "a shaving razor blade", "two knitting needles"];
    var poppingTool = poppingTools[MathRInt(0, poppingTools.length - 1)];
    var secondCharacterMoods = ["pissed", "cheerful", "derpy", "exhausted", "lacking attention", "nervous", "going insane", "very happy for some reason", "focused on the thought of the destruction of all world's balloons", "careless", "having an unlucky day", "having a bad day", "having a good day of ruining the day for the others"];
    var secondCharacterMood = secondCharacterMoods[MathRInt(0, secondCharacterMoods.length - 1)];
    var protagonistPersonalities = ["happy", "cheerful", "protective", "shy", "uncomfortable"];
    protagonistPersonality = protagonistPersonalities[MathRInt(0, protagonistPersonalities.length - 1)];

    // Set up actualLocation and whether or not this is indoors
    switch (currentLocation) {
        case "walking at the park and enjoying the view":
            actualLocation = "park";
            isIndoors = false;
            break;
        case `walking in the alley on your way ${destination}`:
            actualLocation = "alley";
            isIndoors = false;
            break;
        case `walking through the park on your way ${destination}`:
            actualLocation = "park";
            isIndoors = false;
            break;
        case "in class at your school":
            actualLocation = "classroom";
            isIndoors = true;
            break;
        case "on break at your school":
            actualLocation = "school";
            isIndoors = true;
            break;
        case `chilling at home and ${secondaryAction}`:
            actualLocation = "home";
            isIndoors = true;
            break;
        case `opening your home's door and planning on ${secondaryAction}`:
            actualLocation = "home";
            isIndoors = false;
            break;
        case "spending your time at the boy scouts' camp":
            actualLocation = "boy scouts' camp";
            isIndoors = false;
            break;
        case "sunbathing at the beach":
            actualLocation = "beach";
            isIndoors = false;
            temperature = possibleTemperatures[MathRInt(3, possibleTemperatures.length - 1)];
            break;
        case "eating at the fast food store":
            actualLocation = "fast food store";
            isIndoors = true;
            break;
    }

    // Set up People in Location and Items in Location, also in future custom dialog lines.
    switch (actualLocation) {
        case "park":
            itemsInLocation = ["branch", "recycling bin", "tree", "bench", "public bathroom"]
            peopleInLocation = [["dog handlers", MathRInt(0, 4)], ["couples", MathRInt(0, 8)], ["old people", MathRInt(0, 13)], ["kids with parents", MathRInt(0, 8)], ["kids without parents", MathRInt(0, 3)]];
            privacyLevel = 1;
            break;
        case "alley":
            itemsInLocation = ["recycling container", "recycling bin", "brick wall"];
            peopleInLocation = [["homeless person", MathRInt(0, 1)]];
            privacyLevel = 2;
            if (peopleInLocation[0][1] == 1) privacyLevel = 0;
            break;
        case "classroom":
            itemsInLocation = ["pencil", "scissors", "class door"];
            peopleInLocation = [["girl classmate", MathRInt(0, 15)], ["boy classmate", MathRInt(0, 15)], ["class teacher", MathRInt(0, 1)]];
            privacyLevel = 0;
            break;
        case "school":
            itemsInLocation = ["small recycling bin", "class photo", "class door", "school bathroom"];
            peopleInLocation = [["girl classmate", MathRInt(0, 15)], ["boy classmate", MathRInt(0, 15)], ["schoolmates", MathRInt(0, 120)], ["school staff", MathRInt(0, 12)]];
            privacyLevel = 1;
            break;
        case "home":
            itemsInLocation = ["spoon", "kitchen knife", "pocket knife", "needle"]; // fill me more
            peopleInLocation = [["mom", MathRInt(0, 1)], ["dad", MathRInt(0, 1)], ["siblings", MathRInt(0, 3)]];
            privacyLevel = 1;
            break;
        case "boy scouts' camp":
            itemsInLocation = ["branch", "tree", "tent"];
            peopleInLocation = [["scouts", MathRInt(0, 20)], ["scout leader", MathRInt(0, 1)]];
            privacyLevel = 1;
            break;
        case "beach":
            itemsInLocation = ["plastic shovel", "plastic rake", "umbrella", "public bathroom"];
            peopleInLocation = [["beachgoers", MathRInt(0, 200)]];
            privacyLevel = 1;
            break;
        case "fast food store":
            itemsInLocation = ["fork", "knife", "spoon", "public bathroom"];
            peopleInLocation = [["mom", MathRInt(0, 1)], ["dad", MathRInt(0, 1)], ["staff", MathRInt(1, 10)], ["others", MathRInt(0, 25)]];
            privacyLevel = 1;
            break;
    }

    result += `<hr><br>It is currently <span class="tooltip">${currentHour} o'clock<span class="tooltiptext">Time in my setting is 18-hour based instead of IRL 24 hour clock.</span> in the ${timeOfDay}. You are ${characterName.split(" ")[0]}, and you are currently ${currentLocation}. Somewhere nearby is ${secondCharacter.split(" ")[0]}, your ${relation}, who just happens to be carrying ${poppingTool} and seems to be ${secondCharacterMood}.<br>
    <br>
    <br>
    It is ${temperature} and ${weather} outside.`;

    document.getElementById("result").innerHTML = result;
}