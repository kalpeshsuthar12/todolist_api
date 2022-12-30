import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header></Header>
        <Input></Input>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
