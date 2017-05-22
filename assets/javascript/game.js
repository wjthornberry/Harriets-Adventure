function gameInit() {

var user = prompt("You're Harriet, walking alone in a deserted park at night. You can't remember where Kathryn or Jake went. You hear a noise. Oh no! Suddenly, an evil dog pops out! Do you BARK at it, THROW cheese at it, or RUN?").toUpperCase();

switch(user) {
    case 'BARK':
        var loud = prompt("Good idea! Is your bark loud? (Y) or (N)").toUpperCase();
        var scary = prompt("Is your bark scary? (Y) or (N)").toUpperCase();
        if(loud === 'Y' || scary === 'Y') {
            alert("You let out a loud and scary 'RAH RAH RAH' right in the dog's face with your loud speaker and the mean old dog ran away! I bet it'll never try and jump out at you ever again!");
        } else {
            alert("Your bark isn't loud OR scary? What kind of dog are you, anyway? The dog thinks you're a chump and bites your face off. Sorry—you lose, Harriet.");
        }
        break;
    case 'THROW':
        var cheese = prompt("Oh, throw cheese at it! Great idea! Dogs love cheese! Wait...do you have cheese? (Y) or (N)?").toUpperCase();
        var cheeseType = prompt("What kind of cheese do you have? Is it the tasty kind? (Y) or (N))").toUpperCase();
        if(cheese === 'Y' || cheeseType === 'Y') {
            alert("You throw an entire wheel of tasty cheese at the dog and it gobbles up in three big aaaaoomps, wags its tail, licks your face, and asks if it can be your friend on DogBook.");
        } else {
            alert("Uh oh. You left the house without any of your prized cheese collection? Shame on you, Harriet. The dog bites off your magic toe. You lose!");
        }
        break;
    case 'RUN':
        var fast = prompt("Are you still the fastest dog in the West (Loop)? (Y) or (N)?").toUpperCase();
        var headStart = prompt("Do you think you can throw your bark to disorient the dog and get a head start? (Y)or (N))").toUpperCase();
        if(fast === 'Y' || headStart === 'Y') {
            alert("You sprinted off in the direction you think to be home. Nice job! That was a close call. Time to go home and down a bottle of wine and a few Prozac and call it a night.");
        } else {
            alert("Uh oh. You weren't fast enough. The dog caught up to you and yanked on your tail with its big, shark-like jaws. Ouch!")
        }
        break;
        default:
        alert("I didn't understand your choice. Hit Run and try again, this time picking BARK, THROW, or RUN.");
}
}
        