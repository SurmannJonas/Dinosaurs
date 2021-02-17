//IIFE is starting when Dinosaur website is opened
  (async() => {
    //Event Listener for clicking "Compare Me" button to start actions after clicking
    btn.addEventListener('click', async function(event) {
      //Fetching data from dino.json
      const dinosData = async () => {
        const response = await fetch('./dino.json');
        const data = await response.json();
        return data.Dinos;
      };

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

      //dinoTiles function which is invoked for each object in the cacheDino array
      function dinoTiles(item, index) {
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
            if (heightDino > heightHuman){
                 return `${nameDino} was as tall as ${heightDino}. No surprise, Dinosaurs were huge creatures.`;
             } else if (heightDino < heightHuman){
                 return `${nameDino} was as tall as ${heightDino}. You are taller than a Dinosaur!`;
             } else {
                 return `Congrats, you are as tall as a ${nameDino}!`;
             }
        };
        //Comparing Height of Dinosaurs and Humans
        function compareWeight (nameDino, weightDino, weightHuman) {
            if (isNaN(weightHuman)) {weightHuman = 'Weight of Human';};
            if (weightDino > weightHuman){
                 return `${nameDino} was as heavy as ${weightDino}. You should eat more.`;
             } else if (weightDino < weightHuman){
                 return `${nameDino} was as heavy as ${weightDino}. You are weighing more than a Dinosaur!`;
             } else {
                 return `Congrats, you are as big as a ${nameDino}!`;
             }
        };
          //Comparing Diet of Dinosaurs and Humans
        function compareDiet (nameDino, dietDino, dietHuman) {
              if (dietHuman === dietDino){
                   return `${nameDino} was a ${dietDino}. You two could share dinner.`;
               } else if (dietDino === "carnivor"){
                   return `${nameDino} was a ${dietDino}. Better run before you become the meal.`;
               } else if (dietDino === "herbavor"){
                   return `${nameDino} was a ${dietDino}. You'll have to prepare an extra salad for dinner.`;
               } else {
                   return `${nameDino} was a ${dietDino}. Time to suggest a potluck.`;
               }
        };

        //Variable for extractHumanData function that extracts entered data from form
        const getHumanData = extractHumanData();
          function extractHumanData () {
            const humanObj = {};

            humanObj.name = document.getElementById('name').value;
            let feet = document.getElementById('feet').value;
              if (feet === '') {feet = 0;};
            let inches = document.getElementById('inches').value;
              if (inches === '') {inches = 0;};
            humanObj.height = parseFloat(feet * 12) + parseFloat(inches);
            humanObj.weight = document.getElementById('weight').value;
              if (humanObj.weight === '') {humanObj.weight = 0;};
            humanObj.diet = document.getElementById('diet').value;
            return humanObj;
          };

        //Invoking comparison functions
        function randomFacts () {
          const randomNumber = Math.floor(Math.random() * 6);
          //Switch statement for filling in different facts about Dinosaurs randomly into Dinasaurs tiles
          switch (randomNumber){
            case 0:
              return compareHeight(dinoObj.species, dinoObj.height, getHumanData.height);
              break;
            case 1:
              return compareWeight(dinoObj.species, dinoObj.weight, getHumanData.weight);
              break;
            case 2:
              return compareDiet(dinoObj.species, dinoObj.diet, getHumanData.diet);
              break;
            case 3:
              return dinoObj.when;
              break;
            case 4:
              return dinoObj.where;
              break;
            case 5:
              return dinoObj.fact;
              break;
            default:
              return console.log('Out of facts about Dinosaurs');
          };
        };

        //Function for adding tiles to DOM
        function addTiles(nextTile) {
          const newCard = document.createElement('div');
          const cardTitle = document.createElement('h3');
          cardTitle.innerHTML = nextTile.species;
          cardTitle.innerHTML +=
                    `<img src='./images/${nextTile.species}.png' alt='${nextTile.species} image'/>`;
          const cardFact = document.createElement('p');

          if (item.species === 'Pigeon') {
            //Always showing fact for Pigeon tile
            cardFact.innerHTML = item.fact;
          } else {
            //Invoking randomFacts function in order to get a random fact of Dinosaurs for the tile via switch statement
            cardFact.innerHTML = randomFacts();
          };
          newCard.classList.add('grid-item');
          const colorArr = [
            '#009687f5',
            '#dc7657f5',
            '#4bb3c1fa',
            '#fac069f9',
            '#b94169fa',
            '#7f62b3fa',
            '#9fc376f9',
            '#677bcbfa' ];
          newCard.style.backgroundColor = colorArr[index];
          grid.appendChild(newCard);
          newCard.appendChild(cardTitle);
          newCard.appendChild(cardFact);
        };
        //Invoking function to add Dino tiles to DOM
        addTiles(dinoObj);

        if (index === 4) {
            // Use IIFE to get human data from form and to trigger function automatically as soon as index = 4
            (function humanData () {
              extractHumanData();

              const newCard = document.createElement('div');
              newCard.setAttribute('id', 'humanTile');
              const cardTitle = document.createElement('h3');
              cardTitle.innerHTML = getHumanData.name;
              if (getHumanData.name === '') {cardTitle.innerHTML = 'Name of Human';};
              cardTitle.innerHTML +=
                        `<img src='./images/human.png' alt='Human image'/>`;
              newCard.classList.add('grid-item');
              newCard.style.backgroundColor = '#67a866f9';
              grid.appendChild(newCard);
              newCard.appendChild(cardTitle);
            })();
        };
      };
      const cacheDino = await dinosData();

      //randomTiles IIFE to access each array element with Dino objects included in random order
      (function randomTiles (dinoArr) {
        let numberArr = [];
        let randomNr;
        //First do-while loop for inserting the first three random numbers into the array
        do {
            randomNr = Math.floor(Math.random() * 8);
            if (!numberArr.includes(randomNr) && randomNr !== 4) {
                numberArr.push(randomNr);
            };
        } while (numberArr.length < 4);
        //4th element of array needs to have the value of 4 in order to position the human tile in the middle of the Dinosaurs's tiles
        numberArr[3] = 4;
        //Second do-while loop for inserting the last four random numbers into the array
        do {
            randomNr = Math.floor(Math.random() * 8);
            if (!numberArr.includes(randomNr) && randomNr !== 4) {
                numberArr.push(randomNr);
            };
        } while (numberArr.length < 8);
        for (let i = 0; i < numberArr.length; i++) {
          dinoTiles(cacheDino[numberArr[i]], numberArr[i]);
        };
      })(cacheDino);

      //Hiding form as soon as the 'Compage Me' button is clicked
      document.getElementById('dino-compare').style.display = 'none';

      // Create a <button> element
      const BTN = document.createElement('BUTTON');
      const elementBtn = document.getElementById('bottom');
      BTN.innerHTML = 'Go Back';
      BTN.classList.add('btn');
      elementBtn.appendChild(BTN);
      //Reload website to go back to the beginning, when "Go Back" button is clicked
      BTN.addEventListener('click', async function(event) {
        location.reload();
      });

    });

  })();
