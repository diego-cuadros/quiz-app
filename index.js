function validate(){
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
        */
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

