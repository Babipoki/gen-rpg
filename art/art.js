

function generateArtIdea(complexity, category) {
    var result = ``;
    var allCategories = [];
    // Fanart, Design, Study
    for (var i = 1; i < document.getElementById("category").options.length; i++) {
        allCategories.push(document.getElementById("category").options[i].value);
    }
    if (category == "Random") category = allCategories[MathRInt(0, allCategories.length - 1)];
    if (category == "Non-Study") category = ["Fanart", "Character Design"][MathRInt(0, 1)];
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
            ["Pokémon", 1, ["Ash Ketchum", "Pikachu", "Scorbunny", "Raboot", "Oshawott", "Toxel", "Psyduck", "Drifloon", "Politoed", "Aipom", "Sableye", "Chimchar", "Pansage", "Panpour", "Sobble", "Pancham", "Dedenne", "Togedemaru", "Drizzile", "Morpeko", "Scraggy", "Charmander"]],
            ["Mystery Kids", 2, ["Dipper Pines", "Norman Babcock", "Razputin Aquato", "Wirt", "Greg", "Wirt and Greg", "Danny Phantom", "Invader Zim"]],
            ["League of Legends", 2, ["Gnar", "Teemo", "Kennen", "Nunu", "Heimerdinger", "Rumble", "Veigar", "Amumu", "Poro"]],
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
            ["Solo Series", 2, ["Croket (Croket! game)", "Sadwick (The Whispered World)", "Oliver (Ni No Kuni)", "Boy from Legend of River King 2", "Pajama Sam", "Fuusuke (Ninku)", "Aaron Mitchell (TMvtM)"]],
            ["Solo Series", 3, ["Alvin (Chipmunks)", "Rex (Xenoblade)", "Nup Martini (Summon Night 3)", "Halé (Halé+Guu)", "Prince Ezran (Dragon Prince)", "Len Kagamine", "Bojji (Ousama Ranking)", "Kotaro (Kotaro Lives Alone)"]],
            ["Harvest Moon", 3, ["Mark", "Chelsea", "Barett", "Basil", "Gaius", "Gray", "Jack", "Kyle", "Zaid"]],
            ["Turning Red", 4, ["Robaire (4* Town)", "Jesse (4* Town)", "Aaron Z (4* Town)", "Aaron T (4* Town)", "Tae Young (4* Town)"]],
            ["Sam & Max", 3, ["Sam", "Max", "Max", "Max"]],
            ["Babi's Universe", 1, ["Gobbo", "Impie", "Kiplip"]],
            ["Happy Tree Friends", 2, ["Flaky", "Lifty", "Flippy", "Shifty", "Cuddles", "Splendid", "Mime"]],
            ["Bloons TD6", 2, ["Alchemist Monkey", "Ninja Monkey", "Dart Monkey", "Benjamin", "Etienne", "Glue Gunner", "Sniper Monkey", "Super Monkey", "Druid Monkey"]],
            ["Slime Rancher", 3, ["Pink Slime", "Tabby Slime", "Phosphor Slime", "Honey Slime", "Puddle Slime", "Hunter Slime", "Quantum Slime", "Dervish Slime", "Tangle Slime", "Saber Slime", "Rock Slime", "Rad Slime", "Boom Slime", "Crystal Slime", "Fire Slime", "Mosaic Slime", "Quicksilver Slime", "Glitch Slime", "Gold Slime", "Lucky Slime", "Largo Slimes", "Gordo Slimes", "Party Gordo", "Twinkle Slime", "Feral Slime", "The Tarr", "Cotton Slime", "Ringtail Slime"]],
            ["Max and the Curse of Brotherhood", 4, ["Max", "Felix"]],
            ["Super Animal Royale", 4, ["Fox", "Bear", "Skullcat", "Tiger", "Cat", "Dog", "Songbird", "Deer", "Raccoon", "Blue Jay", "Duck", "Ferret", "Squirrel", "Pigeon", "Bunny", "Monkey", "Donkey", "Pig", "Skunk", "Rat", "Chicken", "Panda", "Sloth", "Sheep", "Owl", "Otter", "Penguin", "Frog", "Wolf", "Lion", "Boar", "Raven", "Hedgehog", "Cow", "Beaver", "Capybara", "Hawk", "Leopard", "Possum", "Goat", "Seal", "Red Panda", "Horse", "Parrot", "Badger", "Turtle", "Hyena", "Hippo", "Bat"]],
            ["Solo Series", 4, ["Mappy (Mappy-Land)", "Mappy Junior (Mappy-Land)", "Ryder (Paw Patrol)", "Byakko no Kogenta"]],
            ["FNAF", 4, ["Balloon Boy", "Toy Bonnie", "Glitchtrap", "Freddy", "Helpy", "Chica", "Foxy", "Golden Freddy", "Spring Bonnie", "Helpy", "Helpy", "Helpy"]],
            ["Sharkdog", 3, ["Max", "Sharkdog", "Royce"]],
            ["Hello Ninja", 4, ["Gen", "Georgie", "Wesley"]],
            ["Pocoyo", 2, ["Pocoyo", "Elly", "Pato", "Loula", "Sleepy Bird", "Boby Bird", "Caterpillar"]],
            ["Super Monsters", 3, ["Drac", "Lobo Howler", "Glorb", "Spike"]],
            ["Sunny Bunnies", 3, ["Big Boo", "Iris", "Shiny", "Hopper", "Turbo"]]
        ];

        var selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        while (selectedSeries[1] < minComplexity || selectedSeries[1] > maxComplexity ) {
            selectedSeries = allSeries[MathRInt(0, allSeries.length - 1)];
        }

        var selectedCharacter = selectedSeries[2][MathRInt(0, selectedSeries[2].length - 1)];
        var actions = ["enjoying a balloon", "trying to pop a balloon", "hugging a balloon", "celebrating birthday", "protecting self against COVID-19", "spending time at the beach", "trying to be a ninja", "making a silly face", "being a derp", "eating food", "eating something tasty", "drinking something", "inflating a balloon", "being exhausted", "popping balloons", "playing around", "reading a book", "cooking a meal", "pranking someone", "drinking milk", "exploring the lands", "looking through the window", "defending against intruders", "posing for the camera", "sleeping", "pillow fighting", "being sad", "swinging on the swings", "playing an instrument", "holding an umbrella", "knitting", "casting magic", "holding a blanket over themselves", "organizing books", "looking at the mirror", "shopping at the mall", "making a sand castle", "running down the corridor", "flying a kite", "using the swings", "tying up shoes", "buying balloons", "composing battle plans", "leading an army", "petting a pet", "throwing rocks", "racing", "drawing", "sitting in the classroom", "being stealthy", "keeping law in order", "bathing or showering", "selling balloons", "hiding from someone", "having a snowball fight", "exploring the wasteland", "drinking tea", "joining boy scouts", "swimming in the pool", "walking a puppy", "walking a dog", "drawing or painting on a balloon(-s)", "laying in bed", "waking up", "reading a book in bed", "celebrating a lonely birthday", "hunting", "poking a balloon with a stick", "navigating with a map", "being a pirate", "combing their hair", "doing science experiments", "doing homework", "trying clothes at the clothes store", "taking a selfie", "aiming with a slingshot", "bouncing on a trampoline", "cleaning a mess", "diving into a pool", "diving underwater", "foraging", "feeding someone", "guarding treasure", "hanging decorations", "icing the cake", "judging you", "judging someone", "kicking something", "kicking the ball", "kicking the balloon", "lecturing the class", "meeting a pokémon", "nibbling on a balloon", "overprotecting the balloon", "pumping up a balloon", "questioning someone", "being badass", "running with a balloon", "running with a kite", "running with a friend", "saluting someone", "tidying up", "unloading a truck", "riding a bicycle/tricycle", "in tribal clothes", "holding a balloon sword", "singing", "smoking", "being a clown", "eating", "making balloon animals", "cleaning", "cooking", "exercising", "preparing to fight", "being held under arms", "studying", "wrestling", "cave diving", "whaling", "playing paintball", "shooting arrows"]
        var action = MathRInt(0, 100) >= 15 ? action = (", " + actions[MathRInt(0, actions.length - 1)]) : "";
        var action2 = MathRInt(0, 100) > 45 ? action2 = (" and " + actions[MathRInt(0, actions.length - 1)]) : "";
        if (action == "") {
            action2 = "";
        }

        if (selectedSeries[0] != "Solo Series") {
            result = `Draw <b><a href="https://google.com/search?q=${selectedCharacter.replace(" ", "+") + "+" + selectedSeries[0].replace(" ", "+") + "&tbm=isch"}">${selectedCharacter}</a></b> from <b>${selectedSeries[0]}</b> series${action}${action2}.`;
        } else {
            result = `Draw <b><a href="https://google.com/search?q=${selectedCharacter.replace(" ", "+") + "&tbm=isch"}">${selectedCharacter}</a></b>${action}.`;
        }
        
    }
    // Study
    if (category == "Study") {
        var allStudies = [
            ["environments", 3, ["a lake", "sea", "forest", "plains", "hell", "clouds", "mountains", "ruins", "rainy weather", "snowy weather", "deserts", "a beach", "an arctic environment"]],
            ["interiors", 4, ["a kid's room", "a kitchen", "a bedroom", "a shop", "a living room", "a dining room", "a balloon shop", "a jewelry store", "a blacksmith's shop", "a church", "a shack", "a mansion", "a bathroom", "a research station", "an abandoned hospital"]],
            ["urban environment", 3, ["a city", "a town", "a village", "a park", "a city plaza", "an amusement park"]],
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
        ["kid", 2],
        ["lalafell", 3],
        ["animal", 3],
        ["harder animal", 4]// Removed Robot
    ]

    var char = characters[MathRInt(0, characters.length - 1)];
    while (char[1] < minComplexity || char[1] > maxComplexity) {
        char = characters[MathRInt(0, characters.length - 1)];
    }

        var animals = ["dog", "cat", "tiger", "bat", "monkey", "panda", "frog", "crocodile", "fennec fox", "furret", "mouse", "lizard", "rabbit", "bunny", "koala", "raccoon", "otter", "ferret", , "slime", "goblin", "yordle", "skunk", "penguin", "squirrel", "duck", "sloth"];
        var harderAnimals = ["hyena", "puppy", "kitten", "fox", "turtle", "dinosaur", "wolf", "seal", "hedgehog", "parrot"];
        if (char[0] == "harder animal") char[0] = harderAnimals[MathRInt(0, harderAnimals.length - 1)] + (MathRInt(0, 3) == 3 ? "-" + (MathRInt(0, 2) > 0 ? harderAnimals[MathRInt(0, harderAnimals.length - 1)] : animals[MathRInt(0, animals.length - 1)]) : "");
        if (char[0] == "animal") char[0] = animals[MathRInt(0, animals.length - 1)] + (MathRInt(0, 3) == 3 ? "-" + animals[MathRInt(0, animals.length-1)] : "");

    var personalityTraits = ["confident", "nervous", "scared", "angry", "tired", "careless", "wacky", "derpy", "adventurous", "creepy", "friendly", "shy", "stupid", "athletic", "colorful", "brave", "insane", "strict", "dirty", "clean", "messy", "selfish", "greedy", "sad", "cute", "tough", "soft", "odd", "dull", "crafty"]; // personality or mood
    var personalityTrait = personalityTraits[MathRInt(0, personalityTraits.length - 1)];
        var traits1 = ["loves balloons", "loves camping", "hates balloons", "likes to bully others", "loves danger", "loves flowers", "hates outdoors", "likes to draw", "is a poet", "loves to fly", "is scared of heights", "loves the life of the countryside", "is a musician", "loves to dress fancy", "lives in the slums", "lives in the sewers", "is helpful", "is a scientist", "is a knight", "is a scientist", "is a clown", "likes to eat a lot", "knows dark magic", "is a theatre actor", "loves to build things", "likes to destroy things", "reads many books", "works as a balloon vendor", "holds a gun", "loves to daydream", "is a night person", "is a pirate", "loves fishing", "holds a balloon sword", "drinks something", "is a friend of fireflies", "wields a sword", "wields a spear", "wields a bow", "is a villain", "likes to spend time with friends", "is running with a balloon", "is nibbling on a balloon", "is hiding from someone", "likes wrestling", "likes cave-diving", "likes riding", "likes paintball", "is looking into the distance", "is using binoculars"];
    var trait1 = traits1[MathRInt(0, traits1.length - 1)];
        var traits2 = ["is a great fighter", "is a nerd", "is an archer", "always gets in trouble", "has rich parents", "is an orphan", "loves to sing", "loves to play with dolls", "loves to play with cards", "is a great swimmer", "eats only vegetables", "is a dragon slayer", "is very dramatic", "loves to dress up in costumes", "loves bowties", "dislikes girls", "fights with swords", "fights with magic", "loves to explore dungeons", "is a proud scout", "loves hugging everything", "loves hugging balloons", "is a friend of slimes", "has a bunny friend", "likes to smoke", "has a ghost friend", "has ghost friends", "likes explosives", "is running from a huge monster", "likes to cook", "is an inventor", "plays a violin", "plays an instrument", "plays poker", "listens to music", "has a monkey friend", "makes balloon animals", "controls minions", "likes cuddly plushies", "likes planes", "likes to have water balloon fights", "holds an umbrella", "does exercises", "cooks something", "likes to exercise"];
        var trait2 = traits2[MathRInt(0, traits2.length - 1)];

        var associatedWords = ["Red", "Blue", "Wind", "Stone", "Sitting", "Laying Down", "Standing", "Running", "Pink", "Purple", "Tiny", "Village", "City", "Modern", "Sci-Fi", "Fantasy", "Magic", "Steampunk", "Flowers", "White", "Black", "Yellow", "Green", "Slow", "Fast", "Rich", "Dark", "Light", "Heavy", "Sharp", "Round", "Colorful", "Dull", "Large", "Small", "Horror", "Adventures", "Happiness", "Deep", "Low", "High", "Teal", "Freckles/Dots", "Stars", "Smiley", "Transparent", "Beaches", "Water", "Sand", "Autumn", "Winter", "Spring", "Summer", "Jumping", "Bandaid", "Blushing", "Derping", "Ice", "Fire", "Teeth", "Rain", "Evil", "Good", "Ghosts", "Fear", "Wild", "Music", "Flight", "Precious", "Madness", "Curly", "Sleepy", "number One", "number Two", "number Three", "number Four", "number Five", "number Six", "Imagination", "Variety", "Agriculture", "Safety", "Hearing", "Disease", "Perspective", "Industry", "Hospital", "Destruction", "Creation", "Old-Fashioned", "Sticky", "Prickly", "Strange"];
        var associatedWord = associatedWords[MathRInt(0, associatedWords.length - 1)];
        var associatedClothings = ["wears tribal clothes", "wears a hood", "wears winter clothes", "doesn't wear any clothes", "doesn't wear any clothes", "is naked", "is naked", "wears undies", "wears eyeglasses", "wears an eyepatch", "wears suspenders", "wears overalls", "wears a onesie", "wears a hoodie", "wears leather armor", "wears plate armor", "wears a school uniform", "wears a tuxedo", "wears a bowtie", "wears a tie", "wears a ninja outfit", "wears something unique", "wears a T-Shirt", "wears a cap", "wears a cap and a bowtie", "wears a hoodie and a cap", "wears very heavy winter clothes", "wears colorful clothes", "wears dull clothes", "wears a backpack", "wears undies and eyeglasses", "wears undies and an eyepatch", "wears undies and a hoodie", "wears a onesie and eyeglasses", "wears a bowtie and eyeglasses", "wears a sweater", "wears a scarf", "wears eyeglasses and a scarf", "wears a pilot outfit", "wears a balloon hat", "wears a striped shirt", "wears a beanie", "wears a bath robe", "wears a floatie", "wears an apron", "wears a police outfit", "wears a halloween costume", "wears a headband", "wears PJs", "wears briefs", "wears boxer shorts", "wears a clown outfit", "wears a jockstrap", "wears a tracksuit", "carries an instrument case", "wears a plug suit", "wears a latex suit", "wears jeans with a T-Shirt", "wears jeans with a hoodie", "wears jeans with a sweater", "wears jeans with a jacket", "wears priest clothes", "wears white church robes", "wears a space marine suit", "wears a monk outfit", "wears a 20th century outfit", "wears a 19th century outfit", "wears a 18th century outfit", "wears a medieval outfit", "wears oversized clothes", "wears tight clothes", "wears a straw hat", "wears a fursuit"];
        var associatedClothing = associatedClothings[MathRInt(0, associatedClothings.length - 1)];
        if (char[0] == "boy" || char[0] == "kid" || char[0] == "lalafell") {
            while (associatedClothing == "is naked" || associatedClothing == "doesn't wear any clothes" || associatedClothing == "wears a jockstrap" || associatedClothing.includes("undies")) {
                associatedClothing = associatedClothings[MathRInt(0, associatedClothings.length - 1)];
            }
        }
        var d100 = MathRInt(0, 100);
        var combinedTraits = "";
        if (d100 > 60) {
            combinedTraits = trait1 + ", " + trait2;
        } else if (d100 > 30) {
            combinedTraits = trait1;
        } else {
            combinedTraits = trait2;
        }
        var secondAssociatedWord = associatedWords[MathRInt(0, associatedWords.length - 1)];
        while (secondAssociatedWord == associatedWord) {
            secondAssociatedWord = associatedWords[MathRInt(0, associatedWords.length - 1)];
        }
    
        // Design a [personality] [character], who [trait1] and [trait2].
        result = `Design ${indefinite_article(personalityTrait)} <b>${personalityTrait} ${char[0]}</b>, who ${combinedTraits} and ${associatedClothing}. Associated with <b>${associatedWord.toLowerCase()}</b> and <b>${secondAssociatedWord.toLowerCase()}</b>.`;
}
    document.getElementById("result").innerHTML = result;

}