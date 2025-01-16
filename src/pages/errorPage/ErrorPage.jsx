import React, {useEffect, useState} from 'react';

function ErrorPage({user}) {
    const [users, setUser] = useState({name: " ", username: " "});
    useEffect(() => {
        setUser(user);
    }, [user]);
    return (
        <div>
            <h1>Тебе сюда нельзя {users.name} {users.username}</h1>
        </div>
    );
}

export default ErrorPage;