"use strict";

const redlight = document.querySelector(".red");
const orangelight = document.querySelector(".orange");
const greenlight = document.querySelector(".green");

let tableau = [2, 16, 25, 98, 76, 36, 1, 33, 47, 61, 88]
let tableau2 = [2, 16, 25, 98, 76, 36, 1, 33, 47, 61, 88, "chiens","chats"]

function compareNumbers(a, b) {
    return a - b;
}
tableau.sort(compareNumbers);
console.log(tableau);


function light(){
    green().then(green=>{
        orange().then(orange=>{
            red().then(red=>{
                light();
            })
        })
    })
}

function green(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            greenlight.style.backgroundColor ="green";
            orangelight.style.backgroundColor ="black";
            redlight.style.backgroundColor ="black";
            resolve();
        },2000)
    })
}
function orange(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            greenlight.style.backgroundColor ="black";
            orangelight.style.backgroundColor ="orange";
            redlight.style.backgroundColor ="black";
            resolve();
        },3000)
    })
}

function red(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            greenlight.style.backgroundColor ="black";
            orangelight.style.backgroundColor ="black";
            redlight.style.backgroundColor ="red";
            resolve();
        },1000)
    })
}

light();