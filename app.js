console.log('test');
  // Create Dino Constructor
    function Dino() {
      this.species = species;
      this.weight = weight;
      this.height = height;
      this.diet = diet;
      this.where = where;
      this.when = when;
      this.fact = fact;
    }

    const dinoSpecies = new Dino();

    console.log('test');

    // Create Dino Objects
    let Triceratops = {
      species : dinoSpecies.species,
      weight : dinoSpecies.weight,
      height : dinoSpecies.height,
      diet : dinoSpecies.diet,
      where : dinoSpecies.where,
      when : dinoSpecies.when,
      fact : dinoSpecies.fact
    };
    // Create Human Object
    let Human = {
      species : dinoSpecies.species,
      weight : dinoSpecies.weight,
      height : dinoSpecies.height,
      diet : dinoSpecies.diet,
      where : dinoSpecies.where,
      when : dinoSpecies.when,
      fact : dinoSpecies.fact
    };

    // Use IIFE to get human data from form

    const newCard = document.createElement('div')
      const cardTitle = document.createElement('h3')
      cardTitle.innerHTML = generateData.species
      cardTitle.innerHTML +=
                `<img src="./images/${generateData.species}.png" alt="${generateData.species} image"/>`
      const cardFact = document.createElement('p')
      cardFact.innerHTML = generateData.fact
      newCard.classList.add('grid-item')
      grid.appendChild(newCard)
      newCard.appendChild(cardTitle)
      newCard.appendChild(cardFact)
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
