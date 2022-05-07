import "./scss/app.scss"
import Button from "./components/title-button" 

function App() {
  return (
    <div className="App">
      <div className="title">Crokinole</div>
      <div className="title-button-container">
        <Button name="Test"></Button>
        <Button name="but"></Button><Button name="Test"></Button>
      </div>
    </div>
  );
}

export default App;
