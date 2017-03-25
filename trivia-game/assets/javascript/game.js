//*******************GLOBAL VARIABLES*****************

var questionArray = [

					{
						id: 0,
						ask: "Which beloved episode features almost no dialogue due to a group of demons who steal the voices of everyone in Sunnydale to more easily cut out the hearts of their victims?",
						correctAnswer: "Hush",
						possibleAnswers: ["Once More with Feeling", "Tabula Rasa", "Welcome to the Hellmouth", "Hush"],
						hintPic: "assets/images/patrol.jpg",
						winGif: "assets/images/gentlemen.gif"


					},

					{
						id: 1,
						ask: "Which actress played Buffy Summers in the original 1992 film?",
						correctAnswer: "Kristy Swanson",
						possibleAnswers: ["Kristen Stewart", "Kristy Swanson", "Kristen Bell", "Kristin Kreuk"],
						hintPic: "assets/images/1992.jpg",
						winGif: "assets/images/kristyBuffy.gif"

					},

					{
						id: 2,
						ask: "Willow goes dark at the end of season 6 after her lover, Tara, is murdered. Who killed her?",
						correctAnswer: "Warren",
						possibleAnswers: ["Warren", "Adam", "Caleb", "Angel"],
						hintPic: "assets/images/tara.jpg",
						winGif: "assets/images/warrenRip.gif"

					},

					{
						id: 3,
						ask: "The show featured its fair share of guest stars. Which actor played a psycho robot who dated Buffy's mom, Joyce?",
						correctAnswer: "John Ritter",
						possibleAnswers: ["Ted Danson", "Scott Baio", "John Ritter", "Peter Scolari"],
						hintPic: "assets/images/joyce.jpg",
						winGif: "assets/images/ted.gif"

					},

					{
						id: 4,
						ask: "Over the course of the show, Xander gets a reputation for being attracted to demons. Which ex-demon did he almost marry?",
						correctAnswer: "Anya Jenkins",
						possibleAnswers: ["Jenny Calendar", "Anya Jenkins", "Cordelia Chase", "Natalie French"],
						hintPic: "assets/images/xander.jpg",
						winGif: "assets/images/anya.gif"

					},

					{
						id: 5,
						ask: "As the slayer, Buffy gets assistance from her Watcher, Giles. As a part of the Watcher's Council, who was Giles's boss?",
						correctAnswer: "Quentin Travers",
						possibleAnswers: ["Wesley Wyndham-Pryce", "Andrew Wells", "Gwendolyn Post", "Quentin Travers"],
						hintPic: "assets/images/giles.jpg",
						winGif: "assets/images/biteMe.gif"

					}



				];

var currentQuestion = 0;
var questionsRemaining = 7;
var right = 0;
var wrong = 0;
var imageArray = ["assets/images/red1.jpg"];
var startImage = $("<img>").attr("class", "imageBox").attr("src", "assets/images/red2.jpg");
var instructions = $("#startBox").html("<h3>Press Start to Play!</h3><br><br><button id='startButton' class='btn btn-start btn-lg'>START</button>");
var number = 11;
var winNumber = 6;
var intervalId;
var winIntervalId;
var userSelection;
var userGuessed = false;


// var displayedAnswers = $("<h4>").attr()


// var userClick = $(this).on("click" function(event));

//***************FUNCTIONS***************
function startScreen (){
startImage.appendTo($("#imageBox"));
	instructions.push();
	$("#scoreBox").hide();
}

function runTimer(){
	console.log("run question timer");
	intervalId = setInterval(decrementTimer, 1000);
}

function decrementTimer(){
	number--;
	$("#timerBox").html("<p class='timer'>Time Remaining: " + number + "</p>");

	if (number === 0){
		clearInterval(intervalId);
		number = 11;
		wrong++;
		// questionsRemaining--;
			$("#wrong").text("Wrong:  " + wrong);
			$("#imageBox").html("<img class='imageBox' src=" + questionArray[currentQuestion].winGif + ">");
			$("#questionBox, #answerBox").hide();
			$("#resultsBox").show();
			$("#resultsBox").html("<p class='result'>OOPS! The Answer is " + questionArray[currentQuestion].correctAnswer + "!</p>");
			runWinTimer();

	}
}

function stopTimer(){
	clearInterval(IntervalId);
}

function runWinTimer(){
	console.log("runing Win TImer");
	winIntervalId = setInterval(decrementWinTimer, 1000);
}

function decrementWinTimer(){
	winNumber--;
	$("#timerBox").html("<p class='timer'>Time Remaining: " + winNumber + "</p>");

	if (winNumber === 0){
		clearInterval(winIntervalId);
		winNumber = 6;	
		currentQuestion++;
		$("#resultsBox").hide();
		$("#questionBox, #answerBox").show();
		displayQuestion();
		checkAnswer();
		
	}

}

function stopWinTimer(){
	clearInterval(winIntervalId);
}

function displayQuestion(){

	questionsRemaining--;
	console.log(questionsRemaining);

	for (var i = 0; i < questionArray.length; i++);

		if (questionsRemaining > 0){

		$("#questionBox").html("<h4>" + questionArray[currentQuestion].ask + "</h4>");
		$("#answer1").html("<h5 class='choice'>" + questionArray[currentQuestion].possibleAnswers[0] + "</h5>");
		$("#answer2").html("<h5 class='choice'>" + questionArray[currentQuestion].possibleAnswers[1] + "</h5>");
		$("#answer3").html("<h5 class='choice'>" + questionArray[currentQuestion].possibleAnswers[2] + "</h5>");
		$("#answer4").html("<h5 class='choice'>" + questionArray[currentQuestion].possibleAnswers[3] + "</h5>");
		$("#imageBox").html("<img class='imageBox' src=" + questionArray[currentQuestion].hintPic + ">");
	
		runTimer();

		}

		else if (questionsRemaining === 0){
			$("#questionBox, #answerBox").hide();
			$("#imageBox").html("<img class='imageBox' src='assets/images/spin.gif'>");
		}
}


function checkAnswer(){


	$(".choice").on("click", function(){
		
		userSelection = $(this).attr("id");
		
		console.log(this.innerText);

		

	
		if (this.innerText === questionArray[currentQuestion].correctAnswer){
			clearInterval(intervalId);
			number = 11;
			right++;
			// questionsRemaining--;
			$("#right").text("Right:" + right);
			$("#imageBox").html("<img class='imageBox' src=" + questionArray[currentQuestion].winGif + ">");
			$("#questionBox, #answerBox").hide();
			$("#resultsBox").show();
			$("#resultsBox").html("<p class='result'>CORRECT! The Answer is " + questionArray[currentQuestion].correctAnswer + "!</p>");
			runWinTimer();
		
		}

		else if (this.innerText !== questionArray[currentQuestion].correctAnswer){
			clearInterval(intervalId);
			number = 11;
			wrong++;
			// questionsRemaining--;
			$("#wrong").text("Wrong:" + wrong);
			$("#imageBox").html("<img class='imageBox' src=" + questionArray[currentQuestion].winGif + ">");
			$("#questionBox, #answerBox").hide();
			$("#resultsBox").show();
			$("#resultsBox").html("<p class='result'>OOPS! The Answer is " + questionArray[currentQuestion].correctAnswer + "!</p>");
			runWinTimer();
		}


	})

}



//***********DEFAULT STATE***************

$(document).ready(function(){

	startScreen();

	
	



$("#startButton").on("click", function(){
	$("#startBox").hide();
	
	displayQuestion();
	$("#scoreBox").show();
	checkAnswer();
	

	if (questionsRemaining === 0){
		stopWinTimer();
		$("#questionBox, #answerBox").hide();
		$("#resultsBox").hide();
		
		
		
	}


	



});



});
//push questions and corresponding image to imageBox and questions Box



//answers should be randomly organized



//timer starts running


//compare user selection with correct answers 


//after click tell user if it was a correct response


//if not display the correct response 


//display answer gif


// after brief countdown load next question and reset question timer


