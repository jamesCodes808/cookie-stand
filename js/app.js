'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// global variables 
let storeLocationsList = [];
let salesTableHeaderEl = document.getElementById('sales-table-header');
let salesTableBodyEl = document.getElementById('sales-table-body');
let salesTableFooterEl = document.getElementById('sales-table-footer');


// constructor for salmon cookie shops 
function Store(locationName, minCustomers, maxCustomers, avgCookiesSold) {
    this.locationName = locationName;
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
    }
};

Store.prototype.render = function () {

    let row = document.createElement('tr');
    salesTableBodyEl.appendChild(row);

    let cityNameData = document.createElement('td');
    cityNameData.innerText = this.locationName.toUpperCase();
    row.appendChild(cityNameData);

    for (let i = 0; i < this.listOfCookieSalesPerHour.length; i++) {
        let hourlySalesData = document.createElement('td');
        hourlySalesData.innerText = this.listOfCookieSalesPerHour[i];
        row.appendChild(hourlySalesData);
    }

    let totalSalesData = document.createElement('td');
    totalSalesData.innerText = this.dailySalesTotal;
    console.log(totalSalesData)
    console.log(this.dailySalesTotal)
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
renderTableFooter(storeLocationsList)


function renderTableFooter(storeLocationsArray) {
    let totalsLabelEl = document.createElement('th');
    salesTableFooterEl.appendChild(totalsLabelEl);
    totalsLabelEl.innerHTML = 'TOTALS'

    let dailyTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;
        let cell = document.createElement('td');
        salesTableFooterEl.appendChild(cell);

        for (let j = 0; j < storeLocationsArray.list; i++) {
            hourlyTotal += storeLocationsArray[j].cookieSales[i];
            console.log("hourly total" + hourlyTotal);

            dailyTotal += storeLocationsArray[j].cookieSales[i];
            console.log("daily total" + dailyTotal)
        }
        cell.innerText = hourlyTotal;
    }
}
// function renderHours() {
//     // insert hour array
//     let headerRow = document.getElementById('table-header');

//     for (let i = 0; i < hours.length; i++) {
//         headerRow.append(document.createElement('th'));
//     };

//     let hourData = headerRow.querySelectorAll('th');

//     for (let i = 0; i < hourData.length; i++) {
//         hourData[i].innerText = hours[i];
//     };

//     headerRow.prepend(document.createElement('th'));

//     headerRow.append(document.createElement('th'));

//     headerRow.lastElementChild.innerText = 'Total'
// }

// function renderSales(arrayOfShops) {
//     for (let i = 0; i < arrayOfShops.length; i++) {
//         arrayOfShops[i].render();
//     }
// }

// let shopsArray = []



// renderHours();
// renderSales(shopsArray);


