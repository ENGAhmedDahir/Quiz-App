const questionContainer = document.querySelector('.question-container');
const submit = document.querySelector('.btn')

const Questions = [
    {
        question: " 1. Salad la-tukado oon lahayn sujuud iyo rukuuc?",
        answer: ["Subax", "Maqrib", "Janaasad"],
        correct: "Janaasad"
    },
    
    {
        question: " 2. Wax markaad xidhan tahay, aadan arkaynin?",
        answer: ["Buumada", "Shaatiga", "Karfanta"],
        correct: "Karfanta"
    },
    {
        question: "   3.  Xayawaan sooma bisha ramadaada, sida dadka oo kale?",
        answer: ['marodiga', "Maska", 'Gela'],
        correct: 'Maska'
    },
    {
        question: " 4. Wax la-dhalo, aan waxba dhalin?",
        answer: ['Baqasha', 'ma jiro', 'doorada'],
        correct: 'Baqasha'
    },
    {
        question: " 5. Wax ilko badan leh, oon ku qaniini Karin?",
        answer: ["Saca", "Shanlada", "Ariga"],
        correct: 'Shanlada'
    },
    {
        question: "6. Sheeg wax markaad soo iibsato madow ah. markaad isticmaashana guduud ah, markaad ka-bogatana cadaan ah?",
        answer: ["Alaabta", 'Alwaax', "Dhuxusha"],
        correct: "Dhuxusha"
    },
    {
        question: "7. Sheeg shay aan meel gali Karin, hadii madaxa aan laga garaacin?",
        answer: ["Dameerka", "Musbaar", "Xoolaha"],
        correct: "Musbaar"
    },
    {
        question: " 8. Sheeg wax aan kaa tagaynin, intaad nooshahay?",
        answer: ["Quftaada", "Family", "Magaca"],
        correct: "Magaca"
    },
    {
        question: "9. Markastoon qabaysto, waan yaraadaa?",
        answer: ["Saabuunta", "Dharka", "Dadka"],
        correct: "Saabuunta"
    },
    {
        question: "10. Geedka aduunka ugu dheer, xaguu ku yaalaa?",
        answer: ["Mareykanka", "Dhulka", "Somaliya"],
        correct: "Dhulka"
    }

];

const getSubmit =()=>{
    const showQuestions = () => {

        Questions.forEach(question=>{
            
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML =`<p>${question.question}</p>`
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            question.answer.forEach(answer=>{
                const answerSpan = document.createElement('span');
                answerSpan.textContent = answer
                answerElement.appendChild(answerSpan)
                answerSpan.addEventListener('click', (e) => {
                    Array.from(answerElement.children).forEach(span => {
                        span.classList.remove('active');
                    });
                    e.target.classList.add('active');
                    // handleCorrectAnswer(e)
                   
                   
                });
               
                
          
            })
            questionContainer.appendChild(questionElement)
            questionContainer.appendChild(answerElement)
        })
        
      
    };
    let score = 0
    const handleCorrectAnswer =(e)=>{
        Questions.forEach((q, index)=>{
            const answerElements = document.querySelectorAll('.answer')[index].querySelectorAll('span');
            const answerSelect = document.querySelectorAll('.answer')[index].querySelector('.active');
            
            if(answerSelect.textContent === q.correct){
               score++
              answerSelect.classList.add('success')
            }
            
            else{
             answerSelect.classList.add('error');
             const correctAnswer = Array.from(answerElements).find(span => span.textContent === q.correct);
             if (correctAnswer) {
                 correctAnswer.classList.add('success');
             }
            }
            submit.classList.add('btndisplay')
           
        
        })
     
        alert(`Your score is ${score} out of ${Questions.length}`);
       
      
        }
        submit.addEventListener('click',handleCorrectAnswer)
                   
    
      
    
    showQuestions();
    
}
getSubmit()

