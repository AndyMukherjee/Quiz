$(document).ready(function(){

	var Q=[];
	var currentQ= 0;
	

	function Quiz(Num, Question, Option1, Option2, Option3, correctAnswere){
		this.quizNum= Num;
		this.quizQuestion= Question;
		this.quizOption1='<input type="radio" value="A" name="choice">' + Option1;
		this.quizOption2='<input type="radio" value="B" name="choice">'+Option2;
		this.quizOption3='<input type="radio" value="C" name="choice">'+Option3;
		this.correctAnswere = correctAnswere;
	}

function init(){

	var Q1 = new Quiz("Question 1","Who Invented iPhone?", "Steve Jobs", "Bill Gates", "Graham Bell","A");
	var Q2 = new Quiz("Question 2","Who discovered the theory of relativity?", "Sir Issac newton", "Albert Einstine","Hans Cristian Anderson","B");
	var Q3 = new Quiz("Question 3","Who discovered Radium?","Lord Rayleigh","Marie Curie","J.J Thompson","B");
	var Q4 = new Quiz("Question 4","Who discovered Penicillin?", "Alexander Fleming", "Albert Alexander","John Anderson", "A");
	var Q5 = new Quiz("Question 5","Who Invented Battery?","Graham Bell", "Peter Durrand","Count Alessandro Volta","C");
	Q.push(Q1);
	Q.push(Q2);
	Q.push(Q3);
	Q.push(Q4);
	Q.push(Q5);

	$('.QuestionNum').html(Q[currentQ].quizNum);
	$('.Question').html(Q[currentQ].quizQuestion);
	$('.Answere1').html(Q[currentQ].quizOption1);
	$('.Answere2').html(Q[currentQ].quizOption2);
	$('.Answere3').html(Q[currentQ].quizOption3);


}

var s = 0;

function next(){
	$('.write').html("");
	currentQ++;
	$('.QuestionNum').html(Q[currentQ].quizNum);
	$('.Question').html(Q[currentQ].quizQuestion);
	$('.Answere1').html(Q[currentQ].quizOption1);
	$('.Answere2').html(Q[currentQ].quizOption2);
	$('.Answere3').html(Q[currentQ].quizOption3);

}
$('#nxtbtn').click(next);

//----------------------------------------------------
//disabling the Next button once the last question is reached
if (Q[currentQ].quizNum === "Question 5"){

	$('#nxtbtn').click(function(){
		$(this).prop("disabled", true);
});
};

//----------------------------------------------------------
$('.submit').click(function(){

	var Z = $( "input[name='choice']:checked" );
console.log(Z.val());
 if (Z.val() === Q[currentQ].correctAnswere){

 	s=s+1;

 	$('.write').html("you are correct. You have scored  " + s+ "  Out of 5");

 }

 else {$('.write').html("the correct answere is"+Q[currentQ].correctAnswere+" You have scored  " +s+ " Out of 5")};

});


init();

});
