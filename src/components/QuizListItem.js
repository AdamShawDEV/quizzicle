import { useNavigate } from 'react-router-dom';

function QuizListItem({ data }) {
  const { id, title, description, theme } = data;
  const navigate = useNavigate();
  const highScore = localStorage.getItem(`highScore${id}`);

  return (
    <div
      onClick={() => navigate(`/quiz/${id}`)}
      className={`sm:mx-auto p-10 rounded-lg text-center cursor-pointer sm:w-96 relative ${theme.badgeBgColor} ${theme.badgeHoverColor}`}>
      <h2 className='font-semibold text-2xl text-slate-300'>{title}</h2>
      <p>{description}</p>
      {highScore && <div
        className='absolute -top-2 -right-2 border-2
        font-semibold border-green-900 bg-yellow-400 p-2 rounded-xl'>High Score: {highScore}</div>}
    </div>
  );
}

export default QuizListItem;