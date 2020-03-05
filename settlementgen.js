var amountToGenerate = document.getElementById("amountToGenerate").value;
    function MathRInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateSettlement(nation = null) {
        if (nation == null) {
            nation = document.getElementById("nation").value;
        }
        var name1 = [];
        if (nation == "feretti") {
               name1 = ["Pratilhon", "Filita", "Leda Wells", "Blue Field", "Wircossia", "Shinbuchi", "Vensur", "Hupiapal", "Wigston", "Erast", "Ilafari", "Dragon Coast", "Usegu", "Holsenwort", "Horches", "Pofen", "Kowa", "Arith", "Oln", "Kokushiro", "Daikige", "Naka", "Ledon", "Shin", "Fort Cirette"];
        } else if (nation == "ekkionlor") {
               name1 = ["Gnesalim", "Girdeta", "Noro", "Nyudai", "Kinba", "Cahyra", "Hisana", "Huo", "Savita", "Kartis", "Kushiho", "Pluskel", "Sariho", "Nato", "Kawasa", "Karivia", "Shinda", "Frilta", "Shon", "Umi"];
        } else if (nation == "junjian") {
               name1 = ["Yenadevil", "Desudo", "Bogolmo", "Rauni", "Mirabima", "Hampo", "Fashu", "Ara", "Anpo", "Touyako"];
        }


        var name = capitalize(name1[MathRInt(0, name1.length)]);
        return name;
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
        
        document.getElementById("result").innerHTML = result;
    }

    if (gen == "settlementname") {
        generateSettlements();
    }