
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
             '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookieShop = [];

let parent=document.getElementById('seattle');

/*let imageElement =document.createElement('img');
parent.appendChild(imageElement);
imageElement.setAttribute('src','img/salmon.png');*/



function CookieShop(location, minCust, maxCust, avrageCookiesSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avrageCookiesSale = avrageCookiesSale;
  this.cookiesSoldPerHr = [];
  cookieShop.push(this);
}

CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.avrageCookiesSale * this.custPerHr());
};

var tableElement = document.createElement('table')
tableElement.setAttribute('id','tableSales');

// Header Row Function
  function makeHeaderRow() { 
  let theadElement = document.createElement('thead');
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);
  for (let i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  let table = document.getElementById('seattle');

  thElement = document.createElement('th');
  thElement.textContent = 'Totals/daily ';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);
  tableElement.append(theadElement);

  table.appendChild(tableElement);
}


//Render function
CookieShop.prototype.render = function () 
{
  
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);
  let cookiesSold = 0;
  let totalCookiesSold = 0;
  for (let i = 0; i < hours.length; i++) {
    cookiesSold = this.cookiesPerHr();
    let tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);
    this.cookiesSoldPerHr.push(cookiesSold);
    totalCookiesSold += cookiesSold;
  }
  let table = document.getElementById('seattle');
  let tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  tableElement.append(trElement);
  table.appendChild(tableElement);
};



// Totals in the bottom
  function totalCookiesPerHour() { 
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = 'Totals in a hour';
  trElement.appendChild(thElement);

  let totalCookie = 0;

  for (let i = 0; i < hours.length; i++) {
    let totalCookies = 0;
    for (let j = 0; j < cookieShop.length; j++) {
      totalCookies += cookieShop[j].cookiesSoldPerHr[i];
      totalCookie += cookieShop[j].cookiesSoldPerHr[i];
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);

  }
  let table = document.getElementById('seattle');
  let tdElement = document.createElement('td');
  tdElement.textContent = totalCookie;
  trElement.appendChild(tdElement);
  tableElement.append(trElement);
  table.appendChild(tableElement);
}


new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

// to get all location in table
function allLocation() {
  for (let i in cookieShop) {
    cookieShop[i].render();
  }
}
makeHeaderRow();
allLocation();
totalCookiesPerHour();
