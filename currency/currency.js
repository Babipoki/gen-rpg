var currentYear = 5472;
var currencies = [
    [
        "Feretti Kingdom",
        "koln",
        "FRK",
        true,
        "cent",
        10,
        1.4095,
        0.6429,
        [0.39, 0.42, 0.44, 0.55, 0.66,
        0.99, 1.2341, 1.294, 1.2093,1.2112, 1.4095],
        [0.2193, 0.1032, 0.1942, 0.2304, 0.4104,
        0.4421, 0.5123, 0.4122, 0.5196, 0.5521, 0.6429]
    ],
    [
        "Republic of Toras",
        "zekkie",
        "TOZ",
        true,
        "cent",
        100,
        1.5633,
        2.7313,
        [0.39, 0.42, 0.44, 0.55, 0.66,
        0.99, 1.2341, 1.294, 1.2093, 1.4095, 1.5633],
        [2.2193, 2.1032, 2.1942, 2.2304, 2.4104,
        2.4421, 2.5123, 2.4122, 2.5196, 2.6429, 2.7313]
    ], 
    [
        "Junjian Empire", // 0 - nation
        "emiar", // 1 - currency name
        "JJE", // 2 - currency abbr
        false, // 3 - decimals true or false
        "", // 4 - decimals name
        1, // 5 - decimals per 1 currency 
        1.0405, // 6 - current inflation
        0.2413, // 7 - power
        [0.211, 0.216, 0.252, 0.134, 0.521,
        0.821, 0.921, 0.941, 0.992, 1.002, 1.0405],
        [0.5613, 0.5021, 0.4921, 0.2113, 0.2982,
        0.2313, 0.2401, 0.2441, 0.2501, 0.2521, 0.2413]
    ],
    [
       "Ekkionlor",
       "eki",
       "EKE",
       true,
       "cent",
       10,
       0.22491,
       0.0294,
       [0.39, 0.42, 0.44, 0.55, 0.66,
        0.99, 1.2341, 1.294, 1.2093, 1.4095, 0.22491],
        [0.0093, 0.0032, 0.0042, 0.0014, 0.0064,
        0.0021, 0.0023, 0.0022, 0.0096, 0.0129, 0.0294]
    ],
    [
        "Republic of Besizottia",
        "zirim",
        "BEZ",
        true,
        "cent",
        100,
        0.13201,
        0.6213,
        [0.29, 0.1242, 0.24, 0.15, 0.16,
        0.13291, 0.13291, 0.12219, 0.12921, 0.13921, 0.13201],
        [0.2193, 0.1032, 0.1942, 0.2304, 0.4104,
        0.4421, 0.5123, 0.4122, 0.5196, 0.6429, 0.6213]
    ]
]; // 0 - nation, 1 - currency name, 2 - currency abbr, 3 - decimals(true or false), 4 - decimals name(singular), 5 - decimals per 1 currency, 6 - current inflation, 7 - power of the currency, 8 - inflation over time(100 years, in 10 incr + current), 9 - power over time(100 years, in 10 incr + current)


// Generate inputs
var inputs = '<label for="inputCurrency"></label><select id="inputCurrency">';
for (i = 0; i < currencies.length; i++) {
    inputs += "<option value='" + currencies[i][2] + "'>" + currencies[i][2] + "</option>";
}
inputs += "</select> to:";
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
    var convertedValue = Number(value) + (Number(value) * Number(inflationDiff) / Number(powerDiff));
    if (currencies[toID][3] == false) {
        convertedValue = Math.floor(convertedValue);
    } else if (currencies[toID][5] == 10) {
        convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(1);
    } else if (currencies[toID][5] == 100) {
        convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(2);
    }
    if (fromID == toID) {
        convertedValue = value;
    }
    document.getElementById("currencyResult").innerHTML = value + " <b>" + from + "</b> equals to " + convertedValue + " <b>" + to + "</b></br>AKA</br>" + value + " " + currencies[fromID][0] + "'s <b>" + currencies[fromID][1] + "s</b> equals to " + convertedValue + " " + currencies[toID][0] + "'s <b>" + currencies[toID][1] + "s";
    createChart("inflation", "inflationChart", toID);
    createChart("power", "powerChart", toID);
    return convertedValue;
}

function getCurrencyID (abbr) {
    for (i = 0; i < currencies.length; i++) {
        if (currencies[i][2] == abbr) {
            return i;
        }
    }
}

function createChart(type, targetID, currencyID) {
    var theData = [];
    if (type == "inflation") {
        theData = currencies[currencyID][8];
    }
    else if (type == "power") {
        theData = currencies[currencyID][9];
    }
    ctx = document.getElementById(targetID).getContext('2d');
    document.getElementById(targetID).innerHTML = "";
    var chart = new Chart(ctx, {
        type: 'line',
        data:  {
            labels: [currentYear-100, currentYear-90, currentYear-80, currentYear-70, currentYear-60, currentYear-50, currentYear-40, currentYear-30, currentYear-20, currentYear-10, currentYear],
            datasets: [{
                label: currencies[currencyID][2] + " " + type + " chart",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: theData

            }]
        },

        options: {
            legend: {
                labels: {
                    fontColor: 'white'
                }
            }
        }


    });
}