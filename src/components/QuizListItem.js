import { useNavigate } from 'react-router-dom';

const colors = {
  amber1: 'bg-amber-800',
  amber2: 'hover:bg-amber-900',
  teal1: 'bg-teal-800',
  teal2:  'hover:bg-teal-900',
  green1: 'bg-green-800',
  green2: 'hover:bg-green-900',
}

function QuizListItem({ data }) {
  const { id, title, description, badgeBgColor, badgeHoverColor } = data;
  const navigate = useNavigate();
  const highScore = localStorage.getItem(`highScore${id}`);

  return (
    <div
      onClick={() => navigate(`/quiz/${id}/${title}`)}
      className={`sm:mx-auto p-10 rounded-lg text-center cursor-pointer sm:w-96 relative ${colors[badgeBgColor]} ${colors[badgeHoverColor]}`}>
      <h2 className='font-semibold text-2xl text-slate-300'>{title}</h2>
      <p>{description}</p>
      {highScore && <div
        className='absolute -top-2 -right-2 border-2
        font-semibold border-green-900 bg-yellow-400 p-2 rounded-xl'>High Score: {highScore}</div>}
    </div>
  );
}

export default QuizListItem;