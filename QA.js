$(document).ready(function(){

	var Q=[];
	var currentQ= 0;

	function Quiz(Question, Option1, Option2, Option3, correctAnswere){
		this.quizQuestion= Question;
		this.quizOption1='<input type="radio" value="A" name="choice">' + Option1;
		this.quizOption2='<input type="radio" value="B" name="choice">'+Option2;
		this.quizOption3='<input type="radio" value="C" name="choice">'+Option3;
		this.correctAnswere = correctAnswere;
	}

function init(){

	var Q1 = new Quiz("Who Invented iPhone?", "Steve Jobs", "Bill Gates", "Graham Bell","A");
	var Q2 = new Quiz("Who discovered the theory of relativity?", "Sir Issac newton", "Albert Einstine","Hans Cristian Anderson","B");
	var Q3 = new Quiz("Who discovered Radium","Lord Rayleigh","Marie Curie","J.J Thompson","B");
	Q.push(Q1);
	Q.push(Q2);
	Q.push(Q3);

	$('.Question').html(Q[currentQ].quizQuestion);
	$('.Answere1').html(Q[currentQ].quizOption1);
	$('.Answere2').html(Q[currentQ].quizOption2);
	$('.Answere3').html(Q[currentQ].quizOption3);


}

function next(){
	$('.write').html("");
	currentQ++;
		$('.Question').html(Q[currentQ].quizQuestion);
	$('.Answere1').html(Q[currentQ].quizOption1);
	$('.Answere2').html(Q[currentQ].quizOption2);
	$('.Answere3').html(Q[currentQ].quizOption3);

}
$('#nxtbtn').click(next);
$('.submit').click(function(){

	var Z = $( "input[name='choice']:checked" );
console.log(Z.val());
 if (Z.val() === Q[currentQ].correctAnswere){

 	$('.write').html("you are correct");

 }

 else {$('.write').html("the correct answere is"+Q[currentQ].correctAnswere)};

});
init();

});