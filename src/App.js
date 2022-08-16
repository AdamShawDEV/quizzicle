import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <main className='h-full bg-green-700 flex flex-col'>
        <Routes>
          <Route path='/' element={<QuizList />} />
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
