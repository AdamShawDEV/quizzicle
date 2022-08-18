import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Question from './Question';
import { useData, REQUEST_STATUS } from './hooks/useData';
import Loading from './Loading';

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
        return <Loading />;
    if (requestStatus === REQUEST_STATUS.ERROR)
        throw error;

    const numQuestions = data.questions.length;

    // if no more question quiz is over
    if (numQuestions === currentQ - 1) {
        let message = '';

        if (score > highScore) {
            message = 'New High score!';
            localStorage.setItem(`highScore${id}`, score.toString());
        } else {
            message = "WellDone!";
        }

        return (
            <div className='flex h-full justify-center items-center'>
                <div className='mx-auto py-3 px-5 bg-green-900 rounded-lg text-center'>
                    <h1 className='font-semibold text-2xl'>{data.title}</h1>
                    <p>{message}</p>
                    <div className='text-4xl'>{score}</div>
                    <div className='hover:underline'>
                        <Link to='/'>back to quiz list.</Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-full sm:w-4/6 border-2 border-amber-600 bg-amber-800 p-2 rounded-xl'>
                <div className='flex justify-between text-2xl pb-2'>
                    <h1 className='font-bold'>{data.title}</h1>
                    <div>Points: {score}</div>
                </div>
                <Question question={data.questions[currentQ - 1]}
                    setCurrentQ={setCurrentQ}
                    setScore={setScore}
                    currentQ={currentQ} />
            </div>
        </div>
    )
}

export default Quiz;