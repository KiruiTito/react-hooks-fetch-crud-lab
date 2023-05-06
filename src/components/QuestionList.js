import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => {
        setQuestions(questions.filter(question => question.id !== id));
      })
      .catch(error => console.log(error));
  }

  const currentQuestions = loading ? [] : questions;

  return (
    <div>
      {currentQuestions.map(question => (
        <QuestionItem key={question.id} question={question} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default QuestionList;
