

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
            ["Pokémon", 1, ["Ash Ketchum", "Pikachu", "Scorbunny", "Raboot", "Oshawott", "Toxel", "Psyduck", "Drifloon", "Politoed", "Aipom", "Sableye", "Chimchar", "Pansage", "Panpour", "Sobble", "Pancham", "Dedenne", "Togedemaru", "Drizzile", "Morpeko", "Scraggy"]],
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
            ["How to Train Your Dragon", 3, ["Hiccup", "Toothless"]],
            ["Kingdom Hearts", 2, ["Sora", "Roxas", "Ventus", "Mickey Mouse", "Donald Duck"]],
            ["Winnie the Pooh", 3, ["Christopher Robin", "Winnie the Pooh", "Piglet"]],
            ["Digimon", 2, ["Tai Kamiya", "T. K. Takaishi", "Matt Ishida", "Izzy Izumi", "a random digimon"]],
            ["Animal Crossing", 1, ["Yū", "Raymond", "Broccolo", "Doc", "Drake", "Filbert", "Nibbles", "Joey", "Ruby"]],
            ["Ninjala", 1, ["Van", "Ron", "Burton", "Kappei"]],
            ["Fullmetal Alchemist", 3, ["Selim Bradley", "Edward Elric", "Rick"]],
            ["Jak (3?)", 4, ["Jak", "Daxter", "Jak and Daxter", "Seem", "Pecker"]],
            ["Dark Cloud 2", 3, ["Max", "Erik", "Max and Erik", "Gaspard"]],
            ["Bully: Scholarship Edition", 3, ["Jimmy Hopkins", "Pete Kowalski", "Pedro De La Hoya", "Sheldon Thompson"]],
            ["Dragon Quest XI", 3, ["Erik", "Hero", "Tockles", "a Tockle", ""]],
            ["Alex Kidd", 2, ["Alex Kidd", "Igul"]],
            ["Sonic the Hedgehog", 3, ["Tails", "Sonic", "Sonic and Tails"]],
            ["Fallout Series", 3, ["Bryan Wilks", "Knick Knack", "little Robert MacCready", "Zip", "Austin Engill", "Shaun"]],
            ["Yo-Kai Watch", 2, ["Whisper", "Nathan Adams", "Nathan and Whisper", "Jibanyan", "Hovernyan", "Edward"]],
            ["A Boy and His Blob", 2, ["Boy", "Blob", "Boy... and his blob?"]],
            ["Blue Dragon Plus", 2, ["Shu", "Jiro", "Marumaro"]],
            ["Solo Series", 2, ["Croket (Croket! game)", "Sadwick (The Whispered World)", "Oliver (Ni No Kuni)", "Boy from Legend of River King 2", "Pajama Sam", "Fuusuke (Ninku)"]],
            ["Solo Series", 3, ["Alvin (Chipmunks)", "Rex (Xenoblade)", "Nup Martini (Summon Night 3)", "Halé (Halé+Guu)", "Prince Ezran (Dragon Prince)", "Len Kagamine"]],
            ["Harvest Moon", 3, ["Mark", "Chelsea", "Barett", "Basil", "Gaius", "Gray", "Jack", "Kyle", "Zaid"]],
        ];

        var selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        while (selectedSeries[1] < minComplexity || selectedSeries[1] > maxComplexity ) {
            selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        }

        var selectedCharacter = selectedSeries[2][MathRInt(0, selectedSeries[2].length - 1)];
        var actions = ["enjoying a balloon", "trying to pop a balloon", "hugging a balloon", "celebrating birthday", "protecting self against COVID-19", "spending time at the beach", "trying to be a ninja", "making a silly face", "being a derp", "eating food", "eating something tasty", "drinking something", "inflating a balloon", "being exhausted", "popping balloons", "playing around", "reading a book", "cooking a meal", "pranking someone", "drinking milk", "exploring the lands", "looking through the window", "defending against intruders", "posing for the camera", "sleeping", "pillow fighting", "being sad", "swinging on the swings", "playing an instrument", "holding an umbrella", "knitting", "casting magic", "holding a blanket over themselves", "organizing books", "looking at the mirror", "shopping at the mall", "making a sand castle", "running at the school corridor", "flying a kite", "using the swings", "tying up shoes", "buying balloons", "composing battle plans", "leading an army", "petting a pet", "throwing rocks", "racing", "drawing", "sitting in the classroom", "being stealthy", "keeping law in order", "bathing or showering", "selling balloons", "hiding from someone", "having a snowball fight", "exploring the wasteland", "drinking tea", "joining boy scouts", "swimming in the pool", "walking a puppy", "walking a dog", "drawing or painting on a balloon(-s)", "laying in bed", "waking up", "reading a book in bed", "celebrating a lonely birthday", "hunting", "poking a balloon with a stick", "navigating with a map", "being a pirate", "combing their hair", "doing science experiments", "doing homework", "trying clothes at the clothes store", "taking a selfie"]
        var action = MathRInt(0, 100) >= 15 ? action = (", " + actions[MathRInt(0, actions.length - 1)] ) : "";

        if (selectedSeries[0] != "Solo Series") {
            result = `Draw <b><a href="https://google.com/search?q=${selectedCharacter.replace(" ", "+") + "+" + selectedSeries[0].replace(" ", "+") + "&tbm=isch"}">${selectedCharacter}</a></b> from <b>${selectedSeries[0]}</b> series${action}.`;
        } else {
            result = `Draw <b><a href="https://google.com/search?q=${selectedCharacter.replace(" ", "+") + "&tbm=isch"}">${selectedCharacter}</a></b>${action}.`;
        }
        
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

    var animals = ["dog", "cat", "tiger", "kitten", "puppy", "bat", "monkey", "panda", "frog", "turtle", "dinosaur", "parrot", "crocodile", "fennec fox", "furret", "mouse", "wolf", "lizard", "hedgehog", "fox", "rabbit", "bunny", "sloth", "koala", "raccoon", "otter", "seal"];
    if (char[0] == "animal") char[0] = animals[MathRInt(0, animals.length - 1)] + (MathRInt(0, 2) == 2 ? "(or a creature that looks like it)" : "");

    var personalityTraits = ["confident", "nervous", "scared", "angry", "tired", "careless", "wacky", "derpy", "adventurous", "creepy", "friendly", "shy", "stupid", "athletic"]; // personality or mood
    var personalityTrait = personalityTraits[MathRInt(0, personalityTraits.length - 1)];
    var traits1 = ["loves balloons", "loves camping", "hates balloons", "likes to bully others", "loves danger", "loves flowers", "hates outdoors", "likes to draw", "is a poet", "loves to fly", "is scared of heights", "loves the life of the countryside", "is a musician", "loves to dress fancy", "lives in the slums", "lives in the sewers", "is helpful", "wears eyeglasses", "wears an eyepatch", "is a scientist", "is a knight", "is a scientist", "is depressed", "is a clown", "likes to eat a lot", "knows dark magic", "is a theatre actor"];
    var trait1 = traits1[MathRInt(0, traits1.length - 1)];
    var traits2 = ["is a great fighter", "is a nerd", "is an archer", "always gets in trouble", "has rich parents", "is an orphan", "loves to sing", "loves to play with dolls", "loves to play with cards", "is a great swimmer", "eats only vegetables", "is a dragon slayer", "is very dramatic", "loves to dress up in costumes", "loves bowties", "dislikes girls", "fights with swords", "fights with magic", "loves to explore dungeons"]
    var trait2 = traits2[MathRInt(0, traits2.length - 1)];
     
    
    // Design a [personality] [character], who [trait1] and [trait2].
    result = `Design ${indefinite_article(personalityTrait)} <b>${personalityTrait} ${char[0]}</b>, who ${trait1} and ${trait2}.`;
}
    document.getElementById("result").innerHTML = result;

}