subjects = {
    "Character" : {
        "Complexity": {
            "Simple": 1.0,
            "Medium": 1.5,
            "Complex": 2,
            "I Don't Know": 1.5
        },
        "Gender": {
            "Male": 1.0,
            "Female": 2,
            "No Gender": 1.3
        },
        "Age": {
            "Toddler": 1.3,
            "Child": 1.0,
            "Teenager": 1.4,
            "Adult": 2.3
        },
        "Clothing": {
            "None": 1.0,
            "Simple": 1.2,
            "Complex": 1.6
        },
        "Type": {
            "Popular IP Fanart": 1.0,
            "OC Fanart": 1.4,
            "New Character - Simple": 2.0,
            "New Character - Complex": 3.0
        },
        "Rigging": {
            "No": 1.0,
            "Yes, simple": 1.5,
            "Yes, complex": 1.85,
            "Yes, complexity unknown": 1.85
        },
        "Textures": {
            "Textures Provided": 0.90,
            "Pixel": 1.0,
            "Simple": 1.25,
            "Hand-painted": 1.75,
            "Photorealistic": 2.25
        },
        "Polygons": {
            "Model is Provided": 0.75,
            "Low Poly": 1.0,
            "Medium Poly": 1.5,
            "Smooth Poly / High Res": 2.0
        },
        "Animation": {
            "None": 1.0,
            "Up to 10 frames": 1.25,
            "10-25 frames": 1.5,
            "26-50 frames": 1.75,
            "51-75 frames": 2,
            "76-100 frames": 2.25,
            "101-200 frames": 3,
            "201-400 frames": 5,
            "401-600 frames": 8,
            "601-1000 frames": 12
        }
    }, 
    "Prop": {
        "Object": {
            "Melee Weapon": 1.0,
            "Ranged Weapon, Non-Firearm": 1.25,
            "Firearm": 1.5,
            "Simple Furniture": 1.25,
            "Complex Furniture": 1.75,
            "Electronics": 1.5,
            "Plumbing and Utilities": 1.85,
            "Building": 1.75,
            "Balloon": 0.85,
            "Inflatable": 0.95,
            "Other - Simple": 1.25,
            "Other - Medium Complexity": 1.65,
            "Other - Very Complex": 3
        },
        "Type": {
            "Schematics/Reference Provided": 1.0,
            "New Design - Simple": 1.4,
            "New Design - Normal": 2.0,
            "New Design - Complex": 3.0
        },
        "Rigging": {
            "No": 1.0,
            "Yes, simple": 1.5,
            "Yes, complex": 1.85,
            "Yes, complexity unknown": 1.85
        },
        "Textures": {
            "Textures Provided": 0.90,
            "Pixel": 1.0,
            "Simple": 1.25,
            "Hand-painted": 1.75,
            "Photorealistic": 2.25
        },
        "Polygons": {
            "Model is Provided": 0.75,
            "Low Poly": 1.0,
            "Medium Poly": 1.5,
            "Smooth Poly / High Res": 2.0
        },
        "Animation": {
            "None": 1.0,
            "Up to 10 frames": 1.25,
            "10-25 frames": 1.5,
            "26-50 frames": 1.75,
            "51-75 frames": 2,
            "76-100 frames": 2.25,
            "101-200 frames": 3,
            "201-400 frames": 5,
            "401-600 frames": 8,
            "601-1000 frames": 12
        }
    }
}

basePrice = {
    "Character": 40,
    "Prop": 25
}
baseCurrency = "EUR"

currentSubjects = []
totalPrice = 0

function addSubject() {
    type = document.getElementById("commmissionSubject").value;
    table = document.getElementById("subjectTable");
    if (currentSubjects.length == 0) {

    }
    for (i = 0; i < subjects.keys(type).length; i++) {
        for (j = 0; j < subjects[type].keys(i).length; j++) {
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        }
    }
}

function get3DPrice() {

}