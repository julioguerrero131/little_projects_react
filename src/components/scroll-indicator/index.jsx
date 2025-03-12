import { useEffect } from "react";
import { useState } from "react"


export default function ScrollIndicator({url}){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchData(getUrl){
    try {
      setLoading(true);
      const response = await fetch(getUrl);
    } catch (error) {
      console.log(error)
      setErrorMsg(error.message)
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  

  return <div>
    
  </div>
}