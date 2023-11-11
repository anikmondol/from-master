import { useState } from "react"

const useAk = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e =>{
        setValue(e.target.value);
    }
    // const handleChange = e =>{
    //     setValue(e.target.value);
    // }
    // // return [value, handleChange];
    return {
        value, 
        onChange
    }
}

export default useAk;