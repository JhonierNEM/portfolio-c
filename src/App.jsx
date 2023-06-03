import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Menu from './components/navs/Menu'
import Nav from './components/navs/Nav'
import { Footer } from './components/Footer'
import ScrollToTop from './components/others/ScrollToTop'

import { HomePage } from './pages/Home'
import DetailPJ from './pages/projects/DetailPJ'

function App() {
  const viewNav = useSelector((state) => state.app.viewNav)

  return (
    <div className="bg-primary min-w-[350px] overflow-hidden max-w-7xl mx-auto">
      <Nav view={viewNav} />
      <div className="w-14 h-14 fixed bottom-6 right-6 grid place-content-center p-1 rounded-full shadow z-50 md:hidden">
        <Menu view={viewNav} />
      </div>

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
