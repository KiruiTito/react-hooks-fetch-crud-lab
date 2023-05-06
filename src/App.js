import React, { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {/* Render the QuestionList component here, passing in the questions state */}
    </div>
  );
}

export default App;
