'use strict';
console.log('Roqaia');
const hours =['6am','7am','8am','9am','10am',
            '11am' ,'12am','1pm','2pm','3pm',
            '4am', '5am' ,'6am','7am'];


function getRondomNumber(min,max){
    return Math.floor((Math.random() * (max - min+1))+min);
}

let  shope =[];

function cookie (name,MinCust,MaxCust,avgCookie )
{    this.name = name;
    this.MinCust= MinCust;
    this.MaxCust= MaxCust;
    this.avgCookie= avgCookie;
    this.customereachHours= [];
    this.cookiesPerhour =[];
    this.totalOfsalesPerday =0 ;
    shope.push(this);
    }

 
cookie.prototype.CustomEachHourFun = function (){
for (let i = 0; i <  hours.length; i++) {
    this.(customereachHours.push(getRondomNumber(this.MinCust,this.MaxCust));
    
}
cookie.prototype.CookieEachHourFun=function{
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerhour.push(Math.floor(this.customereachHours[i])*this.avgCookie);
        this.totalOfsalesPerday +=this.cookiesPerhour[i];
    }

}

  let seattle = new cookie(
       'seattle',
       23       ,
       65       ,
       6.3                    
      );
  let tokya = new cookie(
        'tokya',
        3       ,
        24       ,
        1.2                   
       );
       let dubai = new cookie(
        'dubai',
        11       ,
        38       ,
        3.7                     
       );
       let paris = new cookie(
        'paris',
        20       ,
        38       ,
        2.3      
                       
       );
      let lima = new cookie(
        'lima'   ,
        2        ,
        16,4     ,
        4.6     
                        
       );



     let container =document.getElementById('Seattle');
     let tableEl =document.createElement('table') ;
     container.appendChild(tableEl);



//header 
     function header(){
         let headerEl=document.createElement('tr');
         tableEl.appendChild('headerEl');

         let thEl=document.createElement('th');
         tableEl.appendChild('thEl');
        headerEl.textcontant='Name';
        for (let i = 0; i < hours.length; i++) {
         let thElem=document.createElement('th');
         headerEl.appendChild('thElem');
         thElem.textcontant=hours[i];
            
        }
        let lastthEl=document.createElement('th');
        lastthEl.textcontant='Daily Location Total';
        headerEl.appendChild(lastthEl);
     }
//Boday
cookie.prototype.bodayRender =function(){
 let bodayRow =document.createElement('tr');
 tableEl.appendChild(bodayRow);
 let tdData =document.createElement('td');
  bodayRow.appendChild(tdData);
  tdData.textcontant=this.name;
  for (let i = 0; i < hours.length; i++) {
    let tdElement=document.createElement('td');
    tdElement.textcontant=this.cookiesPerhour[i];
     bodayRow.appendChild(tdElement); 
  }
let totalTdForEachLocation=document.createElement('td');
bodayRow.appendChild(totalTdForEachLocation);
totalTdForEachLocation.textcontant=this.totalOfsalesPerday;
}

//footer
  let makeFooter =function (){
 let footer=document.createElement('tr');
 footerRow.appendChild(footer);
 footer.textcontant="Totals";
 let totalOfTotal=0;
 for (let i = hours< hours.length; i++hours){
    let totalEechHours=0;
    for (let j = 0; j < shope.length; j++) {
        totalEechHours+=shope[j].customereachHours[i];
        
    }
    footer =document.createElement('th');
     footerRow.appendChild(footer);
   footer.textcontant=totalEechHours;

 }
let finalth=document.createElement('th');
 footerRow.appendChild(finalth);
 finalth.textcontant=totalOfTotal;

}


    header();

     for (let i = 0; i <shope.length; i++) {
         shope[i].CustomEachHourFun();
         shope[i].CookieEachHourFun();
         shope[i].bodayRender();
         
     }
     


footer();