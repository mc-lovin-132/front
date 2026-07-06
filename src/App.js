
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditTaks from './components/edit_task/edit_tasks';
import Header from './components/header/header';
import Tasks from './components/tasks/tasks';
import Profile from './components/profile/profile';
import CreateTask from './components/create/create';

function App() {
  return (
    <div className="App bg-dark d-flex flex-column min-vh-100">
    <Header></Header>
    <Routes>
      <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      <Route path="/tasks/edit/:id" element={<EditTaks></EditTaks>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/add" element={<CreateTask></CreateTask>}></Route>
    </Routes>
    </div>
  );
}

export default App;
