import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import About from './components/about'
import Customers from './components/customers'
import Solutions from './components/solutions'
import Contact from './components/contact'
import React from 'react'

const DynamicHeader = dynamic(() => import('./components/header'), {ssr: false})

export default function Home() {
  const [scrollY, setScrolly] = React.useState(0)
  const rotate = (45 + (scrollY/50))
  const upElement = (90 + (scrollY/50));
  const leftElement = (80 - (scrollY/100));

  const styleEffect3 = {
    transform: `translate(${leftElement}vw, ${upElement}vh) rotate(${rotate}deg)`
  }

  const handlerScroll = (ev) => {
    setScrolly(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);


  return (
    <main className={`${styles['home-page']} element-center`}>
      <DynamicHeader />
      <>
        <About />
        <Solutions />
        <Customers />
        <Contact />
        <div id='ghost-contact'></div>
      </>
      <div className={`${styles['bar-effect']}`} style={styleEffect3} />
      {/* <div className={`${styles['circle-effect']}`} />
      <div className={`${styles['circle-effect']}`} />
      <div className={`${styles['circle-effect']}`} />
      <div className={`${styles['circle-effect']}`} /> */}
      {/* <div className={`${styles['circle-effect']}`} />
      <div className={`${styles['circle-effect']}`} /> */}
      {/* <div className={`${styles['bar-effect']}`} style={styleEffect3} /> */}
    </main>
  )
}
