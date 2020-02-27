//Enter variables here!
$(document).ready(function(){
//Variable to select the random number between 19-120
 var random= Math.floor(Math.random()* 101+19)

 //Appending random number to the randomNumber id in the html doc
 $('#randomNumber').text(random)

//Variable for diamond 1 between 1-12
var num1= Math.floor(Math.random() *11+1)
//Variable for diamond 2 between 1-12
var num2= Math.floor(Math.random() *11+1)
//Variable for diamond 3 between 1-12
var num3= Math.floor(Math.random() *11+1)
//Variable for diamond 4 between 1-12
var num4= Math.floor(Math.random() *11+1)

//Declares variables for the score
var jewelTotal=0;
var win = 0;
var losses = 0;

$('#numberWins').text(win);
$('#numberLosses').text(losses);

//Resets the game
function reset(){
    random= Math.floor(Math.random()* 101+19);
    console.log(random)
    $('#randomNumber').text(random);
     num1= Math.floor(Math.random()*11+1);
     num2= Math.floor(Math.random()*11+1);
     num3= Math.floor(Math.random()*11+1);
     num4= Math.floor(Math.random()*11+1);
    jewelTotal= 0;
    $('#jewelTotal').text(jewelTotal);
    }

//Adds wins to the finalScore
function win () {
    alert ("You won!");
    win++;
    $('#numberWins').text(win);
    reset();
}

//Adds losses to the finalScore
function lose () {
    alert ("You lose");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

//Sets up on click for jewels
$('#num1').on('click', function() {
    jewelTotal = jewelTotal + num1;
    console.log("new jewelTotal= " + jewelTotal);
    $('#jewelTotal').text(jewelTotal);
        //sets win/lose conditions
    if (jewelTotal === random) {
        win ();
    }

    else if (jewelTotal > random) {
        lose();
    }
})


$('#num2').on('click', function() {
    jewelTotal = jewelTotal + num2;
    console.log("new jewelTotal= " + jewelTotal);
    $('#jewelTotal').text(jewelTotal);
        //sets win/lose conditions
    if (jewelTotal === random) {
        win ();
    }

    else if (jewelTotal > random) {
        lose();
    }
})

$('#num3').on('click', function() {
    jewelTotal = jewelTotal + num3;
    console.log("new jewelTotal= " + jewelTotal);
    $('#jewelTotal').text(jewelTotal);
        //sets win/lose conditions
    if (jewelTotal === random) {
        win ();
    }

    else if (jewelTotal > random) {
        lose();
    }
})

$('#num4').on('click', function() {
    jewelTotal = jewelTotal + num4;
    console.log("new jewelTotal= " + jewelTotal);
    $('#jewelTotal').text(jewelTotal);
        //sets win/lose conditions
    if (jewelTotal === random) {
        win ();
    }

    else if (jewelTotal > random) {
        lose();
    }
});
});



