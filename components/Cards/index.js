// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// from HTML:
// CARDS CONTAINER, PLACE ARTICLE CARDS HERE
// <div class="cards-container">
// </div>

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  
  .then(response => {
  
    console.log(response.data)
    // forEach
    response.data.articles.javascript.forEach(function(e){
      newCard(e);
    })
    response.data.articles.jquery.forEach(function(e){
      newCard(e);
    })
    response.data.articles.node.forEach(function(e){
      newCard(e);
    })
    response.data.articles.technology.forEach(function(e){
      newCard(e);
    })
    response.data.articles.bootstrap.forEach(function(e){
      newCard(e);
    })
    
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });


// grab cards-container from existing HTML
const cardsContainer = document.querySelector('.cards-container');

let testObj = {headline: "Bootstrap 5: Get a Sneak Peak at all the New Features", authorPhoto: "./assets/fido.jpg", authorName: "FIDO WALKSALOT"};

function newCard(obj) {
  // create elements
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainDiv = document.createElement('div');
  const img = document.createElement('img');
  const nameSpan = document.createElement('span');

  // append elements
  cardsContainer.appendChild(cardDiv);
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainDiv);
  imgContainDiv.appendChild(img);
  authorDiv.appendChild(nameSpan);

  // set classes
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainDiv.classList.add('img-container');

  // set content
  headlineDiv.textContent = `${obj.headline}`,
  img.src = `${obj.authorPhoto}`,
  nameSpan.textContent = `${obj.authorName}`

  return cardDiv;
}
