function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      const idx1 = Math.floor(Math.random() * array.length);
      const idx2 = Math.floor(Math.random() * array.length);
  
      const temp = array[idx1];
      array[idx1] = array[idx2];
      array[idx2] = temp;
    }
  
    return array;
  }
  
  function Question({ question, setCurrentQ, setScore }) {
  
    function onClickFunction(e) {
      const id = e.target.id;
  
      if (id === question.correctAnswer)
        setScore((curr) =>
          curr + question.points);
  
      setCurrentQ((curr) => curr + 1);
    }
  
    return (
      <div>
        <h2 className='font-semibold text-xl'>{question.question}</h2>
        <div className='space-y-2'>
          {shuffle(question.answers.map((i) =>
            <div key={i.id}
              id={i.id}
              className='border-green-900 border-2 p-2 bg-green-300 hover:bg-green-600 cursor-pointer'
              onClick={(e) => onClickFunction(e)}>{i.answer}</div>
          ))}
        </div>
      </div>
    );
  }

  export default Question;