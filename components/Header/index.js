// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// from the HTML file:
// HEADER COMPONENT, PLACE HEADER HERE -->
// <div class="header-container">
// </div>

// grab header-container div from existing HTML:
const headerContainer = document.querySelector('.header-container');

function Header() {
  // create elements
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const headerH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  // append elements
  headerContainer.appendChild(headerDiv);
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(tempSpan);

  // set classes
  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  // set text
  dateSpan.textContent = 'SMARCH 28, 2019',
  headerH1.textContent = 'LAMBDA TIMES',
  tempSpan.textContent = '98°'

  return headerDiv
}

Header();
