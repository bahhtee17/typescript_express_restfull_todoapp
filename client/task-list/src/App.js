import './App.css';
import { Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route element={<TaskForm />} path="/" />
                <Route element={<Tasks />} path="tasks" />
            </Routes>
        </div>
    );
}

export default App;
