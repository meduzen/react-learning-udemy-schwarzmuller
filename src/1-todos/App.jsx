import './index.css';
import TodoItem from './components/TodoItem';

const App = () => (
  <div>
      <h2>My Todos</h2>
      <ul className="todos">
          <TodoItem task="Learn React"/>
          <TodoItem task="Eat lunch"/>
          <TodoItem task="Meditate"/>
          <TodoItem task="Go to the toilets"/>
      </ul>
  </div>
)

export default App
