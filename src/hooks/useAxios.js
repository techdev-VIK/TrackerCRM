import axios from "axios";
import { useEffect, useState } from "react"



export default function useAxios(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

   const fetchData = () => {
        setLoading(true);
        axios.get(url)
        .then((res) => setData(res.data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
   }

   useEffect(() => {
      fetchData();
   }, [url])

   return {data, loading, error, refetch: fetchData}
}
