import { ParallaxProvider } from 'react-scroll-parallax'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <ParallaxProvider>
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
      </ParallaxProvider>
    </>
  )
}

export default App
