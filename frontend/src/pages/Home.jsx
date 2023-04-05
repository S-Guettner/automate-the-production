import Button from "../components/Button"
import { useState,useEffect } from "react";
import Capacity from "../components/Capacity";
import SellButton from "../components/SellButton";




const Home = () => {

    const [allData,setAllData] = useState([])
    const [renderTrigger,setRenderTrigger] = useState(false)

    useEffect( () => {
        fetch(`http://localhost:9090/api/v1/data`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllData(data)
        })
    },[])

    return ( 

        <main>
            <p className="text-center">bank balance</p>
        <section className="flex justify-between">

            <section>
                <Button 
                number={1}
                price={allData.price}
                setTrigger={setRenderTrigger}
                />
                <Button 
                number={5}
                price={allData.price}
                setTrigger={setRenderTrigger}
                />
                <Button 
                number={10}
                price={allData.price}
                setTrigger={setRenderTrigger}
                />
            </section>
            
            <section>
                <Capacity 
                currentcapacity={allData.current_workload}
                maxcapacity={allData.max_workload}
                />
            </section>

            <section>
                <SellButton />
            </section>


        </section>
        </main>
     )
}
 
export default Home;