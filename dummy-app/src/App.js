import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("")

    function onChangeHandler(e) {
        setName(e.target.value);
    }

    return (
        <div>

            <label>Gib deinen Namen an:
                <input type="text" onChange={e => onChangeHandler(e)}/>
            </label>

            Deine Eingabe: {name}
        </div>
    );
}

export default App;
