let btnSelector = document.querySelectorAll(".switch-m");
let btnMover = document.querySelectorAll(".switch-s");
const diceClick = document.getElementById("dice");
let range = document.getElementById("range");
const clip = document.getElementById("clipboard");
var passId = document.getElementById("passId");
var card = document.getElementById("Card");

diceClick.addEventListener('click', paste);
clip.addEventListener("click", copy);

range.oninput = popRange;


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

popRange();

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
  for (var i = 0; i < 301; i++) {
    if (range.value == i) {
      rangeMeter.innerHTML = i;
    }
  }
}

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
             <ol class="ol" ${index+1}id='thisId'>
             <li class="elOne">${element[0]}</li>
             <li class="elTwo">${element[1]}</li>
             <input class="elThi" id='thisCopy'value='${element[2]}' type='text' readonly>
             <div class="eyeCopy">
              <div class="eye" id='theEye'>
              <i class='fa fa-eye'></i>
              </div>
              <div class="eye" id='theEye'>
              <i class='fa fa-clipboard'></i>
              </div>
              <div class='eye' onclick='deleteTask(${index})'>
                <i class='fa fa-trash'></i>
              </div>
             </div>
             <div class="line"></div>
             </ol>
              `
  });
  mainBody.innerHTML = str;
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


for (const eleThi of elThiPassInn) {
  eleThi.addEventListener('click', () => {
    alert(eleThi.value)

    var copyText = eleThi;
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    document.execCommand("copy");
  })
}


function copyCall() {
 // alert(1)
  if (passId.value == '') {
    /* textAlDiv.classList.add('calNot');
    textAle.innerHTML = "Please Generate A Password First.";
    setTimeout(() => {
      textAlDiv.classList.remove('calNot');
    }, 2000)
  };
  else {
    card.classList.add('copyCard');
  }*/
  }
}

function nopeCard() {
  // card.classList.remove('copyCard');
}

function copy() {
  var radCheck = document.getElementById('checkNot');
  //  if (radCheck.checked) {
  /* var copyText = passId;
   copyText.select();
   copyText.setSelectionRange(0, 9999);
   document.execCommand("copy");

   passId.blur();

   card.classList.remove('copyCard');

   textAlDiv.classList.add('calNot');

   textAle.innerHTML = "Password Copied But Not Saved.";

   setTimeout(() => {
     textAlDiv.classList.remove('calNot');
   }, 2000)*/

  //  }
  //  else {
//  alert(confirm("Yow want to copy -" + passId.value));
  var copyText = passId;
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  document.execCommand("copy");

  passId.blur();
  getThePassword()

  /*   card.classList.remove('copyCard');

     textAlDiv.classList.add('calNot');

     textAle.innerHTML = "Password Copied And Saved.";*/

  /*  setTimeout(() => {
      textAlDiv.classList.remove('calNot');
    }, 2000)*/

  // }
}


function plus() {
  document.getElementById("range").value++;

  popRange();
}

function minus() {
  document.getElementById("range").value--;

  popRange();
};

function showHistory() {
  histM.classList.toggle("h-m");
  histS.classList.toggle("h-s");
}

function clearLocal() {
  let docDel = document.getElementById("delCall");

  docDel.classList.add('toCall');
  /* if (confirm("This actions can not be reversed. Are you sure?")) {
     localStorage.clear()
   }
   else {
     undefined
   }*/
  updateList()
}

function yup() {
  localStorage.clear();
  updateList()

  rightCall.classList.add('rightCall');

  setTimeout(() => {
    rightCall.classList.remove('rightCall');
  }, 2000)

  setTimeout(() => {
    let docDel = document.getElementById("delCall");
    docDel.classList.remove('toCall');
  }, 10)
}

function nope() {
  let docDel = document.getElementById("delCall");
  docDel.classList.remove('toCall');
}

function callNav() {
  nav.classList.add("navM");
  navM.style.display = 'block';
}
/*navM.onclick = function() {
  nav.classList.remove("navM");
  navM.style.display = 'none';
}
*/
