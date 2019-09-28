import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const LazyComponent = dynamic(import('../components/one'))

const Time = () => {
    const [nowTime, setTime] = useState(Date.now())
    const changeTime = async () => {
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }

    return (
        <>
            <div>Time: {nowTime}</div>
            <LazyComponent />
            <div><button onClick={changeTime}>change</button></div>
        </>
    )
}

export default Time
