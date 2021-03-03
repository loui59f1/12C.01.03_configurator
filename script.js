"use strict";

document.addEventListener("DOMContentLoaded", init);

let elementToPaint;

async function init() {
    console.log("Initiating program");

    const section = document.querySelector("section #svg_container");

    let response = await fetch("theroyalesneakers-01.svg");
    let svgData = await response.text(); // Her laver vi responsen til text i stedet.

    section.innerHTML = svgData;

    console.log("SVG file loaded");

    addEventlisteners();
}

function addEventlisteners() {
    console.log("Adds eventlisteners to btns and areas");

    document.querySelectorAll(".g_to_interact_with").forEach(area => {
        area.addEventListener("click", clickProduct);
        area.addEventListener("mouseover", theMouseOver);
        area.addEventListener("mouseout", theMouseOut);
    });

    document.querySelectorAll(".color_btn").forEach(btn => {
        btn.addEventListener("click", clickColorBtn);
    })
}

function clickProduct() {
    elementToPaint = this;
    this.style.fill = "lightgrey";
}

function theMouseOver() {
    console.log("Hover");
    this.style.stroke = "darkblue";
}

function theMouseOut() {
    console.log("Hover off");
    this.style.stroke = "none";
}

function clickColorBtn() {
    // Ser farven på knappen og lægger denne på området der skal farves
    console.log("click", this.getAttribute("fill"));
    if (elementToPaint != undefined) {
        elementToPaint.style.fill = this.getAttribute("fill");
    }
}