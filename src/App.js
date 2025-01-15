
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const name = prompt("Enter your name");
        const username = prompt("Enter your username");
        if (name  === 'John' && username === 'Johns'){
            setUser({name, username});
        }
    }, [])


        return (
            <div className="App">
                {user ? // если оно true
                    <MainPage user = {user}/>
                    :
                    " "
                }

            </div>
        );



}

export default App;
