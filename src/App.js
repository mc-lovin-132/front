
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './components/detail_task/detail_tasks';
import Header from './components/header/header';
import Tasks from './components/tasks/tasks';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App bg-dark d-flex flex-column min-vh-100">
    <Header></Header>
    <Routes>
      <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Routes>
    </div>
  );
}

export default App;
