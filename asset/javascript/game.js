

      // VARIABLES
      // ==========================================================================
          //1 ) Create and Array to hold the name of seasons of the year
          // 2)Generate a random number to pick a season from the array




         // Declare and and initialize array of seasons
         prompt( "what is your favorite season of the year?")

      var seasonsOfTheYear = ["winter","spring","summer","autum"]
       var myFavSeason = Math.floor(Math.random()*4);  // this function holds the random calculation
       var seaonsResults = seasonsOfTheYear[myFavSeason];
       var seasonsLength = myFavSeason.length;
       var Display =[seasonsLength]
       
       alert(seaonsResults)

                //SECTION TWO
                //===================

                // Determind how many letters need to be guessed to win the game
                // Set how many guessed the user is allowed
                // Display _ for each letter in the word to be guessed
                // Break the srting Answer apart and store it as an array of letters
                
                var win = seasonsLength;
                var letters = seaonsResults.split("");
                var noOfAttemptsLeft = 10;
                var output = "";
                var randomLetters ="";

      // FUNCTIONS
      // ==============================================================================

      // Logs all of our car's current stats to the console.
         var seasonSetup =function(){

        for( var i =0; i<seaonsResults.length; i++){
             
          display[i] ="-";
          output = output + display[i];


        };

        document.getElementById(seasonsOfTheYear ).innerHTML = output;
        output="";

      }

      var submit = function(){
        randomLetters =$("letters").value;

         $("letters").value = "";

         for(var i =0; i<seaonsResults,length; i++);
           
          alert(letters[i]);

          if(randomLetters.toUpperCase()== letters[i])
          {
               display[i] = randomLetters.toUpperCase();
                win--;
          }
               output = output + display[i] + "";


      }

      document.getElementById("seasonsOfTheYear").innerHTML = output;
      output = "";
        noOfAttemptsLeft--;
      if(win < 1){
        document.getElementById("guesses").innerHTML = "YOU WIN!!!"
      }
      else if( noOfAttemptsLeft < 1){

        document.getElementById(" guesses").innerHTML = "YOU LOSE!!!"
      }
      else
      {
        document.getElementById(" guesses").innerHTML = "YOU HAVE " + noOfAttemptsLeft + " guesses left"

      }


      
      // MAIN PROCESS
      // ==============================================================================

       window.onload = function()
       {
        seasonSetup();
        $("#submit").onclick = submit;
       }
    
