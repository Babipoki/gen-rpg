

function generateSenses() {
    if (!document.getElementById("lockSmell").checked) generateSmell();
    if (!document.getElementById("lockSight").checked) generateSight();
    if (!document.getElementById("lockTouch").checked) generateTouch();
    if (!document.getElementById("lockSound").checked) generateSound();
    if (!document.getElementById("lockTaste").checked) generateTaste();
}


function generateSmell() {
    // Smell definition source: https://writerswrite.co.za/75-words-that-describe-smells/
    var result = ``;
    const smells = {
        pleasant: {
            total: 10,
            0: {
                name: "ambrosial",
                definition: "sweet smelling, fragrant, aromatic"
            },
            1: {
                name: "aromatic",
                definition: "perfumed, fragrant, scented, sweet smelling, pungent, usually pleasing"
            },
            2: {
                name: "delicious",
                definition: "a pleasant smell"
            },
            3: {
                name: "fresh",
                definition: "a pleasant, newly made smell that can be clean, clear, cool, crisp, refreshing, sweet, warm"
            }, 
            4: {
                name: "perfumed",
                definition: "pleasant to smell because perfume has been added or used, or it has a natural perfume"
            },
            5: {
                name: "rich",
                definition: "a smell that is strong in a pleasant way"
            },
            6: {
                name: "savory",
                definition: "pleasant to taste - spicy, pungent, flavoursome, and aromatic, salty but not sweet"
            },
            7: {
                name: "scented",
                definition: "a pleasant smell"
            }, 
            8: {
                name: "sweet",
                definition: "a pleasant smell that is sweet"
            },
            9: {
                name: "tangy",
                definition: "a smell or taste that is strong and bitter in a a pleasant way"
            }
        },
        unpleasant: {
            total: 8,
            0: { 
            name: "acrid",
            definition : "a smell that is strong, bitter, and unpleasant in your nose and throat"},
            1: {
                name: "damp",
                definition: "a wet smell"
            },
            2: {
                name: "fetid",
                definition: "an unpleasant smell, usually caused by decay"
            },
            3: {
                name: "frowsty",
                definition: "an unpleasant smell caused by a lack of fresh air"
            },
            4: {
                name: "funky",
                definition: "a strong and unpleasant smell"
            },
            5: {
                name: "fusty",
                definition: "smells old, dusty, or damp"
            },
            6: {
                name: "malodorous",
                definition: "scented, aromatic, redolent, fragrant, stinking"
            },
            7: {
                name: "musty",
                definition: "unpleasant, stale and not fresh"
            }
        },
        general: {
            total: 10,
            0: {
                name: "anosmic",
                definition: "odourless, no smell at all"
            },
            1: {
                name: "antiseptic",
                definition: "clean or pure smell that is bland and charactless"
            },
            2: {
                name: "comforting",
                definition: "pleasant aroma"
            },
            3: {
                name: "faint",
                definition: "a smell that is not strong"
            },
            4: {
                name: "evocative",
                definition: "a smell that makes you think of something, often something that you experienced in the past"
            },
            5: {
                name: "heady",
                definition: "strongly aromatic, pungent, rich, intoxicating, spicy, piquant - not a mild smell"
            },
            6: {
                name: "heavy",
                definition: "a sweet and strong smell"
            },
            7: {
                name: "intoxicating",
                definition: "a smell that exhilarates, disorients, or excites"
            },
            8: {
                name: "piquant",
                definition: "stinging, pungent, an aroma that tickles the nose"
            },
            9: {
                name: "powerful",
                definition: "a strong smell"
            }
        },
        smellLike: {
            total: 15,
            0 : {
                name: "citrusy",
                definition: "characteristic of citrus fruit in scent"
            },
            1 : {
                name: "coppery",
                definition: "smelling of copper"
            },
            2 : {
                name: "earthy",
                definition: "smelling like earth"
            },
            3 : {
                name: "fishy",
                definition: "smelling like fish"
            },
            4 : {
                name: "floral",
                definition: "smelling like flowers"
            },
            5 : {
                name: "fruity",
                definition: "smelling like fruit"
            },
            6 : {
                name: "garlicky",
                definition: "smelling of garlic"
            },
            7 : {
                name: "leathery",
                definition: "smells like leather"
            },
            8 : {
                name: "lemony",
                definition: "smells like lemon"
            },
            9 : {
                name: "medicinal",
                definition: "smells like medicine"
            },
            10 : {
                name: "minty",
                definition: "smelling of mint"
            },
            11 : {
                name: "musky",
                definition: "similar to musk in smell"
                },
            12 : {
                name: "peachy",
                definition: "similar to peach in smell"
                },
            13 : {
                name: "smoky",
                definition: "smelling of smoke"
                },
            14 : {
                name: "woody",
                definition: "an earthy smell, smelling of wood"
                }
        }
    }

    var pleasantness = MathRInt(0, 1) == 0 ? "unpleasant" : "pleasant";

    var generalDescriber = smells["general"][MathRInt(0, smells.general.total - 1)];
    var mainDescriber = smells[pleasantness][MathRInt(0, smells[pleasantness].total - 1)];
    var smellLikeDescriber = smells["smellLike"][MathRInt(0, smells["smellLike"].total - 1)];

    result = `It smells <span class='tooltip'><u>${generalDescriber.name}</u><span class="tooltiptext"><b>${generalDescriber.name}</b> -${generalDescriber.definition}</span></span> and <span class='tooltip'><u>${mainDescriber.name}</u><span class="tooltiptext"><b>${mainDescriber.name}</b> - ${mainDescriber.definition}</span></span>, reminding you of something <span class='tooltip'><u>${smellLikeDescriber.name}</u><span class="tooltiptext"><b>${smellLikeDescriber.name}</b> - ${smellLikeDescriber.definition}</span></span>.`

    document.getElementById("resultSmell").innerHTML = result;
}

function generateSight() {
    var result = ``;
    const sightAdjectives = ["angular", "bent", "big", "billowy", "black", "black", "blonde", "blushing", "branching", "bright", "brilliant", "broad", "brunette", "bulky", "chubby", "circular", "clean", "cloudy", "colorful", "colossal", "contoured", "craggy", "crinkled", "crooked", "crowded", "crystalline", "curved", "cute", "dark", "deep", "dim", "distinct", "dull", "elegant", "enormous", "fancy", "fat", "filthy", "flat", "flickering", "fluffy", "foggy", "forked", "fuzzy", "gigantic", "glamorous", "gleaming", "glistening", "globular", "glowing", "graceful", "grotesque", "hazy", "high", "hollow", "homely", "huge", "immense", "light", "lithe", "little", "long", "low", "misty", "motionless", "muddy", "murky", "narrow", "obtruse", "pale", "petite", "portly", "quaint", "radiant", "rectangular", "reddish", "rippling", "rotund", "shadowy", "shallow", "sheer", "shimmering", "shiny", "short", "skinny", "small", "soaring", "spotless", "square", "steep", "stormy", "straight", "strange", "sunny", "swooping", "tall", "tapering", "translucent", "ugly", "unsightly", "unusual", "weird", "wide", "wiry", "wispy", "wizened"]

    var sight1 = sightAdjectives[MathRInt(0, sightAdjectives.length - 1)];
    var sight2 = sightAdjectives[MathRInt(0, sightAdjectives.length - 1)];
    var sight3 = sightAdjectives[MathRInt(0, sightAdjectives.length - 1)];

    while (sight2 == sight1) sight2 = sightAdjectives[MathRInt(0, sightAdjectives.length - 1)];
    while(sight3 == sight2 || sight3 == sight1) sight3 = sightAdjectives[MathRInt(0, sightAdjectives.length - 1)];

    result = `It looks ${sight1}, ${sight2} and ${sight3}.`;

    document.getElementById("resultSight").innerHTML = result;
}

function generateTouch() {
    var result = ``;
    const touchAdjectives = ["boiling", "bumpy", "burning", "chilly", "clammy", "coarse", "cold", "cool", "creepy", "crisp", "crooked", "cuddly", "curly", "damp", "dirty", "downy", "filthy", "fine", "firm", "fishy", "flaky", "fleshy", "fluffy", "freezing", "frosty", "furry", "fuzzy", "grainy", "granular", "greasy", "grimy", "gritty", "hairy", "hairy", "half-broken", "hard", "hot", "humid", "icy", "leathery", "loose", "lukewarm", "lumpy", "moist", "mucky", "muddy", "mushy", "oily", "pebbly", "pointed", "prickly", "rigid", "rough", "rubbery", "sandy", "scorching", "sensitive", "sharp", "silky", "slick", "slimy", "slippery", "smooth", "sodden", "soft", "soggy", "solid", "spiky", "spongy", "steamy", "sticky", "stiff", "tacky", "tender", "tepid", "thick", "thin", "tough", "uneven", "velvety", "warm", "watery", "wavy", "waxy", "wet", "wobbly", "wooly"];

    var touch1 = touchAdjectives[MathRInt(0, touchAdjectives.length - 1)];
    var touch2 = touchAdjectives[MathRInt(0, touchAdjectives.length - 1)];
    while (touch2 == touch1) touch2 = touchAdjectives[MathRInt(0, touchAdjectives.length - 1)];

    result = `It feels ${touch1}, yet ${touch2}.`;

    document.getElementById("resultTouch").innerHTML = result;
}

function generateSound() {
    var result = ``;
    const soundAdjectives = ["boisterous", "brittle", "calm", "clamorous", "croaky", "discordant", "dissonant", "dull", "earsplitting", "enjoyable", "faint", "gentle", "gruff", "half-deafening", "half-shouted", "harmonious", "harsh", "high", "high-pitched", "hoarse", "husky", "loud", "low", "low-pitched", "mellifluous", "melodic", "muffled", "musical", "muted", "noiseless", "noisy", "non-deafening", "penetrating", "piercing", "pleasing", "quiet", "rasping", "raspy", "raucous", "resonant", "riotous", "rowdy", "screaky", "screaming", "screechy", "shrill", "silent", "smooth", "soft", "soundless", "speechless", "squeaky", "strong", "sweet", "tacit", "talkative", "thundering", "thunderous", "tranquil", "tuneful", "unspoken", "unvoiced", "velvety", "vociferous", "voiceless", "whispered", "wordless"];

    var sound1 = soundAdjectives[MathRInt(0, soundAdjectives.length - 1)];
    var sound2 = soundAdjectives[MathRInt(0, soundAdjectives.length - 1)];

    while (sound2 == sound1) sound2 = soundAdjectives[MathRInt(0, soundAdjectives.length - 1)];

    result = `It sounds ${sound1} and ${sound2}.`;


    document.getElementById("resultSound").innerHTML = result;
}

function generateTaste() {
    var result = ``;
    const tastes = ["bitter", "sweet", "dry", "moist", "bland", "spicy", "savoury", "rich", "salty", "tasty", "sugary", "greasy", "scrumptious", "sour", "piping hot", "crunchy"];

    var taste = tastes[MathRInt(0, tastes.length - 1)];

    result = `It tastes ${taste}.`

    document.getElementById("resultTaste").innerHTML = result;
}