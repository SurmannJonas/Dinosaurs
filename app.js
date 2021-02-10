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

    const dinosData = async () => {
      const response = await fetch("./dino.json");
      const data = await response.json();
      return data.Dinos;
    };

    btn.addEventListener('click', async function(event) {
      const dinos = await dinosData();
      console.log('Fetching ', await dinosData());
    });

  })();

      // Create Dino Objects

    // Create Human Object

    // Use IIFE to get human data from form

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
