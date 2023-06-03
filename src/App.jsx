import { Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/others/ScrollToTop'
import Nav from './components/navs/Nav'
import { HomePage } from './pages/Home'
import DetailPJ from './pages/projects/DetailPJ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-primary min-w-[350px] overflow-hidden max-w-7xl mx-auto shadow-xl shadow-black">
      <Nav />
      <ScrollToTop />
      <main className="min-h-[500px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<DetailPJ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
