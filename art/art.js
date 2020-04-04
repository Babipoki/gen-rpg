

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
            ["Pokémon", 1, ["Pikachu", "Scorbunny", "Raboot", "Oshawott", "Toxel", "Psyduck", "Drifloon", "Politoed", "Aipom", "Sableye", "Chimchar", "Pansage", "Panpour", "Sobble", "Pancham", "Dedenne", "Togedemaru", "Drizzile", "Morpeko"]],
            ["Mystery Kids", 2, ["Dipper Pines", "Norman Babcock", "Razputin Aquato", "Wirt", "Greg", "Wirt and Greg", "Danny Phantom", "Invader Zim"]],
            ["League of Legends", 2, ["Gnar", "Teemo", "Kennen", "Nunu", "Heimerdinger"]],
            ["Bloons", 2, ["Dart Monkey", "Boomerang Monkey", "Ninja Monkey"]],
            ["Camp Camp", 3, ["Max", "Dolph Houston", "Harrison", "Neil"]],
            ["South Park", 3, ["Stan Marsh", "Kyle Broflovski", "Eric Cartman", "Kenny McCormic", "Butters Stotch", "Clyde Donovan", "Craig Tucker"]],
            ["Boku no Hero Academia", 4, ["Izuku Midoriya", "Katsuki Bakugo", "Minoru Mineta", "Shoto Todoroki", "Sen Kaibara", "Yosetsu Awase", "Kosei Tsuburaba", "Nirengeki Shoda", "Yuyu Haya"]],
            ["Inazuma Eleven", 2, ["Endou Mamoru", "Guenji Shuuya", "Kidou Yuuto", "Matsukaze Tenma"]],
            ["Karakai Jouzu no Takagi-san", 2, ["Nishikata", "Nakai", "Hamaguchi"]],
            ["Mini Ninjas", 3, ["Hiro", "Shun", "Tora"]],
            ["Wakfu", 3, ["Yugo", "Chibi", "Adamaï", "Az", "Sir Percedal of Sadlygrove", "Flopin"]],
            ["Tekkonkinkreet", 2, ["Kuro", "Shiro", "Kuro and Shiro"]],
            ["Tegami Bachi", 2, ["Lag Seeing", "Zazie", "Connor Kluff", "Lag and Zazie", "Nelli Pepper", "Nello Pepper"]],
            ["Blue Exorcist", 4, ["Rin Okumura", "Yukio Okumura", "Rin and Yukio", "Shima", "Amaimon", "Konekomaru"]],
            ["Big Hero 6", 3, ["Hiro Hamada", "Baymax"]],
            ["How to Train Your Dragon", 2, ["Hiccup", "Toothless"]]
        ];

        var selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        while (selectedSeries[1] < minComplexity || selectedSeries[1] > maxComplexity ) {
            selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        }

        var selectedCharacter = selectedSeries[2][MathRInt(0, selectedSeries[2].length - 1)];
        var actions = ["enjoying a balloon", "trying to pop a balloon", "hugging a balloon", "celebrating birthday", "protecting self against COVID-19", "spending time at the beach", "trying to be a ninja", "making a silly face", "being a derp", "eating food", "eating something tasty", "drinking something", "inflating a balloon", "being exhausted", "popping balloons", "playing around", "reading a book", "cooking a meal", "pranking someone", "drinking milk", "exploring the lands", "looking through the window", "defending against intruders", "posing for the camera", "sleeping", "pillow fighting", "being sad", "swinging on the swings", "playing an instrument", "holding an umbrella"]
        var action = MathRInt(0, 2) == 1 ? action = (", " + actions[MathRInt(0, actions.length - 1)] ) : "";

        result = `Draw <b><a href="https://google.com/search?q=${selectedCharacter.replace(" ", "+") + "+" + selectedSeries[0].replace(" ", "+") + "&tbm=isch"}">${selectedCharacter}</a></b> from <b>${selectedSeries[0]}</b> series${action}.`;
    }
    // Study
    if (category == "Study") {
        var allStudies = [
            ["environments", 3, ["a lake", "sea", "forest", "plains", "hell", "clouds", "mountains", "ruins", "rainy weather", "snowy weather", "deserts", "a beach", "an arctic environment"]],
            ["interiors", 4, ["a kid's room", "a kitchen", "a bedroom", "a shop", "a living room", "a dining room", "a balloon shop", "a jewelry store", "a blacksmith's shop", "a church", "a shack", "a mansion", "a bathroom", "a research station"]],
            ["urban environment", 3, ["a city", "a town", "a village", "a park", "a city plaza"]],
            ["anatomy", 2, ["body", "legs", "eyes", "arms", "hands", "feet", "ears", "noses", "mouths", "chests", "hips", "adults", "facial expressions"]],
            ["gestures", 1, ["animals", "humans"]],
            ["color", 2, ["Disney color keys", "Google Street Maps", "game screenshots"]],
            ["props", 3, ["weapons", "toys", "books", "chests", "balloons", "tents", "wooden toys", "consoles"]],
            ["furniture", 4, ["beds", "chairs", "fridges", "clocks", "bookshelves", "cupboards", "bunk beds", "bar stools", "couches", "cradles", "curtains", "desks", "drapery", "dressers", "file cabinets", "folding chairs", "garden benches", "lamps", "mirrors", "mantles", "vitrines", "wardrobes"]],
            ["buildings", 3, ["shops", "residential houses", "apartments", "skyscrapers", "village houses", "stalls"]],
            ["misc studies", 2, ["materials", "game levels", "textures", "clothing"]]
        ];

        var selectedStudy = allStudies[MathRInt(0, allStudies.length - 1)];
        while (selectedStudy[1] < minComplexity || selectedStudy[1] > maxComplexity) {
            selectedStudy = allStudies[MathRInt(0, allStudies.length - 1)];
        }

        var selectedSubject = selectedStudy[2][MathRInt(0, selectedStudy[2].length - 1)];

        result = `Go study <b>${selectedSubject}</b> from <b>${selectedStudy[0]}</b> category.`

    }

    if (category == "Character Design") {
    // Design
    var characters = [
        ["boy", 1],
        ["youdel", 2],
        ["lafahl", 3],
        ["animal", 4],
        ["robot", 4]
    ]

    var char = characters[MathRInt(0, characters.length - 1)];
    while (char[1] < minComplexity || char[1] > maxComplexity) {
        char = characters[MathRInt(0, characters.length - 1)];
    }

    var animals = ["dog", "cat", "tiger", "kitten", "puppy", "bat", "monkey", "panda", "frog", "turtle", "dinosaur", "parrot", "crocodile", "fennec fox", "furret", "mouse", "wolf", "lizard", "hedgehog", "fox", "rabbit", "bunny"];
    if (char[0] == "animal") char[0] = animals[MathRInt(0, animals.length - 1)] + (MathRInt(0, 2) == 2 ? "(or a creature that looks like it)" : "");

    var personalityTraits = ["confident", "nervous", "scared", "angry", "tired", "careless", "wacky", "derpy", "adventurous", "creepy", "friendly", "shy", "stupid"]; // personality or mood
    var personalityTrait = personalityTraits[MathRInt(0, personalityTraits.length - 1)];
    var traits1 = ["loves balloons", "loves camping", "hates balloons", "likes to bully others", "loves danger", "loves flowers", "hates outdoors", "likes to draw", "is a poet", "loves to fly", "is scared of heights", "loves the life of the countryside", "is a musician", "loves to dress fancy"];
    var trait1 = traits1[MathRInt(0, traits1.length - 1)];
    var traits2 = ["is a great fighter", "is a nerd", "is an archer", "always gets in trouble", "has rich parents", "is an orphan", "loves to sing", "loves to play with dolls", "loves to play with cards", "is a great swimmer"]
    var trait2 = traits2[MathRInt(0, traits2.length - 1)];
     
    
    // Design a [personality] [character], who [trait1] and [trait2].
    result = `Design ${indefinite_article(personalityTrait)} <b>${personalityTrait} ${char[0]}</b>, who ${trait1} and ${trait2}.`;
}
    document.getElementById("result").innerHTML = result;

}