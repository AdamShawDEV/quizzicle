import { useNavigate } from 'react-router-dom';

function QuizListItem({ data }) {
    const { id, title, description } = data;
    const navigate = useNavigate();
  
    return (
      <div
        onClick={() => navigate(`/quiz/${id}`)}
        className='mx-auto p-10 bg-green-900 rounded-lg text-center hover:bg-green-800'>
        <h2 className='font-semibold text-2xl text-slate-300'>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }

  export default QuizListItem;