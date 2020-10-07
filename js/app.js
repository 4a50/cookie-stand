'use-strict';

// Global Vars

//Objects
function Store(storeLoc, minCust, maxCust, avgCookie) {
  //funcVars
  this.storeLocation = storeLoc;
  this.idName = this.storeLocation.toLowerCase();

  this.minHourlyCustomer = minCust;
  this.maxHourlyCustomer = maxCust;
  this.avgCookiePerCustomer = avgCookie;
  this.hourlyCookies = [];
  this.dailyLocationTotal = 0;
  this.generateHourlyCookies();

  allStores.push(this);
}
//Prototypes
Store.prototype.generateHourlyCookies = function () { //pushes out my array of hourly cookies
  var hourlySale = 0;
  for (var i = 0; i < 14; i++) { //removed HoursOPen variable  //TODO FIX 14
    hourlySale = Math.round(getRandomNumber(this.minHourlyCustomer, this.maxHourlyCustomer) * this.avgCookiePerCustomer);
    this.hourlyCookies.push(hourlySale);
    this.dailyLocationTotal += hourlySale;
  }
};

//Functions
var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};

var generateStoreHourArray = function (startTime = 6, hoursOpen = 14) {
  var storeTimes = ['Store'];

  for (var q = startTime; q < hoursOpen + startTime; q++) {
    if (q > 12) {
      storeTimes.push(`${q - 12}pm`);
    }
    else if (q === 12) {
      storeTimes.push(`${q}pm`);
    }

    else {
      storeTimes.push(`${q}am`);
    }
  }
  storeTimes.push('Daily Location Total');
  return storeTimes;
};

function generateTableBones(baseParentTag) {
  var baseParent = document.getElementsByTagName(baseParentTag);
  var tableTag = document.createElement('table');
  tableTag.setAttribute('id', 'store-table');
  baseParent[0].appendChild(tableTag);
  var tBodyTag = document.createElement('tBody');
  tBodyTag.setAttribute('id', 'store-table-body');
  tableTag.appendChild(tBodyTag);
}
function render(storeObjs) {
  var storeTimes = generateStoreHourArray();
  var trParent = document.getElementById('store-table-body');
  var childToAppend;
  var parentHeader = document.createElement('tr');
  parentHeader.setAttribute('id', 'header-row');
  trParent.appendChild(parentHeader);

  for (var m = 0; m < storeTimes.length; m++) {
    //Headers
    childToAppend = document.createElement('th');
    childToAppend.textContent = storeTimes[m];
    parentHeader.appendChild(childToAppend);
  }
  var storeTr;
  var storeTd;
  for (var i = 0; i < storeObjs.length; i++) { ///Iterate through stores

    storeTr = document.createElement('tr');
    storeTr.setAttribute('id', `${storeObjs[i].idName}-tr`);
    trParent.appendChild(storeTr);

    var storeNameHeader = document.createElement('th');
    storeNameHeader.textContent = `${storeObjs[i].storeLocation}`;
    storeTr.appendChild(storeNameHeader);

    for (var j = 0; j < storeObjs[i].hourlyCookies.length; j++) { //populate hourly cookies
      storeTd = document.createElement('td');
      storeTd.textContent = storeObjs[i].hourlyCookies[j];
      document.getElementById(`${storeObjs[i].idName}-tr`).appendChild(storeTd);
    }
    storeTd = document.createElement('td');
    storeTd.textContent = storeObjs[i].dailyLocationTotal;
    document.getElementById(`${storeObjs[i].idName}-tr`).appendChild(storeTd);
  }
  var hourlyCookieTotals = document.createElement('tr');
  hourlyCookieTotals.setAttribute('id', 'hourly-total-row');
  trParent.appendChild(hourlyCookieTotals);
  var hourlyCookieTotalHeader = document.createElement('th');
  hourlyCookieTotalHeader.textContent = 'Totals';
  document.getElementById('hourly-total-row').appendChild(hourlyCookieTotalHeader);
  var hourlyTD;
  var hourlyRunningTotal = 0;
  var grandHourlyRunningTotal = 0;

  for (var l = 0; l < storeObjs[0].hourlyCookies.length; l++) {
    for (var k = 0; k < storeObjs.length; k++) {
      // console.log(`${j}: ${storeObjs[i].hourlyCookies[j]}`);
      hourlyRunningTotal += storeObjs[k].hourlyCookies[l];
    }

    hourlyTD = document.createElement('td');
    hourlyTD.textContent = hourlyRunningTotal;
    document.getElementById('hourly-total-row').appendChild(hourlyTD);
    console.log(hourlyRunningTotal);
    grandHourlyRunningTotal += hourlyRunningTotal;
    hourlyRunningTotal = 0;
  }
  var grandTotalTD = document.createElement('td');
  grandTotalTD.textContent = grandHourlyRunningTotal;
  document.getElementById('hourly-total-row').appendChild(grandTotalTD);

}



//Code
// When pushing the object instances into an array in the constructor, you do not
//need to assign a variable.
var allStores = [];
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2); //loc, min, max, avg
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);
var baseParentTag = 'main';



generateTableBones(baseParentTag);//, seattle.idName);
render(allStores);












