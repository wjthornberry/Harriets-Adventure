var user = prompt("You're Harriet, walking alone in a deserted park at night. You can't remember where Kathryn or Jake went. You hear a noise. Oh no! Suddenly, an evil dog pops out! Do you BARK at it, THROW cheese at it, or RUN?").toUpperCase();

switch(user) {
    case 'BARK':
        var loud = prompt("Good idea! Is your bark loud (YES or NO)?").toUpperCase();
        var scary = prompt("Is your bark scary (YES or NO)?").toUpperCase();
        if(loud === 'YES' || scary === 'YES') {
            console.log("You only need one of the two! You let out a loud and scary 'RAH RAH RAH' right in the dog's face with your loud speaker and the mean old dog ran away! I bet it'll never try and jump out at you ever again!");
        } else {
            console.log("Your bark isn't loud OR scary? What kind of dog are you, any way? The dog thinks you're a chump and bites your face off. Sorry—you lose, Harriet.");
        }
        break;
    case 'THROW':
        var cheese = prompt("Oh, throw cheese at it! Great idea! Dogs love cheese! Wait...do you have cheese (YES or NO)?").toUpperCase();
        var cheeseType = prompt("What kind of cheese do you have? Is it the tasty kind (YES or NO)?").toUpperCase();
        if(cheese === 'YES' || cheeseType === 'YES') {
            console.log("You throw an entire wheel of tasty cheese at the dog and it gobbles up in three big aaomps, wags its tail, and asks if it can be your friend on DogBook.");
        } else {
            console.log("Uh oh. You left the house without any of your prized cheese collection? Shame on you, Harriet. The dog bites off your magic toe.");
        }
        break;
    case 'RUN':
        var fast = prompt("Are you still the fastest dog in the West (Loop) (YES or NO)?").toUpperCase();
        var headStart = prompt("Do you think you can throw your bark to disorient the dog and get a head start (YES or NO)?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
            console.log("You sprinted off in the direction you think to be home. Nice job! That was a close call. Time to go home and down a bottle of wine and a few Prozac and call it a night.");
        } else {
            console.log("Uh oh. You weren't fast enough. The dog caught up to you and yanked on your tail with its big, shark-like jaws. Ouch!")
        }
        break;
        default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking BARK, THROW, or RUN.");
}
        