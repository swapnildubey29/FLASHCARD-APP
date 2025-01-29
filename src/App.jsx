import React, {useState, useEffect} from 'react'
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  
  useEffect(() => {
    axios
    .get('https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple')
    .then(res => {
       setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
           answer
          ]  
        return{
            id: `${index}- ${Date.now()}`,
            question: questionItem.question,
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
       }))
    })
  }, [])

  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
      return textArea.value
  }
  
  
  return (
    <div className='container'>
     <FlashcardList flashcards={flashcards} />
     </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    options: [
      "Mars",
      "Earth",
      "Jupiter",
      "Saturn"
    ]
  },
  {
    id: 2,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain"
    ]
  },
  {
    id: 3,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    options: [
      "Ag",
      "Au",
      "Pb",
      "Fe"
    ]
  },
  {
    id: 4,
    question: "Which country is known as the Land of the Rising Sun?",
    answer: "Japan",
    options: [
      "China",
      "South Korea",
      "Japan",
      "Thailand"
    ]
  },
  {
    id: 5,
    question: "What is the smallest prime number?",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "5"
    ]
  }
];


export default App;