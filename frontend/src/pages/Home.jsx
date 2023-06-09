import Button from "../components/Button"
import { useState,useEffect } from "react";
import Capacity from "../components/Capacity";
import SellButton from "../components/SellButton";




const Home = () => {

    const [allData,setAllData] = useState([])
    const [renderTrigger,setRenderTrigger] = useState(false)

    useEffect( () => {
        fetch(`https://automate-the-production-lemon.vercel.app/api/v1/data`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllData(data)
            /* console.log(renderTrigger) */
        })
    },[renderTrigger])

    return ( 

        <main>
            <p className="text-center mb-4">bank balance: {`${allData.bank_balance}`} €</p>
        <section className="flex justify-between">

            <section>
                <Button 
                number={1}
                price={allData.price}
                setTrigger={setRenderTrigger}
                currentworker={allData.current_workload}
                max_workload={allData.max_workload}
                />
                <Button 
                number={5}
                price={allData.price}
                setTrigger={setRenderTrigger}
                currentworker={allData.current_workload}
                max_workload={allData.max_workload}
                />
                <Button 
                number={10}
                price={allData.price}
                setTrigger={setRenderTrigger}
                currentworker={allData.current_workload}
                max_workload={allData.max_workload}
                />
            </section>
            
            <section>
                <Capacity 
                currentcapacity={allData?.current_workload}
                maxcapacity={allData.max_workload}
                capacityvalue={allData.val_current_workload}
                />
            </section>

            <section>
                <SellButton
                capacityvalue={allData.val_current_workload}
                setTrigger={setRenderTrigger}
                balance={allData.bank_balance}
                />
            </section>


        </section>
        </main>
     )
}
 
export default Home;