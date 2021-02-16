//IIFE is starting when Dinosaur is opened
  (async() => {
    //Event Listener for clicking "Compare Me" button to start actions after clicking
    btn.addEventListener('click', async function(event) {
      //Fetching data from dino.json
      const dinosData = async () => {
        const response = await fetch("./dino.json");
        const data = await response.json();
        return data.Dinos;
      };

      //dinoTiles function which is invoked for each object in the cacheDino array
      function dinoTiles(item, index) {
        //Constructor function to create a creatures class
        function CreaturesClass(species, weight, height, diet, where, when, fact) {
          this.species = species,
          this.weight = weight,
          this.height = height,
          this.diet = diet,
          this.where = where,
          this.when = when,
          this.fact = fact
        };
        //Invoking Constructor function to create a new object for dinosaurs
        let dinoObj = new CreaturesClass(
          item.species,
          item.weight,
          item.height,
          item.diet,
          item.where,
          item.when,
          item.fact);

        //Comparing Height of Dinosaurs and Humans
        function compareHeight (nameDino, heightDino, heightHuman) {
            if (isNaN(heightHuman)) {heightHuman = 'Height of Human';};
            let heightComparison =
              `The height of ${nameDino} is ${heightDino}, whereas your height is ${heightHuman}`;
            return heightComparison;
        };
        //Comparing Height of Dinosaurs and Humans
        function compareWeight (nameDino, weightDino, weightHuman) {
            if (isNaN(weightHuman)) {weightHuman = 'Weight of Human';};
            let weightComparison =
              `The weight of ${nameDino} is ${weightDino}, whereas your weight is ${weightHuman}`;
            return weightComparison;
        };
          //Comparing Diet of Dinosaurs and Humans
        function compareDiet (nameDino, dietDino, dietHuman) {
            let dietComparison =
              `The diet of ${nameDino} is ${dietDino} and your diet is ${dietHuman}`;
            return dietComparison;
        };

        //Variable for extractHumanData function that extracts entered data from form
        const getHumanData = extractHumanData();
          //console.log(getHumanData.name);
          function extractHumanData () {
            // Create Human Object
            const humanObj = {};
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
            //Returning Human Object with data from form
            return humanObj;
          };

        //Invoking comparison functions
        function randomFacts () {
          //Generating random number to invoke different switch cases randomly
          const randomNumber = Math.floor(Math.random() * 6);
          //Switch statement for filling in different facts about Dinosaurs randomly into Dinasaurs tiles
          switch (randomNumber){
            case 0:
              //Returning and invoking height comparison function
              return compareHeight(dinoObj.species, dinoObj.height, getHumanData.height);
              break;
            case 1:
              //Returning and invoking weight comparison function
              return compareWeight(dinoObj.species, dinoObj.weight, getHumanData.weight);
              break;
            case 2:
              //Returning and invoking diet comparison function
              return compareDiet(dinoObj.species, dinoObj.diet, getHumanData.diet);
              break;
            case 3:
              //Returning age property of Dinosaur object
              return dinoObj.when;
              break;
            case 4:
              //Returning global occurrence property of Dinosaur object
              return dinoObj.where;
              break;
            case 5:
              //Returning fact property of Dinosaur object
              return dinoObj.fact;
              break;
            //Default mode, in case random number does not match the cases
            default:
              return console.log("Out of facts about Dinosaurs");
          };
        };

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
          //Color array for Dinosaur tiles
          const colorArr = [
            "#009687f5",
            "#dc7657f5",
            "#4bb3c1fa",
            "#fac069f9",
            "#b94169fa",
            "#7f62b3fa",
            "#9fc376f9",
            "#677bcbfa" ];
          ////Adjusting backgroundColor for Dinosaur tiles
          newCard.style.backgroundColor = colorArr[index];
          //Appending tiles to DOM
          grid.appendChild(newCard);
          newCard.appendChild(cardTitle);
          newCard.appendChild(cardFact);
        };

        addTiles(dinoObj);

        if (index === 4) {
            // Use IIFE to get human data from form and to trigger function automatically as soon as index = 4
            (function humanData () {
              extractHumanData();
              //Adding human tile
              const newCard = document.createElement('div');
              newCard.setAttribute("id", "humanTile");

              const cardTitle = document.createElement('h3');
              cardTitle.innerHTML = getHumanData.name;
              //Placeholder, in case user has not entered a name
              if (getHumanData.name === "") {cardTitle.innerHTML = 'Name of Human';};
              cardTitle.innerHTML +=
                        `<img src="./images/human.png" alt="Human image"/>`;
              //const cardFact = document.createElement('p');
              //cardFact.innerHTML = getHumanData.fact;
              newCard.classList.add('grid-item');
              //Adjusting backgroundColor for human tile
              newCard.style.backgroundColor = "#67a866f9";
              //Appending tile to DOM
              grid.appendChild(newCard);
              newCard.appendChild(cardTitle);
              //newCard.appendChild(cardFact);
            })();
        };
        //Invoking function to add Dino tiles to DOM
        //addTiles(dinoObj);
      };
      // Create cacheDino array with included Dino objects
      const cacheDino = await dinosData();

      //Invoking dinoTiles function to access each array element with included Dino objects
      //cacheDino.forEach(dinoTiles);

      //randomTiles IIFE to access each array element with Dino objects included in random order
      (function randomTiles (dinoArr) {
        //Creating array for random number
        let numberArr = [];
        //Variable for random numbers from the random number generator
        let randomNr;
        //First do-while loop for inserting the first three random numbers into the array
        do {
            randomNr = Math.floor(Math.random() * 8);
            if (!numberArr.includes(randomNr) && randomNr !== 4) {
                numberArr.push(randomNr);
            };
        //Condition to end the do-while loop: array needs to contain 3 elements
        } while (numberArr.length < 4);
        //4th element of array needs to have the value of 4 in order to position the human tile in the middle of the Dinosaurs's tiles
        numberArr[3] = 4;
        //Second do-while loop for inserting the last four random numbers into the array
        do {
            randomNr = Math.floor(Math.random() * 8);
            if (!numberArr.includes(randomNr) && randomNr !== 4) {
                numberArr.push(randomNr);
            };
        //Condition to end the do-while loop: array needs to contain 8 elements
        } while (numberArr.length < 8);
        //for loop to invoke dinopTiles function for each object within the cacheDino array
        for (let i = 0; i < numberArr.length; i++) {
          //Invoking dinoTiles function for each element of the 'numberArr' array
          dinoTiles(cacheDino[numberArr[i]], numberArr[i]);
        };
      })(cacheDino);

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
