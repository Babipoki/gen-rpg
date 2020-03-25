var allResidences = ["Hamlet", "Village", "Town", "City", "Capital City"];
var daysPerYear = 428;

if (gen = "salary") {
    // Set up currency selector
    var currencyHTML = '<label for="currency"></label><select id="currency">';
    for (var i = 0; i < currencies.length; i++) {
        currencyHTML += '<option value="' + i + '">' + currencies[i][2] + '</option>';
    }

    currencyHTML += '</select>';
    document.getElementById("currencySelector").innerHTML = currencyHTML;

    // Set up nation selector
    var nationsHTML = '<label for="nation"></label><select id="nation">';
    for (var i = 0; i < allNations.length; i++) {
        nationsHTML += '<option value="' + allNations[i][0] + '">' + allNations[i][1] + "</option>";
    }
    nationsHTML += '</select>';
    document.getElementById("nationSelector").innerHTML = nationsHTML;


    // Set up residence selector
    var residencesHTML = '<label for="residence"></label><select id="residence">';
    for (var i = 0; i < allResidences.length; i++) {
        residencesHTML += '<option value="' + allResidences[i] + '"' + (allResidences[i] == "Town" ? 'selected' : '')  + '>' + allResidences[i] + '</option>';
    }
    residencesHTML += '</select>';
    document.getElementById("residenceSelector").innerHTML = residencesHTML;
}

var jobs = {
    "jobs" : 11,
    0 : {
        "title": "Woodcutter",
        "definition": "A person who cuts down trees or branches, especially for fuel",
        "hourlyPay": 4.13, // FRK as a base
        "hoursPerDay": 5,
        "yearlyParticipation": 0.78, // Basically, compared to whole year, how many days are spent working. 1.0 - full year, cannot be higher
        "demand": {
            "Hamlet": 0.79,
            "Village": 1.21,
            "Town": 1.02,
            "City": 0.92,
            "Capital City": 0.46
        },
        "nationalDemand": {
            // empty means it's 1.0
        }
    },
    1: {
        "title": "Town Guard",
        "definition": "A person responsible for the safety of the settlement",
        "hourlyPay": 5.24,
        "hoursPerDay": 8,
        "yearlyParticipation": 0.79,
        "demand": {
            "Hamlet": 0.11,
            "Village": 0.42,
            "Town": 0.72,
            "City": 1.02,
            "Capital City": 1.26
        },
        "nationalDemand": {

        }
    },
    2: {
        // Blacksmith
        "title": "Blacksmith",
        "definition": "A person who makes and repairs things in iron by hand",
        "hourlyPay": 4.95,
        "hoursPerDay": 6,
        "yearlyParticipation": 0.62,
        "demand": {
            "Hamlet": 0.41,
            "Village": 0.72,
            "Town": 0.95,
            "City": 1.21,
            "Capital City": 1.19
        },
        "nationalDemand": {

        }
    },
    3: {
        // Leatherworker
        "title": "Leatherworker",
        "definition": "",
        "hourlyPay": 4.49,
        "hoursPerDay": 5,
        "yearlyParticipation": 0.66,
        "demand": {
            "Hamlet": 0.52,
            "Village": 0.66,
            "Town": 0.83,
            "City": 1.25,
            "Capital City": 1.55
        },
        "nationalDemand": {

        }
    },
    4: {
        // Barber
        "title": "Barber",
        "definition": "",
        "hourlyPay": 6.22,
        "hoursPerDay": 8,
        "yearlyParticipation": 0.85,
        "demand": {
            "Hamlet": 0.09,
            "Village": 0.14,
            "Town": 0.42,
            "City": 0.95,
            "Capital City": 1.45
        },
        "nationalDemand": {

        }
    }, 
    5: {
        // Mercenary
        "title": "Mercenary",
        "definition": "",
        "hourlyPay": 8.50,
        "hoursPerDay": 5,
        "yearlyParticipation": 0.5,
        "demand": {
            "Hamlet": 0.02,
            "Village": 0.15,
            "Town": 0.45,
            "City": 1.00,
            "Capital City": 1.35
        },
        "nationalDemand": {

        }
    },
    6: {
        // Jester
        "title": "Jester",
        "definition": "",
        "hourlyPay": 2.45,
        "hoursPerDay": 2,
        "yearlyParticipation": 0.98,
        "demand": {
            "Hamlet": 0.01,
            "Village": 0.04,
            "Town": 0.15,
            "City": 0.55,
            "Capital City": 1.00
        },
        "nationalDemand" : {
            "feretti": 0.05,
            "toras": 0.5,
            "abrax": 1.5
        }
    },
    7: {
        // Miner
        "title": "Miner",
        "definition": "",
        "hourlyPay": 4.95,
        "hoursPerDay": 10,
        "yearlyParticipation": 0.59,
        "demand": {
            "Hamlet": 0.65,
            "Village": 0.85,
            "Town": 1.00,
            "City": 0.95,
            "Capital City": 0.75
        },
        "nationalDemand": {

        }
    },
    8: {
        // Beekeeper
        "title": "Beekeeper",
        "definition": "",
        "hourlyPay": 3.75,
        "hoursPerDay": 6,
        "yearlyParticipation": 0.25,
        "demand": {
            "Hamlet": 0.5,
            "Village": 1.0,
            "Town": 0.95,
            "City": 0.55,
            "Capital City": 0.25
        },
        "nationalDemand": {

        }
    },
    9: {
        // Farmer
        "title": "Farmer",
        "definition": "",
        "hourlyPay": 3.45,
        "hoursPerDay": 10,
        "yearlyParticipation": 0.5,
        "demand": {
            "Hamlet": 1.0,
            "Village": 1.25,
            "Town": 1.05,
            "City": 0.85,
            "Capital City": 0.55
        },
        "nationalDemand": {

        }
    },
    10: {
        // Fisher
        "title": "Fisher",
        "definition": "",
        "hourlyPay": 3.95,
        "hoursPerDay": 5,
        "yearlyParticipation": 0.66,
        "demand": {
            "Hamlet": 1.0,
            "Village": 1.15,
            "Town": 1.05,
            "City": 1.16,
            "Capital City": 1.25
        },
        "nationalDemand": {

        }
    },
    11: {
        // Programmer
        "title": "Programmer",
        "definition": "A person who works with code of the computers",
        "hourlyPay": 9.55,
        "hoursPerDay": 7,
        "yearlyParticipation": 0.7,
        "demand":{
            "Hamlet": 0.0,
            "Village": 0.02,
            "Town": 0.05,
            "City": 0.45,
            "Capital City": 1.25
        },
        "nationalDemand": {
            "ferreti": 2,
            "ekkionlor": 0.25
        }
    }
}


// Profession | Definition | Hourly Pay | Yearly Salary | Demand

function calculateSalaries(currencyID, theNation, theResidence) {
    var result = "<table><tr><th>Profession</th><th>Definition</th><th>Hourly Pay</th><th>Yearly Salary</th><th>Demand</th></tr>";

    for (var i = 0; i < jobs["jobs"]; i++) {
        // Open
        result += "<tr>";
        // Profession
        result += "<td>" + jobs[i]["title"] + "</td>";
        // Definition
        result += "<td>" + jobs[i]["definition"] + "</td>";
        // Hourly Pay
        var demand = jobs[i]["demand"][theResidence] * (jobs[i]["nationalDemand"].hasOwnProperty(theNation) ? jobs[i]["nationalDemand"][theNation] : 1);
        var hourlyPay = jobs[i]["hourlyPay"] * demand;
        var convertedHourlyPay = calculateCurrency(hourlyPay.toFixed(2), "FRK", currencies[currencyID][2])
        result += "<td>" + convertedHourlyPay +" " + currencies[currencyID][2] + "</td>";
        // Yearly Salary
        var dailyPay = jobs[i]["hoursPerDay"] * hourlyPay;
        var yearlyPay = dailyPay * daysPerYear * jobs[i]["yearlyParticipation"];
        yearlyPay = Math.floor(yearlyPay);
        result += "<td>" + yearlyPay + " " + currencies[currencyID][2] + "</td>";
        // Demand
        result += "<td>" + Math.floor(demand * 100) + "%</td>";
        // Close
        result += "</tr>"
    }

    result += "</table>";
    document.getElementById("resultTable").innerHTML = result;
}