import { useEffect } from "react"

const SellButton = ({setTrigger,capacityvalue,balance}) => {

    const newBankBalance = balance + capacityvalue
    
    const clickHandler = () => {
        fetch(`http://localhost:9090/api/v1/sell_workforce` , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
                (
                    {
                        "current_workload": 0,
                        "val_current_workload":0,
                        "bank_balance": newBankBalance
    
                    }
                )
        }).then(() => setTrigger(prev => !prev))

    }


    return ( 
        <button onClick={clickHandler}>Sell</button>
   )
}
 
export default SellButton
