import Main from './main/Main'
import ContactMe from './contact/ContactMe'
import Projects from './projects/Projects'
import About from './about/About'

export function HomePage() {
  return (
    <div className="w-full">
      <Main />
      <Projects />
      <About />
      {/* <Skills /> */}
      <ContactMe />
    </div>
  )
}
