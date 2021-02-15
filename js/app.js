'use strict';
console.log('Roqaia');

const Seattle = {
    MinCust: 23,
    MaxCust: 65,
    AvgCookie: 6.3,
    numOfCustomer: 0,
    numOfCookiesPerhour: [],
    totalOfsales :0 ,
    getRondom: function () {
        console.table(this);
        this.numOfCustomer = getRandomNumber(this.MinCust, this.MaxCust);
    },

    
    render: function () {
        const container = document.getElementById('Seattle');
        console.log(container);
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        const imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);
        imgEl.setAttribute('src', 'img/salmon.png');

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 6; i < 20; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.numOfCookiesPerhour[i]=Math.floor(getRandomNumber(this.MinCust,this.MaxCust)*this.AvgCookie);
            this.totalOfsales+= i ;
            

            if (i <= 12) {
                liEl.textContent = i + "   am    "+ this.numOfCookiesPerhour[i];
            } else {

                liEl.textContent = (i % 12) + "   pm   " + this.numOfCookiesPerhour[i];
            }

        }
    }

};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Seattle.getRondom();
//Seattle.calculatNum ();
Seattle.render();


const Tokya = {
    MinCust : 3,
    MaxCust : 24,
    AvgCookie : 1.2,
    numOfCustomer: 0,
    numOfCookiesPerhour: [],
    totalOfsales :0 ,
    getRondom: function () {
        console.table(this);
        this.numOfCustomer = getRandomNumber(this.MinCust, this.MaxCust);
    },
    render: function () {
        const container = document.getElementById('Tokya');
        console.log(container);
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 6; i < 20; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.numOfCookiesPerhour[i]=Math.floor(getRandomNumber(this.MinCust,this.MaxCust)*this.AvgCookie);
            this.totalOfsales+= i ;
            

            if (i <= 12) {
                liEl.textContent = i + "   am    "+ this.numOfCookiesPerhour[i];
            } else {

                liEl.textContent = (i % 12) + "   pm   " + this.numOfCookiesPerhour[i];
            }

        }

    }
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Tokya.getRondom();
//Tokya.calculatNum ();
Tokya.render();

const Dubai = {
    MinCust : 11,
    MaxCust :38,
    AvgCookie : 3.7,
    numOfCustomer: 0,
    numOfCookiesPerhour: [],
    totalOfsales :0 ,
    getRondom: function () {
        console.table(this);
        this.numOfCustomer = getRandomNumber(this.MinCust, this.MaxCust);
    },
    render: function () {
        const container = document.getElementById('Dubai');
        console.log(container);
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);


        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 6; i < 20; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.numOfCookiesPerhour[i]=Math.floor(getRandomNumber(this.MinCust,this.MaxCust)*this.AvgCookie);
            this.totalOfsales+= i ;
            

            if (i <= 12) {
                liEl.textContent = i + "   am    "+ this.numOfCookiesPerhour[i];
            } else {

                liEl.textContent = (i % 12) + "   pm   " + this.numOfCookiesPerhour[i];
            }

        }

    }
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Dubai.getRondom();
//Dubai.calculatNum ();
Dubai.render();




const Paris = {
    MinCust : 20,
    MaxCust :38,
    AvgCookie : 2.3,
    numOfCustomer: 0,
    numOfCookiesPerhour: [],
    totalOfsales :0 ,
    getRondom: function () {
        console.table(this);
        this.numOfCustomer = getRandomNumber(this.MinCust, this.MaxCust);
    },
    render: function () {
        const container = document.getElementById('Paris');
        console.log(container);
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);


        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
         for (let i = 6; i < 20; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.numOfCookiesPerhour[i]=Math.floor(getRandomNumber(this.MinCust,this.MaxCust)*this.AvgCookie);
            this.totalOfsales+= i ;
            

            if (i <= 12) {
                liEl.textContent = i + "   am    "+ this.numOfCookiesPerhour[i];
            } else {

                liEl.textContent = (i % 12) + "   pm   " + this.numOfCookiesPerhour[i];
            }

        }

    }
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Paris.getRondom();
//Paris.calculatNum ();
Paris.render();

const Lima = {
    MinCust : 2,
    MaxCust :16,
    AvgCookie : 4.6,
   AvgCookie : 2.3,
   numOfCustomer: 0,
   numOfCookiesPerhour: [],
   totalOfsales :0 ,
    getRondom: function () {
        console.table(this);
        this.numOfCustomer = getRandomNumber(this.MinCust, this.MaxCust);
    },
    render: function () {
        const container = document.getElementById('Lima');
        console.log(container);
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);
        const h2El = document.createElement('h2');
        articleEl.appendChild(h2El);


        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
         for (let i = 6; i < 20; i++) {
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);

            this.numOfCookiesPerhour[i]=Math.floor(getRandomNumber(this.MinCust,this.MaxCust)*this.AvgCookie);
            this.totalOfsales+= i ;
            

            if (i <= 12) {
                liEl.textContent = i + "   am    "+ this.numOfCookiesPerhour[i];
            } else {

                liEl.textContent = (i % 12) + "   pm   " + this.numOfCookiesPerhour[i];
            }

        }

    }

};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Lima.getRondom();
//Lima.calculatNum ();
Lima.render();
