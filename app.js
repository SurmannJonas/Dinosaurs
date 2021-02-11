//IIFE
  (async() => {

    // Create Dino Constructor
    function DinoConstructor(species, weight, height, diet, where, when, fact, image) {
      this.species = species;
      this.weight = weight;
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact;
      this.image = image;
    };

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

      function dinoTiles(item, index) {
        //Function for adding tiles to DOM
        function addTiles(nextTile, divider) {
          const newCard = document.createElement('div');
          const cardTitle = document.createElement('h3');
          cardTitle.innerHTML = nextTile.species;
          cardTitle.innerHTML +=
                    `<img src="./images/${nextTile.species}.png" alt="${nextTile.species} image"/>`;
          const cardFact = document.createElement('p');
          cardFact.innerHTML = nextTile.fact;
          newCard.classList.add('grid-item');
          grid.appendChild(newCard);
          newCard.appendChild(cardTitle);
          newCard.appendChild(cardFact);
        };

        if (index === 4) {
          // Use IIFE to get human data from form
          (function humanData () {
            humanObj.name = document.getElementById('name').value;
            const feet = document.getElementById('feet').value;
            const inches = document.getElementById('inches').value;
            //Converting feet to inch (1 foot = 12 inches)
            humanObj.height = parseFloat(feet * 12) + parseFloat(inches);
            humanObj.weight = document.getElementById('weight').value;
            humanObj.diet = document.getElementById('diet').value;
            humanObj.fact = 'Humans are living creatures as Dinosaurs';

            const newCard = document.createElement('div');
            const cardTitle = document.createElement('h3');
            cardTitle.innerHTML = humanObj.name;
            cardTitle.innerHTML +=
                      `<img src="./images/human.png" alt="Human image"/>`;
            const cardFact = document.createElement('p');
            cardFact.innerHTML = humanObj.fact;
            newCard.classList.add('grid-item');
            grid.appendChild(newCard);
            newCard.appendChild(cardTitle);
            newCard.appendChild(cardFact);
          })();

        }
        //else {
          addTiles(item);
        //}
      };


    });

  })();







    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
