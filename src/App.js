import Button from "./components/UI/Button";
import './App.css'
import './Colors.css'

function PokeApp(props) {

  return (
    <div className="main-app-area">
      <h1>Find out what kind of Pokemon you are today!</h1>
      <span className="tip">To find out the character's characteristics, click on the card!</span>
      <Button/>
    </div>
  );
}

export default PokeApp;