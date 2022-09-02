import { useState } from "react"
import {useNavigate} from 'react-router-dom';
import { updateAuth } from "../stores/authStore";
import { useDispatch } from "react-redux";

export const Login = (props) => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();
    let dispatch = useDispatch();

    function login(){
        if(username === "haroune" && password === "passcode"){
            dispatch(updateAuth(true))
            navigate("/search");
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">

                <input
                className="input"
                placeholder="Username" 
                type="text" 
                value={username} 
                onChange={(event)=>{ setUsername(event.target.value)}}/>

                <input 
                className="input"
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(event)=>{ setPassword(event.target.value)}}/>

                <button className="login-btn" onClick={()=>{login()}}>Login to YUGIOH</button>

            </div>
        </div>
    )
}