import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("")

    function onChangeHandler(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Willkommen!!!</h1>
            <label>Enter your name:
                <input type="text" onChange={e => onChangeHandler(e)}/>
            </label>
            Deine Eingabe lautet: {name}
        </div>
    );
}

export default App;
