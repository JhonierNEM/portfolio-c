import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ScrollToTop from './components/others/ScrollToTop'
import Nav from './components/navs/Nav'
import { HomePage } from './pages/Home'
import DetailPJ from './pages/projects/DetailPJ'
import { Footer } from './components/Footer'
import { setInformation } from './redux/reducers'
import { getInformationByLanguage } from './utils'

function App() {
  const dispatch = useDispatch()
  const { language } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(setInformation(getInformationByLanguage(language)))
  }, [])

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
