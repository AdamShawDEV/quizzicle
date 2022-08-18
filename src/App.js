import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';

function App() {
  return (
    <Router>
      <main className='h-full bg-black overflow-x-auto'>
        <Routes>
          <Route path='/' element={<QuizList />} />
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
