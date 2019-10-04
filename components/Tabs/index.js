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

// REVISE TO JUST APPEND TAB TO EXISTING SPAN

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response);
      // const newCard = createCard(response.data);
      // cards.appendChild(newCard);
      const newTab = Tabs(response.data);
      tabMain.appendChild(newTab);
    })
  .catch(error => {
    console.log("The data was not returned", error);
  });

  // grab tabs div from existing HTML
  const tabMain = document.querySelector('.tabs');

  function Tabs(obj) {
    // create elements
    const tabsDiv = document.createElement('div');
    const topicsDiv = document.createElement('div');
    const titleSpan = document.createElement('span');

    // append elements
    tabMain.appendChild(tabsDiv);
    tabsDiv.appendChild(topicsDiv);
    topicsDiv.appendChild(titleSpan);

    // set classes
    tabsDiv.classList.add('tabs');
    topicsDiv.classList.add('topics');
    titleSpan.classList.add('title');

    // set text
    titleSpan.textContent = `TRENDING TOPICS: ${obj.data.topics}`; 

    return tabsDiv
  }

  Tabs();