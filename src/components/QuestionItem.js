function QuestionItem({ question, onDelete }) {
  const handleDelete = () => {
    const requestOptions = {
      method: 'DELETE'
    };

    fetch(`http://localhost:4000/questions/${question.id}`, requestOptions)
      .then(() => onDelete(question.id));
  };

  return (
    <div>
      <p>{question.prompt}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

function QuestionList({ questions }) {
  const [currentQuestions, setCurrentQuestions] = useState(questions);

  const handleDelete = (questionId) => {
    const updatedQuestions = currentQuestions.filter(question => question.id !== questionId);
    setCurrentQuestions(updatedQuestions);
  };

  return (
    <div>
      {currentQuestions.map(question => (
        <QuestionItem key={question.id} question={question} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default QuestionItem;
