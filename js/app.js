'use strict'

const seattleShop = {
    name: 'seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookieSale: 6.3,
    numberOfCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers)
    },
    amountOfCookiesPurchasedPerHour: function () {
        return Math.floor(this.averageCookieSale * this.numberOfCustomersPerHour())
    },
    resultsOfSalesPerDay: function () {
        let hourlySalesData = new Array();
        for (let i = 0; i < 14; i++) {
            hourlySalesData.push(this.amountOfCookiesPurchasedPerHour())
        }
        return hourlySalesData;
    },
    totalOfAllSalesInADay: function () {
        let totalSales = 0;
        let arr = this.resultsOfSalesPerDay();
        for (let i = 0; i < arr.length; i++) {
            totalSales += arr[i];
        }
        return totalSales;
    }
};

const tokyoShop = {
    name: 'tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookieSale: 1.2,
    numberOfCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers)
    },
    amountOfCookiesPurchasedPerHour: function () {
        return Math.floor(this.averageCookieSale * this.numberOfCustomersPerHour())
    },
    resultsOfSalesPerDay: function () {
        let hourlySalesData = new Array();
        for (let i = 0; i < 14; i++) {
            hourlySalesData.push(this.amountOfCookiesPurchasedPerHour())
        }
        return hourlySalesData;
    },
    totalOfAllSalesInADay: function () {
        let totalSales = 0;
        let arr = this.resultsOfSalesPerDay();
        for (let i = 0; i < arr.length; i++) {
            totalSales += arr[i];
        }
        return totalSales;
    }
};

const dubaiShop = {
    name: 'dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookieSale: 3.7,
    numberOfCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers)
    },
    amountOfCookiesPurchasedPerHour: function () {
        return Math.floor(this.averageCookieSale * this.numberOfCustomersPerHour())
    },
    resultsOfSalesPerDay: function () {
        let hourlySalesData = new Array();
        for (let i = 0; i < 14; i++) {
            hourlySalesData.push(this.amountOfCookiesPurchasedPerHour())
        }
        return hourlySalesData;
    },
    totalOfAllSalesInADay: function () {
        let totalSales = 0;
        let arr = this.resultsOfSalesPerDay();
        for (let i = 0; i < arr.length; i++) {
            totalSales += arr[i];
        }
        return totalSales;
    }
};

const parisShop = {
    name: 'paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookieSale: 2.3,
    numberOfCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers)
    },
    amountOfCookiesPurchasedPerHour: function () {
        return Math.floor(this.averageCookieSale * this.numberOfCustomersPerHour())
    },
    resultsOfSalesPerDay: function () {
        let hourlySalesData = new Array();
        for (let i = 0; i < 14; i++) {
            hourlySalesData.push(this.amountOfCookiesPurchasedPerHour())
        }
        return hourlySalesData;
    },
    totalOfAllSalesInADay: function () {
        let totalSales = 0;
        let arr = this.resultsOfSalesPerDay();
        for (let i = 0; i < arr.length; i++) {
            totalSales += arr[i];
        }
        return totalSales;
    }
};

const limaShop = {
    name: 'lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookieSale: 4.6,
    numberOfCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers)
    },
    amountOfCookiesPurchasedPerHour: function () {
        return Math.floor(this.averageCookieSale * this.numberOfCustomersPerHour())
    },
    resultsOfSalesPerDay: function () {
        let hourlySalesData = new Array();
        for (let i = 0; i < 14; i++) {
            hourlySalesData.push(this.amountOfCookiesPurchasedPerHour())
        }
        return hourlySalesData;
    },
    totalOfAllSalesInADay: function () {
        let totalSales = 0;
        let arr = this.resultsOfSalesPerDay();
        for (let i = 0; i < arr.length; i++) {
            totalSales += arr[i];
        }
        return totalSales;
    }
};


const salmonShops = [seattleShop, tokyoShop, dubaiShop, parisShop, limaShop]


let salesData = document.getElementById('display-sales');


function displayAllSalesData() {
    for (let shop in salmonShops) {
        salesData.innerHTML += `<h3>${salmonShops[shop].name.toUpperCase()}</h3>
        <ul>
            <li>6am: ${salmonShops[shop].resultsOfSalesPerDay()[0]} cookies</li>
            <li>7am: ${salmonShops[shop].resultsOfSalesPerDay()[1]} cookies</li>
            <li>8am: ${salmonShops[shop].resultsOfSalesPerDay()[2]} cookies</li>
            <li>9am: ${salmonShops[shop].resultsOfSalesPerDay()[3]} cookies</li>
            <li>10am: ${salmonShops[shop].resultsOfSalesPerDay()[4]} cookies</li>
            <li>11am: ${salmonShops[shop].resultsOfSalesPerDay()[5]} cookies</li>
            <li>12am: ${salmonShops[shop].resultsOfSalesPerDay()[6]} cookies</li>
            <li>1pm: ${salmonShops[shop].resultsOfSalesPerDay()[7]} cookies</li>
            <li>2pm: ${salmonShops[shop].resultsOfSalesPerDay()[8]} cookies</li>
            <li>3pm: ${salmonShops[shop].resultsOfSalesPerDay()[9]} cookies</li>
            <li>4pm: ${salmonShops[shop].resultsOfSalesPerDay()[10]} cookies</li>
            <li>5pm: ${salmonShops[shop].resultsOfSalesPerDay()[11]} cookies</li>
            <li>6pm: ${salmonShops[shop].resultsOfSalesPerDay()[12]} cookies</li>
            <li>7pm: ${salmonShops[shop].resultsOfSalesPerDay()[13]} cookies</li>
            <li>Total: ${salmonShops[shop].totalOfAllSalesInADay()} cookies</li>
        </ul>
        `
    }

}

displayAllSalesData();

