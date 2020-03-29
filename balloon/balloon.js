function generateBalloons(n) {
    var result = ``;
    var balloonShapes = ["round", "round", "round", "round", "bunny-shaped", "bunny-shaped", "mouse-shaped", "bear-shaped", "heart-shaped", ""]; // repeats increase the chance, nothing else
    var balloonColors = ["red", "red", "blue", "blue", "pink", "pink", "yellow", "yellow", "white", "black", "orange", "emerald green", "goldenrod", "lime green", "jewel lime green", "royal blue", "dark blue", "light blue", "navy blue", "purple", "hot pink", "berry", "peach", "clear", "silver", "gold", "brown"];
    var balloonSizes = ["12\"", "14\"" , "16\""];
    var balloonConditions = ["overinflated", "underinflated", "with a factory defect spot", "made of high quality latex", "made of average quality latex", "made of below average quality latex", "made of low quality latex", "made of very rare quality of latex", "made of very strong quality of latex", "slowly leaking air from a hole"]; // "It is ..."
    var inflationTimes = ["just a few minutes ago", "an hour ago", "two hours ago", "three hours ago", "four hours ago", "five hours ago", "six hours ago", "seven hours ago", "eight hours ago", "nine hours ago", "ten hours ago", "yesterday"];
    var numerations = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    var inflationTypes = ["helium", "helium", "helium", "mouth-inflated", "pump-inflated"];
    var tyingTechniques = ["beautiful white ribbon", "old knitting yarn", "silver ribbon", "sewing string", "pink ribbon", "gold ribbon", "silver ribbon", "red ribbon", "purple ribbon", "baby blue ribbon", "copper ribbon"]; // for helium only
    var prints = ["polka dots", "a smiley face", "a happy boy face", "dog paws", "a scared/worried face", "a derpy face with a tongue sticking out", "a face in love, with heart-filled eyes", "a laughing face", "a pleading face"];

    for (var i = 0; i < n; i++) {
        var balloonShape = balloonShapes[MathRInt(0, balloonShapes.length - 1)];
        var balloonColor = balloonColors[MathRInt(0, balloonColors.length - 1)];
        var balloonSize = balloonSizes[MathRInt(0, balloonSizes.length - 1)];
        var balloonCondition = balloonConditions[MathRInt(0, balloonConditions.length - 1)];
        var numeration = n == 1 ? "The" : numerations[i];
        var inflationType = inflationTypes[MathRInt(0, inflationTypes.length - 1)];
        var extra = ``;
        var tyingTechnique = tyingTechniques[MathRInt(0, tyingTechniques.length - 1)]
        var print = prints[MathRInt(0, prints.length - 1)];
        var everyNthIsPrint = 2;
        var randomPrintChance = MathRInt(0, everyNthIsPrint);
        if (inflationType == "helium") extra += ` It is tied with a ${tyingTechnique}.`;
        if (randomPrintChance == everyNthIsPrint && balloonShape == "round") extra += ` It is printed with ${print}.`;

        result += `${numeration} balloon is a  ${inflationType} ${balloonSize} ${balloonShape} ${balloonColor} balloon. It is ${balloonCondition}.${extra}<br>
        `;
    }
    var inflationTime = inflationTimes[MathRInt(0, inflationTimes.length - 1)];
    result += `<br><br>
    `;
    result += n == 1 ? `The balloon was inflated ${inflationTime}.` : `All balloons were inflated ${inflationTime}.`;

    document.getElementById("result").innerHTML = result;
}