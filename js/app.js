'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// global variables 
let storeLocationsList = [];
const salesTableHeaderEl = document.getElementById('sales-table-header');
const salesTableBodyEl = document.getElementById('sales-table-body');
const salesTableFooterEl = document.getElementById('sales-table-footer');
const salesDataFormEl = document.getElementById('sales-data-form')

// constructor for salmon cookie shops 
function Store(cityName, minCustomers, maxCustomers, avgCookiesSold) {
    this.cityName = cityName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesSold = avgCookiesSold;
    this.listOfCookieSalesPerHour = [];
    this.dailySalesTotal = 0;
    storeLocationsList.push(this);
}

// sales data generator
Store.prototype.getSalesData = function () {
    for (let i = 0; i < hours.length; i++) {

        let customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));

        let cookieSales = Math.round(customersPerHour * this.avgCookiesSold);

        this.listOfCookieSalesPerHour.push(cookieSales)
        this.dailySalesTotal += cookieSales;
    }
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

new Store('seattle', 23, 65, 6.3);
new Store('tokyo', 3, 24, 1.2);
new Store('dubai', 11, 38, 3.7);
new Store('paris', 20, 38, 2.3);
new Store('lima', 2, 16, 4.6);

for (let store of storeLocationsList) {
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
    for (let i = 0; i < hours.length; i++) {
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
    for (let i = 0; i < hours.length; i++) {
        salesTableHeaderEl.append(document.createElement('th'));
    };

    let hourData = salesTableHeaderEl.querySelectorAll('th');

    for (let i = 0; i < hours.length; i++) {
        hourData[i].innerText = hours[i];
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
    new Store(cityName, minCust, maxCust, avgCookies);
    salesDataFormEl.reset();

    salesTableFooterEl.innerHTML = '';

    storeLocationsList[storeLocationsList.length - 1].getSalesData();
    storeLocationsList[storeLocationsList.length - 1].render();

    renderTableFooter(storeLocationsList);
});

renderTableFooter(storeLocationsList)
renderHours();