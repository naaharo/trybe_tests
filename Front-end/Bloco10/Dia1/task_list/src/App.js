const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = [
  'Entender o básico de React',
  'Saber usar na prática',
  'Atualizar o GitHub e o LinkedIn',
  'Cumprir 100% dos requisitos do projeto "Sistema Solar"'
]

function App() {
  return (
    <div>
      <ul>
      { tasks.map((task) => Task(task)) }
      </ul>
    </div>
  );
}

export default App;
