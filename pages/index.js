import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const gotoInfo = function(name) {
  // 方法一
  // Router.push('/info?name=' + name)

  // 方法二
  Router.push({
    pathname: '/info',
    query: { name }
  })
}

const Home = () => {

  /** 路由钩子事件 */

  Router.events.on('routeChangeStart', (...args) => {
    console.log('1. routeChangeStart ---> 路由开始变化，参数：', ...args)
  })

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('2. beforeHistoryChange ---> history变化，参数：', ...args)
  })

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('3. routeChangeComplete ---> 路由变化完成，参数：', ...args)
  })

  Router.events.on('routeChangeError', (...args) => {
    console.log('4. routeChangeError ---> 路由错误，参数：', ...args)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log('hashChangeStart ---> hash开始变化，参数：', ...args)
  })

  Router.events.on('hashChangeComplete', (...args) => {
    console.log('hashChangeComplete ---> hash变化完成，参数：', ...args)
  })

  return (
    <>
      <div>welcome, this is home page.</div>
      <div><Link href="/about"><a>go to about</a></Link></div>
      <div><Link href="/info?name=Jay"><a>go to Jay</a></Link></div>
      <div><Link href="/info?name=Lenin"><a>go to Lenin</a></Link></div>
      <div>
        <button onClick={()=>{Router.push('/about')}}>about</button>
      </div>
      <div>
        <button onClick={()=>{gotoInfo('Jay')}}>Jay</button>
      </div>
      <div>
        <Link href="#menu"><a>menu hash</a></Link>
      </div>
    </>
  )
}

export default Home
