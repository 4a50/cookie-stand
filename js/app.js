'use-strict';
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rando = Math.floor(Math.random() * (max - min) + min);
  //console.log(`Rando Number: ${rando}`);
  return rando;
}
// 

function Store(storeLoc, minCust, maxCust, avgCookie) {
  this.storeLocation = storeLoc,
    this.idName = this.storeLocation.toLowerCase();
  this.hoursOpen = 14;
  this.minHourlyCustomer = minCust;
  this.maxHourlyCustomer = maxCust;
  this.avgCookiePerCustomer = avgCookie;
  this.hourlyCookies = [],
    this.generateHourlyCookies = function () {
      for (var i = 0; i < this.hoursOpen; i++) {
        var hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
        this.hourlyCookies.push(hourlySale);
      }
      return this.hourlyCookies;
    },
    this.displayDailyCookies = function () {
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




// 
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2); //loc, min, max, avg
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.displayDailyCookies();
tokyo.displayDailyCookies();
dubai.displayDailyCookies();
paris.displayDailyCookies();
lima.displayDailyCookies();












