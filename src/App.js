import './App.css';
import StartQuiz from './components/StartQuiz';
import ShowResults from './components/ShowResults';
import { Route, Routes } from 'react-router';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<StartQuiz />} />
        <Route path='/main' element={<Main />} />
        <Route path='/results' element={<ShowResults />} />
      </Routes>
    </div>
  );
}

export default App;
