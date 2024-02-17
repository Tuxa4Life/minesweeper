import { useState, useEffect } from "react";

const Timer = ({ hasStarted }) => {
    const [time, setTime] = useState(0)
    const increaseTime = () => setTime(prevTime => prevTime + 1)

    useEffect(() => {
        let id 
        if (hasStarted)  {
            id = setInterval(increaseTime, 1000)
        }

        return () => {
            clearInterval(id)
            setTime(0)
        }
        
    }, [hasStarted])

    return time
}

export default Timer