var currencies = [
    [
        "Feretti Kingdom",
        "koln",
        "FRK",
        true,
        "cent",
        10,
        1.4095,
        0.6429
    ],
    [
        "Republic of Toras",
        "zekkie",
        "TOZ",
        true,
        "cent",
        100,
        1.5633,
        2.7313
    ], 
    [
        "Junjian Empire", // 0 - nation
        "emiar", // 1 - currency name
        "JJE", // 2 - currency abbr
        false, // 3 - decimals true or false
        "", // 4 - decimals name
        1, // 5 - decimals per 1 currency 
        1.0405, // 6 - current inflation
        0.2413 // 7 - power
    ],
    [
       "Ekkionlor",
       "eki",
       "EKE",
       true,
       "cent",
       10,
       0.22491,
       0.0294
    ]
]; // 0 - nation, 1 - currency name, 2 - currency abbr, 3 - decimals(true or false), 4 - decimals name(singular), 5 - decimals per 1 currency, 6 - current inflation, 7 - power of the currency
/*<label for="gender">Gender:</label>
    <select id="gender">
        <option value="random">Random</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>*/
// Generate inputs
var inputs = '<label for="inputCurrency"></label><select id="inputCurrency">';
for (i = 0; i < currencies.length; i++) {
    inputs += "<option value='" + currencies[i][2] + "'>" + currencies[i][2] + "</option>";
}
inputs += "</select> to: ";
document.getElementById("inputs").innerHTML = inputs;

var outputs = '<label for="outputCurrency"></label><select id="outputCurrency">';
for (i = 0; i < currencies.length; i++) {
    outputs += "<option value='" + currencies[i][2] + "'>" + currencies[i][2] + "</option>";
}
outputs += "</select>";

document.getElementById("outputs").innerHTML = outputs;


function calculateCurrency (value, from, to) {
    var fromID = getCurrencyID(from);
    var toID = getCurrencyID(to);
    var inflationDiff = currencies[fromID][6] - currencies[toID][6];
    var powerDiff = currencies[fromID][7] - currencies[toID][7];
    var convertedValue = Number(value) + (value * inflationDiff * powerDiff);
    if (currencies[toID][3] == false) {
        convertedValue = Math.floor(convertedValue);
    } else if (currencies[toID][4] == 10) {
        convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(1);
    } else if (currencies[toID][4] == 100) {
        convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(2);
    }

    document.getElementById("result").innerHTML = value + from + " equals to " + convertedValue + to;
}

function getCurrencyID (abbr) {
    for (i = 0; i < currencies.length; i++) {
        if (currencies[i][2] == abbr) {
            return i;
        }
    }
}