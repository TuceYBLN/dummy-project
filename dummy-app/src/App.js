import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("")

    function onChangeHandler(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>Guten Tag</h1>
            <label>Enter your name:
                <input type="text" onChange={e => onChangeHandler(e)}/>
            </label>
            <br/>
            Dein Eingabe lautet: {name}
        </div>
    );
}

export default App;
