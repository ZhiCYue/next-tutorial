import MyHeader from '../components/header'
import '../static/style.css'

import { Button } from 'antd'

const Header = () => {
    return (
        <>
            <MyHeader />
            <div>next tutorial</div>
            <div><Button>Button</Button></div>
        </>
    )
}

export default Header
