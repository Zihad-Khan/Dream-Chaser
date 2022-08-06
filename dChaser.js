//handling hsc22
let subHeader = document.getElementById('subheader');

let timeOut = setInterval(subHeaderHandler,400);

let alphaText = 'H S C 2 0 2 2';
let alphaArray = alphaText.split(' ');
alphaArray.splice(3,0," ");
let previousText = " ";
let counterOne = 0;

function subHeaderHandler(){
  let previousTextLength = previousText.length;
  if(counterOne<8){
    subHeader.innerHTML = previousText + alphaArray[counterOne];
    previousText = subHeader.innerHTML;
  }else{
    counterOne = 0;
    clearInterval(timeOut);
  }
  counterOne++;
}

//handling the Date
let days = document.getElementById('day');
let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');
setInterval(function(){
  let currentDate = new Date();
  let targetDate = new Date(2022,10,1);
  let currentDateMil = Date.parse(currentDate);
  let targetDateMil = Date.parse(targetDate);
  let milDiff = parseInt(targetDateMil)-parseInt(currentDateMil);
  //console.log(milDiff);
  let dayValue = parseInt(milDiff/86400000);
  makeTwoDigit(dayValue,days)
  let modDayValue = milDiff%86400000;
  //console.log(modDayValue);
  let hourValue = parseInt(modDayValue/3600000);
  makeTwoDigit(hourValue,hours)
  let modHourValue = modDayValue%3600000;
  //console.log(modHourValue);
  let minValue = parseInt(modHourValue/60000);
  makeTwoDigit(minValue,mins)
  let modMinValue = modHourValue%60000;
  let secValue = parseInt(modMinValue/1000);
  makeTwoDigit(secValue,secs)
  function makeTwoDigit(name,div){
    if(name<10){
      name = '0'+name;
      div.innerHTML = name;
    }else{
      div.innerHTML = name;
    }
  }

},1000)

//Handling Each Subjects
for (let i = 0; i <= 11; i++) {
  let clickCounter1 = 0;
  document.querySelectorAll('.eachSub')[i].onclick = function() {
    if (clickCounter1%2 == 0) {
      document.querySelectorAll('.cursor')[i].innerHTML = '🔼';
      document.querySelectorAll('.subContents')[i].style.display = 'block';
    } else {
      document.querySelectorAll('.cursor')[i].innerHTML = '🔽';
      document.querySelectorAll('.subContents')[i].style.display = 'none';
    }
    clickCounter1++;
  }
}

//handling the main project

let dChaserObj = {};
let wholeText;
let userNickname;

//getting class elememts
let reviseLevel = document.getElementById('rePer');
let completeLevel = document.getElementById('comPer');
let uncomLevel = document.getElementById('uncomPer');
let persentage = document.querySelectorAll('.perTitle');

let shortRevPer = document.querySelectorAll('.shortRevPer');
let shortComPer = document.querySelectorAll('.shortComPer');
let shortUncomPer = document.querySelectorAll('.shortUncomPer');

window.bangla1Rev = document.querySelectorAll('.isB1Rev');
//console.dir(window['bangla1Rev'][0]);
window.bangla1Com = document.querySelectorAll('.isB1Com');
window.bangla1Uncom = document.querySelectorAll('.isB1Uncom');
window.bangla2Rev = document.querySelectorAll('.isB2Rev');
window.bangla2Com = document.querySelectorAll('.isB2Com');
window.bangla2Uncom = document.querySelectorAll('.isB2Uncom');
window.english1Rev = document.querySelectorAll('.isE1Rev');
window.english1Com = document.querySelectorAll('.isE1Com');
window.english1Uncom = document.querySelectorAll('.isE1Uncom');
window.english2Rev = document.querySelectorAll('.isE2Rev');
window.english2Com = document.querySelectorAll('.isE2Com');
window.english2Uncom = document.querySelectorAll('.isE2Uncom');
window.physics1Rev = document.querySelectorAll('.isP1Rev');
window.physics1Com = document.querySelectorAll('.isP1Com');
window.physics1Uncom = document.querySelectorAll('.isP1Uncom');
window.physics2Rev = document.querySelectorAll('.isP2Rev');
window.physics2Com = document.querySelectorAll('.isP2Com');
window.physics2Uncom = document.querySelectorAll('.isP2Uncom');
window.chemistry1Rev = document.querySelectorAll('.isC1Rev');
window.chemistry1Com = document.querySelectorAll('.isC1Com');
window.chemistry1Uncom = document.querySelectorAll('.isC1Uncom');
window.chemistry2Rev = document.querySelectorAll('.isC2Rev');
window.chemistry2Com = document.querySelectorAll('.isC2Com');
window.chemistry2Uncom = document.querySelectorAll('.isC2Uncom');
window.math1Rev = document.querySelectorAll('.isM1Rev');
window.math1Com = document.querySelectorAll('.isM1Com');
window.math1Uncom = document.querySelectorAll('.isM1Uncom');
window.math2Rev = document.querySelectorAll('.isM2Rev');
window.math2Com = document.querySelectorAll('.isM2Com');
window.math2Uncom = document.querySelectorAll('.isM2Uncom');
window.biology1Rev = document.querySelectorAll('.isBio1Rev');
window.biology1Com = document.querySelectorAll('.isBio1Com');
window.biology1Uncom = document.querySelectorAll('.isBio1Uncom');
window.biology2Rev = document.querySelectorAll('.isBio2Rev');
window.biology2Com = document.querySelectorAll('.isBio2Com');
window.biology2Uncom = document.querySelectorAll('.isBio2Uncom');
let allSubRevArray = [];
let allSubComArray = [];
let allSubUncomArray = [];

function subjectCreater(instance, num) {
  instance = [];
  for (let i = 0; i < num; i++) {
    instance[i] = 'uncom';
  }
  return instance;
}

if (localStorage.getItem('dChaserObjName') === null) {
  userNickname = prompt('Please enter your Nickname_', 'User');
  document.getElementById('userName').innerHTML = userNickname;
  dChaserObj.userName = userNickname;

  //making subject arrays
  let b1Subject;
  b1Subject = subjectCreater(b1Subject, 16);
  let b2Subject;
  b2Subject = subjectCreater(b2Subject, 10);
  let e1Subject;
  e1Subject = subjectCreater(e1Subject, 6);
  let e2Subject;
  e2Subject = subjectCreater(e2Subject, 8);
  let p1Subject;
  p1Subject = subjectCreater(p1Subject, 8);
  let p2Subject;
  p2Subject = subjectCreater(p2Subject, 7);
  let c1Subject;
  c1Subject = subjectCreater(c1Subject, 4);
  let c2Subject;
  c2Subject = subjectCreater(c2Subject, 4);
  let m1Subject;
  m1Subject = subjectCreater(m1Subject, 6);
  let m2Subject;
  m2Subject = subjectCreater(m2Subject, 6);
  let bio1Subject;
  bio1Subject = subjectCreater(bio1Subject, 7);
  let bio2Subject;
  bio2Subject = subjectCreater(bio2Subject, 7);
  //console.log(b1Subject);

  //adding subject arrays to the main Object
  dChaserObj.bangla1 = b1Subject;
  dChaserObj.bangla2 = b2Subject;
  dChaserObj.english1 = e1Subject;
  dChaserObj.english2 = e2Subject;
  dChaserObj.physics1 = p1Subject;
  dChaserObj.physics2 = p2Subject;
  dChaserObj.chemistry1 = c1Subject;
  dChaserObj.chemistry2 = c2Subject;
  dChaserObj.math1 = m1Subject;
  dChaserObj.math2 = m2Subject;
  dChaserObj.biology1 = bio1Subject;
  dChaserObj.biology2 = bio2Subject;

  onSpanClick('bangla1');
  onSpanClick('bangla2');
  onSpanClick('english1');
  onSpanClick('english2');
  onSpanClick('physics1');
  onSpanClick('physics2');
  onSpanClick('chemistry1');
  onSpanClick('chemistry2');
  onSpanClick('math1');
  onSpanClick('math2');
  onSpanClick('biology1');
  onSpanClick('biology2');
  
  showPreview();

  sendData();

}else {
  dChaserObj = JSON.parse(localStorage.getItem('dChaserObjName'));
  if(dChaserObj.userName!=' '&&dChaserObj.userName!=null){
  document.getElementById('userName').innerHTML = dChaserObj.userName;
  }else{
    dChaserObj.userName = prompt('Please enter your Nickname_','User');
    document.getElementById('userName').innerHTML = dChaserObj.userName;
  }

  //saving colors
  function keepColor(subArr) {
    let revState = subArr+'Rev';
    let comState = subArr+'Com';
    let uncomState = subArr+'Uncom';
    let revCounter = 0;
    let comCounter = 0;
    let uncomCounter = 0;

    for (let i = 0; i < dChaserObj[subArr].length; i++) {
      if (dChaserObj[subArr][i] == 'rev') {
        revCounter++;
        window[revState][i].style.color = 'green';
        window[comState][i].style.color = 'blue';
        window[uncomState][i].style.color = 'white';
      } else if (dChaserObj[subArr][i] == 'com') {
        comCounter++;
        window[comState][i].style.color = 'blue';
        window[revState][i].style.color = 'white';
        window[uncomState][i].style.color = 'white';
      } else {
        uncomCounter++;
        window[uncomState][i].style.color = 'red';
        window[comState][i].style.color = 'white';
        window[revState][i].style.color = 'white';
      }
    }
    //saving percentage
    let revised = parseInt((revCounter/dChaserObj[subArr].length)*100);
    let completed = revised+parseInt((comCounter/dChaserObj[subArr].length)*100);
    let uncompleted = 100-completed;
    let no;
    switch (subArr) {
      case 'bangla1': no = 0;
        break;
      case 'bangla2': no = 1;
        break;
      case 'english1': no = 2;
        break;
      case 'english2': no = 3;
        break;
      case 'physics1': no = 4;
        break;
      case 'physics2': no = 5;
        break;
      case 'chemistry1': no = 6;
        break;
      case 'chemistry2': no = 7;
        break;
      case 'math1': no = 8;
        break;
      case 'math2': no = 9;
        break;
      case 'biology1': no = 10;
        break;
      case 'biology2': no = 11;
    }
    shortRevPer[no].innerHTML = revised+"%";
    shortComPer[no].innerHTML = completed+"%";
    shortUncomPer[no].innerHTML = uncompleted+"%";
    
    showPreview();
  }
  //console.log(dChaserObj.bangla1);

  onSpanClick('bangla1');
  keepColor('bangla1');
  onSpanClick('bangla2');
  keepColor('bangla2');
  onSpanClick('english1');
  keepColor('english1');
  onSpanClick('english2');
  keepColor('english2');
  onSpanClick('physics1');
  keepColor('physics1');
  onSpanClick('physics2');
  keepColor('physics2');
  onSpanClick('chemistry1');
  keepColor('chemistry1');
  onSpanClick('chemistry2');
  keepColor('chemistry2');
  onSpanClick('math1');
  keepColor('math1');
  onSpanClick('math2');
  keepColor('math2');
  onSpanClick('biology1');
  keepColor('biology1');
  onSpanClick('biology2');
  keepColor('biology2');
}

//a function that will handle clicks on those spans
function onSpanClick(subName) {
  //setting serial Number
  let serial;
  switch (subName) {
    case 'bangla1': serial = 0;
      break;
    case 'bangla2': serial = 1;
      break;
    case 'english1': serial = 2;
      break;
    case 'english2': serial = 3;
      break;
    case 'physics1': serial = 4;
      break;
    case 'physics2': serial = 5;
      break;
    case 'chemistry1': serial = 6;
      break;
    case 'chemistry2': serial = 7;
      break;
    case 'math1': serial = 8;
      break;
    case 'math2': serial = 9;
      break;
    case 'biology1': serial = 10;
      break;
    case 'biology2': serial = 11;
  }
  for (let i = 0; i < dChaserObj[subName].length; i++) {
    //Handling Revision part
    let subRev = subName+'Rev';
    let subCom = subName+'Com';
    let valueDiff;
    let valueDiff2;
    window[subRev][i].onclick = function() {
      window[subRev][i].style.color = 'green';
      window[subUncom][i].style.color = 'white';
      dChaserObj[subName][i] = 'rev';
      let newValue = dChaserObj[subName].filter(function(value) {
        return value == 'rev';
      })
      let intPreviousVal = makeInteger(shortRevPer[serial].innerHTML);
      allSubRevArray[serial] = parseInt((newValue.length/dChaserObj[subName].length)*100)
      shortRevPer[serial].innerHTML = allSubRevArray[serial]+"%";
      let intUpdatedVal = makeInteger(shortRevPer[serial].innerHTML);

      //adding completed value
      let comValue = shortComPer[serial].innerHTML;
      let intComVal = parseInt(comValue.slice(0, comValue.length-1));

      valueDiff = intUpdatedVal - intPreviousVal;
      let addableVal = intComVal+ valueDiff;
      if (window[subCom][i].style.color != 'blue') {
        window[subCom][i].style.color = 'blue';
        shortComPer[serial].innerHTML = addableVal+'%';
      }
      //adding uncompleted value
      let intShortComPerVal = makeInteger(shortComPer[serial].innerHTML);
      shortUncomPer[serial].innerHTML = (100- intShortComPerVal)+"%";
      dChaserObj.allSubReviseArray = allSubRevArray;

keepRange(shortComPer,serial);
keepRange(shortUncomPer,serial);
showPreview();

      sendData();
  }
  //Handling completed part
  window[subCom][i].onclick = function() {
    window[subCom][i].style.color = 'blue';
    window[subUncom][i].style.color = 'white';
    window[subRev][i].style.color = 'white';
    dChaserObj[subName][i] = 'com';
    let newValue2 = dChaserObj[subName].filter(function(value) {
      return value == 'uncom';
    });
    let intPreviousVal2 = makeInteger(shortComPer[serial].innerHTML);
    allSubComArray[serial] = 100-(parseInt((newValue2.length/dChaserObj[subName].length)*100));
    shortComPer[serial].innerHTML = allSubComArray[serial]+"%";
    let intUpdatedVal2 = makeInteger(shortComPer[serial].innerHTML)
    valueDiff2 = intUpdatedVal2- intPreviousVal2;
    //console.log(valueDiff2)
    dChaserObj.allSubCompleteArray = allSubComArray;
    //adding uncompleted value
    let shortComPerVal = shortComPer[serial].innerHTML;
    let intShortComPerVal = parseInt(shortComPerVal.slice(0, shortUncomPer.length-1));
    shortUncomPer[serial].innerHTML = (100- intShortComPerVal)+"%";
    
    keepRange(shortComPer,serial);
    keepRange(shortUncomPer,serial);
    showPreview();

    sendData();
  }
  //Handling uncompleted part
  let subUncom = subName+'Uncom';
  window[subUncom][i].onclick = function() {
    window[subUncom][i].style.color = 'red';
    dChaserObj[subName][i] = 'uncom';

    if (window[subRev][i].style.color == 'white' && window[subCom][i].style.color == 'blue') {
      window[subCom][i].style.color = 'white';
      let comNo = dChaserObj[subName].filter(function(value) {
        return value == 'com';
      });
      let uncomNo = dChaserObj[subName].filter(function(value) {
        return value == 'uncom';
      });
      let uncomPer = parseInt((uncomNo.length/dChaserObj[subName].length)*100);
      let comPer = parseInt((comNo.length/dChaserObj[subName].length)*100);
      shortComPer[serial].innerHTML = (100- uncomPer)+'%';
      shortUncomPer[serial].innerHTML = uncomPer+'%';
    } else if (window[subRev][i].style.color == 'green' && window[subCom][i].style.color == 'blue') {
      window[subRev][i].style.color = 'white';
      window[subCom][i].style.color = 'white';
      let reviseNo = dChaserObj[subName].filter(function(value) {
        return value == 'rev';
      });
      let uncomNo = dChaserObj[subName].filter(function(value) {
        return value == 'uncom';
      });
      let revisePer = parseInt((reviseNo.length/dChaserObj[subName].length)*100);
      let uncomPer = parseInt((uncomNo.length/dChaserObj[subName].length)*100);
      let comPer = 100- revisePer- uncomPer;
      shortRevPer[serial].innerHTML = revisePer+'%';
      shortComPer[serial].innerHTML = (100- uncomPer)+'%';
      shortUncomPer[serial].innerHTML = uncomPer+'%';
    }
    dChaserObj.allSubUncompleteArray = allSubUncomArray;
    
    keepRange(shortComPer,serial);
    keepRange(shortUncomPer,serial);
    showPreview();
    
    sendData();
  }
}
}


//sending data to localStorage
function sendData() {
wholeText = JSON.stringify(dChaserObj);
localStorage.setItem('dChaserObjName', wholeText);
}
//making intrger
function makeInteger(string) {
return parseInt(string.slice(0, string.length-1));
}
// keep number in Range
function keepRange(ele,serial){
  let intEle = makeInteger(ele[serial].innerHTML);
  if(intEle >100){
    intEle = 100;
    ele[serial].innerHTML = intEle+'%';
  }
  else if(intEle <0){
    intEle = 0;
    ele[serial].innerHTML = intEle+'%';
  }
}
function showPreview(){
  //revise
  let rCounter = 0;
  for(let i=0;i<12;i++){
    rCounter = rCounter+makeInteger(shortRevPer[i].innerHTML);
  }
  persentage[0].innerHTML = parseInt(rCounter/12)+'%';
  reviseLevel.style.width = parseInt(rCounter/12)+'%';
  
  //complete
  let cCounter = 0;
  for(let i=0;i<12;i++){
    cCounter = cCounter+makeInteger(shortComPer[i].innerHTML);
  }
  //console.log(cCounter);
  if(parseInt(cCounter/12)<=100){
    persentage[1].innerHTML = parseInt(cCounter/12)+'%';
    completeLevel.style.width = parseInt(cCounter/12)+'%';
  }else if(parseInt(cCounter/12)>100){
    persentage[1].innerHTML = 100+'%';
    completeLevel.style.width = 100+'%';
  }
  //uncomplete
  let unCounter = 100- makeInteger(persentage[1].innerHTML);
  //console.log(unCounter);
  if(unCounter>=0){
    persentage[2].innerHTML = unCounter+'%';
    uncomLevel.style.width = unCounter+'%';
  }else if(unCounter<0){
    persentage[2].innerHTML = 0+'%';
    uncomLevel.style.width = 0+'%';
  }
}

//handling the guide part
let guideCounter = 0;
for(let i=0; i<2;i++){
  document.querySelectorAll('.guide1 p')[i].onclick = function(){
        guideCounter++;
    if(guideCounter%2!=0){
      document.getElementById('homeScreen').innerHTML = 'Add to home screen🔼';
      document.getElementById('useCase').innerHTML = 'See best usecase🔼';
    document.querySelectorAll('.guide2')[i].style.display = 'block';
      if(document.querySelectorAll('.guide2')[1].style.display =='block'){
        document.querySelector('footer').style.height='380px';
      }
    }else{
      document.getElementById('homeScreen').innerHTML = 'Add to home screen🔽';
     document.getElementById('useCase').innerHTML = 'See best usecase🔽';
    document.querySelectorAll('.guide2')[i].style.display = 'none';
    if(document.querySelectorAll('.guide2')[1].style.display =='none'){
        document.querySelector('footer').style.height='280px';
      }
    }
  }
}

//service worker starts 
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}