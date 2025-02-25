import React, { useRef, useState } from 'react'
import Body from './Body';
import validateEmailandPassword from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

    const [formtype, setFormType] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const handleSubmit = () => {
        if(!formtype){
            if(confirmPassword.current.value === password.current.value){
                const error = validateEmailandPassword(email.current.value, password.current.value);
                setErrorMessage(error);
            }
            else
                setErrorMessage("The passwords value don't match");
        }
        else{
            const error = validateEmailandPassword(email.current.value, password.current.value);
            setErrorMessage(error);
        }
        
        //auth logic
        if(errorMessage) return;
        if(!formtype){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then(() => {})
            .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage);
                }
            )
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value).then(() => {})
            .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage);
                }
            )
        }
    }

    const handleClick = () =>{
        setFormType(!formtype);
    }

  return (
    <div>
        <Body/>
        <div className='bg-black bg-opacity-70 z-20 absolute w-1/4 top-[20%] left-[38%] m-auto'>
            <form className='p-20' onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-3xl text-white font-bold my-3'>{(formtype) ? "Sign In" : "Sign Up" }</h1>
                {(!formtype) && <input type='text' placeholder='User Name' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>}
                <input ref={email} type='email' placeholder='Email Address' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>
                <input ref={password} type='password' placeholder='Password' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>
                {(!formtype) && <input ref={confirmPassword} type='password' placeholder='Confirm Password' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>}
                { (errorMessage) && <p className='text-red-500 font-bold'>{errorMessage}</p>}
                <button className='bg-red-700 text-white w-full my-2 p-3 rounded font-bold' onClick={handleSubmit}>{(formtype) ? "Sign In" : "Sign Up"}</button>
                <p className='text-white my-5' onClick={handleClick}>{(formtype) ? "New to Netflix? Sign up now" : "Already Registered! Sign In now"}</p>
            </form>
            
        </div>
    </div>
  )
}

export default Login;