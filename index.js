let btnSelector = document.querySelectorAll(".switch-m");
let btnMover = document.querySelectorAll(".switch-s");
const diceClick = document.getElementById("dice");
let range = document.getElementById("range");
let passId = document.getElementById("passId");
let card = document.getElementById("Card");

diceClick.addEventListener("click", paste);
//clip.addEventListener("click", copy);

range.oninput = popRange;

window.onload = function () {
  let letLoad = document.getElementById("letLoad");
  let letZoom = document.getElementById("letZoom");

  setTimeout(() => {
    letLoad.classList.add("windFall");
    letZoom.classList.add("zoomTog");
  }, 140);
};
btnSelector[0].onclick = function () {
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
};
btnSelector[1].onclick = function () {
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
};
btnSelector[2].onclick = function () {
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
};
btnSelector[3].onclick = function () {
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
};
btnSelector[4].onclick = function () {
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
};
btnSelector[5].onclick = function () {
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
};

//popRange();

let settingPopUp = document.getElementById("settings");

settingPopUp.addEventListener("click", () => {
  let settingRot = document.getElementById("toRs");
  let settScale = document.getElementById("scale");
  let settHeight = document.getElementById("height");

  settingRot.classList.toggle("rotSet");
  settScale.classList.toggle("scaleInc");
  settHeight.classList.toggle("heightInc");
});

function popRange() {
  for (let i = 0; i < 301; i++) {
    if (range.value == i) {
      rangeMeter.innerHTML = i;

      let spanIconGrab = document.getElementById("shield");
      let suggestion = document.getElementById("suggestion");
      // let thisNav = document.getElementById('thisNav');

      if (range.value < 9) {
        document.body.style.backgroundColor = "#D2364E";
        spanIconGrab.innerHTML = "gpp_bad";
        suggestion.innerHTML = "Weak Password";
        //  thisNav.style.backgroundColor = '#D2364E';
      } else if (range.value > 11 && range.value < 18) {
        document.body.style.backgroundColor = "#B95140";
        spanIconGrab.innerHTML = "privacy_tip";
        suggestion.innerHTML = "Fairly Strong Password";
        //  thisNav.style.backgroundColor = '#B95140';
      } else if (range.value > 17 && range.value < 21) {
        document.body.style.backgroundColor = "#1E7E5A";
        spanIconGrab.innerHTML = "verified_user";
        suggestion.innerHTML = "Strong Password";
        //  thisNav.style.backgroundColor = '#1E7E5A';
      } else if (range.value > 20) {
        document.body.style.backgroundColor = "#3A6ABC";
        spanIconGrab.innerHTML = "verified_user";
        suggestion.innerHTML = "Very Strong Password";
        //  thisNav.style.backgroundColor = '#3A6ABC';
      }
    }
  }
  passId.value = generate();

  if (passId.value === "") {
    let disSecure = document.getElementById("disSecure");

    disSecure.style.opacity = "0";
  } else {
    let disSecure = document.getElementById("disSecure");

    disSecure.style.opacity = "1";
  }
}
passId.value = generate();
disSecure.style.opacity = "1";

function generate() {
  let pass = "";
  let digit;
  if (btnMover[0].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz11223344556677889900@@@@@@######______&&&&&&------+++++(((((())))******??????``````~~~~~~";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else if (btnMover[1].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit = "abcdefghijklmnopqrstuvwxyz";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else if (btnMover[2].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else if (btnMover[3].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit =
        "abcdefghijklmnopqrstuvwxyz11223344556677889900@@@@@@######______&&&&&&------+++++(((((())))******??????``````~~~~~~";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else if (btnMover[4].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ11223344556677889900@@@@@@######______&&&&&&------+++++(((((())))******??????``````~~~~~~";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else if (btnMover[5].classList.contains("switchMove")) {
    for (let i = 1; i <= range.value; i++) {
      digit = "11223344556677889900";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  } else {
    for (let i = 1; i <= range.value; i++) {
      digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let char = Math.floor(Math.random() * digit.length);
      pass += digit.charAt(char);
    }
  }
  return pass;
}

function paste() {
  let toR = document.getElementById("toR");
  toR.classList.add("rotate");
  setTimeout(() => {
    toR.classList.remove("rotate");
  }, 300);
  passId.value = generate();

  if (passId.value === "") {
    let disSecure = document.getElementById("disSecure");

    disSecure.style.opacity = "0";
  } else {
    let disSecure = document.getElementById("disSecure");

    disSecure.style.opacity = "1";
  }
}

updateList();

function getThePassword() {
  let a = new Date();
  let t = [
    a.getHours() +
      ":" +
      a.getMinutes() +
      ":" +
      a.getSeconds() +
      "&nbsp;" +
      a.getDate() +
      "/" +
      a.getMonth() +
      "/" +
      a.getFullYear(),
  ];

  let passInfo = document.getElementById("passId").value;
  let passPort = nameId.value;
  let imageLink = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${passPort}&size=128`;

  if (localStorage.getItem("itemsJson") == null) {
    thisArray = [];
    thisArray.push([passPort, t[0], passInfo, imageLink]);
    localStorage.setItem("itemsJson", JSON.stringify(thisArray));
  } else {
    thisArraystr = localStorage.getItem("itemsJson");
    thisArray = JSON.parse(thisArraystr);
    thisArray.push([passPort, t[0], passInfo, imageLink]);
    localStorage.setItem("itemsJson", JSON.stringify(thisArray));
  }
  updateList();
}

function updateList() {
  if (localStorage.getItem("itemsJson") == null) {
    thisArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(thisArray));
  } else {
    thisArraystr = localStorage.getItem("itemsJson");
    thisArray = JSON.parse(thisArraystr);
  }
  let mainBody = document.getElementById("mainBody");
  let str = "";
  thisArray.forEach((element, index) => {
    str += `
    <div class="mainDiv">
    <div class="flexDivWhichCenters">
             <ol class="ol" id='thisId' ${index + 1}>
             <li class="elOne">${element[0]}</li>
             <li class="elTwo">${element[1]}</li>
             <input class="elThi" id='thisCopy' value='${
               element[2]
             }' type='password' readonly/>
              <li>
             
              <img id="imageCheckerID" class="favicon" src="${element[3]}"/>
              </li>
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
             </ol>
             </div>
             </div>
              `;
  });
  mainBody.innerHTML = str;
}

function passTypeChange(element) {
  let thisTypeIcon = document.querySelectorAll(".thisTypeIcon");

  if (thisTypeIcon[element].innerHTML === "visibility_off") {
    thisTypeIcon[element].innerHTML = "visibility";
  } else {
    thisTypeIcon[element].innerHTML = "visibility_off";
  }

  let elThi = document.querySelectorAll(".elThi");

  let passField = "password";
  let textField = "text";

  if (elThi[element].type === "text") {
    elThi[element].type = passField;
  } else {
    elThi[element].type = textField;
  }
}

function deleteTask(itemIndex) {
  thisArray.sort();
  thisArraystr = localStorage.getItem("itemsJson");
  thisArray = JSON.parse(thisArraystr);

  thisArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(thisArray));

  updateList();
}

let elThiPassInn = document.querySelectorAll(".elThi");

function runCopy(index) {
  let parent = document.getElementById("parent");
  parent.value = thisArray[index][2];

  let changeCopy = document.querySelectorAll(".thisCopyIcon");

  changeCopy[index].innerHTML = "done";

  let copyText = parent;
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  document.execCommand("copy");

  parent.blur();
}

let clipIcon = document.getElementById("clipboard");

clipIcon.addEventListener("click", () => {
  let callCopyCard = document.getElementById("thisIsCopy");

  callCopyCard.classList.add("copyTogg");
});

let noCopy = document.getElementById("noCopy");

noCopy.addEventListener("click", () => {
  let callCopyCard = document.getElementById("thisIsCopy");

  callCopyCard.classList.remove("copyTogg");
});

let copyCall = document.getElementById("copyCall");

copyCall.addEventListener("click", () => {
  let radCheck = document.getElementById("checkConsent");
  let alertId = document.getElementById("alertId");

  alertId.classList.add("alertTogg");

  setTimeout(() => {
    alertId.classList.remove("alertTogg");
  }, 2000);

  if (passId.value != "") {
    if (radCheck.checked != true) {
      let copyPass = passId;
      copyPass.select();
      copyPass.setSelectionRange(0, 9999);
      document.execCommand("copy");

      getThePassword();
      passId.blur();
    } else {
      let copyPass = passId;
      copyPass.select();
      copyPass.setSelectionRange(0, 9999);
      document.execCommand("copy");
      passId.blur();
    }
  }

  setTimeout(() => {
    let callCopyCard = document.getElementById("thisIsCopy");

    callCopyCard.classList.remove("copyTogg");
  }, 0);
});

let purgeBtn = document.getElementById("purge");

purgeBtn.addEventListener("click", () => {
  let callPurge = document.getElementById("callPurge");
  let purgeRn = document.getElementById("purgeRn");

  callPurge.classList.add("transpurge");

  purgeRn.disabled = true;

  let purgeEnable = 5;

  let interval = setInterval(() => {
    purgeEnable--;
    let purgeTimeOut = document.getElementById("purgeTimeOut");

    purgeTimeOut.innerHTML = purgeEnable + "s";
    purgeTimeOut.style.opacity = "1";

    if (purgeEnable == 0) {
      purgeRn.disabled = false;
      purgeTimeOut.style.opacity = "0";
    }

    if (purgeEnable <= 0) {
      clearInterval(interval);
    }
  }, 1000);
});

let purgeRn = document.getElementById("purgeRn");

purgeRn.addEventListener("click", () => {
  localStorage.clear();

  updateList();
  let callPurge = document.getElementById("callPurge");
  callPurge.classList.remove("transpurge");
});

let cancelPurge = document.getElementById("cancelPurge");

cancelPurge.addEventListener("click", () => {
  let callPurge = document.getElementById("callPurge");
  callPurge.classList.remove("transpurge");
});

function navCall() {
  let thisNav = document.getElementById("thisNav");
  let bOne = document.getElementById("bOne");
  let bTwo = document.getElementById("bTwo");
  let bThi = document.getElementById("bThi");

  thisNav.classList.toggle("nav-tog");

  bOne.classList.toggle("b1Tog");
  bThi.classList.toggle("b2Tog");
}

function plus() {
  document.getElementById("range").value++;

  popRange();
}

function minus() {
  document.getElementById("range").value--;

  popRange();
}
console.log(thisArray);

// let searchFilter = thisArray.filter(letFilter);

const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: true,
  // shouldSort: true,
  // includeMatches: false,
  findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["0"],
};
let inputField = document.getElementById("thisSearchBar");

inputField.onkeyup = function ret() {
  console.log(1);
  const fuse = new Fuse(thisArray, fuseOptions);
  let inputField = document.getElementById("thisSearchBar").value;
  const searchPattern = inputField;
  let arrSearch = fuse.search(searchPattern);
  let srcOne = document.getElementById("srcOne");
  let srcTwo = document.getElementById("srcTwo");
  let srcThi = document.getElementById("srcThi");
  let userNameOne = document.getElementById("userNameOne");
  let userNameTwo = document.getElementById("userNameTwo");
  let userNameThi = document.getElementById("userNameThi");
  let passWordOne = document.getElementById("passWordOne");
  let passWordTwo = document.getElementById("passWordTwo");
  let passWordThi = document.getElementById("passWordThi");

  // return fuse.search(searchPattern);
  let searchArr = [];
  arrSearch.forEach((element) => {
    searchArr.push(element);
  });

  if (searchArr[0] == undefined) {
    srcOne.src = "";
    userNameOne.innerHTML = "";
    passWordOne.innerHTML = "";
  } else {
    userNameOne.innerHTML = searchArr[0].item[0];
    passWordOne.innerHTML = searchArr[0].item[2];
    srcOne.src = searchArr[0].item[3];
  }
  if (searchArr[1] == undefined) {
    srcTwo.src = "";
    userNameTwo.innerHTML = "";
    passWordTwo.innerHTML = "";
  } else {
    userNameTwo.innerHTML = searchArr[1].item[0];
    passWordTwo.innerHTML = searchArr[1].item[2];
    srcTwo.src = searchArr[1].item[3];
  }
  if (searchArr[2] == undefined) {
    srcThi.src = "";
    userNameThi.innerHTML = "";
    passWordThi.innerHTML = "";
  } else {
    userNameThi.innerHTML = searchArr[2].item[0];
    passWordThi.innerHTML = searchArr[2].item[2];
    srcThi.src = searchArr[2].item[3];
  }
};

let searchBarBtn = document.getElementById("searchBarBtn");
searchBarBtn.onclick = function () {
  let divHeight = document.getElementById("divHeight");
  let btnInner = document.getElementById("btnInner");
  let inputField = document.getElementById("thisSearchBar");
  inputField.focus();
  if (btnInner.innerText == "close") {
    btnInner.innerText = "search";
  } else {
    btnInner.innerText = "close";
  }
  divHeight.classList.toggle("inputToggle");
};
