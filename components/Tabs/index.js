// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// from HTML:
// TABS COMPONENT, PLACE TABS HERE
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response.data);
    response.data.topics.forEach(function(e){
      Tabs(e);
    })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
 
  // grab topics from existing HTML
  const topicsDiv = document.querySelector('.topics');

  function Tabs(obj) {
    // create elements
    const tabDiv = document.createElement('div');

    // append elements
    topicsDiv.appendChild(tabDiv);

    // set classes
    tabDiv.classList.add('tab');

    // set text
    tabDiv.textContent = `${obj}`; 

    return tabDiv
  };
