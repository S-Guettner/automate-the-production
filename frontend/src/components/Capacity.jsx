import { useEffect,useState } from "react"

const Capacity = ({currentcapacity,capacityvalue}) => {
    
    
    const [capacityBar,setCapacityBar] = useState("pt-[300px]")

    useEffect(() => {
        const valueBar = (300 - (currentcapacity * 3)).toString()
        const valueBarPadding = `pt-[${valueBar}px]`
        
        setCapacityBar(`${valueBarPadding}`)
        
        
    },[currentcapacity])


    
    console.log(capacityBar? "true" : "false")

    return (
        <main >
            <h1>capacity</h1>
            <p>{`${currentcapacity}`}</p>
            <h1>capacity value</h1>
            <p>{`${capacityvalue}`}</p>
            <p>{`${capacityBar}`}</p>
            <div className={`border-2 h-[300px] ${capacityBar}`}>
                <div className="bg-yellow-400 h-full">
                    
                </div>
            </div>
        </main>
     );
}
 
export default Capacity
