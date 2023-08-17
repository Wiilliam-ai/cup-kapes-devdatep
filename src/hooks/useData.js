import axios from "axios"
import { useState,useEffect } from "react"

const useData = (url) => {
    const [data,setData] = useState()
    const [error,setError] = useState()
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        const getApi =  async urlApi =>{
            setLoad(true)
            const URL =`${process.env.REACT_APP_URL_API}${urlApi}`;
            try {
                const {data:dataApi} = await axios(URL)
                setData(dataApi)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoad(false)
            }
        }
        getApi(url)
    },[url])

    return {
        data,
        error,
        load
    }

}

export default useData