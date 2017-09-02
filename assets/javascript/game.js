// GLOBAL VARIABLES
// Arrays and variables for holding data
// ========================================================================
$(document).ready(function() {
});

var wins = 0
var losses = 0
var userNum = 0
var userTotal = 0
var targetGen = Math.floor(Math.random()*(99-19+1))+19
var randomRed = Math.floor(Math.random() * 9) + 1;
var randomBlue = Math.floor(Math.random() * 9) + 1;
var randomGreen = Math.floor(Math.random() * 9) + 1;
var randomOrange = Math.floor(Math.random() * 9) + 1;

// FUNCTIONS
// ========================================================================
// Display random target number
$("#targetnum").text("Target: "+targetGen)

// Display user number as 0
$("#usernum").text("Your Number: "+userTotal)

// Reset the game
function reset(){
	targetGen = Math.floor(Math.random()*(99-19+1))+19;
	randomRed = Math.floor(Math.random() * 9) + 1;
	randomBlue = Math.floor(Math.random() * 9) + 1;
	randomGreen = Math.floor(Math.random() * 9) + 1;
	randomOrange = Math.floor(Math.random() * 9) + 1;
	userTotal = 0
	$("#usernum").text("Your Number: "+userTotal)
	$("#targetnum").text("Target: "+targetGen)
}

// When the player wins
function winner(){
	alert("Woohoo! You win! :D")
	wins++;
	$("#wincount").text("Wins: "+wins)
	reset()
}

// When the player loses
function loser(){
	alert("Sorry. You lose. :(")
	losses++;
	$("#losscount").text("Losses: "+losses)
	reset()
}

// When each crystal is clicked
$(".red-crystal").click(function() {
	userTotal = userTotal + randomRed
	$("#usernum").text("Your Number: " + userTotal);
		if (userTotal === targetGen){
			winner();}
		else if (userTotal > targetGen){
			loser();}
});

$(".blue-crystal").click(function() {
	userTotal = userTotal + randomBlue
	$("#usernum").text("Your Number: " + userTotal);
		if (userTotal === targetGen){
			winner();}
		else if (userTotal > targetGen){
			loser();}
});

$(".green-crystal").click(function() {
	userTotal = userTotal + randomGreen
	$("#usernum").text("Your Number: " + userTotal);
		if (userTotal === targetGen){
			winner();}
		else if (userTotal > targetGen){
			loser();}
});

$(".orange-crystal").click(function() {
	userTotal = userTotal + randomOrange
	$("#usernum").text("Your Number: " + userTotal);	
		if (userTotal === targetGen){
			winner();}
		else if (userTotal > targetGen){
			loser();}
});