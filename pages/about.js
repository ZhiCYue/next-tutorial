import React, { useState } from 'react'
import Link from 'next/link'

const About = () => {
    const [color, setColor] = useState('pink')
    const changeColor = () => {
        setColor(color=='pink' ? 'yellowgreen' : 'pink')
    }
    
    return (
        <>
            <div><button onClick={changeColor}>change</button></div>
            <div>about page.</div>
            <Link href='/'>
                <a>Go Home</a>
            </Link>
    
            <style jsx>
                {`
                    div { color: ${color}; }
                `}
            </style>
        </>
    )
}

export default About
