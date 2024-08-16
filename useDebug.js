import { useEffect, useState } from "react"


const useDebug = () => {
    const [debugMode, setDebugMode] = useState(false)

    useEffect(()=>{
        let url = new URL(window.location.href);
       
        let searchParams = url.searchParams;
        if(searchParams.size > 0 && (searchParams.get('debug') == 'true')) {
            setDebugMode(true)
        }
    }, [])

    const logger = (...args) => {
        if(debugMode) console.log(...args)
    }

    return logger
}

export default useDebug 