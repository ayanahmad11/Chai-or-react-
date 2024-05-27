import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData ] = useState({})
    useEffect(()=>{
                fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                .then((res)=>res.json()) // converted data into json
                .then((res)=>setData(res[currency]))
                console.log(data)
                
            },[currency])
            console.log(data)
            return data;
            // return [data,setData]/
}
export default useCurrencyInfo;

// URL - https://latest.currency-api.pages.dev/v1/currencies/usd.json
// URl- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json