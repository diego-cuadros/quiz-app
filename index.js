/*function validate(){
        if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
            alert("Not checked");
        }
        else{
            nextQuestion();
        } 
      

}

function nextQuestion (){
    var temp = "";

        //Quitamos la class show-active para remover la pregunta en pantalla.
        for(let question of questions){
            question.classList.remove("show-active");
        }

        
        //We get the value that we're selecting with the radio button and pass it to a temp variable          
        for(i = 0; i < selectedAnswer.length; i++) {
            if(selectedAnswer[i].checked){
                temp = selectedAnswer[i].value;
            }              
        }

                
        /*
        1-Agregamos la respuesta del usuario a un array.
        2-Agregamos el show-Active a la pregunta siguiente.
        3-aumentamos el índice de ActiveQuestion para saber qué pregunta está activa.
        */ /*
        if (activeQuestion === 0){
            userAnswers[0] = temp;
            questions[1].classList.add("show-active");
            previousBtn.style.display = "block";
            activeQuestion++;
        } else if (activeQuestion === 1){
            userAnswers[1] = temp;
            questions[2].classList.add("show-active");
            activeQuestion++;
        } else if (activeQuestion === 2){
            userAnswers[2] = temp;
            nextBtn.style.display = "none";
            previousBtn.style.display = "none";
            questions[3].classList.add("show-active");
            activeQuestion++;
            //finally we trigger the functions to validate answers and calculate the points of the user.
            validateAnswers();
            
        }
    
}
    
    

function previousQuestion(){
    //Quitamos la class show-active para remover la pregunta en pantalla.
    for(let question of questions){
        question.classList.remove("show-active");
    }
    //Agregamos el show-active para mostrar la pregunta anterior
    if (activeQuestion === 1){
        questions[0].classList.add("show-active");
        previousBtn.style.display = "none";
        activeQuestion--;
    } else if (activeQuestion === 2){
        questions[1].classList.add("show-active");
        activeQuestion--;
    }  else if (activeQuestion === 3){
        questions[2].classList.add("show-active");
        nextBtn.style.display = "block";
        activeQuestion--;
    } 
} 

function validateAnswers(){

    for (let i = 0; i < correctAnswers.length; i++){
        if (correctAnswers[i] === userAnswers[i]){
            console.log(userAnswers[i] + " es correcto");
            points++;
        }else{
            console.log(userAnswers[i] + " NO es correcto");
            

        }
    } 
    showResult.innerHTML = points;
    console.log("your score is: " + points);

}



const questions = document.getElementsByClassName('questions');
const nextBtn = document.getElementById("next-btn-id");
const previousBtn = document.getElementById("previous-btn-id");
const selectedAnswer = document.getElementsByName("option");
const showResult = document.getElementById("results-box");


const correctAnswers = [
    'Shopify',
    'All the above',
    'All the above',
];

const userAnswers = [
    '',
    '',
    ''
];


let activeQuestion = 0;
let points = 0;
-----------------------------------------------------------------------------------------------

*/

// This array contains objects that contains the questions and answers.
const questions = [
    {
        question: 'Which of the following is not a real eCommerce platform?',
        answers: [
                {text: 'Shopify', value: 'wrong'},
                {text: 'WooCommerce', value: 'wrong'},
                {text: 'ShopCommerce', value: 'correct'}, //Correct answer.  
                {text: 'BigCommerce', value: 'wrong'}
        ]
    },

    {
        question: 'If Shopify is so good, why are Shopify developers necessary?',
        answers: [
                {text: 'To save time on things like store setups and migrations', value: 'wrong'},
                {text: 'To extend the limited design options and functionalities of themes with custom code', value: 'wrong'},
                {text: 'To provide support with a deep understanding of how the platform works and what its limitations are', value: 'wrong'},  
                {text: 'All the above', value: 'correct'} //Correct answer. 
        ]
    },

    {
        question: 'Which of the following is true about Shopify developers?',
        answers: [
                {text: 'They are paid extremely well', value: 'wrong'},
                {text: 'There is a high demand for them', value: 'wrong'},
                {text: 'They need to know web development, the platform itself, and the liquid template language', value: 'wrong'},  
                {text: 'All the above', value: 'correct'} //Correct answer. 
        ]
    }

];

const userAnswers = [
    '',
    '',
    ''
];

const respuestasCorretas = ["", "",""];





function showQuestions(questionsObj, index){
    for(let i = 0; i < questionsObj.length; i++){
        if (index === i){
            //Agregamos índice de la pregunta y la pregunta
            document.getElementById("questionId").innerHTML = "Question "+ [i+1] + " of "+ questionsObj.length ;
            document.getElementById("questionElement").innerHTML = questionsObj[i].question;
            //Agregamos los valores a los radio buttons
            option1.setAttribute("value", questionsObj[index].answers[0].text);
            option2.setAttribute("value", questionsObj[index].answers[1].text);
            option3.setAttribute("value", questionsObj[index].answers[2].text);
            option4.setAttribute("value", questionsObj[index].answers[3].text);     
            //Agregamos labels a las opciones opciones
            document.getElementById("label1").textContent = questionsObj[index].answers[0].text;
            document.getElementById("label2").textContent = questionsObj[index].answers[1].text;
            document.getElementById("label3").textContent = questionsObj[index].answers[2].text;
            document.getElementById("label4").textContent = questionsObj[index].answers[3].text;
        }
    }
}


function nextQuestion (){
    //Hacemos un loop para mirar qué respuesta está seleccionada y asignarla al array de respuestas del usuario
    for (let i = 0; i < selectedAnswer.length; i++){
        if(selectedAnswer[i].checked){
            userAnswers[indexOfQuestions] = selectedAnswer[i].value;
            somethingSelected = true;
            break
        } 
    }


    if(!somethingSelected){
        errorMessage.textContent = "Select an option if you want to continue";
    } else {
        errorMessage.textContent = "";
        //Aumentamos el índice de las preguntas para ver la siguiente pregunta
        indexOfQuestions++;
        unCkeckeRadioBtn();
        showBackBtn(indexOfQuestions);

        if (indexOfQuestions === 3){
            validateAnswers(userAnswers, questions);
            questionsTag.classList.remove("show-active");
            results.classList.add("show-active");
            showResult.innerHTML = points;
            nextBtn.style.display = "none";  
            previousBtn.style.display = "none";
            restartBtn.style.display = "block";     
        }

        
        //Invocamos la función que muestra las siguientes preguntas
        showQuestions(questions, indexOfQuestions);
        console.log(indexOfQuestions);
    }
}


function previousQuestion (){
    //bajamos el índice de las preguntas para ver la siguiente pregunta anterior
    indexOfQuestions--;
    showBackBtn(indexOfQuestions);
    //Invocamos la función que muestra las siguientes preguntas
    showQuestions(questions, indexOfQuestions);

}

function showBackBtn (index){
    if (index > 0){
        previousBtn.style.display = "block";
    } else {
        previousBtn.style.display = "none";
    }
}

function unCkeckeRadioBtn(){
    for (let i = 0; i < selectedAnswer.length; i++){
        if(selectedAnswer[i].checked === true){
            selectedAnswer[i].checked = false;
        }
    }
}

function restart(){
    window.location.reload(true);
}

function validateAnswers(array1, array2) { 
    for (let i = 0; i < array2.length; i++){
        for (let j = 0; j < array2[i].answers.length; j++){
            if(array2[i].answers[j].value === "correct"){
                respuestasCorretas[i] = array2[i].answers[j].text;
            }
            
        }
    }

    for (i = 0; i < respuestasCorretas.length; i++){
        if (respuestasCorretas[i] === array1[i]){
            points++;
        }
    }    
}


const questionIndex = document.getElementById("questionId");
const questionElement = document.getElementById("questionElement");
const selectedAnswer = document.getElementsByName("options");
const questionsTag = document.getElementById('questions-tag');
const results = document.getElementById('results-tag');
const showResult = document.getElementById("results-box");
const nextBtn = document.getElementById("next-btn-id");
const previousBtn = document.getElementById("previous-btn-id");
const errorMessage = document.getElementById("error-message");
const restartBtn = document.getElementById("restart-btn-id");
restartBtn.style.display = "none";
let somethingSelected = false;


//variables for the options
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");


let points = 0;
let indexOfQuestions = 0;
showQuestions(questions, indexOfQuestions);




