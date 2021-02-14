//IIFE
  (async() => {
    //Fetching data from dino.json
    const dinosData = async () => {
      const response = await fetch("./dino.json");
      const data = await response.json();
      return data.Dinos;
    };
    // Create cacheDino array with included Dino objects
    const cacheDino = await dinosData();
    // Create Human Object
    const humanObj = {};

    //Event Listener for clicking "Compare Me" button to start actions after clicking
    btn.addEventListener('click', async function(event) {
      //Invoking dinoTiles function to access each array element with included Dino objects
      cacheDino.forEach(dinoTiles);
      //dinoTiles function which is invoked for each object in the cacheDino array
      function dinoTiles(item, index) {
        //Function for adding tiles to DOM
        function addTiles(nextTile) {
          const newCard = document.createElement('div');
          const cardTitle = document.createElement('h3');
          cardTitle.innerHTML = nextTile.species;
          cardTitle.innerHTML +=
                    `<img src="./images/${nextTile.species}.png" alt="${nextTile.species} image"/>`;
          const cardFact = document.createElement('p');
          //Invoking randomFacts function in order to get a random fact of Dinosaurs for the tile via switch statement
          cardFact.innerHTML = randomFacts();
          newCard.classList.add('grid-item');
          grid.appendChild(newCard);
          newCard.appendChild(cardTitle);
          newCard.appendChild(cardFact);
        };
        //Variable for extractHumanData function that extracts entered data from form
        const getHumanData = extractHumanData();
          //console.log(getHumanData.name);
          function extractHumanData () {
            //Extracting human data from form
            humanObj.name = document.getElementById('name').value;
            let feet = document.getElementById('feet').value;
              //In case nothing was entered in feet field
              if (feet === '') {feet = 0;};
            let inches = document.getElementById('inches').value;
              //In case nothing was entered in inches field
              if (inches === '') {inches = 0;};
            //Converting feet to inch (1 foot = 12 inches)
            humanObj.height = parseFloat(feet * 12) + parseFloat(inches);
            humanObj.weight = document.getElementById('weight').value;
              //In case nothing was entered in weight field
              if (humanObj.weight === '') {humanObj.weight = 0;};
            humanObj.diet = document.getElementById('diet').value;
            humanObj.where = 'Global';
            humanObj.when = 'Anthropocene Age';
            humanObj.fact = 'Humans are living creatures as Dinosaurs used to be';
            //Returning Human Object with data from form
            return humanObj;
          };

          if (index === 4) {
            // Use IIFE to get human data from form
            (function humanData () {
              extractHumanData();
              //Adding human tile
              const newCard = document.createElement('div');
              const cardTitle = document.createElement('h3');
              cardTitle.innerHTML = humanObj.name;
              //Placeholder, in case user has not entered a name
              if (humanObj.name === "") {
                cardTitle.innerHTML = 'Name of Human';
              };
              cardTitle.innerHTML +=
                        `<img src="./images/human.png" alt="Human image"/>`;
              const cardFact = document.createElement('p');
              cardFact.innerHTML = humanObj.fact;
              newCard.classList.add('grid-item');
              grid.appendChild(newCard);
              newCard.appendChild(cardTitle);
              newCard.appendChild(cardFact);
            })();
          };
        //Invoking function to add Dino tiles to DOM
        addTiles(item);

        //Comparing Height of Dinosaurs and Humans
        function compareHeight (nameDino, heightDino, heightHuman) {
            if (isNaN(heightHuman)) {heightHuman = 'Height of Human';};
            let heightComparison = `The height of ${nameDino} is ${heightDino}, whereas your height is ${heightHuman}`;
            return heightComparison;
        };
        //Comparing Height of Dinosaurs and Humans
        function compareWeight (nameDino, weightDino, weightHuman) {
            if (isNaN(weightHuman)) {weightHuman = 'Weight of Human';};
            let weightComparison = `The weight of ${nameDino} is ${weightDino}, whereas your weight is ${weightHuman}`;
            return weightComparison;
        };
          //Comparing Diet of Dinosaurs and Humans
        function compareDiet (nameDino, dietDino, dietHuman) {
            let dietComparison = `The diet of ${nameDino} is ${dietDino} and your diet is ${dietHuman}`;
            return dietComparison;
        };
        //Invoking comparison functions
        function randomFacts () {
          //Generating random number to invoke different switch cases randomly
          const randomNumber = Math.floor(Math.random() * 6)
          //Switch statement for filling in different facts about Dinosaurs randomly into Dinasaurs tiles
          switch (randomNumber){
            case 0:
              //Returning and invoking height comparison function
              return compareHeight(item.species, item.height, getHumanData.height);
              break;
            case 1:
              //Returning and invoking weight comparison function
              return compareWeight(item.species, item.weight, getHumanData.weight);
              break;
            case 2:
              //Returning and invoking diet comparison function
              return compareDiet(item.species, item.diet, getHumanData.diet);
              break;
            case 3:
              //Returning age property of Dinosaur object
              return item.when;
              break;
            case 4:
              //Returning global occurrence property of Dinosaur object
              return item.where;
              break;
            case 5:
              //Returning fact property of Dinosaur object
              return item.fact;
              break;
            //Default mode, in case random number does not match the cases
            default:
              return console.log("Out of facts about Dinosaurs");
          };
        };
      };
      //Hiding form as soon as the 'Compage Me' button is clicked
      document.getElementById('dino-compare').style.display = 'none';

      // Create a <button> element
      const BTN = document.createElement("BUTTON");
      const elementBtn = document.getElementById('bottom');
      BTN.innerHTML = "Go Back";
      BTN.classList.add('btn');
      elementBtn.appendChild(BTN);
      //Reload website to go back to the beginning, when "Go Back" button is clicked
      BTN.addEventListener('click', async function(event) {
        //Invoking function to reload page
        location.reload();
      });

    });

  })();
