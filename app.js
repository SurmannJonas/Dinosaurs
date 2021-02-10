  let Dino1 = {
        species: 'Triceratops',
        weight: 13000,
        height: 114,
        diet: 'herbavor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'First discovered in 1889 by Othniel Charles Marsh'
    };
    let Dino2 = {
      species: 'Triceratops',
      weight: 13000,
      height: 114,
      diet: 'herbavor',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'First discovered in 1889 by Othniel Charles Marsh'
    };
    let Dino3 = {
      species: 'Triceratops',
      weight: 13000,
      height: 114,
      diet: 'herbavor',
      where: 'North America',
      when: 'Late Cretaceous',
      fact: 'First discovered in 1889 by Othniel Charles Marsh'
    };

    const dinoArray = [Dino1, Dino2, Dino3];

    console.log(dinoArray[1].species);


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


    //const dinoClass = new DinoConstructor(species, weight, height, diet, where, when, fact, image);
    // Create Dino Objects

    //Testing the access of local server
    //console.log('Fetching ' + dinosJSON());
    const dinosJSON = async () => {
      const response = await fetch("./dino.json");
      const data = await response.json();
      return data.Dinos;
    };
    const accessDino = async () => {
      const a = await dinosJSON;
      //console.log(a);
    };
    //accessDino();
    //console.log('Fetching ' + accessDino());





    // Create Human Object

    // Use IIFE to get human data from form



    // the listener callback is async because
    // we need to wait for dinosData to complete
      btn.addEventListener('click', async function(event) {
        // wait dinosData complete
      const dinos = await dinosData();
      // do something with dinos
      });


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
