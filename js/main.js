/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Output: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

// Seleziono gli Input dall'HTML
const currentYear = document.getElementById('current-year');
console.log('Anno Corrente', currentYear, typeof currentYear);

const birthYear = document.getElementById('birth-year');
console.log('Anno di nascita', birthYear, typeof birthYear);

// Prendo il Contenitore del Risultato dall'HTML
const ageResult = document.getElementById('age-result');
console.log('Contenitore età', ageResult, typeof ageResult);

ageResult.classList.add('container', 'mt-3');

// Seleziono il Form dall'HTML
const myForm = document.querySelector('form');

const currentYearArray = [];
const birthYearArray = [];

// Creo l'evento al click del Bottone
myForm.addEventListener('submit', function(event){

    event.preventDefault();

    currentYearArray.push(parseInt(currentYear.value));
    console.log(currentYearArray);

    birthYearArray.push(parseInt(birthYear.value))
    console.log(birthYearArray);

    currentYear.value = "";
    birthYear.value = "";


    if (currentYearArray.length !== 0 && birthYearArray.length !== 0 && (currentYearArray[0] - birthYearArray[0]) < 100){

        ageResult.innerHTML = 'La tua età è di ' + (currentYearArray[0] - birthYearArray[0]) + ' anni e te ne mancano ' + (100 - (currentYearArray[0] - birthYearArray[0])) + ' per arrivare a 100';

        currentYearArray.length = 0;
        birthYearArray.length = 0;
    
    } else if ((currentYearArray.length !== 0 && birthYearArray.length !== 0 && currentYearArray[0] - birthYearArray[0]) >= 100){

        ageResult.innerHTML = 'Complimenti! Sei un Centenario';

        currentYearArray.length = 0;
        birthYearArray.length = 0;    

    }

})