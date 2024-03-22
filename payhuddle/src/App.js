import './App.css';
import MyComponent from 'mycomponent';

function App() {
  const text = "Click Here"
  return (
    <div className="App">
    <MyComponent 
      text={text}
      />
      </div>
  );
}

export default App;
