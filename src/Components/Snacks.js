import axios from "axios";
import { useState, useEffect } from "react";
export default function Snacks() {

    const API = process.env.REACT_APP_API_URL;

    const [snacks, setSnacks] = useState([])
    
    useEffect(() => {
        axios.get(`${API}/snacks`).then((res) => {
            setSnacks(res.data)
        }).catch((error) => console.error)
    }, [API])
    return(
        <div className="Snacks">
            
        </div>
    )
}