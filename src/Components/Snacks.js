import Snack from "./Snack";

import axios from "axios";
import {useEffect, useState} from "react"
import { Card, Button } from "react-bootstrap";
import {Badge} from "react-bootstrap"
export default function Snacks() {
    
    const API = process.env.REACT_APP_API_URL;

    const [snacks, setSnacks] = useState([])
    
    useEffect(() => {
        axios.get(`${API}/snacks`).then((res) => {
            setSnacks(res.data)
        }).catch((error) => console.error)
    }, [API])
  

return( 
<div className="container">
<h3><Badge bg="primary">Snacks</Badge></h3>
{
snacks.map((snack) => {
    return <Snack key={snack.id} snack={snack}/>
    })
    
}
  </div>
);
}