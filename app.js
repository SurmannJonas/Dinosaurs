
    console.log('test');
    // Create Dino Constructor


    const dinosData = async () => {
      const response = await fetch("./dino.json");
      const data = await response.json();
      return data.Dinos;
    };

    // Create Dino Objects


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
