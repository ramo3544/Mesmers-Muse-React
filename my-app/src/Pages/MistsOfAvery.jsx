import { useState } from 'react'
//import './App.css'
import { NavBar } from "../components/nav-bar.jsx";
import { Body } from "../components/band-mists-of-avery.jsx";
import { Footer } from "../components/footer.jsx";

export function MistsOfAvery() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Body></Body>
        </>
    )
}