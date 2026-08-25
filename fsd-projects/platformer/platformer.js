$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,700,50,50, "purple");
createPlatform(300,600,20,20, "red");
createPlatform(300,400,20,200, "orange");
createPlatform(300,400,100,20, "yellow");
createPlatform(100,500,20,20, "orange");
createPlatform(300,260,500,20, "limegreen");
createPlatform(200,260,100,20, "limegreen");
createPlatform(500,400,30,30, "limegreen");
createPlatform(650,400,30,30, "limegreen");
createPlatform(750,400,150,20, "blue");
createPlatform(890,400,20,400, "blue");
createPlatform(890,0,20,300, "blue");
createPlatform(880,290,20,20, "blue");
createPlatform(1100,650,200,20, "purple");
createCollectable("diamond", 590,450);
createCollectable("diamond", 200,150);
createCollectable("diamond", 1150,500);
createCannon("bottom", 600, 1500);
createCannon("top", 400, 1500);
createCannon("right", 250, 1000);
//btw DO NOT touch first three platform lines or wallhop won't work. I am not gonna fix or explain this



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
