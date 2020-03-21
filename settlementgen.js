if (gen == "settlementname") {var amountToGenerate = document.getElementById("amountToGenerate").value; }
else {amountToGenerate = 1}
    function MathRInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateSettlement(nation = null) {
        var nations = ["feretti", "ekkionlor", "junjian", "toras"];
        if (nation == null) {
            nation = document.getElementById("nation").value;
        }

        if (nation == "random") {
            nation = nations[MathRInt(0, nations.length)];
        }

        
        var name1 = [];
        if (nation == "feretti") {
                name1 = ["Pratilhon", "Filita", "Leda Wells", "Blue Field", "Wircossia", "Shinbuchi", "Vensur", "Hupiapal", "Wigston", "Erast", "Ilafari", "Dragon Coast", "Usegu", "Holsenwort", "Horches", "Pofen", "Kowa", "Arith", "Oln", "Kokushiro", "Daikige", "Naka", "Ledon", "Shin", "Fort Cirette"];
        } else if (nation == "ekkionlor") {
                name1 = ["Gnesalim", "Girdeta", "Noro", "Nyudai", "Kinba", "Cahyra", "Hisana", "Huo", "Savita", "Kartis", "Kushiho", "Pluskel", "Sariho", "Nato", "Kawasa", "Karivia", "Shinda", "Frilta", "Shon", "Umi"];
        } else if (nation == "junjian") {
                name1 = ["Yenadevil", "Desudo", "Bogolmo", "Rauni", "Mirabima", "Hampo", "Fashu", "Ara", "Anpo", "Touyako"];
        } else if (nation == "toras") {
                name1 = ["Wulopi", "Samino", "Kirna", "Dunwich", "Tohamu", "Felnerzog", "Ziglon", "Temblelas", "Rabalon", "Satareku City", "Esembejas", "Sashi", "Upiaba", "Stedt", "Bronzetown", "Boru", "Oshi", "Feligen"]
        } else if (nation == "besizottia") {
                name1 = ["Pioz", "Allocen", "Ely", "Argala"];
        } else if (nation == "rotali") {
                name1 = ["Stavilion", "Fera", "Falumi", "Grantisa", "Redu", "Esbartue", "Poki", "Bela", "Mina", "Sangi", "Blue Fort", "Eledor", "Cireli", "Miza", "Martruta", "Misa", "Lala Town", "Rielma", "Pamo", "Alta", "Elhondo", "Kiretu", "Poku", "Agangost", "Tagagi", "Falcon's Beak", "Etal", "Steethorp", "Gudmisetr"]
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