let btnSelector = document.querySelectorAll(".switch-m");
let btnMover = document.querySelectorAll(".switch-s");
const diceClick = document.getElementById("dice");
let range = document.getElementById("range");
let passId = document.getElementById("passId");
let card = document.getElementById("Card");

diceClick.addEventListener('click', paste);
//clip.addEventListener("click", copy);

range.oninput = popRange;

window.onload = function() {
  let letLoad = document.getElementById('letLoad');
  let letZoom = document.getElementById('letZoom');

  setTimeout(() => {
    letLoad.classList.add('windFall');
    letZoom.classList.add('zoomTog')
  }, 140)
}
btnSelector[0].onclick = function() {
  btnMover[0].classList.add("switchMove");
  btnMover[1].classList.remove("switchMove");
  btnMover[2].classList.remove("switchMove");
  btnMover[3].classList.remove("switchMove");
  btnMover[4].classList.remove("switchMove");
  btnMover[5].classList.remove("switchMove");
  btnSelector[0].classList.add("switch-bg");
  btnSelector[1].classList.remove("switch-bg");
  btnSelector[2].classList.remove("switch-bg");
  btnSelector[3].classList.remove("switch-bg");
  btnSelector[4].classList.remove("switch-bg");
  btnSelector[5].classList.remove("switch-bg");
}
btnSelector[1].onclick = function() {
  btnMover[1].classList.add("switchMove");
  btnMover[0].classList.remove("switchMove");
  btnMover[2].classList.remove("switchMove");
  btnMover[3].classList.remove("switchMove");
  btnMover[4].classList.remove("switchMove");
  btnMover[5].classList.remove("switchMove");
  btnSelector[1].classList.add("switch-bg");
  btnSelector[0].classList.remove("switch-bg");
  btnSelector[2].classList.remove("switch-bg");
  btnSelector[3].classList.remove("switch-bg");
  btnSelector[4].classList.remove("switch-bg");
  btnSelector[5].classList.remove("switch-bg");

}
btnSelector[2].onclick = function() {
  btnMover[2].classList.add("switchMove");
  btnMover[0].classList.remove("switchMove");
  btnMover[1].classList.remove("switchMove");
  btnMover[3].classList.remove("switchMove");
  btnMover[4].classList.remove("switchMove");
  btnMover[5].classList.remove("switchMove");
  btnSelector[2].classList.add("switch-bg");
  btnSelector[0].classList.remove("switch-bg");
  btnSelector[1].classList.remove("switch-bg");
  btnSelector[3].classList.remove("switch-bg");
  btnSelector[4].classList.remove("switch-bg");
  btnSelector[5].classList.remove("switch-bg");
}
btnSelector[3].onclick = function() {
  btnMover[3].classList.add("switchMove");
  btnMover[0].classList.remove("switchMove");
  btnMover[1].classList.remove("switchMove");
  btnMover[2].classList.remove("switchMove");
  btnMover[4].classList.remove("switchMove");
  btnMover[5].classList.remove("switchMove");
  btnSelector[3].classList.add("switch-bg");
  btnSelector[0].classList.remove("switch-bg");
  btnSelector[1].classList.remove("switch-bg");
  btnSelector[2].classList.remove("switch-bg");
  btnSelector[4].classList.remove("switch-bg");
  btnSelector[5].classList.remove("switch-bg");
}
btnSelector[4].onclick = function() {
  btnMover[4].classList.add("switchMove");
  btnMover[0].classList.remove("switchMove");
  btnMover[1].classList.remove("switchMove");
  btnMover[2].classList.remove("switchMove");
  btnMover[3].classList.remove("switchMove");
  btnMover[5].classList.remove("switchMove");
  btnSelector[4].classList.add("switch-bg");
  btnSelector[0].classList.remove("switch-bg");
  btnSelector[1].classList.remove("switch-bg");
  btnSelector[2].classList.remove("switch-bg");
  btnSelector[3].classList.remove("switch-bg");
  btnSelector[5].classList.remove("switch-bg");
}
btnSelector[5].onclick = function() {
  btnMover[5].classList.add("switchMove");
  btnMover[0].classList.remove("switchMove");
  btnMover[1].classList.remove("switchMove");
  btnMover[2].classList.remove("switchMove");
  btnMover[3].classList.remove("switchMove");
  btnMover[4].classList.remove("switchMove");
  btnSelector[5].classList.add("switch-bg");
  btnSelector[0].classList.remove("switch-bg");
  btnSelector[1].classList.remove("switch-bg");
  btnSelector[2].classList.remove("switch-bg");
  btnSelector[3].classList.remove("switch-bg");
  btnSelector[4].classList.remove("switch-bg");
}

//popRange();

let settingPopUp = document.getElementById('settings');

settingPopUp.addEventListener('click', () => {
  let settingRot = document.getElementById('toRs');
  let settScale = document.getElementById('scale');
  let settHeight = document.getElementById('height');

  settingRot.classList.toggle('rotSet');
  settScale.classList.toggle('scaleInc');
  settHeight.classList.toggle('heightInc');
})

function popRange() {
  for (let i = 0; i < 301; i++) {
    if (range.value == i) {
      rangeMeter.innerHTML = i;

      let spanIconGrab = document.getElementById('shield');
      let suggestion = document.getElementById('suggestion');
      // let thisNav = document.getElementById('thisNav');

      if (range.value < 9) {
        document.body.style.backgroundColor = '#D2364E';
        spanIconGrab.innerHTML = 'gpp_bad';
        suggestion.innerHTML = 'Weak Password';
        //  thisNav.style.backgroundColor = '#D2364E';
      }
      else if (range.value > 11 && range.value < 18) {
        document.body.style.backgroundColor = '#B95140';
        spanIconGrab.innerHTML = 'privacy_tip';
        suggestion.innerHTML = 'Fairly Strong Password';
        //  thisNav.style.backgroundColor = '#B95140';
      }
      else if (range.value > 17 && range.value < 20) {
        document.body.style.backgroundColor = '#1E7E5A';
        spanIconGrab.innerHTML = 'verified_user';
        suggestion.innerHTML = 'Strong Password';
        //  thisNav.style.backgroundColor = '#1E7E5A';
      }
      else if (range.value > 20) {
        document.body.style.backgroundColor = '#3A6ABC';
        spanIconGrab.innerHTML = 'verified_user';
        suggestion.innerHTML = 'Very Strong Password';
        //  thisNav.style.backgroundColor = '#3A6ABC';
      }
    }
  }
  passId.value = generate();

  if (passId.value === '') {
    let disSecure = document.getElementById('disSecure');

    disSecure.style.opacity = '0';
  }
  else {
    let disSecure = document.getElementById('disSecure');

    disSecure.style.opacity = '1';
  }
}
passId.value = generate();
disSecure.style.opacity = '1';

function generate() {
  var pass = '';
  var digit;
  if (btnMover[0].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz11223344556677889900@_-=:/!+@_-+:/?@@@____";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else if (btnMover[1].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "abcdefghijklmnopqrstuvwxyz";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else if (btnMover[2].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else if (btnMover[3].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "abcdefghijklmnopqrstuvwxyz11223344556677889900@_-=:/!+@@&&";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else if (btnMover[4].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ11223344556677889900@_-=:/!+@@&&";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else if (btnMover[5].classList.contains("switchMove")) {
    for (var i = 1; i <= range.value; i++) {
      digit = "11223344556677889900";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  else {
    for (var i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  return pass;
}

function paste() {
  var toR = document.getElementById("toR")
  toR.classList.add("rotate");
  setTimeout(() => {
    toR.classList.remove("rotate");
  }, 300)
  passId.value = generate();

  if (passId.value === '') {
    let disSecure = document.getElementById('disSecure');

    disSecure.style.opacity = '0';
  }
  else {
    let disSecure = document.getElementById('disSecure');

    disSecure.style.opacity = '1';
  }
}

updateList()

function getThePassword() {
  var a = new Date();
  var t = [a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + "&nbsp;" + a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear()];

  var passInfo = document.getElementById("passId").value;
  var passPort = nameId.value;

  if (localStorage.getItem('itemsJson') == null) {
    thisArray = [];
    thisArray.push([passPort, t[0], passInfo]);
    localStorage.setItem('itemsJson', JSON.stringify(thisArray));
  }
  else {
    thisArraystr = localStorage.getItem('itemsJson');
    thisArray = JSON.parse(thisArraystr);
    thisArray.push([passPort, t[0], passInfo]);
    localStorage.setItem('itemsJson', JSON.stringify(thisArray));
  }
  updateList();
}

function updateList() {
  if (localStorage.getItem('itemsJson') == null) {
    thisArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(thisArray));
  }
  else {
    thisArraystr = localStorage.getItem('itemsJson');
    thisArray = JSON.parse(thisArraystr);
  }
  let mainBody = document.getElementById("mainBody");
  let str = '';
  thisArray.forEach((element, index) => {


    str += `
             <ol class="ol" id='thisId' ${index+1}>
             <li class="elOne">${element[0]}</li>
             <li class="elTwo">${element[1]}</li>
             <input class="elThi" id='thisCopy' value='${element[2]}' type='password' readonly/>
             <div class="eyeCopy">
              <div class="eye" id='theEye' onclick='passTypeChange(${index})'>
              <span class="material-symbols-rounded thisWhite thisTypeIcon">
visibility
</span>
              </div>
              <div class="eye" id='theEye' onclick='runCopy(${index})'>
              <span class="material-symbols-rounded thisWhite thisCopyIcon" id='changeClip'>
content_copy
</span>
              </div>
              <div class='eye' onclick='deleteTask(${index})'>
              <span class="material-symbols-rounded thisWhite">
              delete
              </span>
              </div>
             </div>
             <div class="line"></div>
             </ol>
              `
  });
  mainBody.innerHTML = str;
}

function passTypeChange(element) {

  let thisTypeIcon = document.querySelectorAll('.thisTypeIcon');


  if (thisTypeIcon[element].innerHTML === 'visibility_off') {
    thisTypeIcon[element].innerHTML = 'visibility';
  }
  else {
    thisTypeIcon[element].innerHTML = 'visibility_off';
  }

  let elThi = document.querySelectorAll('.elThi');

  let passField = 'password';
  let textField = 'text';

  if (elThi[element].type === 'text') {
    elThi[element].type = passField;
  }
  else {
    elThi[element].type = textField;
  }
}

function deleteTask(itemIndex) {
  thisArray.sort()
  thisArraystr = localStorage.getItem('itemsJson');
  thisArray = JSON.parse(thisArraystr);
  if (confirm("Do you want to Delete?")) {
    thisArray.splice(itemIndex, 1);
  }
  localStorage.setItem('itemsJson', JSON.stringify(thisArray));

  updateList();
}

let elThiPassInn = document.querySelectorAll('.elThi');


function runCopy(index) {
  let parent = document.getElementById('parent');
  parent.value = thisArray[index][2];

  let changeCopy = document.querySelectorAll('.thisCopyIcon');

  changeCopy[index].innerHTML = 'done';

  var copyText = parent;
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  document.execCommand("copy");

  parent.blur();
}
let copyCall = document.getElementById('copyCall');

copyCall.addEventListener('click',()=> {
  let radCheck = document.getElementById('checkConsent');
  
  if(passId.value != '') {
    if(radCheck.checked != true) {
      let copyPass = passId;
      copyPass.select();
      copyPass.setSelectionRange(0,9999);
      document.execCommand('copy');
      
      getThePassword();
      passId.blur();
    }
    else {
      let copyPass = passId;
      copyPass.select();
      copyPass.setSelectionRange(0,9999);
      document.execCommand('copy');
      passId.blur();
    }
  }
})

let purgeBtn = document.getElementById('purge');

purgeBtn.addEventListener('click', () => {
  let callPurge = document.getElementById('callPurge');
  let purgeRn = document.getElementById('purgeRn');

  callPurge.classList.add('transpurge')

  purgeRn.disabled = true;

  let purgeEnable = 5;

  let interval = setInterval(() => {
    purgeEnable--;
    let purgeTimeOut = document.getElementById('purgeTimeOut');

    purgeTimeOut.innerHTML = purgeEnable + 's';
    purgeTimeOut.style.opacity = '1';

    if (purgeEnable == 0) {
      purgeRn.disabled = false;
      purgeTimeOut.style.opacity = '0';
    }

    if (purgeEnable <= 0) {
      clearInterval(interval)
    }

  }, 1000)
})

let purgeRn = document.getElementById('purgeRn');

purgeRn.addEventListener('click', () => {
  localStorage.clear()
  
  updateList();
  let callPurge = document.getElementById('callPurge');
  callPurge.classList.remove('transpurge')

})

let cancelPurge = document.getElementById('cancelPurge');

cancelPurge.addEventListener('click', () => {
  let callPurge = document.getElementById('callPurge');
  callPurge.classList.remove('transpurge')

})



function navCall() {
  let thisNav = document.getElementById('thisNav');
  let bOne = document.getElementById('bOne');
  let bTwo = document.getElementById('bTwo');
  let bThi = document.getElementById('bThi');

  thisNav.classList.toggle('nav-tog');

  bOne.classList.toggle('b1Tog');
  bThi.classList.toggle('b2Tog');
}

function plus() {
  document.getElementById("range").value++;

  popRange();
}

function minus() {
  document.getElementById("range").value--;

  popRange();
};
