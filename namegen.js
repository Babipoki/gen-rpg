
	if (gen == "fantasyname") {var amountToGenerate = document.getElementById("amountToGenerate").value;}
    function MathRInt(min, max) {
		min = Math.ceil(min);
    	max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function generateName(gender = null, race = null) {
		var genders = ["male", "female"];
		var races = ["human", "youdel", "lafahl", "namazu", "mandirigorri"];

		if (gender == null) {
            gender = document.getElementById("gender").value;
        }
        if (race == null) {
            race = document.getElementById("race").value;
		}
		
		if (gender == "random") {
			gender = genders[MathRInt(0, genders.length - 1)];
		}

		if (race == "random") {
			race = races[MathRInt(0, races.length - 1)];
		}

        var name1 = [];
        var name2 = [];
        if (gender == "male") {
                if (race == "human") {
					name1 = ["Gary", "Riko", "Osten", "Atrok", "Barin", "Brel", "Crustoz", "Dochen", "Dorzec", "Ervin", "Hervil", "Tradvoth", "Zek", "Madri", "Dargot", "El", "Kogram", "Razeim", "Gor", "Juku-Zif", "Hidgor", "Lio", "Lional", "Hami", "Thio", "Glerdom", "Enhed", "Narder", "Exard", "Mesym", "Nehelm", "Wuldy", "Tane", "Dani", "Espen", "Dovek", "Fenn", "Gofer", "Hans", "Imlep", "Deris", "Jixterion", "Kevuk", "Lesigfrid", "Malik", "Adriel","Arhan" , "Kielik" , "Aldafuns" , "Etfled" , "Warin" , "Darin", "Elured" , "Osbert" , "Rafold" , "Wymund" , "Erkenrad" , "Edelstein" , "Aganbold" , "Hugubert" , "Hadley" , "Harvey" , "Josias" , "Grant" , "Herzen" , "Isiver" , "Jartolav" , "Kastav" , "Lin" , "Mantre" , "Nadimak" , "Opasimius", "Galvin", "Simnir", "Ruksin", "Dofkir", "Rinis", "Gardis", "Pikir", "Fazir", "Feleo", "Matsu", "Pifiko", "Ivann", "Zivkin", "Aelzon", "Bilsamir", "Cecilius", "Duvan", "Erskit", "Fimilan", "Grezivius", "Huniticus", "Ikirius", "Jovanicus", "Kit", "Lemitt", "Muzvin", "Nukar", "Obivil", "Prinsepticus", "Rikus", "Quzel", "Tuvix", "Unizar", "Viriks", "Zuntir", "Lusoy", "Rynozi", "Kirir", "Rolub", "Vanakk", "Wusar", "Duron", "Nigulin", "Siarin", "Adalis", "Sondossan", "Shatar", "Sherin", "Yamato", "Keita", "Fuji", "Sawa", "Akiki", "Zaki", "Lyseril", "Noran", "Sunil", "Rodrilo", "Tohm", "Dynios", "Bepios", "Teuraos", "Dariaos", "Atto", "Hinio", "Foibo", "Parenzo", "Ematius", "Kalvin", "Dannicus", "Samuhale", "Divitus", "Rezal", "Unilicus", "Lotivan", "Pahn'aad", "Tivalis", "Divilis", "Pivius", "Zak'aar", "Baxilius", "Rokim", "Epivius", "Poroy", "Zigaran", "Salik", "Ferik", "Iticus", "Tekimius", "Senivilius", "Miliwardicus", "Aran", "Motan", "Aliseus", "Patilus", "Makutir", "Ukanar", "Kasian", "Nitikar", "Elvin", "Gidirus", "Zuman", "Juel", "Hilatis", "Sopitas", "Salakas", "Parak", "Enkitt", "Elant", "Firtirr", "Hafar", "Wasahin", "Kitaut", "Kotinkal", "Kalasim", "Senitakim", "Hiwal", "D'Falat", "Akir", "Saval", "Dilim", "Kasarin", "Kurapak", "Poltan", "Arelius", "Avazis", "Silavis", "Kirin", "Safalit", "Behakim", "Fiet", "Ryndel", "Pik", "Dalid", "Pritan", "Kamil", "Folke", "Hamius", "Inai", "Abutis", "Baubulis", "Cadotim", "Ebival", "Gatil", "Hadak", "Idul", "Jat", "Katil", "Makot", "Natil", "Odiv", "Pabik", "Qudal", "Rifal", "Sutar", "Tadil", "Ubakim", "Vadul", "Yadal", "Zadir", "Colim", "Dovil", "Ekal", "Fosok", "Hodak", "Ikitt", "Jotro", "Koli", "Lodil", "Mogval", "Okrim", "Qupo", "Rotigo", "Sotak", "Tokim", "Ukul", "Vopilig", "Xakur", "Yotul", "Zoki", "Azil", "Bizag", "Dizag", "Gizal", "Hazil", "Igaliz", "Kizal", "Lakiz", "Mizak", "Nilaz", "Oliz", "Pazil", "Qigal", "Rizag", "Sagil", "Tigiz", "Uzig", "Vizag", "Xin", "Yigal", "Abudric", "Adilan", "Adirak", "Agreri", "Agrin", "Argi", "Athelstan", "Attor", "Avenal", "Baymas", "Bellinus", "Bersi", "Bieven", "Bordat", "Brogan", "Cadedri", "Cadmon", "Cavia", "Cendarwen", "Cethien", "Darius", "Deogol", "Eder", "Edlin", "Edric", "Falmrinth", "Faran", "Ferragus", "Fredek", "Fyren", "Galan", "Garazan", "Gildas", "Godric", "Gest", "Grindan", "Hakon", "Harek", "Hedin", "Hord", "Hrut", "Jeloth", "Karayan", "Karolek", "Kenric", "Ketil", "Korian", "Kurush", "Lander", "Lar", "Laraon", "Laromald", "Legoreth", "Leidus", "Letos", "Lotheird", "Maccus", "Maks", "Mendal", "Merand", "Micolai", "Mirardol", "Naviel", "Oleg", "Penrith", "Peri", "Prendar", "Preni", "Pyotr", "Rabican", "Ragnar", "Raoch", "Rodor", "Roeloth", "Rykath", "Santio", "Sennet", "Shurik", "Skapti", "Strang", "Tamar", "Tellan", "Thales", "Thatram", "Thord", "Thormod", "Thrand", "Torr", "Torsten", "Trymman", "Tucien", "Umassa", "Vartan", "Yawen", "Yazdan", "Yiran"
				];
                    
                }
                if (race == "youdel") {
                    name1 = ["Aelhand",	"Brundon", "Brunton", "Aeltifi", "Carrus", "Carney", "Ferrin", "Ferkie", "Greemus", "Grippy", "Halbie", "Halbert", "Jacoby", "Jaklie", "Leland", "Livie", "Marko", "Mirrie", "Pelias", "Pellie", "Raurus", "Riri", "Talliannid", "Tallie", "Tainy", "Xavier", "Xetrick", "Zeke", "Zaiky", "Divie", "Dapli", "Ensi", "Erfi", "Bakli", "Rikki", "Pappo", "Fovli", "Otto", "Sullo", "Gino", "Flafty", "Duno", "Celgy", "Rubo", "Agil", "Bravil", "Jelvix", "Koko", "Usodan", "Okatan", "Kifuto", "Rex", "Sunal", "Foxy", "Argy", "Enton", "Ki", "Chopper", "Notan", "Ikkitan", "Gitan", "Tavalan", "Filsh", "Karbat", "Sultan", "Kreun", "Sharik", "Andy", "Bookins", "Chocoboy", "Diggy", "Evilboy", "Foxtrot", "Gogo", "Higgy", "Huggy", "Index", "Jethro", "Katikatis", "Lumpo", "Meowser", "Nonix", "Otho", "Pinkster", "Quiverboy", "Ridigulous", "Silvin", "Tuko", "Ugnir", "Vavi", "Xerbert", "Youngster", "Zakkie"
];
                }
        } else if (gender == "female") {
            if (race == "human") {
                    name1 = ["Savute", "Hogile", "Razhusi", "Lindri", "Vesa", "Sorah", "Lisvasrolla", "Luldrala", "Biana", "Soza", "Nola", "Shua", "Yavlava", "Senta", "Calsuna", "Elix", "Aerild", "Ausan", "Inell", "Ingati", "Dovili", "Ausrana", "Abel", "Cyna", "Godga", "Godia", "Aveda", "Bathuka", "Colina", "Daria", "Esara", "Folipora", "Gativa", "Harumi", "Jefolia", "Kanusa", "Latuva", "Makula", "Natuli", "Oratia", "Pelia", "Rapava", "Tola", "Unova", "Zerria", "Aethelgyth", "Adelana", "Rianne", "Onna", "Anava", "Bona", "Cecilia", "Dagna", "Efinia", "Fierna", "Gerona", "Havna", "Junjia", "Kota", "Limia", "Maxia", "Nunia", "Ovanna", "Ruta", "Sonuva", "Tekka", "Unna", "Viennia", "Zema", "Iruma", "Aldaila", "Itachia", "Isophia", "Naida", "Aila", "Aili", "Airisti", "Seuda", "Euna", "Heula", "Iana", "Ilae", "Irisura", "Yanariara", "Ainadilia", "Euthellia", "Sadaina", "Lirtista", "Asastlia", "Lasittia", "Essotia", "Radeatia", "Braubia", "Aughetia", "Anya", "Emmia", "Brilda", "Bredda", "Erildia", "Polavia", "Zevunia", "Tezamia", "Filinia", "Nydia", "Rahelia", "Elenna", "Folia", "Malavia", "Leandra", "Gelandra", "Hanivia", "Lavia", "Toniella", "Gotana", "Mona", "Ilivia", "Conavia", "Shania", "Givania", "Regia", "Okala", "Silicia", "Pimaria", "Inelia", "Tarania", "Elanta", "Monatta", "Poulevia", "Pinavolia", "Sevona", "Villiana", "Saminakka", "Ekstinia", "Patie", "Rodia", "Dakania", "Vetasia", "Kai'juna", "Gilagota", "Sarana", "Olanga", "Penama", "Tivadinia", "Amelia", "Kadasarra", "Sarizia", "Darza", "Vivia", "Kavia", "Ziera", "Uoppa", "Deiva", "Jimanka", "Domga", "Aganna", "Ellia", "Putilia", "Samada", "Rayda", "Nesia", "Anoga", "Afelia", "Becalla", "Cefie", "Dacelia", "Ecia", "Geltonia", "Hecara", "Icera", "Jacfelia", "Kefolia", "Mecassa", "Necafia", "Pacelia", "Qacia", "Quasia", "Recafia", "Sefala", "Tefilia", "Ufelia", "Vedusia", "Xatrina", "Zacsia", "Agatelia", "Bikala", "Cikata", "Egilia", "Fijita", "Gilia", "Hikala", "Igita", "Jikuma", "Kima", "Lita", "Mika", "Nitara", "Okala", "Pajala", "Qita", "Rita", "Sigala", "Tikita", "Ukata", "Vikula", "Xia", "Zivala", "Anokka", "Bovila", "Dovita", "Enotta", "Fominatta", "Gomita", "Hovita", "Ivita", "Jitata", "Lomina", "Monita", "Nonata", "Omatta", "Pavatta", "Qovara", "Rikista", "Somanta", "Tonata", "Uvola", "Vonvita", "Yota", "Zova", "Acendra", "Adalind", "Adryn", "Agatha", "Aideen", "Alwyn", "Alyvia", "Arabeth", "Ardra", "Arella", "Astalella", "Belindra", "Brenna", "Bress", "Brielle", "Brithael", "Bruswen", "Cadaewen", "Cambree", "Caryne", "Caylin", "Chanti", "Chevonne", "Dagda", "Dagwyn", "Dallandra", "Derris", "Diadra", "Dydia", "Egeria", "Ellette", "Eryke", "Fatina", "Flouerana", "Galatea", "Galewen", "Gavina", "Helinda", "Iana", "Ibearwen", "Icava", "Ishara", "Jaden", "Jasara", "Jayna", "Jonaya", "Kaelyn", "Kahina", "Karran", "Kathan", "Kira", "Koali", "Kona", "Kota", "Ladia", "Landailyn", "Landrea", "Laurana", "Lodica", "Lyphilla", "Madora", "Mauriana", "Megara", "Megenlind", "Melia", "Mora", "Muriel", "Nagvar", "Narisa", "Nerama", "Nerine", "Nidawi", "Nordrada", "Odlenda", "Odriana", "Ogma", "Olinda", "Onua", "Oriel", "Pala", "Pari", "Radella", "Regana", "Riberta", "Sadi", "Sarea", "Shaundra", "Siveth", "Sunita", "Talia", "Terentia", "Thana", "Thedela", "Thieda", "Tradith", "Tylwyth", "Umindra", "Vaossi", "Vesta", "Zawen"
];
                }
                if (race == "youdel") {
                    name1 = [ "Brandy", "Catarine", "Eala", "Galli", "Helena", "Kellie", "Kittie", "Margo", "Quiver", "Sabrina", "Terri", "Zaka", "Tava", "Rama", "Zavina", "Bartosia", "Povia", "Trussia", "Pivona", "Regine", "Bella", "Chika", "Elakka", "Alina", "Ybilia", "Elena", "Agata", "Diana", "Kava", "Oriane", "Fiona", "Dovilia", "Gretha", "Bulta", "Akolta", "Divannia", "Agata", "Adata", "Beatrice", "Cidra", "Dovila", "Evelinn", "Fernanda", "Galivia", "Holga", "Irena", "Javia", "Kate", "Lipsmoochia", "Manta", "Navia", "Olga", "Patricia", "Quanda", "Ruta", "Sudava", "Tarnia", "Upa", "Vivia", "Xendricia", "Zukia", "Asata", "Bizeva", "Charna", "Dela", "Eka", "Fansa", "Gala", "Hala", "Irma", "Jakla", "Krata", "Lamina", "Maksa", "Noksa", "Oksa", "Parsa", "Tata", "Varna", "Ziva"
];                 
                }
        }

        if (race == "human") {
            name2 = [ "Nicklesteam", "Moriksen", "Zitveme", "Rojas", "Julandes", "Duruhami", "Fand", "Bicribi", "Chaz", "Whiteclaw", "Stornun", "Frozenhorn", "Nosereaver", "Mupveld", "Nei", "Chaon", "Mernen", "Hazecutter", "Shedad", "Bheimin", "Pasqelde", "Greensteam", "Vrenzobu", "Puang", "Piscuzin", "Masciulli", "Huante", "Matinzo", "Ekato", "Stoduz", "Greatflayer", "Girnelzegya", "Udelzu", "Quem", "Andesta", "Zunoman", "Birkosk", "Jodil", "Shakhim", "Quem", "Winterwolf", "Shi", "Zekrukt", "Kukrov", "Vursk", "Riveraxe", "Peler", "Boscelos", "Sesanu", "Fintersoe", "Imonti", "Aricu", "Esanu", "Brakews", "Cother", "Hudmar", "Casteli", "Enrend", "Haddle", "Etenti", "Fivekse", "Parre", "Gatis", "Salini", "Depu", "Stone", "West", "Strawson", "Feroti", "Delavo", "Ziveli", "Windson", "Winden", "Yin", "Bristavil", "Chelim", "Digoli", "Ritu", "Salu", "Aguso", "Vilettu", "Lutavi", "Bofim", "Coresso", "Sefali", "Potramis", "Retofano", "Bisby", "Blakewood", "Elford", "Immers", "Imore", "Izzo", "L'Hernault", "Netzke", "Orrels", "Plonta", "Pummeroy", "Elafinnio", "Falu", "Subelza", "Vasa", "Ganto", "Povazu", "Resko", "Kirimmi", "Eratti", "Alsirson", "Bivonni", "Cretto", "Divialli", "Emelto", "Fernatto", "Girenno", "Helmo", "Inkiro", "Jantollo", "Kinmo", "Limisso", "Nuratto", "Osvalli", "Pierto", "Ringo", "Tevialli", "Uveronno", "Zavianni", "Silannio", "Shimaar", "Silafo", "Parioni", "Zhalshimaar", "Morett", "Wobell", "Rencianno", "Ohasenuvo", "Abelane", "Bilasonni", "Vordara", "Sorra", "Cascio", "Thorne", "Wilkie", "Hummer", "Genin", "Windrace", "Kaminni", "Peravio", "Tetovio", "Etivinni", "Laroessi", "Rigothio", "Taydinno", "Pinnoli", "Egalio", "Vatirago", "Zuavilli", "Eltokonni", "Lamirett", "Kefili", "Aradonni", "Kiforto", "Rambullo", "Boguvo", "Rotundo", "Zogirino", "Bivinovo", "Stafordi", "Hiayomu", "Pilavark", "Gulemitto", "Berindoli", "Fileki", "Nakuti", "Monuli", "Ekero", "Daviligio", "Nadinni", "Detakimi", "Otalevinni", "Adilini", "Mirafiollo", "Urokotto", "Vipavanni", "Sufilicco", "Gibotio", "Osiello", "Oaks", "Jegeri", "Flikitann", "Mirtifahnn", "Gratollo", "Kiffolidinni", "Elfeniddo", "Tusakarri", "Fotalki", "Notalommi", "Riketti", "Tuvixi", "Jarevitt", "Banikku", "Uhl", "Vatonno", "Zatasso", "Versakatto", "Apatonni", "Tempera", "Egando", "Kosekto", "Vivanni", "Asnerro", "Latorinni", "Kornello", "Zamekki", "Cosatta", "Viekki", "Turro", "Tarraso", "Zirinakki", "Abrasso", "Kufli", "Kaharto", "Uloddo", "Vantizzo", "Zukirri", "Nitilitki", "Avizzon", "Turisko", "Garando", "Abisto", "Bakenno", "Totens", "Pescinto", "Teredo", "Taruda", "Seketru", "Palnigo", "Lafikri", "Unetto", "Legaro", "Zikiskikki", "Etrundo", "Stranto", "Karamko", "Bilkaso", "Bilitinno", "Kutasso", "Pivarko", "Agesso", "Taranumalitto", "Filossi", "Chantreaux", "Refinto", "Firakko", "Duratto", "Vikarro", "Samato", "Kerro", "Tuvalli", "Paretto", "Suvanis", "Kifiratto", "Diribli", "Karatto", "Tufalli", "Akatto", "Dirigli", "Subotto", "Vaskesto", "Dukarto", "Chemiddo", "Rilnalo", "Radahdo", "Morunto", "Engikko", "Taraitto", "Modanno", "Gajne", "Wofutto", "Erkitto", "Zarkitto", "Okato", "Uragatti", "Magi", "Daso", "Matrekki", "Akoto", "Batussi", "Chotari", "Dugisi", "Egilav", "Fierno", "Gato", "Herikito", "Irinni", "Jotto", "Kuli", "Litusso", "Mukri", "Nakollo", "Omissi", "Pirtovi", "Quevo", "Rokasso", "Suvanni", "Tirikko", "Unavo", "Viteso", "Xin", "Yuto", "Zako", "Atasi", "Bakiti", "Chugato", "Dagilavo", "Erino", "Ferikatto", "Girenno", "Husso", "Illi", "Jivinni", "Kallo", "Lissi", "Matovi", "Nuvego", "Okasso", "Pako", "Quvallo", "Risso", "Sakali", "Tiwester", "Utisso", "Vakotto", "Xan", "Yago", "Zukkito"
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
	"the Unknown", "the Hero", "the Warhammer", "the Speaker", "the Joker", "the Warrior",	"the Archer", "the Assassin", "the Troublemaker", "the Longnose", "the Keeper", "the Smith", "the Warden", "the Scout", "the Duelist", "the Barber",	"the Rocket Launcher", "the Gunwielder", "the Sailor", "the Mage", "the Rogue", "the Wizard", "the Blacksmith", "the Shoemaker", "the Gravedigger", "the Skullcarver", "the Translator", "the Cook", "the Stablemaster", "the Affiliator", "the Balloonpopper", "the Cartographer", "the Digmaster", "the Evil", "the Firemaker", "the Grasshopper", "the Humanhelper", "the Inspector", "the Jungler", "the Elfhelper", "the Lafahlhelper", "the Killer", "the Logmaster", "the Materializer", "the Nutcracker", "the Observer", "the Perfectionist", "the Quiet", "the Rocksmasher", "the Shieldmaster", "the Timetraveler", "the Undercutter", "the Vendor", "the Xenocide", "the Zookeeper", "the Abstracted", "the Balloonhugger", "the Chickenwings", "the Downer", "the Eavesdropper", "the Farmer", "the Goatkeeper", "the Herald", "the Innkeeper", "the Jokester", "the Jester", "the Kilted", "the Loser", "the Master", "the Naked", "the Omitted", "the Principious", "the Ridiculous", "the Smoocher", "the Uninvited", "the Vengeful", "the Zealous", "the Winner"
];
		}

		if (race == "mandirigorri") {
			// First name - family name, adjective, src: https://www.paperrater.com/page/lists-of-adjectives
			var name1 = ["Cute", "Adorable", "Ugly", "Swift", "Attractive", "Bald", "Beautiful", "Chubby", "Clean", "Dazzling", "Elegant", "Fancy", "Fit", "Flabby", "Glamorous", "Gorgeous", "Handsome", "Magnificent", "Muscular", "Plain", "Plump", "Scruffy", "Shapely", "Skinny", "Unkempt", "Unsightly", "Agreeable", "Ambitious", "Brave", "Calm", "Delightful", "Eager", "Faithful", "Gentle", "Happy", "Jolly", "Kind", "Lively", "Nice", "Obedient", "Polite", "Proud", "Silly", "Thankful", "Victorious", "Witty", "Wonderful", "Zealous", "Angry", "Bewildered", "Clumsy", "Defeated", "Embarassed", "Fierce", "Grumpy", "Helpless", "Itchy", "Jealous", "Lazy", "Mysterious", "Nervous", "Obnoxious", "Panicky", "Pitiful", "Repulsive", "Scary", "Thoughtless", "Uptight", "Worried", "Big", "Colossal", "Fat", "Gigantic", "Great", "Huge", "Immense", "Large", "Little", "Massive", "Petite", "Puny", "Scrawny", "Short", "Small", "Tall", "Teeny", "Tiny"]

			// Last name - veggie/fruit male, flower female

			if (gender == "male") {
				name2 = ["Cucumber", "Bean", "Potato", "Tomato", "Onion", "Broccoli", "Brussels Sprout", "Fennel", "Herb", "Basil", "Marjoram", "Chamomile", "Sage", "Thyme", "Coriander", "Lettuce", "Cabbage", "Garlic", "Paprika", "Leek", "Beetroot", "Carrot", "Ginger", "Turnip", "Spinach", "Squash", "Sweetcorn", "Corn", "Apple", "Pear", "Orange", "Grapefruit", "Mandarin", "Lime", "Nectarine", "Apricot", "Peach", "Plum", "Banana", "Mango", "Strawberry", "Raspberry", "Blueberry", "Kiwifruit", "Passionfruit", "Watermelon", "Rockmelon", "Honeydew Melon", "Zucchini"];
			} else {
				name2 = ["Rose", "Orchid", "Lily", "Angelica", "Balloon Flower", "Bellflower", "Bloodroot", "Buttercup", "Cardinal Flower", "Celosia", "Catmint", "Coneflower", "Dahlia", "Fennel", "Heliotrope", "Lavender", "Lantana", "Lupine", "Moonflower", "Petunia", "Rue", "Snapdragon", "Snowdrop", "Snowflake", "Sunflower", "Trillium", "Tulip", "Violet", "Windflower", "Yarrow", "Zinnia"];
			}
		}

		var generatedName = "";
		// FILLLL THISSSSS
		if (race == "lafahl") {
			generatedName = generateLafahlName(gender);
		} else if (race == "namazu") {
			generatedName = generateNamazuName();
		}
			var name = "";
		if (race != "lafahl" && race != "namazu") {
			name = capitalize(name1[MathRInt(0, name1.length - 1)]) + ' ' + name2[MathRInt(0, name2.length - 1)];
		} else {
			name = generatedName;
		}
        return name;
	}
	

	function generateNamazuName() {
		var namazu_suffixes = ["fu", "fuku", "ka", "kei", "ku", "rei", "rin", "ro", "ryu", "san", "shin", "sho", "shu", "sui", "tai", "taku", "fun", "zu", "di", "du", "dyu", "fa", "fi", "fo", "fyu", "che", "je", "she", "tsa", "tsi", "tse", "tso", "ti", "tu", "tyu", "va", "vi", "ve", "vo", "vya", "wi", "wo", "mo", "no", "so", "tsu", "ra", "re", "shuu", "ki", "tsuki", "nou", "chi", "nen", "to", "ni", "jo", "ko", "ze", "naze", "dare", "nata", "koko", "soko", "nojo", "kko", "nashi", "mu", "yamu", "ru", "jiru", "koshii", "nasou", "shi", "go", "nana", "tsumo"]
		var suffix = namazu_suffixes[MathRInt(0, namazu_suffixes.length-1)];
		return "Gyo" + suffix;
	}

	function generateLafahlName (theGender) {
		var lf_male_first_name_prefixes = ["Fufu", "Hihe", "Po", "E", "No", "Ba", "Da", "Le", "Su", "Nunu", "Bo", "Lu", "Pu", "Du", "Ze", "Se", "Re", "Bu", "Babi", "Suti", "Po",
		"Suti", "Po", "Popo", "Baba", "Dada", "Ge", "Rere", "Ruru", "Papa", "Nene", "Jaja", "Chu", "Yuyu", "Ga", "Te", "Du", "Ta", "Gu"]
		var lf_male_last_name_prefixes = ["Kiki", "Niko", "Ke", "Tapi", "Wiwi", "Citu", "Ququ", "Jishu", "Bupi", "Petu", "Bu", "Jeti", "Zumi", "Fasi", "Pori", "Sanu", "Peto", "Veru",
		"Wylo", "Yohu", "Selo", "To", "Go", "Mu", "Pa", "Lulu", "Odu", "Zaza", "Dala", "Du", "Gu", "Za", "Na", "Rom", "Yu", "Poto", "Ra", "Ma", "Buli", "Rala", "Lala", "Ke"]
		var lf_female_first_and_last_name_prefixes = ["Cece", "Gecu", "Filu", "Rati", "Didi", "Kaco", "Safu", "Sofi", "Tutu", "Tatu", "Popu", "Papu", "Wagu", "Wagi", "Dama",
		"Pala", "Mi", "Ni", "Hiki", "Pomo", "Tosa", "Moza", "Nono", "Nono", "Tusha", "Ruro", "Poze", "Sela", "Zefu", "Qune", "Qure", "Zuze", "Yoyo", "Diba", "Dalo", "Pene", "Milu",
		"Hiyo", "Poki", "Yuwa", "Leyo", "Dize", "Soku", "Seno", "Jani", "Kushu", "Moto", "Wamu", "Yofu", "Puza", "Jifu", "Bipu", "Bupo", "Jito"];
		var lf_female_suffixes = ["sa", "li", "fu", "pa", "lu", "pi", "si", "di", "du", "mio", "runa", "nisha"];
		var lf_male_suffixes = ["ha", "woha", "wichis", "de", "rapu", "muko", "chapa", "nuku", "poki", "pom", "tari", "fom", "deli", "kki", "bala", "mada", "ori", "dori", "tapu",
		"dapi", "shan", "nasu", "meda", "zeda", "wazu", "ragi", "mehi", "baru", "kuta", "chuto", "yoma", "neko", "lno", "lado", "mani", "lugi", "zai", "nan", "ral", "tan"];
		if (theGender == "male") {
			var suffix = lf_male_suffixes[MathRInt(0, lf_male_suffixes.length - 1)];
			return lf_male_first_name_prefixes[MathRInt(0, lf_male_first_name_prefixes.length - 1)] + suffix + " " 
			+ lf_male_last_name_prefixes[MathRInt(0, lf_male_last_name_prefixes.length - 1)] + suffix;
		} else {
			var suffix = lf_female_suffixes[MathRInt(0, lf_female_suffixes.length - 1)];
			var prefix = lf_female_first_and_last_name_prefixes[MathRInt(0, lf_female_first_and_last_name_prefixes.length - 1)];
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
	

	/*





	PENIS MUSIC




	*/