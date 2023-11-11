import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const [error, setError] = useState('')
    // const [password, setPassword] = useState(null)
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect(() =>{
        nameRef.current.focus();
    },[])


    // const handlePasswordChange = e =>{
    //     setPassword(e.target.value)
    // }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
        if(passwordRef.current.value.length < 6){
            setError('amer name hoicay anik');
        }else{
            setError('')
            console.log(passwordRef.current.value);
            
        }


        

        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input defaultValue={'abc@gmail.com'} ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" required/>
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;