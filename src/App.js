
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import {useEffect, useState} from "react";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState(null);
    let users = {name: "" , username: ""}



    useEffect(() => {
        const name = prompt("Enter your name");
        const username = prompt("Enter your username");
        users = {name, username};
        setUser(users);
        if (name  === 'John' && username === 'Johns'){
            setPage("mainPage");
        }else {
            setPage("errorPage");
        }
    }, [])


       return (
           <div className="App">
               {page === "mainPage" ? <MainPage  user={user}/> : null}
               {page === "errorPage" ? <ErrorPage user={user}/> : null}
           </div>
           )


}

export default App;
