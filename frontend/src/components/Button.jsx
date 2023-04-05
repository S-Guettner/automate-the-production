import { useEffect } from "react";

const Button = ({number,setTrigger}) => {
    
    return ( 
        <button className="block w-10 shadow-xl border-2 m-4 border-neutral-200">
            {`${number}`}
        </button>
     )
}
 
export default Button;