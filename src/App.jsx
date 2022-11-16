import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <div className="bg-gradient-to-r to-gray-900 via-slate-900 from-red-900 min-h-screen">
      <div className="container mx-auto px-10 py-10 sm:p-0">
        <Header />
        <div className="mt-24 sm:mt-10 sm:px-4">
          <MainContent />
        </div>
        <div className="mt-32 sm:mt-14">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
