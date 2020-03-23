
	if (gen == "fantasyname") {var amountToGenerate = document.getElementById("amountToGenerate").value;}
    function MathRInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateName(gender = null, race = null) {
		var genders = ["male", "female"];
		var races = ["human", "youdel", "lafahl"];

		if (gender == null) {
            gender = document.getElementById("gender").value;
        }
        if (race == null) {
            race = document.getElementById("race").value;
		}
		
		if (gender == "random") {
			gender = genders[MathRInt(0, genders.length)];
		}

		if (race == "random") {
			race = races[MathRInt(0, races.length)];
		}

        var name1 = [];
        var name2 = [];
        if (gender == "male") {
                if (race == "human") {
                    name1 = ["Gary", "Riko", "Osten", "Atrok", "Barin", "Brel", "Crustoz", "Dochen", "Dorzec", "Ervin", "Hervil", "Tradvoth", "Zek", "Madri", "Dargot", "El", "Kogram", "Razeim", "Gor", "Juku-Zif", "Hidgor", "Lio", "Lional", "Hami", "Thio", "Glerdom", "Enhed", "Narder", "Exard", "Mesym", "Nehelm", "Wuldy", "Tane", "Dani", "Espen", "Dovek", "Fenn", "Gofer", "Hans", "Imlep", "Deris", "Jixterion", "Kevuk", "Lesigfrid", "Malik", "Adriel","Arhan",	"Kielik",	"Aldafuns",	"Etfled",	"Warin",	"Darin",	"Elured",	"Osbert",	"Rafold",	"Wymund",	"Erkenrad",	"Edelstein",	"Aganbold",	"Hugubert",	"Hadley",	"Harvey",	"Josias",	"Grant",	"Herzen",	"Isiver",	"Jartolav",	"Kastav",	"Lin",	"Mantre",	"Nadimak",	"Opasimius", "Galvin", "Simnir", "Ruksin", "Dofkir", "Rinis", "Gardis", "Pikir", "Fazir", "Feleo", "Matsu", "Pifiko", "Ivann", "Zivkin", "Aelzon", "Bilsamir", "Cecilius", "Duvan", "Erskit", "Fimilan", "Grezivius", "Huniticus", "Ikirius", "Jovanicus", "Kit", "Lemitt", "Muzvin", "Nukar", "Obivil", "Prinsepticus", "Rikus", "Quzel", "Tuvix", "Unizar", "Viriks", "Zuntir"];
                    
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
	"Fovli",
	"Otto",
	"Sullo",
	"Gino",
	"Flafty",
	"Duno",
	"Celgy",
	"Rubo",
	"Agil",
	"Bravil",
	"Jelvix"
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
	"Rianne",
	"Onna",
	"Anava",
	"Bona",
	"Cecilia",
	"Dagna",
	"Efinia",
	"Fierna",
	"Gerona",
	"Havna",
	"Junjia",
	"Kota",
	"Limia",
	"Maxia",
	"Nunia",
	"Ovanna",
	"Ruta",
	"Sonuva",
	"Tekka",
	"Unna",
	"Viennia",
	"Zema"
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
	"Tava",
	"Rama",
	"Zavina",
	"Bartosia",
	"Povia",
	"Trussia",
	"Pivona",
	"Regine",
	"Bella"
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
	"Eratti",
	"Alsirson",
	"Bivonni",
	"Cretto",
	"Divialli",
	"Emelto",
	"Fernatto",
	"Girenno",
	"Helmo",
	"Inkiro",
	"Jantollo",
	"Kinmo",
	"Limisso",
	"Nuratto",
	"Osvalli",
	"Pierto",
	"Ringo",
	"Tevialli",
	"Uveronno",
	"Zavianni",
	"Silannio"
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
	"the Joker",
	"the Warrior",
	"the Archer",
	"the Assassin",
	"the Troublemaker",
	"the Longnose",
	"the Keeper",
	"the Smith",
	"the Warden",
	"the Scout",
	"the Duelist",
	"the Barber",
	"the Rocket Launcher",
	"the Gunwielder",
	"the Sailor",
	"the Mage",
	"the Rogue",
	"the Wizard",
	"the Blacksmith",
	"the Shoemaker"
];
		}

		var generatedLafahlName = "";
		// FILLLL THISSSSS
		if (race == "lafahl") {
			generatedLafahlName = generateLafahlName(gender);
		}
			var name = "";
		if (race != "lafahl") {
			name = capitalize(name1[MathRInt(0, name1.length)]) + ' ' + name2[MathRInt(0, name2.length)];
		} else {
			name = generatedLafahlName;
		}
        return name;
	}
	
	function generateLafahlName (theGender) {
		var lf_male_first_name_prefixes = ["Fufu", "Hihe", "Po", "E", "No", "Ba", "Da", "Le", "Su", "Nunu", "Bo", "Lu", "Pu", "Du", "Ze", "Se", "Re", "Bu", "Babi", "Suti", "Po",
		"Suti", "Po", "Popo", "Baba", "Dada", "Ge", "Rere", "Ruru", "Papa", "Nene", "Jaja", "Chu", "Yuyu", "Ga", "Te", "Pu"]
		var lf_male_last_name_prefixes = ["Kiki", "Niko", "Ke", "Tapi", "Wiwi", "Citu", "Ququ", "Jishu", "Bupi", "Petu", "Bu", "Jeti", "Zumi", "Fasi", "Pori", "Sanu", "Peto", "Veru",
		"Wylo", "Yohu", "Selo", "To", "Go", "Mu", "Pa", "Lulu", "Odu", "Zaza", "Dala", "Du", "Gu", "Za", "Na", "Rom", "Yu", "Poto", "Ra", "Ma", "Buli", "Rala", "Lala", "Ke"]
		var lf_female_first_and_last_name_prefixes = ["Cece", "Gecu", "Filu", "Rati", "Didi", "Kaco", "Safu", "Sofi", "Tutu", "Tatu", "Popu", "Papu", "Wagu", "Wagi", "Dama",
		"Pala", "Mi", "Ni", "Hiki", "Pomo", "Tosa", "Moza", "Nono", "Nono", "Tusha", "Ruro", "Poze", "Sela", "Zefu", "Qune", "Qure", "Zuze", "Yoyo", "Diba", "Dalo", "Pene", "Milu",
		"Hiyo", "Poki", "Yuwa", "Leyo", "Dize", "Soku", "Seno", "Jani", "Kushu", "Moto", "Wamu", "Yofu", "Puza", "Jifu", "Bipu", "Bupo", "Jito"];
		var lf_female_suffixes = ["sa", "li", "fu", "pa", "lu", "pi", "si", "di", "du", "mio", "runa", "nisha"];
		var lf_male_suffixes = ["ha", "woha", "wichis", "de", "rapu", "muko", "chapa", "nuku", "poki", "pom", "tari", "fom", "deli", "kki", "bala", "mada", "ori", "dori", "tapu",
		"dapi", "shan", "nasu", "meda", "zeda", "wazu", "ragi", "mehi", "baru", "kuta", "chuto", "yoma", "neko", "lno", "lado", "mani", "lugi", "zai", "nan", "ral", "tan"];
		if (theGender == "male") {
			var suffix = lf_male_suffixes[MathRInt(0, lf_male_suffixes.length)];
			return lf_male_first_name_prefixes[MathRInt(0, lf_male_first_name_prefixes.length)] + suffix + " " 
			+ lf_male_last_name_prefixes[MathRInt(0, lf_male_last_name_prefixes.length)] + suffix;
		} else {
			var suffix = lf_female_suffixes[MathRInt(0, lf_female_suffixes.length)];
			var prefix = lf_female_first_and_last_name_prefixes[MathRInt(0, lf_female_first_and_last_name_prefixes.length)];
			return prefix + suffix + " " + prefix;
		}
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