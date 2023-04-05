import { useEffect,useState } from "react";

const Button = ({number,currentworker,price,setTrigger,max_workload}) => {

    const newWorkerNumber = currentworker + number
    const newWorkerValue = newWorkerNumber * price


   

    
    const clickHandler = () => {
        if(currentworker + number <= max_workload){

            fetch(`https://automate-the-production-lemon.vercel.app/api/v1/new_worker`, {
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
                /* .then(console.log(newWorkerValue)) */
        }
        else{
            window.alert("No capacity! Sell worker!")
        }
            

    }

    return ( 
        <button onClick={clickHandler} className="block w-10 shadow-xl border-2 m-4 border-neutral-200">
            {`${number}`}
        </button>
     )
}
 
export default Button;