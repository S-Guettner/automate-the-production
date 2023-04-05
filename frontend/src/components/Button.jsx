import { useEffect,useState } from "react";

const Button = ({number,currentworker,price,setTrigger}) => {

    const [newWorkerValueState,setNewWorkerValueState] = useState(0)

    const newWorkerNumber = currentworker + number
    const newWorkerValue = newWorkerNumber * price


   

    
    const clickHandler = () => {
        fetch(`http://localhost:9090/api/v1/new_worker`, {
            method: "POST",
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify
                (
                    
                    {
                        "current_workload":newWorkerNumber,
                        "val_current_workload":newWorkerValue
                        
                    }
                )
            })
            .then(() => setTrigger(prev => !prev))
            .then(console.log(newWorkerValue))
            

    }

    return ( 
        <button onClick={clickHandler} className="block w-10 shadow-xl border-2 m-4 border-neutral-200">
            {`${number}`}
        </button>
     )
}
 
export default Button;