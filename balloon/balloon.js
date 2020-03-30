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

function generateBalloons(n, occasion) {
    var characterName = generateName("male", "human");
    if (n == "random") n = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11][MathRInt(0, 20)];
    var result = ``;


    var balloonShapes = ["round", "round", "round", "round", "round", "round", "round", "round", "bunny-shaped", "bunny-shaped", "bunny-shaped", "bunny-shaped", "mouse-shaped", "bear-shaped", "heart-shaped"]; // repeats increase the chance, nothing else
    var balloonColors = ["red", "red", "blue", "blue", "pink", "pink", "yellow", "yellow", "white", "black", "orange", "emerald green", "goldenrod", "lime green", "jewel lime green", "royal blue", "dark blue", "light blue", "navy blue", "purple", "hot pink", "berry", "peach", "clear", "silver", "gold", "brown"];
    var balloonSizes = ["12\"", "14\"" , "16\""];
    var balloonConditions = ["overinflated", "underinflated", "with a factory defect spot", "made of high quality latex", "made of average quality latex", "made of below average quality latex", "made of low quality latex", "made of very rare quality of latex", "made of very strong quality of latex", "slowly leaking air from a hole"]; // "It is ..."
    var inflationTimes = ["just a few minutes ago", "an hour ago", "two hours ago", "three hours ago", "four hours ago", "five hours ago", "six hours ago", "seven hours ago", "eight hours ago", "nine hours ago", "ten hours ago", "yesterday"];
    var numerations = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    var inflationTypes = ["helium", "helium", "helium", "mouth-inflated", "pump-inflated"];
    var tyingTechniques = ["beautiful white ribbon", "old knitting yarn", "silver ribbon", "sewing string", "pink ribbon", "gold ribbon", "silver ribbon", "red ribbon", "purple ribbon", "baby blue ribbon", "copper ribbon"]; // for helium only
    var prints = ["polka dots", "a smiley face", "a happy boy face", "dog paws", "a scared/worried face", "a derpy face with a tongue sticking out", "a face in love, with heart-filled eyes", "a laughing face", "a pleading face", "a dabbing penguin", "hearts", "a cute duck"];
    if (occasion == "Random") occasion = occasions[MathRInt(0, occasions.length - 1)];
    switch(occasion) {
        case "Birthday":
            var thBirthdays = ["7th", "8th", "9th", "10th", "11th", "12th"];
            var thBirthday = thBirthdays[MathRInt(0, thBirthdays.length - 1)];
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
        var print = prints[MathRInt(0, prints.length - 1)];
        var everyNthIsPrint = 2;
        var randomPrintChance = MathRInt(0, everyNthIsPrint);
        if (inflationType == "helium") extra += ` It is tied with a ${tyingTechnique}.`;
        if (randomPrintChance == everyNthIsPrint && balloonShape == "round") extra += ` It is printed with ${print}.`;

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
    
    var currentLocation = locations[MathRInt(0, locations.length - 1)];
    var secondCharacter = generateName("male", "human");
    var relations = ["archnemesis", "best friend", "old friend", "friend", "ex-boyfriend", "classmate", "big brother", "small brother", "twin brother", "boyfriend"];
    var relation = relations[MathRInt(0, relations.length - 1)];
    var poppingTools = ["a pointy wooden stick", "a rather blunt wooden stick", "an unsharpened pencil", "a sharp pencil", "a fountain pen", "a fork", "a sewing needle", "a pushpin", "a pair of scissors", "a pair of rounded safety scissors", "a construction nail", "a ninja with sharp shuriken toy", "a paper knife", "an origami paper", "no sharp objects... why would he need any? That's ridiculous", "a shaving razor blade", "two knitting needles"];
    var poppingTool = poppingTools[MathRInt(0, poppingTools.length - 1)];
    var secondCharacterMoods = ["pissed", "cheerful", "derpy", "exhausted", "lacking attention", "nervous", "going insane", "very happy for some reason", "focused on the thought of the destruction of all world's balloons", "careless", "having an unlucky day", "having a bad day", "having a good day of ruining the day for the others"];
    var secondCharacterMood = secondCharacterMoods[MathRInt(0, secondCharacterMoods.length - 1)];

    result += `<hr><br>It is currently <span class="tooltip">${currentHour} o'clock<span class="tooltiptext">Time in my setting is 18-hour based instead of IRL 24 hour clock.</span> in the ${timeOfDay}. You are ${characterName.split(" ")[0]}, and you are currently ${currentLocation}. Somewhere nearby is ${secondCharacter.split(" ")[0]}, your ${relation}, who just happens to be carrying ${poppingTool} and seems to be ${secondCharacterMood}.`;

    document.getElementById("result").innerHTML = result;
}