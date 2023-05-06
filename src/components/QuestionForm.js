import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading on form submission

    const formData = new FormData(event.target); // Get the form data
    const prompt = formData.get('prompt');
    const answers = formData.getAll('answers');
    const correctIndex = formData.get('correctIndex');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, answers, correctIndex })
    };

    fetch('http://localhost:4000/questions', requestOptions)
      .then(response => response.json())
      .then(newQuestion => setQuestions([...questions, newQuestion]));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" name="prompt" />
        </label>
        <br />
        <label>
          Answers:
          <input type="text" name="answers" />
        </label>
        <br />
        <label>
          Correct Index:
          <input type="number" name="correctIndex" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <QuestionList questions={questions} />
    </div>
  );
}
