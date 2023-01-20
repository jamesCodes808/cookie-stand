'use strict'

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let defaultHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// global variables 
let storeLocationsList = [];
const salesTableHeaderEl = document.getElementById('sales-table-header');
const salesTableBodyEl = document.getElementById('sales-table-body');
const salesTableFooterEl = document.getElementById('sales-table-footer');
const salesDataFormEl = document.getElementById('sales-data-form')

// constructor for salmon cookie shops 
function Store(cityName, minCustomers, maxCustomers, avgCookiesSold, openHours, closedHours) {
    this.cityName = cityName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesSold = avgCookiesSold;
    this.listOfCookieSalesPerHour = [];
    this.dailySalesTotal = 0;
    this.openHours = openHours;
    this.closedHours = closedHours;
    this.hours = [];
    storeLocationsList.push(this);
}

// sales data generator
Store.prototype.getSalesData = function () {
    for (let i = 0; i < defaultHours.length; i++) {

        let customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));

        let cookieSales;

        console.log(`in the getsales data function: ${this.hours}`)

        if (this.hours[i] == defaultHours[i]) {
            cookieSales = Math.round(customersPerHour * this.avgCookiesSold);
        } else {
            cookieSales = 0;
        }
        this.listOfCookieSalesPerHour.push(cookieSales)

        this.dailySalesTotal += cookieSales;
    }
};

Store.prototype.refactorHours = function () {
    for (let i = this.openHours; i < this.closedHours; i++) {
        if (i < 12) {
            this.hours.push(i + ':00am')
        }
        else if (i == 12) {
            this.hours.push(i + `:00pm`)
        }
        else if (i > 12) {
            this.hours.push((i - 12) + ':00pm')
        }
    }
    console.log(`this.hours In the refactor hours function${this.hours}`)
    return this.hours;
}

Store.prototype.calculateCookiesForOpenHours = function () {
    this.refactorHours();

    for (var i = this.openHour; i < this.closeHour; i++) {
        var cookiesEachHour = Math.round(this.avgCookiesPerCustomer * this.generateCustomersPerHour());
        this.listOfCookieSalesPerHour.push(cookiesEachHour);
    };
    return this.cookiesPerHourArray;
};


Store.prototype.render = function () {

    let row = document.createElement('tr');
    salesTableBodyEl.appendChild(row);

    let cityNameData = document.createElement('td');
    cityNameData.innerText = this.cityName.toUpperCase();
    row.appendChild(cityNameData);

    for (let i = 0; i < this.listOfCookieSalesPerHour.length; i++) {
        let hourlySalesData = document.createElement('td');
        hourlySalesData.innerText = this.listOfCookieSalesPerHour[i];
        row.appendChild(hourlySalesData);
    }

    let totalSalesData = document.createElement('td');
    totalSalesData.innerText = this.dailySalesTotal;
    row.appendChild(totalSalesData);

};

new Store('seattle', 23, 65, 6.3, 6, 20);
new Store('tokyo', 3, 24, 1.2, 6, 17);
new Store('dubai', 11, 38, 3.7, 6, 15);
new Store('paris', 20, 38, 2.3, 6, 14);
new Store('lima', 2, 16, 4.6, 6, 19);


for (let store of storeLocationsList) {
    store.calculateCookiesForOpenHours();
    store.getSalesData();
    store.render();
}



function renderTableFooter(storeLocationsArray) {
    let row = document.createElement('tr');
    salesTableFooterEl.append(row);
    row.className = 'totals-row';

    let totalsLabelEl = document.createElement('th');
    row.appendChild(totalsLabelEl);
    totalsLabelEl.innerHTML = 'TOTALS'

    let dailyTotal = 0;
    for (let i = 0; i < defaultHours.length; i++) {
        let hourlyTotal = 0;
        let cell = document.createElement('th');
        row.appendChild(cell);

        for (let j = 0; j < storeLocationsArray.length; j++) {
            hourlyTotal += storeLocationsArray[j].listOfCookieSalesPerHour[i];

            dailyTotal += storeLocationsArray[j].listOfCookieSalesPerHour[i];
        }
        cell.innerText = hourlyTotal;
    }

    let dailyTotalEl = document.createElement('th');
    row.appendChild(dailyTotalEl);
    dailyTotalEl.textContent = dailyTotal;
};

function renderHours() {
    // insert hour array
    for (let i = 0; i < defaultHours.length; i++) {
        salesTableHeaderEl.append(document.createElement('th'));
    };

    let hourData = salesTableHeaderEl.querySelectorAll('th');

    for (let i = 0; i < defaultHours.length; i++) {
        hourData[i].innerText = defaultHours[i];
    };

    salesTableHeaderEl.prepend(document.createElement('th'));

    salesTableHeaderEl.append(document.createElement('th'));

    salesTableHeaderEl.lastElementChild.innerText = 'Total'
}


// Event listeners for form
salesDataFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;
    let minCust = e.target.minCust.value;
    let maxCust = e.target.maxCust.value;
    let avgCookies = e.target.avgCookies.value;
    let openHours = e.target.openHours.value;
    let closedHours = e.target.closedHours.value;
    new Store(cityName, minCust, maxCust, avgCookies, openHours, closedHours);
    salesDataFormEl.reset();

    salesTableFooterEl.innerHTML = '';

    storeLocationsList[storeLocationsList.length - 1].calculateCookiesForOpenHours();
    storeLocationsList[storeLocationsList.length - 1].getSalesData();
    storeLocationsList[storeLocationsList.length - 1].render();

    renderTableFooter(storeLocationsList);
});

renderTableFooter(storeLocationsList)
renderHours();