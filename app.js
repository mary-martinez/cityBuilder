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
const resultsEl = document.getElementById('results');

// let state
let climateCounter = 0;
let archCounter = 0;
let mayorCounter = 0;

let slogans =[''];
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
  resultsEl.textContent = createCountString('climate', climateCounter);
})