// import functions and grab DOM elements
import { createCountString } from './test/utils.js';
const climateDropdown = document.getElementById('climate-dropdown');
const archDropdown = document.getElementById('arch-dropdown');
const mayorDropdown = document.getElementById('mayor-dropdown');
const climateEl = document.getElementById('climate-image');
const archEl = document.getElementById('arch-image');
const mayorEl = document.getElementById('mayor-image');
const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');
const sloganEl = document.getElementById('slogan-location');
const resultsClimateEl = document.getElementById('resultsClimate');
const resultsArchEl = document.getElementById('resultsArch');
const resultsMayorEl = document.getElementById('resultsMayor');

// let state
let climateCounter = 0;
let archCounter = 0;
let mayorCounter = 0;

let slogans = [''];
// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

climateDropdown.addEventListener('change', (e) => {
    //get value selected by user
    const value = e.target.value;
    console.log(value);
    // increment climate counter
    climateCounter++;

    // update image
    climateEl.src = `./assets/${value}.jpg`;
    // resultsEl.textContent = createCountString('climate', climateCounter);
    // ** Need to call something here to display stats
    displayStats();
});

archDropdown.addEventListener('change', (e) => {
    //get value selected by user
    const value = e.target.value;
    console.log(value);
    // increment climate counter
    archCounter++;

    // update image
    archEl.src = `./assets/${value}.jpg`;
    // resultsEl.textContent = createCountString('architecture', archCounter);
    // ** Need to call something here to display stats
    displayStats();

});

mayorDropdown.addEventListener('change', (e) => {
    //get value selected by user
    const value = e.target.value;
    console.log(value);
    // increment climate counter
    mayorCounter++;

    // update image
    mayorEl.src = `./assets/${value}.jpg`;
    // resultsEl.textContent = createCountString('mayor', mayorCounter);
    // ** Need to call something here to display stats
    displayStats();

});

sloganButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    sloganInput.value = '';
    displaySlogans();
})

function displayStats(type, count) {
    resultsClimateEl.textContent = createCountString('climate', climateCounter);
    resultsArchEl.textContent = createCountString('architecture', archCounter);
    resultsMayorEl.textContent = createCountString('Mayor', mayorCounter);
}

function displaySlogans() {
    sloganEl.textContent = '';
    // console.log(slogans);
    for (let slogan of slogans) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganEl.append(p);
    }
}