

function generateArtIdea(complexity, category) {
    var result = ``;
    var allCategories = [];
    // Fanart, Design, Study
    for (var i = 1; i < document.getElementById("category").options.length; i++) {
        allCategories.push(document.getElementById("category").options[i].value);
    }
    if (category == "Random") category = allCategories[MathRInt(0, allCategories.length - 1)];
    if (complexity == "Random") complexity = ["Low", "Medium", "High"][MathRInt(0, 2)];
    var minComplexity = 0;
    var maxComplexity = 0;
    if (complexity == "Low") {
        minComplexity = 0;
        maxComplexity = 1;
    } else if (complexity == "Medium") {
        minComplexity = 2;
        maxComplexity = 3;
    } else {
        minComplexity = 4;
        maxComplexity = 999;
    }
    if (category == "Fanart") {
        // Series / Fanart
        // Series complexity: 0 - super easy, 1 - easy, 2 - medium, 3 - hard, 4 - super hard (complexity can be impacted by how much i like the series or/and how complex the characters are)
        var allSeries = [
            ["Pokemon", 1, ["Pikachu", "Scorbunny", "Raboot", "Oshawott", "Toxel"]],
            ["Mystery Kids", 2, ["Dipper Pines", "Norman Babcock", "Razputin Aquato", "Wirt", "Greg", "Wirt and Greg", "Danny Phantom", "Invader Zim"]],
            ["League of Legends", 2, ["Gnar", "Teemo", "Kennen", "Nunu", "Heimerdinger"]],
            ["Bloons", 2, ["Dart Monkey", "Boomerang Monkey", "Ninja Monkey"]],
            ["Camp Camp", 3, ["Max", "Dolph Houston", "Harrison", "Neil"]],
            ["South Park", 3, ["Stan Marsh", "Kyle Broflovski", "Eric Cartman", "Kenny McCormic", "Butters Stotch", "Clyde Donovan", "Craig Tucker"]],
            ["Boku no Hero Academia", 4, ["Izuku Midoriya", "Katsuki Bakugo", "Minoru Mineta", "Shoto Todoroki", "Sen Kaibara", "Yosetsu Awase", "Kosei Tsuburaba"]],
            ["Inazuma Eleven", 2, ["Endou Mamoru", "Guenji Shuuya", "Kidou Yuuto", "Matsukaze Tenma"]]
        ];

        var selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        while (selectedSeries[1] < minComplexity || selectedSeries[1] > maxComplexity ) {
            selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        }

        var selectedCharacter = selectedSeries[2][MathRInt(0, selectedSeries[2].length - 1)];

        result = `Draw <b>${selectedCharacter}</b> from <b>${selectedSeries[0]}</b> series.`;
    }
    // Study
    if (category == "Study") {
        var allStudies = [
            ["environment", 3, ["Lake", "Sea", "Forest", "Plains"]],
            ["interiors", 4, ["Kid's Room", "Kitchen", ""]],
            ["urban environment", 3, ["City", "Town", "Village"]],
            ["anatomy", 2, ["Body", "Legs", "Eyes", "Arms", "Hands", "Feet", "Ears", "Noses", "Mouths", "Chests", "Hips"]],
            ["gestures", 1, ["Animals", "Humans"]],
            ["color", 2, ["Disney", "Google Street Maps"]] // Go study ___ of the ___.
        ];

        var selectedStudy = allStudies[MathRInt(0, allStudies.length - 1)];
        while (selectedStudy[1] < minComplexity || selectedStudy[1] > maxComplexity) {
            selectedStudy = allStudies[MathRInt(0, allStudies.length - 1)];
        }

        var selectedSubject = selectedStudy[2][MathRInt(0, selectedStudy[2].length - 1)];

        result = `Go study the <b>${selectedStudy[0]}</b> of <b>${selectedSubject.toLowerCase()}</b>.`

    }

    if (category == "Design") {
    // Design
    var characters = [
        ["boy", 1],
        ["youdel", 2],
        ["lafahl", 3],
        ["animal", 4]
    ]

    var char = characters[MathRInt(0, characters.length - 1)];
    while (char[1] < minComplexity || char[1] > maxComplexity) {
        char = characters[MathRInt(0, characters.length - 1)];
    }

    var animals = ["dog", "cat", "tiger", "kitten", "puppy", "bat", "monkey"];
    if (char[0] == "animal") char[0] = animals[MathRInt(0, animals.length - 1)];

    var personalityTraits = ["confident", "nervous", "scared", "angry", "tired", "careless", "wacky", "derpy"]; // personality or mood
    var personalityTrait = personalityTraits[MathRInt(0, personalityTraits.length - 1)];
    var traits1 = ["loves balloons", "loves camping", "hates balloons", "likes to bully others"];
    var trait1 = traits1[MathRInt(0, traits1.length - 1)];
    var traits2 = ["is a great fighter", "is a nerd", "is an archer", "always gets in trouble", "has rich parents"]
    var trait2 = traits2[MathRInt(0, traits2.length - 1)];
     
    
    // Design a [personality] [character], who [trait1] and [trait2].
    result = `Design ${indefinite_article(personalityTrait)} ${personalityTrait} ${char[0]}, who ${trait1} and ${trait2}.`;
}
    document.getElementById("result").innerHTML = result;

}