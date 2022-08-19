import QuizListItem from './QuizListItem';
import { useData, REQUEST_STATUS } from './hooks/useData';
import Loading from './Loading';

function QuizList() {
  const { data, requestStatus, error } = useData();

  if (requestStatus === REQUEST_STATUS.LOADING)
    return <Loading />;
  if (requestStatus === REQUEST_STATUS.ERROR)
    throw error;

  return (
    <div>
      <img className='mx-auto' alt='logo' src={"../images/quizLogo.png"} />
      <div className='space-y-2 flex flex-col'>
        {data.map((i) =>
          <QuizListItem key={i.id} data={i} />
        )}
        <button
          className='text-slate-50 hover:underline'
          onClick={() => { localStorage.clear(); window.location.reload(); }}>
          clear high scores
        </button>
      </div>
    </div>
  );
}

export default QuizList;