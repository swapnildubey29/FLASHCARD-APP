import React, {useState} from 'react'
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
     <FlashcardList flashcards={flashcards} />
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