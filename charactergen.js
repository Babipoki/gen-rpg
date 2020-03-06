
    function generateCharacter(birthNation = null, race = null) {
        genders = ["male", "female"];
        races = ["human", "youdel"];
        nations = ["feretti", "ekkionlor", "junjian"]
        var maturityAges = [18, 32];
        var retirementAges = [60, 348];
        var lifeSpans = [80, 420];
        var raceID = -1;
        var maturityAge = 0;
        var retirementAge = 0;
        var lifeSpan = 0;
        var age = 0;
        var result = "";
        var birthNationName = ""; // full name of the nation

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
        }
        maturityAge = maturityAges[raceID];
        retirementAge = retirementAges[raceID];
        lifeSpan = lifeSpans[raceID];
        age = MathRInt(0, lifeSpan);

        var birthCity = generateSettlement(birthNation);
        var gender = genders[MathRInt(0, genders.length)];
        var characterName = generateName(gender, race);

        result = characterName + " is a " + age + " year old " + gender + " " + race + ", born in " + birthCity + ", " + birthNationName + ".";

        document.getElementById("result").innerHTML = result;
    }

    function generateSettlements() {
        var amount = document.getElementById("amountToGenerate").value;
        var result = "<p>";
        for (i = 0; i < amount; i++) {
            if (i != amount) {
                result += generateSettlement() + "<br>";
            } else {
                result += generateSettlement() + "</p>";
            }
            
        }
        
        
    }

    if (gen == "character") {
        generateCharacter();
    }