import React from 'react'
import { Footer } from '@pmndrs/branding'

export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
        <div onClick={() => ready && setClicked(true)}>{!ready ? 'loading' : 'click to continue'}</div>
      </div>
      {/* <div link1={<a href="https://github.com/pmndrs/drei">@gottaegbert</a>} /> */}
      <Footer
        date="6.3"
        year="2021"
        link1={<a href="#">@gottaegbert</a>}
        link2={<a href="#">weibotrending</a>}
      />
    </>
  )
}
