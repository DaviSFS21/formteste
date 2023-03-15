import React,{useState} from "react";

export const Form = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    
    const submit = (event) => {
        event.preventDefault();
        console.log ('username: ', username);
        console.log ('password: ', password);
    }

    return(
        <div>
            <h2>Login</h2>
            <form action="" method="POST" onSubmit={submit}>
                <label>Username: <input type="text" value={username} onchange={(e) => setUsername(e.target.value)}/></label>
                <label>Password: <input type="text" value={password} onchange={(e) => setPassword(e.target.value)}/></label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};