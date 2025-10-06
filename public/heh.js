rli = require('readline').createInterface({ input: process.stdin }).on('line', get_line);
function get_line(line){
    line == 'END' ? rli.close() : getPermittedRatings("ageInput");
}

function getPermittedRatings(){
      let age = "";
      let message = "";
        if (13 <= age <= 16)
            console.log("You can watch movies with ratings: G, PG, and R13");
            if (age => 16 && age < 18){
                console.log("You can watch movies with ratings: G, PG, R-13, and R-16");
                if (age < 18){
                    console.log("You can watch all types of movies.");
                }
                
            }
      else {
        console.log("You can watch movies with ratings: G and PG (with a parent) ");
      }
      }