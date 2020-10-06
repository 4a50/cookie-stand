'use-strict';
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rando = Math.floor(Math.random() * (max - min) + min);
  console.log(`Rando Number: ${rando}`);
  return rando;
}

var seattleStore = {
  storeLocation: 'Seattle',
  idName: 'seattle',
  hoursOpen: 14,
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookiePerCustomer: 6.3,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(hourlySale);
    }
    return this.hourlyCookies;
  },
  displayDailyCookies: function () {
    //Store Name H2 header
    this.generateHourlyCookies();
    var createSection = document.createElement('section');
    createSection.setAttribute('id', `${this.idName}-store`);
    document.getElementsByTagName('main')[0].appendChild(createSection);

    var storeSection = document.getElementById(`${this.idName}-store`)
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    var listSales = document.createElement('ul');
    listSales.setAttribute('id', `${this.idName}-daily-sales`);
    storeSection.appendChild(storeName);
    storeSection.appendChild(listSales);
    //
    var timeHour = 6;
    var twelveHourScale = ['am', 'pm'];
    var totalCookiesSold = 0;
    for (var q = 0; q < this.hourlyCookies.length; q++) {
      var parent = document.getElementById(`${this.idName}-daily-sales`);
      var listItem = document.createElement('li');
      if (timeHour > 12) {
        listItem.textContent = `${timeHour - 12}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }
      else if (timeHour === 12) {
        listItem.textContent = `${timeHour}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }

      else {
        listItem.textContent = `${timeHour}${twelveHourScale[0]}: ${this.hourlyCookies[q]} cookies`;
      }
      parent.appendChild(listItem);
      totalCookiesSold += this.hourlyCookies[q];
      timeHour++;
    }
    var parent = document.getElementById(`${this.idName}-daily-sales`);
    var listItem = document.createElement('li');
    listItem.textContent = `Total: ${totalCookiesSold} cookies`;
    parent.appendChild(listItem);
  }
}

var tokyoStore = {
  storeLocation: 'Tokyo',
  idName: 'tokyo',
  hoursOpen: 14,
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookiePerCustomer: 1.2,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(hourlySale);
    }
    return this.hourlyCookies;
  },
  displayDailyCookies: function () {
    //Store Name H2 header
    this.generateHourlyCookies();
    var createSection = document.createElement('section');
    createSection.setAttribute('id', `${this.idName}-store`);
    document.getElementsByTagName('main')[0].appendChild(createSection);

    var storeSection = document.getElementById(`${this.idName}-store`)
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    var listSales = document.createElement('ul');
    listSales.setAttribute('id', `${this.idName}-daily-sales`);
    storeSection.appendChild(storeName);
    storeSection.appendChild(listSales);
    //
    var timeHour = 6;
    var twelveHourScale = ['am', 'pm'];
    var totalCookiesSold = 0;
    for (var q = 0; q < this.hourlyCookies.length; q++) {
      var parent = document.getElementById(`${this.idName}-daily-sales`);
      var listItem = document.createElement('li');
      if (timeHour > 12) {
        listItem.textContent = `${timeHour - 12}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }
      else if (timeHour === 12) {
        listItem.textContent = `${timeHour}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }

      else {
        listItem.textContent = `${timeHour}${twelveHourScale[0]}: ${this.hourlyCookies[q]} cookies`;
      }
      parent.appendChild(listItem);
      totalCookiesSold += this.hourlyCookies[q];
      timeHour++;
    }
    var parent = document.getElementById(`${this.idName}-daily-sales`);
    var listItem = document.createElement('li');
    listItem.textContent = `Total: ${totalCookiesSold} cookies`;
    parent.appendChild(listItem);
  }
}
var dubaiStore = {
  storeLocation: 'Dubai',
  idName: 'dubai',
  hoursOpen: 14,
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  avgCookiePerCustomer: 3.7,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(hourlySale);
    }
    return this.hourlyCookies;
  },
  displayDailyCookies: function () {
    //Store Name H2 header
    this.generateHourlyCookies();
    var createSection = document.createElement('section');
    createSection.setAttribute('id', `${this.idName}-store`);
    document.getElementsByTagName('main')[0].appendChild(createSection);

    var storeSection = document.getElementById(`${this.idName}-store`)
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    var listSales = document.createElement('ul');
    listSales.setAttribute('id', `${this.idName}-daily-sales`);
    storeSection.appendChild(storeName);
    storeSection.appendChild(listSales);
    //
    var timeHour = 6;
    var twelveHourScale = ['am', 'pm'];
    var totalCookiesSold = 0;
    for (var q = 0; q < this.hourlyCookies.length; q++) {
      var parent = document.getElementById(`${this.idName}-daily-sales`);
      var listItem = document.createElement('li');
      if (timeHour > 12) {
        listItem.textContent = `${timeHour - 12}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }
      else if (timeHour === 12) {
        listItem.textContent = `${timeHour}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }

      else {
        listItem.textContent = `${timeHour}${twelveHourScale[0]}: ${this.hourlyCookies[q]} cookies`;
      }
      parent.appendChild(listItem);
      totalCookiesSold += this.hourlyCookies[q];
      timeHour++;
    }
    var parent = document.getElementById(`${this.idName}-daily-sales`);
    var listItem = document.createElement('li');
    listItem.textContent = `Total: ${totalCookiesSold} cookies`;
    parent.appendChild(listItem);
  }
}
var parisStore = {
  storeLocation: 'Paris',
  idName: 'paris',
  hoursOpen: 14,
  minHourlyCustomer: 20,
  maxHourlyCustomer: 38,
  avgCookiePerCustomer: 2.3,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(hourlySale);
    }
    return this.hourlyCookies;
  },
  displayDailyCookies: function () {
    //Store Name H2 header
    this.generateHourlyCookies();
    var createSection = document.createElement('section');
    createSection.setAttribute('id', `${this.idName}-store`);
    document.getElementsByTagName('main')[0].appendChild(createSection);

    var storeSection = document.getElementById(`${this.idName}-store`)
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    var listSales = document.createElement('ul');
    listSales.setAttribute('id', `${this.idName}-daily-sales`);
    storeSection.appendChild(storeName);
    storeSection.appendChild(listSales);
    //
    var timeHour = 6;
    var twelveHourScale = ['am', 'pm'];
    var totalCookiesSold = 0;
    for (var q = 0; q < this.hourlyCookies.length; q++) {
      var parent = document.getElementById(`${this.idName}-daily-sales`);
      var listItem = document.createElement('li');
      if (timeHour > 12) {
        listItem.textContent = `${timeHour - 12}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }
      else if (timeHour === 12) {
        listItem.textContent = `${timeHour}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }

      else {
        listItem.textContent = `${timeHour}${twelveHourScale[0]}: ${this.hourlyCookies[q]} cookies`;
      }
      parent.appendChild(listItem);
      totalCookiesSold += this.hourlyCookies[q];
      timeHour++;
    }
    var parent = document.getElementById(`${this.idName}-daily-sales`);
    var listItem = document.createElement('li');
    listItem.textContent = `Total: ${totalCookiesSold} cookies`;
    parent.appendChild(listItem);
  }
}
var limaStore = {
  storeLocation: 'Lima',
  idName: 'lima',
  hoursOpen: 14,
  minHourlyCustomer: 2,
  maxHourlyCustomer: 16,
  avgCookiePerCustomer: 4.6,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
      this.hourlyCookies.push(hourlySale);
    }
    return this.hourlyCookies;
  },
  displayDailyCookies: function () {
    //Store Name H2 header
    this.generateHourlyCookies();
    var createSection = document.createElement('section');
    createSection.setAttribute('id', `${this.idName}-store`);
    document.getElementsByTagName('main')[0].appendChild(createSection);

    var storeSection = document.getElementById(`${this.idName}-store`)
    var storeName = document.createElement('h2');
    storeName.textContent = this.storeLocation;
    var listSales = document.createElement('ul');
    listSales.setAttribute('id', `${this.idName}-daily-sales`);
    storeSection.appendChild(storeName);
    storeSection.appendChild(listSales);
    //
    var timeHour = 6;
    var twelveHourScale = ['am', 'pm'];
    var totalCookiesSold = 0;
    for (var q = 0; q < this.hourlyCookies.length; q++) {
      var parent = document.getElementById(`${this.idName}-daily-sales`);
      var listItem = document.createElement('li');
      if (timeHour > 12) {
        listItem.textContent = `${timeHour - 12}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }
      else if (timeHour === 12) {
        listItem.textContent = `${timeHour}${twelveHourScale[1]}: ${this.hourlyCookies[q]} cookies`;
      }

      else {
        listItem.textContent = `${timeHour}${twelveHourScale[0]}: ${this.hourlyCookies[q]} cookies`;
      }
      parent.appendChild(listItem);
      totalCookiesSold += this.hourlyCookies[q];
      timeHour++;
    }
    var parent = document.getElementById(`${this.idName}-daily-sales`);
    var listItem = document.createElement('li');
    listItem.textContent = `Total: ${totalCookiesSold} cookies`;
    parent.appendChild(listItem);
  }
}
seattleStore.displayDailyCookies();
tokyoStore.displayDailyCookies();
dubaiStore.displayDailyCookies();
parisStore.displayDailyCookies();
limaStore.displayDailyCookies();











