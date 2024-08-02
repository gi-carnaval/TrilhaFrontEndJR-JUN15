import { ParallaxProvider } from 'react-scroll-parallax'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import PersonalTastesSection from './components/PersonalTastesSection'
import Motivations from './components/Motivations'

function App() {
  return (
    <>
      <ParallaxProvider>
        <div className="wrapper">
          <Header />
          <Hero />
          <PersonalTastesSection />
          <Motivations />
        </div>
      </ParallaxProvider>
    </>
  )
}

export default App
