
var answer = '';
score = 0;
questionText = document.getElementsByTagName("span").innerHTML;
reps = 100;

//created an array of objects containing questions, options, and answers
var questions = [
{question: "Inside which HTML element do we put the JavaScript?",
options: ['a. javascript','b. scripting','c. script', 'd. js'],
answer: 'c'}, 
{question: "What is the correct JavaScript syntax to change the content of the HTML element below\? <p id= demo>This is a demonstration.</p>",
options: ['a. #demo.innerHTML = "Hello World"','b. document.getElementByName("p").innerHTML', 'c. document.getElementById("demo").innerHTML = "Hello World"', 'd. document.getElement("p").innerHTML = "Hello World"'],
answer: 'c'}, 
{question: "Where is the correct place to insert a JavaScript?",
options: ['a. Both the <head> and <body> sections are correct','b. the <head> section','c. the <body> section'],
answer: 'a'}, 
{question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
options: ['a. <script name="xxx.js">','b. <script href="xxx.js">','c. <script url(xxx.js)>', 'd. <script src="xxx.js">'],
answer: 'd'},
{question: "The external JavaScript file must contain the <script> tag.",
options: ['a. True','b. False'],
answer: 'b'}, 
{question: "How do you write 'Hello World' in an alert box?",
options: ['a. alertBox("Hello World");','b. alert("Hello World");','c. msgBox("Hello World");', 'd. msg("Hello World");'],
answer: 'b'},
{question: "How do you create a function in JavaScript?",
options: ['a. function:myFunction()','b. function myFunction()','c. function = myFunction', 'd. var function = ()'],
answer: 'b'}, 
{question: "How do you call a function named 'myFunction'?",
options: ['a. call function myFunction()','b. myFunction()','c. call myFunction()'],
answer: 'b'}, 
{question: "How do you write an IF statement in JavaScript?",
options: ['a. if i = 5','b. if i = 5 then','c. if i === 5', 'd. if (i === 5)'],
answer: 'd'}, 
{question: "How do you write an IF statement if 'i' is NOT equal to 5?",
options: ['a. if (i != 5)','b. if i =! 5 then','c. if (i <> 5)', 'd. if i <> 5'],
answer: 'a'}, 
{question: "How does a WHILE loop start?",
options: ['a. while (i <= 10)','b. while i = 10','c. while (i <=10; i++)'],
answer: 'a'}, 
{question: "How does a FOR loop start?",
options: ['a. for (i = 0; i <= 5)','b. for i = [1, 5]','c. for (i = 0; i <= 5; i++)', 'd. for (i <=5; i++)'],
answer: 'c'}, 
{question: "How can you add a comment in a JavaScript?",
options: ['a. "this is a comment','b. //this is a comment','c. <!--this is a comment-->', 'd. /* this is a comment*/'],
answer: 'b'}, 
{question: "How would you access the word 'giraffe' in this 'array = [ zebra, cheetah, giraffe, hippo]'",
options: ['a. array.["2"]','b. array[3]','c. array[2]', 'd. array.3'],
answer: 'c'}, 
{question: "What is the correct way to write a JavaScript array?",
options: ['a. colors = 1 = ("red"), 2 = ("green"), 3 = ("blue)','b. colors = ["red", "green", "blue"]','c. colors = "red","blue","green"', 'd. colors = (1:"red", 2:"green", 3:"blue"'],
answer: 'b'}, 
{question: "How do you round the number 7.25, to the nearest integer?",
options: ['a. Math.rnd(7.25)','b. Math.round(7.25)','c. Math.floor("7.25")', 'd. round(7.25)'],
answer: 'b'}, 
{question: "How do you find the number with the highest value of x and y?",
options: ['a. Math.max(x, y)','b. Math.ceil(x, y)','c. Math.top(x, y)', 'd. Math.min(x, y)'],
answer: 'a'}, 
{question: "JavaScript is the same as Java",
options: ['a. True','b. False'],
answer: 'b'}, 
{question: "Which event occurs when the user clicks on an HTML element?",
options: ['a. onChange','b. onMouseClick','c. onMouseOver', 'd. onClick'], 
answer: 'd'}, 
{question: "How do you declare a JavaScript variable?",
options: ['a. var carName','b. v carName','c. variable = carName', 'd. car varName'], answer: 'a'},
{question: "Which operator is used to assign a value to a variable?",
options: ['a. x','b. *','c. =', 'd. --'], answer: 'c'},
{question: "What will the following code return: Boolean(10 > 9)",
options: ['a. true','b. false','c. NaN', 'd. throw an error'], answer: 'a'},
];

window.onload = function() {
    newQuestion();
    countDown();
};

function countDown() {
    timer = 100
    var stopwatch = setInterval(function(){
        
        if (timer < 11) {
            document.getElementById("count").innerHTML = '<span id="count" style="color: red;">' + timer + '</span>';
        }
        if (timer <= 0) {  
            clearInterval(stopwatch); 
            endGame();
        } else {
            document.getElementById("count").innerText = timer;
        }
        timer--;
        return reps --
    }, 1000)

    if (reps === 0) {
        clearInterval(stopwatch)
    }

};


function newQuestion() {
    endGame();
    if (questions.length === 0) {
        reps = 0;
        endGame();
    }
   
    document.getElementById("answer-holder").innerHTML='';
    
    var index = Math.floor(Math.random() * questions.length);
    var question = questions[index].question;
    var options = questions[index].options;
    var answerLetter = questions[index].answer;

    questions.splice(index, 1);
  

    document.getElementById("question").innerText = question;
    
    for (var j = 0; j < options.length; j++) {
        // document.getElementById(j).innerText = options[j];

        var button = document.createElement("button");
        button.className = "answer-btn";
        button.innerText = options[j];
        document.getElementById("answer-holder").appendChild(button);
    };
    answer = answerLetter;
};

function checkAnswer(answer, userAnswer) {
  
    if (answer === userAnswer) {
        document.getElementById('results').innerHTML = '<p id="results" style="color: green;">' + "CORRECT" + '</p>';

        setTimeout(function() {
            document.getElementById('results').innerHTML = '';
        }, 3000);

        score += 2;

        newQuestion();
    } else {
        document.getElementById('results').innerHTML = '<p id="results" style="color: red;">' + "WRONG-O!" + '</p>';

        setTimeout(function() {
            document.getElementById('results').innerHTML = '';
        }, 3000);

        // score--;
        timer -= 5;
        newQuestion();
    }
};

function endGame() {
   
    
    var timer = document.getElementById("count").innerText;
    timer = parseInt(timer);
    score = parseInt(score);
    score += timer;

    var highTitle = document.createElement('div');



    var bigBox = document.getElementById('big-box');
    bigBox.className = 'scoreInput';
    // bigBox.innerHTML = '';
};

//events and buttons
var answerHolder = document.getElementById("answer-holder");

answerHolder.addEventListener('click', function() {

    var textAnswer = event.target.innerHTML;  
    var userAnswer = textAnswer[0];

    checkAnswer(answer, userAnswer);
});





 



    

