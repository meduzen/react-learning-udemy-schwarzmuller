import './app.css';
import TodoItem from './TodoItem';

const App = () => (
  <div>
      <h1>My Todos</h1>
      <ul className="todos">
          <TodoItem task="Learn React"/>
          <TodoItem task="Eat lunch"/>
          <TodoItem task="Meditate"/>
          <TodoItem task="Go to the toilets"/>
      </ul>
  </div>
)

export default App
