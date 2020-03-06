
    function generateCharacter(birthNation = null, race = null) {
        genders = ["male", "female"];
        races = ["human", "youdel"];
        var maturityAges = [18, 32];
        var retirementAges = [60, 348];
        var lifeSpans = [80, 420];
        var raceID = -1;
        var maturityAge = 0;
        var retirementAge = 0;
        var lifeSpan = 0;
        var result = "";

        if (birthNation == null) {
            birthNation = generateSettlement("random").nation;
        }
        if (race == null) {
            race = races[MathRInt(0, races.length)];
                if (race == "human") {
                    raceID = 0;
                } else if (race == "youdel") {
                    raceID = 1;
                }
            maturityAge = maturityAges[raceID];
            retirementAge = retirementAges[raceID];
            lifeSpan = lifeSpans[raceID];
        }

        var birthCity = generateSettlement(nation);

        var gender = genders[MathRInt(0, genders.length)];
        var age = MathRInt[0, lifeSpan];
        var characterName = generateName(gender, race);

        result = characterName + " is a " + age + " years old " + gender + ", born in " + birthCity + ", " + birthNation + ".";

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

    if (gen == "settlementname") {
        generateSettlements();
    }