
const leftPackagesTalbesButon = document.querySelector('#packages_price > .container > div[class="dustgrey_bac"] + div > .col > div[class="price_btn"]');
const leftPackagesTalbesColumn = document.querySelector("#packages_price > .container > div[class='dustgrey_bac'] + div > .col:first-child");

leftPackagesTalbesButon.addEventListener('mouseover', () => {
    backgroundChangeOnEvent(leftPackagesTalbesColumn);
});

leftPackagesTalbesButon.addEventListener('mouseout', () => {
    removeCahngesOnEvent(leftPackagesTalbesColumn);
});

const middlePackagesTalbesButon = document.querySelector('#packages_price > .container > div[class="dustgrey_bac"] + div > .col:first-child + .col > div[class="price_btn"]');
const middlePackagesTalbesColumn = document.querySelector("#packages_price > .container > div[class='dustgrey_bac'] + div > .col:first-child + .col");

middlePackagesTalbesButon.addEventListener('mouseover', () => {
        backgroundChangeOnEvent(middlePackagesTalbesColumn);
});

middlePackagesTalbesButon.addEventListener('mouseout', () => {
    removeCahngesOnEvent(middlePackagesTalbesColumn);
})

const rightPackagesTalbesButon = document.querySelector('#packages_price > .container > div[class="dustgrey_bac"] + div > .col:last-child > div[class="price_btn"]');
const rightPackagesTalbesColumn = document.querySelector("#packages_price > .container > div[class='dustgrey_bac'] + div > .col:last-child");

rightPackagesTalbesButon.addEventListener('mouseover', () => {
        backgroundChangeOnEvent(rightPackagesTalbesColumn);
});

rightPackagesTalbesButon.addEventListener('mouseout', () => {
    removeCahngesOnEvent(rightPackagesTalbesColumn);
})

function backgroundChangeOnEvent(element) {
    
    element.style.width = '300px';
    element.style.backgroundColor = '#39b4b2';
    element.style.borderRadius = '5px';
   
    let upLine = document.querySelector('#packages_price > .container > div:first-child + div');
    upLine.style.zIndex = '100';

    let title = element.querySelector("div:first-child > p");
    title.style.color = "#fff";

    let dolarDotUp = element.querySelector('div[class="price"] > p[class^="dot"]:first-child');
    dolarDotUp.style.backgroundColor = "#fff";

    let dolarDotDown = element.querySelector('div[class="price"] > p[class^="dot"]:first-child + p');
    dolarDotDown.style.backgroundColor = "#fff";

    let sLetter = element.querySelector('div[class="price"] > p[class^="dot"] + p[class="dolar"]');
    sLetter.style.color = "#fff";

    let dollarSum = element.querySelector('#packages_price > .container > .row + div + .row > .col > div[class="price"] > p[class="dolar"] + p'); 
    dollarSum.style.color = '#fff';

    let price = element.querySelector('div[class="price"] > div > p');
    price.style.color = "#fff";    

    let separatorMidleElement = element.querySelector('div[class="price"] + div > div > p');
    separatorMidleElement.style.backgroundColor = '#fff';
    
    let text = element.querySelector('div > p.text');
    text.style.color = '#fff';

    let eventButton = element.querySelector('div[class="price_btn"]');
    eventButton.style.border = '2px solid #fff';
    eventButton.style.color = '#fff';
};

function removeCahngesOnEvent(element){
    element.style.width = '';
    element.style.height = '';
    element.style.backgroundColor = '';
    
    let title = element.querySelector("div:first-child > p");
    title.style.color = "";

    let dolarDotUp = element.querySelector('div[class="price"] > p[class^="dot"]:first-child');
    dolarDotUp.style.backgroundColor = "";

    let dolarDotDown = element.querySelector('div[class="price"] > p[class^="dot"]:first-child + p');
    dolarDotDown.style.backgroundColor = "";

    let sLetter = element.querySelector('div[class="price"] > p[class^="dot"] + p[class="dolar"]');
    sLetter.style.color = "";

    let dollarSum = element.querySelector('#packages_price > .container > .row + div + .row > .col > div[class="price"] > p[class="dolar"] + p'); 
    dollarSum.style.color = '';

    let price = element.querySelector('div[class="price"] > div > p');
    price.style.color = "";    

    let separatorMidleElement = element.querySelector('div[class="price"] + div > div > p');
    separatorMidleElement.style.backgroundColor = "";
    
    let text = element.querySelector('div > p.text');
    text.style.color = '';

    let eventButton = element.querySelector('div[class="price_btn"]');
    eventButton.style.border = '';
    eventButton.style.color = '';
};
