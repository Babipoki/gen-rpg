let currentDisciple = "Crafting";

document.getElementById("craftingFrame").style.display = "block";
document.getElementById("gatheringFrame").style.display = "none";

function discipleChange() {
    currentDisciple = document.getElementById("theDisciple").value;
    if (currentDisciple == "Crafting") {
        document.getElementById("craftingFrame").style.display = "block";
        document.getElementById("gatheringFrame").style.display = "none";
    } else {
        document.getElementById("craftingFrame").style.display = "none";
        document.getElementById("gatheringFrame").style.display = "block";
    }
}

function calculateDisciple() {
    if (currentDisciple == "Crafting") {
        calculateCraft();
    } else {
        calculateGather();
    }
}

function calculateCraft() {
    let recipeName = document.getElementById("recipeName").value;
    let recipeLevel = Number(document.getElementById("recipeLevel").value);
    let recipeDifficulty = Number(document.getElementById("recipeDifficulty").value);
    let recipeMaterials = Number(document.getElementById("recipeMaterials").value);
    let materialsHQ = Number(document.getElementById("materialsHQ").value);
    let recipeOutput = Number(document.getElementById("recipeOutput").value);
    let charName = document.getElementById("charName").value;
    let charCrafterLevel = Number(document.getElementById("charCrafterLevel").value);
    let charCraftsmanship = Number(document.getElementById("charCraftsmanship").value);
    let charControl = Number(document.getElementById("charControl").value);

    recipeChance = (charCraftsmanship + (charCrafterLevel*5) ) / recipeDifficulty // 1st recipe is diff 9

    if (recipeChance > 1) recipeChance = 1;

    let matHQchance = materialsHQ / recipeMaterials; // 1 / 5: 20%

    let recipeHQchance = (((charControl/2 + (charCrafterLevel*3)) / recipeDifficulty) + matHQchance)/2; // always maximum of 50% HQ chance.

    let randomModifier = Math.random() + 0.5;

    let trcMinutes = recipeDifficulty / recipeChance / randomModifier / (recipeLevel-charCrafterLevel) // time required in minutes
    let trcSeconds = Math.floor((trcMinutes - Math.floor(trcMinutes))*100)/100;
    let trcHours = 0;
    let trcDays = 0;

    while (trcMinutes > 60) {
        trcHours += 1;
        trcMinutes -= 60;
    }
    while (trcHours > 16) {
        trcDays += 1;
        trcHours -= 16;
    }

    let chanceRoll = Math.random();
    let hqChanceRoll = Math.random();

    let craftSuccess = (chanceRoll < recipeChance) ? "<b>succeed</b>" : "<b>fail</b>";
    let hqSuccess = (hqChanceRoll < recipeHQchance) ? "<b>HQ</b>" : "<b>NQ</b>";

    result = `After spending <b>${trcDays} days, ${trcHours} hours, ${Math.floor(trcMinutes)} minutes and ${Math.floor(trcSeconds)} seconds</b>, trying to craft ${recipeOutput} x ${recipeName}, at ${Math.floor(recipeChance * 100)}% to craft it and at ${Math.floor(recipeHQchance * 100)}% to HQ it, ${charName} manages to ${craftSuccess} at crafting the ${hqSuccess} variant.`;

    document.getElementById("result").innerHTML = result;
}

function calculateGather() {
    nodeName = document.getElementById("nodeName").value;
    nodeLevel = Number(document.getElementById("nodeLevel").value);
    charName = document.getElementById("charNameG").value;
    charGathererLevel = Number(document.getElementById("charGathererLevel").value);
    charConstitution = Number(document.getElementById("charConstitution").value);
    miningActions = Number(document.getElementById("miningActions").value);
    charGathering = Number(document.getElementById("charGathering").value) + charGathererLevel*20;
    charHQPerception = Number(document.getElementById("charHQPerception").value) + charGathererLevel*15;

    nodeChance = 0;
    // Calculating chance to Gather
    if (charGathering > nodeLevel*20) {
        nodeChance = 1;
    } else {
        nodeChance = charGathering/(nodeLevel*20)
    }
    if (nodeChance < 0) nodeChance = 0;

    hqChance = 0;
    //Calculating HQ chance
    if (charHQPerception > nodeLevel*20) {
        hqChance = 0.15
    } else {
        hqChance = (charHQPerception/(nodeLevel*20))-0.75
    }
    if (hqChance < 0) hqChance = 0;

    hqChance = Math.floor(hqChance*100)/100

    // Calculating time needed to make one mining action.
    minTimeToGather = 6 // 6 seconds
    maxTimeToGather = 120 // 2 minutes / 120 seconds
    timeToGather = maxTimeToGather;
    gatherTimeMultiplier = 3;

    // 5(node) - 3(char) = 2 (harder)
    gatherLevelDiff = (nodeLevel - charGathererLevel) // Higher diff - harder
    
    if (nodeLevel > (charGathererLevel + 4 )) {
        timeToGather = maxTimeToGather;
    } else {
        timeToGather = minTimeToGather + (gatherLevelDiff * gatherTimeMultiplier)
    }
    if (timeToGather < minTimeToGather) timeToGather = minTimeToGather;
    if (timeToGather > maxTimeToGather) timeToGather = maxTimeToGather;

    // Calculating how much can be mined before getting fatigued.
    timesMined = 0;
    switch (charConstitution) {
        case 0:
            timesMined = 0;
            break;
        case 1:
            timesMined = charGathererLevel + 5 ;
            break;
        case 2:
            timesMined = charGathererLevel + 10 ;
            break;
        case 3:
            timesMined = charGathererLevel + 15 ;
            break;
        case 4:
            timesMined = charGathererLevel + 18 ;
            break;
        case 5:
            timesMined = charGathererLevel*2 + 20;
            break;
        case 6:
            timesMined = charGathererLevel*2 + 25;
            break;
        case 7:
            timesMined = charGathererLevel*2 + 30;
            break;
        case 8:
            timesMined = charGathererLevel*2 + 35;
            break;
        case 9:
            timesMined = charGathererLevel*2 + 40;
            break;
        case 10:
            timesMined = charGathererLevel*3 + 45;
            break;
        case 11:
            timesMined = charGathererLevel*3 + 50;
            break;
        case 12:
            timesMined = charGathererLevel*3 + 55;
            break;
        case 13:
            timesMined = charGathererLevel*3 + 60;
            break;
        case 14:
            timesMined = charGathererLevel*3 + 65;
            break;
        case 15:
            timesMined = charGathererLevel*4 + 70;
            break;
        case 16:
            timesMined = charGathererLevel*5 + 75;
            break;
        case 17:
            timesMined = charGathererLevel*6 + 80;
            break;
        case 18:
            timesMined = charGathererLevel*7 + 85;
            break;
        case 19:
            timesMined = charGathererLevel*9 + 90;
            break;
        case 20:
            timesMined = charGathererLevel*11 + 95;
            break;
        case 21:
            timesMined = charGathererLevel*13 + 100;
            break;
        case 22:
            timesMined = charGathererLevel*18 + 110;
            break;
        default:
            timesMined = charGathererLevel*charConstitution + 150;
    }

    // Mining the nodes.
    nqGathered = 0;
    hqGathered = 0;
    miningActionsRemaining = miningActions;
    
    while (miningActionsRemaining > 0) {
        gatherRoll = MathRInt(1, 100)/100;
        hqRoll = MathRInt(1, 100)/100;

        if (gatherRoll < nodeChance) {
            if (hqRoll < hqChance) {
                hqGathered++;
            } else {
                nqGathered++;
            }
        }
        miningActionsRemaining--;
    }

    // Calculating total action time.

    timeToGatherAll = miningActions * timeToGather;
    timeToGatherAllMinutes = Math.floor((timeToGatherAll / 60))
    timeToGatherAllSeconds = Math.floor(timeToGatherAll/60 - timeToGatherAllMinutes);

    // Result

    result = "<b>" + charName + "</b> is mining <b>" + nodeName + "</b> (Lv. "+ nodeLevel + "). There is <b>" + nodeChance*100 + "%</b> chance to gather from this node, and <b>" + hqChance*100 + "%</b> chance to obtain the HQ.<br><br>"
    result += "It takes <b>" + timeToGather + "</b> seconds to gather one " + nodeName + ". They can attempt to gather " + timesMined + " times before getting fatigued.<br><br>"
    result += "Using " + miningActions + " mining actions, they manage to gather <b>" + nqGathered + "</b> NQ " + nodeName + " and <b>" + hqGathered + "</b> HQ " + nodeName + ", which takes <b>" + timeToGatherAllMinutes + " minutes and " + timeToGatherAllSeconds + " seconds</b>."

    document.getElementById("result").innerHTML = result;
}