import { useEffect, useState } from "react"

const API = "https://json-api.uz/api/project/bilimdon/"

function useFetch(category) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function getData(url) {
        setLoading(true)
        try {
            const res = await fetch(url)
            if(!res.ok) {
                throw new Error("Qandaydir xatolik bor!")
            }
            const data = await res.json()
            setLoading(false)
            setData(data)
        } catch(error) {
            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(()=> {
        getData(API + category)
    }, [category])

  return {data, loading, error}
}

export default useFetch