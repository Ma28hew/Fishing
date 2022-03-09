// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let fish5BtnEl = document.getElementById("fish5-btn");
let fishuntil200BtnEl = document.getElementById("fishuntil200-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);

// Event Functions
function selectSteve() {
    // Uptate Active border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");

     // Update Chaeacter Selection Variable
     character = "Steve";
}

function selectAlex() {
    // Uptate Active border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");

    // Update Chaeacter Selection Variable
    character = "Alex";
}

function fishOnce() {
   // Test Current Charater
   if (character === "Steve") {
     
    // Use Steve Probibility Distribution for Fishing
    let randNum = Math.random();
   
    if (randNum < 0.7) {
        numCod++;
        console.log("Raw Cod");
        numCodEl.innerHtml = numCod
        imgResultEl.src = "img/Raw-Cod.png";

    } else if (randNum < 0.9) {
        numSalmon++;
        console.log("Raw Salmon");
        numSalmonEl.innerHTML = numSalmon
        imgResultEl.src = "img/Raw-Salmon.png";
                          
    } else if (randNum < 0.95) {
        numTropical++;
        console.log("Tropical Fish");
        numTropicalEl.innerHTML = numTropical
        imgResultEl.src = "img/Tropical-Fish.png";

    } else {
        numPuffer++;
        console.log("Puffer Fish");
        numTropicalEl.innerHTML = numPuffer
        imgResultEl.src = "img/Pufferfish.png";
    }
    }
}

        // Use Alex Probibility Distribution for Fishing
    if (character === "Alex") {
        let randNum = Math.random();
        if (randNum < 0.1) {
            console.log("Raw Cod");
        } else if (randNum < 0.2) {
            console.log("Raw Salmon");
        } else if (randNum < 0.5) {
            console.log("Tropical Fish");
        } else {
            console.log("Puffer Fish");
        }
    }
    

