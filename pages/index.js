import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
// import Header from './components/header'
import About from './components/about'
import Customers from './components/customers'
import Solutions from './components/solutions'
import Contact from './components/contact'

const DynamicHeader = dynamic(() => import('./components/header'), {ssr: false})

export default function Home() {
  return (
    <main className={`${styles['home-page']}`}>
      <DynamicHeader />
      <div>
        <About />
        <Solutions />
        <Customers />
        <Contact />
      </div>
    </main>
  )
}
