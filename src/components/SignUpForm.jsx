import { useState } from "react";

export default function SignUpForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
    
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: "batman", 
                  password: "im_batman!" 
                }) 
              })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
        }
    };    
    
    return (
    <div>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username:{' '}
                <input
                 value={userName} 
                 onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <label>
                Password:{' '}
                <input 
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button>Submit</button>
        </form>
    </div>
    ); 
};