
let amount = document.getElementById("amount").value;

let mft = document.getElementById("m/ft")
let lGL = document.getElementById("L/Gl")
let kgLb = document.getElementById("Kg/lb")

let amountEL = document.getElementById("amount")

amountEL.addEventListener("input", function() {
    convert()
})

function convert() {
    amount = document.getElementById("amount").value
    convertmft()
    convertLGL()
    convertkgLb()
}

function convertmft() {
    let convertedMToFt = (amount * 3.28084).toFixed(3);
    let convertedFtToM = (amount * 0.3048).toFixed(3);
    mft.innerText = amount + " meters = " + convertedMToFt + " feet | " + amount + " feet = " + convertedFtToM + " meters";
}



function convertLGL() {
    let convertedLoGL = (amount * 0.264172).toFixed(3);
    let convertedGLToL = (amount * 3.785).toFixed(3);
    lGL.innerText = amount + " liters = " + convertedLoGL + " gallons | " + amount + " gallons = " + convertedGLToL + " liters";
}


function convertkgLb() {
    let convertedKgToLb = (amount * 2.20462).toFixed(3);
    let convertedLbTKg = (amount * 0.453592).toFixed(3);
    kgLb.innerText = amount + " kilos = " + convertedKgToLb + " pounds | " + amount + " pounds = " + convertedLbTKg + " kilos";
}


convertmft()
convertLGL()
convertkgLb()
