// Git Elements From DOM
const container = document.querySelector('.container');
const headerContainer = document.querySelector('.container .header');
const extensionsContainer = document.querySelector('.container .extensions');
const lightDarkBtn = document.querySelector('.container .header .right button');
const extensionBoxes = document.querySelectorAll('.extensions .content .extension-box');
const activeBtns = document.querySelectorAll('.extensions .content .extension-box button:last-of-type');
const filterBts = document.querySelectorAll('.extensions .filter-extensions .buttons button');
const removeBtns = document.querySelectorAll('.extensions .content .extension-box .buttons button:first-of-type');


const modeOptionLocalStorage = localStorage.getItem('modeOption');
if (modeOptionLocalStorage === 'light') {
  container.classList.add('light');
  headerContainer.classList.add('light');
  extensionsContainer.classList.add('light');
  lightDarkBtn.firstElementChild.src = 'images/icon-moon.svg';
}

// Toggle Light Class Change Light Button Content
// 1. Creat Mode Options Elements
function modeOptions() {
  const options = document.createElement('div');
  const dark = document.createElement('button');
  const light = document.createElement('button');
  dark.appendChild(document.createTextNode('Dark'));
  light.appendChild(document.createTextNode('Light'));
  options.appendChild(dark);
  options.appendChild(light);
  document.querySelector('.container .header .right').appendChild(options);
  dark.className = 'dark';
  light.className = 'light';
  options.className = 'options';
}
modeOptions();
// 2. Displaying Mode Options When Mode Btn is Clicked
lightDarkBtn.addEventListener('click', function () {
  const options = document.querySelector('.container .header .right .options');
  if (options) {
    options.classList.toggle('display');
  }
});
// 3. Toggle Class
document.querySelectorAll('.container .header .right .options button').forEach(div => {
  div.addEventListener('click', function (e) {
    const options = document.querySelector('.container .header .right .options');
    if (e.target.classList.contains('light')) {
      // Setting Page to Light Mode
      container.classList.add('light');
      headerContainer.classList.add('light');
      extensionsContainer.classList.add('light');
      lightDarkBtn.firstElementChild.src = 'images/icon-moon.svg';
      options.classList.remove('display');
      // Storing Mode Option On Local Storage
      localStorage.setItem('modeOption', 'light');
    } else {
      // Setting Page to Dark Mode 
      container.classList.remove('light');
      headerContainer.classList.remove('light');
      extensionsContainer.classList.remove('light');
      lightDarkBtn.firstElementChild.src = 'images/icon-sun.svg';
      options.classList.remove('display');
      // Storing Mode Option On Local Storage
      localStorage.setItem('modeOption', 'dark');
    }
  });
});

// Setting Class Active to Filtter Buttons
filterBts.forEach(filterBt => {
  filterBt.addEventListener('click', function (e) {
    filterBts.forEach(filterBt => filterBt.classList.remove('active'));
    e.target.classList.add('active');
  });
});


// Setting  an Active Class to All Extensions Boxes
extensionBoxes.forEach(extensionBox => extensionBox.classList.add('active'));

// Toggle Active Class to Extension Box
activeBtns.forEach(activeBtn => {
  activeBtn.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.toggle('active');
  });
});

// Filtter Extensions
filterBts.forEach(filterBt => {
  filterBt.addEventListener('click', function (e) {
    // 1. Sow Active Extensions Boxes
    if (e.target.classList.contains('show-active')) {
      extensionBoxes.forEach(extensionBox => extensionBox.classList.remove('hide'));
      extensionBoxes.forEach(extensionBox => {
        if (!extensionBox.classList.contains('active')) extensionBox.classList.add('hide');
      });
    }
    // 2. Show Inactive Extensions Boxes
    else if (e.target.classList.contains('show-inactive')) {
      extensionBoxes.forEach(extensionBox => extensionBox.classList.remove('hide'));
      extensionBoxes.forEach(extensionBox => {
        if (extensionBox.classList.contains('active')) extensionBox.classList.add('hide');
      });
    }
      // 3. Show All Extensions Boxes
    else {
      extensionBoxes.forEach(extensionBox => extensionBox.classList.remove('hide'));
    }
  });
});

// Remove Extensions Boxe
removeBtns.forEach(removeBtn => {
  removeBtn.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.add('hide');
  });
});