import { useState } from 'react'
import { Body } from '../components/body.jsx'


export function Home() {
        const [count, setCount] = useState(0)

    return (
        <>
            <Body></Body>
        </>
    )
}