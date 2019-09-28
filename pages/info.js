import Link from 'next/link'
import { withRouter } from 'next/router'

const Info = ({router, data})=>(
    <>
        <div>info page. {router.query.name}</div>
        <div>recieve data {data}</div>
        <Link href='/'><a>Go Home</a></Link>
    </>
)

Info.getInitialProps = async () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const res = { code: 200, message: '请求成功', data: 'hello' }
            resolve(res)
        }, 1500)
    })
}

export default withRouter(Info)
