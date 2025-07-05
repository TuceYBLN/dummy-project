import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("")

    function onChangeHandler(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Herzlich Willkommen</h1>
            <label>Gib deinen Namen an:
                <input type="text" onChange={e => onChangeHandler(e)}/>
            </label>
            Deine Eingabe: {name}
        </div>
    );
}

export default App;
