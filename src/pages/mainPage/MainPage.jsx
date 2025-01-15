import {useEffect, useState} from 'react';


function MainPage({user}) {
    const [users, setUser] = useState({name: " ", username: " "});
    useEffect(() => {
        setUser(user);
    }, [user]);
    return (
        <div className="mainPage">
                <h1>Добро пожаловать {users.name} {users.username}  мы тебя ждали</h1>
        </div>
    );
}

export default MainPage;