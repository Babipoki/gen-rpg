var amountToGenerate = document.getElementById("amountToGenerate").value;
    function MathRInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateName(gender = null, race = null) {
        if (gender == null) {
            gender = document.getElementById("gender").value;
        }
        if (race == null) {
            race = document.getElementById("race").value;
        }
        var name1 = [];
        var name2 = [];
        if (gender == "male") {
                if (race == "human") {
                    name1 = ["Gary", "Riko", "Osten", "Atrok", "Barin", "Brel", "Crustoz", "Dochen", "Dorzec", "Ervin", "Hervil", "Tradvoth", "Zek", "Madri", "Dargot", "El", "Kogram", "Razeim", "Gor", "Juku-Zif", "Hidgor", "Lio", "Lional", "Hami", "Thio", "Glerdom", "Enhed", "Narder", "Exard", "Mesym", "Nehelm", "Wuldy", "Tane", "Dani", "Espen", "Dovek", "Fenn", "Gofer", "Hans", "Imlep", "Deris", "Jixterion", "Kevuk", "Lesigfrid", "Malik", "Adriel","Arhan",	"Kielik",	"Aldafuns",	"Etfled",	"Warin",	"Darin",	"Elured",	"Osbert",	"Rafold",	"Wymund",	"Erkenrad",	"Edelstein",	"Aganbold",	"Hugubert",	"Hadley",	"Harvey",	"Josias",	"Grant",	"Herzen",	"Isiver",	"Jartolav",	"Kastav",	"Lin",	"Mantre",	"Nadimak",	"Opasimius"];
                    
                }
                if (race == "youdel") {
                    name1 = ["Aelhand",
	"Brundon",
	"Brunton",
	"Aeltifi",
	"Carrus",
	"Carney",
	"Ferrin",
	"Ferkie",
	"Greemus",
	"Grippy",
	"Halbie",
	"Halbert",
	"Jacoby",
	"Jaklie",
	"Leland",
	"Livie",
	"Marko",
	"Mirrie",
	"Pelias",
	"Pellie",
	"Raurus",
	"Riri",
	"Talliannid",
	"Tallie",
	"Tainy",
	"Xavier",
	"Xetrick",
	"Zeke",
	"Zaiky",
	"Divie",
	"Dapli",
	"Ensi",
	"Erfi",
	"Bakli",
	"Rikki",
	"Pappo",
	"Fovli"
];
                }
        } else if (gender == "female") {
            if (race == "human") {
                    name1 = [
	"Savute",
	"Hogile",
	"Razhusi",
	"Lindri",
	"Vesa",
	"Sorah",
	"Lisvasrolla",
	"Luldrala",
	"Biana",
	"Soza",
	"Nola",
	"Shua",
	"Yavlava",
	"Senta",
	"Calsuna",
	"Elix",
	"Aerild",
	"Ausan",
	"Inell",
	"Ingati",
	"Dovili",
	"Ausrana",
	"Abel",
	"Cyna",
	"Godga",
	"Godia",
	"Aveda",
	"Bathuka",
	"Colina",
	"Daria",
	"Esara",
	"Folipora",
	"Gativa",
	"Harumi",
	"Jefolia",
	"Kanusa",
	"Latuva",
	"Makula",
	"Natuli",
	"Oratia",
	"Pelia",
	"Rapava",
	"Tola",
	"Unova",
	"Zerria",
	"Aethelgyth",
	"Adelana",
	"Rianne"
];
                }
                if (race == "youdel") {
                    name1 = [
	"Brandy",
	"Catarine",
	"Eala",
	"Galli",
	"Helena",
	"Kellie",
	"Kittie",
	"Margo",
	"Quiver",
	"Sabrina",
	"Terri",
	"Zaka",
	"Tava"
];
                    
                }
        }

        if (race == "human") {
            name2 = [
	"Nicklesteam",
	"Zitveme",
	"Julandes",
	"Fand",
	"Bicribi",
	"Chaz",
	"Whiteclaw",
	"Stornun",
	"Frozenhorn",
	"Nosereaver",
	"Mupveld",
	"Nei",
	"Chaon",
	"Mernen",
	"Hazecutter",
	"Shedad",
	"Bheimin",
	"Pasqelde",
	"Greensteam",
	"Vrenzobu",
	"Puang",
	"Piscuzin",
	"Stoduz",
	"Greatflayer",
	"Girnelzegya",
	"Udelzu",
	"Quem",
	"Andesta",
	"Zunoman",
	"Birkosk",
	"Jodil",
	"Shakhim",
	"Quem",
	"Winterwolf",
	"Shi",
	"Zekrukt",
	"Kukrov",
	"Vursk",
	"Riveraxe",
	"Peler",
	"Boscelos",
	"Sesanu",
	"Fintersoe",
	"Imonti",
	"Aricu",
	"Esanu",
	"Brakews",
	"Cother",
	"Hudmar",
	"Casteli",
	"Enrend",
	"Haddle",
	"Etenti",
	"Fivekse",
	"Parre",
	"Gatis",
	"Salini",
	"Depu",
	"Stone",
	"West",
	"Strawson",
	"Feroti",
	"Delavo",
	"Ziveli",
	"Windson",
	"Winden",
	"Yin",
	"Bristavil",
	"Chelim",
	"Digoli",
	"Ritu",
	"Salu",
	"Aguso",
	"Vilettu",
	"Lutavi",
	"Bofim",
	"Coresso",
	"Sefali",
	"Potramis",
	"Retofano",
	"Bisby",
	"Blakewood",
	"Elford",
	"Immers",
	"Imore",
	"Izzo",
	"L'Hernault",
	"Netzke",
	"Orrels",
	"Plonta",
	"Pummeroy",
	"Elafinnio",
	"Falu",
	"Subelza",
	"Vasa",
	"Ganto",
	"Povazu",
	"Resko",
	"Kirimmi",
	"Eratti"
];
        }

        if (race == "youdel") {
            name2 = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"the Unknown",
	"the Hero",
	"the Warhammer",
	"the Speaker",
	"the Giggler",
	"the Warrior",
	"the Archer",
	"the Quick",
	"the Troublemaker",
	"the Longnose",
	"the Keeper",
	"the Smith",
	"the Warden",
	"the Scout",
	"the Fierce",
	"the Barber",
	"the Launcher",
	"the Gunwielder",
	"the Sailor",
	"the Mage",
	"the Rogue"
];
        }


        var name = capitalize(name1[MathRInt(0, name1.length)]) + ' ' + name2[MathRInt(0, name2.length)];
        return name;
    }

    function generateNames() {
        var amount = document.getElementById("amountToGenerate").value;
        var result = "<p>";
        for (i = 0; i < amount; i++) {
            if (i != amount) {
                result += generateName() + "<br>";
            } else {
                result += generateName() + "</p>";
            }
            
        }
        
        document.getElementById("result").innerHTML = result;
    }

    if (gen == "fantasyname") {
        generateNames();
    }