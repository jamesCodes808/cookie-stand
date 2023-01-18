'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let tableBody = document.getElementById('display-sales');

// constructor for salmon cookie shops 
function Shop(location, minHourlyCustomers, maxHourlyCustomers, avgCookieSale) {
    this.location = location;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookieSale = avgCookieSale;
    this.customersPerHour;
    this.cookiesPurchasedPerHour;
    this.total;
    shopsArray.push(this)
}

// Shop Prototype functions 
Shop.prototype.getNumberOfCustomersPerHour = function () {
    this.customersPerHour = new Array();
    for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
    }
    return this.customersPerHour;
}

Shop.prototype.getAmountOfCookiesPurchasedPerHour = function () {
    this.getNumberOfCustomersPerHour();
    this.cookiesPurchasedPerHour = new Array();
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPurchasedPerHour.push(Math.floor(this.avgCookieSale * this.customersPerHour[i]))
    }
    return this.cookiesPurchasedPerHour;
}

Shop.prototype.getTotal = function () {
    this.getNumberOfCustomersPerHour();
    this.getAmountOfCookiesPurchasedPerHour();
    this.total = 0;
    for (let i = 0; i < hours.length; i++) {
        this.total += this.cookiesPurchasedPerHour[i]
    }
    return this.total;
}

Shop.prototype.render = function () {
    this.getNumberOfCustomersPerHour();
    this.getAmountOfCookiesPurchasedPerHour();
    this.getTotal();

    // Create new Row and render into page
    let dataRow = document.createElement('tr')
    dataRow.id = `${this.location}-sales`;
    tableBody.append(dataRow);

    for (let i = 0; i < this.cookiesPurchasedPerHour.length; i++) {
        dataRow.append(document.createElement('td'));
    }

    let salesData = dataRow.querySelectorAll('td')

    for (let i = 0; i < salesData.length; i++) {
        salesData[i].innerText = this.cookiesPurchasedPerHour[i]
    }

    dataRow.prepend(document.createElement('td'))

    dataRow.firstElementChild.innerText = this.location.toUpperCase();

    dataRow.append(document.createElement('td'));

    dataRow.lastElementChild.innerText = this.total;
}

function renderHours() {
    // insert hour array
    let headerRow = document.getElementById('table-header');

    for (let i = 0; i < hours.length; i++) {
        headerRow.append(document.createElement('th'));
    };

    let hourData = headerRow.querySelectorAll('th');

    for (let i = 0; i < hourData.length; i++) {
        hourData[i].innerText = hours[i];
    };

    headerRow.prepend(document.createElement('th'));

    headerRow.append(document.createElement('th'));

    headerRow.lastElementChild.innerText = 'Total'
}

function renderSales(arrayOfShops) {
    for (let i = 0; i < arrayOfShops.length; i++) {
        arrayOfShops[i].render();
    }
}

let shopsArray = []

const seattleShop = new Shop('seattle', 23, 65, 6.3);
const tokyoShop = new Shop('tokyo', 3, 24, 1.2);
const dubaiShop = new Shop('dubai', 11, 38, 3.7);
const parisShop = new Shop('paris', 20, 38, 2.3);
const limaShop = new Shop('lima', 2, 16, 4.6);

renderHours();
renderSales(shopsArray);


