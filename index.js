var readlineSync = require('readline-sync');
var score=0;


console.log("Welcome to the Harry Potter quiz! " + "Each correct answer will give you 1 mark. All the Best!! " );
console.log("-----------------------------------");
console.log('\n');


// input
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + "!");
console.log("-----------------------------------");
console.log('\n');


// for loop
function play(question, answer)
{
    var userAnswer = readlineSync.question(question);

     if (userAnswer.toUpperCase() === answer.toUpperCase())
      {
           console.log("Right! ");
          score = score + 1;
      }
      else
      {
          console.log("Opps! You are wrong. ");
      }
      console.log("+" + score);
      console.log("-----------------------------------");
      console.log("\n");
}


var highScores = [
  {
    name: "Shahid",
    score: "12",
  },

  {
    name: "Kabir Kiyosaki",
    score: "10",
  },
]


var questions = [
  {
    question: "Which wizarding school does Harry attend? ",
    answer: "Hogwarts",
  },

   {
    question: "What house at Hogwarts does Harry belong to ? ",
    answer: "Gryffindor",
  },

  {
    question: "Who is Harry Potter's godfather? ",
    answer: "Sirius Black",
  },

  {
    question: "What is Harry's patronous? ",
    answer: "Stag",
  },

  {
    question: "What position does Harry play on his Quidditch team? ",
    answer: "Seeker"
  },

  {
    question: "Who kills Professor Dumbledore? ",
    answer: "Severus Snape",
  },

  {
    question: "Who is Scabbers the rat? ",
    answer: "Peter Pettigrew",
  },

  {
    question: "What makes a person feel better after seeing a Dementor? ",
    answer: "Chocolate",
  },

  {
    question: "Who is Harry's fifth year Defence against the Dark Arts teacher? ",
    answer: "Dolores Umbridge",
  },

  {
    question: "Who is the half-blood prince? ",
    answer: "Severus Snape",
  },

  {
    question: "Who kills Sirius Black? ",
    answer: "Bellatrix Lestrange",
  },

  {
    question: "Who does Harry end up marrying? ",
    answer: "Ginny Weasley"
  }
];


for (var i=0; i<questions.length; i++)
{
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}


console.log("Yay! Your score is " + score);

// console.log("Check the scores ");
// console.log(highScores[i]);

