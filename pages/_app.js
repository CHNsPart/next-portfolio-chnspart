import Nav from '@/components/Nav'
import { useState, useEffect } from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const [mode, setMode] = useState('light');
  
  const modeChange = (data) => {
    if (data===true){
      setMode('dark')
    } else {
      setMode('light')
    }
  };

  useEffect(()=>{
    if(mode==="dark"){
      document.querySelector("html").style.backgroundColor = "#020721"
    } else {
      document.querySelector("html").style.backgroundColor = "#FFFFFF"
    }
  },[mode])



  return (
    <div data-theme={mode} className='h-auto w-full px-10 md:px-20 lg:px-40'>
      <Nav modeChange={modeChange} />
      <Component {...pageProps} />
    </div>
  )
}
