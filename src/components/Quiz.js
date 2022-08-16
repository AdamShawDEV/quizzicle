import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import { useData, REQUEST_STATUS } from './hooks/useData';

function Quiz() {
    const { id } = useParams();
    const { data, requestStatus, error } = useData(id);
    const [currentQ, setCurrentQ] = useState(1);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(`highScore${id}`)) ?? 0;
        } catch {
            console.log('Unable to get high score from localStorage');
            return 0;
        }
    });

    if (requestStatus === REQUEST_STATUS.LOADING)
        return <h1>loading...</h1>;
    if (requestStatus === REQUEST_STATUS.ERROR)
        throw error;

    const numQuestions = data.questions.length;

    // if no more question quiz is over
    if (numQuestions === currentQ - 1) {
        let message = '';

        if (score > highScore) {
            message = 'Well done! New High score!';
            localStorage.setItem(`highScore${id}`, score.toString());
        } else {
            message = "WellDone!";
        }

        return <h1>{message + " " + score}</h1>;
    }


    return (
        <div className='w-4/6 mx-auto'>
            <div className='flex justify-between text-2xl'>
                <h1 className='font-bold'>{data.title}</h1>
                <div>Points: {score}</div>
            </div>
            <Question question={data.questions[currentQ - 1]}
                setCurrentQ={setCurrentQ}
                setScore={setScore} />
        </div>
    )
}

export default Quiz;