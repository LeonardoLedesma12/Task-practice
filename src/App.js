import './App.css';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <div className='taskApp'>
        <div className='mainTask'>
          <h1>My Tasks</h1>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
