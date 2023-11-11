import useAk from "../../hooks/useAk";


const HookForm = () => {

    // const [name, handleNameChange]  =  useAk('anik');
    const emailState = useAk('anik')


    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form> 
        </div>
    );
};

export default HookForm;