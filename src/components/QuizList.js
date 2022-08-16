import QuizListItem from './QuizListItem';
import { useData, REQUEST_STATUS } from './hooks/useData';

function QuizList() {
    const { data, requestStatus, error } = useData();
  
    if (requestStatus === REQUEST_STATUS.LOADING)
      return <h1>loading...</h1>;
    if (requestStatus === REQUEST_STATUS.ERROR)
      throw error;
  
    return (
      <>
        {data.map((i) =>
          <QuizListItem key={i.id} data={i} />
        )}
      </>
    );
  }

  export default QuizList;