

var chart1 = null;
var chart2 = null;
var currentYear = 5472;
var currencies = [
    [
        "Feretti Kingdom",
        "koln",
        "FRK",
        true,
        "coin",
        10,
        1.4095,
        0.6429,
        [0.39, 0.42, 0.44, 0.55, 0.66,
        0.99, 1.2341, 1.294, 1.2093,1.2112, 1.3194, 1.4095],
        [0.2193, 0.1032, 0.1942, 0.2304, 0.4104,
        0.4421, 0.5123, 0.4122, 0.5196, 0.5521, 0.5921, 0.6429]
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
        [1.121, 1.021, 1.210, 1.200, 1.27,
        1.22, 1.02, 1.201, 1.391, 1.4095, 1.5633],
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
        11.0405, // 6 - current inflation
        0.2413, // 7 - power
        [10.211, 10.216, 10.252, 10.134, 10.521,
        10.821, 10.921, 10.941, 10.992, 11.002, 11.0405],
        [0.5613, 0.5021, 0.4921, 0.2113, 0.2982,
        0.2313, 0.2401, 0.2441, 0.2501, 0.2521, 0.2413]
    ],
    [
       "Ekkionlor",
       "eki",
       "EKE",
       true,
       "coin",
       10,
       0.22491,
       0.0294,
       [0.11, 0.12, 0.14, 0.16, 0.19,
        0.211, 0.194, 0.196, 0.210, 0.221, 0.22491],
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
        [0.19, 0.1242, 0.14, 0.15, 0.16,
        0.13291, 0.13291, 0.12219, 0.12921, 0.13921, 0.13201],
        [0.2193, 0.1032, 0.1942, 0.2304, 0.4104,
        0.4421, 0.5123, 0.4122, 0.5196, 0.6429, 0.6213]
    ],
    [
        "Rotali Sultanate",
        "irwin",
        "RSI",
        true,
        "cent",
        100,
        0.24948,
        0.9592,
        [0.2094, 0.2129, 0.2130, 0.2175, 0.2102,
        0.2109, 0.2194, 0.2231, 0.2239, 0.2242, 0.24948],
        [0.9502, 0.9504, 0.9509, 0.9521, 0.9516,
        0.9533, 0.9539, 0.9543, 0.9572, 0.9583, 0.9592]
    ],
    [
        "Realm of Cora",
        "radan",
        "COR",
        true,
        10,
        "coin",
        14.5925,
        0.1429,
        [13.235, 13.244, 13.394, 13.521, 13.234,
        13.487, 13.823, 13.723, 14.213, 14.255, 14.5925],
        [0.17, 0.14, 0.15, 0.12, 0.14, 0.135,
        0.132, 0.142, 0.102, 0.110, 0.1429]
    ],
    [
        "Republic of Santeno",
        "vinahn",
        "SAV",
        true,
        100,
        "cent",
        0.5921,
        0.4925,
        [0.50, 0.52, 0.55, 0.58, 0.52,
        0.52, 0.54, 0.52, 0.57, 0.595, 0.5921],
        [0.42, 0.44, 0.445, 0.447, 0.45,
        0.47, 0.475, 0.478, 0.482, 0.486, 0.4925]
    ],
    [
        "Republic of Pentiga",
        "pent",
        "PEP",
        false,
        1,
        "",
        147.29,
        0.24,
        [102.42, 106.204, 108.29, 112.45, 118.24,
        115.29, 122.24, 127.24, 137.24, 142.42, 147.29],
        [0.20, 0.21, 0.19, 0.20, 0.20,
        0.21, 0.21, 0.23, 0.22, 0.23, 0.24]
    ],
    [
        "Salimi Confederacy",
        "givalir",
        "SCG",
        true,
        100,
        "cent",
        0.5763,
        0.38,
        [0.28, 0.25, 0.29, 0.25, 0.23,
        0.27, 0.28, 0.31, 0.32, 0.35, 0.38]
    ]
]; // 0 - nation, 1 - currency name, 2 - currency abbr, 3 - decimals(true or false), 4 - decimals name(singular), 5 - decimals per 1 currency, 6 - current inflation, 7 - power of the currency, 8 - inflation over time(100 years, in 10 incr + current), 9 - power over time(100 years, in 10 incr + current)


// Generate inputs
var inputs = '<label for="inputCurrency"></label><select id="inputCurrency">';
for (i = 0; i < currencies.length; i++) {
    inputs += "<option value='" + currencies[i][2] + "'>" + currencies[i][2] + "</option>";
}
inputs += "</select> to:";
if (gen == "currency") document.getElementById("inputs").innerHTML = inputs;


var outputs = '<label for="outputCurrency"></label><select id="outputCurrency">';
for (i = 0; i < currencies.length; i++) {
    outputs += "<option value='" + currencies[i][2] + "'>" + currencies[i][2] + "</option>";
}
outputs += "</select>";

if (gen == "currency") document.getElementById("outputs").innerHTML = outputs;

function calculateCurrency (value, from, to) {
    var fromID = getCurrencyID(from);
    var toID = getCurrencyID(to);
    var actualPowerFrom = currencies[fromID][7] / currencies[fromID][6];
    var actualPowerTo = currencies[toID][7] / currencies[toID][6];
    var convertedValue = Number(value) * Number(actualPowerFrom / actualPowerTo);
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
    if (gen == "currency") {
    document.getElementById("currencyResult").innerHTML = value + " <b>" + from + "</b> equals to " + convertedValue + " <b>" + to + "</b></br>AKA</br>" + value + " " + currencies[fromID][0] + "'s <b>" + currencies[fromID][1] + "s</b> equals to " + convertedValue + " " + currencies[toID][0] + "'s <b>" + currencies[toID][1] + "s";
    if (chart1 == null) {createCharts(toID)} 

    updateChart(chart1, "inflationChart", toID);
    updateChart(chart2, "powerChart", toID);
    }
    return convertedValue;
}

function getCurrencyID (abbr) {
    for (i = 0; i < currencies.length; i++) {
        if (currencies[i][2] == abbr) {
            return i;
        }
    }
}

function createCharts(targetID) {
    
    var theData = [];
    theData = currencies[targetID][8];

    ctx = document.getElementById("inflationChart").getContext('2d');
    
    chart1 = new Chart(ctx, {
        type: 'line',
        data:  {
            labels: [currentYear-100, currentYear-90, currentYear-80, currentYear-70, currentYear-60, currentYear-50, currentYear-40, currentYear-30, currentYear-20, currentYear-10, currentYear],
            datasets: [{
                label: currencies[0][2] + " inflation",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fontColor: 'white',
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
    // 2nd chart
    ctx = document.getElementById("powerChart").getContext('2d');
    theData = currencies[targetID][9];
    chart2 = new Chart(ctx, {
        type: 'line',
        data:  {
            labels: [currentYear-100, currentYear-90, currentYear-80, currentYear-70, currentYear-60, currentYear-50, currentYear-40, currentYear-30, currentYear-20, currentYear-10, currentYear],
            datasets: [{
                label: currencies[0][2] + "  power",
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

function updateChart(chart, type, targetID) {
    var theData = [];

    /*chart.data.datasets.forEach((dataset) =>{
        dataset.data.pop();
    });

    var newLabel = "";*/
    if (type == "inflationChart") {
        theData = currencies[targetID][8];
        newLabel = currencies[targetID][2] + " Inflation";
    } else if (type == "powerChart") {
        theData = currencies[targetID][9];
        newLabel = currencies[targetID][2] + " Power";
    }

/*
    chart.data.datasets.forEach((dataset) =>{
        dataset.data.push(theData);
    });*/
    chart.data.datasets[0].data = theData;
    chart.data.datasets[0].label = newLabel;
    chart.update();

}

