const canva = document.getElementById("console-board");
const bColorPicker = document.getElementById("color-picker");
const tColorPicker = document.getElementById("text-color-picker");
const tHandle = document.getElementById("t-hanlde");
const tHandleCWrite = document.getElementById("text-color-picker");
const tHandleTWrite = document.getElementById("twitterID");

bColorPicker.addEventListener('change', myFunc);
tHandleCWrite.addEventListener('change', myFunc);
tHandleTWrite.addEventListener('change', myFunc2);

function myFunc(params) {
    console.log(bColorPicker.value);
    canva.style.backgroundColor = bColorPicker.value;
    tHandle.style.color = tHandleCWrite.value;
};

function myFunc2(params) {
    tHandle.innerHTML = tHandleTWrite.value
}
myFunc2();

function nDisplay(params) {
    document.getElementById('consoleF').style.display = "none"
}

function bDisplay(params) {
    document.getElementById('consoleF').style.display = "block"  
}

// myFunc();

function downloadimage() {
  /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
  var container = document.getElementById("console-board");; /* full page */
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "Today_game_banner.jpg";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
  });
}

const theImage = document.getElementById("console-image-avatar");
const avatar1 = document.getElementById('cA1')
const avatar2 = document.getElementById('cA2')
const avatar3 = document.getElementById('cA3')
const avatar4 = document.getElementById('cA4')
const avatar5 = document.getElementById('cA5')

// function changeAva(e) {
//     if (avatar1.click == true) {
//         alert('yes')
//     }    
// }

avatar1.addEventListener('click', () => { theImage.src = avatar1.src })
avatar2.addEventListener('click', () => { theImage.src = avatar2.src })
avatar3.addEventListener('click', () => { theImage.src = avatar3.src })
avatar4.addEventListener('click', () => { theImage.src = avatar4.src })
avatar5.addEventListener('click', () => { theImage.src = avatar5.src })

